import { motion } from 'framer-motion';
import { FiTrendingUp, FiCalendar, FiTarget, FiAward } from 'react-icons/fi';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Area, AreaChart } from 'recharts';
import GlassCard from '../components/common/GlassCard';
import StatCard from '../components/common/StatCard';

const Analytics = () => {
  const monthlyProgress = [
    { month: 'Jan', hours: 45, tests: 12, score: 72 },
    { month: 'Feb', hours: 52, tests: 15, score: 76 },
    { month: 'Mar', hours: 48, tests: 14, score: 74 },
    { month: 'Apr', hours: 60, tests: 18, score: 80 },
    { month: 'May', hours: 65, tests: 20, score: 82 },
    { month: 'Jun', hours: 58, tests: 17, score: 85 },
  ];

  const subjectPerformance = [
    { subject: 'Math', score: 85, tests: 25 },
    { subject: 'Science', score: 78, tests: 22 },
    { subject: 'English', score: 88, tests: 20 },
    { subject: 'Marathi', score: 82, tests: 18 },
    { subject: 'Social', score: 75, tests: 20 },
  ];

  const timeDistribution = [
    { name: 'Mathematics', value: 30, color: '#3b82f6' },
    { name: 'Science', value: 25, color: '#10b981' },
    { name: 'English', value: 20, color: '#ef4444' },
    { name: 'Marathi', value: 15, color: '#6366f1' },
    { name: 'Social Science', value: 10, color: '#14b8a6' },
  ];

  const heatmapData = [
    { day: 'Mon', week1: 2, week2: 3, week3: 4, week4: 3 },
    { day: 'Tue', week1: 3, week2: 4, week3: 3, week4: 5 },
    { day: 'Wed', week1: 2, week2: 2, week3: 3, week4: 4 },
    { day: 'Thu', week1: 4, week2: 3, week3: 5, week4: 3 },
    { day: 'Fri', week1: 3, week2: 4, week3: 4, week4: 4 },
    { day: 'Sat', week1: 5, week2: 5, week3: 6, week4: 5 },
    { day: 'Sun', week1: 4, week2: 3, week3: 4, week4: 5 },
  ];

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
              Performance Analytics
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Detailed insights into your learning journey and progress
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <StatCard
              icon={<FiTrendingUp />}
              title="Average Score"
              value="81%"
              color="from-blue-500 to-cyan-500"
              trend={5}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <StatCard
              icon={<FiCalendar />}
              title="Study Days"
              value="127"
              color="from-green-500 to-emerald-500"
              trend={12}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <StatCard
              icon={<FiTarget />}
              title="Goals Achieved"
              value="24/30"
              color="from-purple-500 to-pink-500"
              trend={8}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <StatCard
              icon={<FiAward />}
              title="Rank Improvement"
              value="+18"
              color="from-orange-500 to-red-500"
              trend={15}
            />
          </motion.div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Monthly Progress */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <GlassCard>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Monthly Study Progress
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={monthlyProgress}>
                  <defs>
                    <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4338ca" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#4338ca" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: 'none',
                      borderRadius: '12px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                  <Area type="monotone" dataKey="hours" stroke="#4338ca" fillOpacity={1} fill="url(#colorHours)" />
                </AreaChart>
              </ResponsiveContainer>
            </GlassCard>
          </motion.div>

          {/* Subject Performance */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <GlassCard>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Subject-wise Performance
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={subjectPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                  <XAxis dataKey="subject" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: 'none',
                      borderRadius: '12px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                  <Bar dataKey="score" fill="#4338ca" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </GlassCard>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Time Distribution Pie */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <GlassCard>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Study Time Distribution
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={timeDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {timeDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </GlassCard>
          </motion.div>

          {/* Score Trend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <GlassCard>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Score Improvement Trend
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyProgress}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: 'none',
                      borderRadius: '12px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                  <Line type="monotone" dataKey="score" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </GlassCard>
          </motion.div>
        </div>

        {/* Study Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <GlassCard>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Study Activity Heatmap (Last 4 Weeks)
            </h3>
            <div className="overflow-x-auto">
              <div className="min-w-max">
                <div className="grid grid-cols-5 gap-2 mb-2">
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Day</div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400 text-center">Week 1</div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400 text-center">Week 2</div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400 text-center">Week 3</div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400 text-center">Week 4</div>
                </div>
                {heatmapData.map((row) => (
                  <div key={row.day} className="grid grid-cols-5 gap-2 mb-2">
                    <div className="text-sm font-medium text-gray-900 dark:text-white py-2">{row.day}</div>
                    {[row.week1, row.week2, row.week3, row.week4].map((hours, idx) => (
                      <div
                        key={idx}
                        className={`h-12 rounded-lg flex items-center justify-center text-white font-bold ${
                          hours >= 5 ? 'bg-green-600' :
                          hours >= 4 ? 'bg-green-500' :
                          hours >= 3 ? 'bg-yellow-500' :
                          hours >= 2 ? 'bg-orange-500' :
                          'bg-gray-300 dark:bg-gray-700'
                        }`}
                      >
                        {hours}h
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;
