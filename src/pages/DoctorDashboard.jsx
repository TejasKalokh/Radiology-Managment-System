// import React, { useEffect } from "react";
// import "../css/doctor.css"; // Ensure doctor.css is in src/css/
// import logo from "../assets/logo.png";

// const DoctorDashboard = () => {
//   // Helper function to generate random appointments
//   const generateRandomAppointments = (count) => {
//     const testTypes = ["X-Ray", "MRI", "CT Scan", "Ultrasound", "Blood Test"];
//     const appointments = [];
//     for (let i = 0; i < count; i++) {
//       appointments.push({
//         id: i + 1,
//         name: `Patient ${i + 1}`,
//         age: Math.floor(Math.random() * 73) + 18, // Age between 18 and 90
//         testType: testTypes[Math.floor(Math.random() * testTypes.length)],
//         time: `${Math.floor(Math.random() * 12) + 1}:${Math.floor(
//           Math.random() * 60
//         )
//           .toString()
//           .padStart(2, "0")} ${Math.random() > 0.5 ? "AM" : "PM"}`,
//         paymentStatus: Math.random() > 0.5 ? "Paid" : "Pending",
//       });
//     }
//     return appointments;
//   };

//   const onlineAppointments = generateRandomAppointments(50);
//   const onVisitAppointments = generateRandomAppointments(50);

//   useEffect(() => {
//     // Setup the upload form submission logic
//     const uploadForm = document.getElementById("upload-form");
//     if (uploadForm) {
//       uploadForm.addEventListener("submit", function (event) {
//         event.preventDefault();
//         const patientName = document.getElementById("patient-name").value;
//         const reportFile = document.getElementById("report-file").files[0];
//         if (patientName && reportFile) {
//           alert(`Report for ${patientName} uploaded successfully!`);
//           uploadForm.reset();
//         } else {
//           alert("Please enter patient name and select a PDF file.");
//         }
//       });
//     }
//   }, []);

//   return (
//     <>
//       <header>
//         <div className="logo">
//           <img
//             src={logo}
//             alt="Website Logo"
//           />
//         </div>
//         <div className="header-left">
//           <h1>Doctor Dashboard</h1>
//         </div>
//         <div className="header-right">
//           <div className="notification">
//             <i className="fa-regular fa-bell"></i>
//             <span className="badge">3</span>
//           </div>
//           <div className="auth-buttons">
//             <a href="signin.html">
//               <button class="button" id="sign-in-btn">Sign In</button>
//             </a>
//             <a href="signup.html">
//               <button class="button" id="sign-up-btn">Sign Up</button>
//             </a>
//           </div>
//         </div>
//       </header>

//       <main>
//         <div className="appointments-container">
//           {/* Online Appointments Section */}
//           <section id="online-appointments" className="appointments-section">
//             <div className="appointments-header">
//               <h2>Online Appointments</h2>
//             </div>
//             <div className="table-wrapper">
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Age</th>
//                     <th>Test Type</th>
//                     <th>Time</th>
//                     <th>Payment</th>
//                   </tr>
//                 </thead>
//                 <tbody id="online-appointments-body">
//                   {onlineAppointments.map((appt) => (
//                     <tr key={appt.id}>
//                       <td>{appt.name}</td>
//                       <td>{appt.age}</td>
//                       <td>{appt.testType}</td>
//                       <td>{appt.time}</td>
//                       <td>{appt.paymentStatus}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </section>

//           {/* On Visit Appointments Section */}
//           <section id="on-visit-appointments" className="appointments-section">
//             <div className="appointments-header">
//               <h2>On Visit Appointments</h2>
//             </div>
//             <div className="table-wrapper">
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Age</th>
//                     <th>Test Type</th>
//                     <th>Time</th>
//                     <th>Payment</th>
//                   </tr>
//                 </thead>
//                 <tbody id="on-visit-appointments-body">
//                   {onVisitAppointments.map((appt) => (
//                     <tr key={appt.id}>
//                       <td>{appt.name}</td>
//                       <td>{appt.age}</td>
//                       <td>{appt.testType}</td>
//                       <td>{appt.time}</td>
//                       <td>{appt.paymentStatus}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </section>
//         </div>

//         <section id="upload-report">
//           <h2>Upload Patient Report</h2>
//           <form id="upload-form">
//             <label htmlFor="patient-name">Patient Name:</label>
//             <input type="text" id="patient-name" required />

//             <label htmlFor="report-file">Upload PDF:</label>
//             <input type="file" id="report-file" accept="application/pdf" required />

//             <button type="submit">Upload</button>

//           </form>
//         </section>
//       </main>
//     </>
//   );
// };

// export default DoctorDashboard;
import { Menu, X, Bell } from "lucide-react";
import logo from "../assets/logo.png";
import React, { useEffect, useState } from "react";
import "../css/doctor.css"; // Ensure your doctor.css is in src/css/
import { Link } from "react-router-dom";


