import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import scanImage from "../assets/scanImage.jpeg"; // Add your image path
import Navbar from "../components/Navbar";
import Footers from "../components/Footers";
import USGPelvisPage from "../pages/USGPelvisPage";
import USGSmallParts from "../pages/USGSmallParts";

const SonographyPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 w-full">
      <Navbar />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-blue-500 rounded-lg p-6 mt-24">
          <img
            src={scanImage}
            alt="Sonography"
            className="rounded-lg shadow-md"
          />
          <div>
            <h1 className="text-3xl font-bold text-green-800 mb-4">
              Welcome to Reliable Diagnostic & Imaging Center
            </h1>
            <p className="text-gray-600 mb-4">
              If you're looking for a reliable sonography centre in Mumbai, it's
              essential to choose one that offers accurate results and
              excellent patient care. Sonography, also known as ultrasound, is
              a safe and non-invasive diagnostic procedure.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Sonography Cost in Mumbai
            </h2>
            <p className="text-gray-600">
              The cost of sonography in Mumbai can vary depending on the type of
              scan required. At our Centre, we offer affordable sonography
              services without compromising on quality.
            </p>
          </div>
        </div>

        <h2 className="text-2xl text-green-700 font-bold text-center my-6">
          SONOGRAPHY SUBTEST
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            "USG Upper Abdomen",
            "USG Pelvis (Female)",
            "USG Prostate",
            "USG KUB (Male)",
            "USG KUB (Female)",
            "USG PVR (Post Void)",
            "USG (Pre Void & Post Void)",
            "USG small part/ Local part",
            "USG Obs (Pregnancy)",
            "USG of Abdomen Pelvis"
          ].map((price, index) => (
            <motion.div
              key={index}
              className="bg-blue-400 text-white text-center p-4 rounded-md shadow-md hover:bg-blue-500 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {price === "USG Pelvis (Female)" ? (
                <Link to="/usg-pelvis" className="block w-full h-full">
                  {price}
                </Link>
              ) : price === "USG small part/ Local part" ? (
                <Link to="/usg-small" className="block w-full h-full">
                  {price}
                </Link>
              ) : price === "USG of Abdomen Pelvis" ? (
                <Link to="/usg-abd-pelvis" className="block w-full h-full">
                  {price}
                </Link>
              ) : price === "USG Obs (Pregnancy)" ? (
                <Link to="/usg-obs" className="block w-full h-full">
                  {price}
                </Link>
              ) : price === "USG Upper Abdomen" ? (
                <Link to="/usg-upper-abd" className="block w-full h-full">
                  {price}
                </Link>
              ) : price === "USG Prostate" ? (
                <Link to="/usg-prostate" className="block w-full h-full">
                  {price}
                </Link>
              ) : price === "USG KUB (Male)" ? (
                <Link to="/usg-kub-male" className="block w-full h-full">
                  {price}
                </Link>
              ) : price === "USG KUB (Female)" ? (
                <Link to="/usg-kub-female" className="block w-full h-full">
                  {price}
                </Link>
              ) : price === "USG PVR (Post Void)" ? (
                <Link to="/usg-pvr" className="block w-full h-full">
                  {price}
                </Link>
              ) : price === "USG (Pre Void & Post Void)" ? (
                <Link to="/usg-prepost-void" className="block w-full h-full">
                  {price}
                </Link>
              ) : (
                price
              )}
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

export default SonographyPage;
