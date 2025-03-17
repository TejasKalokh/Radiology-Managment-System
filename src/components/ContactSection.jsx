// const ContactSection = () => {
//   console.log("contact");
//     return (
//       <section id="contact" className="py-16 min-h-screen">
//         <div className="container mx-auto grid md:grid-cols-2 gap-8">
//           {/* Left: Google Maps */}
//           <div className="h-full">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.857710152108!2d73.07387237497959!3d19.157704782063686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bffa3d794477%3A0x3c1fe39b8015fd21!2sReliable%20Diagnostic%20%26%20Imaging%20Centre!5e0!3m2!1sen!2sin!4v1738948806585!5m2!1sen!2sin"
//               width="600"
//               height="450"
//               className="w-full h-full object-cover"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
  
//           {/* Right: Contact Form */}
//           <div className="bg-blue-600 text-white text-center p-10 rounded-lg">
//             <div className="mb-6">
//               <h3 className="text-3xl font-semibold">Contact Us</h3>
//               <p className="text-lg">We Value Your Words – Reach Out to Us!</p>
//             </div>
//             <form className="space-y-4">
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Your name"
//                   className="w-full bg-blue-500 border-none outline-none px-4 py-3 text-white rounded-md placeholder-white"
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="w-full bg-blue-500 border-none outline-none px-4 py-3 text-white rounded-md placeholder-white"
//                 />
//               </div>
//               <div>
//                 <textarea
//                   rows="5"
//                   placeholder="Your Message"
//                   className="w-full bg-blue-500 border-none outline-none px-4 py-3 text-white rounded-md placeholder-white"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="mt-4 px-6 py-3 bg-white text-blue-600 font-semibold rounded-md flex items-center justify-center space-x-2 w-full"
//               >
//                 <i className="fas fa-arrow-right"></i>
//                 <span>Send Message</span>
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default ContactSection;
 

import { useState } from "react";

const ContactSection = () => {
  console.log("contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 min-h-screen">
      <div className="container mx-auto grid md:grid-cols-2 gap-8">
        {/* Left: Google Maps */}
        <div className="h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.857710152108!2d73.07387237497959!3d19.157704782063686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bffa3d794477%3A0x3c1fe39b8015fd21!2sReliable%20Diagnostic%20%26%20Imaging%20Centre!5e0!3m2!1sen!2sin!4v1738948806585!5m2!1sen!2sin"
            className="w-full h-full object-cover"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-blue-600 text-white text-center p-10 rounded-lg">
          <div className="mb-6">
            <h3 className="text-3xl font-semibold">Contact Us</h3>
            <p className="text-lg">We Value Your Words – Reach Out to Us!</p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-blue-500 border-none outline-none px-4 py-3 text-white rounded-md placeholder-white"
                aria-label="Your name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-full bg-blue-500 border-none outline-none px-4 py-3 text-white rounded-md placeholder-white"
                aria-label="Your email"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full bg-blue-500 border-none outline-none px-4 py-3 text-white rounded-md placeholder-white"
                aria-label="Your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-white text-blue-600 font-semibold rounded-md flex items-center justify-center space-x-2 w-full hover:bg-blue-700 hover:text-white transition"
            >
              <i className="fas fa-arrow-right"></i>
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
