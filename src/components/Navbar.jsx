// import { useState, useEffect } from "react";
// import logo from "../assets/logo.png";
// import menuIcon from "../assets/ham-menu-icon.png";
// import closeIcon from "../assets/close-icon.png";
// import searchIcon from "../assets/search-icon.png";
// import searchIconDark from "../assets/search-icon-dark.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchImg, setSearchImg] = useState(searchIcon);

//   useEffect(() => {
//     const changeSearchIcon = () => {
//       if (window.innerWidth >= 1200) {
//         setSearchImg(searchIcon);
//       } else {
//         setSearchImg(searchIconDark);
//       }
//     };

//     window.addEventListener("resize", changeSearchIcon);
//     changeSearchIcon();

//     return () => window.removeEventListener("resize", changeSearchIcon);
//   }, []);

//   return (
//     <header className="bg-blue-500 min-h-screen">
//       <nav className="fixed top-0 left-0 w-full bg-blue-500 p-6 z-50 shadow-md">
//         <div className="container mx-auto flex justify-between items-center">
//           <a href="/" className="navbar-brand">
//             <img src={logo} alt="site logo" className="w-40" />
//           </a>
//           <button onClick={() => setIsOpen(true)} className="block md:hidden">
//             <img src={menuIcon} alt="menu" className="w-8" />
//           </button>

//           <div
//             className={`fixed top-0 right-0 w-full h-full bg-white p-8 flex flex-col justify-between shadow-lg transform transition-transform duration-300 md:static md:flex-row md:items-center md:w-auto md:h-auto md:bg-transparent md:p-0 md:shadow-none md:translate-x-0 ${
//               isOpen ? "translate-x-0" : "translate-x-full"
//             }`}
//           >
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-5 right-5 md:hidden"
//             >
//               <img src={closeIcon} alt="close" className="w-8" />
//             </button>
//             <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
//               {["Home", "About", "Service", "Doctors", "Departments", "Blog", "Contact"].map((item) => (
//                 <li key={item}>
//                   <a
//                     href="#"
//                     className="text-gray-800 hover:text-blue-500 transition"
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//             <div className="flex gap-4 mt-4 md:mt-0">
//               <a
//                 href="signin.html"
//                 className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition"
//               >
//                 Sign In
//               </a>
//               <a
//                 href="signup.html"
//                 className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-700 hover:text-white transition"
//               >
//                 Sign Up
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <div className="text-white text-center flex flex-col items-center justify-center h-screen">
//         <h1 className="text-4xl font-light">
//           Expert Imaging, <br /> <span className="font-semibold uppercase">Trusted Care.</span>
//         </h1>
//         <p className="text-lg">The best match services for you</p>
//         <p className="max-w-lg text-md opacity-90 mt-6">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nulla odit esse necessitatibus corporis voluptatem?
//         </p>
//         <div className="flex gap-4 mt-6">
//           <a href="#" className="px-6 py-3 bg-white text-blue-500 rounded-md shadow-md hover:shadow-lg transition">
//             Learn More
//           </a>
//           <a href="#" className="px-6 py-3 bg-blue-400 text-white rounded-md shadow-md hover:shadow-lg transition">
//             Sign In
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


// import { useState, useEffect } from "react";
// import logo from "../assets/logo.png";
// import menuIcon from "../assets/ham-menu-icon.png";
// import closeIcon from "../assets/close-icon.png";
// import searchIcon from "../assets/search-icon.png";
// import searchIconDark from "../assets/search-icon-dark.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchImg, setSearchImg] = useState(searchIcon);

//   useEffect(() => {
//     const changeSearchIcon = () => {
//       setSearchImg(window.innerWidth >= 1200 ? searchIcon : searchIconDark);
//     };

//     window.addEventListener("resize", changeSearchIcon);
//     changeSearchIcon();

//     return () => window.removeEventListener("resize", changeSearchIcon);
//   }, []);

