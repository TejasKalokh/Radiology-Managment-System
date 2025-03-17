// import bannerImg from "../assets/banner-1-img.png";
// import "@fortawesome/fontawesome-free/css/all.min.css"; // Ensure FontAwesome icons work

// const BannerOne = () => {
//   console.log("banner");
//   return (
//     <section
//       id="banner-one"
//       className="text-center flex items-center justify-center h-[480px] text-white bg-top bg-cover bg-gradient-to-t from-blue-900/90 to-blue-800/85"
//       style={{
//         backgroundImage: `url(${bannerImg})`,
//       }}
//     >
//       <div className="container px-6">
//         <blockquote className="text-2xl font-medium max-w-xl mx-auto">
//           <i className="fas fa-quote-left mr-2"></i>
//           When you are young and healthy, it never occurs to you that in a single second your whole life could change.
//           <i className="fas fa-quote-right ml-2"></i>
//         </blockquote>
//         <small className="block text-lg font-medium mt-2">- Anonim Nano</small>
//       </div>
//     </section>
//   );
// };

// export default BannerOne;


import bannerImg from "../assets/banner-1-img.png";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Ensure FontAwesome icons work

const BannerOne = () => {
  console.log("banner");
  return (
    <section
      id="banner-one"
      className="relative flex items-center justify-center h-[480px] text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(0,80,213,0.9)]"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <blockquote className="text-2xl font-medium max-w-xl mx-auto">
          <i className="fas fa-quote-left mr-2"></i>
          When you are young and healthy, it never occurs to you that in a single second your whole life could change.
          <i className="fas fa-quote-right ml-2"></i>
        </blockquote>
        <small className="block text-lg font-medium mt-2">- Anonim Nano</small>
      </div>
    </section>
  );
};

export default BannerOne;
