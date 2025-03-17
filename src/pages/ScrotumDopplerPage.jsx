import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import scanImage from "../assets/usgprostate.jpg";
import Navbar from "../components/Navbar";
import Footers from "../components/Footers";

const ScrotumDopplerPage = () => {
    return (
        <div className="min-h-screen bg-white w-full">
            <Navbar />

            <div className="container mx-auto p-6">
                <div className="mt-20 bg-[#f5f5f5] border border-blue-500 rounded-lg p-6 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <img
                            src={scanImage}
                            alt="Scrotum Doppler"
                            className="rounded-lg shadow-md h-[325px] w-[550px] object-cover"
                        />
                        <div>
                            <h1 className="text-3xl font-bold text-green-800 mb-4 text-center"> Scrotum Doppler Scan </h1>
                            <p className="text-gray-700 mb-4">
                                The Scrotum Doppler scan is a specialized ultrasound technique designed to evaluate blood flow in the scrotal area, particularly the testicles. This non-invasive procedure is crucial in diagnosing conditions such as varicocele, testicular torsion, or other vascular issues that may affect the reproductive organs. It provides detailed real-time imaging, enabling healthcare providers to assess blood flow patterns, identify abnormalities, and guide effective treatment plans. This scan is essential for individuals experiencing scrotal pain, swelling, or suspected testicular conditions. It is also valuable in monitoring post-surgical recovery, detecting infections, and evaluating testicular masses. By offering precise insights into the vascular health of the scrotum, this scan plays a crucial role in preserving male reproductive health and preventing complications.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">Why is the Scrotum Doppler Scan Important?</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Assists in diagnosing testicular torsion, a medical emergency requiring immediate attention.</li>
                        <li>Identifies varicocele, a common cause of male infertility.</li>
                        <li>Evaluates scrotal swelling, pain, or discomfort to detect underlying vascular issues.</li>
                        <li>Monitors blood flow in the testicles post-surgery or trauma.</li>
                    </ul>
                </div>

                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">Who Should Consider a Scrotum Doppler Scan?</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Individuals experiencing sudden scrotal pain or swelling.</li>
                        <li>Patients with a history of varicocele or infertility concerns.</li>
                        <li>Those who have suffered recent scrotal trauma or injury.</li>
                        <li>Individuals with a family history of testicular conditions.</li>
                    </ul>
                </div>

                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">General Instructions to be Followed</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Wear loose, comfortable clothing for easy access to the scrotal area.</li>
                        <li>Maintain personal hygiene for accurate results and comfort.</li>
                        <li>Bring previous urology or medical records for reference.</li>
                        <li>Arrive 15-20 minutes early for registration and preparation.</li>
                    </ul>
                </div>
            </div>

            <div className="mt-10">
                <Footers />
            </div>
        </div>
    );
};

export default ScrotumDopplerPage;
