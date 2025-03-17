import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import scanImage from "../assets/usgkubf.avif";
import Footers from "../components/Footers";
import Navbar from "../components/Navbar";

const USGKUBFemale = () => {
    return (
        <div className="min-h-screen bg-white w-full">
            <Navbar />

            <div className="container mx-auto p-6">
                {/* Service Details Section */}
                <div className="mt-20 bg-[#f5f5f5] border border-blue-500 rounded-lg p-6 shadow-lg">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <img
                            src={scanImage}
                            alt="KUB Female Ultrasound"
                            className="rounded-lg shadow-md h-[350px] object-cover"
                        />
                        <div>
                            <h1 className="text-3xl font-bold text-green-800 mb-4 text-center"> USG KUB (Female) </h1>
                            <p className="text-gray-700 mb-4">
                                A USG KUB (Kidneys, Ureters, and Bladder) scan for females is a non-invasive ultrasound procedure that examines the urinary system. It helps diagnose kidney stones, urinary tract infections (UTIs), and other abnormalities affecting the kidneys, ureters, and bladder. Additionally, it may reveal issues related to reproductive organs that could be contributing to urinary concerns.
                                <br /><br />
                                This scan is crucial for identifying early-stage conditions and ensuring timely treatment. It is particularly useful for women experiencing urinary discomfort, pelvic pain, or suspected kidney-related problems. The procedure is safe, painless, and requires minimal preparation.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why is the USG KUB (Female) Test Important? */}
                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">Why is the USG KUB (Female) Test Important?</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Early detection of kidney stones, cysts, or tumors.</li>
                        <li>Assessment of bladder abnormalities or reproductive organ concerns.</li>
                        <li>Evaluation of unexplained pelvic pain or urinary discomfort.</li>
                    </ul>
                </div>

                {/* Who Should Consider a USG KUB (Female) Scan? */}
                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">Who Should Consider a USG KUB (Female) Scan?</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Women experiencing persistent urinary symptoms or pelvic discomfort.</li>
                        <li>Patients suspected of having kidney stones or urinary tract infections.</li>
                        <li>Women with a history of reproductive organ conditions affecting the urinary tract.</li>
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

export default USGKUBFemale;
