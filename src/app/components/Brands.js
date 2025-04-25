'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const brands = [
  { name: "Control4", logo: "/images/brands/control4.png" },
  { name: "Crestron", logo: "/images/brands/crestron.png" },
  { name: "Lutron", logo: "/images/brands/lutron.png" },
  { name: "Sonos", logo: "/images/brands/sonos.png" },
  { name: "Bose", logo: "/images/brands/bose.png" },
  { name: "Sony", logo: "/images/brands/sony.png" },
  { name: "Samsung", logo: "/images/brands/samsung.png" },
  { name: "LG", logo: "/images/brands/lg.png" },
];

const Brands = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="brands" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
            Brands We Work With
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Partnering with industry leaders to deliver exceptional quality and performance.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 items-center"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.12 }}
              className="flex justify-center items-center p-5 bg-orange-50 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-600 text-lg mb-6">
            We're certified partners with all major home automation and AV brands.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300"
          >
            View All Partnerships
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
