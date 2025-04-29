'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: './#home' },
    { name: 'About', href: './#about' },
    { name: 'Services', href: './#services' },
    { name: 'Brands', href: './#brands' },
    { name: 'Contact US', href: './contact' },
    { name: 'Founders', href: './#founders' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-3'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo - Adjusted for mobile */}
        <Link href="./#home">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center group"
          >
            <img src='./logo.png' width={108} height={108} />
            <span className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
            </span>
            <motion.span
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              className="block h-0.5 bg-amber-500 mt-1 transition-all duration-300"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Link
                href={link.href}
                className="px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base text-gray-700 hover:text-orange-600 font-medium transition-colors relative group"
              >
                {link.name}
                <motion.span
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  className="absolute left-0 bottom-0 h-0.5 bg-amber-500 transition-all duration-300"
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button - More visible */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 rounded-lg focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-orange-600"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-orange-600"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-orange-600"
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu - Improved styling */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg overflow-hidden"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-gray-100 last:border-0"
              >
                <Link
                  href={link.href}
                  className="block px-4 py-3 text-gray-800 hover:text-orange-600 font-medium rounded-lg hover:bg-orange-50 transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;