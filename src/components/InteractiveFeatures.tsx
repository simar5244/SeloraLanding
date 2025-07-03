import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Brain, 
  Globe, 
  Zap, 
  MessageSquare, 
  BarChart3,
  Target,
  TrendingUp,
  ChevronRight
} from 'lucide-react';

const InteractiveFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Users,
      title: "Intelligent Talent Analytics",
      description: "Real-time behavioral tracking and AI-driven competency mapping across 47+ performance vectors. Selora’s Neural Performance Engine uses deep learning and gradient boosting to predict growth, identify top performers, and surface hidden potential.",
      color: "purple",
      preview: {
        title: "Employee Performance Matrix",
        stats: [
          { label: "Performance Vectors", value: "47+", color: "purple" },
          { label: "Prediction Confidence", value: "94.7%", color: "purple" },
          { label: "Update Latency", value: "<2ms", color: "purple" }
        ],
        details: "XGBoost + LSTM ensemble models analyze micro-interactions and growth patterns in real-time."
      }
    },
    {
      icon: Globe,
      title: "3D Org Visualization & Simulation",
      description: "Model your organization as a dynamic system using WebGL-based force-directed graphs. Analyze structural bottlenecks, simulate attrition and hiring events, and run Monte Carlo scenarios with Bayesian updates to evaluate decision risk.",
      color: "purple",
      preview: {
        title: "Simulation & Org Topology",
        stats: [
          { label: "Entities Rendered", value: "10,000+", color: "purple" },
          { label: "Sim Iterations", value: "100,000", color: "purple" },
          { label: "Bayesian Updates", value: "Real-Time", color: "purple" }
        ],
        details: "ForceAtlas2 and D3.js algorithms power the interactive org graph. Simulation engine uses stochastic sampling (Markov Chain Monte Carlo) to forecast outcomes across workforce change variables."
      }
    },
    {
      icon: Brain,
      title: "OrgAI: Conversational Workforce Intelligence",
      description: "Ask anything about your org. Powered by GPT-4 and RAG, OrgAI delivers live, contextual answers from your internal data—performance, planning, feedback, and more.",
      color: "purple",
      preview: {
        title: "OrgAI Assistant",
        stats: [
          { label: "Model Backbone", value: "GPT-4 + RAG", color: "purple" },
          { label: "Latency", value: "< 800ms", color: "purple" },
          { label: "Context Sources", value: "Dynamic", color: "purple" }
        ],
        details: "Retriever-augmented transformers trained on your data, giving real-time insights for smarter decisions."
      }
    },
    {
      icon: Zap,
      title: "Succession & Workforce Planning",
      description: "Selora’s decision analysis engine identifies top succession candidates, models utilization scenarios, and helps you balance team workloads—keeping your best people engaged and growing.",
      color: "purple",
      preview: {
        title: "Planning Dashboard",
        stats: [
          { label: "Criteria Modeled", value: "32+", color: "purple" },
          { label: "Succession Accuracy", value: "97.1%", color: "purple" },
          { label: "Attrition Reduction", value: "26%", color: "purple" }
        ],
        details: "Weighted scoring models + utilization analytics for proactive team planning and retention."
      }
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-gray-50/50 to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-purple-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/6 w-72 h-72 bg-blue-200/15 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-1/3 w-48 h-48 bg-pink-200/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/6 right-1/3 w-56 h-56 bg-purple-300/10 rounded-full blur-3xl"></div>
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
            <Brain className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-purple-600 font-semibold">AI-Powered Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-display">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Advanced AI Architecture
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Enterprise-grade machine learning infrastructure with{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
              proprietary algorithms
            </span>{' '}
            for workforce optimization
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Feature List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  activeFeature === index 
                    ? 'border-purple-500 bg-white shadow-lg' 
                    : 'border-gray-200 bg-white/80 hover:border-purple-200 hover:shadow-md'
                }`}
                onClick={() => setActiveFeature(index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0`}
                    animate={activeFeature === index ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-2 ${
                      activeFeature === index ? 'text-purple-600' : 'text-gray-900'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  <ChevronRight 
                    className={`w-5 h-5 transition-all duration-300 ${
                      activeFeature === index 
                        ? 'text-purple-600 rotate-90' 
                        : 'text-gray-400'
                    }`} 
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature Preview */}
          <div className="lg:sticky lg:top-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
                  <h3 className="text-xl font-semibold">
                    {features[activeFeature].preview.title}
                  </h3>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-4 mb-6">
                    {features[activeFeature].preview.stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="p-4 rounded-lg border border-gray-200 bg-gradient-to-r from-gray-50 to-purple-50/30"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">{stat.label}</span>
                          <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            {stat.value}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">Technical Implementation</h4>
                    <p className="text-sm text-purple-800 leading-relaxed">
                      {features[activeFeature].preview.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeatures;