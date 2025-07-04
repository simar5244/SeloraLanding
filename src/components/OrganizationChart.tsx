import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Plus, Minus, ArrowRight, Zap, TrendingUp, DollarSign, UserPlus, UserMinus, Award } from 'lucide-react';

const OrganizationChart = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Peter Darby",
      role: "CEO",
      department: "Executive",
      level: 1,
      utilization: 85,
      performance: 4.8,
      attritionRisk: "Low",
      salary: 250000,
      reports: [2, 3, 4],
      position: { x: 50, y: 10 }
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      role: "VP Engineering",
      department: "Engineering",
      level: 2,
      utilization: 92,
      performance: 4.6,
      attritionRisk: "Medium",
      salary: 180000,
      reports: [5, 6],
      position: { x: 20, y: 40 }
    },
    {
      id: 3,
      name: "Lisa Wang",
      role: "VP Marketing",
      department: "Marketing",
      level: 2,
      utilization: 78,
      performance: 4.4,
      attritionRisk: "Low",
      salary: 160000,
      reports: [7],
      position: { x: 50, y: 40 }
    },
    {
      id: 4,
      name: "David Park",
      role: "VP Sales",
      department: "Sales",
      level: 2,
      utilization: 88,
      performance: 4.7,
      attritionRisk: "Low",
      salary: 170000,
      reports: [8],
      position: { x: 80, y: 40 }
    },
    {
      id: 5,
      name: "Alex Thompson",
      role: "Senior Developer",
      department: "Engineering",
      level: 3,
      utilization: 95,
      performance: 4.5,
      attritionRisk: "High",
      salary: 120000,
      reports: [],
      position: { x: 10, y: 70 }
    },
    {
      id: 6,
      name: "Emma Davis",
      role: "Senior Developer",
      department: "Engineering",
      level: 3,
      utilization: 87,
      performance: 4.3,
      attritionRisk: "Low",
      salary: 115000,
      reports: [],
      position: { x: 30, y: 70 }
    },
    {
      id: 7,
      name: "James Wilson",
      role: "Marketing Manager",
      department: "Marketing",
      level: 3,
      utilization: 82,
      performance: 4.2,
      attritionRisk: "Medium",
      salary: 95000,
      reports: [],
      position: { x: 50, y: 70 }
    },
    {
      id: 8,
      name: "Maria Santos",
      role: "Sales Manager",
      department: "Sales",
      level: 3,
      utilization: 91,
      performance: 4.6,
      attritionRisk: "Low",
      salary: 105000,
      reports: [],
      position: { x: 80, y: 70 }
    }
  ]);

  const [orgMetrics, setOrgMetrics] = useState({
    totalEmployees: 8,
    avgUtilization: 87,
    highRisk: 1,
    totalPayroll: 1.295
  });

  const getUtilizationColor = (utilization) => {
    if (utilization >= 90) return 'bg-red-100 text-red-700 border-red-200';
    if (utilization >= 80) return 'bg-green-100 text-green-700 border-green-200';
    return 'bg-yellow-100 text-yellow-700 border-yellow-200';
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'High': return 'bg-red-100 text-red-700';
      case 'Medium': return 'bg-yellow-100 text-yellow-700';
      case 'Low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const handleHire = () => {
    const newEmployee = {
      id: employees.length + 1,
      name: `New Employee ${employees.length + 1}`,
      role: "Junior Developer",
      department: "Engineering",
      level: 3,
      utilization: 65,
      performance: 3.8,
      attritionRisk: "Low",
      salary: 85000,
      reports: [],
      position: { x: Math.random() * 80 + 10, y: 70 }
    };

    setEmployees([...employees, newEmployee]);
    
    // Update metrics
    const newTotal = employees.length + 1;
    const newAvgUtil = Math.round((orgMetrics.avgUtilization * employees.length + 65) / newTotal);
    const newPayroll = orgMetrics.totalPayroll + 0.085;
    
    setOrgMetrics({
      totalEmployees: newTotal,
      avgUtilization: newAvgUtil,
      highRisk: orgMetrics.highRisk,
      totalPayroll: Number(newPayroll.toFixed(3))
    });
  };

  const handleFire = (employeeId) => {
    const employee = employees.find(emp => emp.id === employeeId);
    if (!employee) return;

    const updatedEmployees = employees.filter(emp => emp.id !== employeeId);
    setEmployees(updatedEmployees);
    
    // Update metrics
    const newTotal = updatedEmployees.length;
    const newAvgUtil = Math.round(updatedEmployees.reduce((acc, emp) => acc + emp.utilization, 0) / newTotal);
    const newPayroll = orgMetrics.totalPayroll - (employee.salary / 1000000);
    const newHighRisk = updatedEmployees.filter(emp => emp.attritionRisk === 'High').length;
    
    setOrgMetrics({
      totalEmployees: newTotal,
      avgUtilization: newAvgUtil,
      highRisk: newHighRisk,
      totalPayroll: Number(newPayroll.toFixed(3))
    });

    if (selectedEmployee?.id === employeeId) {
      setSelectedEmployee(null);
    }
  };

  const handlePromote = (employeeId) => {
    const updatedEmployees = employees.map(emp => {
      if (emp.id === employeeId) {
        const promotedEmployee = {
          ...emp,
          role: emp.role.includes('Senior') ? 'Team Lead' : 'Senior ' + emp.role,
          salary: Math.round(emp.salary * 1.2),
          performance: Math.min(emp.performance + 0.2, 5.0),
          attritionRisk: 'Low'
        };
        
        if (selectedEmployee?.id === employeeId) {
          setSelectedEmployee(promotedEmployee);
        }
        
        return promotedEmployee;
      }
      return emp;
    });
    
    setEmployees(updatedEmployees);
    
    // Update payroll
    const newPayroll = updatedEmployees.reduce((acc, emp) => acc + emp.salary, 0) / 1000000;
    setOrgMetrics(prev => ({
      ...prev,
      totalPayroll: Number(newPayroll.toFixed(3))
    }));
  };

  const EmployeeCard = ({ employee, isSelected, onClick }) => (
    <div
      className={`absolute bg-white rounded-xl border-2 p-4 cursor-pointer transition-all shadow-lg ${
        isSelected ? 'border-purple-500 shadow-xl z-20' : 'border-gray-200 hover:border-gray-300 z-10'
      }`}
      style={{ 
        left: `${employee.position.x}%`, 
        top: `${employee.position.y}%`,
        transform: 'translate(-50%, -50%)',
        width: '200px'
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClick(employee);
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
          <span className="text-purple-600 font-semibold text-sm">
            {employee.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 text-sm">{employee.name}</h4>
          <p className="text-xs text-gray-600">{employee.role}</p>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className={`text-xs px-2 py-1 rounded-full border ${getUtilizationColor(employee.utilization)}`}>
          {employee.utilization}% utilized
        </div>
        <div className={`text-xs px-2 py-1 rounded-full ${getRiskColor(employee.attritionRisk)}`}>
          {employee.attritionRisk} risk
        </div>
      </div>
    </div>
  );

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
            <Users className="w-5 h-5 text-indigo-600 mr-2" />
            <span className="text-indigo-600 font-semibold">Organizational Structure</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            <span className="text-gray-900">Interactive </span>
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Organization Chart
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Click employees to select, use action buttons to simulate hiring/firing, and see real-time impact on <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-medium">organizational metrics</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Organization Chart */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 relative" style={{ height: '600px' }}>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-semibold text-gray-900">Company Structure</h3>
                <div className="flex gap-2">
                  <motion.button
                    className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-green-700 transition-colors"
                    onClick={handleHire}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <UserPlus className="w-4 h-4" />
                    Hire
                  </motion.button>
                  <motion.button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors"
                    onClick={() => selectedEmployee && handlePromote(selectedEmployee.id)}
                    disabled={!selectedEmployee}
                    whileHover={{ scale: selectedEmployee ? 1.05 : 1 }}
                    whileTap={{ scale: selectedEmployee ? 0.95 : 1 }}
                  >
                    <Award className="w-4 h-4" />
                    Promote
                  </motion.button>
                  <motion.button
                    className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-red-700 transition-colors"
                    onClick={() => selectedEmployee && handleFire(selectedEmployee.id)}
                    disabled={!selectedEmployee}
                    whileHover={{ scale: selectedEmployee ? 1.05 : 1 }}
                    whileTap={{ scale: selectedEmployee ? 0.95 : 1 }}
                  >
                    <UserMinus className="w-4 h-4" />
                    Remove
                  </motion.button>
                </div>
              </div>

              {/* Chart Area */}
              <div className="relative w-full h-full">
                {employees.map((employee) => (
                  <EmployeeCard
                    key={employee.id}
                    employee={employee}
                    isSelected={selectedEmployee?.id === employee.id}
                    onClick={setSelectedEmployee}
                  />
                ))}
              </div>

              <div className="absolute bottom-4 left-4 text-sm text-gray-500">
                💡 Click employees to select • Use action buttons above to simulate changes
              </div>
            </div>
          </div>

          {/* Employee Details & Metrics */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              {selectedEmployee ? (
                <motion.div
                  key={selectedEmployee.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">
                        {selectedEmployee.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{selectedEmployee.name}</h3>
                      <p className="text-gray-600">{selectedEmployee.role}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Utilization</span>
                        <span className="text-lg font-semibold text-gray-900">{selectedEmployee.utilization}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${selectedEmployee.utilization}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-600 mb-1">Performance</div>
                        <div className="text-lg font-semibold text-gray-900">{selectedEmployee.performance}/5.0</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-600 mb-1">Salary</div>
                        <div className="text-lg font-semibold text-gray-900">${(selectedEmployee.salary / 1000).toFixed(0)}K</div>
                      </div>
                    </div>

                    <div className={`p-3 rounded-lg ${getRiskColor(selectedEmployee.attritionRisk)}`}>
                      <div className="text-sm font-medium">Attrition Risk: {selectedEmployee.attritionRisk}</div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm font-medium text-gray-700 mb-2">Direct Reports</div>
                      <div className="text-sm text-gray-600">
                        {selectedEmployee.reports.length} employees
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  className="bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 p-8 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Select an Employee</h3>
                  <p className="text-gray-600">Click on any employee card to view detailed information and perform actions.</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Real-time Metrics */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
              layout
            >
              <h3 className="font-semibold text-gray-900 mb-4">Live Organization Metrics</h3>
              <div className="space-y-3">
                <motion.div 
                  className="flex justify-between items-center"
                  layout
                >
                  <span className="text-sm text-gray-600">Total Employees</span>
                  <motion.span 
                    className="font-semibold text-gray-900"
                    key={orgMetrics.totalEmployees}
                    initial={{ scale: 1.2, color: '#10b981' }}
                    animate={{ scale: 1, color: '#111827' }}
                    transition={{ duration: 0.3 }}
                  >
                    {orgMetrics.totalEmployees}
                  </motion.span>
                </motion.div>
                <motion.div 
                  className="flex justify-between items-center"
                  layout
                >
                  <span className="text-sm text-gray-600">Avg Utilization</span>
                  <motion.span 
                    className="font-semibold text-gray-900"
                    key={orgMetrics.avgUtilization}
                    initial={{ scale: 1.2, color: '#10b981' }}
                    animate={{ scale: 1, color: '#111827' }}
                    transition={{ duration: 0.3 }}
                  >
                    {orgMetrics.avgUtilization}%
                  </motion.span>
                </motion.div>
                <motion.div 
                  className="flex justify-between items-center"
                  layout
                >
                  <span className="text-sm text-gray-600">High Risk</span>
                  <motion.span 
                    className="font-semibold text-red-600"
                    key={orgMetrics.highRisk}
                    initial={{ scale: 1.2, color: '#ef4444' }}
                    animate={{ scale: 1, color: '#dc2626' }}
                    transition={{ duration: 0.3 }}
                  >
                    {orgMetrics.highRisk}
                  </motion.span>
                </motion.div>
                <motion.div 
                  className="flex justify-between items-center"
                  layout
                >
                  <span className="text-sm text-gray-600">Total Payroll</span>
                  <motion.span 
                    className="font-semibold text-gray-900"
                    key={orgMetrics.totalPayroll}
                    initial={{ scale: 1.2, color: '#10b981' }}
                    animate={{ scale: 1, color: '#111827' }}
                    transition={{ duration: 0.3 }}
                  >
                    ${orgMetrics.totalPayroll}M
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationChart;