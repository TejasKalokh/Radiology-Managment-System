import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import BannerOne from "../components/BannerOne";
import ServiceSection from "../components/ServiceSection";
import DoctorSection from "../components/DoctorSection";
import PackageSection from "../components/PackageService";
import ContactSection from "../components/ContactSection";
import Footers from "../components/Footers";
import "../css/Landingpage.css";  // ✅ Import the CSS file
import "../index.css";  // ✅ Import global styles
import HeroSection from "../components/HeroSection";
import TestimonialSlider from "../components/TestimonialSlider";
import SonographyPage from "../pages/SonographyPage";
import ChatbotLogo from '../components/ChatbotLogo';

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <HeroSection />
      {/* <div className="container mx-auto px-4 py-10 space-y-20">
        <div className="border border-red-500 p-4"><AboutSection /></div>
        <div className="border border-blue-500 p-4"><BannerOne /></div>
        <div className="border border-green-500 p-4"><ServiceSection /></div>
        <div className="border border-yellow-500 p-4"><DoctorSection /></div>
        <div className="border border-purple-500 p-4"><PackageSection /></div>
        <div className="border border-orange-500 p-4"><ContactSection /></div>
        <div className="border border-pink-500 p-4"><Footer /></div>
      </div> */}
      <AboutSection />
      <BannerOne />
      <ServiceSection />
      <DoctorSection />
      <PackageSection />
      <TestimonialSlider />
      <ContactSection />
      <Footers />
      <ChatbotLogo />
    </div>
  );
};

export default LandingPage;
