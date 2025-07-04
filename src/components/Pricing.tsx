import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: "Starter",
      monthlyPrice: "$100",
      annualPrice: "$1,000",
      description: "Perfect for individuals",
      features: [
        "1 User",
        "Email and Call Support",
        "DIY Onboarding"
      ],
      popular: false
    },
    {
      name: "Standard",
      monthlyPrice: "$200",
      annualPrice: "$2,000",
      description: "Ideal for small teams",
      features: [
        "2 Users",
        "24/7 Priority Support",
        "DIY Onboarding",
      ],
      popular: true
    },
    {
      name: "Enterprise",
      monthlyPrice: "$300",
      annualPrice: "$3,000",
      description: "For growing businesses",
      features: [
        "3 Users",
        "24/7 Priority Support",
        "Dedicated Account Manager",
        "White Glove Onboarding",
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            <span>Simple, </span>
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, straightforward pricing with no hidden fees.
          </p>
          <div className="mt-6 inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full p-1 border border-gray-200">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-medium text-sm ${billingCycle === 'monthly' ? 'bg-purple-600 text-white' : 'text-gray-600'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full font-medium text-sm ${billingCycle === 'annual' ? 'bg-purple-600 text-white' : 'text-gray-600'}`}
            >
              Annual (Save 17%)
            </button>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-2xl border-2 p-8 ${
                plan.popular 
                  ? 'border-purple-600 shadow-2xl scale-105' 
                  : 'border-gray-200 hover:border-gray-300'
              } transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: plan.popular ? 0 : -5 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star size={16} />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="flex flex-col h-full">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className={`text-5xl font-bold ${plan.popular ? 'text-purple-600' : 'text-gray-900'}`}>
                      {billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                    </span>
                    <span className="text-gray-600">
                      {billingCycle === 'monthly' ? '/month' : '/year'}
                    </span>
                    {billingCycle === 'annual' && (
                      <div className="text-sm text-gray-500 mt-1"></div>
                    )}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <motion.a
                    href="https://app.seloraa.com/company-signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3 rounded-lg font-medium transition-colors text-center ${
                      plan.popular
                        ? 'bg-purple-600 hover:bg-purple-700 text-white'
                        : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;