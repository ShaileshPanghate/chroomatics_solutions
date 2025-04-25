'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  const links = [
    {
      title: "Services",
      items: [
        { name: "Home Automation", href: "#services" },
        { name: "Home Theaters", href: "#services" },
        { name: "Audio Systems", href: "#services" },
        { name: "Lighting Control", href: "#services" },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "About Us", href: "#about" },
        { name: "Our Team", href: "#founders" },
        { name: "Brands", href: "#brands" },
        { name: "Careers", href: "#" },
      ],
    },
    {
      title: "Support",
      items: [
        { name: "Contact Us", href: "#" },
        { name: "FAQs", href: "#" },
        { name: "Support Center", href: "#" },
        { name: "System Status", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-950 text-gray-300 pt-20 pb-10 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Branding & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="#home">
              <div className="flex items-center cursor-pointer mb-6">
                <span className="text-3xl font-extrabold text-orange-500 tracking-wide">Chromatics</span>
              </div>
            </Link>
            <p className="mb-6 leading-relaxed">
              Transforming homes with intelligent automation and premium audio-visual solutions.
            </p>
            <div className="flex space-x-4">
              {[
                "M24 4.557c-.883.392...",
                "M19 0h-14c-2.761...",
                "M12 2.163c3.204 0..."
              ].map((path, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -3, scale: 1.1 }}
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {links.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">
                {link.title}
              </h3>
              <ul className="space-y-3">
                {link.items.map((item, itemIndex) => (
                  <motion.li key={itemIndex} whileHover={{ x: 5 }}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-orange-400 transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">Newsletter</h3>
            <p className="mb-6 leading-relaxed">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex rounded-lg overflow-hidden shadow-lg">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 hover:bg-orange-600 transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} <span className="text-orange-500">Chromatics</span>. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item, idx) => (
              <Link key={idx} href="#">
                <span className="text-gray-500 hover:text-orange-400 transition-colors duration-200">
                  {item}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
