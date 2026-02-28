import { motion } from 'framer-motion';
import { FiCalendar, FiDollarSign, FiAlertCircle, FiCheckCircle, FiClock } from 'react-icons/fi';
import GlassCard from '../components/common/GlassCard';
import Button from '../components/common/Button';
import scholarshipsData from '../data/scholarships.json';

const Scholarships = () => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400';
      case 'high': return 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400';
      case 'medium': return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400';
      default: return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Open': return <FiCheckCircle className="text-green-500" />;
      case 'Closing Soon': return <FiAlertCircle className="text-orange-500" />;
      case 'Upcoming': return <FiClock className="text-blue-500" />;
      default: return <FiCalendar className="text-gray-500" />;
    }
  };

  const scholarships = scholarshipsData.filter(item => item.type === 'scholarship');
  const exams = scholarshipsData.filter(item => item.type === 'exam');

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
              Scholarships & Exams
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay updated with latest scholarship opportunities and important exam dates
          </p>
        </motion.div>

        {/* Scholarships Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <FiDollarSign className="mr-2 text-green-500" />
            Available Scholarships
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scholarships.map((scholarship, index) => (
              <motion.div
                key={scholarship.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <GlassCard className="h-full relative overflow-hidden">
                  {/* Priority Badge */}
                  <div className="absolute top-6 right-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(scholarship.priority)}`}>
                      {scholarship.priority.toUpperCase()}
                    </span>
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white text-3xl shadow-glow flex-shrink-0">
                      💰
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 pr-20">
                        {scholarship.title}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <FiDollarSign className="text-green-500 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Amount</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{scholarship.amount}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FiCalendar className="text-royal-blue dark:text-soft-purple flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Deadline</p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {new Date(scholarship.deadline).toLocaleDateString('en-IN', { 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric' 
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {getStatusIcon(scholarship.status)}
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Status</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{scholarship.status}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">Eligibility:</span> {scholarship.eligibility}
                    </p>
                  </div>

                  <Button className="w-full">
                    Apply Now
                  </Button>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Exams Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <FiCalendar className="mr-2 text-royal-blue dark:text-soft-purple" />
            Important Exams & Dates
          </h2>

          <div className="space-y-4">
            {exams.map((exam, index) => (
              <motion.div
                key={exam.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <GlassCard className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 ${
                      exam.priority === 'critical' 
                        ? 'bg-gradient-to-br from-red-500 to-pink-500' 
                        : 'bg-gradient-to-br from-royal-blue to-deep-indigo'
                    } shadow-glow`}>
                      📅
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {exam.title}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getPriorityColor(exam.priority)}`}>
                          {exam.priority.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {exam.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                          <FiCalendar className="w-4 h-4" />
                          {new Date(exam.deadline).toLocaleDateString('en-IN', { 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric' 
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          {getStatusIcon(exam.status)}
                          <span className="font-medium text-gray-900 dark:text-white">{exam.status}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button variant="secondary" size="sm">
                    View Details
                  </Button>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline View */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <GlassCard>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Upcoming Timeline
            </h2>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-royal-blue to-deep-indigo" />
              
              <div className="space-y-6">
                {[...scholarships, ...exams].sort((a, b) => 
                  new Date(a.deadline) - new Date(b.deadline)
                ).map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.05 }}
                    className="relative flex items-start gap-6 pl-16"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-5 h-5 bg-gradient-to-br from-royal-blue to-deep-indigo rounded-full border-4 border-white dark:border-gray-900" />
                    
                    <div className="flex-1 bg-white/30 dark:bg-gray-800/30 p-4 rounded-xl">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {new Date(item.deadline).toLocaleDateString('en-IN', { 
                              weekday: 'long',
                              day: 'numeric', 
                              month: 'long', 
                              year: 'numeric' 
                            })}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                          item.type === 'scholarship' 
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                            : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                        }`}>
                          {item.type === 'scholarship' ? '💰 Scholarship' : '📝 Exam'}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Scholarships;
