import { motion } from 'framer-motion';
import { FiTrendingUp, FiClock, FiTarget, FiAward, FiBook, FiStar } from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line } from 'recharts';
import GlassCard from '../components/common/GlassCard';
import StatCard from '../components/common/StatCard';
import ProgressBar from '../components/common/ProgressBar';
import studentData from '../data/studentData.json';

const Dashboard = () => {
  const { profile, weeklyPerformance, subjectProgress, recentActivities, bookmarks, achievements } = studentData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-royal-blue to-deep-indigo bg-clip-text text-transparent">
              Welcome back, {profile.name.split(' ')[0]}! 👋
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Track your progress and keep learning
          </p>
        </motion.div>

        {/* Profile Card & Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
        >
          {/* Profile Card */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <GlassCard className="text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-royal-blue to-deep-indigo opacity-10 rounded-full -mr-16 -mt-16" />
              
              <div className="relative z-10">
                <div className="relative inline-block mb-4">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-700 shadow-glow"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold border-4 border-white dark:border-gray-800">
                    {profile.level}
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {profile.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{profile.class}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">{profile.school}</p>

                {/* XP Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 dark:text-gray-400">Level {profile.level}</span>
                    <span className="text-gray-600 dark:text-gray-400">Level {profile.level + 1}</span>
                  </div>
                  <ProgressBar
                    progress={(profile.xp / profile.nextLevelXp) * 100}
                    showLabel={false}
                    color="from-yellow-400 to-orange-500"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    {profile.xp} / {profile.nextLevelXp} XP
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <p className="text-2xl font-bold text-royal-blue dark:text-soft-purple">#{profile.rank}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Rank</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-orange-500">🔥 {profile.studyStreak}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Day Streak</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4 h-full">
              <StatCard
                icon={<FiClock />}
                title="Study Hours"
                value={profile.totalStudyHours}
                color="from-blue-500 to-cyan-500"
                trend={12}
              />
              <StatCard
                icon={<FiTarget />}
                title="Tests Completed"
                value="87"
                color="from-green-500 to-emerald-500"
                trend={8}
              />
              <StatCard
                icon={<FiBook />}
                title="Chapters Done"
                value="142"
                color="from-purple-500 to-pink-500"
                trend={15}
              />
              <StatCard
                icon={<FiAward />}
                title="Achievements"
                value={achievements.filter(a => a.unlocked).length}
                color="from-orange-500 to-red-500"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Weekly Performance */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <GlassCard>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <FiTrendingUp className="mr-2 text-royal-blue dark:text-soft-purple" />
                Weekly Study Hours
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={weeklyPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                  <XAxis dataKey="day" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: 'none',
                      borderRadius: '12px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                  <Bar dataKey="hours" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4338ca" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </GlassCard>
          </motion.div>

          {/* Subject Progress Radar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GlassCard>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <FiTarget className="mr-2 text-royal-blue dark:text-soft-purple" />
                Subject Performance
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <RadarChart data={subjectProgress}>
                  <PolarGrid stroke="#9ca3af" opacity={0.2} />
                  <PolarAngleAxis dataKey="subject" stroke="#9ca3af" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#9ca3af" />
                  <Radar
                    name="Progress"
                    dataKey="progress"
                    stroke="#4338ca"
                    fill="#4338ca"
                    fillOpacity={0.6}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: 'none',
                      borderRadius: '12px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </GlassCard>
          </motion.div>
        </div>

        {/* Subject Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <GlassCard>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Subject Progress Details</h3>
            <div className="space-y-4">
              {subjectProgress.map((subject, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">{subject.subject}</span>
                    <span className="text-sm font-semibold" style={{ color: subject.color }}>
                      {subject.progress}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${subject.progress}%` }}
                      transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: subject.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <GlassCard>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Recent Activities</h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      activity.type === 'test' ? 'bg-blue-100 dark:bg-blue-900/30' :
                      activity.type === 'video' ? 'bg-purple-100 dark:bg-purple-900/30' :
                      'bg-green-100 dark:bg-green-900/30'
                    }`}>
                      {activity.type === 'test' ? '📝' : activity.type === 'video' ? '🎥' : '📄'}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {activity.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</span>
                        {activity.score && (
                          <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                            Score: {activity.score}%
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <GlassCard>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <FiAward className="mr-2 text-royal-blue dark:text-soft-purple" />
                Achievements
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className={`text-center p-4 rounded-xl ${
                      achievement.unlocked
                        ? 'bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30'
                        : 'bg-gray-100 dark:bg-gray-800 opacity-50'
                    }`}
                  >
                    <div className="text-4xl mb-2 filter grayscale-0">
                      {achievement.icon}
                    </div>
                    <p className="text-xs font-semibold text-gray-900 dark:text-white">
                      {achievement.title}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Bookmarks */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Saved Bookmarks</h4>
                <div className="space-y-2">
                  {bookmarks.map((bookmark) => (
                    <div
                      key={bookmark.id}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <FiStar className="text-yellow-500" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{bookmark.title}</span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{bookmark.subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
