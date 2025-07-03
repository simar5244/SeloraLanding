import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Chief People Officer",
      company: "TechFlow Inc.",
      image: "SC",
      rating: 5,
      quote: "Selora transformed how we understand our workforce. The AI predictions are incredibly accurate and have helped us reduce attrition by 40% in just 6 months."
    },
    {
      name: "Michael Rodriguez",
      role: "VP of Human Resources",
      company: "DataCorp Solutions",
      image: "MR",
      rating: 5,
      quote: "The 3D organization visualization is a game-changer. We can now see collaboration patterns and optimize team structures like never before. ROI was immediate."
    },
    {
      name: "Emily Watson",
      role: "Head of Talent",
      company: "InnovateLabs",
      image: "EW",
      rating: 5,
      quote: "OrgAI is like having a workforce consultant available 24/7. The insights it provides have revolutionized our succession planning and talent development strategies."
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50/40 to-blue-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-display">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how forward-thinking organizations are transforming their workforce management with{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
              Selora
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-purple-200" />
              </div>
              
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">{testimonial.image}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <blockquote className="text-gray-700 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Customer Satisfaction", value: "98%" },
            { label: "Average ROI", value: "340%" },
            { label: "Implementation Time", value: "< 1 Week" },
            { label: "Support Rating", value: "4.9/5" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;