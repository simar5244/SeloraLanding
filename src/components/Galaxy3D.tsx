import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Eye, Maximize2, User, X, Briefcase, Clock, Star } from 'lucide-react';

interface Position {
  x: number;
  y: number;
}

interface Employee {
  name: string;
  role: string;
  performance: number;
  position: Position;
  skills: string[];
  projects: string[];
  utilization: number;
}

interface Project {
  name: string;
  color: string;
  size: number;
  position: Position;
  members: string[];
  status: string;
  completion: number;
  budget: string;
  timeline: string;
}

const Galaxy3D = () => {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState('departments'); // 'departments' or 'projects'

  const departments: Array<{
    name: string;
    color: string;
    size: number;
    position: Position;
    employees: Employee[];
  }> = [
    {
      name: 'Engineering',
      color: '#8b5cf6',
      size: 120,
      position: { x: 300, y: 200 },
      employees: [
        { 
          name: 'Peter Darby', 
          role: 'Senior Developer', 
          performance: 4.8, 
          position: { x: 280, y: 180 },
          skills: ['React', 'Node.js', 'Python'],
          projects: ['AI Platform', 'Mobile App'],
          utilization: 85
        },
        { 
          name: 'Mike Rodriguez', 
          role: 'Tech Lead', 
          performance: 4.6, 
          position: { x: 320, y: 180 },
          skills: ['Architecture', 'Leadership', 'AWS'],
          projects: ['AI Platform'],
          utilization: 92
        },
        { 
          name: 'Alex Thompson', 
          role: 'Developer', 
          performance: 4.5, 
          position: { x: 300, y: 220 },
          skills: ['JavaScript', 'React', 'GraphQL'],
          projects: ['Mobile App'],
          utilization: 78
        }
      ]
    },
    {
      name: 'Marketing',
      color: '#ec4899',
      size: 80,
      position: { x: 500, y: 150 },
      employees: [
        { 
          name: 'Lisa Wang', 
          role: 'Marketing Manager', 
          performance: 4.4, 
          position: { x: 480, y: 130 },
          skills: ['Strategy', 'Analytics', 'Content'],
          projects: ['Brand Campaign'],
          utilization: 88
        },
        { 
          name: 'James Wilson', 
          role: 'Content Lead', 
          performance: 4.2, 
          position: { x: 520, y: 170 },
          skills: ['Writing', 'SEO', 'Design'],
          projects: ['Brand Campaign', 'Website'],
          utilization: 75
        }
      ]
    },
    {
      name: 'Sales',
      color: '#06b6d4',
      size: 90,
      position: { x: 200, y: 350 },
      employees: [
        { 
          name: 'David Park', 
          role: 'Sales Director', 
          performance: 4.7, 
          position: { x: 180, y: 330 },
          skills: ['Sales', 'Strategy', 'Leadership'],
          projects: ['Sales Portal'],
          utilization: 90
        },
        { 
          name: 'Maria Santos', 
          role: 'Account Manager', 
          performance: 4.6, 
          position: { x: 220, y: 370 },
          skills: ['CRM', 'Communication', 'Analytics'],
          projects: ['Sales Portal', 'Customer Success'],
          utilization: 82
        }
      ]
    }
  ];

  const projects: Project[] = [
    {
      name: 'AI Platform',
      color: '#8b5cf6',
      size: 100,
      position: { x: 250, y: 180 },
      members: ['Peter Darby', 'Mike Rodriguez', 'Lisa Wang'],
      status: 'In Progress',
      completion: 75,
      budget: '$2.4M',
      timeline: '6 months'
    },
    {
      name: 'Mobile App',
      color: '#f59e0b',
      size: 80,
      position: { x: 400, y: 250 },
      members: ['Alex Thompson', 'James Wilson'],
      status: 'Planning',
      completion: 25,
      budget: '$800K',
      timeline: '4 months'
    },
    {
      name: 'Sales Portal',
      color: '#06b6d4',
      size: 90,
      position: { x: 350, y: 350 },
      members: ['David Park', 'Maria Santos', 'Peter Darby'],
      status: 'Testing',
      completion: 90,
      budget: '$1.2M',
      timeline: '8 months'
    }
  ];

  const getPerformanceColor = (performance: number): string => {
    if (performance >= 4.5) return '#10b981'; // green
    if (performance >= 4.0) return '#f59e0b'; // yellow
    return '#ef4444'; // red
  };

  const closeModals = () => {
    setSelectedEmployee(null);
    setSelectedProject(null);
  };

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-purple-200/50 mx-auto">
            <Eye className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-purple-600 font-semibold">Interactive 3D View</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            3D Organization Galaxy
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            WebGL-powered interactive visualization with force-directed graph algorithms for complex organizational relationship mapping
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Controls */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">View Controls</h3>
              <div className="space-y-3">
                <button
                  className={`w-full p-3 rounded-lg text-left transition-colors ${
                    viewMode === 'departments' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                  onClick={() => setViewMode('departments')}
                >
                  <Users className="w-4 h-4 inline mr-2" />
                  Departments
                </button>
                <button
                  className={`w-full p-3 rounded-lg text-left transition-colors ${
                    viewMode === 'projects' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                  onClick={() => setViewMode('projects')}
                >
                  <Briefcase className="w-4 h-4 inline mr-2" />
                  Projects
                </button>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">Galaxy Stats</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Nodes</span>
                  <span className="font-medium">{viewMode === 'departments' ? departments.length : projects.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Connections</span>
                  <span className="font-medium">24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Render FPS</span>
                  <span className="font-medium text-green-400">60</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3D Galaxy Visualization */}
          <div className="lg:col-span-3">
            <div className="bg-gray-800 rounded-xl border border-gray-700 relative overflow-hidden" style={{ height: '600px' }}>
              <div className="absolute top-4 right-4 z-10">
                <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Simulated 3D Space */}
              <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20">
                {viewMode === 'departments' ? (
                  <>
                    {/* Department Nodes */}
                    {departments.map((dept, index) => (
                      <motion.div
                        key={dept.name}
                        className="absolute cursor-pointer"
                        style={{
                          left: dept.position.x,
                          top: dept.position.y,
                          transform: 'translate(-50%, -50%)'
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <motion.div
                          className="rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                          style={{
                            width: dept.size,
                            height: dept.size,
                            backgroundColor: dept.color,
                            boxShadow: `0 0 20px ${dept.color}40`
                          }}
                          animate={{
                            boxShadow: [
                              `0 0 20px ${dept.color}40`,
                              `0 0 40px ${dept.color}60`,
                              `0 0 20px ${dept.color}40`
                            ]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          {dept.name.charAt(0)}
                        </motion.div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 text-xs text-center text-white font-medium">
                          {dept.name}
                        </div>
                      </motion.div>
                    ))}

                    {/* Employee Nodes */}
                    {departments.flatMap(dept => 
                      dept.employees.map((employee, empIndex) => (
                        <div
                          key={`${dept.name}-${employee.name}`}
                          className="absolute"
                          style={{
                            left: employee.position.x,
                            top: employee.position.y,
                            transform: 'translate(-50%, -50%)',
                            width: '32px',
                            height: '32px'
                          }}
                        >
                          <motion.button
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg border-2 border-white relative z-50 cursor-pointer focus:outline-none"
                            style={{
                              backgroundColor: getPerformanceColor(employee.performance),
                              position: 'relative',
                              zIndex: 50,
                              WebkitTapHighlightColor: 'transparent'
                            }}
                            animate={{
                              y: [0, -5, 0]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: Math.random() * 2
                            }}
                            onClick={() => {
                              setSelectedProject(null);
                              setSelectedEmployee(employee);
                            }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <User className="w-3 h-3" />
                          </motion.button>
                        </div>
                      ))
                    )}
                  </>
                ) : (
                  <>
                    {/* Project Nodes */}
                    {projects.map((project, index) => (
                      <motion.div
                        key={project.name}
                        className="absolute cursor-pointer"
                        style={{
                          left: project.position.x,
                          top: project.position.y,
                          transform: 'translate(-50%, -50%)'
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        whileHover={{ scale: 1.1 }}
                        onClick={() => setSelectedProject(project)}
                      >
                        <motion.div
                          className="rounded-lg flex items-center justify-center text-white font-bold shadow-lg"
                          style={{
                            width: project.size,
                            height: project.size * 0.7,
                            backgroundColor: project.color,
                            boxShadow: `0 0 20px ${project.color}40`
                          }}
                        >
                          {project.name.split(' ').map(word => word.charAt(0)).join('')}
                        </motion.div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 text-xs text-center text-white font-medium whitespace-nowrap">
                          <div className="mb-1">{project.name}</div>
                          <div className="text-gray-400">{project.members.length} members</div>
                        </div>
                      </motion.div>
                    ))}
                  </>
                )}

                {/* Floating UI Elements */}
                <div className="absolute bottom-4 left-4 bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 text-xs">
                  <div className="text-gray-400 mb-1">Rendering Engine</div>
                  <div className="text-white font-medium">WebGL 2.0 • 60 FPS</div>
                </div>

                <div className="absolute bottom-4 right-4 bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 text-xs">
                  <div className="text-gray-400 mb-1">Physics Engine</div>
                  <div className="text-white font-medium">Force-Directed • Real-time</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Details Modal */}
        <AnimatePresence>
          {selectedEmployee && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModals}
              style={{
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)'
              }}
            >
              <motion.div
                className="bg-white rounded-xl p-6 max-w-md w-full text-gray-900"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  position: 'relative',
                  zIndex: 1000,
                  pointerEvents: 'auto'
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{selectedEmployee.name}</h3>
                  <button onClick={closeModals} className="text-gray-400 hover:text-gray-600">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-600">Role</div>
                    <div className="font-medium">{selectedEmployee.role}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-600">Performance</div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="font-medium">{selectedEmployee.performance}/5.0</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-600">Utilization</div>
                    <div className="font-medium">{selectedEmployee.utilization}%</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-600">Skills</div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {selectedEmployee.skills.map((skill, index) => (
                        <span key={index} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-600">Active Projects</div>
                    <div className="space-y-1 mt-1">
                      {selectedEmployee.projects.map((project, index) => (
                        <div key={index} className="text-sm font-medium">{project}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModals}
            >
              <motion.div
                className="bg-white rounded-xl p-6 max-w-md w-full text-gray-900"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  position: 'relative',
                  zIndex: 1000,
                  pointerEvents: 'auto'
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{selectedProject.name}</h3>
                  <button onClick={closeModals} className="text-gray-400 hover:text-gray-600">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-600">Status</div>
                    <div className="font-medium">{selectedProject.status}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-600">Completion</div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full"
                          style={{ width: `${selectedProject.completion}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">{selectedProject.completion}%</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-600">Budget</div>
                    <div className="font-medium">{selectedProject.budget}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-600">Timeline</div>
                    <div className="font-medium">{selectedProject.timeline}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-600">Team Members</div>
                    <div className="space-y-1 mt-1">
                      {selectedProject.members.map((member, index) => (
                        <div key={index} className="text-sm font-medium">{member}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Galaxy3D;