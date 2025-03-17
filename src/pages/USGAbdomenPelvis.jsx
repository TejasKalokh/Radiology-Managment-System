import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import scanImage from "../assets/usgpelvis.webp";
import Footers from "../components/Footers";
import Navbar from "../components/Navbar";

const USGAbdomenPelvis = () => {
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
                            <h1 className="text-3xl font-bold text-green-800 mb-4 text-center"> USG ABDOMEN AND PELVIS </h1>
                            <p className="text-gray-700 mb-4">
                                The USG Abdomen and Pelvis is a comprehensive ultrasound examination used to evaluate the major organs
                                within the abdominal cavity as well as the pelvic area. This non-invasive imaging technique utilizes high-
                                frequency sound waves to produce detailed images, aiding in the diagnosis of a variety of conditions affecting the
                                abdominal organs (such as the liver, kidneys, pancreas, spleen, and gallbladder) and pelvic structures (including
                                the uterus, ovaries, prostate, and bladder). It is a preferred diagnostic tool due to its safety, lack of radiation
                                exposure, and ability to provide real-time insights into the body's internal structures.</p>
                        </div>
                    </div>
                </div>

                {/* Why is the USG Abdomen and Pelvis Test Important? */}
                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">Why is the USG Abdomen and Pelvis Test Important?</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Comprehensive Evaluation of Abdominal Organs: The scan assesses
                            multiple key abdominal organs, including the liver, gallbladder,
                            pancreas, spleen, kidneys, and bladder. It helps identify conditions such
                            as gallstones, kidney stones, liver disease, cysts, tumors, and other
                            abnormalities.</li>
                        <li>Assessment of Pelvic Structures: For women, the scan provides
                            valuable insights into the uterus, ovaries, and fallopian tubes, helping
                            diagnose conditions like ovarian cysts, uterine fibroids, and pelvic
                            inflammatory disease. In men, it can evaluate the prostate gland and
                            detect any signs of enlargement or abnormal masses.</li>
                        <li>Diagnosis of Gastrointestinal Issues: The ultrasound can detect
                            gastrointestinal problems such as appendicitis, bowel obstructions, and
                            abdominal hernias, making it useful for evaluating unexplained
                            abdominal pain or discomfort.</li>
                        <li>Detection of Urinary and Reproductive System Disorders: The scan
                            is effective in diagnosing urinary tract infections (UTIs), bladder
                            stones, and conditions related to the reproductive organs like ectopic
                            pregnancies or endometriosis.</li>
                        <li>Guidance for Further Treatment: The results of the ultrasound help
                            guide additional diagnostic tests, surgical planning, or therapeutic
                            interventions based on the findings.</li>
                    </ul>
                </div>

                {/* Who Should Consider a USG Abdomen and Pelvis Scan? */}
                <div className="my-8">
                    <h2 className="text-2xl text-green-700 font-bold mb-4">Who Should Consider a USG Abdomen and Pelvis Scan?</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Individuals with Abdominal or Pelvic Pain: If you are experiencing
                            unexplained pain or discomfort in the abdomen or pelvic region, this
                            scan can help identify the underlying cause, such as appendicitis,
                            gallstones, or reproductive issues.</li>
                        <li>Patients with Digestive or Urinary Symptoms: Symptoms like
                            bloating, nausea, urinary frequency, or blood in urine can indicate
                            problems in the digestive or urinary systems, making this scan a helpful
                            diagnostic tool.</li>
                        <li>Pregnant Women: During pregnancy, the ultrasound is used to
                            monitor the development of the fetus and detect any potential
                            complications. It provides essential information about fetal growth,
                            amniotic fluid levels, and placental position.</li>
                        <li>Routine Health Checkups: For individuals undergoing routine health
                            evaluations, this scan can provide a baseline assessment of the
                            abdominal and pelvic organs, especially for those with a history of liver
                            disease, kidney problems, or reproductive health issues.</li>
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

export default USGAbdomenPelvis;