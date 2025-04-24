// import React from "react";
import { Menu, X, Bell } from "lucide-react";
import logo from "../assets/logo.png";
import React, { useEffect, useState, useRef } from "react";
import "../css/ReceptionDashboard.css"; // Ensure you move your CSS to a React-compatible format
import { Link } from "react-router-dom";



const ReceptionDashboard = () => {
  const initialFormData = {
    address : "", 
    age : "", 
    gender : "", 
    locality : "", 
    password : "", 
    patient_first_name : "", 
    patient_id : "",  
    patient_last_name : "", 
    patient_middle_name : "", 
    phone_number : "", 
    prescription_image_data : "", 
    test_date : "", 
    test_time : "", 
    test_type : "", 
    vist_type : "", 
    get_image_name : "", 
    username : ""
  };

  const [formData, setFormData] = useState(initialFormData);
  const fileInputRef = useRef(null);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const [selectedTest, setSelectedTest] = useState("");

  const [subTests, setSubTests] = useState({});
  const [additionalOptions, setAdditionalOptions] = useState({});


  useEffect(() => {
    const fetchTestData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/reception/getalltests`, {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) {
          if (response.status === 403) {
            // Redirect to login if unauthorized
            window.location.href = '/signin';
            return;
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();

        // Initialize temporary objects
        const tempSubTests = {};
        const tempAdditionalOptions = {};

        // Transform data
        data.forEach(item => {
          const { testname, sub_testname, sub_sub_testname } = item;

          if (!sub_testname) {
            if (!tempSubTests[testname]) {
              tempSubTests[testname] = [];
            }
          } else {
            if (!tempSubTests[testname]) {
              tempSubTests[testname] = [];
            }

            if (!tempSubTests[testname].includes(sub_testname)) {
              tempSubTests[testname].push(sub_testname);
            }

            if (sub_sub_testname) {
              if (!tempAdditionalOptions[sub_testname]) {
                tempAdditionalOptions[sub_testname] = [];
              }

              if (!tempAdditionalOptions[sub_testname].includes(sub_sub_testname)) {
                tempAdditionalOptions[sub_testname].push(sub_sub_testname);
              }
            }
          }
        });

        setSubTests(tempSubTests);
        setAdditionalOptions(tempAdditionalOptions);

      } catch (err) {
        console.error('Failed to fetch data', err);
      }
    };

    fetchTestData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      ...(name === 'testType' && { subTestType: '', additionalSubTestType: '' })
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (window.confirm('Appointment booked successfully!')) {
  //     setFormData(initialFormData);
  //     if (fileInputRef.current) {
  //       fileInputRef.current.value = "";
  //     }
  //   }
  // };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      prescription: e.target.files[0]
    });
  };
  
  const handleSubmitt = async (e) => {
    e.preventDefault();
  
    // Prepare payload in backend format
    const payload = {
      address: formData.address,
      age: Number(formData.age),
      gender: formData.gender,
      locality: formData.locality,
      password: null, // If not used
      patient_first_name: formData.firstName,
      patient_middle_name: formData.middleName,
      patient_last_name: formData.lastName,
      phone_number: Number(formData.mobile),
      prescription_image_data: null, // will update below if there's a file
      test_type: formData.testType,
      get_image_name: null,
      test_date: formData.appointmentDate, // assume format already DD-MM-YYYY
      test_time: formData.appointmentTime
    };
  
    // Handle prescription file upload if present
    if (formData.prescription) {
      const file = formData.prescription;
  
      // Convert image file to base64 string
      const base64 = await toBase64(file);
      payload.prescription_image_data = base64;
    }
  
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/reception/addpatient`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
  
      if (!response.ok) throw new Error("Something went wrong");
  
      const result = await response.json();
      console.log("Success:", result);
  
      if (window.confirm("Appointment booked successfully!")) {
        setFormData(initialFormData);
        if (fileInputRef.current) fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  
  const toBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  

  // Handle Payment Method Change
  const handlePaymentStatusChange = (id, newStatus, setAppointments) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appt) =>
        appt.id === id ? { ...appt, payment_status: newStatus } : appt
      )
    );
  };
  const [onlineAppointments, setOnlineAppointments] = useState([]);
    const [onVisitAppointments, setOnVisitAppointments] = useState([]);
  
    const fetchAppointments = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/reception/appointments`, {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          if (response.status === 403) {
            window.location.href = '/signin';
            return;
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setOnlineAppointments(data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };
  
    useEffect(() => {
      fetchAppointments(); // Initial fetch
  
      const intervalId = setInterval(fetchAppointments, 15000); // Fetch every 15 seconds
  
      return () => clearInterval(intervalId); // Clean up the interval on unmount
    }, []);


  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-3 flex items-center justify-between shadow-md z-50 border-b-2 border-blue-900">
        {/* Mobile View */}
        <div className="w-full lg:hidden flex flex-row items-center">
          {/* Heading fully on the left */}
          <h1 className="text-2xl font-bold whitespace-nowrap">Reception Dashboard</h1>

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
            Reception Dashboard
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
      <main style={{ marginTop: "0px" }}>
        <div className="flex flex-col md:flex-row md:justify-center md:gap-8 mt-20">
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
                    <th className="border px-4 py-2">Payment Status</th>
                  </tr>
                </thead>
                <tbody>
                  {onlineAppointments.map((appt) => (
                    <tr key={appt.id} className="text-center bg-gray-100 even:bg-gray-200">
                      <td className="border px-4 py-2">{appt.patient_id}</td>
                      <td className="border px-4 py-2">{appt.name}</td>
                      <td className="border px-4 py-2">{appt.age}</td>
                      <td className="border px-4 py-2">{appt.test_type}</td>
                      <td className="border px-4 py-2">
                        <select
                          value={appt.payment_status}
                          onChange={(e) =>
                            handlePaymentStatusChange(
                              appt.id,
                              e.target.value,
                              setOnlineAppointments
                            )
                          }
                          className="border rounded p-1 bg-white"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Online Payment">Online Payment</option>
                          <option value="Cash Payment">Cash Payment</option>
                        </select>
                      </td>
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
                    <th className="border px-4 py-2">Payment Status</th>
                  </tr>
                </thead>
                <tbody>
                  {onVisitAppointments.map((appt) => (
                    <tr key={appt.id} className="text-center bg-gray-100 even:bg-gray-200">
                      <td className="border px-4 py-2">{appt.patient_id}</td>
                      <td className="border px-4 py-2">{appt.name}</td>
                      <td className="border px-4 py-2">{appt.age}</td>
                      <td className="border px-4 py-2">{appt.test_type}</td>
                      <td className="border px-4 py-2">
                        <select
                          value={appt.payment_status}
                          onChange={(e) =>
                            handlePaymentStatusChange(
                              appt.id,
                              e.target.value,
                              setOnVisitAppointments
                            )
                          }
                          className="border rounded p-1 bg-white"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Online Payment">Online Payment</option>
                          <option value="Cash Payment">Cash Payment</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>


        {/* On Visit Treatment Form */}
        <div className="appointmentREc-form p-6 bg-white shadow-lg rounded-lg ">
          <h3 className="bg-blue-600 text-white text-center p-4 rounded-t-md text-xl font-semibold">
            Book an On Visit Appointment
          </h3>
          <form onSubmit={handleSubmitt} id="onVisitForm" className="mt-6">
            {/* Full Name */}
            <div className="form-group mb-4">
              <label htmlFor="full-name" className="font-bold">Full Name:</label>
              <div className="name-fields flex gap-4">
                <input
                  type="text"
                  id="first-name"
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 border rounded"
                />
                <input
                  type="text"
                  id="middle-name"
                  name="middleName"
                  placeholder="Middle Name"
                  value={formData.middleName}
                  onChange={handleChange}
                  className="w-full p-3 border rounded"
                />
                <input
                  type="text"
                  id="last-name"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 border rounded"
                />
              </div>
            </div>

            {/* Doctor Name */}
            <div className="form-group mb-4">
              <label htmlFor="doctor-name" className="font-bold">Doctor Name:</label>
              <input
                type="text"
                id="doctor-name"
                name="doctorName"
                required
                value={formData.doctorName}
                onChange={handleChange}
                className="w-full p-3 border rounded"
              />
            </div>

            {/* Test Type & SubTest Type */}
            <div className="form-group inline-fields mb-4 flex gap-4 max-h-32 overflow-y-auto">
              <div className="flex-1 max-h--16 overflow-y-auto">
                <label htmlFor="test-type" className="font-bold">Test Type:</label>
                <select
                  id="test-type"
                  name="testType"
                  required
                  value={formData.testType}
                  onChange={handleChange}
                  className="w-full p-3 border rounded max-h--16 overflow-y-auto"
                >
                  <option value="">Select Test</option>
                  {Object.keys(subTests).map((test) => (
                    <option key={test} value={test}>{test}</option>
                  ))}
                </select>
              </div>
              {formData.testType && (
                <div className="flex-1 max-h--16 overflow-y-auto">
                  <label htmlFor="sub-test-type" className="font-bold">Sub Test Type:</label>
                  <select
                    id="sub-test-type"
                    name="subTestType"
                    required
                    value={formData.subTestType}
                    onChange={handleChange}
                    className="w-full p-3 border rounded max-h--16 overflow-y-auto"
                  >
                    <option value="">Select Sub Test</option>
                    {subTests[formData.testType].map((subTest) => (
                      <option key={subTest} value={subTest}>{subTest}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* Additional Sub Test Dropdown */}
            {['USG small part/ Local part', 'USG Obs (Pregnancy)'].includes(formData.subTestType) && (
              <div className="form-group mb-4 max-h-24 overflow-y-auto">
                <label htmlFor="additional-sub-test" className="font-bold">Select Sub-Test Type:</label>
                <select
                  id="additional-sub-test"
                  name="additionalSubTestType"
                  required
                  value={formData.additionalSubTestType}
                  onChange={handleChange}
                  className="w-full p-3 border rounded max-h-24 overflow-y-auto"
                >
                  <option value="">Select Option</option>
                  {additionalOptions[formData.subTestType].map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Mobile No, Age, Gender in one row */}
            <div className="form-group inline-fields mb-4 flex gap-4">
              <div className="flex-1">
                <label htmlFor="mobile" className="font-bold">Mobile No:</label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  pattern="\d{10}"
                  maxLength="10"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full p-3 border rounded"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="font-bold">Email ID:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="age" className="font-bold">Age:</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  min="1"
                  max="120"
                  required
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full p-3 border rounded"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="gender" className="font-bold">Gender:</label>
                <select
                  id="gender"
                  name="gender"
                  required
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-3 border rounded"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Date, Time, Locality in one row */}
            <div className="form-group inline-fields mb-4 flex gap-4">
              <div className="flex-1">
                <label htmlFor="appointment-date" className="font-bold">Date:</label>
                <input
                  type="date"
                  id="appointment-date"
                  name="appointmentDate"
                  required
                  value={formData.appointmentDate}
                  onChange={handleChange}
                  className="w-full p-3 border rounded"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="appointment-time" className="font-bold">Time:</label>
                <input
                  type="time"
                  id="appointment-time"
                  name="appointmentTime"
                  required
                  value={formData.appointmentTime}
                  onChange={handleChange}
                  className="w-full p-3 border rounded"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="locality" className="font-bold">Locality:</label>
                <select
                  id="locality"
                  name="locality"
                  required
                  value={formData.locality}
                  onChange={handleChange}
                  className="w-full p-3 border rounded"
                >
                  <option value="">Select Locality</option>
                  <option value="Downtown">Downtown</option>
                  <option value="Uptown">Uptown</option>
                  <option value="Suburb">Suburb</option>
                  <option value="City Center">City Center</option>
                </select>
              </div>
            </div>


            {/* Address */}
            <div className="form-group mb-4">
              <label htmlFor="address" className="font-bold">Address:</label>
              <textarea
                id="address"
                name="address"
                rows="3"
                required
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your full address"
                className="w-full p-3 border rounded"
              />
            </div>

            <button type="submit" className="submit-button bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700">
              Book Appointment
            </button>
          </form>
        </div>

      </main>
    </>
  );
};

export default ReceptionDashboard;