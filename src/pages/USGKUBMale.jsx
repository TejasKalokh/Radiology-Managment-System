import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import scanImage from "../assets/usgkub.png";
import Footers from "../components/Footers";
import Navbar from "../components/Navbar";

const USGKUBMale = () => {
    return (
        <div className="min-h-screen bg-white w-full">
            <Navbar />

            <div className="container mx-auto p-6">
                {/* Service Details Section */}
                <div className="mt-20 bg-[#f5f5f5] border border-blue-500 rounded-lg p-6 shadow-lg">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <img
                            src={scanImage}
                            alt="KUB Male Ultrasound"
                            className="rounded-lg shadow-md h-[350px] object-cover"
                        />
                        <div>
                            <h1 className="text-3xl font-bold text-green-800 mb-4 text-center"> USG KUB (Male) </h1>
                            <p className="text-gray-700 mb-4">
                                A USG KUB (Kidneys, Ureters, and Bladder) scan for males is a non-invasive ultrasound procedure used to assess the urinary system. It helps detect issues such as kidney stones, bladder abnormalities, and prostate conditions. The scan provides real-time imaging of the kidneys, ureters, and bladder, ensuring early diagnosis of potential concerns. 
                                <br /><br />
                                This procedure is safe, painless, and requires minimal preparation. It is commonly recommended for men experiencing urinary symptoms, lower abdominal pain, or suspected kidney-related issues. By identifying abnormalities early, this scan enables prompt treatment and management, ensuring better urinary health.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why is the USG KUB (Male) Test Important? */}
                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">Why is the USG KUB (Male) Test Important?</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Early detection of kidney stones, cysts, or tumors.</li>
                        <li>Assessment of bladder abnormalities or prostate enlargement.</li>
                        <li>Evaluation of unexplained lower abdominal pain or urinary discomfort.</li>
                    </ul>
                </div>

                {/* Who Should Consider a USG KUB (Male) Scan? */}
                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">Who Should Consider a USG KUB (Male) Scan?</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Men with persistent urinary issues or lower abdominal pain.</li>
                        <li>Patients suspected of having kidney stones or urinary infections.</li>
                        <li>Men undergoing treatment for prostate-related conditions.</li>
                    </ul>
                </div>

                {/* General Instructions to be Followed */}
                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">General Instructions to be Followed</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Drink 2 glass water before coming.</li>
                        <li>Not to pass urine for 1 hour before coming.</li>
                        <li>Bring USG prescription</li>
                        <li>Bring Treating Drs file.</li>
                        <li>Bring Previous USG Reports <b>(Recent)</b></li>
                        <li>Bring Recent Surgery related file/ Paper/ Discharge card.</li>
                    </ul>
                </div>

            </div>

            <div className="mt-10">
                <Footers />
            </div>
        </div>
    );
};

export default USGKUBMale;
