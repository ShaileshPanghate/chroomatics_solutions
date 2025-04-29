'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const brands = [
  { name: "Marantz", logo: "./assets/Marantz.png" },
  { name: "lg", logo: "./assets/lg.png" },
  { name: "epson", logo: "./assets/Epson.png" },
  { name: "Arcam", logo: "./assets/Arcam.png" },
  { name: "ArtSound", logo: "./assets/ArtSound.png" },
  { name: "Casa", logo: "./assets/Casa.svg" },
  { name: "QED", logo: "./assets/QED.avif" },
  { name: "focal_Utopia", logo: "./assets/focal_Utopia.png" },
  { name: "heco", logo: "./assets/heco.png" },
  { name: "magnet", logo: "./assets/magnet.png" },
  { name: "Polk-Audio", logo: "./assets/Polk-Audio.png" },
  { name: "heco", logo: "./assets/QED.jpg" },
  { name: "taga_Harmony", logo: "./assets/taga_Harmony.png" },
  { name: "zemote", logo: "./assets/zemote.png" },
  { name: "monster", logo: "./assets/Monster.jpg" },
  { name: "denon", logo: "./assets/denon.png" },
  { name: "benq", logo: "./assets/benq.png" },
];

const Brands = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  // Split brands into two arrays for mobile view
  const firstHalfBrands = brands.slice(0, Math.ceil(brands.length / 2));
  const secondHalfBrands = brands.slice(Math.ceil(brands.length / 2));
  
  // Duplicate brands for seamless looping
  const duplicatedBrands = [...brands, ...brands];
  const duplicatedFirstHalf = [...firstHalfBrands, ...firstHalfBrands];
  const duplicatedSecondHalf = [...secondHalfBrands, ...secondHalfBrands];

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

        {/* Desktop View - Single Marquee */}
        <div className="hidden md:block relative w-full overflow-hidden py-8">
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
                key={`desktop-${index}`}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.3), 0 8px 10px -6px rgba(249, 115, 22, 0.2)"
                }}
                className="flex-shrink-0 px-6 py-6 flex justify-center items-center p-5 rounded-xl
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
        </div>

        {/* Mobile View - Two Rows */}
        <div className="md:hidden space-y-8">
          {/* First Row */}
          <div className="relative w-full overflow-hidden py-4">
            <motion.div 
              className="flex items-center gap-8 w-max"
              animate={{ 
                x: [0, -600],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  duration: 25,
                  ease: "linear"
                }
              }}
            >
              {duplicatedFirstHalf.map((brand, index) => (
                <motion.div
                  key={`mobile-first-${index}`}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.3), 0 8px 10px -6px rgba(249, 115, 22, 0.2)"
                  }}
                  className="flex-shrink-0 px-6 py-6 flex justify-center items-center p-5 rounded-xl
                  shadow-[0_0_15px_rgba(249,115,22,0.2)]
                  hover:shadow-[0_0_25px_rgba(249,115,22,0.3)]
                  transition-all duration-300 bg-white"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-12 object-contain max-w-[100px]"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Second Row */}
          <div className="relative w-full overflow-hidden py-4">
            <motion.div 
              className="flex items-center gap-8 w-max"
              animate={{ 
                x: [-600, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  duration: 25,
                  ease: "linear"
                }
              }}
            >
              {duplicatedSecondHalf.map((brand, index) => (
                <motion.div
                  key={`mobile-second-${index}`}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.3), 0 8px 10px -6px rgba(249, 115, 22, 0.2)"
                  }}
                  className="flex-shrink-0 px-6 py-6 flex justify-center items-center p-5 rounded-xl
                  shadow-[0_0_15px_rgba(249,115,22,0.2)]
                  hover:shadow-[0_0_25px_rgba(249,115,22,0.3)]
                  transition-all duration-300 bg-white"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-12 object-contain max-w-[100px]"
                    loading='lazy'
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
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