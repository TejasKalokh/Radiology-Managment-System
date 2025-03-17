import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import ecgImage from "../assets/ecgImage.jpg"; // Add your image path
import Navbar from "../components/Navbar";
import Footers from "../components/Footers";

const ECGPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 w-full">
      <Navbar />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-blue-500 rounded-lg p-6 mt-24">
          <img
            src={ecgImage}
            alt="ECG Scan"
            className="rounded-lg shadow-md h-[300px] w-[550px] object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold text-green-800 mb-4">
              Welcome to Reliable Diagnostic & Imaging Center
            </h1>
            <p className="text-gray-600 mb-4">
              Electrocardiography (ECG) is a simple, non-invasive test that records the electrical activity of the heart. It is commonly used to detect heart abnormalities, irregular heart rhythms, and other cardiovascular issues.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              ECG Test Cost in Mumbai
            </h2>
            <p className="text-gray-600">
              The cost of ECG tests in Mumbai can vary depending on the type of ECG required. At our Centre, we offer affordable ECG services with accurate results and excellent care.
            </p>
          </div>
        </div>

        <h2 className="text-2xl text-green-700 font-bold text-center my-6">
          ECG TESTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["ECG (12-Lead)", "Stress ECG", "Holter Monitoring", "Ambulatory ECG", "Resting ECG", "ECG with Reporting"].map((test, index) => (
            <motion.div
              key={index}
              className="bg-blue-400 text-white text-center p-4 rounded-md shadow-md hover:bg-blue-500 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {test}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <Footers />
      </div>
    </div>
  );
};

export default ECGPage;
