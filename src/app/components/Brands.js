'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const brands = [
  { name: "Arcam", logo: "./assets/Arcam.png" },
  { name: "ArtSound", logo: "./assets/ArtSound.png" },
  { name: "benq", logo: "./assets/benq.png" },
  { name: "Casa", logo: "./assets/Casa.svg" },
  { name: "denon", logo: "./assets/denon.png" },
  { name: "epson", logo: "./assets/epson.png" },
  { name: "focal_Utopia", logo: "./assets/focal_Utopia.png" },
  { name: "heco", logo: "./assets/heco.png" },
  { name: "lg", logo: "./assets/lg.png" },
  { name: "magnet", logo: "./assets/magnet.png" },
  { name: "Marantz", logo: "./assets/Marantz.png" },
  { name: "Polk-Audio", logo: "./assets/Polk-Audio.png" },
  { name: "heco", logo: "./assets/QED.jpg" },
  { name: "taga_Harmony", logo: "./assets/taga_Harmony.png" },
  { name: "zemote", logo: "./assets/zemote.png" },
];

const Brands = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  // Duplicate brands for seamless looping
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section id="brands" ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent font-extrabold mb-4 tracking-widest uppercase drop-shadow-lg">
            Brands We Work With
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Partnering with industry leaders to deliver exceptional quality and performance.
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden py-8">
          {/* First Marquee (Left to Right) */}
          <motion.div 
            className="flex items-center gap-8 w-max"
            animate={{ 
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 30,
                ease: "linear"
              }
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <motion.div
                key={`first-${index}`}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.3), 0 8px 10px -6px rgba(249, 115, 22, 0.2)"
                }}
                className="flex-shrink-0 px-6  py-6 flex justify-center items-center p-5 rounded-xl
                shadow-[0_0_15px_rgba(249,115,22,0.2)]
                hover:shadow-[0_0_25px_rgba(249,115,22,0.3)]
                transition-all duration-300 bg-white"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-14 object-contain max-w-[120px]"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Second Marquee (Right to Left) - Optional reverse direction */}
          {/* <motion.div 
            className="flex items-center gap-12 w-max mt-8"
            animate={{ 
              x: [-1000, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 35,
                ease: "linear"
              }
            }}
          >
            {duplicatedBrands.reverse().map((brand, index) => (
              <motion.div
                key={`second-${index}`}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 px-4 py-2"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 object-contain max-w-[120px]"
                />
              </motion.div>
            ))}
          </motion.div> */}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-600 text-lg">
            We're certified partners with all major home automation and AV brands.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;