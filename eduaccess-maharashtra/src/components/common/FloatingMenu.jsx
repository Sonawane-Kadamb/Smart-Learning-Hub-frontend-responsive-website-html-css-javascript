import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiBook, FiFileText, FiVideo, FiMessageCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <FiBook />, label: 'Subjects', path: '/subjects', color: 'from-blue-500 to-cyan-500' },
    { icon: <FiFileText />, label: 'Notes', path: '/library', color: 'from-purple-500 to-pink-500' },
    { icon: <FiVideo />, label: 'Courses', path: '/courses', color: 'from-green-500 to-emerald-500' },
    { icon: <FiMessageCircle />, label: 'AI Help', path: '#', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-20 right-0 space-y-3"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={item.path}
                  className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-glow px-4 py-3 transition-all group"
                  onClick={() => item.path !== '#' && setIsOpen(false)}
                >
                  <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white shadow-glow`}>
                    {item.icon}
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white pr-2 whitespace-nowrap">
                    {item.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 bg-gradient-to-br from-royal-blue to-deep-indigo rounded-full flex items-center justify-center text-white shadow-glow transition-all ${
          isOpen ? 'rotate-45' : ''
        }`}
      >
        <FiPlus className="w-8 h-8" />
      </motion.button>
    </div>
  );
};

export default FloatingMenu;
