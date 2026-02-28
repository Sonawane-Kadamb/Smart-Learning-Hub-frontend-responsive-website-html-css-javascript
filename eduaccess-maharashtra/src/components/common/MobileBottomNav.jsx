import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiBook, FiUser, FiTrendingUp, FiMenu } from 'react-icons/fi';
import { motion } from 'framer-motion';

const MobileBottomNav = () => {
  const location = useLocation();

  const navItems = [
    { icon: <FiHome />, label: 'Home', path: '/' },
    { icon: <FiBook />, label: 'Subjects', path: '/subjects' },
    { icon: <FiTrendingUp />, label: 'Tests', path: '/tests' },
    { icon: <FiUser />, label: 'Profile', path: '/dashboard' },
    { icon: <FiMenu />, label: 'More', path: '/planner' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 z-40">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className="relative flex flex-col items-center justify-center flex-1 py-2"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className={`relative ${
                  isActive ? 'text-royal-blue dark:text-soft-purple' : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                <div className={`text-2xl ${isActive ? 'scale-110' : ''} transition-transform`}>
                  {item.icon}
                </div>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-royal-blue dark:bg-soft-purple rounded-full"
                  />
                )}
              </motion.div>
              <span className={`text-xs mt-1 ${
                isActive ? 'text-royal-blue dark:text-soft-purple font-semibold' : 'text-gray-500 dark:text-gray-400'
              }`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileBottomNav;
