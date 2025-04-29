'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const services = [
  {
    title: "Smart Home Automation",
    description: "Wired & wireless solutions for complete home control",
    icon: "🏠",
    details: "Our smart home automation solutions integrate all your home systems into one easy-to-use platform. Control lighting, climate, security, entertainment, and more from your smartphone or voice assistant."
  },
  {
    title: "AV Solutions",
    description: "Home theater, PA Stereo, PA System, Pro Ticker System",
    icon: "🎬",
    details: "Transform your space with our premium audio-visual solutions. From immersive home theaters with 4K projection and Dolby Atmos sound to professional PA systems for commercial spaces."
  },
  {
    title: "Networking",
    description: "Reliable wired and wireless network infrastructure",
    icon: "🌐",
    details: "Enterprise-grade networking solutions featuring structured cabling, mesh Wi-Fi systems, network security, and remote management. Ideal for smart homes and businesses requiring robust connectivity."
  },
  {
    title: "Security Systems",
    description: "Comprehensive protection for your property",
    icon: "🔒",
    details: "24/7 monitored alarm systems, high-resolution CCTV with remote viewing, access control systems, and smart locks. All seamlessly integrated with home automation for complete security."
  },
  {
    title: "Lighting Solutions",
    description: "Smart and energy-efficient lighting systems",
    icon: "💡",
    details: "Custom lighting designs featuring dimming controls, color-changing LEDs, automated schedules, and motion sensing. Energy-efficient solutions that enhance ambiance while reducing costs."
  },
  {
    title: "EPABX",
    description: "Professional telephone systems for businesses",
    icon: "🛠️",
    details: "Scalable EPABX phone systems with voicemail, call forwarding, conferencing, and CRM integration. Available as traditional or VoIP solutions for businesses of all sizes."
  },
];

const ServiceModal = ({ service, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-start gap-4">
            <div className="flex items-start">
              <div className="text-4xl mr-4 text-amber-500">{service.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mt-6 text-gray-700 space-y-4">
            <p>{service.details}</p>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-lg shadow hover:shadow-md transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [selectedService, setSelectedService] = useState(null);

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
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
                >
                  Learn more →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Services;