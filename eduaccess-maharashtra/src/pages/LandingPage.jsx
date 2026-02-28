import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiBook, FiTrendingUp, FiUsers, FiAward, FiStar } from 'react-icons/fi';
import Button from '../components/common/Button';
import GlassCard from '../components/common/GlassCard';
import Hero3D from '../components/landing/Hero3D';

const LandingPage = () => {
  const stats = [
    { icon: <FiUsers />, value: '50,000+', label: 'Active Students', color: 'from-blue-500 to-cyan-500' },
    { icon: <FiBook />, value: '1,200+', label: 'Study Resources', color: 'from-purple-500 to-pink-500' },
    { icon: <FiTrendingUp />, value: '95%', label: 'Success Rate', color: 'from-green-500 to-emerald-500' },
    { icon: <FiAward />, value: '500+', label: 'Mock Tests', color: 'from-orange-500 to-red-500' },
  ];

  const features = [
    {
      icon: '📚',
      title: 'Complete Subject Coverage',
      description: 'All SSC 10th Maharashtra Board subjects with detailed notes and explanations',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '🎯',
      title: 'Mock Tests & Practice',
      description: 'Unlimited practice tests with instant results and detailed solutions',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: '📊',
      title: 'Performance Analytics',
      description: 'Track your progress with detailed graphs and performance insights',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: '🎓',
      title: 'Free Video Courses',
      description: 'Expert-taught video lessons covering entire syllabus for free',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: '📝',
      title: 'Study Planner',
      description: 'Organize your study schedule with our intelligent planner',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: '🏆',
      title: 'Scholarship Updates',
      description: 'Stay updated with latest scholarship and exam notifications',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  const testimonials = [
    {
      name: 'Priya Deshmukh',
      role: 'SSC 10th Student',
      image: 'https://ui-avatars.com/api/?name=Priya+Deshmukh&background=4338ca&color=fff',
      rating: 5,
      text: 'This platform helped me score 95% in my SSC exams! The mock tests are exactly like the real exam.',
    },
    {
      name: 'Rahul Patil',
      role: 'SSC 10th Student',
      image: 'https://ui-avatars.com/api/?name=Rahul+Patil&background=10b981&color=fff',
      rating: 5,
      text: 'Amazing study materials and video lectures. The performance analytics helped me focus on weak areas.',
    },
    {
      name: 'Sneha Kulkarni',
      role: 'SSC 10th Student',
      image: 'https://ui-avatars.com/api/?name=Sneha+Kulkarni&background=ef4444&color=fff',
      rating: 5,
      text: 'Best free learning platform for Maharashtra Board! Highly recommend to all SSC students.',
    },
  ];

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
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-soft-purple/30 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-subtle-cyan/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-royal-blue/10 to-deep-indigo/10 dark:from-soft-purple/20 dark:to-deep-indigo/20 rounded-full mb-6"
            >
              <span className="text-sm font-semibold text-royal-blue dark:text-soft-purple">
                🎓 Maharashtra State Board SSC 10th
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-royal-blue via-deep-indigo to-soft-purple bg-clip-text text-transparent">
                EduAccess Maharashtra
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">Smart Learning Hub</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Your complete free learning platform for SSC 10th Standard. Master every subject with 
              expert videos, practice tests, and personalized study plans.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/subjects">
                <Button size="lg" icon={<FiBook />}>
                  Explore Subjects
                </Button>
              </Link>
              <Link to="/tests">
                <Button variant="secondary" size="lg" icon={<FiTrendingUp />}>
                  Take Mock Test
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-white text-xl mx-auto mb-2 shadow-glow`}>
                    {stat.icon}
                  </div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right 3D Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-96 lg:h-[600px] relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/10 to-soft-purple/10 rounded-3xl blur-3xl" />
            <Hero3D />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <FiArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-royal-blue to-deep-indigo bg-clip-text text-transparent">
                Why Choose Us?
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to excel in your SSC 10th exams, all in one place
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlassCard className="h-full card-3d">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-4xl mb-4 shadow-glow`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-royal-blue to-deep-indigo bg-clip-text text-transparent">
                Student Success Stories
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Hear from students who aced their SSC exams with EduAccess
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlassCard className="h-full">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    "{testimonial.text}"
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-royal-blue to-deep-indigo relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join thousands of students achieving their dreams with EduAccess Maharashtra
          </p>
          <Link to="/dashboard">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-royal-blue hover:bg-gray-100"
              icon={<FiArrowRight />}
            >
              Get Started Free
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default LandingPage;
