'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: "Smart Home Automation",
    description: "Wired & wireless solutions for complete home control",
    icon: "🏠",
  },
  {
    title: "AV Solutions",
    description: "Home theater, PA Stereo, PA System, Pro Ticker System",
    icon: "🎬",
  },
  {
    title: "Networking",
    description: "Reliable wired and wireless network infrastructure",
    icon: "🌐",
  },
  {
    title: "Security Systems",
    description: "Comprehensive protection for your property",
    icon: "🔒",
  },
  {
    title: "Lighting Solutions",
    description: "Smart and energy-efficient lighting systems",
    icon: "💡",
  },
  {
    title: "EPABX",
    description: "",
    icon: "🛠️",
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    },
  };

  return (
    <section id="services" ref={ref} className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Products & Services</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-orange-400 to-amber-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to enhance your lifestyle and security
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                y: -8,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-amber-400"></div>
              <div className="flex items-start mb-4">
                <div className="text-4xl mr-4 text-amber-500">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mt-1">{service.description}</p>
                </div>
              </div>
              <div className="mt-4">
                <button className="text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors">
                  Learn more →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          {/* <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            Explore All Services
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;