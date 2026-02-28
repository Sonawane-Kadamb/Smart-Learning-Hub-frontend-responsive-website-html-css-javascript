import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiFilter, FiBookmark, FiDownload, FiPlay } from 'react-icons/fi';
import GlassCard from '../components/common/GlassCard';
import ProgressBar from '../components/common/ProgressBar';
import Button from '../components/common/Button';
import subjectsData from '../data/subjects.json';

const SubjectsPage = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('All');

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Medium': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Hard': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default: return '';
    }
  };

  const filteredChapters = selectedSubject?.chapters.filter(chapter => {
    const matchesSearch = chapter.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = difficultyFilter === 'All' || chapter.difficulty === difficultyFilter;
    return matchesSearch && matchesDifficulty;
  });

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
              SSC 10th Subjects
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore comprehensive study materials for all Maharashtra Board subjects
          </p>
        </motion.div>

        {!selectedSubject ? (
          /* Subject Cards Grid */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {subjectsData.map((subject, index) => (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard
                  className="cursor-pointer card-3d overflow-hidden relative group"
                  onClick={() => setSelectedSubject(subject)}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${subject.color} opacity-20 rounded-full -mr-16 -mt-16 group-hover:opacity-30 transition-opacity`} />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${subject.color} rounded-2xl flex items-center justify-center text-4xl shadow-glow transform group-hover:scale-110 transition-transform`}>
                        {subject.icon}
                      </div>
                      <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                        {subject.chapters.length} Chapters
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {subject.name}
                    </h3>

                    {/* Overall Progress */}
                    <div className="mb-4">
                      <ProgressBar
                        progress={Math.round(
                          subject.chapters.reduce((acc, ch) => acc + ch.progress, 0) / subject.chapters.length
                        )}
                        color={subject.color}
                      />
                    </div>

                    {/* Chapter Count by Difficulty */}
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded">
                        {subject.chapters.filter(ch => ch.difficulty === 'Easy').length} Easy
                      </span>
                      <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded">
                        {subject.chapters.filter(ch => ch.difficulty === 'Medium').length} Medium
                      </span>
                      <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded">
                        {subject.chapters.filter(ch => ch.difficulty === 'Hard').length} Hard
                      </span>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <Button className="w-full" size="sm">
                        View Chapters
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Chapter Details View */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Back Button & Subject Header */}
            <div className="mb-8">
              <Button
                variant="secondary"
                onClick={() => setSelectedSubject(null)}
                className="mb-4"
              >
                ← Back to Subjects
              </Button>

              <GlassCard className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-20 h-20 bg-gradient-to-br ${selectedSubject.color} rounded-2xl flex items-center justify-center text-5xl shadow-glow`}>
                    {selectedSubject.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedSubject.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      {selectedSubject.chapters.length} Chapters • {Math.round(
                        selectedSubject.chapters.reduce((acc, ch) => acc + ch.progress, 0) / selectedSubject.chapters.length
                      )}% Complete
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Search and Filter Bar */}
            <GlassCard className="mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search chapters..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal-blue dark:focus:ring-soft-purple transition-all"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <FiFilter className="text-gray-400" />
                  <select
                    value={difficultyFilter}
                    onChange={(e) => setDifficultyFilter(e.target.value)}
                    className="px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal-blue dark:focus:ring-soft-purple transition-all"
                  >
                    <option>All</option>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </select>
                </div>
              </div>
            </GlassCard>

            {/* Chapters Accordion */}
            <div className="space-y-4">
              <AnimatePresence>
                {filteredChapters?.map((chapter, index) => (
                  <motion.div
                    key={chapter.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <GlassCard className="card-3d">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl font-bold text-gray-300 dark:text-gray-600">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                {chapter.title}
                              </h3>
                              <div className="flex items-center gap-2">
                                <span className={`px-2 py-1 text-xs rounded ${getDifficultyColor(chapter.difficulty)}`}>
                                  {chapter.difficulty}
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  Progress: {chapter.progress}%
                                </span>
                              </div>
                            </div>
                          </div>

                          <ProgressBar
                            progress={chapter.progress}
                            color={selectedSubject.color}
                            showLabel={false}
                          />
                        </div>

                        <div className="flex items-center gap-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-royal-blue hover:text-white dark:hover:bg-soft-purple transition-all"
                            title="Watch Video"
                          >
                            <FiPlay className="w-5 h-5" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-royal-blue hover:text-white dark:hover:bg-soft-purple transition-all"
                            title="Download Notes"
                          >
                            <FiDownload className="w-5 h-5" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-yellow-500 hover:text-white transition-all"
                            title="Bookmark"
                          >
                            <FiBookmark className="w-5 h-5" />
                          </motion.button>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </AnimatePresence>

              {filteredChapters?.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    No chapters found matching your criteria
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SubjectsPage;
