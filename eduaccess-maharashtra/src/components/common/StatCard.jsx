import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const StatCard = ({ icon, title, value, color = 'from-royal-blue to-deep-indigo', trend }) => {
  return (
    <GlassCard className="relative overflow-hidden">
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${color} opacity-10 rounded-full -mr-16 -mt-16`} />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-3">
          <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center text-white text-2xl shadow-glow`}>
            {icon}
          </div>
          {trend && (
            <span className={`text-sm font-semibold ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
            </span>
          )}
        </div>
        
        <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-1">{title}</h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900 dark:text-white"
        >
          {value}
        </motion.p>
      </div>
    </GlassCard>
  );
};

export default StatCard;
