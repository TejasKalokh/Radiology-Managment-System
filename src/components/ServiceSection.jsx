import { Link } from "react-router-dom"; // Import Link from react-router-dom
import HeartRate from "../assets/heart-rate.png";
import XRay from "../assets/x-ray.png";
import Ultrasound from "../assets/ultrasound.png";
import doppler from "../assets/doppler-fetal-monitor.png";
import dots from "../assets/4-dots.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SonographyPage from "../pages/SonographyPage";
import { link } from "framer-motion/client";

const ServiceSection = () => {
  console.log("service");

  const services = [
    {
      img: HeartRate,
      title: "Electrocardiogram",
      description:
        "An ECG (electrocardiogram) is a test that records the electrical activity of your heart, including the rate and rhythm. It's usually quick and painless.",
      link: "/ECG"
      },
    {
      img: XRay,
      title: "X-Ray",
      description:
        "An X-ray is a type of electromagnetic radiation that produces images of the inside of the body. X-rays are used to diagnose broken bones, tumors, infections, arthritis, and other conditions.",
      link: "/X-Ray",
    },
    {
      img: Ultrasound,
      title: "Sonography",
      description:
        "Sonography, also known as an ultrasound, is a noninvasive medical procedure that uses sound waves to create images of the inside of the body.",
      link: "/sonography", // Added link for Sonography
    },
    {
      img: doppler,
      title: "Color Doppler",
      description:
        "A color Doppler test is a non-invasive ultrasound that uses color to show blood flow in the body. It can be used to examine the heart, eyes, and other organs.",
      link: "/ColorDoppler"
      },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="services" className="py-10 bg-gray-100 min-h-[80vh] sm:min-h-[60vh]">
      <div className="container mx-auto text-center">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold">
            The Best Doctor gives the least medicines
          </h2>
          <p className="text-lg text-gray-600">
            A perfect way to show your hospital services
          </p>
          <div className="flex items-center justify-center my-6">
            <div className="w-24 h-1 bg-gray-300"></div>
            <img src={dots} alt="dots" className="mx-2 w-8" />
            <div className="w-24 h-1 bg-gray-300"></div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                {/* Add Link only for Sonography */}
                {service.link ? (
                  <Link to={service.link}>
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-20 cursor-pointer"
                    />
                  </Link>
                ) : (
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-20"
                  />
                )}
              </div>
              <h3 className="text-xl font-medium opacity-70 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Slider for Mobile View */}
        <div className="sm:hidden">
          <Slider {...sliderSettings}>
            {services.map((service, index) => (
              <div key={index} className="px-4">
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-center mb-6">
                    {service.link ? (
                      <Link to={service.link}>
                        <img
                          src={service.img}
                          alt={service.title}
                          className="w-20 cursor-pointer"
                        />
                      </Link>
                    ) : (
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-20"
                      />
                    )}
                  </div>
                  <h3 className="text-xl font-medium opacity-70 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
