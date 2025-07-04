import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a href="/" className="flex items-center">
              <img src="/logo1.png" alt="Selora" className="w-8 h-8 mr-1" />
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Selora
              </span>
            </a>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="/how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How it works</a>
            <a href="/#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="/faq" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
            <motion.a
              href="https://app.seloraa.com/login"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-4 py-4 space-y-4">
              <a href="/#features" className="block text-gray-600 hover:text-gray-900">Features</a>
              <a href="/how-it-works" className="block text-gray-600 hover:text-gray-900">How it works</a>
              <a href="/#pricing" className="block text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="/faq" className="block text-gray-600 hover:text-gray-900">FAQ</a>
              <a href="https://app.seloraa.com/company-signup" className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center">
                Signup
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;