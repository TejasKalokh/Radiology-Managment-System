// // src/components/AppointmentForm.js
// import React, { useState } from 'react';

// const AppointmentForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     middleName: '',
//     lastName: '',
//     doctorName: '',
//     testType: '',
//     mobile: '',
//     age: '',
//     gender: '',
//     appointmentDate: '',
//     appointmentTime: '',
//     locality: '',
//     address: '',
//     prescription: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       prescription: e.target.files[0],
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Appointment booked successfully!');
//     // You can add more submission logic here
//   };

//   return (
//     <div className="appointment-form p-6 bg-white shadow-lg rounded-lg">
//       <h3 className="bg-blue-600 text-white text-center p-4 rounded-t-md text-xl font-semibold">
//         Book an On Visit Appointment
//       </h3>
//       <form onSubmit={handleSubmit} id="onVisitForm" className="mt-6">
//         {/* Full Name */}
//         <div className="form-group mb-4">
//           <label htmlFor="full-name" className="font-bold">Full Name:</label>
//           <div className="name-fields flex gap-4">
//             <input
//               type="text"
//               id="first-name"
//               name="firstName"
//               placeholder="First Name"
//               required
//               value={formData.firstName}
//               onChange={handleChange}
//               className="w-full p-3 border rounded"
//             />
//             <input
//               type="text"
//               id="middle-name"
//               name="middleName"
//               placeholder="Middle Name"
//               value={formData.middleName}
//               onChange={handleChange}
//               className="w-full p-3 border rounded"
//             />
//             <input
//               type="text"
//               id="last-name"
//               name="lastName"
//               placeholder="Last Name"
//               required
//               value={formData.lastName}
//               onChange={handleChange}
//               className="w-full p-3 border rounded"
//             />
//           </div>
//         </div>

//         {/* Doctor Name & Test Type in one row */}
//         <div className="form-group inline-fields mb-4 flex gap-4">
//           <div className="flex-1">
//             <label htmlFor="doctor-name" className="font-bold">Doctor Name:</label>
//             <input
//               type="text"
//               id="doctor-name"
//               name="doctorName"
//               required
//               value={formData.doctorName}
//               onChange={handleChange}
//               className="w-full p-3 border rounded"
//             />
//           </div>
//           <div className="flex-1">
//             <label htmlFor="test-type" className="font-bold">Test Type:</label>
//             <select
//               id="test-type"
//               name="testType"
//               required
//               value={formData.testType}
//               onChange={handleChange}
//               className="w-full p-3 border rounded"
//             >
//               <option value="">Select Test</option>
//               <option value="MRI">MRI</option>
//               <option value="CT Scan">CT Scan</option>
//               <option value="X-Ray">X-Ray</option>
//               <option value="Ultrasound">Ultrasound</option>
//               <option value="Blood Test">Blood Test</option>
//             </select>
//           </div>
//         </div>

//         {/* Mobile No, Age, Gender in one row */}
//         <div className="form-group inline-fields mb-4 flex gap-4">
//           <div className="flex-1">
//             <label htmlFor="mobile" className="font-bold">Mobile No:</label>
//             <input
//               type="text"
//               id="mobile"
//               name="mobile"
//               pattern="\d{10}"
//               maxLength="10"
//               required
//               value={formData.mobile}
//               onChange={handleChange}
//               className="w-full p-3 border rounded"
//             />
//           </div>
//           <div className="flex-1">
//             <label htmlFor="age" className="font-bold">Age:</label>
//             <input
//               type="number"
//               id="age"
//               name="age"
//               min="1"
//               max="120"
//               required
//               value={formData.age}
//               onChange={handleChange}
//               className="w-full p-3 border rounded"
//             />
//           </div>
//           <div className="flex-1">
//             <label htmlFor="gender" className="font-bold">Gender:</label>
//             <select
//               id="gender"
//               name="gender"
//               required
//               value={formData.gender}
//               onChange={handleChange}
//               className="w-full p-3 border rounded"
//             >
//               <option value="">Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//           </div>
//         </div>

