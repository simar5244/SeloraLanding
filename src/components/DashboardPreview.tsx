import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaProjectDiagram, FaBullseye, FaDollarSign, FaChartLine, FaUserTie, FaExclamationTriangle, FaLightbulb, FaUserCheck } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';

const DashboardPreview = () => {
  return (
    <motion.div 
      className="relative max-w-6xl mx-auto z-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8 }}
    >
      <div className="relative">
        <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Top glow */}
          <div className="absolute -top-0.5 left-0 right-0 h-3 bg-gradient-to-r from-purple-600/70 via-purple-500/70 to-purple-600/70 blur-sm z-10"></div>
          <div className="absolute -top-4 -left-4 -right-4 h-8 bg-gradient-to-b from-purple-500/20 to-transparent blur-md -z-10"></div>
          {/* Browser Header */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center gap-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="ml-4 text-sm text-gray-500">app.seloraa.com/dashboard</span>
          </div>
          
          <div className="p-8">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    Workforce Analytics Dashboard
                  </h1>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    Live Data
                  </div>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    99.994% Accuracy
                  </div>
                </div>
              </div>
            </div>

            {/* Top Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <motion.div 
                className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mb-2">
                  <span className="text-sm font-medium text-purple-600 uppercase tracking-wide">Total Employees</span>
                </div>
                <div className="text-3xl font-bold text-purple-800">247</div>
                <div className="text-sm text-purple-600 mt-1">+12 this month</div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mb-2">
                  <span className="text-sm font-medium text-purple-600 uppercase tracking-wide">Active Projects</span>
                </div>
                <div className="text-3xl font-bold text-purple-800">18</div>
                <div className="text-sm text-purple-600 mt-1">3 launching soon</div>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mb-2">
                  <span className="text-sm font-medium text-purple-600 uppercase tracking-wide">Avg Utilization</span>
                </div>
                <div className="text-3xl font-bold text-purple-800">87%</div>
                <div className="text-sm text-purple-600 mt-1">+5% from last month</div>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mb-2">
                  <span className="text-sm font-medium text-purple-600 uppercase tracking-wide">Cost Savings</span>
                </div>
                <div className="text-3xl font-bold text-purple-800">$2.4M</div>
                <div className="text-sm text-purple-600 mt-1">YTD optimization</div>
              </motion.div>
            </div>

            {/* Organization Insights */}
            <div className="mb-8 text-left w-full">
              <div className="flex items-center gap-3 mb-6">
                
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {/* Performance Analytics */}
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <FaChartLine className="w-4 h-4 text-purple-600" />
                    </div>
                    <h3 className="text-base font-semibold text-purple-800">High Performers</h3>
                  </div>
                  <div className="space-y-2 text-left">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-purple-700">Anthony Kasey (Engineering)</span>
                      <span className="text-purple-800 font-medium">4.9/5.0</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-purple-700">Maria Santos (Sales)</span>
                      <span className="text-purple-800 font-medium">4.8/5.0</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-purple-700">Henry Roberts (IT)</span>
                      <span className="text-purple-800 font-medium">4.8/5.0</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-purple-700">Clayton White (Legal)</span>
                      <span className="text-purple-800 font-medium">4.6/5.0</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-purple-700">David Park (Marketing)</span>
                      <span className="text-purple-800 font-medium">4.5/5.0</span>
                    </div>
                  </div>
                </div>

                {/* Utilization Insights */}
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-left">
                  <div className="flex items-center gap-3 mb-4 text-left">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <FaLightbulb className="w-4 h-4 text-purple-600" />
                    </div>
                    <h3 className="text-base font-semibold text-purple-800 text-left">Workload Distribution</h3>
                  </div>
                  <div className="space-y-3 text-left">
                    <div>
                      <div className="flex justify-between text-sm mb-1 text-left">
                        <span className="text-purple-700">Optimal Range (80-90%)</span>
                        <span className="text-purple-800 font-medium">156 employees</span>
                      </div>
                      <div className="w-full bg-purple-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: '63%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-purple-700">Overutilized (&gt;90%)</span>
                        <span className="text-purple-800 font-medium">34 employees</span>
                      </div>
                      <div className="w-full bg-purple-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '14%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-purple-700">Underutilized (&lt;80%)</span>
                        <span className="text-purple-800 font-medium">57 employees</span>
                      </div>
                      <div className="w-full bg-purple-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '23%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Succession Planning */}
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <FaUserTie className="w-4 h-4 text-purple-600" />
                    </div>
                    <h3 className="text-base font-semibold text-purple-800">Succession Ready</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-purple-700">
                      <span className="font-medium">12 employees</span> ready for promotion
                    </p>
                    <p className="text-sm text-purple-700">
                      <span className="font-medium">8 critical roles</span> have identified successors
                    </p>
                    <p className="text-sm text-purple-700">
                      <span className="font-medium">3 leadership gaps</span> require attention
                    </p>
                  </div>
                </div>

                {/* Risk Assessment */}
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <FaExclamationTriangle className="w-4 h-4 text-purple-600" />
                    </div>
                    <h3 className="text-base font-semibold text-purple-800">Attrition Risk</h3>
                  </div>
                  <div className="space-y-2 text-left">
                    <p className="text-sm text-purple-700">
                      <span>High Risk: </span>
                      <span className="text-red-600 font-medium">8 employees</span>
                    </p>
                    <p className="text-sm text-purple-700">
                      <span>Medium Risk: </span>
                      <span className="text-yellow-600 font-medium">23 employees</span>
                    </p>
                    <p className="text-sm text-purple-700">
                      <span>Low Risk: </span>
                      <span className="text-green-600 font-medium">216 employees</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Recommendations */}
            <div className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl p-6 border border-purple-200 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <FaLightbulb className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-base font-semibold text-purple-900">AI Recommendations</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <h4 className="font-medium text-purple-900 mb-2 text-left">Immediate Actions</h4>
                  <ul className="text-sm text-purple-800 space-y-1 pl-0 list-none">
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Redistribute workload for 8 overutilized employees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Schedule retention meetings for high-risk staff</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Promote 3 succession-ready candidates</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <h4 className="font-medium text-purple-900 mb-2 text-left">Strategic Planning</h4>
                  <ul className="text-sm text-purple-800 space-y-1 pl-0 list-none">
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Hire 2 senior engineers for Q1 projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Implement cross-training program</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>Review compensation for top performers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardPreview;