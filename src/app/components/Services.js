'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: "Smart Home Automation",
    description: "Complete control of lighting, climate, security, and entertainment from a single interface.",
    icon: "🏠",
  },
  {
    title: "Home Theater Systems",
    description: "Cinema-quality audio and video experiences tailored to your space and preferences.",
    icon: "🎬",
  },
  {
    title: "Whole-House Audio",
    description: "Seamless music distribution to every room with perfect synchronization.",
    icon: "🎵",
  },
  {
    title: "Lighting Control",
    description: "Custom lighting scenes that adapt to your mood, schedule, and activities.",
    icon: "💡",
  },
  {
    title: "Security & Surveillance",
    description: "Comprehensive protection with smart monitoring and remote access.",
    icon: "🔒",
  },
  {
    title: "Network Solutions",
    description: "High-performance networking for all your connected devices.",
    icon: "🌐",
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" ref={ref} className="py-20 bg-white border-t-4 border-orange-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">Our Services & Products</h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto mb-6 rounded"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions tailored to your lifestyle and preferences.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className="border border-orange-200 bg-orange-50 p-8 rounded-xl shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl mb-5 text-orange-600">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 border-b pb-1 border-orange-200">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow hover:bg-orange-700 transition-colors"
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
