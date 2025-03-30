// import React, { useState } from 'react';

// const ReportsSection = () => {
//   const [email, setEmail] = useState('');

//   const downloadReport = (fileName) => {
//     const link = document.createElement("a");
//     link.href = `reports/${fileName}`; // Ensure the file exists in the "reports" folder
//     link.download = fileName;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const sendReports = () => {
//     if (!email) {
//       alert("Please enter a valid email.");
//       return;
//     }
//     alert(`Reports will be sent to ${email}`);
//   };

//   return (
//     <section id="reports" className="reports-section">
//       <h2>Download PDF Reports</h2>

//       <div className="table-container"> {/* Added wrapper div for scroll */}
//         <table className="report-table">
//           <thead>
//             <tr>
//               <th>Sr No</th>
//               <th>Report Name</th>
//               <th>Download</th>
//             </tr>
//           </thead>
//           <tbody id="report-list">
//             <tr>
//               <td>1</td>
//               <td>CT Scan Report</td>
//               <td><button className="download-btn" onClick={() => downloadReport('ct_scan.pdf')}>Download</button></td>
//             </tr>
//             <tr>
//               <td>2</td>
//               <td>MRI Report</td>
//               <td><button className="download-btn" onClick={() => downloadReport('mri_report.pdf')}>Download</button></td>
//             </tr>
//             <tr>
//               <td>3</td>
//               <td>X-Ray Report</td>
//               <td><button className="download-btn" onClick={() => downloadReport('xray_report.pdf')}>Download</button></td>
//             </tr>
//             <tr>
//               <td>1</td>
//               <td>CT Scan Report</td>
//               <td><button className="download-btn" onClick={() => downloadReport('ct_scan.pdf')}>Download</button></td>
//             </tr>
//             <tr>
//               <td>2</td>
//               <td>MRI Report</td>
//               <td><button className="download-btn" onClick={() => downloadReport('mri_report.pdf')}>Download</button></td>
//             </tr>
//             <tr>
//               <td>3</td>
//               <td>X-Ray Report</td>
//               <td><button className="download-btn" onClick={() => downloadReport('xray_report.pdf')}>Download</button></td>
//             </tr>
//             <tr>
//               <td>1</td>
//               <td>CT Scan Report</td>
//               <td><button className="download-btn" onClick={() => downloadReport('ct_scan.pdf')}>Download</button></td>
//             </tr>
//             <tr>
//               <td>2</td>
//               <td>MRI Report</td>
//               <td><button className="download-btn" onClick={() => downloadReport('mri_report.pdf')}>Download</button></td>
//             </tr>
//             <tr>
//               <td>3</td>
//               <td>X-Ray Report</td>
//               <td><button className="download-btn" onClick={() => downloadReport('xray_report.pdf')}>Download</button></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       <div className="email-section">
//         <p>Enter your email to receive reports:</p>
//         <input
//           type="email"
//           id="report-email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <button className="send-btn" onClick={sendReports}>Send to Email</button>
//       </div>
//     </section>
//   );
// };

// export default ReportsSection;

import React from "react";

const Reports = () => {
  const reports = [
    { id: 1, name: "CT Scan Report", file: "ct_scan.pdf" },
    { id: 2, name: "MRI Report", file: "mri_report.pdf" },
    { id: 3, name: "X-Ray Report", file: "xray_report.pdf" },
    { id: 4, name: "Blood Test Report", file: "blood_test.pdf" },
    { id: 5, name: "Ultrasound Report", file: "ultrasound.pdf" },
    { id: 6, name: "ECG Report", file: "ecg_report.pdf" },
    { id: 7, name: "Liver Function Test", file: "lft_report.pdf" },
    { id: 8, name: "Kidney Function Test", file: "kft_report.pdf" },
    { id: 9, name: "Thyroid Test Report", file: "thyroid_report.pdf" },
    { id: 10, name: "Cholesterol Test", file: "cholesterol.pdf" },
  ];

  const handleSendEmail = (reportName) => {
    alert(`📩 Sending ${reportName} to your email...`);
  };

  return (
    <section className="w-[90vw] mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Download & Send Reports</h2>

      <div className="w-full max-h-96 overflow-auto relative scrollbar-hide">
        <table className="w-full border-collapse bg-white shadow-md">
          {/* Sticky Header Fix */}
          <thead className="bg-blue-600 text-white sticky top-0 z-10">
            <tr>
              <th className="py-3 px-4 border">Sr No</th>
              <th className="py-3 px-4 border">Report Name</th>
              <th className="py-3 px-4 border">Download</th>
              <th className="py-3 px-4 border">Send to Email</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {reports.map((report) => (
              <tr key={report.id} className="even:bg-gray-100 hover:bg-blue-50 transition">
                <td className="py-3 px-4 border text-center">{report.id}</td>
                <td className="py-3 px-4 border text-center">{report.name}</td> {/* ✅ Centered Report Name */}
                <td className="py-3 px-4 border text-center">
                  <div className="flex justify-center">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
                      Download
                    </button>
                  </div>
                </td>
                <td className="py-3 px-4 border text-center">
                  <div className="flex justify-center">
                    <button
                      onClick={() => handleSendEmail(report.name)}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
                    >
                      Send to Email
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Reports;
