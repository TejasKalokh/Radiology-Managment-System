import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import scanImage from "../assets/usgkubf.avif";
import Footers from "../components/Footers";
import Navbar from "../components/Navbar";

const USGPrePostVoid = () => {
    return (
        <div className="min-h-screen bg-white w-full">
            <Navbar />

            <div className="container mx-auto p-6">
                {/* Service Details Section */}
                <div className="mt-20 bg-[#f5f5f5] border border-blue-500 rounded-lg p-6 shadow-lg">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <img
                            src={scanImage}
                            alt="Pre and Post Void Ultrasound"
                            className="rounded-lg shadow-md h-[350px] object-cover"
                        />
                        <div>
                            <h1 className="text-3xl font-bold text-green-800 mb-4 text-center"> USG (Pre Void & Post Void) </h1>
                            <p className="text-gray-700 mb-4">
                                The USG (Pre Void & Post Void) scan is a specialized ultrasound examination that evaluates bladder function by assessing its condition before and after urination. This diagnostic procedure helps measure the amount of urine retained in the bladder, which is crucial for detecting potential issues such as urinary retention, bladder obstruction, or incomplete voiding.
                                <br /><br />
                                This scan is particularly useful for patients with symptoms like frequent urination, urinary incontinence, or difficulties in emptying the bladder. By providing a clear visual analysis of bladder functionality, it assists in diagnosing prostate issues in men, pelvic floor problems, or neurological conditions affecting bladder control.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why is the USG Pre and Post Void Test Important? */}
                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">Why is the USG Pre and Post Void Test Important?</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Assesses bladder emptying efficiency to detect urinary retention issues.</li>
                        <li>Helps identify prostate enlargement, bladder dysfunction, or pelvic organ issues.</li>
                        <li>Provides valuable insights into potential neurological conditions affecting bladder control.</li>
                    </ul>
                </div>

                {/* Who Should Consider this Scan? */}
                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">Who Should Consider this Scan?</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Individuals experiencing frequent urination or difficulty emptying their bladder.</li>
                        <li>Patients with a history of urinary tract infections or bladder dysfunction.</li>
                        <li>Men with suspected prostate enlargement or related issues.</li>
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

export default USGPrePostVoid;
