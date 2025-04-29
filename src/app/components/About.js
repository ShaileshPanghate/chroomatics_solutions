'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <section id="about" ref={ref} className="relative py-24 bg-gradient-to-b from-orange-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-orange-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-orange-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
              About Chromatics
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Transforming spaces with cutting-edge technology and elegant designs 
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="./assets/about.jpg"
                alt="About Chromatics"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-700/30 to-transparent"></div>
            </div>
           
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-gray-800">
              Crafting Intelligent Living Spaces
            </h3>
            
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                At Chromatics, we specialize in distributing cutting-edge home automation and audio-video solutions. Based in Nagpur, we bring the world's leading brands to Central India, delivering unparalleled AV experiences.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Our easy-to-integrate systems transform homes into smart, connected environments while delivering cinema-quality entertainment - all with personalized service and technical excellence.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl border border-orange-200 shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-orange-600 text-4xl font-bold mb-2">3+</div>
                <h4 className="font-semibold text-gray-800">Years Experience</h4>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl border border-orange-200 shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-orange-600 text-4xl font-bold mb-2">150+</div>
                <h4 className="font-semibold text-gray-800">Projects Completed</h4>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mt-16"
        >
          {/* Vision Card */}
          <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-orange-700">Our Vision</h3>
            </div>
            <p className="text-gray-700">
            To be Central India's most trusted and innovative provider of home automation and audio-video solutions, enhancing lifestyles through technology, quality, and seamless experiences.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-orange-700">Our Mission</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                To deliver superior home automation and AV solutions that combine the best global brands with expert service.
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                To simplify smart living with user-friendly, reliable, and elegant technology solutions.
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                To foster long-term relationships by consistently exceeding customer expectations in quality, support, and innovation.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;