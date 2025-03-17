// const AboutSection = () => {
//     return (
//       <section id="about" className="py bg-white">
//         <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//           <div className="text-center lg:text-left">
//             <div className="mb-6">
//               <h2 className="text-4xl font-semibold mb-3">About Us</h2>
//               <div className="w-full h-1 bg-gray-300 relative">
//                 <div className="w-24 h-full bg-light-blue absolute left-1/2 transform -translate-x-1/2"></div>
//               </div>
//             </div>
//             <p className="text-lg leading-relaxed text-gray-700 my-6">
//               Reliable Diagnostic & Imaging Centre is one of the best diagnostics centres in Nilje Gaon. They have a team of expert medical staff and lab technicians with advanced technologies, monitoring all types of tests and scans. They maintain hygiene and proper sanitation to keep the centre clean. The staff behavior is excellent with proper knowledge, and they will assist you at their best.
//             </p>
//             <a href="#" className="inline-block px-6 py-3 rounded-full bg-white border-2 border-gray-400 text-gray-600 hover:bg-gray-100 transition-all">
//               Learn More
//             </a>
//           </div>
//           <div className="flex justify-center lg:justify-end">
//             <div className="relative max-w-md w-full bg-blue-500">
//               <img src="images/about-img.png" alt="About Us" className="pt-40 scale-x-105" />
//               <div className="absolute top-[-56px] left-0 w-full h-full bg-blue-600 -z-10"></div>
//               <div className="absolute top-[-112px] left-0 w-full h-full bg-blue-700 -z-20"></div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default AboutSection;

import aboutImage from "../assets/about-img.png";

const AboutSection = () => {
  console.log("abt");
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6 lg:px-12">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <div className="mb-6">
            <h2 className="text-4xl font-semibold mb-3">About Us</h2>
            <div className="w-full h-1 bg-gray-300 relative">
              <div className="w-24 h-full bg-light-blue absolute left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
          <p className="text-lg leading-relaxed text-gray-700 my-6">
            Reliable Diagnostic & Imaging Centre is one of the best diagnostic centres in Nilje Gaon.
            They have a team of expert medical staff and lab technicians with advanced technologies,
            monitoring all types of tests and scans. They maintain hygiene and proper sanitation to keep
            the centre clean. The staff behavior is excellent with proper knowledge, and they will assist
            you at their best.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-3 rounded-full bg-white border-2 border-gray-400 text-gray-600 hover:bg-gray-100 transition-all"
          >
            Learn More
          </a>
        </div>

        {/* Image Content */}
        <div className="flex justify-center lg:justify-end relative">
          <div className="relative max-w-md w-full">
            <img src={aboutImage} alt="About Us" className="pt-40 scale-105" />
            <div className="absolute top-[-56px] left-0 w-full h-full bg-blue-600 -z-10"></div>
            <div className="absolute top-[-112px] left-0 w-full h-full bg-blue-700 -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;