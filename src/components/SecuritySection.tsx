import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server } from 'lucide-react';

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Enterprise Encryption",
      description: "AES-256 encryption with TLS 1.3"
    },
    {
      icon: Lock,
      title: "Zero-Trust Security", 
      description: "Multi-factor auth & role-based access"
    },
    {
      icon: Eye,
      title: "Privacy by Design",
      description: "GDPR compliant data protection"
    },
    {
      icon: Server,
      title: "SOC 2 Certified",
      description: "Continuous monitoring & audits"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-purple-50/20 to-blue-50/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-display">
            Enterprise{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Security
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bank-level security with comprehensive compliance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 hover:border-purple-300/50 transition-all duration-300 text-center shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </motion.div>
              
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;