//   return (
//     <header className="bg-blue-500 min-h-screen">
//       <nav className="fixed top-0 left-0 w-full bg-blue-500 p-6 z-50 shadow-md">
//         <div className="container mx-auto flex justify-between items-center">
//           <a href="/" className="navbar-brand">
//             <img src={logo} alt="site logo" className="w-40" />
//           </a>
//           <button onClick={() => setIsOpen(true)} className="block md:hidden">
//             <img src={menuIcon} alt="menu" className="w-8" />
//           </button>

//           <div
//             className={`fixed top-0 right-0 w-full h-full bg-white p-8 flex flex-col justify-between shadow-lg transform transition-transform duration-300 md:static md:flex-row md:items-center md:w-auto md:h-auto md:bg-transparent md:p-0 md:shadow-none md:translate-x-0 ${
//               isOpen ? "translate-x-0" : "translate-x-full"
//             }`}
//           >
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-5 right-5 md:hidden"
//             >
//               <img src={closeIcon} alt="close" className="w-8" />
//             </button>
//             <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
//               {["Home", "About", "Service", "Doctors", "Departments", "Blog", "Contact"].map((item) => (
//                 <li key={item}>
//                   <a href="#" className="text-gray-800 hover:text-blue-500 transition">
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//             <div className="flex flex-col gap-4 mt-4 md:mt-0 md:flex-row">
//               <a
//                 href="signin.html"
//                 className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition"
//               >
//                 Sign In
//               </a>
//               <a
//                 href="signup.html"
//                 className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-md hover:bg-blue-700 hover:text-white transition"
//               >
//                 Sign Up
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <div className="text-white text-center flex flex-col items-center justify-center h-screen p-4 md:p-0">
//         <h1 className="text-3xl md:text-5xl font-light">
//           Expert Imaging, <br /> <span className="font-semibold uppercase">Trusted Care.</span>
//         </h1>
//         <p className="text-md md:text-lg">The best match services for you</p>
//         <p className="max-w-lg text-sm md:text-md opacity-90 mt-6">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nulla odit esse necessitatibus corporis voluptatem?
//         </p>
//         <div className="flex flex-col md:flex-row gap-4 mt-6">
//           <a href="#" className="px-6 py-3 bg-white text-blue-500 rounded-md shadow-md hover:shadow-lg transition">
//             Learn More
//           </a>
//           <a href="#" className="px-6 py-3 bg-blue-400 text-white rounded-md shadow-md hover:shadow-lg transition">
//             Sign In
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";
// import hamMenuIcon from "../assets/ham-menu-icon.png";
// import closeIcon from "../assets/close-icon.png";
// import headerImage from "../assets/header.png";

// const Navbar = () => {
//   const [navOpen, setNavOpen] = useState(false);
//   console.log("Navbar")
//   return (
//     <header className="bg-blue-500 pt-20">
//       <nav className="fixed top-0 left-0 w-full py-6 z-50 bg-blue-500 shadow-md">
//         <div className="container mx-auto flex items-center justify-between px-6">
//           {/* Logo */}
//           <Link to="/" className="navbar-brand">
//             <img src={logo} alt="Site Logo" className="w-40" />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <ul className="flex space-x-6">
//               {["Home", "About", "Service", "Doctors", "Departments", "Blog", "Contact"].map((item) => (
//                 <li key={item}>
//                   <Link to="#" className="text-white font-semibold hover:text-gray-200 transition">
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>

//             {/* Sign In & Sign Up Buttons */}
//             <div className="flex space-x-4">
//               <Link
//                 to="/signin"
//                 className="px-6 py-2 bg-white text-blue-600 rounded-full font-bold border-2 border-white hover:bg-gray-200 transition"
//               >
//                 Sign In
//               </Link>
//               <Link
//                 to="/signup"
//                 className="px-6 py-2 bg-white text-blue-600 rounded-full font-bold border-2 border-white hover:bg-gray-200 transition"
//               >
//                 Sign Up
//               </Link>
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <button type="button" className="md:hidden" onClick={() => setNavOpen(true)}>
//             <img src={hamMenuIcon} alt="Menu" className="w-8" />
//           </button>
//         </div>

