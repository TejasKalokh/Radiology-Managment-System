import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import scanImage from "../assets/usgobs.jpg";
import Navbar from "../components/Navbar";
import Footers from "../components/Footers";

const ObsPregnancyDopplerPage = () => {
  return (
    <div className="min-h-screen bg-white w-full">
      <Navbar />

      <div className="container mx-auto p-6">
        <div className="mt-20 bg-[#f5f5f5] border border-blue-500 rounded-lg p-6 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src={scanImage}
              alt="Obs Pregnancy Doppler"
              className="rounded-lg shadow-md  h-[300px] object-cover"
            />
            <div>
              <h1 className="text-3xl font-bold text-green-800 mb-4 text-center"> Obs Pregnancy Doppler Scan </h1>
              <p className="text-gray-700 mb-4">
                The Obstetric (Obs) Pregnancy Doppler scan is a specialized ultrasound examination that evaluates blood flow in the uterus, placenta, and umbilical cord during pregnancy. This non-invasive procedure provides crucial information about the well-being of the fetus by assessing blood circulation, oxygen levels, and potential complications such as fetal growth restriction or placental insufficiency. The scan is highly valuable for monitoring high-risk pregnancies, ensuring the baby receives adequate oxygen and nutrients, and guiding appropriate medical interventions. By offering real-time insights into maternal and fetal circulation, the Obs Pregnancy Doppler scan is essential in safeguarding maternal and fetal health throughout pregnancy.
              </p>
            </div>
          </div>
        </div>

        <div className="my-8">
          <h2 className="text-2xl text-green-700 font-bold mb-4">Why is the Obs Pregnancy Doppler Scan Important?</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Assists in detecting fetal growth restrictions by assessing blood flow to the fetus.</li>
            <li>Helps identify signs of placental insufficiency and other pregnancy complications.</li>
            <li>Monitors pregnancies with conditions such as hypertension, diabetes, or multiple pregnancies.</li>
            <li>Evaluates umbilical cord blood flow to ensure the baby’s oxygen supply is optimal.</li>
            <li>Supports decision-making for early delivery or other medical interventions when required.</li>
          </ul>
        </div>

        <div className="my-8">
          <h2 className="text-2xl text-green-700 font-bold mb-4">Who Should Consider an Obs Pregnancy Doppler Scan?</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Women with high-risk pregnancies or a history of pregnancy complications.</li>
            <li>Individuals with conditions like hypertension, diabetes, or preeclampsia.</li>
            <li>Pregnant women experiencing reduced fetal movements or abnormal growth patterns.</li>
            <li>Patients with suspected placental abnormalities or umbilical cord issues.</li>
            <li>Women expecting twins or multiple pregnancies for closer monitoring.</li>
          </ul>
        </div>

        <div className="my-8">
          <h2 className="text-2xl text-green-700 font-bold mb-4">General Instructions to be Followed</h2>
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

export default ObsPregnancyDopplerPage;
