import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import xrayImage from "../assets/xrayImage.jpg"; 
import Navbar from "../components/Navbar";
import Footers from "../components/Footers";

const DigitalXrayPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 w-full">
      <Navbar />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-blue-500 rounded-lg p-6 mt-24">
          <img
            src={xrayImage}
            alt="Digital X-ray"
            className="rounded-lg shadow-md"
          />
          <div>
            <h1 className="text-3xl font-bold text-green-800 mb-4">
              Welcome to Reliable Diagnostic & Imaging Center
            </h1>
            <p className="text-gray-600 mb-4">
              Digital X-rays are an advanced form of X-ray imaging where digital
              sensors are used instead of traditional photographic film. They
              provide clearer images, faster results, and lower radiation
              exposure.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Digital X-ray Cost in Mumbai
            </h2>
            <p className="text-gray-600">
              The cost of digital X-rays in Mumbai varies depending on the type
              of scan required. At our Centre, we ensure high-quality X-ray
              imaging services at affordable prices.
            </p>
          </div>
        </div>

        <h2 className="text-2xl text-green-700 font-bold text-center my-6">
          DIGITAL X-RAY SUBTESTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Chest X-ray", "Spine X-ray", "Skull X-ray", "Abdomen X-ray", "Pelvis X-ray", "Limb X-ray", "Sinus X-ray", "Dental X-ray", "Knee Joint X-ray", "Shoulder Joint X-ray"].map((test, index) => (
            <motion.div
              key={index}
              className="bg-blue-400 text-white text-center p-4 rounded-md shadow-md hover:bg-blue-500 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link to={`/xray-${test.toLowerCase().replace(/\s+/g, "-")}`} className="block w-full h-full">
                {test}
              </Link>
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

export default DigitalXrayPage;
