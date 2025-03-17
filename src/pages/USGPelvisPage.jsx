import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import scanImage from "../assets/usgpelvis.webp";
import Footers from "../components/Footers";
import Navbar from "../components/Navbar";

const USGPelvisPage = () => {
    return (
        <div className="min-h-screen bg-white w-full">
            <Navbar />

            <div className="container mx-auto p-6">
                {/* Service Details Section */}
                <div className="mt-20 bg-[#f5f5f5] border border-blue-500 rounded-lg p-6 shadow-lg">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <img
                            src={scanImage}
                            alt="Pelvic Ultrasound"
                            className="rounded-lg shadow-md"
                        />
                        <div>
                            <h1 className="text-3xl font-bold text-green-800 mb-4 text-center"> USG PELVIS </h1>
                            <p className="text-gray-700 mb-4">
                                USG Pelvis, or Pelvic Ultrasound, is a non-invasive imaging test used to examine the organs and structures within the pelvic region. This includes the uterus, ovaries, fallopian tubes in women, and the prostate gland and bladder in men. Pelvic ultrasound helps diagnose a variety of conditions related to reproductive health, urinary symptoms, and pelvic pain.
                            </p>
                            <p>
                                we offer precise and reliable USG Pelvis scans using advanced ultrasound technology. Our expert radiologists ensure a comfortable experience while delivering accurate results to support your healthcare journey. Whether you're facing pelvic pain, irregular menstruation, or undergoing fertility evaluations, Diagnopein provides a thorough diagnosis tailored to your needs. For male patients, the test can evaluate prostate health and detect urinary concerns.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why is a Pelvic Ultrasound Important? */}
                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">Why is a Pelvic Ultrasound Important?</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Assessment of Reproductive Organs</li>
                        <li>Evaluation of Pelvic Pain</li>
                        <li>Monitoring Pregnancy</li>
                        <li>Examination of the Urinary Bladder and Prostate</li>
                    </ul>
                </div>

                {/* Types of Pelvic Ultrasound */}
                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">Types of Pelvic Ultrasound</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Transabdominal Ultrasound</li>
                        <li>Transvaginal Ultrasound</li>
                        <li>Transrectal Ultrasound</li>
                    </ul>
                </div>

                {/* Who Should Consider a Pelvic Ultrasound? */}
                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">Who Should Consider a Pelvic Ultrasound?</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Women with Gynecological Symptoms such as irregular menstrual bleeding, pelvic pain, or abnormal vaginal discharge.</li>
                        <li>Pregnant Women: A standard part of prenatal care to monitor fetal growth and check the baby's health.</li>
                        <li>Men with Urinary Issues like difficulty urinating, frequent urination, or pelvic pain.</li>
                        <li>Fertility Evaluation for couples facing infertility concerns.</li>
                    </ul>
                </div>

                {/* Genral Instructions to be Followed */}
                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">Genral Instructions to be Followed</h2>
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

export default USGPelvisPage;