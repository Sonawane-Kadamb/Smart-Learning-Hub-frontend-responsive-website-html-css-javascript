import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiClock, FiCheckCircle, FiXCircle, FiPlay, FiAward } from 'react-icons/fi';
import GlassCard from '../components/common/GlassCard';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import mockTestsData from '../data/mockTests.json';

const MockTestPage = () => {
  const [selectedTest, setSelectedTest] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isTestActive, setIsTestActive] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [testResults, setTestResults] = useState(null);

  useEffect(() => {
    let timer;
    if (isTestActive && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            handleSubmitTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTestActive, timeRemaining]);

  const startTest = (test) => {
    setSelectedTest(test);
    setTimeRemaining(test.duration * 60);
    setIsTestActive(true);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
  };

  const handleAnswerSelect = (questionId, answerIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }));
  };

  const handleSubmitTest = () => {
    setIsTestActive(false);
    
    // Calculate results
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    selectedTest.questions.forEach((question) => {
      const userAnswer = answers[question.id];
      if (userAnswer === undefined) {
        unanswered++;
      } else if (userAnswer === question.correctAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const score = Math.round((correct / selectedTest.questions.length) * 100);

    setTestResults({
      score,
      correct,
      incorrect,
      unanswered,
      total: selectedTest.questions.length,
    });
    setShowResults(true);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const currentQuestion = selectedTest?.questions[currentQuestionIndex];

  if (!selectedTest && !isTestActive) {
    return (
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-royal-blue to-deep-indigo bg-clip-text text-transparent">
                Mock Tests
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Practice with real exam-style questions and track your performance
            </p>
          </motion.div>

          {/* Test Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockTestsData.map((test, index) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full card-3d">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-royal-blue to-deep-indigo rounded-xl flex items-center justify-center text-white text-2xl shadow-glow">
                      📝
                    </div>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                      Free
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {test.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {test.subject}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400 flex items-center">
                        <FiClock className="mr-2" /> Duration
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {test.duration} mins
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Questions</span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {test.totalQuestions}
                      </span>
                    </div>
                  </div>

                  <Button
                    className="w-full"
                    onClick={() => startTest(test)}
                    icon={<FiPlay />}
                  >
                    Start Test
                  </Button>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Test Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <GlassCard className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {selectedTest.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Question {currentQuestionIndex + 1} of {selectedTest.questions.length}
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Timer */}
              <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
                timeRemaining < 60
                  ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 animate-pulse'
                  : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
              }`}>
                <FiClock className="w-5 h-5" />
                <span className="text-xl font-bold font-mono">
                  {formatTime(timeRemaining)}
                </span>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6"
        >
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestionIndex + 1) / selectedTest.questions.length) * 100}%` }}
              className="h-full bg-gradient-to-r from-royal-blue to-deep-indigo"
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <GlassCard className="mb-6">
              <div className="mb-6">
                <span className="text-sm font-semibold text-royal-blue dark:text-soft-purple mb-2 block">
                  Question {currentQuestionIndex + 1}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {currentQuestion.question}
                </h3>
              </div>

              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = answers[currentQuestion.id] === index;
                  return (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswerSelect(currentQuestion.id, index)}
                      className={`w-full p-4 rounded-xl text-left transition-all border-2 ${
                        isSelected
                          ? 'border-royal-blue dark:border-soft-purple bg-royal-blue/10 dark:bg-soft-purple/10'
                          : 'border-gray-200 dark:border-gray-700 hover:border-royal-blue/50 dark:hover:border-soft-purple/50 bg-white/50 dark:bg-gray-800/50'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                          isSelected
                            ? 'border-royal-blue dark:border-soft-purple bg-royal-blue dark:bg-soft-purple'
                            : 'border-gray-300 dark:border-gray-600'
                        }`}>
                          {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                        </div>
                        <span className="text-gray-900 dark:text-white font-medium">
                          {String.fromCharCode(65 + index)}. {option}
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <GlassCard>
          <div className="flex justify-between items-center">
            <Button
              variant="secondary"
              onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
              disabled={currentQuestionIndex === 0}
              className={currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}
            >
              ← Previous
            </Button>

            {currentQuestionIndex === selectedTest.questions.length - 1 ? (
              <Button onClick={handleSubmitTest} className="bg-green-600 hover:bg-green-700">
                Submit Test
              </Button>
            ) : (
              <Button
                onClick={() => setCurrentQuestionIndex(Math.min(selectedTest.questions.length - 1, currentQuestionIndex + 1))}
              >
                Next →
              </Button>
            )}
          </div>

          {/* Question Navigator */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Quick Navigation</p>
            <div className="flex flex-wrap gap-2">
              {selectedTest.questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestionIndex(index)}
                  className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                    currentQuestionIndex === index
                      ? 'bg-royal-blue text-white'
                      : answers[selectedTest.questions[index].id] !== undefined
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </GlassCard>

        {/* Results Modal */}
        <Modal
          isOpen={showResults}
          onClose={() => {
            setShowResults(false);
            setSelectedTest(null);
          }}
          title="Test Results"
          size="md"
        >
          {testResults && (
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className={`w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  testResults.score >= 80
                    ? 'bg-gradient-to-br from-green-400 to-emerald-500'
                    : testResults.score >= 60
                    ? 'bg-gradient-to-br from-yellow-400 to-orange-500'
                    : 'bg-gradient-to-br from-red-400 to-pink-500'
                }`}>
                <div className="text-center text-white">
                  <div className="text-4xl font-bold">{testResults.score}%</div>
                  <div className="text-sm">Score</div>
                </div>
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {testResults.score >= 80
                  ? 'Excellent Work! 🎉'
                  : testResults.score >= 60
                  ? 'Good Job! 👍'
                  : 'Keep Practicing! 💪'}
              </h3>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-xl">
                  <FiCheckCircle className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-700 dark:text-green-400">
                    {testResults.correct}
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-500">Correct</div>
                </div>

                <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-xl">
                  <FiXCircle className="w-8 h-8 text-red-600 dark:text-red-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-700 dark:text-red-400">
                    {testResults.incorrect}
                  </div>
                  <div className="text-xs text-red-600 dark:text-red-500">Incorrect</div>
                </div>

                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
                  <FiAward className="w-8 h-8 text-gray-600 dark:text-gray-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-700 dark:text-gray-400">
                    {testResults.unanswered}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-500">Skipped</div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="secondary"
                  className="flex-1"
                  onClick={() => {
                    setShowResults(false);
                    setSelectedTest(null);
                  }}
                >
                  Back to Tests
                </Button>
                <Button
                  className="flex-1"
                  onClick={() => {
                    setShowResults(false);
                    startTest(selectedTest);
                  }}
                >
                  Retry Test
                </Button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default MockTestPage;
