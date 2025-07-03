import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <motion.div 
              className="flex items-center mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img src="/logo1.png" alt="Selora" className="w-8 h-8 mr-1" />
              <span className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Selora
              </span>
            </motion.div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              You can't scale what you can't see. Transform your workforce management with AI-powered insights that help you make smarter HR decisions.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Linkedin, Github].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Product Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Product</h4>
            <ul className="space-y-3">
              <li><a href="/#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">How it Works</a></li>
              <li><a href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/demo" className="text-gray-300 hover:text-white transition-colors">Request Demo</a></li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/cookies" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Selora. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;