import { motion } from 'framer-motion';

const ProgressBar = ({ progress, color = 'from-royal-blue to-deep-indigo', showLabel = true, height = 'h-2' }) => {
  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Progress</span>
          <span className="text-sm font-semibold text-gray-900 dark:text-white">{progress}%</span>
        </div>
      )}
      <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden ${height}`}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={`${height} bg-gradient-to-r ${color} rounded-full`}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
