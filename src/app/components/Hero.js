'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const slides = [
  {
    id: 1,
    img: '/Back11.jpg',
    heading: 'The Next Gen Home',
    subheading: 'Premium Home Automation & Audio-Visual Solutions',
  },
  {
    id: 2,
    img: '/Back22.jpg',
    heading: 'Smart Homes, Smarter Living',
    subheading: 'Seamless control at your fingertips.',
  },
  {
    id: 3,
    img: '/Back33.jpg',
    heading: 'Luxury Meets Technology',
    subheading: 'Tailored AV experiences for every home.',
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  exit: { opacity: 0, y: 40, transition: { duration: 0.8 } },
};

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* WhatsApp Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="fixed right-5 bottom-6 z-40"
      >
        <a
          href="https://wa.me/918208060297"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </motion.div>

      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <motion.img
              key={slide.id}
              src={slide.img}
              alt="Hero Background"
              initial={{ opacity: index === current ? 1 : 0 }}
              animate={{ opacity: index === current ? 1 : 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="w-full h-full object-cover absolute inset-0"
            />
            ))}
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>

      {/* Text and Buttons */}
      <div className="container mx-auto px-6 z-20 text-center">
        <motion.div
          key={slides[current].heading}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent ">
              {slides[current].heading}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-10 tracking-wide">
            {slides[current].subheading}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 text-white font-semibold rounded-lg shadow-xl hover:brightness-110 transition-all"
            >
              Explore Solutions
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-orange-400 text-white font-semibold rounded-lg hover:bg-orange-400 hover:text-black transition-colors"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-0 right-0 flex justify-center text-white cursor-pointer"
          onClick={() =>
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          {/* You can add an arrow icon here if you want */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
