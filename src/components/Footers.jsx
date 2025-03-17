// import { FaFacebookF, FaTwitter, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

// const Footer = () => {
//   console.log("footer");
//   return (
//     <footer className="bg-gray-900 text-white text-center py-10 min-h-screen">
//       <div className="container mx-auto px-6">
//         <div className="grid md:grid-cols-4 gap-10">
//           {/* About Us */}
//           <div>
//             <h3 className="uppercase font-medium text-xl mb-6">About Us</h3>
//             <div className="w-32 mx-auto mb-4">
//               <img src="/images/20250207_232006.png" alt="Logo" className="w-full" />
//             </div>
//             <p className="text-gray-300 mb-4">Reliable Diagnostic & Imaging Centre offers expert medical staff, advanced technology, and top-notch hygiene for accurate tests and scans.</p>
//             <address className="text-gray-400 text-sm">
//               Chandresh Niketan Society, Shop No. 29,<br />
//               Opp. Shanti Ratna Office, Shivaji Chowk, Lodha Heaven,<br />
//               Nilje, Dombivli (East) 421 204.
//             </address>
//           </div>

//           {/* Tags */}
//           <div>
//             <h3 className="uppercase font-medium text-xl mb-6">Tags</h3>
//             <ul className="flex flex-wrap gap-2">
//               {['Sonography', 'Colour Doppler', 'Digital X-Ray', '2D Echo', 'Pathology', 'Electrocardiogram'].map(tag => (
//                 <li key={tag} className="bg-gray-700 px-3 py-1 rounded-md text-sm">{tag}</li>
//               ))}
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="uppercase font-medium text-xl mb-6">Quick Links</h3>
//             <ul className="space-y-2">
//               {['Our Services', 'Our Plan', 'Privacy Policy', 'Appointment Schedule'].map(link => (
//                 <li key={link}><a href="#" className="text-gray-300 hover:text-gray-400">{link}</a></li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Us */}
//           <div>
//             <h3 className="uppercase font-medium text-xl mb-6">Contact Us</h3>
//             <p className="text-gray-300 mb-4">Get in Touch for Expert Care & Support!</p>
//             <ul className="space-y-2 text-gray-300">
//               <li>8:00 AM - 11:00 AM</li>
//               <li>2:00 PM - 05:00 PM</li>
//               <li>8:00 PM - 11:00 PM</li>
//               <li className="flex items-center gap-2"><FaEnvelope /> realiblediagnosticpalava@gmail.com</li>
//               <li className="flex items-center gap-2"><FaPhone /> +91 8655010145 / 9552226131</li>
//             </ul>
//           </div>
//         </div>

//         {/* Social Links */}
//         <div className="mt-10 border-t border-gray-700 pt-6">
//           <ul className="flex justify-center space-x-6 text-xl">
//             <li><a href="#" className="text-white hover:text-gray-400"><FaFacebookF /></a></li>
//             <li><a href="#" className="text-white hover:text-gray-400"><FaTwitter /></a></li>
//             <li><a href="#" className="text-white hover:text-gray-400"><FaLinkedin /></a></li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { FaFacebookF, FaTwitter, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import Logo from "../assets/logo.png"

const Footers = () => {
  console.log("footer");
  return (
    <footer className="flex flex-col bg-gray-900 text-white text-center pt-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 text-left">
          {/* About Us */}
          <div>
            <h3 className="uppercase font-medium text-xl mb-6">About Us</h3>
            <div className="w-32 mb-4">
              <img src={Logo} alt="Logo" className="w-full" />
            </div>
            <p className="text-gray-300 mb-4">
              Reliable Diagnostic & Imaging Centre offers expert medical staff, advanced technology, and top-notch hygiene for accurate tests and scans.
            </p>
            <address className="text-gray-400 text-sm leading-relaxed">
              Chandresh Niketan Society, Shop No. 29,<br />
              Opp. Shanti Ratna Office, Shivaji Chowk, Lodha Heaven,<br />
              Nilje, Dombivli (East) 421 204.
            </address>
          </div>

          {/* Tags */}
          <div>
            <h3 className="uppercase font-medium text-xl mb-6">Tags</h3>
            <ul className="flex flex-wrap gap-2">
              {["Sonography", "Colour Doppler", "Digital X-Ray", "2D Echo", "Pathology", "Electrocardiogram"].map((tag) => (
                <li key={tag} className="bg-gray-700 px-3 py-1 rounded-md text-sm text-gray-300 hover:bg-gray-600 transition">
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="uppercase font-medium text-xl mb-6">Quick Links</h3>
            <ul className="space-y-2">
              {["Our Services", "Our Plan", "Privacy Policy", "Appointment Schedule"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="uppercase font-medium text-xl mb-6">Contact Us</h3>
            <p className="text-gray-300 mb-4">Get in Touch for Expert Care & Support!</p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>8:00 AM - 11:00 AM</li>
              <li>2:00 PM - 05:00 PM</li>
              <li>8:00 PM - 11:00 PM</li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-blue-400" />
                <span className="break-all">realiblediagnosticpalava@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-green-400" />
                <span>+91 8655010145 / 9552226131</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-10 border-t border-gray-700 pt-6">
          <ul className="flex justify-center space-x-6 text-xl">
            <li>
              <a href="#" className="text-white hover:text-blue-400 transition">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-400 transition">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-400 transition">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>


        {/* Copyright Section - Always at Bottom */}
        <div className="mt-10 text-white py-4 text-center">
          <p>&copy; 2025 Radiology Center. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footers;
