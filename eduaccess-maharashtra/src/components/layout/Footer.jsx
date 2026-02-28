import { Link } from 'react-router-dom';
import { FiGithub, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-royal-blue to-deep-indigo rounded-xl flex items-center justify-center text-white text-xl font-bold">
                📚
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  EduAccess Maharashtra
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">SSC 10th Smart Learning</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md">
              Empowering Maharashtra State Board students with free, high-quality educational resources
              for SSC 10th standard excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/subjects" className="text-gray-600 dark:text-gray-400 hover:text-royal-blue dark:hover:text-soft-purple transition-colors">Subjects</Link></li>
              <li><Link to="/courses" className="text-gray-600 dark:text-gray-400 hover:text-royal-blue dark:hover:text-soft-purple transition-colors">Free Courses</Link></li>
              <li><Link to="/tests" className="text-gray-600 dark:text-gray-400 hover:text-royal-blue dark:hover:text-soft-purple transition-colors">Mock Tests</Link></li>
              <li><Link to="/dashboard" className="text-gray-600 dark:text-gray-400 hover:text-royal-blue dark:hover:text-soft-purple transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-royal-blue hover:text-white transition-all">
                <FiGithub className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-royal-blue hover:text-white transition-all">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-royal-blue hover:text-white transition-all">
                <FiMail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center">
            Made with <FiHeart className="mx-1 text-red-500" /> for Maharashtra Students © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
