import React, { useState, useRef, useEffect } from 'react';

const AppointmentForm = () => {
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
 
    const [subTests, setSubTests] = useState({});
    const [additionalOptions, setAdditionalOptions] = useState({});
  
  
    useEffect(() => {
      const fetchTestData = async () => {
        try {
          const response = await fetch('http://localhost:8080/api/reception/bookappoinment');
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
        const response = await fetch('http://localhost:8080/api/reception/addpatient', {
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
    
    const handleFileChange = (e) => {
      setFormData({
        ...formData,
        prescription: e.target.files[0]
      });
    };
    
    const toBase64 = file =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });

  return (
    <div className="appointment-form p-6 bg-white shadow-lg rounded-lg">
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

        {/* Upload Dr. Prescription */}
        <div className="form-group mb-4">
          <label htmlFor="prescription" className="font-bold">Upload Dr. Prescription:</label>
          <input
            type="file"
            id="prescription"
            name="prescription"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleFileChange}
            className="w-full p-3 border rounded"
          />
        </div>

        <button type="submit" className="submit-button bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700">
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
