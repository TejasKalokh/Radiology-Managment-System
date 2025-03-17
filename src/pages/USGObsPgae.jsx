import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import scanImage from "../assets/usgobs.jpg"; // Add your new image for USG Obs
import Footers from "../components/Footers";
import Navbar from "../components/Navbar";

const USGObsPage = () => {
    return (
        <div className="min-h-screen bg-white w-full">
            <Navbar />

            <div className="container mx-auto p-6">
                {/* Service Details Section */}
                <div className="mt-20 bg-[#f5f5f5] border border-blue-500 rounded-lg p-6 shadow-lg">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <img
                            src={scanImage}
                            alt="Pregnancy Ultrasound"
                            className="rounded-lg shadow-mdrounded-lg shadow-md  h-[400px] object-cover"
                        />
                        <div>
                            <h1 className="text-3xl font-bold text-green-800 mb-4 text-center">
                                USG OBS (Pregnancy Ultrasound)
                            </h1>
                            <p className="text-gray-700 mb-4">
                                The USG Obs scan is a crucial ultrasound examination performed during pregnancy to monitor the development and well-being of the fetus. This imaging technique utilizes high-frequency sound waves to create detailed visuals of the fetus's growth, the placenta's position, and the amniotic fluid levels. By assessing these vital aspects, healthcare providers can ensure the baby is developing properly and identify any potential concerns early on.
                                The USG Obs scan plays a significant role in confirming fetal heartbeat, detecting multiple pregnancies, and evaluating the baby's position within the womb. It also helps identify congenital abnormalities, monitor the placenta's health, and ensure the umbilical cord is functioning properly. Additionally, this scan provides valuable insights into the mother's uterine condition, helping healthcare providers manage any potential complications such as placenta previa or inadequate amniotic fluid levels.
                                By offering real-time imaging, the USG Obs scan is an essential tool for guiding medical decisions, ensuring timely interventions, and promoting a healthy pregnancy journey for both mother and baby.</p>
                        </div>
                    </div>
                </div>

                {/* Why is the USG Obs Test Important? */}
                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">
                        Why is the USG Obs Test Important?
                    </h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Monitoring Fetal Development: Ensures the baby is growing properly and tracks key milestones.</li>
                        <li>Detecting Birth Defects: Identifies potential abnormalities in the fetus at an early stage.</li>
                        <li>Assessing Placenta Health: Monitors the placenta's position and condition, ensuring proper blood supply.</li>
                        <li>Tracking Amniotic Fluid Levels: Ensures the right amount of fluid surrounds the fetus for healthy growth.</li>
                        <li>Determining Baby's Position: Helps plan for delivery by identifying the baby's orientation.</li>
                    </ul>
                </div>

                {/* Who Should Consider a USG Obs Scan? */}
                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">
                        Who Should Consider a USG Obs Scan?
                    </h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>All Expecting Mothers: Regular scans help track the baby's growth and development.</li>
                        <li>High-Risk Pregnancies: Essential for mothers with pre-existing health conditions or previous complications.</li>
                        <li>Women Experiencing Unusual Symptoms: Bleeding, severe pain, or abnormal fetal movement may require immediate scanning.</li>
                        <li>Routine Checkups: Routine USG Obs scans are typically recommended in each trimester for optimal monitoring.</li>
                    </ul>
                </div>

                {/* General Instructions to be Followed */}
                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">
                        General Instructions to be Followed
                    </h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Wear loose, comfortable clothing for easy access to the abdominal area.</li>
                        <li>No need of empty stomach,  Have Breakfast Lunch at Regular time.</li>
                        <li>Bring previous pregnancy records or ultrasound reports and trating Doctors file for reference.</li>
                        <li>Arrive at least 20 minutes early for registration and preparation.</li>
                        <li>Consult your doctor for additional instructions specific to your pregnancy condition.</li>
                        <li>Plz mention if any physical condition or Limitation.</li>
                    </ul>
                </div>
            </div>

            <div className="mt-10">
                <Footers />
            </div>
        </div>
    );
};

export default USGObsPage;
