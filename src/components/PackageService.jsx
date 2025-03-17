// const PackageService = () => {
//     const services = [
//       {
//         icon: "fas fa-phone fa-2x",
//         title: "Regular Case",
//         description:
//           "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, asperiores. Expedita, reiciendis quos beatae at consequatur voluptatibus fuga iste adipisci.",
//       },
//       {
//         icon: "fas fa-calendar-alt fa-2x",
//         title: "Serious Case",
//         description:
//           "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, asperiores. Expedita, reiciendis quos beatae at consequatur voluptatibus fuga iste adipisci.",
//       },
//       {
//         icon: "fas fa-comments fa-2x",
//         title: "Emergency Case",
//         description:
//           "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, asperiores. Expedita, reiciendis quos beatae at consequatur voluptatibus fuga iste adipisci.",
//       },
//     ];
  
//     return (
//       <section className="py-16 text-center bg-blue-900 bg-opacity-90 bg-cover bg-center" style={{ backgroundImage: "url('/images/package-service-img.jpg')" }}>
//         <div className="container mx-auto px-4">
//           <div className="text-white mb-16">
//             <h2 className="text-4xl font-bold">Our Service</h2>
//             <p className="text-lg">Best services for you</p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-12">
//             {services.map((service, index) => (
//               <div key={index} className="bg-white p-12 relative shadow-lg rounded-lg">
//                 <div className="w-20 h-20 bg-blue-500 text-white flex items-center justify-center rounded-lg rotate-45 absolute -top-10 left-1/2 transform -translate-x-1/2">
//                   <i className={`${service.icon} -rotate-45`}></i>
//                 </div>
//                 <h3 className="text-xl font-semibold mt-16 mb-4 opacity-70">{service.title}</h3>
//                 <p className="text-gray-700 text-sm mb-6">{service.description}</p>
//                 <a href="#" className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition">Read More</a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default PackageService;


// import "@fortawesome/fontawesome-free/css/all.min.css";
// import packageServiceImg from "../assets/package-service-img.jpg";

// const PackageService = () => {
//   console.log("package service");

//   const services = [
//     {
//       icon: "fas fa-phone fa-2x",
//       title: "Regular Case",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, reiciendis quos beatae at consequatur voluptatibus fuga iste adipisci.",
//     },
//     {
//       icon: "fas fa-calendar-alt fa-2x",
//       title: "Serious Case",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, reiciendis quos beatae at consequatur voluptatibus fuga iste adipisci.",
//     },
//     {
//       icon: "fas fa-comments fa-2x",
//       title: "Emergency Case",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, reiciendis quos beatae at consequatur voluptatibus fuga iste adipisci.",
//     },
//   ];

//   return (
//     <section
//       className="py-16 text-center bg-blue-900 bg-opacity-90 bg-cover bg-center"
//       style={{ backgroundImage: `url(${packageServiceImg})` }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="text-white mb-16">
//           <h2 className="text-4xl font-bold">Our Service</h2>
//           <p className="text-lg">Best services for you</p>
//         </div>
//         <div className="grid md:grid-cols-3 gap-12">
//           {services.map((service, index) => (
//             <div key={index} className="bg-white p-12 relative shadow-lg rounded-lg">
//               <div className="w-20 h-20 bg-blue-500 text-white flex items-center justify-center rounded-lg rotate-45 absolute -top-10 left-1/2 transform -translate-x-1/2">
//                 <i className={`${service.icon} -rotate-45`}></i>
//               </div>
//               <h3 className="text-xl font-semibold mt-16 mb-4 opacity-70">{service.title}</h3>
//               <p className="text-gray-700 text-sm mb-6">{service.description}</p>
//               <a
//                 href="#"
//                 aria-label={`Read more about ${service.title}`}
//                 className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
//               >
//                 Read More
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PackageService;

import "@fortawesome/fontawesome-free/css/all.min.css";
import packageServiceImg from "../assets/package-service-img.jpg";

const PackageService = () => {
  console.log("package service");

  const services = [
    {
      icon: "fas fa-phone fa-2x",
      title: "Regular Case",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, reiciendis quos beatae at consequatur voluptatibus fuga iste adipisci.",
    },
    {
      icon: "fas fa-calendar-alt fa-2x",
      title: "Serious Case",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, reiciendis quos beatae at consequatur voluptatibus fuga iste adipisci.",
    },
    {
      icon: "fas fa-comments fa-2x",
      title: "Emergency Case",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, reiciendis quos beatae at consequatur voluptatibus fuga iste adipisci.",
    },
  ];

  return (
    <section
      className="relative py-16 text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${packageServiceImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(0,80,213,0.9)]"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-white">
        <div className="mb-16">
          <h2 className="text-4xl font-bold">Our Service</h2>
          <p className="text-lg">Best services for you</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-12 relative shadow-lg rounded-lg text-gray-900">
              <div className="w-20 h-20 bg-blue-500 text-white flex items-center justify-center rounded-lg rotate-45 absolute -top-10 left-1/2 transform -translate-x-1/2">
                <i className={`${service.icon} -rotate-45`}></i>
              </div>
              <h3 className="text-xl font-semibold mt-16 mb-4 opacity-70">{service.title}</h3>
              <p className="text-gray-700 text-sm mb-6">{service.description}</p>
              <a
                href="#"
                aria-label={`Read more about ${service.title}`}
                className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageService;
