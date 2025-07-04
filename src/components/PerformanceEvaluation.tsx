import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, TrendingUp, Users, BarChart3, Target } from 'lucide-react';

const PerformanceEvaluation = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(0);

  const employees = [
    {
      name: "Sarah Chen",
      role: "Senior Developer",
      overallRating: 4.8,
      feedback: [
        { category: "Technical Skills", rating: 4.9, feedback: "Exceptional problem-solving abilities and code quality" },
        { category: "Communication", rating: 4.7, feedback: "Clear communicator, great at explaining complex concepts" },
        { category: "Leadership", rating: 4.8, feedback: "Natural leader, mentors junior developers effectively" },
        { category: "Innovation", rating: 4.9, feedback: "Consistently brings creative solutions to challenges" }
      ],
      goals: [
        { goal: "Lead AI project implementation", progress: 85, status: "On Track" },
        { goal: "Mentor 3 junior developers", progress: 100, status: "Completed" },
        { goal: "Complete advanced ML certification", progress: 60, status: "In Progress" }
      ],
      trends: {
        performance: [4.2, 4.4, 4.6, 4.7, 4.8],
        collaboration: [4.1, 4.3, 4.5, 4.6, 4.7],
        innovation: [4.3, 4.5, 4.7, 4.8, 4.9]
      }
    },
    {
      name: "Mike Rodriguez",
      role: "Tech Lead",
      overallRating: 4.6,
      feedback: [
        { category: "Technical Skills", rating: 4.7, feedback: "Strong technical foundation with excellent architecture skills" },
        { category: "Communication", rating: 4.5, feedback: "Good communicator, could improve presentation skills" },
        { category: "Leadership", rating: 4.6, feedback: "Effective team leader with good delegation skills" },
        { category: "Innovation", rating: 4.4, feedback: "Solid contributor with room for more creative thinking" }
      ],
      goals: [
        { goal: "Improve team velocity by 20%", progress: 75, status: "On Track" },
        { goal: "Implement new testing framework", progress: 90, status: "Nearly Complete" },
        { goal: "Complete leadership training", progress: 40, status: "Behind" }
      ],
      trends: {
        performance: [4.3, 4.4, 4.5, 4.5, 4.6],
        collaboration: [4.2, 4.3, 4.4, 4.5, 4.5],
        innovation: [4.1, 4.2, 4.3, 4.3, 4.4]
      }
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-700 border-green-200';
      case 'On Track': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Nearly Complete': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Behind': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : i < rating 
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-purple-200/50">
            <BarChart3 className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-purple-600 font-semibold">Performance Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">360°</span> Performance Evaluation
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive feedback collection system with multi-source evaluation and continuous performance tracking
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Employee Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Employee</h3>
            {employees.map((employee, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedEmployee === index 
                    ? 'border-purple-500 bg-purple-50' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
                onClick={() => setSelectedEmployee(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold text-sm">
                      {employee.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{employee.name}</h4>
                    <p className="text-sm text-gray-600">{employee.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">{renderStars(employee.overallRating)}</div>
                  <span className="text-sm font-medium text-gray-700">{employee.overallRating}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Performance Details */}
          <div className="lg:col-span-3 space-y-8">
            <motion.div
              key={selectedEmployee}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Overall Rating */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {employees[selectedEmployee].name} - Performance Overview
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="flex">{renderStars(employees[selectedEmployee].overallRating)}</div>
                    <span className="text-2xl font-bold text-purple-600">
                      {employees[selectedEmployee].overallRating}
                    </span>
                  </div>
                </div>

                {/* Feedback Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {employees[selectedEmployee].feedback.map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{item.category}</h4>
                        <div className="flex items-center gap-2">
                          <div className="flex">{renderStars(item.rating)}</div>
                          <span className="text-sm font-medium text-gray-700">{item.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{item.feedback}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Goals & Progress */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-600" />
                  Goals & Objectives
                </h3>
                <div className="space-y-4">
                  {employees[selectedEmployee].goals.map((goal, index) => (
                    <motion.div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-900">{goal.goal}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(goal.status)}`}>
                          {goal.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <motion.div
                            className="bg-purple-600 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${goal.progress}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{goal.progress}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Performance Trends */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  Performance Trends
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.entries(employees[selectedEmployee].trends).map(([category, data], index) => (
                    <motion.div
                      key={category}
                      className="bg-gray-50 rounded-lg p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <h4 className="font-medium text-gray-900 mb-3 capitalize">{category}</h4>
                      <div className="flex items-end gap-1 h-20">
                        {data.map((value, i) => (
                          <motion.div
                            key={i}
                            className="bg-purple-600 rounded-t flex-1"
                            initial={{ height: 0 }}
                            animate={{ height: `${(value / 5) * 100}%` }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>Q1</span>
                        <span>Q2</span>
                        <span>Q3</span>
                        <span>Q4</span>
                        <span>Q5</span>
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-lg font-semibold text-purple-600">
                          {data[data.length - 1]}
                        </span>
                        <span className="text-sm text-gray-500 ml-1">current</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceEvaluation;