import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import scanImage from "../assets/usgkub.png";
import Footers from "../components/Footers";
import Navbar from "../components/Navbar";

const USGPVR = () => {
    return (
        <div className="min-h-screen bg-white w-full">
            <Navbar />

            <div className="container mx-auto p-6">
                {/* Service Details Section */}
                <div className="mt-20 bg-[#f5f5f5] border border-blue-500 rounded-lg p-6 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <img
                            src={scanImage}
                            alt="PVR Ultrasound"
                            className="rounded-lg shadow-md h-[350px] object-cover"
                        />
                        <div>
                            <h1 className="text-3xl font-bold text-green-800 mb-4 text-center"> USG PVR (Post Void) </h1>
                            <p className="text-gray-700 mb-4">
                                A USG PVR (Post Void Residual) ultrasound is a diagnostic imaging technique used to measure the amount of urine remaining in the bladder after urination. This non-invasive procedure helps assess bladder function, particularly in patients with suspected urinary retention or incomplete bladder emptying.
                                <br /><br />
                                The scan is crucial in diagnosing conditions such as bladder outlet obstruction, enlarged prostate in men, or neurogenic bladder dysfunction. It is safe, painless, and provides real-time imaging, enabling healthcare providers to determine the best course of treatment.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why is the USG PVR Test Important? */}
                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">Why is the USG PVR Test Important?</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Helps diagnose urinary retention issues.</li>
                        <li>Assesses bladder function and emptying efficiency.</li>
                        <li>Essential for evaluating prostate conditions in men.</li>
                        <li>Detects possible causes of recurrent urinary tract infections (UTIs).</li>
                    </ul>
                </div>

                {/* Who Should Consider a USG PVR Scan? */}
                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">Who Should Consider a USG PVR Scan?</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Individuals experiencing frequent urinary tract infections.</li>
                        <li>Patients with difficulty in completely emptying the bladder.</li>
                        <li>Men with symptoms of prostate enlargement or related concerns.</li>
                        <li>Patients with neurological disorders affecting bladder control.</li>
                    </ul>
                </div>

                {/* General Instructions to be Followed */}
                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">General Instructions to be Followed</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Drink 2 glasses of water before arriving.</li>
                        <li>Refrain from passing urine for 1 hour before the scan.</li>
                        <li>Bring your USG prescription.</li>
                        <li>Carry your treating doctor's file and previous USG reports.</li>
                        <li>Bring any recent surgery-related documents if applicable.</li>
                    </ul>
                </div>
            </div>

            <div className="mt-10">
                <Footers />
            </div>
        </div>
    );
};

export default USGPVR;