const DoctorDashboard = () => {
  // State for mobile sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Helper function to generate random appointments
  const generateRandomAppointments = (count) => {
    const testTypes = ["X-Ray", "MRI", "CT Scan", "Ultrasound", "Blood Test"];
    const appointments = [];
    for (let i = 0; i < count; i++) {
      appointments.push({
        id: i + 1,
        name: `Patient ${i + 1}`,
        age: Math.floor(Math.random() * 73) + 18, // Age between 18 and 90
        testType: testTypes[Math.floor(Math.random() * testTypes.length)],
        time: `${Math.floor(Math.random() * 12) + 1}:${Math.floor(
          Math.random() * 60
        )
          .toString()
          .padStart(2, "0")} ${Math.random() > 0.5 ? "AM" : "PM"}`,
        paymentStatus: Math.random() > 0.5 ? "Paid" : "Pending",
      });
    }
    return appointments;
  };

  const [onlineAppointments, setOnlineAppointments] = useState([]);
  const [onVisitAppointments, setOnVisitAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch("YOUR_API_ENDPOINT"); // Replace with your backend endpoint
        const data = await response.json();

        // Assuming data structure:
        // { onlineAppointments: [...], onVisitAppointments: [...] }

        setOnlineAppointments(data.onlineAppointments || []);
        setOnVisitAppointments(data.onVisitAppointments || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAppointments();
  }, []);


  useEffect(() => {
    // Set up the upload form submission logic
    const uploadForm = document.getElementById("upload-form");
    if (uploadForm) {
      uploadForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const patientName = document.getElementById("patient-name").value;
        const reportFile = document.getElementById("report-file").files[0];
        if (patientName && reportFile) {
          alert(`Report for ${patientName} uploaded successfully!`);
          uploadForm.reset();
        } else {
          alert("Please enter patient name and select a PDF file.");
        }
      });
    }
  }, []);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-3 flex items-center justify-between shadow-md z-50 border-b-2 border-blue-900">
        {/* Mobile View */}
        <div className="w-full lg:hidden flex flex-row items-center">
          {/* Heading fully on the left */}
          <h1 className="text-2xl font-bold whitespace-nowrap">Doctor Dashboard</h1>

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
            Doctor Dashboard
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

      {/* Main Content */}
      <main style={{ marginTop: "80px" }}>
        <div className="flex flex-col md:flex-row md:justify-center md:gap-8">
          {/* Online Appointments Section */}
          <section className="bg-white shadow-lg rounded-lg p-4 w-[90vw] md:w-[48%] mx-auto">
            <div className="bg-blue-600 text-white text-center py-3 rounded-t-lg">
              <h2 className="text-lg font-bold">Online Appointments</h2>
            </div>
            <div className="overflow-x-auto md:overflow-visible scrollbar-hide">
              <table className="w-[600px] md:w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-500 text-white">
                    <th className="border px-4 py-2">Patient ID</th>
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Age</th>
                    <th className="border px-4 py-2">Test Type</th>
                    <th className="border px-4 py-2">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {onlineAppointments.map((appt) => (
                    <tr key={appt.id} className="text-center bg-gray-100 even:bg-gray-200">
                      <td className="border px-4 py-2">{appt.id}</td>
                      <td className="border px-4 py-2">{appt.name}</td>
                      <td className="border px-4 py-2">{appt.age}</td>
                      <td className="border px-4 py-2">{appt.testType}</td>
                      <td className="border px-4 py-2">{appt.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* On Visit Appointments Section */}
          <section className="bg-white shadow-lg rounded-lg p-4 w-[90vw] md:w-[48%] mx-auto">
            <div className="bg-blue-600 text-white text-center py-3 rounded-t-lg">
              <h2 className="text-lg font-bold">On Visit Appointments</h2>
            </div>
            <div className="overflow-x-auto md:overflow-visible scrollbar-hide">
              <table className="w-[600px] md:w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-500 text-white">
                    <th className="border px-4 py-2">Patient ID</th>
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Age</th>
                    <th className="border px-4 py-2">Test Type</th>
                    <th className="border px-4 py-2">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {onVisitAppointments.map((appt) => (
                    <tr key={appt.id} className="text-center bg-gray-100 even:bg-gray-200">
                      <td className="border px-4 py-2">{appt.id}</td>
                      <td className="border px-4 py-2">{appt.name}</td>
                      <td className="border px-4 py-2">{appt.age}</td>
                      <td className="border px-4 py-2">{appt.testType}</td>
                      <td className="border px-4 py-2">{appt.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>


        <section id="upload-report">
          <h2>Upload Patient Report</h2>
          <form id="upload-form">
            <label htmlFor="patient-name">Patient Name:</label>
            <input type="text" id="patient-name" required />

            <label htmlFor="phone-number">Phone Number:</label>
            <input
              type="tel"
              id="phone-number"
              pattern="[0-9]{10}"
              placeholder="Enter 10-digit phone number"
              required
            />

            <label htmlFor="report-file">Upload PDF:</label>
            <div className="file-input-container">
              <input type="file" id="report-file" accept="application/pdf" required />
            </div>

            <button type="submit">Upload</button>
          </form>
        </section>


      </main>
    </>
  );
};

export default DoctorDashboard;
