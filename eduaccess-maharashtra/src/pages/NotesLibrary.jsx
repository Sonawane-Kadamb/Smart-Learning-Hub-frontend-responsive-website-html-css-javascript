import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiDownload, FiEye, FiBookmark, FiFilter } from 'react-icons/fi';
import GlassCard from '../components/common/GlassCard';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';

const NotesLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [previewModal, setPreviewModal] = useState(null);

  const resources = [
    { id: 1, title: 'Quadratic Equations - Complete Notes', type: 'PDF', subject: 'Mathematics', size: '2.5 MB', views: 15420, downloads: 8930 },
    { id: 2, title: 'Gravitation Chapter Summary', type: 'PDF', subject: 'Science', size: '1.8 MB', views: 12350, downloads: 7240 },
    { id: 3, 'title': 'English Grammar Rules', type: 'PDF', subject: 'English', size: '3.2 MB', views: 18900, downloads: 11200 },
    { id: 4, title: 'Trigonometry Formula Sheet', type: 'PDF', subject: 'Mathematics', size: '0.8 MB', views: 22100, downloads: 15800 },
    { id: 5, title: 'Chemical Reactions Video Lecture', type: 'Video', subject: 'Science', size: '125 MB', views: 9800, downloads: 0 },
    { id: 6, title: 'History Timeline - Nationalism', type: 'PDF', subject: 'Social Science', size: '2.1 MB', views: 7650, downloads: 4320 },
    { id: 7, title: 'Marathi Vyakaran Notes', type: 'PDF', subject: 'Marathi', size: '1.5 MB', views: 6540, downloads: 3890 },
    { id: 8, title: 'Coordinate Geometry Solved Examples', type: 'PDF', subject: 'Mathematics', size: '2.9 MB', views: 13200, downloads: 8900 },
  ];

  const categories = ['All', 'Mathematics', 'Science', 'English', 'Marathi', 'Social Science'];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || resource.subject === selectedCategory;
    return matchesSearch && matchesCategory;
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
              Notes & Video Library
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Access comprehensive study materials, notes, and video lectures
          </p>
        </motion.div>

        {/* Search and Filter */}
        <GlassCard className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search notes, videos, PDFs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal-blue dark:focus:ring-soft-purple transition-all"
              />
            </div>

            <div className="flex items-center gap-2">
              <FiFilter className="text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-royal-blue to-deep-indigo text-white shadow-glow'
                        : 'bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <GlassCard className="h-full card-3d">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                    resource.type === 'PDF'
                      ? 'bg-red-100 dark:bg-red-900/30'
                      : 'bg-purple-100 dark:bg-purple-900/30'
                  }`}>
                    {resource.type === 'PDF' ? '📄' : '🎥'}
                  </div>
                  <span className="px-2 py-1 bg-royal-blue/10 dark:bg-soft-purple/10 text-royal-blue dark:text-soft-purple text-xs font-semibold rounded">
                    {resource.subject}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {resource.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <FiEye className="w-4 h-4" />
                    {resource.views.toLocaleString()}
                  </span>
                  {resource.type === 'PDF' && (
                    <span className="flex items-center gap-1">
                      <FiDownload className="w-4 h-4" />
                      {resource.downloads.toLocaleString()}
                    </span>
                  )}
                  <span>{resource.size}</span>
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1"
                    icon={<FiEye />}
                    onClick={() => setPreviewModal(resource)}
                  >
                    Preview
                  </Button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white dark:bg-gray-800 rounded-lg hover:bg-yellow-500 hover:text-white transition-all"
                  >
                    <FiBookmark className="w-5 h-5" />
                  </motion.button>
                  {resource.type === 'PDF' && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white dark:bg-gray-800 rounded-lg hover:bg-royal-blue hover:text-white transition-all"
                    >
                      <FiDownload className="w-5 h-5" />
                    </motion.button>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Preview Modal */}
        <Modal
          isOpen={!!previewModal}
          onClose={() => setPreviewModal(null)}
          title={previewModal?.title || ''}
          size="lg"
        >
          {previewModal && (
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-royal-blue to-deep-indigo rounded-2xl flex items-center justify-center text-6xl shadow-glow">
                {previewModal.type === 'PDF' ? '📄' : '🎥'}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {previewModal.type === 'PDF' 
                  ? 'PDF preview would be shown here in a real application'
                  : 'Video player would be embedded here in a real application'}
              </p>
              <Button icon={<FiDownload />}>
                Download {previewModal.type}
              </Button>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default NotesLibrary;
