// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaWhatsapp } from "react-icons/fa";
// import scanImage from "../assets/colordoppler.webp"; // Add your image path
// import Navbar from "../components/Navbar";
// import Footers from "../components/Footers";
// import USGPelvisPage from "../pages/USGPelvisPage";
// import USGSmallParts from "../pages/USGSmallParts";

// const ColorDopplerPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 w-full">
//       <Navbar />

//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-blue-500 rounded-lg p-6 mt-24">
//           <img
//             src={scanImage}
//             alt="Color Doppler"
//             className="rounded-lg shadow-md h-[300px] object-cover"
//           />
//           <div>
//             <h1 className="text-3xl font-bold text-green-800 mb-4">
//               Welcome to Reliable Diagnostic & Radiology Centre
//             </h1>
//             <p className="text-gray-600 mb-4">
//               If you're looking for a reliable Color Doppler centre in Mumbai,
//               it's essential to choose one that offers accurate results and
//               excellent patient care. A Color Doppler test is a special type of
//               ultrasound that evaluates blood flow through arteries and veins.
//             </p>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-2">
//               Color Doppler Cost in Mumbai
//             </h2>
//             <p className="text-gray-600">
//               The cost of Color Doppler in Mumbai can vary depending on the type
//               of scan required. At Diagnopein, we offer affordable Color
//               Doppler services without compromising on quality.
//             </p>
//           </div>
//         </div>

//         <h2 className="text-2xl text-green-700 font-bold text-center my-6">
//           COLOR DOPPLER TESTS
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {["Doppler Upper Limb (Hand)", "Doppler Lower Limb (Leg)", "Carotid Doppler","renal Doppler (Kidney)","Scrotum Doppler","Obs Pregnancy Doppler"].map((test, index) => (
//             <motion.div
//               key={index}
//               className="bg-blue-400 text-white text-center p-4 rounded-md shadow-md hover:bg-blue-500 transition"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//             >
//               {test}
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <div className="mt-10">
//         <Footers />
//       </div>
//     </div>
//   );
// };

// export default ColorDopplerPage;


import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import scanImage from "../assets/colordoppler.webp"; // Add your image path
import Navbar from "../components/Navbar";
import Footers from "../components/Footers";

const ColorDopplerPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 w-full">
            <Navbar />

            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-blue-500 rounded-lg p-6 mt-24">
                    <img
                        src={scanImage}
                        alt="Sonography"
                        className="rounded-lg shadow-md"
                    />
                    <div>
                        <h1 className="text-3xl font-bold text-green-800 mb-4">
                            Welcome to Reliable Diagnostic & Imaging Center
                        </h1>
                        <p className="text-gray-600 mb-4">
                            If you're looking for a reliable Color Doppler centre in Mumbai,it's essential to choose one that offers accurate results and excellent patient care. A Color Doppler test is a special type of ultrasound that evaluates blood flow through arteries and veins.
                        </p>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            Color Doppler Cost in Mumbai
                        </h2>
                        <p className="text-gray-600">
                            The cost of Color Doppler in Mumbai can vary depending on the type
                            of scan required. At Our Centre, we offer affordable Color
                            Doppler services without compromising on quality.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl text-green-700 font-bold text-center my-6">
                COLOR DOPPLER SUBTEST
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        "Doppler Upper Limb (Hand)", "Doppler Lower Limb (Leg)", "Carotid Doppler", "Renal Doppler (Kidney)", "Scrotum Doppler", "Obs Pregnancy Doppler"
                    ].map((price, index) => (
                        <motion.div
                            key={index}
                            className="bg-blue-400 text-white text-center p-4 rounded-md shadow-md hover:bg-blue-500 transition"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            {price === "Doppler Upper Limb (Hand)" ? (
                                <Link to="/doppler-upper" className="block w-full h-full">
                                    {price}
                                </Link>
                            ) : price === "Doppler Lower Limb (Leg)" ? (
                                <Link to="/doppler-lower" className="block w-full h-full">
                                    {price}
                                </Link>
                            ) : price === "Carotid Doppler" ? (
                                <Link to="/carotid-doppler" className="block w-full h-full">
                                    {price}
                                </Link>
                            ) : price === "Renal Doppler (Kidney)" ? (
                                <Link to="/renal-doppler" className="block w-full h-full">
                                    {price}
                                </Link>
                            ) : price === "Scrotum Doppler" ? (
                                <Link to="/scrotum-doppler" className="block w-full h-full">
                                    {price}
                                </Link>
                            ) : price === "Obs Pregnancy Doppler" ? (
                                <Link to="/obsPregnancy-doppler" className="block w-full h-full">
                                    {price}
                                </Link>
                            ) : (
                                price
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="mt-10">
                <Footers />
            </div>
        </div>
    );
};

export default ColorDopplerPage;
