import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import scanImage from "../assets/carotidDoppler.webp";
import Navbar from "../components/Navbar";
import Footers from "../components/Footers";

const CarotidDopplerPage = () => {
    return (
        <div className="min-h-screen bg-white w-full">
            <Navbar />

            <div className="container mx-auto p-6">
                <div className="mt-20 bg-[#f5f5f5] border border-blue-500 rounded-lg p-6 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <img
                            src={scanImage}
                            alt="Carotid Doppler"
                            className="rounded-lg shadow-md h-[350px] object-cover"
                        />
                        <div>
                            <h1 className="text-3xl font-bold text-green-800 mb-4 text-center"> Carotid Doppler Scan </h1>
                            <p className="text-gray-700 mb-4">
                                The Carotid Doppler scan is a specialized ultrasound technique used to evaluate blood flow in the carotid arteries, which supply blood to the brain. This non-invasive procedure helps in diagnosing conditions such as carotid artery stenosis, blockages, or other vascular issues that may increase the risk of stroke. The Carotid Doppler scan provides real-time imaging, enabling doctors to assess blood flow patterns and detect potential abnormalities for timely intervention and treatment. This scan is particularly crucial for individuals at risk of cardiovascular diseases, those with a history of stroke, or individuals experiencing symptoms such as dizziness, transient vision loss, or unexplained headaches. By detecting narrowed arteries or plaque buildup, the Carotid Doppler scan helps healthcare providers devise appropriate treatment strategies, reducing the risk of serious complications.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">Why is the Carotid Doppler Scan Important?</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Detects narrowing or blockages in the carotid arteries.</li>
                        <li>Assesses stroke risk and helps plan preventive treatment.</li>
                        <li>Monitors patients with a history of stroke or TIA (mini-stroke).</li>
                        <li>Guides surgical decisions and vascular treatments.</li>
                    </ul>
                </div>

                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">Who Should Consider a Carotid Doppler Scan?</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Individuals with symptoms of dizziness, vision problems, or sudden weakness.</li>
                        <li>Patients with a history of stroke, TIA, or heart disease.</li>
                        <li>Those diagnosed with high blood pressure, diabetes, or cholesterol issues.</li>
                        <li>Individuals with family history of vascular conditions or stroke risk.</li>
                    </ul>
                </div>

                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">General Instructions to be Followed</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Wear comfortable clothing for easy neck access.</li>
                        <li>Avoid wearing necklaces or tight collars on the day of the scan.</li>
                        <li>Bring previous medical records for better assessment.</li>
                        <li>Relax and remain still during the procedure for accurate results.</li>
                    </ul>
                </div>
            </div>

            <div className="mt-10">
                <Footers />
            </div>
        </div>
    );
};

export default CarotidDopplerPage;