//         {/* Mobile Navigation Menu */}
//         <div
//           className={`fixed top-0 right-0 h-full w-80 bg-blue-500 shadow-lg transform transition-transform duration-300 md:hidden p-8 ${
//             navOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           {/* Close Button */}
//           <button type="button" className="absolute top-4 right-4" onClick={() => setNavOpen(false)}>
//             <img src={closeIcon} alt="Close" className="w-6" />
//           </button>

//           {/* Mobile Nav Links */}
//           <ul className="space-y-6 mt-8">
//             {["Home", "About", "Service", "Doctors", "Departments", "Blog", "Contact"].map((item) => (
//               <li key={item}>
//                 <Link to="#" className="text-white text-lg font-semibold hover:text-gray-200 transition">
//                   {item}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile Sign In & Sign Up Buttons */}
//           <div className="flex flex-col mt-6 space-y-4">
//             <Link
//               to="/signin"
//               className="px-6 py-3 bg-white text-blue-600 rounded-full font-bold border-2 border-white hover:bg-gray-200 transition text-center"
//             >
//               Sign In
//             </Link>
//             <Link
//               to="/signup"
//               className="px-6 py-3 bg-white text-blue-600 rounded-full font-bold border-2 border-white hover:bg-gray-200 transition text-center"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section with Image on Right */}
//       <div className="container mx-auto flex flex-col-reverse md:flex-row items-center text-white pt-40 px-6">
//         {/* Text Content */}
//         <div className="md:w-1/2 text-center md:text-left md:pr-8">
//           <h1 className="text-5xl font-light mb-2">
//             Expert Imaging, <br /> <span className="font-bold uppercase">Trusted Care.</span>
//           </h1>
//           <p className="text-lg font-semibold">The best match services for you</p>
//           <p className="text-md opacity-90 max-w-lg my-6">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nulla odit esse necessitatibus corporis voluptatem?
//           </p>
//           <div className="flex flex-col md:flex-row gap-4">
//             <Link to="#" className="px-6 py-3 bg-white text-blue-600 rounded-full font-bold shadow-lg hover:shadow-xl transition transform hover:scale-105">
//               Learn More
//             </Link>
//             <Link to="/signin" className="px-6 py-3 bg-blue-400 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition transform hover:scale-105">
//               Sign In
//             </Link>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="md:w-1/2 flex justify-center md:justify-end">
//           <img src={headerImage} alt="Header" className="max-w-lg" />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import hamMenuIcon from "../assets/ham-menu-icon.png";
import closeIcon from "../assets/close-icon.png";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full py-6 z-50 bg-blue-500 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Site Logo" className="w-40" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {["Home", "About", "Service", "Doctors", "Departments", "Blog", "Contact"].map((item) => (
              <li key={item}>
                <Link to="#" className="text-white font-semibold hover:text-gray-200 transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Sign In & Sign Up Buttons */}
          <div className="flex space-x-4">
            <Link
              to="/signin"
              className="px-6 py-2 bg-white text-blue-600 rounded-full font-bold border-2 border-white hover:bg-gray-200 transition"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-6 py-2 bg-white text-blue-600 rounded-full font-bold border-2 border-white hover:bg-gray-200 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button type="button" className="md:hidden" onClick={() => setNavOpen(true)}>
          <img src={hamMenuIcon} alt="Menu" className="w-8" />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-blue-500 shadow-lg transform transition-transform duration-300 md:hidden p-8 ${
          navOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button type="button" className="absolute top-4 right-4" onClick={() => setNavOpen(false)}>
          <img src={closeIcon} alt="Close" className="w-6" />
        </button>

        {/* Mobile Nav Links */}
        <ul className="space-y-6 mt-8">
          {["Home", "About", "Service", "Doctors", "Departments", "Blog", "Contact"].map((item) => (
            <li key={item}>
              <Link to="#" className="text-white text-lg font-semibold hover:text-gray-200 transition">
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Sign In & Sign Up Buttons */}
        <div className="flex flex-col mt-6 space-y-4">
          <Link
            to="/signin"
            className="px-6 py-3 bg-white text-blue-600 rounded-full font-bold border-2 border-white hover:bg-gray-200 transition text-center"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="px-6 py-3 bg-white text-blue-600 rounded-full font-bold border-2 border-white hover:bg-gray-200 transition text-center"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
