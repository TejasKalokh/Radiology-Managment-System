import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import SignIn from "../assets/signin_vector.jpg";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "patient"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real app, this would authenticate with a backend
    // For now, we'll just redirect based on user type
    
    switch (formData.userType) {
      case "admin":
        navigate("/admin-dashboard");
        break;
      case "doctor":
        navigate("/doctor-dashboard");
        break;
      case "reception":
        navigate("/reception-dashboard");
        break;
      case "patient":
      default:
        navigate("/patient-dashboard");
        break;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white relative px-4 sm:px-0">
      {/* Back Arrow */}
      <a
        href="/"
        className="absolute top-4 left-4 text-blue-500 text-3xl cursor-pointer"
      >
        <FontAwesomeIcon icon={faCircleLeft} />
      </a>

      <div className="flex flex-col sm:flex-row bg-[#6EBFF6] rounded-2xl shadow-2xl overflow-hidden w-full max-w-[800px]">
        {/* Left side with image */}
        <div className="w-full sm:w-1/2 flex items-center justify-center p-6">
          <img
            src={SignIn}
            alt="Medical Staff"
            className="w-full max-w-[300px] h-auto object-cover"
          />
        </div>

        {/* Right side with form */}
        <div className="w-full sm:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-center text-gray-700">SIGN IN</h2>

          <form className="mt-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-600 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-600 text-sm">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-600 text-sm">I am a</label>
              <select
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="reception">Receptionist</option>
                <option value="admin">Administrator</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full mt-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold"
            >
              Sign In
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account? <a href="/signUp" className="text-blue-500">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
