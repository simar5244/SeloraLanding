import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import DashboardPreview from './DashboardPreview';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-start justify-center bg-gradient-to-br from-gray-50 via-white to-purple-50/30 overflow-hidden pt-20">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.5, 1],
            x: [-50, 50, -50],
            y: [-30, 30, -30],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white/80 backdrop-blur-sm text-purple-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 border border-purple-200/50">
              <Sparkles className="w-4 h-4" />
              AI-Powered Workforce Analytics
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-display">
            <span className="text-gray-900">You can't scale</span><br />
            <motion.span 
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              what you can't see
            </motion.span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Run what-if simulations, predict attrition, balance workloads, and retain top talent. Selora lets you design a healthier, smarter organization before making a single move
          </motion.p>
          
          <motion.div 
            className="flex justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="/onboarding"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl text-lg font-semibold flex items-center gap-2 shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Dashboard Preview */}
        <div className="relative w-full max-w-[60rem] -translate-y-8 z-10 overflow-visible">
          <div className="relative">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;