import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import React, { useEffect, useState } from "react";
import "../css/doctor.css";
import { Link, useNavigate } from "react-router-dom";

const DoctorDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [onlineAppointments, setOnlineAppointments] = useState([]);
  const [onVisitAppointments, setOnVisitAppointments] = useState([]);
  const [walkInAppointments, setWalkInAppointments] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  const fetchAppointments = async () => {
    try {
      const walkInResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/walk-in/all`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (walkInResponse.status === 403) {
        navigate('/signin');
        return;
      }
      
      const walkInData = await walkInResponse.json();
      setWalkInAppointments(walkInData);

      const appointmentResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/appointments/all`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (appointmentResponse.status === 403) {
        navigate('/signin');
        return;
      }
      
      const appointmentData = await appointmentResponse.json();
      setAppointments(appointmentData);

      setOnlineAppointments(
        appointmentData.map(appt => ({
          id: `${appt.patient_id}`,
          name: `${appt.patient_first_name} ${appt.patient_last_name}`,
          age: appt.age,
          testType: appt.test_type,
          time: appt.test_time,
        }))
      );

      setOnVisitAppointments(
        walkInData.map(patient => ({
          id: `${patient.patient_id}`,
          name: `${patient.patient_first_name} ${patient.patient_last_name}`,
          age: patient.age,
          testType: patient.test_type,
          time: "Walk-in",
        }))
      );
    } catch (error) {
      console.error('Error fetching appointments:', error);
      if (error.response?.status === 403) {
        navigate('/signin');
      }
    }
  };

  useEffect(() => {
    fetchAppointments(); // Initial fetch

    const intervalId = setInterval(fetchAppointments, 15000); // Fetch every 15 seconds

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, [navigate]);


  useEffect(() => {
    const uploadForm = document.getElementById("upload-form");
    if (uploadForm) {
      uploadForm.addEventListener("submit", async function (event) {
        event.preventDefault();
        const formData = new FormData(uploadForm);
        
        try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/api/reports/upload`, {
            method: 'POST',
            credentials: 'include',
            body: formData
          });
          
          if (response.status === 403) {
            navigate('/signin');
            return;
          }
          
          if (!response.ok) {
            throw new Error('Failed to upload report');
          }
          
          const result = await response.json();
          alert('Report uploaded successfully!');
          uploadForm.reset();
        } catch (error) {
          console.error('Error uploading report:', error);
          alert('Failed to upload report. Please try again.');
        }
      });
    }
  }, [navigate]);
  
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


        {/* <section id="upload-report">
          <h2>Upload Patient Report</h2>
          <form id="upload-form">
            <label htmlFor="patient-name">Patient Name:</label>
            <input type="text" id="patient-name" className="w-full p-2 border border-gray-300 rounded text-black" required />

            <label htmlFor="phone-number">Phone Number:</label>
            <input
              type="tel"
              id="phone-number"
              pattern="[0-9]{10}"
              placeholder="Enter 10-digit phone number"
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />

            <label htmlFor="report-file">Upload PDF:</label>
            <div className="file-input-container">
              <input type="file" id="report-file" className="w-full p-2 border border-gray-300 rounded text-black" accept="application/pdf" required />
            </div>

            <button type="submit">Upload</button>
          </form>
        </section> */}

<section id="upload-report" className="p-6 bg-white shadow-md rounded-lg max-w-md mx-auto mt-20">
        <h2 className="text-xl font-bold mb-4">Upload Patient Report</h2>
        <form id="upload-form" className="flex flex-col gap-4">
          <label htmlFor="patient-name" className="font-medium">Patient Name:</label>
          <input type="text" id="patient-name" className="border p-2 rounded text-black" required />

          <label htmlFor="phone-number" className="font-medium">Phone Number:</label>
          <input
            type="tel"
            id="phone-number"
            pattern="[0-9]{10}"
            placeholder="Enter 10-digit phone number"
            className="border p-2 rounded text-black"
            required
          />

          <label htmlFor="report-file" className="font-medium">Upload PDF:</label>
          <div className="file-input-container">
            <input type="file" id="report-file" accept="application/pdf" className="border p-2 rounded text-black" required />
          </div>

          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Upload
          </button>
        </form>
      </section>

      </main>
    </>
  );
};

export default DoctorDashboard;

