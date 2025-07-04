import React from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Lightbulb, Cpu, LineChart, TrendingUp, Users, ShieldCheck, Send, User } from 'lucide-react';

const OrgAI = () => {
  const features = [
    {
      icon: LineChart,
      title: "Real-time Analytics", 
      description: "Get live insights with sub-200ms response times"
    },
    {
      icon: Users,
      title: "Workforce Intelligence",
      description: "Understand team dynamics and performance metrics"
    },
    {
      icon: TrendingUp,
      title: "Performance Trends",
      description: "Track and visualize key performance indicators over time"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-white via-purple-50/20 to-blue-50/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-purple-200/50">
            <Bot className="w-5 h-5 text-indigo-600 mr-2" />
            <span className="text-indigo-600 font-semibold">Advanced AI Assistant</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-display">
            Meet{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              OrgAI
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your intelligent workforce companion powered by{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold">
              NLP and RAG
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 hover:border-purple-100 transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-purple-100/30 rounded-full group-hover:bg-purple-100/50 transition-colors duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Demo Interface */}
        <div className="lg:col-span-3 mt-12">
          <motion.div
            className="relative bg-white/90 backdrop-blur-sm rounded-3xl border border-white/50 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            {/* Window Controls */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors"></div>
              </div>
              <div className="text-xs font-mono text-gray-400 flex items-center">
                <Cpu className="w-3.5 h-3.5 mr-1 text-purple-500" />
                <span>OrgAI v2.0</span>
              </div>
            </div>
            
            {/* Chat Container */}
            <div className="p-6 space-y-6">
              {/* AI Message */}
              <div className="flex items-start space-x-3 group">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-50 px-5 py-3.5 rounded-2xl rounded-tl-sm max-w-[80%] lg:max-w-[70%]">
                  <p className="text-gray-800 text-sm leading-relaxed">
                    Hello! I'm your OrgAI assistant. How can I help you with your workforce analytics today?
                  </p>
                </div>
              </div>
              
              {/* User Message */}
              <div className="flex items-start space-x-3 justify-end">
                <div className="bg-blue-50 px-5 py-3.5 rounded-2xl rounded-tr-sm max-w-[80%] lg:max-w-[70%]">
                  <p className="text-gray-800 text-sm leading-relaxed">
                    Show me the performance trends for the sales team in Q2
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-blue-600" />
                </div>
              </div>
              
              {/* AI Response with Chart */}
              <div className="flex items-start space-x-3 group">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="space-y-4 max-w-[80%] lg:max-w-[70%]">
                  <div className="bg-gray-50 px-5 py-3.5 rounded-2xl rounded-tl-sm">
                    <p className="text-gray-800 text-sm leading-relaxed">
                      Here's the performance trend for the sales team in Q2 2023:
                    </p>
                  </div>
                  
                  {/* Chart */}
                  <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-sm font-medium text-gray-900">Sales Team Performance</h4>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        +15.2% vs Q1
                      </span>
                    </div>
                    
                    <div className="h-40 relative">
                      <svg width="100%" height="100%" viewBox="0 0 300 140" className="overflow-visible">
                        {/* Grid Lines */}
                        <line x1="0" y1="120" x2="300" y2="120" stroke="#e5e7eb" strokeWidth="1" />
                        <line x1="0" y1="90" x2="300" y2="90" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 2" />
                        <line x1="0" y1="60" x2="300" y2="60" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 2" />
                        <line x1="0" y1="30" x2="300" y2="30" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 2" />
                        
                        {/* Data Points */}
                        <path 
                          d="M25,120 L75,60 L125,90 L175,30 L225,60 L275,20" 
                          stroke="url(#lineGradient)" 
                          strokeWidth="3" 
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        
                        {/* Data Points Circles */}
                        <circle cx="25" cy="120" r="4" fill="#8b5cf6" />
                        <circle cx="75" cy="60" r="4" fill="#8b5cf6" />
                        <circle cx="125" cy="90" r="4" fill="#8b5cf6" />
                        <circle cx="175" cy="30" r="4" fill="#8b5cf6" />
                        <circle cx="225" cy="60" r="4" fill="#8b5cf6" />
                        <circle cx="275" cy="20" r="4" fill="#8b5cf6" />
                        
                        {/* X-Axis Labels */}
                        <text x="25" y="135" textAnchor="middle" className="text-xs fill-gray-500">Apr</text>
                        <text x="75" y="135" textAnchor="middle" className="text-xs fill-gray-500">May</text>
                        <text x="125" y="135" textAnchor="middle" className="text-xs fill-gray-500">Jun</text>
                        <text x="175" y="135" textAnchor="middle" className="text-xs fill-gray-500">Jul</text>
                        <text x="225" y="135" textAnchor="middle" className="text-xs fill-gray-500">Aug</text>
                        <text x="275" y="135" textAnchor="middle" className="text-xs fill-gray-500">Sep</text>
                        
                        {/* Gradient Definition */}
                        <defs>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#ec4899" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 px-5 py-3.5 rounded-2xl rounded-tl-sm">
                    <p className="text-gray-800 text-sm leading-relaxed">
                      The team shows strong growth, with a 15.2% increase in performance compared to Q1. Would you like me to break this down by region or individual contributors?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 -bottom-20 -right-20 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute -z-20 -top-10 -left-10 w-48 h-48 bg-blue-100/30 rounded-full blur-3xl opacity-70"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OrgAI;