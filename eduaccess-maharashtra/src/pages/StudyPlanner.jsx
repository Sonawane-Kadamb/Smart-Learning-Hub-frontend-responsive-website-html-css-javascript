import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiPlus, FiTrash2 } from 'react-icons/fi';
import GlassCard from '../components/common/GlassCard';
import Button from '../components/common/Button';

const StudyPlanner = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const [schedule, setSchedule] = useState({
    Monday: [
      { id: 1, subject: 'Mathematics', time: '09:00 - 10:30', color: 'from-blue-500 to-cyan-500' },
      { id: 2, subject: 'Science', time: '11:00 - 12:30', color: 'from-green-500 to-emerald-500' },
      { id: 3, subject: 'English', time: '15:00 - 16:00', color: 'from-red-500 to-rose-500' },
    ],
    Tuesday: [
      { id: 4, subject: 'Marathi', time: '09:00 - 10:00', color: 'from-indigo-500 to-blue-500' },
      { id: 5, subject: 'Mathematics', time: '10:30 - 12:00', color: 'from-blue-500 to-cyan-500' },
      { id: 6, subject: 'Social Science', time: '14:00 - 15:30', color: 'from-teal-500 to-cyan-500' },
    ],
    Wednesday: [
      { id: 7, subject: 'Science', time: '09:00 - 10:30', color: 'from-green-500 to-emerald-500' },
      { id: 8, subject: 'English', time: '11:00 - 12:00', color: 'from-red-500 to-rose-500' },
    ],
    Thursday: [
      { id: 9, subject: 'Mathematics', time: '09:00 - 10:30', color: 'from-blue-500 to-cyan-500' },
      { id: 10, subject: 'Marathi', time: '14:00 - 15:00', color: 'from-indigo-500 to-blue-500' },
    ],
    Friday: [
      { id: 11, subject: 'Science', time: '09:00 - 10:30', color: 'from-green-500 to-emerald-500' },
      { id: 12, subject: 'Social Science', time: '11:00 - 12:30', color: 'from-teal-500 to-cyan-500' },
      { id: 13, subject: 'Mock Test', time: '15:00 - 16:00', color: 'from-purple-500 to-pink-500' },
    ],
    Saturday: [
      { id: 14, subject: 'Revision - All Subjects', time: '10:00 - 12:00', color: 'from-yellow-500 to-orange-500' },
      { id: 15, subject: 'Practice Problems', time: '14:00 - 16:00', color: 'from-orange-500 to-red-500' },
    ],
    Sunday: [
      { id: 16, subject: 'Mock Test Review', time: '10:00 - 11:00', color: 'from-purple-500 to-pink-500' },
    ],
  });

  const totalHours = Object.values(schedule).flat().length * 1.5; // Assuming avg 1.5 hours per session

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
              Study Planner
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Organize your study schedule and stay on track for SSC success
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-royal-blue to-deep-indigo rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-glow">
                <FiCalendar />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {Object.values(schedule).flat().length}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Study Sessions</p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-glow">
                <FiClock />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {totalHours}h
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Weekly Study Time</p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <GlassCard className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-glow">
                🎯
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                85%
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Plan Completion</p>
            </GlassCard>
          </motion.div>
        </div>

        {/* Calendar View */}
        <GlassCard className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Weekly Schedule</h3>
          
          {/* Day Selector */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  selectedDay === day
                    ? 'bg-gradient-to-r from-royal-blue to-deep-indigo text-white shadow-glow'
                    : 'bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Schedule for Selected Day */}
          <div className="space-y-3">
            {schedule[selectedDay]?.map((session, index) => (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-all group"
              >
                <div className={`w-2 h-16 bg-gradient-to-b ${session.color} rounded-full`} />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                    {session.subject}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                    <FiClock className="mr-1" />
                    {session.time}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <FiTrash2 className="w-5 h-5" />
                </motion.button>
              </motion.div>
            ))}

            {schedule[selectedDay]?.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  No study sessions planned for {selectedDay}
                </p>
              </div>
            )}

            <Button variant="secondary" className="w-full" icon={<FiPlus />}>
              Add Study Session
            </Button>
          </div>
        </GlassCard>

        {/* Calendar Grid View */}
        <GlassCard>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Full Week Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {days.map((day, dayIndex) => (
              <motion.div
                key={day}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: dayIndex * 0.05 }}
                className="space-y-2"
              >
                <h4 className="font-bold text-gray-900 dark:text-white text-center pb-2 border-b border-gray-200 dark:border-gray-700">
                  {day.substring(0, 3)}
                </h4>
                {schedule[day]?.map((session) => (
                  <div
                    key={session.id}
                    className={`p-2 rounded-lg bg-gradient-to-br ${session.color} text-white text-xs`}
                  >
                    <div className="font-semibold mb-1">{session.subject}</div>
                    <div className="opacity-90">{session.time.split(' - ')[0]}</div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default StudyPlanner;
