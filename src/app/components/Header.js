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
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Brands', href: '#brands' },
    { name: 'Founders', href: '#founders' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 bg-white ${isScrolled ? 'shadow-lg py-2' : 'shadow-sm py-4'
        }`}
    >

      <div className="container mx-auto px-20 flex justify-between items-center">
        <Link href="#home">
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
        <nav className="hidden md:flex space-x-2">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Link
                href={link.href}
                className="px-6 py-4 text-gray-700 hover:text-orange-600 font-medium transition-colors relative group"
              >
                <strong>
                  {link.name}
                </strong>
                <motion.span
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  className="absolute left-0 bottom-0 h-0.5 bg-amber-500 transition-all duration-300"
                />
                <span className="absolute inset-0 rounded-lg bg-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden focus:outline-none p-2 rounded-full bg-orange-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-orange-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-xl border-t border-orange-100"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-orange-50 last:border-0 pb-3 last:pb-0"
              >
                <Link
                  href={link.href}
                  className="block px-4 py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors rounded-lg hover:bg-orange-50"
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