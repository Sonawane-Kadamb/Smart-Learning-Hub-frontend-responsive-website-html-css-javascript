import { motion } from 'framer-motion';
import { FiPlay, FiClock, FiUsers, FiStar, FiCheckCircle } from 'react-icons/fi';
import GlassCard from '../components/common/GlassCard';
import ProgressBar from '../components/common/ProgressBar';
import Button from '../components/common/Button';
import coursesData from '../data/courses.json';

const CoursesPage = () => {
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
              Free Video Courses
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Expert-taught comprehensive courses covering entire SSC 10th syllabus - 100% Free!
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {coursesData.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full overflow-hidden">
                {/* Course Thumbnail */}
                <div className="relative h-48 -m-6 mb-6 overflow-hidden rounded-t-2xl">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-royal-blue text-sm font-semibold rounded-full">
                      {course.category}
                    </span>
                    <span className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
                      FREE
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex items-center">
                    👨‍🏫 {course.instructor}
                  </p>

                  {/* Course Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <FiClock className="w-5 h-5 mx-auto mb-1 text-royal-blue dark:text-soft-purple" />
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {course.duration}
                      </div>
                      <div className="text-xs text-gray-500">Duration</div>
                    </div>
                    <div className="text-center">
                      <FiPlay className="w-5 h-5 mx-auto mb-1 text-royal-blue dark:text-soft-purple" />
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {course.lessons}
                      </div>
                      <div className="text-xs text-gray-500">Lessons</div>
                    </div>
                    <div className="text-center">
                      <FiUsers className="w-5 h-5 mx-auto mb-1 text-royal-blue dark:text-soft-purple" />
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {course.enrolled.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">Students</div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(course.rating)
                              ? 'text-yellow-500 fill-current'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {course.rating}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({course.enrolled.toLocaleString()} ratings)
                    </span>
                  </div>

                  {/* Progress */}
                  {course.progress > 0 && (
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Your Progress</span>
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                          {course.progress}% Complete
                        </span>
                      </div>
                      <ProgressBar progress={course.progress} showLabel={false} />
                    </div>
                  )}

                  {/* Chapters */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Course Content</h4>
                    <div className="space-y-2">
                      {course.chapters.map((chapter) => (
                        <div
                          key={chapter.id}
                          className={`flex items-center justify-between p-3 rounded-lg ${
                            chapter.completed
                              ? 'bg-green-50 dark:bg-green-900/20'
                              : 'bg-gray-50 dark:bg-gray-800/50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {chapter.completed ? (
                              <FiCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                            ) : (
                              <FiPlay className="w-5 h-5 text-gray-400" />
                            )}
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                              {chapter.title}
                            </span>
                          </div>
                          <span className="text-xs text-gray-500">{chapter.duration}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full" icon={<FiPlay />}>
                    {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
