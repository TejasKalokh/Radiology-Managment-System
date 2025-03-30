// // // src/components/Header.js
// // import React from 'react';
// // import logo from "../assets/logo.png";

// // const Header = ({ notificationCount }) => (
// //   <header >
// //     <div className="logo">
// //       <img src="{logo}" alt="Website Logo" />
// //     </div>
// //     <div className="header-left">
// //       <h1>Patient Dashboard</h1>
// //     </div>
// //     <div className="header-right">
// //       <div className="notification">
// //         <i className="fa-regular fa-bell"></i>
// //         <span className="badge">{notificationCount}</span>
// //       </div>
// //       <div className="auth-buttons">
// //         <a href="signin.html">
// //           <button id="sign-in-btn">Sign In</button>
// //         </a>
// //         <a href="signup.html">
// //           <button id="sign-up-btn">Sign Up</button>
// //         </a>
// //       </div>
// //     </div>
// //   </header>
// // );

// // export default Header;

// // src/components/Header.js
// import React from "react";
// import logo from "../assets/logo.png";

// const Header = ({ notificationCount }) => (
//   <header>
//     <div className="logo">
//       <img src={logo} alt="Website Logo" />
//     </div>
//     <div className="header-left">
//       <h1>Patient Dashboard</h1>
//     </div>
//     <div className="header-right">
//       <div className="notification">
//         <i className="fa-regular fa-bell"></i>
//         <span className="badge">{notificationCount}</span>
//       </div>
//       <div className="auth-buttons">
//         <a href="signin.html">
//           <button id="sign-in-btn">Sign In</button>
//         </a>
//         <a href="signup.html">
//           <button id="sign-up-btn">Sign Up</button>
//         </a>
//       </div>
//     </div>
//   </header>
// );

// export default Header;






// import { useState } from "react";
// import { Menu, X, Bell } from "lucide-react";
// import logo from "../assets/logo.png"; // ✅ Correct Import

// const Header = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-2 flex items-center justify-between shadow-md z-[1000] border-b-2 border-blue-900 h-14">


//       {/* Mobile View: Hamburger Menu on Left (No Background) */}
//       <button
//   className="lg:hidden text-white text-3xl absolute left-4 top-4 hover:text-gray-300 z-[9999]"
//   onClick={() => setIsSidebarOpen(!isSidebarOpen)}
// >
//   <Menu size={36} />
// </button>



//       {/* Logo (Centered in Mobile) */}
//       <div className="flex-1 flex justify-center lg:justify-start">
//         <img src={logo} alt="Website Logo" className="h-10" />
//       </div>

//       {/* Heading (Perfectly Centered in Desktop Mode) */}
//       <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block">
//         <h1 className="text-4xl font-bold">Patient Dashboard</h1>
//       </div>

//       {/* Right Section (Desktop Only) */}
//       <div className="hidden lg:flex items-center gap-6">
//         {/* Notification Bell */}
//         <div className="relative cursor-pointer">
//           <Bell size={28} />
//           <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
//             3
//           </span>
//         </div>

//         {/* Auth Buttons */}
//         <div className="flex gap-4">
//           <a href="signin.html">
//             <button className="bg-white text-blue-600 font-bold text-lg px-6 py-2 rounded hover:bg-blue-700 hover:text-white transition">
//               Sign In
//             </button>
//           </a>
//           <a href="signup.html">
//             <button className="bg-white text-blue-600 font-bold text-lg px-6 py-2 rounded hover:bg-blue-700 hover:text-white transition">
//               Sign Up
//             </button>
//           </a>
//         </div>
//       </div>

//       {/* Mobile Sidebar */}
//       {isSidebarOpen && (
//         <div className="fixed top-0 left-0 h-full w-64 bg-blue-900 text-white p-6 shadow-lg flex flex-col">
//           {/* Close Button (No Background) */}
//           <button className="text-white text-2xl self-end mb-5 hover:text-gray-300" onClick={() => setIsSidebarOpen(false)}>
//             <X size={32} />
//           </button>

//           {/* Notification (Properly Placed) */}
//           <div className="relative cursor-pointer mb-5 self-center">
//             <Bell size={28} />
//             <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
//               3
//             </span>
//           </div>

//           {/* Auth Buttons (Centered in Sidebar) */}
//           <a href="signin.html" className="text-lg font-semibold py-2 text-center">Sign In</a>
//           <a href="signup.html" className="text-lg font-semibold py-2 text-center">Sign Up</a>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


import { useState } from "react";
import { Menu, X, Bell } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-3 flex items-center justify-between shadow-md z-50 border-b-2 border-blue-900">
        {/* Mobile View */}
        <div className="w-full lg:hidden flex flex-row items-center">
          {/* Heading fully on the left */}
          <h1 className="text-2xl font-bold whitespace-nowrap">Patient Dashboard</h1>

          {/* Button fully on the right */}
          <button
            className="text-white text-2xl ml-auto"  // 🔹 'ml-auto' pushes button to extreme right
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
            Patient Dashboard
          </h1>
          <div className="flex items-center gap-6">
            
            <div className="flex gap-4">
              <Link to="/">
                <button className="bg-white text-blue-600 font-bold text-lg px-6 py-2 rounded hover:bg-blue-700 hover:text-white transition">
                  Sign Out
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>


      {/* Sidebar Panel (Mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white p-6 shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden z-50`}
      >
        {/* Close Button - Fully Right Inside Sidebar */}
        <button
          className="absolute top-4 right-0 text-white text-2xl px-4"
          onClick={() => setIsSidebarOpen(false)}
        >
          <X size={32} />
        </button>

        {/* Space Below Button to Avoid Overlap */}
        <nav className="mt-12 flex flex-col items-center">
          <Link to="/">
            <img src={logo} alt="Website Logo" className="h-12 w-auto mb-4" />
          </Link>
          <Link
            to="/"
            className="block text-lg font-semibold py-2 mt-3 bg-blue-700 rounded text-center hover:bg-blue-600 w-full"
          >
            Sign Out
          </Link>
        </nav>
      </div>

      {/* Background overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

    </>
  );
};

export default Header;
