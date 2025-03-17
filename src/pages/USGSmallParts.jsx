import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import usgsmall from "../assets/usgs-small.jpg";
import Footers from "../components/Footers";
import Navbar from "../components/Navbar";

const USGSmallParts = () => {
    return (
        <div className="min-h-screen bg-white w-full">
            <Navbar />

            <div className="container mx-auto p-6">
                {/* Service Details Section */}
                <div className="mt-20 bg-[#f5f5f5] border border-blue-500 rounded-lg p-6 shadow-lg">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <img
                            src={usgsmall}
                            alt="Pelvic Ultrasound"
                            className="rounded-lg shadow-md"
                        />
                        <div>
                            <h1 className="text-3xl font-bold text-green-800 mb-4 text-center"> USG SMALL PARTS </h1>
                            <p className="text-gray-700 mb-4">
                                Small Parts Ultrasound <b>(USG)</b> is a type of ultrasound imaging used to
                                examine smaller structures of the body, typically those located just
                                under the skin. This technique utilizes high-frequency sound waves to
                                generate images of various body parts. It is commonly used to evaluate
                                organs and tissues such as the scrotum, thyroid, parathyroid glands,
                                salivary glands, muscles, tendons, and breasts. Small-parts ultrasound
                                is a non-invasive, safe, and highly effective tool for diagnosing and
                                monitoring various conditions in these areas.</p>
                        </div>
                    </div>
                </div>

                {/* Key Areas for Small Parts Ultrasound */}
                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">Key Areas for Small Parts Ultrasound</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Scrotum Ultrasound: A scrotal ultrasound is used to evaluate the testicles and surrounding structures. It is commonly used to investigate pain, lumps, swelling, or enlarged veins <b>(such as in varicocele)</b>
                            and can help diagnose conditions like testicular torsion, epididymitis, hydrocele, or testicular cancer. This ultrasound provides clear images of both testicles, the epididymis, spermatic cord, and scrotal
                            sac.</li>
                        <li>Thyroid Ultrasound: A thyroid ultrasound is used to examine the thyroid gland, located at the base of the neck. It is often performed to evaluate nodules, goiter, cysts, and to assess conditions like
                            hyperthyroidism or hypothyroidism. A thyroid ultrasound helps doctors determine the size, shape, and texture of the thyroid gland and check for any abnormalities.</li>
                        <li>Parathyroid Ultrasound: The parathyroid glands are small glands located behind the thyroid. An ultrasound of the parathyroid glands is typically performed to evaluate suspected cases of
                            hyperparathyroidism or to detect parathyroid adenomas <b>(benign tumors)</b>. This test is particularly useful in patients with abnormal calcium levels and helps identify any enlargement or abnormal growth in
                            the parathyroid glands.</li>
                        <li>Salivary Gland Ultrasound: This ultrasound is used to evaluate the salivary glands for issues like salivary stones, infections, or tumors. It can help identify conditions such as sialadenitis <b>(inflammation
                            of the salivary glands)</b> or sialolithiasis <b>(presence of stones in the salivary ducts).</b></li>
                        <li>Breast Ultrasound: A breast ultrasound is commonly performed alongside a mammogram to evaluate breast lumps, cysts, or abnormalities. This non-invasive procedure helps differentiate between
                            solid and fluid-filled masses and can be used to guide biopsies.</li>
                        <li>Musculoskeletal Ultrasound: Small parts ultrasound is also used to evaluate muscles, tendons, ligaments, and joints for injuries, tears, or inflammation. It is a valuable diagnostic tool for sports injuries,
                            tendonitis, and conditions like bursitis.</li>
                    </ul>
                </div>

                {/* TWhy is Small Parts Ultrasound Important? */}
                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">Why is Small Parts Ultrasound Important?</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Non-invasive and Safe: Small parts ultrasound is a non-invasive
                            procedure with no radiation, making it safe for most patients, including
                            pregnant women and children. It provides valuable information without
                            the need for surgical interventions or more invasive tests.</li>
                        <li> Accurate and Detailed Imaging: It offers highly detailed and accurate
                            images of soft tissues and small structures, which may not be visible on
                            X-rays or other imaging techniques. It is especially helpful for
                            evaluating conditions that involve superficial organs or tissues.</li>
                        <li>Real-time Monitoring: Ultrasound allows real-time imaging, which
                            helps assess dynamic conditions, such as blood flow in the testicular
                            veins or the presence of stones in the salivary glands. It is also useful in
                            guiding procedures like biopsies.</li>
                        <li>Early Detection and Diagnosis: Small parts ultrasound can identify
                            abnormalities at an early stage, allowing for prompt diagnosis and
                            intervention. It is effective in detecting benign conditions, such as cysts,
                            and helps differentiate them from more serious conditions, like tumors.</li>
                    </ul>
                </div>

                {/* Who Should Consider Small Parts Ultrasound? */}
                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">Who Should Consider Small Parts Ultrasound?</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Individuals with Lumps or Swelling: If you notice a lump, swelling,
                            or unusual growth in areas like the scrotum, neck, or breast, small parts
                            ultrasound can help assess the cause.</li>
                        <li>Patients with Pain or Discomfort: Small parts ultrasound is
                            recommended for those experiencing pain or discomfort in areas such
                            as the scrotum, thyroid, or salivary glands. It helps identify the
                            underlying cause and guide further treatment.</li>
                        <li>Those with Abnormal Blood Tests: Patients with abnormal lab
                            results, such as elevated calcium levels <b>(indicating potential parathyroid
                            issues)</b> or thyroid dysfunction, may undergo small parts ultrasound for
                            further evaluation.</li>
                        <li>Patients Monitoring Chronic Conditions: If you have a known
                            condition, like thyroid disease or benign prostatic hyperplasia <b>(BPH)</b>,
                            and need periodic check-ups, small parts ultrasound can be used to
                            monitor changes over time.</li>
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

export default USGSmallParts;