// import React from "react";
// import { Link } from "react-router-dom";

// const SignUp = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign Up</h2>
        
//         <form>
//           <div className="mb-4">
//             <label className="block text-gray-700">Full Name</label>
//             <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your name" />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your email" />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <input type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Create a password" />
//           </div>

//           <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">Sign Up</button>
//         </form>

//         <p className="mt-4 text-center text-gray-600">
//           Already have an account? <Link to="/signin" className="text-blue-500 font-bold">Sign In</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;


import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons"; 
import SignUn from "../assets/signup_vector.jpg";

const Signup = () => {
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

          <form className="mt-4">
            <div>
              <label className="block text-gray-600 text-sm">Full Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-600 text-sm">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-600 text-sm">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-5 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold"
            >
              Sign Up
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

