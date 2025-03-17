// import React from "react";
// import { Link } from "react-router-dom";

// const SignIn = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign In</h2>
        
//         <form>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your email" />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <input type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your password" />
//           </div>

//           <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">Sign In</button>
//         </form>

//         <p className="mt-4 text-center text-gray-600">
//           Don't have an account? <Link to="/signup" className="text-blue-500 font-bold">Sign Up</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignIn;
import React from "react";
import SignIn from "../assets/signin_vector.jpg"
import signUp from "../pages/signUp"

const Signin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex bg-[#6EBFF6] rounded-2xl shadow-2xl overflow-hidden w-[800px]">
        {/* Left side with image */}
        <div className="w-1/2 flex items-center justify-center p-6">
          <img
            src={SignIn} 
            alt="Medical Staff"
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Right side with form */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-center text-gray-700">SIGN IN</h2>
          
          <form className="mt-4">
            <div>
              <label className="block text-gray-600 text-sm">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-600 text-sm">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
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
            Don't have an account? <a href="/signUp" className="text-blue-500">SignUp</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
