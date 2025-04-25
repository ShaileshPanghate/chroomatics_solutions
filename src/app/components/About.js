'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" ref={ref} className="py-20 bg-white border-t-4 border-orange-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4 tracking-wide uppercase">
            About Chromatics
          </h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto mb-6 rounded"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Transforming spaces with cutting-edge technology and elegant design.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-xl overflow-hidden border-4 border-orange-200 shadow-lg">
              <img
                src="/images/about-image.jpg"
                alt="About Chromatics"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-orange-600 opacity-20"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-orange-600 mb-6 border-b-2 border-orange-300 pb-2">
              Crafting Intelligent Living Spaces Since 2010
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Chromatics is a premier home automation and AV solutions provider dedicated to
              creating seamless, intuitive, and luxurious smart environments.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With over a decade of experience, we’ve transformed hundreds of homes into 
              intelligent spaces. Our certified team blends technical innovation with elegant
              aesthetics to enhance everyday living.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-orange-50 border border-orange-200 p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-orange-600 text-4xl font-bold mb-2">10+</div>
                <h4 className="font-semibold text-gray-800 mb-1">Years Experience</h4>
                <p className="text-gray-600 text-sm">Industry-leading expertise</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-orange-50 border border-orange-200 p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-orange-600 text-4xl font-bold mb-2">500+</div>
                <h4 className="font-semibold text-gray-800 mb-1">Projects Completed</h4>
                <p className="text-gray-600 text-sm">Satisfied clients worldwide</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
