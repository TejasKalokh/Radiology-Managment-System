import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import scanImage from "../assets/usgprostate.jpg";
import Footers from "../components/Footers";
import Navbar from "../components/Navbar";

const USGProstatePage = () => {
    return (
        <div className="min-h-screen bg-white w-full">
            <Navbar />

            <div className="container mx-auto p-6">
                {/* Service Details Section */}
                <div className="mt-20 bg-[#f5f5f5] border border-blue-500 rounded-lg p-6 shadow-lg">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <img
                            src={scanImage}
                            alt="Prostate Ultrasound"
                            className="rounded-lg shadow-md"
                        />
                        <div>
                            <h1 className="text-3xl font-bold text-green-800 mb-4 text-center"> USG PROSTATE </h1>
                            <p className="text-gray-700 mb-4">
                                A USG Prostate, or Prostate Ultrasound, is a specialized imaging technique designed to assess the size,
                                shape, and condition of the prostate gland. This non-invasive procedure employs sound waves to generate
                                real-time images of the prostate, offering valuable insights for diagnosing and monitoring various prostate-related conditions.
                                It is particularly effective in identifying prostate enlargement (benign prostatic hyperplasia), tumors, cysts,
                                and other abnormalities. The procedure is commonly recommended for individuals experiencing urinary issues,
                                pelvic discomfort, or abnormal blood test results related to prostate-specific antigen (PSA) levels.
                            </p>
                            <p className="text-gray-700">
                                The USG Prostate scan is crucial for early detection of prostate cancer, providing a detailed view of the
                                gland’s structure. It is often combined with a biopsy procedure to obtain tissue samples for further examination.
                                Our expert radiologists ensure precision during the scan, guaranteeing an accurate diagnosis with minimal discomfort.
                                Patients undergoing this procedure may be asked to maintain a full bladder for optimal visualization. With our advanced
                                ultrasound technology and experienced medical staff, we strive to deliver detailed assessments that support effective
                                treatment planning for prostate-related concerns.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why is a Prostate Ultrasound Important? */}
                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">Why is a Prostate Ultrasound Important?</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Early Detection of Prostate Cancer</li>
                        <li>Diagnosis of Benign Prostatic Hyperplasia (BPH)</li>
                        <li>Evaluation of Unexplained Pelvic Pain</li>
                        <li>Monitoring of Prostate Size and Shape</li>
                        <li>Guidance for Prostate Biopsy Procedures</li>
                    </ul>
                </div>

                {/* Who Should Consider a Prostate Ultrasound? */}
                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">Who Should Consider a Prostate Ultrasound?</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Men experiencing urinary difficulties such as frequent urination or weak urine flow.</li>
                        <li>Patients with elevated PSA levels indicating potential prostate concerns.</li>
                        <li>Men with a family history of prostate cancer or related conditions.</li>
                        <li>Individuals undergoing routine prostate health checkups.</li>
                    </ul>
                </div>

                {/* General Instructions to be Followed */}
                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">General Instructions to be Followed</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Drink plenty of water before the scan to maintain a full bladder.</li>
                        <li>Avoid passing urine for at least one hour before the procedure.</li>
                        <li>Bring your prostate-specific prescription and recent medical records.</li>
                        <li>For biopsy guidance, additional preparation instructions will be provided by your healthcare provider.</li>
                    </ul>
                </div>
            </div>

            <div className="mt-10">
                <Footers />
            </div>
        </div>
    );
};

export default USGProstatePage;
