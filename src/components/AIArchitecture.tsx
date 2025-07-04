import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Users, BarChart3, Network, Sparkles, Check } from 'lucide-react';

const AIArchitecture = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: "Talent Analytics",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      content: "Gain deep insights into your workforce with intuitive analytics that highlight key performance indicators and talent trends.",
      features: [
        "Real-time performance metrics",
        "Team capacity planning",
        "Succession readiness scoring"
      ]
    },
    {
      title: "Performance Intelligence",
      icon: <BarChart3 className="w-6 h-6 text-emerald-600" />,
      content: "Transform raw performance data into actionable insights with our advanced analytics platform.",
      features: [
        "Customizable dashboards",
        "Predictive analytics",
        "360° feedback integration"
      ]
    },
    {
      title: "Org Visualization",
      icon: <Network className="w-6 h-6 text-purple-600" />,
      content: "Visualize your organizational structure and identify key relationships and collaboration patterns.",
      features: [
        "Interactive org charts",
        "Team network analysis",
        "Collaboration mapping"
      ]
    }
  ];

  const nextCard = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-display">
            Advanced <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">AI Architecture</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade machine learning infrastructure with proprietary algorithms for workforce optimization
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Cards Container */}
          <div className="relative min-h-[400px]">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-500 ${
                  index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                initial={{ opacity: 0, x: index > currentIndex ? '50px' : '-50px' }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? '0' : (index > currentIndex ? '50px' : '-50px'),
                  zIndex: index === currentIndex ? 10 : 0
                }}
                transition={{ duration: 0.4 }}
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 rounded-lg bg-blue-50">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">{card.title}</h3>
                      <div className="flex items-center mt-1">
                        <Sparkles className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-sm text-gray-500">AI-Enhanced</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {card.content}
                  </p>
                  
                  <div className="mt-4 space-y-3">
                    {card.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button className="px-5 py-2.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                      Learn more →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-10 space-x-4">
            <button
              onClick={prevCard}
              className="p-2.5 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              aria-label="Previous card"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="flex space-x-2">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-200'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextCard}
              className="p-2.5 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              aria-label="Next card"
            >
              <ArrowRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIArchitecture;
