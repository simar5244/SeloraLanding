import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Users, BarChart3 } from 'lucide-react';

const AttritionRiskAnalysis = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(0);

  const employees = [
    {
      name: "Peter Darby",
      role: "Senior Developer",
      riskScore: 58,
      riskLevel: "Medium",
      factors: [
        { name: "Responsibility Mismatch", value: 40, color: "red" },
        { name: "Tenure Factor", value: 65, color: "red" },
        { name: "Utilization Factor", value: 75, color: "red" },
        { name: "Seniority Factor", value: 50, color: "yellow" },
        { name: "Task Variety Index", value: 70, color: "green" },
        { name: "Job Intensity", value: 30, color: "green" },
        { name: "Role-Project Ratio", value: 50, color: "yellow" },
        { name: "Collaboration Index", value: 80, color: "red" }
      ],
      primaryRisks: [
        "Collaboration patterns affecting retention",
        "Salary satisfaction relative to market expectations"
      ]
    },
    {
      name: "Sarah Chen",
      role: "Product Manager",
      riskScore: 23,
      riskLevel: "Low",
      factors: [
        { name: "Responsibility Mismatch", value: 15, color: "green" },
        { name: "Tenure Factor", value: 25, color: "green" },
        { name: "Utilization Factor", value: 45, color: "yellow" },
        { name: "Seniority Factor", value: 20, color: "green" },
        { name: "Task Variety Index", value: 85, color: "green" },
        { name: "Job Intensity", value: 40, color: "yellow" },
        { name: "Role-Project Ratio", value: 25, color: "green" },
        { name: "Collaboration Index", value: 30, color: "green" }
      ],
      primaryRisks: [
        "Moderate workload distribution",
        "Strong team collaboration patterns"
      ]
    }
  ];

  const getColorClass = (color) => {
    switch (color) {
      case 'red': return 'bg-red-500';
      case 'yellow': return 'bg-yellow-500';
      case 'green': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getRiskColor = (score) => {
    if (score >= 60) return 'text-red-600 bg-red-50 border-red-200';
    if (score >= 40) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-green-600 bg-green-50 border-green-200';
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/6 right-1/6 w-48 h-48 bg-purple-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/6 left-1/6 w-56 h-56 bg-purple-300/10 rounded-full blur-3xl"></div>
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
            <AlertTriangle className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-purple-600 font-semibold">Risk Mitigation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-display">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Attrition Risk
            </span>{' '}
            Assessment
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Advanced behavioral analytics with{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold">
              multi-factor risk modeling
            </span>{' '}
            to predict and prevent employee turnover
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Employee Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">At-Risk Employees</h3>
            {employees.map((employee, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all bg-white/80 backdrop-blur-sm ${
                  selectedEmployee === index 
                    ? 'border-purple-500 bg-purple-50/80' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedEmployee(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{employee.name}</h4>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getRiskColor(employee.riskScore)}`}>
                    {employee.riskScore}%
                  </span>
                </div>
                <p className="text-sm text-gray-600">{employee.role}</p>
                <div className="mt-2">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                    <span>Risk Level</span>
                    <span>{employee.riskLevel}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        employee.riskScore >= 60 ? 'bg-red-500' :
                        employee.riskScore >= 40 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${employee.riskScore}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Risk Factor Analysis */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-6"
              key={selectedEmployee}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Attrition Risk Assessment
                </h3>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Overall Risk:</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getRiskColor(employees[selectedEmployee].riskScore)}`}>
                    {employees[selectedEmployee].riskLevel} - {employees[selectedEmployee].riskScore}%
                  </span>
                </div>
                <p className="text-sm text-gray-600">Collaboration patterns affecting retention</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Primary Risk Factors:</h4>
                <ul className="space-y-2">
                  {employees[selectedEmployee].primaryRisks.map((risk, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                      {risk}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Risk Factor Breakdown:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {employees[selectedEmployee].factors.map((factor, index) => (
                    <motion.div
                      key={index}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">{factor.name}</span>
                        <span className="text-sm font-semibold text-gray-900">{factor.value}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div 
                          className={`h-2 rounded-full ${getColorClass(factor.color)}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${factor.value}%` }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">AI Recommendations:</h4>
                <ul className="space-y-1 text-sm text-blue-800">
                  <li>• Implement mentorship program to improve collaboration patterns</li>
                  <li>• Review compensation package against market benchmarks</li>
                  <li>• Provide additional project variety to increase engagement</li>
                  <li>• Schedule regular 1:1s to address responsibility alignment</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttritionRiskAnalysis;