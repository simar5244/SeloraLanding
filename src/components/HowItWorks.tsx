import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, UserCheck, Users, ShieldCheck, MessageSquare, ArrowRight, Check, ChevronRight } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Building2,
      title: "Company Signup & Setup",
      description: "Create your company account and get started in minutes",
      details: [
        "Sign up with your company details and select a plan",
        "Complete secure payment processing",
        "Receive your unique company code",
        "Gain full admin access to all features"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: UserCheck,
      title: "Employee Onboarding",
      description: "Invite your team members to join your company space",
      details: [
        "Employees sign up with company code",
        "Admin approves each new team member",
        "Assign roles and permissions",
        "Team members complete their profiles"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Users,
      title: "Team & Project Setup",
      description: "Organize your team and projects efficiently",
      details: [
        "Create and assign projects to team members",
        "Only one employee needed to assign projects to the team",
        "Track project progress and contributions",
        "Centralized project documentation and resources"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: MessageSquare,
      title: "Feedback & Growth",
      description: "Foster a culture of continuous improvement",
      details: [
        "Team members provide feedback to each other",
        "Recognize and celebrate achievements",
        "Track personal and team growth over time",
        "Data-driven insights for performance improvement"
      ],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="how-it-works" className="relative z-0 py-56 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-56"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Get Started in <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">4 Easy Steps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Streamline your team's workflow with our intuitive platform designed for modern workplaces
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step Navigation */}
          <div className="lg:col-span-4 space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className={`p-5 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                    activeStep === index 
                      ? 'bg-white border-indigo-500 shadow-lg' 
                      : 'bg-white/50 border-gray-200 hover:border-indigo-300'
                  }`}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${
                      activeStep === index ? 'bg-indigo-50' : 'bg-gray-50'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        activeStep === index ? 'text-indigo-600' : 'text-gray-600'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-base font-semibold truncate ${
                          activeStep === index ? 'text-indigo-600' : 'text-gray-900'
                        }`}>
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-500 line-clamp-1">
                        {step.description}
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 flex-shrink-0 ${
                      activeStep === index ? 'text-indigo-500' : 'text-gray-400'
                    }`} />
                  </div>
                </motion.div>
              );
            })}
            
            {/* Security Badge */}
            <motion.div 
              className="mt-8 p-5 bg-white rounded-xl border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Enterprise-Grade Security</h4>
                  <p className="text-sm text-gray-500">Your data is always protected</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Step Details */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Header */}
                <div className={`p-6 md:p-8 bg-gradient-to-r ${steps[activeStep].color} text-white`}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      {(() => {
                        const Icon = steps[activeStep].icon;
                        return <Icon className="w-6 h-6" />;
                      })()}
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full mb-1">
                        Step {activeStep + 1} of {steps.length}
                      </span>
                      <h3 className="text-2xl font-bold text-white">
                        {steps[activeStep].title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <p className="text-gray-700 mb-8 text-lg">
                    {steps[activeStep].description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {steps[activeStep].details.map((detail, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-indigo-600" />
                        </div>
                        <span className="text-gray-700">{detail}</span>
                      </motion.div>
                    ))}
                  </div>

                  
                  

                  {/* Navigation */}
                  <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                    <button
                      onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                      disabled={activeStep === 0}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium ${
                        activeStep === 0
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <ArrowRight className="w-4 h-4 rotate-180" />
                      Previous
                    </button>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500">
                        Step {activeStep + 1} of {steps.length}
                      </span>
                      
                      <button
                        onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                        disabled={activeStep === steps.length - 1}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium ${
                          activeStep === steps.length - 1
                            ? 'bg-indigo-100 text-indigo-400 cursor-not-allowed'
                            : 'bg-indigo-600 text-white hover:bg-indigo-700'
                        }`}
                      >
                        {activeStep === steps.length - 1 ? 'Complete' : 'Next Step'}
                        {activeStep < steps.length - 1 && <ArrowRight className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-24 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-8 md:p-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your team's workflow?</h3>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of companies that trust our platform to manage their teams efficiently and securely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://app.seloraa.com/company-signup" 
                className="px-8 py-4 bg-white text-indigo-700 font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                Get Started for Free
              </a>
              
            </div>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-indigo-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Enterprise-grade security</span>
              </div>
              <div className="h-4 w-px bg-indigo-500"></div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>5-minute setup</span>
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default HowItWorks;
