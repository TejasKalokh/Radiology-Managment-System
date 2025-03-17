// import { Link } from "react-router-dom";
// import headerImage from "../assets/header.png";

// const HeroSection = () => {
//   return (
//     <header className="bg-blue-500 pt-32 pb-20">
//       <div className="container mx-auto flex flex-col-reverse md:flex-row items-center text-white px-6">
//         {/* Text Content */}
//         <div className="md:w-1/2 text-center md:text-left md:pr-8">
//           <h1 className="text-5xl font-light mb-2">
//             Expert Imaging, <br /> <span className="font-bold uppercase">Trusted Care.</span>
//           </h1>
//           <p className="text-lg font-semibold">The best match services for you</p>
//           <p className="text-md opacity-90 max-w-lg my-6">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nulla odit esse necessitatibus corporis voluptatem?
//           </p>
//           <div className="flex flex-col md:flex-row gap-4">
//             <Link to="#" className="px-6 py-3 bg-white text-blue-600 rounded-full font-bold shadow-lg hover:shadow-xl transition transform hover:scale-105">
//               Learn More
//             </Link>
//             <Link to="/signin" className="px-6 py-3 bg-blue-400 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition transform hover:scale-105">
//               Sign In
//             </Link>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="md:w-1/2 flex justify-center md:justify-end">
//           <img src={headerImage} alt="Header" className="max-w-lg" />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default HeroSection;

// import { Link } from "react-router-dom";  // ✅ Import Link
// import headerImage from "../assets/header.png";  // ✅ Import headerImage

// const HeroSection = () => {
//   return (
//     <section className="bg-blue-500 pt-32 pb-20">
//       <div className="container mx-auto flex flex-col-reverse md:flex-row items-center text-white px-6">
//         {/* Text Content */}
//         <div className="md:w-1/2 text-center md:text-left md:pr-8">
//           <h1 className="text-5xl font-light mb-2">
//             Expert Imaging, <br /> <span className="font-bold uppercase">Trusted Care.</span>
//           </h1>
//           <p className="text-lg font-semibold">The best match services for you</p>
//           <p className="text-md opacity-90 max-w-lg my-6">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nulla odit esse necessitatibus corporis voluptatem?
//           </p>
//           <div className="flex flex-col md:flex-row gap-4">
//             <Link to="#" className="px-6 py-3 bg-white text-blue-600 rounded-full font-bold shadow-lg hover:shadow-xl transition transform hover:scale-105">
//               Learn More
//             </Link>
//             <Link to="/signin" className="px-6 py-3 bg-blue-400 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition transform hover:scale-105">
//               Sign In
//             </Link>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="md:w-1/2 flex justify-center md:justify-end">
//           <img src={headerImage} alt="Header" className="max-w-lg" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import { Link } from "react-router-dom";  // ✅ Import Link
import headerImage from "../assets/header.png";  // ✅ Import headerImage

const HeroSection = () => {
  return (
    <section className="bg-blue-500 pt-32 pb-0 mt-16 flex items-center h-[100vh] overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center text-white px-6">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left md:pr-8 order-1 md:order-none mt-24 md:mt-0">
          <h1 className="text-5xl font-light mb-2">
            Expert Imaging, <br /> <span className="font-bold uppercase">Trusted Care.</span>
          </h1>
          <p className="text-lg font-semibold">The best match services for you</p>
          <p className="text-md opacity-90 max-w-lg my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nulla odit esse necessitatibus corporis voluptatem?
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Link to="#" className="px-6 py-3 bg-white text-blue-600 rounded-full font-bold shadow-lg hover:shadow-xl transition transform hover:scale-105">
              Learn More
            </Link>
            <Link to="/signIn" className="px-6 py-3 bg-blue-400 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition transform hover:scale-105">
              Sign In
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center md:justify-end md:items-end min-h-0 pr-0 md:pr-20 order-2 md:order-none">
          <img
            src={headerImage}
            alt="Doctors"
            className="block max-w-[600px] md:max-w-[700px] h-auto object-cover self-end md:translate-x-20"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
