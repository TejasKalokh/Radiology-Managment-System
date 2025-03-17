import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import scanImage from "../assets/dopplerLeg.avif";
import Navbar from "../components/Navbar";
import Footers from "../components/Footers";

const DopplerLowerLimbPage = () => {
  return (
    <div className="min-h-screen bg-white w-full">
      <Navbar />

      <div className="container mx-auto p-6">
        <div className="mt-20 bg-[#f5f5f5] border border-blue-500 rounded-lg p-6 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src={scanImage}
              alt="Doppler Lower Limb"
              className="rounded-lg shadow-md h-[300px] w-[550px] object-cover"
            />
            <div>
              <h1 className="text-3xl font-bold text-green-800 mb-4 text-center"> Doppler Lower Limb (Leg) Scan </h1>
              <p className="text-gray-700 mb-4">
                The Doppler Lower Limb (Leg) scan is a specialized ultrasound technique
                used to evaluate blood flow in the arteries and veins of the lower limbs. 
                It helps in diagnosing conditions such as blood clots, arterial blockages,
                and other vascular issues that may affect circulation in the legs. This procedure
                is essential for detecting deep vein thrombosis (DVT), varicose veins, and peripheral
                artery disease (PAD). The Doppler Lower Limb scan is a non-invasive method that
                provides real-time imaging, aiding doctors in assessing vascular health and guiding
                appropriate treatments for improved blood flow and overall leg health.
              </p>
            </div>
          </div>
        </div>

        <div className="my-8">
          <h2 className="text-2xl text-green-700 font-bold mb-4">Why is the Doppler Lower Limb Scan Important?</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Detects blood clots, arterial narrowing, or blockages.</li>
            <li>Assesses circulation issues linked to leg pain or swelling.</li>
            <li>Monitors blood flow post-surgery or during recovery.</li>
            <li>Guides treatment plans for vascular disorders.</li>
          </ul>
        </div>

        <div className="my-8">
          <h2 className="text-2xl text-green-700 font-bold mb-4">Who Should Consider a Doppler Lower Limb Scan?</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Individuals with leg pain, numbness, or swelling.</li>
            <li>Patients with suspected blood clots or DVT risk.</li>
            <li>Those with a history of vascular disease or diabetes.</li>
            <li>Post-surgical patients requiring blood flow evaluation.</li>
          </ul>
        </div>

        <div className="my-8">
          <h2 className="text-2xl text-green-700 font-bold mb-4">General Instructions to be Followed</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Wear loose-fitting clothes for easy access to your legs.</li>
            <li>Bring any previous medical records related to vascular issues.</li>
            <li>Inform your doctor about any medications you are taking.</li>
            <li>Stay relaxed during the procedure for accurate readings.</li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <Footers />
      </div>
    </div>
  );
};

export default DopplerLowerLimbPage;
