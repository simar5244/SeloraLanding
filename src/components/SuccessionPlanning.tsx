import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, TrendingUp, AlertCircle } from 'lucide-react';

const SuccessionPlanning = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(0);

  const candidates = [
    {
      name: "Peter Darby",
      email: "peter@testing.com",
      score: 53,
      viability: "Non-Viable",
      strengths: ["Strong skill overlap", "Development needed: Retention risk and retention risk"],
      matchFactors: [
        { name: "Stability Index", value: 75, color: "red" },
        { name: "Project Complexity", value: 85, color: "red" },
        { name: "Cognitive Load", value: 90, color: "yellow" },
        { name: "Promotion Velocity", value: 45, color: "red" },
        { name: "Competency Similarity", value: 15, color: "red" }
      ],
      keyStrengths: [
        "Experience in similar role responsibilities",
        "Compatible skill set for position requirements"
      ],
      developmentAreas: [
        "Leadership experience needed",
        "Strategic thinking development required"
      ]
    },
    {
      name: "Thomas Mill",
      email: "thomas@testing.com",
      score: 1,
      viability: "Non-Viable",
      strengths: ["Limited skill overlap", "Development needed: Limited skill overlap and limited skill overlap"],
      matchFactors: [
        { name: "Stability Index", value: 25, color: "red" },
        { name: "Project Complexity", value: 30, color: "red" },
        { name: "Cognitive Load", value: 40, color: "yellow" },
        { name: "Promotion Velocity", value: 20, color: "red" },
        { name: "Competency Similarity", value: 10, color: "red" }
      ],
      keyStrengths: [
        "Strong technical foundation",
        "Good team collaboration skills"
      ],
      developmentAreas: [
        "Significant skill gap in core competencies",
        "Leadership training required",
        "Domain expertise development needed"
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

  const getViabilityColor = (viability) => {
    switch (viability) {
      case 'Viable': return 'text-green-600 bg-green-50 border-green-200';
      case 'Potential': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'Non-Viable': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-purple-200/50">
            <Users className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-purple-600 font-semibold">Talent Pipeline</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            <span className="text-gray-900">AI-Powered </span>
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Succession Planning
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Multi-criteria decision analysis with weighted scoring models for optimal succession candidate identification
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Candidate List */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-600" />
              Potential Successors
            </h3>
            {candidates.map((candidate, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedCandidate === index 
                    ? 'border-purple-500 bg-white shadow-lg' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
                onClick={() => setSelectedCandidate(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{candidate.name}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-purple-600">{candidate.score}%</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium border ${getViabilityColor(candidate.viability)}`}>
                      {candidate.viability}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">{candidate.email}</p>
                <p className="text-xs text-gray-500">{candidate.strengths[0]}</p>
              </motion.div>
            ))}
            
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-blue-800">
                Higher scores (green) indicate better successor match. Lower scores (red) indicate areas needing development.
              </p>
            </div>
          </div>

          {/* Detailed Analysis */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
              key={selectedCandidate}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {candidates[selectedCandidate].name}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-purple-600">
                    {candidates[selectedCandidate].score}%
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getViabilityColor(candidates[selectedCandidate].viability)}`}>
                    {candidates[selectedCandidate].viability}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-600" />
                  Match Factors
                </h4>
                <div className="space-y-4">
                  {candidates[selectedCandidate].matchFactors.map((factor, index) => (
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    Key Strengths
                  </h4>
                  <ul className="space-y-2">
                    {candidates[selectedCandidate].keyStrengths.map((strength, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-600" />
                    Development Areas
                  </h4>
                  <ul className="space-y-2">
                    {candidates[selectedCandidate].developmentAreas.map((area, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">AI Succession Recommendations:</h4>
                <ul className="space-y-1 text-sm text-purple-800">
                  <li>• Implement targeted leadership development program</li>
                  <li>• Assign stretch projects to build strategic thinking skills</li>
                  <li>• Provide mentorship with current role holder</li>
                  <li>• Create 6-month development timeline with measurable milestones</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessionPlanning;