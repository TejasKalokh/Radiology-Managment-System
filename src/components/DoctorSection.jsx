import doc1 from "../assets/doc-1.png";
import doc2 from "../assets/doc-2.png";
import doc3 from "../assets/doc-3.png";

const DoctorSection = () => {
  console.log("dr");

  const doctors = [
    { name: "Samuel Goe", specialty: "Medicine", image: doc1 },
    { name: "Elizabeth Ira", specialty: "Cardiology", image: doc2 },
    { name: "Tanya Collins", specialty: "Medicine", image: doc3 },
  ];

  return (
    <section id="doc-panel" className="py-16 min-h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold">Our Doctor Panel</h2>
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {doctors.map((doctor, index) => (
            <div key={index} className="relative bg-gray-200 overflow-hidden rounded-lg shadow-lg group">
              <img src={doctor.image} alt="doctor" className="w-full h-96 object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-blue-600 text-white text-center py-4 transition-transform translate-y-[100%] group-hover:translate-y-0 duration-300">
                <p className="text-xl font-semibold">{doctor.name}</p>
                <p className="text-lg">{doctor.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
