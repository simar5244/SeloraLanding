import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Chief People Officer",
      company: "TechFlow Inc.",
      image: "SC",
      quote: "Selora transformed how we understand our workforce. The AI predictions are incredibly accurate and have helped us reduce attrition by 40% in just 6 months."
    },
    {
      name: "Michael Rodriguez",
      role: "VP of Human Resources",
      company: "DataCorp Solutions",
      image: "MR",
      quote: "The 3D organization visualization is a game-changer. We can now see collaboration patterns and optimize team structures like never before. ROI was immediate."
    },
    {
      name: "Emily Watson",
      role: "Head of Talent",
      company: "InnovateLabs",
      image: "EW",
      quote: "OrgAI is like having a workforce consultant available 24/7. The insights it provides have revolutionized our succession planning and talent development strategies."
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const testimonial = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50/40 to-blue-50/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <motion.div 
          key={currentTestimonial}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-10 shadow-xl max-w-3xl mx-auto"
        >
          <div className="text-sm font-medium text-blue-600 mb-2">OVERHEARD:</div>
          <blockquote className="text-2xl leading-relaxed text-gray-800 mb-8 font-medium">
            "{testimonial.quote}"
          </blockquote>
          
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
              {testimonial.image}
            </div>
            <div className="text-center">
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-gray-600">{testimonial.role}</p>
              <p className="text-purple-600 font-medium">{testimonial.company}</p>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-purple-600' : 'bg-gray-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;