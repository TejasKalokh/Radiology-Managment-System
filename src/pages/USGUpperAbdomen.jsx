import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import scanImage from "../assets/usgupperabdomen.jpg";
import Footers from "../components/Footers";
import Navbar from "../components/Navbar";

const USGUpperAbdomen = () => {
    return (
        <div className="min-h-screen bg-white w-full">
            <Navbar />

            <div className="container mx-auto p-6">
                {/* Service Details Section */}
                <div className="mt-20 bg-[#f5f5f5] border border-blue-500 rounded-lg p-6 shadow-lg">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <img
                            src={scanImage}
                            alt="Upper Abdomen Ultrasound"
                            className="rounded-lg shadow-md"
                        />
                        <div>
                            <h1 className="text-3xl font-bold text-green-800 mb-4 text-center"> USG UPPER ABDOMEN </h1>
                            <p className="text-gray-700 mb-4">
                                The USG Upper Abdomen is a specialized ultrasound examination that focuses on evaluating the organs in the upper abdominal region. This non-invasive imaging technique provides detailed visuals of vital organs such as the liver, gallbladder, pancreas, spleen, and kidneys. It plays a crucial role in diagnosing various conditions like liver diseases, gallstones, and pancreatic abnormalities.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why is the USG Upper Abdomen Test Important? */}
                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">Why is the USG Upper Abdomen Test Important?</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Assessment of Liver Health for conditions like fatty liver, hepatitis, or liver cysts.</li>
                        <li>Evaluation of Gallbladder for gallstones, inflammation, or bile duct obstruction.</li>
                        <li>Examination of the Pancreas to detect tumors, cysts, or inflammation.</li>
                        <li>Monitoring the Spleen for enlargement or other abnormalities.</li>
                        <li>Identification of Kidney Disorders such as kidney stones, cysts, or infections.</li>
                    </ul>
                </div>

                {/* Who Should Consider a USG Upper Abdomen Scan? */}
                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">Who Should Consider a USG Upper Abdomen Scan?</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Individuals with persistent abdominal pain or discomfort.</li>
                        <li>Patients experiencing unexplained nausea, vomiting, or jaundice.</li>
                        <li>People with a history of liver or gallbladder issues.</li>
                        <li>Individuals undergoing routine health screenings.</li>
                        <li>Those advised by their doctor for a detailed abdominal evaluation.</li>
                    </ul>
                </div>

                {/* General Instructions to be Followed */}
                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">General Instructions to be Followed</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Fasting for at least 6 hours before the scan is recommended for clearer imaging.</li>
                        <li>Drink water before the scan but avoid eating solid food.</li>
                        <li>Bring your USG prescription from your healthcare provider.</li>
                        <li>Carry previous reports, if applicable, for better evaluation.</li>
                        <li>Follow your doctor's instructions regarding medications.</li>
                    </ul>
                </div>
            </div>

            <div className="mt-10">
                <Footers />
            </div>
        </div>
    );
};

export default USGUpperAbdomen;
