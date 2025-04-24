import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import SignUn from "../assets/signup_vector.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Create username in the format PhnNo@name
      const username = `${formData.phoneNumber}@${formData.firstName}`;
      
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/signup`, {
        username: username,
        password: formData.password,
        firstName: formData.firstName,
        middleName: formData.middleName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        role: "PATIENT" // Default role for signup
      });

      if (response.data.status === "success") {
        // Immediately redirect to signin page
        navigate("/signIn");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Failed to sign up. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4 relative">

      {/* Back Arrow */}
      <a 
        href="/" 
        className="absolute top-4 left-4 text-blue-500 text-2xl md:text-3xl cursor-pointer"
      >
        <FontAwesomeIcon icon={faCircleLeft} />
      </a>

      <div className="flex flex-col md:flex-row bg-[#6EBFF6] rounded-2xl shadow-2xl overflow-hidden w-full max-w-[800px] h-[750px] sm:h-auto pb-10 sm:pb-6">
        
        {/* Left side with image */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-6">
          <img
            src={SignUn}
            alt="Medical Staff"
            className="w-full h-auto object-contain max-h-[250px] md:max-h-full"
          />
        </div>
        
        {/* Right side with form */}
        <div className="w-full md:w-1/2 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-center text-gray-700">SIGN UP</h2>

          {error && (
            <div className="mt-4 p-2 bg-red-100 text-red-600 rounded-lg text-sm text-center">
              {error}
            </div>
          )}

          {success && (
            <div className="mt-4 p-2 bg-green-100 text-green-600 rounded-lg text-sm text-center">
              Sign up successful! Redirecting to sign in...
            </div>
          )}

          <form className="mt-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-600 text-sm">Name</label>
              <div className="flex gap-2 mt-2">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-1/3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="First"
                  required
                />
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  className="w-1/3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Middle"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-1/3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Last"
                  required
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-gray-600 text-sm">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-600 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading || success}
              className="w-full mt-5 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold disabled:bg-blue-300"
            >
              {loading ? "Signing up..." : success ? "Sign up successful!" : "Sign Up"}
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account? <a href="/signIn" className="text-blue-500">SignIn</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

