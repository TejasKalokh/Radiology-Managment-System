import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import scanImage from "../assets/dopplerHand.jpg";
import Navbar from "../components/Navbar";
import Footers from "../components/Footers";

const DopplerUpperLimbPage = () => {
  return (
    <div className="min-h-screen bg-white w-full">
      <Navbar />

      <div className="container mx-auto p-6">
        <div className="mt-20 bg-[#f5f5f5] border border-blue-500 rounded-lg p-6 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src={scanImage}
              alt="Doppler Upper Limb"
              className="rounded-lg shadow-md h-[300px] w-[550px] object-cover"
            />
            <div>
              <h1 className="text-3xl font-bold text-green-800 mb-4 text-center"> Doppler Upper Limb (Hand) Scan </h1>
              <p className="text-gray-700 mb-4">
              The Doppler Upper Limb (Hand) scan is a specialized ultrasound technique
                used to assess blood flow in the arteries and veins of the upper limbs. 
                It helps in diagnosing conditions such as blood clots, narrowed arteries,
                or other vascular issues affecting circulation in the arms. This procedure is
                particularly useful in detecting conditions such as deep vein thrombosis (DVT),
                arterial blockages, and compromised blood supply resulting from injuries or underlying
                vascular diseases. It is a non-invasive and painless method that allows doctors to monitor
                blood flow patterns, assess the effectiveness of previous treatments, and guide therapeutic
                interventions effectively.
              </p>
            </div>
          </div>
        </div>

        <div className="my-8">
          <h2 className="text-2xl text-green-700 font-bold mb-4">Why is the Doppler Upper Limb Scan Important?</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Identifies arterial blockages and blood clots.</li>
            <li>Assesses vascular damage and circulation issues.</li>
            <li>Helpful for patients with arm pain, numbness, or swelling.</li>
            <li>Monitors post-surgical blood flow for optimal recovery.</li>
          </ul>
        </div>

        <div className="my-8">
          <h2 className="text-2xl text-green-700 font-bold mb-4">Who Should Consider a Doppler Upper Limb Scan?</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Individuals with unexplained arm pain or swelling.</li>
            <li>Patients with a history of vascular disease or clotting issues.</li>
            <li>Post-surgical patients requiring blood flow monitoring.</li>
            <li>People with conditions like Raynaud's disease or circulation problems.</li>
          </ul>
        </div>

        <div className="my-8">
          <h2 className="text-2xl text-green-700 font-bold mb-4">General Instructions to be Followed</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Wear loose-fitting clothes for easy access to your arms.</li>
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

export default DopplerUpperLimbPage;
