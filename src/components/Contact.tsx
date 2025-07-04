import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Ready to see it in <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">ACTION</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join the future of workforce planning. Get started in minutes.
          </p>
          <div className="pt-6">
            <a
              href="https://app.seloraa.com/company-signup"
              className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition-colors duration-200 group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;