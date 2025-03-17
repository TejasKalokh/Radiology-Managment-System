import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import scanImage from "../assets/usgpelvis.webp";
import Navbar from "../components/Navbar";
import Footers from "../components/Footers";

const RenalDopplerPage = () => {
    return (
        <div className="min-h-screen bg-white w-full">
            <Navbar />

            <div className="container mx-auto p-6">
                <div className="mt-20 bg-[#f5f5f5] border border-blue-500 rounded-lg p-6 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <img
                            src={scanImage}
                            alt="Renal Doppler"
                            className="rounded-lg shadow-md h-[350px] object-cover"
                        />
                        <div>
                            <h1 className="text-3xl font-bold text-green-800 mb-4 text-center"> Renal Doppler Scan </h1>
                            <p className="text-gray-700 mb-4">
                                The Renal Doppler scan is a specialized ultrasound technique used to evaluate blood flow in the arteries and veins
                                of the kidneys. This non-invasive imaging procedure helps detect conditions such as renal artery stenosis, blood clots,
                                or other vascular issues affecting the kidneys. The scan plays a vital role in diagnosing and managing hypertension,
                                chronic kidney disease, and other kidney-related conditions by providing real-time insights into the kidney's blood supply.
                                Additionally, the Renal Doppler scan is crucial for monitoring renal transplant patients to assess graft function and detect
                                potential complications. It is also useful for identifying renal artery aneurysms, thrombosis, and other vascular
                                abnormalities that may impact kidney function. This comprehensive imaging tool aids healthcare providers in making
                                informed decisions regarding treatment strategies and early intervention for kidney-related disorders.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">Why is the Renal Doppler Scan Important?</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Detects narrowing or blockages in the renal arteries.</li>
                        <li>Assesses kidney-related causes of high blood pressure.</li>
                        <li>Monitors patients with chronic kidney disease.</li>
                        <li>Evaluates blood flow before and after kidney transplant procedures.</li>
                    </ul>
                </div>

                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">Who Should Consider a Renal Doppler Scan?</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Individuals with unexplained hypertension or kidney-related symptoms.</li>
                        <li>Patients diagnosed with chronic kidney disease or impaired kidney function.</li>
                        <li>Those with suspected renal artery blockages or vascular conditions.</li>
                        <li>Individuals scheduled for or recovering from kidney transplant surgery.</li>
                    </ul>
                </div>

                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">General Instructions to be Followed</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Drink plenty of water before the scan to improve imaging clarity.</li>
                        <li>Avoid heavy meals 4-6 hours before the procedure.</li>
                        <li>Bring previous kidney-related medical records and test results.</li>
                        <li>Wear comfortable clothing for easy abdominal access.</li>
                    </ul>
                </div>
            </div>

            <div className="mt-10">
                <Footers />
            </div>
        </div>
    );
};

export default RenalDopplerPage;
