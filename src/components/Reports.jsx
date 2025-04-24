// import React from "react";

// const Reports = () => {
//   const reports = [
//     { id: 1, name: "CT Scan Report", file: "ct_scan.pdf" },
//     { id: 2, name: "MRI Report", file: "mri_report.pdf" },
//     { id: 3, name: "X-Ray Report", file: "xray_report.pdf" },
//     { id: 4, name: "Blood Test Report", file: "blood_test.pdf" },
//     { id: 5, name: "Ultrasound Report", file: "ultrasound.pdf" },
//     { id: 6, name: "ECG Report", file: "ecg_report.pdf" },
//     { id: 7, name: "Liver Function Test", file: "lft_report.pdf" },
//     { id: 8, name: "Kidney Function Test", file: "kft_report.pdf" },
//     { id: 9, name: "Thyroid Test Report", file: "thyroid_report.pdf" },
//     { id: 10, name: "Cholesterol Test", file: "cholesterol.pdf" },
//   ];

//   const handleSendEmail = (reportName) => {
//     alert(`📩 Sending ${reportName} to your email...`);
//   };

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const username = sessionStorage.getItem('username');

  useEffect(() => {
    const fetchReports = async () => {
      try {
        if (!username) {
          navigate('/signin');
          return;
        }

        const response = await axios.get('http://localhost:8080/api/patient/report', {
          data: username,
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const backendData = response.data;
        const formattedReports = backendData.map((item, index) => ({
          id: index + 1,
          name: `${item.test_type} Report for ${item.patient_First_Name}`,
          pdfData: item.reports_pdf,
          testDate: item.test_Date,
          testType: item.test_type
        }));

        setReports(formattedReports);
      } catch (err) {
        if (err.response?.status === 403 || err.response?.status === 401) {
          navigate('/signin');
        } else {
          setError('Failed to load reports');
          console.error('Error fetching reports:', err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, [username, navigate]);

  const handleViewReport = (pdfData, name) => {
    try {
      const blob = new Blob([Uint8Array.from(atob(pdfData), c => c.charCodeAt(0))], {
        type: 'application/pdf'
      });
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error viewing report:', error);
      alert('Error opening PDF report');
    }
  };

  const handleSendEmail = (reportName) => {
    // You can implement email functionality here
    alert(`📩 Sending ${reportName} to your registered email address...`);
    // TODO: Implement actual email sending functionality
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-center">
        <div className="bg-red-100 text-red-700 p-4 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  if (!reports.length) {
    return (
      <div className="p-4 text-center">
        <div className="bg-gray-100 text-gray-700 p-4 rounded-lg">
          No reports found
        </div>
      </div>
    );
  }


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
              <th className="py-3 px-4 border" >Download</th>
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
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition" onClick= {handleViewReport(report.pdfData, report.name)}>
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
