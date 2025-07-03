import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Users, DollarSign, TrendingUp, AlertTriangle, Zap, Plus, Minus, Target, ChevronDown } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Metric {
  label: string;
  before: string;
  after: string;
  change: string;
  positive: boolean;
  icon: LucideIcon;
}

interface SimulationResult {
  title: string;
  description: string;
  metrics: Metric[];
  recommendations: string[];
}

interface DropdownOption {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const SimulationCanvas: React.FC = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationType, setSimulationType] = useState('hire');
  const [selectedDepartment, setSelectedDepartment] = useState('engineering');
  const [selectedLevel, setSelectedLevel] = useState('senior');
  const [simulationResults, setSimulationResults] = useState<SimulationResult | null>(null);
  const [departmentOpen, setDepartmentOpen] = useState(false);
  const [levelOpen, setLevelOpen] = useState(false);

  const departments = [
    { value: 'engineering', label: 'Engineering' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'sales', label: 'Sales' },
    { value: 'hr', label: 'Human Resources' },
    { value: 'finance', label: 'Finance' }
  ];

  const levels = [
    { value: 'senior', label: 'Senior Developer' },
    { value: 'mid', label: 'Mid-Level Developer' },
    { value: 'junior', label: 'Junior Developer' },
    { value: 'lead', label: 'Team Lead' },
    { value: 'manager', label: 'Engineering Manager' }
  ];

  const simulationData = {
    hire: {
      title: "Hiring Impact Analysis",
      description: "Adding a Senior Developer to Engineering",
      metrics: [
        { label: "Team Utilization", before: "87%", after: "76%", change: "-11%", positive: true, icon: Users },
        { label: "Budget Impact", before: "$2.4M", after: "$2.52M", change: "+$120K", positive: false, icon: DollarSign },
        { label: "Attrition Risk", before: "Medium", after: "Low", change: "Improved", positive: true, icon: AlertTriangle },
        { label: "Project Capacity", before: "3", after: "5", change: "+2", positive: true, icon: TrendingUp }
      ],
      recommendations: [
        "Optimal timing for this change: Next quarter",
        "Risk mitigation: Implement gradual transition",
        "Success probability: 94.7%",
        "ROI timeline: 3-6 months"
      ]
    },
    optimize: {
      title: "Team Optimization Analysis",
      description: "Restructuring for optimal performance",
      metrics: [
        { label: "Team Utilization", before: "87%", after: "94%", change: "+7%", positive: true, icon: Users },
        { label: "Budget Impact", before: "$2.4M", after: "$2.28M", change: "-$120K", positive: true, icon: DollarSign },
        { label: "Attrition Risk", before: "Medium", after: "High", change: "Monitor", positive: false, icon: AlertTriangle },
        { label: "Efficiency Score", before: "78%", after: "91%", change: "+13%", positive: true, icon: TrendingUp }
      ],
      recommendations: [
        "Implement workload redistribution gradually",
        "Monitor employee satisfaction closely",
        "Success probability: 89.2%",
        "Expected efficiency gain: 13%"
      ]
    },
    fire: {
      title: "Workforce Reduction Analysis",
      description: "Impact of reducing team size",
      metrics: [
        { label: "Team Utilization", before: "87%", after: "98%", change: "+11%", positive: false, icon: Users },
        { label: "Budget Impact", before: "$2.4M", after: "$2.1M", change: "-$300K", positive: true, icon: DollarSign },
        { label: "Attrition Risk", before: "Medium", after: "High", change: "Increased", positive: false, icon: AlertTriangle },
        { label: "Workload Stress", before: "Normal", after: "High", change: "Critical", positive: false, icon: TrendingUp }
      ],
      recommendations: [
        "High risk of team burnout",
        "Consider alternative cost-saving measures",
        "Success probability: 34.1%",
        "Recommend against this action"
      ]
    }
  };

  const runSimulation = () => {
    setIsSimulating(true);
    
    // Simulate processing time
    setTimeout(() => {
      const result = simulationData[simulationType as keyof typeof simulationData];
      if (result) {
        setSimulationResults(result);
      } else {
        console.error('Invalid simulation type:', simulationType);
        // Fallback to hire simulation if type is invalid
        setSimulationResults(simulationData.hire);
      }
      setIsSimulating(false);
    }, 2500);
  };

  const resetSimulation = () => {
    setSimulationResults(null);
  };

  const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, value, onChange, placeholder, isOpen, setIsOpen }) => (
    <div className="relative">
      <button
        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors bg-white/80 flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-900">
          {options.find((opt: DropdownOption) => opt.value === value)?.label || placeholder}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-xl shadow-lg z-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {options.map((option) => (
              <button
                key={option.value}
                className="w-full p-3 text-left hover:bg-purple-50 transition-colors first:rounded-t-xl last:rounded-b-xl"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50/50 to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/6 right-1/3 w-48 h-48 bg-pink-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/6 left-1/3 w-56 h-56 bg-purple-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 right-1/6 w-40 h-40 bg-blue-300/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-purple-200/50 mx-auto">
            <Zap className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-purple-600 font-semibold">Scenario Planning</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-display">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Workforce Simulation
            </span>{' '}
            Canvas
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Run Monte Carlo simulations with Bayesian inference to predict workforce changes and optimize organizational decisions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Control Panel */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900 font-display">Simulation Controls</h3>
            
            {/* Action Type Selection */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <motion.button
                className={`p-4 rounded-xl font-medium text-sm transition-all border-2 ${
                  simulationType === 'hire' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-purple-600 shadow-lg' 
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSimulationType('hire')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Plus className="w-5 h-5 mx-auto mb-2" />
                Hire
              </motion.button>
              
              <motion.button
                className={`p-4 rounded-xl font-medium text-sm transition-all border-2 ${
                  simulationType === 'optimize' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-purple-600 shadow-lg' 
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSimulationType('optimize')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <TrendingUp className="w-5 h-5 mx-auto mb-2" />
                Optimize
              </motion.button>

              <motion.button
                className={`p-4 rounded-xl font-medium text-sm transition-all border-2 ${
                  simulationType === 'fire' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-purple-600 shadow-lg' 
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSimulationType('fire')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Minus className="w-5 h-5 mx-auto mb-2" />
                Reduce
              </motion.button>
            </div>

            {/* Form Controls */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                <CustomDropdown
                  options={departments}
                  value={selectedDepartment}
                  onChange={setSelectedDepartment}
                  placeholder="Select department"
                  isOpen={departmentOpen}
                  setIsOpen={setDepartmentOpen}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Position Level</label>
                <CustomDropdown
                  options={levels}
                  value={selectedLevel}
                  onChange={setSelectedLevel}
                  placeholder="Select position level"
                  isOpen={levelOpen}
                  setIsOpen={setLevelOpen}
                />
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <motion.button
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                onClick={runSimulation}
                disabled={isSimulating}
                whileHover={{ scale: isSimulating ? 1 : 1.02 }}
                whileTap={{ scale: isSimulating ? 1 : 0.98 }}
                animate={isSimulating ? {
                  background: [
                    "linear-gradient(45deg, #8b5cf6, #7c3aed)",
                    "linear-gradient(45deg, #7c3aed, #8b5cf6)",
                    "linear-gradient(45deg, #8b5cf6, #7c3aed)"
                  ]
                } : {}}
                transition={{ duration: 0.5, repeat: isSimulating ? Infinity : 0 }}
              >
                {isSimulating ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Zap className="w-5 h-5" />
                    </motion.div>
                    Running...
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    Run Simulation
                  </>
                )}
              </motion.button>

              {simulationResults && (
                <motion.button
                  className="px-6 py-4 bg-gray-600 hover:bg-gray-700 text-white rounded-xl font-medium transition-colors"
                  onClick={resetSimulation}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  Reset
                </motion.button>
              )}
            </div>
          </motion.div>

          {/* Results Panel */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {simulationResults ? (
                <motion.div
                  key="results"
                  className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {simulationResults.title}
                    </h3>
                    <p className="text-gray-600">{simulationResults.description}</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {simulationResults.metrics.map((metric, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-50 rounded-xl p-4 border border-gray-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                              <metric.icon className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-medium text-gray-900">{metric.label}</span>
                          </div>
                          <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                            metric.positive 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-red-100 text-red-700'
                          }`}>
                            {metric.change}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>Before: <span className="font-medium">{metric.before}</span></span>
                          <span>After: <span className="font-medium">{metric.after}</span></span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h4 className="font-semibold text-purple-900 mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      AI Recommendations
                    </h4>
                    <ul className="space-y-2 text-sm text-purple-800">
                      {simulationResults.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-8 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <Zap className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Simulation Results</h3>
                  <p className="text-gray-600 mb-6">
                    Configure your simulation parameters and click "Run Simulation" to see detailed impact analysis.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Simulation Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Monte Carlo analysis with 100K iterations</li>
                      <li>Bayesian inference for risk assessment</li>
                      <li>Real-time impact on 247 variables</li>
                      <li>95% confidence interval predictions</li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SimulationCanvas;