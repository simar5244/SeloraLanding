import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Brain, 
  Globe, 
  Zap, 
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
      details: "XGBoost + LSTM ensemble models analyze micro-interactions and growth patterns in real-time."
    },
    {
      icon: Globe,
      title: "3D Org Visualization & Simulation",
      description: "Model your organization as a dynamic system using WebGL-based force-directed graphs. Analyze structural bottlenecks, simulate attrition and hiring events, and run Monte Carlo scenarios with Bayesian updates to evaluate decision risk.",
      color: "purple",
      details: "ForceAtlas2 and D3.js algorithms power the interactive org graph. Simulation engine uses stochastic sampling (Markov Chain Monte Carlo) to forecast outcomes across workforce change variables."
    },
    {
      icon: Brain,
      title: "OrgAI: Conversational Workforce Intelligence",
      description: "Ask anything about your org. Powered by GPT-4 and RAG, OrgAI delivers live, contextual answers from your internal data—performance, planning, feedback, and more.",
      color: "purple",
      details: "Retriever-augmented transformers trained on your data, giving real-time insights for smarter decisions."
    },
    {
      icon: Zap,
      title: "Succession & Workforce Planning",
      description: "Selora’s decision analysis engine identifies top succession candidates, models utilization scenarios, and helps you balance team workloads—keeping your best people engaged and growing.",
      color: "purple",
      details: "Weighted scoring models + utilization analytics for proactive team planning and retention."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-display">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Advanced AI Architecture
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Decorative elements */}
              <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 opacity-50 group-hover:opacity-70 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeatures;