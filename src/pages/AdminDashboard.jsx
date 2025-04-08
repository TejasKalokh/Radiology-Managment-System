import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Users, Calendar, FileText, Settings, User, Database, BarChart2 } from "lucide-react";
import logo from "../assets/logo.png";

const AdminDashboard = () => {
  // State management
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  
  // Sample data - in a real app, these would come from an API
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [services, setServices] = useState([]);
  
  // Fetch data on component mount
  useEffect(() => {
    // Simulate API calls
    fetchDoctors();
    fetchPatients();
    fetchAppointments();
    fetchServices();
  }, []);
  
  // Mock data fetching functions
  const fetchDoctors = () => {
    // In a real app, this would be an API call
    const mockDoctors = [
      { id: 1, name: "Dr. John Smith", specialization: "Radiologist", email: "john.smith@example.com", phone: "123-456-7890" },
      { id: 2, name: "Dr. Sarah Johnson", specialization: "Sonographer", email: "sarah.j@example.com", phone: "234-567-8901" },
      { id: 3, name: "Dr. Michael Lee", specialization: "Cardiologist", email: "michael.lee@example.com", phone: "345-678-9012" },
    ];
    setDoctors(mockDoctors);
  };
  
  const fetchPatients = () => {
    // In a real app, this would be an API call
    const mockPatients = [
      { id: 1, name: "Alice Brown", age: 35, email: "alice@example.com", phone: "123-456-7890" },
      { id: 2, name: "Bob Wilson", age: 42, email: "bob@example.com", phone: "234-567-8901" },
      { id: 3, name: "Carol Taylor", age: 28, email: "carol@example.com", phone: "345-678-9012" },
    ];
    setPatients(mockPatients);
  };
  
  const fetchAppointments = () => {
    // In a real app, this would be an API call
    const mockAppointments = [
      { id: 1, patientName: "Alice Brown", doctorName: "Dr. John Smith", testType: "X-Ray", date: "2023-06-15", time: "10:30 AM", status: "Completed" },
      { id: 2, patientName: "Bob Wilson", doctorName: "Dr. Sarah Johnson", testType: "Ultrasound", date: "2023-06-16", time: "2:15 PM", status: "Scheduled" },
      { id: 3, patientName: "Carol Taylor", doctorName: "Dr. Michael Lee", testType: "ECG", date: "2023-06-17", time: "11:00 AM", status: "Pending" },
    ];
    setAppointments(mockAppointments);
  };
  
  const fetchServices = () => {
    // In a real app, this would be an API call
    const mockServices = [
      { id: 1, name: "X-Ray", price: 2500, description: "Digital X-Ray services" },
      { id: 2, name: "Ultrasound", price: 3500, description: "Comprehensive ultrasound scanning" },
      { id: 3, name: "ECG", price: 1500, description: "Electrocardiogram testing" },
      { id: 4, name: "MRI", price: 8000, description: "Magnetic Resonance Imaging" },
    ];
    setServices(mockServices);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white px-4 py-3 flex items-center justify-between shadow-md z-50 border-b-2 border-blue-900">
        {/* Mobile View */}
        <div className="w-full lg:hidden flex flex-row items-center">
          <h1 className="text-2xl font-bold whitespace-nowrap">Admin Dashboard</h1>
          <button
            className="text-white text-2xl ml-auto"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu size={32} />
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between w-full">
          <Link to="/">
            <img src={logo} alt="Website Logo" className="h-10 w-auto" />
          </Link>
          <h1 className="text-3xl font-bold absolute left-1/2 transform -translate-x-1/2">
            Admin Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <Link to="/">
              <button className="bg-white text-blue-600 font-bold px-6 py-2 rounded hover:bg-blue-100 transition">
                Sign Out
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area with Sidebar */}
      <div className="flex pt-16">
        {/* Desktop Sidebar (always visible on lg screens) */}
        <aside className="hidden lg:block w-64 bg-blue-800 text-white h-[calc(100vh-4rem)] fixed top-16 left-0 overflow-y-auto">
          <nav className="p-4">
            <div className="space-y-2">
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${
                  activeTab === "dashboard" ? "bg-blue-900" : "hover:bg-blue-700"
                }`}
              >
                <BarChart2 size={20} />
                <span>Dashboard</span>
              </button>
              
              <button
                onClick={() => setActiveTab("doctors")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${
                  activeTab === "doctors" ? "bg-blue-900" : "hover:bg-blue-700"
                }`}
              >
                <User size={20} />
                <span>Doctors</span>
              </button>
              
              <button
                onClick={() => setActiveTab("patients")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${
                  activeTab === "patients" ? "bg-blue-900" : "hover:bg-blue-700"
                }`}
              >
                <Users size={20} />
                <span>Patients</span>
              </button>
              
              <button
                onClick={() => setActiveTab("appointments")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${
                  activeTab === "appointments" ? "bg-blue-900" : "hover:bg-blue-700"
                }`}
              >
                <Calendar size={20} />
                <span>Appointments</span>
              </button>
              
              <button
                onClick={() => setActiveTab("services")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${
                  activeTab === "services" ? "bg-blue-900" : "hover:bg-blue-700"
                }`}
              >
                <FileText size={20} />
                <span>Services</span>
              </button>
              
              <button
                onClick={() => setActiveTab("settings")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${
                  activeTab === "settings" ? "bg-blue-900" : "hover:bg-blue-700"
                }`}
              >
                <Settings size={20} />
                <span>Settings</span>
              </button>
            </div>
          </nav>
        </aside>

        {/* Mobile Sidebar (conditional rendering) */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-blue-800 text-white p-6 shadow-lg transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden z-50`}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X size={24} />
          </button>
          
          <div className="mt-12 space-y-2">
            <button
              onClick={() => {
                setActiveTab("dashboard");
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${
                activeTab === "dashboard" ? "bg-blue-900" : "hover:bg-blue-700"
              }`}
            >
              <BarChart2 size={20} />
              <span>Dashboard</span>
            </button>
            
            <button
              onClick={() => {
                setActiveTab("doctors");
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${
                activeTab === "doctors" ? "bg-blue-900" : "hover:bg-blue-700"
              }`}
            >
              <User size={20} />
              <span>Doctors</span>
            </button>
            
            <button
              onClick={() => {
                setActiveTab("patients");
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${
                activeTab === "patients" ? "bg-blue-900" : "hover:bg-blue-700"
              }`}
            >
              <Users size={20} />
              <span>Patients</span>
            </button>
            
            <button
              onClick={() => {
                setActiveTab("appointments");
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${
                activeTab === "appointments" ? "bg-blue-900" : "hover:bg-blue-700"
              }`}
            >
              <Calendar size={20} />
              <span>Appointments</span>
            </button>
            
            <button
              onClick={() => {
                setActiveTab("services");
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${
                activeTab === "services" ? "bg-blue-900" : "hover:bg-blue-700"
              }`}
            >
              <FileText size={20} />
              <span>Services</span>
            </button>
            
            <button
              onClick={() => {
                setActiveTab("settings");
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg ${
                activeTab === "settings" ? "bg-blue-900" : "hover:bg-blue-700"
              }`}
            >
              <Settings size={20} />
              <span>Settings</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:ml-64 mt-4">
          {/* Dynamic content based on active tab */}
          {activeTab === "dashboard" && <DashboardPanel />}
          {activeTab === "doctors" && <DoctorsPanel doctors={doctors} setDoctors={setDoctors} />}
          {activeTab === "patients" && <PatientsPanel patients={patients} setPatients={setPatients} />}
          {activeTab === "appointments" && <AppointmentsPanel appointments={appointments} setAppointments={setAppointments} />}
          {activeTab === "services" && <ServicesPanel services={services} setServices={setServices} />}
          {activeTab === "settings" && <SettingsPanel />}
        </main>
      </div>
    </div>
  );
};

// Dashboard Panel Component
const DashboardPanel = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-gray-600">Total Doctors</h3>
          <p className="text-3xl font-bold mt-2">12</p>
          <p className="text-sm text-green-600 mt-2">↑ 2 new this month</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <h3 className="text-lg font-semibold text-gray-600">Total Patients</h3>
          <p className="text-3xl font-bold mt-2">1,248</p>
          <p className="text-sm text-green-600 mt-2">↑ 8% from last month</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <h3 className="text-lg font-semibold text-gray-600">Appointments</h3>
          <p className="text-3xl font-bold mt-2">286</p>
          <p className="text-sm text-green-600 mt-2">↑ 12% from last month</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
          <h3 className="text-lg font-semibold text-gray-600">Revenue</h3>
          <p className="text-3xl font-bold mt-2">₹4.2L</p>
          <p className="text-sm text-green-600 mt-2">↑ 5% from last month</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Recent Appointments</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 text-left">Patient</th>
                  <th className="py-2 px-4 text-left">Service</th>
                  <th className="py-2 px-4 text-left">Date</th>
                  <th className="py-2 px-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">Alice Brown</td>
                  <td className="py-2 px-4">X-Ray</td>
                  <td className="py-2 px-4">Today, 10:30 AM</td>
                  <td className="py-2 px-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Completed</span></td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Bob Wilson</td>
                  <td className="py-2 px-4">Ultrasound</td>
                  <td className="py-2 px-4">Today, 2:15 PM</td>
                  <td className="py-2 px-4"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">In Progress</span></td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Carol Taylor</td>
                  <td className="py-2 px-4">ECG</td>
                  <td className="py-2 px-4">Tomorrow, 11:00 AM</td>
                  <td className="py-2 px-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Scheduled</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Popular Services</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>X-Ray</span>
              <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <span className="text-sm">85%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Ultrasound</span>
              <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <span className="text-sm">75%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>MRI</span>
              <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <span className="text-sm">60%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>ECG</span>
              <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <span className="text-sm">45%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Doctors Management Panel
const DoctorsPanel = ({ doctors, setDoctors }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentDoctor, setCurrentDoctor] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    email: "",
    phone: "",
    availability: "Weekdays",
    qualifications: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const openAddModal = () => {
    setFormData({
      name: "",
      specialization: "",
      email: "",
      phone: "",
      availability: "Weekdays",
      qualifications: ""
    });
    setIsAddModalOpen(true);
  };

  const openEditModal = (doctor) => {
    setCurrentDoctor(doctor);
    setFormData({
      name: doctor.name,
      specialization: doctor.specialization,
      email: doctor.email,
      phone: doctor.phone,
      availability: doctor.availability || "Weekdays",
      qualifications: doctor.qualifications || ""
    });
    setIsEditModalOpen(true);
  };

  const handleAddDoctor = (e) => {
    e.preventDefault();
    const newDoctor = {
      id: Date.now(), // Use timestamp as a simple ID
      ...formData
    };
    setDoctors([...doctors, newDoctor]);
    setIsAddModalOpen(false);
  };

  const handleUpdateDoctor = (e) => {
    e.preventDefault();
    const updatedDoctors = doctors.map(doctor =>
      doctor.id === currentDoctor.id ? { ...doctor, ...formData } : doctor
    );
    setDoctors(updatedDoctors);
    setIsEditModalOpen(false);
  };

  const handleDeleteDoctor = (id) => {
    if (window.confirm("Are you sure you want to delete this doctor?")) {
      const filteredDoctors = doctors.filter(doctor => doctor.id !== id);
      setDoctors(filteredDoctors);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Doctors</h2>
        <button
          onClick={openAddModal}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add New Doctor
        </button>
      </div>

      {/* Doctors Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-blue-100 border-b">
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Specialization</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Phone</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{doctor.name}</td>
                  <td className="py-3 px-4">{doctor.specialization}</td>
                  <td className="py-3 px-4">{doctor.email}</td>
                  <td className="py-3 px-4">{doctor.phone}</td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => openEditModal(doctor)}
                        className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteDoctor(doctor.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {doctors.length === 0 && (
                <tr>
                  <td colSpan="5" className="py-4 px-4 text-center text-gray-500">
                    No doctors found. Click "Add New Doctor" to create one.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Doctor Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <h3 className="text-xl font-semibold mb-4">Add New Doctor</h3>
            <form onSubmit={handleAddDoctor}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Specialization
                </label>
                <input
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Availability
                </label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="Weekdays">Weekdays</option>
                  <option value="Weekends">Weekends</option>
                  <option value="All Days">All Days</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Qualifications
                </label>
                <textarea
                  name="qualifications"
                  value={formData.qualifications}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  rows="3"
                ></textarea>
              </div>
              
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add Doctor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Doctor Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <h3 className="text-xl font-semibold mb-4">Edit Doctor</h3>
            <form onSubmit={handleUpdateDoctor}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Specialization
                </label>
                <input
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Availability
                </label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="Weekdays">Weekdays</option>
                  <option value="Weekends">Weekends</option>
                  <option value="All Days">All Days</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Qualifications
                </label>
                <textarea
                  name="qualifications"
                  value={formData.qualifications}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  rows="3"
                ></textarea>
              </div>
              
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Update Doctor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// Patients Management Panel
const PatientsPanel = ({ patients, setPatients }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentPatient, setCurrentPatient] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    address: "",
    gender: "Male",
    medicalHistory: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const openAddModal = () => {
    setFormData({
      name: "",
      age: "",
      email: "",
      phone: "",
      address: "",
      gender: "Male",
      medicalHistory: ""
    });
    setIsAddModalOpen(true);
  };

  const openEditModal = (patient) => {
    setCurrentPatient(patient);
    setFormData({
      name: patient.name,
      age: patient.age,
      email: patient.email,
      phone: patient.phone,
      address: patient.address || "",
      gender: patient.gender || "Male",
      medicalHistory: patient.medicalHistory || ""
    });
    setIsEditModalOpen(true);
  };

  const handleAddPatient = (e) => {
    e.preventDefault();
    const newPatient = {
      id: Date.now(),
      ...formData,
      age: parseInt(formData.age)
    };
    setPatients([...patients, newPatient]);
    setIsAddModalOpen(false);
  };

  const handleUpdatePatient = (e) => {
    e.preventDefault();
    const updatedPatients = patients.map(patient =>
      patient.id === currentPatient.id 
        ? { ...patient, ...formData, age: parseInt(formData.age) } 
        : patient
    );
    setPatients(updatedPatients);
    setIsEditModalOpen(false);
  };

  const handleDeletePatient = (id) => {
    if (window.confirm("Are you sure you want to delete this patient?")) {
      const filteredPatients = patients.filter(patient => patient.id !== id);
      setPatients(filteredPatients);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Patients</h2>
        <button
          onClick={openAddModal}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add New Patient
        </button>
      </div>

      {/* Patients Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-blue-100 border-b">
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Age</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Phone</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{patient.id}</td>
                  <td className="py-3 px-4">{patient.name}</td>
                  <td className="py-3 px-4">{patient.age}</td>
                  <td className="py-3 px-4">{patient.email}</td>
                  <td className="py-3 px-4">{patient.phone}</td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => openEditModal(patient)}
                        className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeletePatient(patient.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {patients.length === 0 && (
                <tr>
                  <td colSpan="6" className="py-4 px-4 text-center text-gray-500">
                    No patients found. Click "Add New Patient" to create one.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Patient Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <h3 className="text-xl font-semibold mb-4">Add New Patient</h3>
            <form onSubmit={handleAddPatient}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                  min="0"
                  max="120"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  rows="2"
                ></textarea>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Medical History
                </label>
                <textarea
                  name="medicalHistory"
                  value={formData.medicalHistory}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  rows="3"
                ></textarea>
              </div>
              
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add Patient
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Patient Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <h3 className="text-xl font-semibold mb-4">Edit Patient</h3>
            <form onSubmit={handleUpdatePatient}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                  min="0"
                  max="120"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  rows="2"
                ></textarea>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Medical History
                </label>
                <textarea
                  name="medicalHistory"
                  value={formData.medicalHistory}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  rows="3"
                ></textarea>
              </div>
              
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Update Patient
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// Appointments Management Panel
const AppointmentsPanel = ({ appointments, setAppointments }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [currentAppointment, setCurrentAppointment] = useState(null);
  const [formData, setFormData] = useState({
    patientName: "",
    doctorName: "",
    testType: "",
    date: "",
    time: "",
    status: "Scheduled",
    notes: ""
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const openAddModal = () => {
    setFormData({
      patientName: "",
      doctorName: "",
      testType: "",
      date: "",
      time: "",
      status: "Scheduled",
      notes: ""
    });
    setIsAddModalOpen(true);
  };

  const openEditModal = (appointment) => {
    setCurrentAppointment(appointment);
    setFormData({
      patientName: appointment.patientName,
      doctorName: appointment.doctorName,
      testType: appointment.testType,
      date: appointment.date,
      time: appointment.time,
      status: appointment.status,
      notes: appointment.notes || ""
    });
    setIsEditModalOpen(true);
  };

  const openViewModal = (appointment) => {
    setCurrentAppointment(appointment);
    setIsViewModalOpen(true);
  };

  const handleAddAppointment = (e) => {
    e.preventDefault();
    const newAppointment = {
      id: Date.now(),
      ...formData
    };
    setAppointments([...appointments, newAppointment]);
    setIsAddModalOpen(false);
  };

  const handleUpdateAppointment = (e) => {
    e.preventDefault();
    const updatedAppointments = appointments.map(appointment =>
      appointment.id === currentAppointment.id ? { ...appointment, ...formData } : appointment
    );
    setAppointments(updatedAppointments);
    setIsEditModalOpen(false);
  };

  const handleDeleteAppointment = (id) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      const filteredAppointments = appointments.filter(appointment => appointment.id !== id);
      setAppointments(filteredAppointments);
    }
  };

  // Filter appointments based on search query and status filter
  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = 
      appointment.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.doctorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.testType.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "All" || appointment.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Appointments</h2>
        <button
          onClick={openAddModal}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add New Appointment
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search patient or doctor name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="All">All Status</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
            <option value="No Show">No Show</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>

      {/* Appointments Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-blue-100 border-b">
                <th className="py-3 px-4 text-left">Patient</th>
                <th className="py-3 px-4 text-left">Doctor</th>
                <th className="py-3 px-4 text-left">Test Type</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Time</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.map((appointment) => (
                <tr key={appointment.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{appointment.patientName}</td>
                  <td className="py-3 px-4">{appointment.doctorName}</td>
                  <td className="py-3 px-4">{appointment.testType}</td>
                  <td className="py-3 px-4">{appointment.date}</td>
                  <td className="py-3 px-4">{appointment.time}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        appointment.status === "Completed" ? "bg-green-100 text-green-800" :
                        appointment.status === "Scheduled" ? "bg-blue-100 text-blue-800" :
                        appointment.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                        appointment.status === "Cancelled" ? "bg-red-100 text-red-800" :
                        "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => openViewModal(appointment)}
                        className="bg-gray-500 text-white px-2 py-1 rounded-md text-xs hover:bg-gray-600"
                      >
                        View
                      </button>
                      <button
                        onClick={() => openEditModal(appointment)}
                        className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs hover:bg-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteAppointment(appointment.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded-md text-xs hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredAppointments.length === 0 && (
                <tr>
                  <td colSpan="7" className="py-4 px-4 text-center text-gray-500">
                    No appointments found. {searchQuery || statusFilter !== "All" ? "Try changing your search or filter." : "Click \"Add New Appointment\" to create one."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Appointment Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <h3 className="text-xl font-semibold mb-4">Add New Appointment</h3>
            <form onSubmit={handleAddAppointment}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Patient Name
                </label>
                <input
                  type="text"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Doctor Name
                </label>
                <input
                  type="text"
                  name="doctorName"
                  value={formData.doctorName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Test Type
                </label>
                <select
                  name="testType"
                  value={formData.testType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                >
                  <option value="">Select Test Type</option>
                  <option value="X-Ray">X-Ray</option>
                  <option value="MRI">MRI</option>
                  <option value="CT Scan">CT Scan</option>
                  <option value="Ultrasound">Ultrasound</option>
                  <option value="ECG">ECG</option>
                  <option value="Blood Test">Blood Test</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="Scheduled">Scheduled</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                  <option value="No Show">No Show</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  rows="3"
                ></textarea>
              </div>
              
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Appointment Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <h3 className="text-xl font-semibold mb-4">Edit Appointment</h3>
            <form onSubmit={handleUpdateAppointment}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Patient Name
                </label>
                <input
                  type="text"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Doctor Name
                </label>
                <input
                  type="text"
                  name="doctorName"
                  value={formData.doctorName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Test Type
                </label>
                <select
                  name="testType"
                  value={formData.testType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                >
                  <option value="">Select Test Type</option>
                  <option value="X-Ray">X-Ray</option>
                  <option value="MRI">MRI</option>
                  <option value="CT Scan">CT Scan</option>
                  <option value="Ultrasound">Ultrasound</option>
                  <option value="ECG">ECG</option>
                  <option value="Blood Test">Blood Test</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="Scheduled">Scheduled</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                  <option value="No Show">No Show</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  rows="3"
                ></textarea>
              </div>
              
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Update Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Appointment Modal */}
      {isViewModalOpen && currentAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <h3 className="text-xl font-semibold mb-4">Appointment Details</h3>
            
            <div className="mb-6 space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-500">Patient Name</h4>
                <p>{currentAppointment.patientName}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-500">Doctor Name</h4>
                <p>{currentAppointment.doctorName}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-500">Test Type</h4>
                <p>{currentAppointment.testType}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-500">Date & Time</h4>
                <p>{currentAppointment.date} at {currentAppointment.time}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-500">Status</h4>
                <p>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      currentAppointment.status === "Completed" ? "bg-green-100 text-green-800" :
                      currentAppointment.status === "Scheduled" ? "bg-blue-100 text-blue-800" :
                      currentAppointment.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                      currentAppointment.status === "Cancelled" ? "bg-red-100 text-red-800" :
                      "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {currentAppointment.status}
                  </span>
                </p>
              </div>
              
              {currentAppointment.notes && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-500">Notes</h4>
                  <p className="text-sm">{currentAppointment.notes}</p>
                </div>
              )}
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={() => setIsViewModalOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Services Management Panel
const ServicesPanel = ({ services, setServices }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    duration: "",
    category: "Radiology"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const openAddModal = () => {
    setFormData({
      name: "",
      price: "",
      description: "",
      duration: "",
      category: "Radiology"
    });
    setIsAddModalOpen(true);
  };

  const openEditModal = (service) => {
    setCurrentService(service);
    setFormData({
      name: service.name,
      price: service.price,
      description: service.description,
      duration: service.duration || "",
      category: service.category || "Radiology"
    });
    setIsEditModalOpen(true);
  };

  const handleAddService = (e) => {
    e.preventDefault();
    const newService = {
      id: Date.now(),
      ...formData,
      price: parseFloat(formData.price)
    };
    setServices([...services, newService]);
    setIsAddModalOpen(false);
  };

  const handleUpdateService = (e) => {
    e.preventDefault();
    const updatedServices = services.map(service =>
      service.id === currentService.id 
        ? { ...service, ...formData, price: parseFloat(formData.price) } 
        : service
    );
    setServices(updatedServices);
    setIsEditModalOpen(false);
  };

  const handleDeleteService = (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      const filteredServices = services.filter(service => service.id !== id);
      setServices(filteredServices);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Services</h2>
        <button
          onClick={openAddModal}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add New Service
        </button>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <div 
            key={service.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <div className="text-lg font-bold text-blue-600">₹{service.price}</div>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              {service.duration && (
                <div className="text-sm text-gray-500 mb-2">
                  <span className="font-medium">Duration:</span> {service.duration}
                </div>
              )}
              
              {service.category && (
                <div className="text-sm text-gray-500 mb-4">
                  <span className="font-medium">Category:</span> {service.category}
                </div>
              )}
              
              <div className="flex space-x-2 mt-4">
                <button
                  onClick={() => openEditModal(service)}
                  className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteService(service.id)}
                  className="flex-1 bg-red-500 text-white px-4 py-2 rounded-md text-sm hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {services.length === 0 && (
          <div className="col-span-full text-center py-8 bg-white rounded-lg shadow-md">
            <p className="text-gray-500">No services found. Click "Add New Service" to create one.</p>
          </div>
        )}
      </div>

      {/* Add Service Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <h3 className="text-xl font-semibold mb-4">Add New Service</h3>
            <form onSubmit={handleAddService}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Service Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Price (₹)
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                  min="0"
                  step="0.01"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Duration (e.g., "30 minutes")
                </label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="Radiology">Radiology</option>
                  <option value="Ultrasound">Ultrasound</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Laboratory">Laboratory</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  rows="3"
                  required
                ></textarea>
              </div>
              
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Service Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <h3 className="text-xl font-semibold mb-4">Edit Service</h3>
            <form onSubmit={handleUpdateService}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Service Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Price (₹)
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                  min="0"
                  step="0.01"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Duration (e.g., "30 minutes")
                </label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="Radiology">Radiology</option>
                  <option value="Ultrasound">Ultrasound</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Laboratory">Laboratory</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  rows="3"
                  required
                ></textarea>
              </div>
              
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Update Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// Settings Panel Component
const SettingsPanel = () => {
  const [settings, setSettings] = useState({
    centerName: "City Radiology Center",
    address: "123 Medical Plaza, City Center",
    phone: "+91 98765 43210",
    email: "info@cityradiologycenter.com",
    workingHours: "9:00 AM - 7:00 PM",
    workingDays: "Monday - Saturday",
    enableSMS: true,
    enableEmail: true,
    enableWhatsApp: false,
    theme: "blue"
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // In a real app, this would make an API call to save settings
    alert("Settings saved successfully!");
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold">System Settings</h2>
        <p className="text-gray-600">Manage your center's configuration and preferences</p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSave}>
          {/* Center Information */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Center Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Center Name
                </label>
                <input
                  type="text"
                  name="centerName"
                  value={settings.centerName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={settings.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={settings.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={settings.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Working Hours
                </label>
                <input
                  type="text"
                  name="workingHours"
                  value={settings.workingHours}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Working Days
                </label>
                <input
                  type="text"
                  name="workingDays"
                  value={settings.workingDays}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Notification Settings</h3>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="enableSMS"
                  checked={settings.enableSMS}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600"
                />
                <label className="ml-2 text-gray-700">
                  Enable SMS notifications for appointments
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="enableEmail"
                  checked={settings.enableEmail}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600"
                />
                <label className="ml-2 text-gray-700">
                  Enable Email notifications for appointments
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="enableWhatsApp"
                  checked={settings.enableWhatsApp}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600"
                />
                <label className="ml-2 text-gray-700">
                  Enable WhatsApp notifications (requires integration)
                </label>
              </div>
            </div>
          </div>

          {/* Theme Settings */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Appearance</h3>
            
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Theme Color
              </label>
              <div className="flex gap-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="theme"
                    value="blue"
                    checked={settings.theme === "blue"}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 w-4 h-4 rounded-full bg-blue-600"></span>
                  <label className="ml-2 text-gray-700">Blue</label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="theme"
                    value="green"
                    checked={settings.theme === "green"}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-green-600"
                  />
                  <span className="ml-2 w-4 h-4 rounded-full bg-green-600"></span>
                  <label className="ml-2 text-gray-700">Green</label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="theme"
                    value="purple"
                    checked={settings.theme === "purple"}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-purple-600"
                  />
                  <span className="ml-2 w-4 h-4 rounded-full bg-purple-600"></span>
                  <label className="ml-2 text-gray-700">Purple</label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard; 