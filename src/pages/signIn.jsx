import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import SignIn from "../assets/signin_vector.jpg";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { SignIn: signIn, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // If user is already logged in, redirect to their dashboard
    if (user) {
      switch (user.role.toUpperCase()) {
        case "PATIENT":
          navigate("/patient-dashboard");
          break;
        case "DOCTOR":
          navigate("/doctor-dashboard");
          break;
        case "RECEPTIONIST":
          navigate("/reception-dashboard");
          break;
        case "ADMIN":
          navigate("/admin-dashboard");
          break;
        default:
          navigate("/");
      }
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
        username: email,
        password: password
      }, {
        withCredentials: true
      });

      if (response.data.status === "success") {
        const userData = {
          username: response.data.username,
          role: response.data.role
        };
        signIn(userData);

        // Redirect based on role
        switch (response.data.role.toUpperCase()) {
          case "PATIENT":
            navigate("/patient-dashboard");
            break;
          case "DOCTOR":
            navigate("/doctor-dashboard");
            break;
          case "RECEPTIONIST":
            navigate("/reception-dashboard");
            break;
          case "ADMIN":
            navigate("/admin-dashboard");
            break;
          default:
            navigate("/");
        }
      }
    } catch (error) {
      setError(error.response?.data?.message || "Failed to sign in");
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

          {error && (
            <div className="mt-4 p-2 bg-red-100 text-red-600 rounded-lg text-sm text-center">
              {error}
            </div>
          )}

          <form className="mt-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-600 text-sm">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-600 text-sm">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
                required
              />
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
