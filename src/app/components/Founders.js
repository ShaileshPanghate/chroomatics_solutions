'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const founders = [
  {
    name: "Prasanna Shete",
    role: "Partners",
    bio: "",
    image: "./assets/person1.png",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Hrishikesh Chaudhari",
    role: "Partners",
    bio: "",
    image: "./assets/person2.png",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

const Founders = () => {
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
    <section id="founders" ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 mb-4 tracking-widest uppercase drop-shadow-lg">
            Meet Our Founders
          </h2>

          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The visionary leaders behind Chromatics' success.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row justify-center gap-12"
        >
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md w-full transition-transform duration-300"
            >
              <div className="relative h-84 overflow-hidden">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                />
                
                <div className="absolute bottom-0 left-0 p-6">

                </div>
              </div>
              <div className="p-6">
                <div className=" space-x-4">
                  <h3 className="text-2xl font-bold text-black">{founder.name}</h3>
                  <h3 className="text-orange-900 font-bold">{founder.role}</h3>

                </div>
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-xl shadow-lg hover:bg-orange-600 transition-colors"
          >
            Meet Our Full Team
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Founders;
