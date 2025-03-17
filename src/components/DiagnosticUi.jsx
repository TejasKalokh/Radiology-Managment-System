import { Menu, X, Bell } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import React, { useEffect, useState } from "react";
import "../css/doctor.css"; 
import { Link } from "react-router-dom";
import navbar from "../components/Navbar"

const DiagnosticUi = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link to="/">
            <img src={logo} alt="Website Logo" className="h-10 w-auto" />
          </Link>
          <h1 className="text-3xl font-bold">Diagnostic Center</h1>
          <Link to="/appointment" className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 hover:text-white transition">
            Book Appointment
          </Link>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-lg p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-4">CT Scan Services</h2>
          <p className="text-gray-600 mb-6">
            We provide state-of-the-art CT scan services with precise imaging and quick results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-100 p-4 rounded-md shadow-sm">
              <h3 className="text-lg font-semibold text-blue-600">High-Resolution Imaging</h3>
              <p className="text-gray-600">Experience crystal-clear imaging for accurate diagnosis.</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-md shadow-sm">
              <h3 className="text-lg font-semibold text-blue-600">Quick Report Delivery</h3>
              <p className="text-gray-600">Get your reports within 24 hours for faster treatment decisions.</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-lg p-6"
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Book Your CT Scan Today</h2>
          <p className="text-gray-600 mb-6">
            Schedule your appointment with ease through our online booking portal.
          </p>
          <Link to="/book-appointment" className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
            Book Now
          </Link>
        </motion.section>
      </main>
    </div>
  );
};

export default DiagnosticUi;