//         {/* Date, Time, Locality in one row */}
//         <div className="form-group inline-fields mb-4 flex gap-4">
//           <div className="flex-1">
//             <label htmlFor="appointment-date" className="font-bold">Date:</label>
//             <input
//               type="date"
//               id="appointment-date"
//               name="appointmentDate"
//               required
//               value={formData.appointmentDate}
//               onChange={handleChange}
//               className="w-full p-3 border rounded"
//             />
//           </div>
//           <div className="flex-1">
//             <label htmlFor="appointment-time" className="font-bold">Time:</label>
//             <input
//               type="time"
//               id="appointment-time"
//               name="appointmentTime"
//               required
//               value={formData.appointmentTime}
//               onChange={handleChange}
//               className="w-full p-3 border rounded"
//             />
//           </div>
//           <div className="flex-1">
//             <label htmlFor="locality" className="font-bold">Locality:</label>
//             <select
//               id="locality"
//               name="locality"
//               required
//               value={formData.locality}
//               onChange={handleChange}
//               className="w-full p-3 border rounded"
//             >
//               <option value="">Select Locality</option>
//               <option value="Downtown">Downtown</option>
//               <option value="Uptown">Uptown</option>
//               <option value="Suburb">Suburb</option>
//               <option value="City Center">City Center</option>
//             </select>
//           </div>
//         </div>

//         {/* Address Field */}
//         <div className="form-group mb-4">
//           <label htmlFor="address" className="font-bold">Address:</label>
//           <textarea
//             id="address"
//             name="address"
//             rows="3"
//             required
//             value={formData.address}
//             onChange={handleChange}
//             placeholder="Enter your full address"
//             className="w-full p-3 border rounded"
//           />
//         </div>

//         {/* Upload Dr. Prescription */}
//         <div className="form-group mb-4">
//           <label htmlFor="prescription" className="font-bold">Upload Dr. Prescription:</label>
//           <input
//             type="file"
//             id="prescription"
//             name="prescription"
//             accept=".jpg,.jpeg,.png,.pdf"
//             onChange={handleFileChange}
//             className="w-full p-3 border rounded"
//           />
//         </div>

//         {/* Submit Button */}
//         <button type="submit" className="submit-button bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700">
//           Book Appointment
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AppointmentForm;

// src/components/AppointmentForm.js
import React, { useState, useRef } from 'react';

const AppointmentForm = () => {
  const initialFormData = {
    firstName: '',
    middleName: '',
    lastName: '',
    doctorName: '',
    testType: '',
    subTestType: '',
    mobile: '',
    email: '',
    age: '',
    gender: '',
    appointmentDate: '',
    appointmentTime: '',
    locality: '',
    address: '',
    prescription: null,
  };

  const [formData, setFormData] = useState(initialFormData);
  const fileInputRef = useRef(null);


  const subTests = {
    "Sonography": ["USG of Abdomen Pelvis", "USG Upper Abdomen", "USG Pelvis (Female)","USG Prostate","USG KUB (Male)","USG KUB (Female)","USG PVR (Post Void)","USG (Pre Void & Post Void)","USG small part/ Local part","USG Obs (Pregnancy)"],
    "Color-Doppler": ["Doppler Upper Limb (Hand)", "Doppler Lower Limb (Leg)", "Carotid Doppler","Renal Doppler (Kidney)","Scrotum Doppler","Obs Pregnancy Doppler"],
    "X-Ray": ["Chest X-Ray", "Limb X-Ray", "Dental X-Ray"],
    "ECG": ["CBC", "Liver Function Test", "Thyroid Test"]
  };

  const additionalOptions = {
    "USG small part/ Local part": ["Thyroid", "Neck", "Scrotum", " Scrotum with Doppler","Breast","Axilla","Skull","Neonate Skull","Parotid","Local Swelling","AV Fistula for Dialysis"],
    "USG Obs (Pregnancy)": ["Early (1st Sonography)", "NT / NB scan", "Anomaly scan (11 to 14 weeks)","Anomaly scan (16 to 20 weeks)","Growth Scan","7to9 months scan","Twins (2months)","Twins NT/ NB scan","Twins Anomaly scan (11 to 14 weeks)","Twins Anomaly scan (16 to 20 weeks)","Twins Growth Scan","Twins 7to9 months scan","Twins Doppler","Triplet Pregnancy(2 months)","Triplet Pregnancy(3 months)","Triplet Pregnancy(4 months)","Triplet Pregnancy(5 months)","Triplet Pregnancy(6 months)","Triplet Pregnancy(7 months)","Triplet Pregnancy(8 months)","Triplet Pregnancy(9 months)"]
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      ...(name === 'testType' && { subTestType: '', additionalSubTestType: '' })
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      prescription: e.target.files[0],
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert('Appointment booked successfully!');
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.confirm('Appointment booked successfully!')) {
      setFormData(initialFormData);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <div className="appointment-form p-6 bg-white shadow-lg rounded-lg">
      <h3 className="bg-blue-600 text-white text-center p-4 rounded-t-md text-xl font-semibold">
        Book an On Visit Appointment
      </h3>
      <form onSubmit={handleSubmit} id="onVisitForm" className="mt-6">
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
