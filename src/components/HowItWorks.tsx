import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Brain, Target, ArrowRight, Zap, Users, BarChart3 } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Database,
      title: "Data Integration & Collection",
      description: "Seamlessly integrate with your existing HR systems and collect multi-dimensional workforce data",
      details: [
        "Real-time API integration with 50+ HR platforms",
        "Behavioral signal capture across 47 performance vectors",
        "Automated data validation and quality assurance",
        "GDPR-compliant data processing pipeline"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "AI Analysis & Processing",
      description: "Our proprietary neural networks analyze patterns and generate predictive insights",
      details: [
        "12-layer deep learning architecture",
        "Ensemble learning with XGBoost and LSTM networks",
        "Real-time pattern recognition algorithms",
        "Continuous model training and optimization"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Actionable Insights & Recommendations",
      description: "Receive detailed reports, visual dashboards, and AI-powered recommendations",
      details: [
        "Interactive 3D organizational visualizations",
        "Predictive analytics with 99.994% accuracy",
        "Automated recommendation engine",
        "Real-time simulation and scenario modeling"
      ],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your HR data into actionable insights through our advanced AI pipeline
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Step Selector */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                  activeStep === index 
                    ? 'bg-white border-purple-500 shadow-lg' 
                    : 'bg-white/50 border-gray-200 hover:border-purple-300'
                }`}
                onClick={() => setActiveStep(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                    animate={activeStep === index ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`text-lg font-semibold ${
                        activeStep === index ? 'text-purple-600' : 'text-gray-900'
                      }`}>
                        {step.title}
                      </h3>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        activeStep === index 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {index + 1}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Step Details */}
          <div className="lg:sticky lg:top-8">
            <motion.div
              key={activeStep}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${steps[activeStep].color} rounded-2xl flex items-center justify-center`}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  {(() => {
                    const IconComponent = steps[activeStep].icon;
                    return <IconComponent className="w-8 h-8 text-white" />;
                  })()}
                </motion.div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-gray-600">Step {activeStep + 1} of 3</p>
                </div>
              </div>

              <div className="space-y-4">
                {steps[activeStep].details.map((detail, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{detail}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex space-x-2">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === activeStep ? 'bg-purple-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                {activeStep < steps.length - 1 && (
                  <motion.button
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium"
                    onClick={() => setActiveStep(activeStep + 1)}
                    whileHover={{ x: 5 }}
                  >
                    Next Step
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Users, label: "Organizations Served", value: "500+" },
            { icon: BarChart3, label: "Data Points Processed", value: "2.4M+" },
            { icon: Zap, label: "Predictions Made", value: "1M+" },
            { icon: Target, label: "Accuracy Rate", value: "99.994%" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-200"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                <stat.icon className="w-6 h-6 text-purple-600" />
              </motion.div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;