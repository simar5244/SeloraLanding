import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderOpen, Users, Clock, DollarSign, Zap, Plus, Calendar, Target, BarChart3, AlertTriangle } from 'lucide-react';

const ProjectManagement = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const projects = [
    {
      name: "AI-Powered Analytics Platform",
      date: "Dec 15, 2024",
      priority: "Critical",
      status: "In Progress",
      statusColor: "orange",
      completion: 75,
      budget: "$2.4M",
      spent: "$1.8M",
      team: 8,
      description: "Next-generation workforce analytics platform with real-time AI insights and predictive modeling capabilities.",
      technologies: ["React", "Python", "TensorFlow", "AWS", "PostgreSQL"]
    },
    {
      name: "Mobile Workforce App",
      date: "Mar 1, 2025",
      priority: "Medium",
      status: "Planning",
      statusColor: "blue",
      completion: 15,
      budget: "$1.2M",
      spent: "$180K",
      team: 6,
      description: "Native mobile application for workforce management with offline capabilities and real-time synchronization.",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "GraphQL"]
    },
    {
      name: "Customer Success Portal",
      date: "Feb 15, 2025",
      priority: "High",
      status: "Testing",
      statusColor: "green",
      completion: 90,
      budget: "$600K",
      spent: "$540K",
      team: 4,
      description: "Self-service portal for customers with advanced analytics, reporting, and support integration.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "Elasticsearch"]
    }
  ];

  const recommendations = [
    {
      name: "Peter Darby",
      role: "Project Lead",
      profile: "Senior Engineer",
      match: 95,
      availability: "Available",
      cost: "$8,750/week",
      hours: "35 hours/week",
      skills: ["Full-stack development", "AI/ML", "Project Management"],
      responsibilities: "Technical architecture, team coordination, stakeholder communication"
    },
    {
      name: "Thomas Mill", 
      role: "Senior Developer",
      profile: "Senior Engineer",
      match: 88,
      availability: "Available",
      cost: "$7,200/week",
      hours: "40 hours/week",
      skills: ["Backend development", "Database design", "DevOps"],
      responsibilities: "Backend development, API design, database optimization"
    },
    {
      name: "Maria Santos",
      role: "Frontend Specialist", 
      profile: "Frontend Engineer",
      match: 92,
      availability: "Partial (70%)",
      cost: "$5,400/week",
      hours: "30 hours/week",
      skills: ["React", "TypeScript", "Design Systems"],
      responsibilities: "UI/UX implementation, component library, responsive design"
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Critical': return 'text-red-600 bg-red-50 border-red-200';
      case 'High': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'Medium': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Ongoing': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'In Progress': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'Planning': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Testing': return 'text-green-600 bg-green-50 border-green-200';
      case 'Completed': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
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
            <FolderOpen className="w-5 h-5 text-indigo-600 mr-2" />
            <span className="text-indigo-600 font-semibold">Project Intelligence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            <span className="text-gray-900">AI-Powered </span>
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Project Management
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Intelligent team allocation with <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-medium">skill matching algorithms</span> for optimal project staffing and resource optimization
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project Grid */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Active Projects</h3>
              <motion.button
                className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-purple-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus className="w-4 h-4" />
                Add Project
              </motion.button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                    selectedProject === index 
                      ? 'border-purple-500 bg-purple-50' 
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedProject(index)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">{project.name}</h4>
                      <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      {project.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      {project.team} members
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <DollarSign className="w-4 h-4" />
                      {project.spent} / {project.budget}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Target className="w-4 h-4" />
                      {project.completion}% complete
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded text-xs font-medium border ${getPriorityColor(project.priority)}`}>
                      Priority: {project.priority}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.completion}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-600">{project.completion}%</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* AI Recommendations Panel */}
          <div>
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Project Staffing Assistant</h3>
                <motion.button
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-purple-700 transition-colors"
                  onClick={() => setShowRecommendations(!showRecommendations)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Zap className="w-4 h-4" />
                  {showRecommendations ? 'Hide' : 'AI Recommendations'}
                </motion.button>
              </div>

              {showRecommendations && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-6 mb-6">
                    {recommendations.map((rec, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                              <span className="text-purple-600 font-semibold text-sm">
                                {rec.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 text-lg">{rec.name}</h4>
                              <div className="flex items-center gap-3 text-sm">
                                <span className="text-purple-600 font-medium">{rec.role}</span>
                                <span className="text-blue-600 font-medium">{rec.profile}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-purple-600">{rec.match}% match</div>
                            <div className="text-sm text-gray-600">{rec.availability}</div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="bg-white rounded-lg p-4">
                            <div className="text-sm font-medium text-gray-700 mb-2">Availability & Cost</div>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-gray-500" />
                                <span className="text-sm text-gray-700">{rec.hours}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <DollarSign className="w-4 h-4 text-gray-500" />
                                <span className="text-sm font-semibold text-gray-900">{rec.cost}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white rounded-lg p-4">
                            <div className="text-sm font-medium text-gray-700 mb-2">Core Skills</div>
                            <div className="flex flex-wrap gap-1">
                              {rec.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-4">
                          <div className="text-sm font-medium text-gray-700 mb-2">Key Responsibilities</div>
                          <div className="text-sm text-gray-700">{rec.responsibilities}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Apply Recommendations
                  </motion.button>
                </motion.div>
              )}

              {!showRecommendations && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">AI Project Staffing</h4>
                  <p className="text-gray-600 mb-6 max-w-sm mx-auto">
                    Get intelligent recommendations for optimal team composition based on skills, availability, and collaboration patterns.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="text-left">
                      <div className="font-medium text-gray-900 mb-1">Skill Matching</div>
                      <div>Advanced algorithms analyze 20+ skill vectors</div>
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-gray-900 mb-1">Workload Optimization</div>
                      <div>Balance team capacity and project demands</div>
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-gray-900 mb-1">Team Chemistry</div>
                      <div>Predict collaboration success rates</div>
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-gray-900 mb-1">Resource Planning</div>
                      <div>Optimize budget and timeline allocation</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectManagement;