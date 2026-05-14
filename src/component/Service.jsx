export  function Service() {
  const services = [
    {
      title: "Web Development",
      desc: "Build responsive, fast, and modern websites tailored to your business needs.",
      img: "/images/service1.png",
    },
    {
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile apps for Android & iOS with excellent user experience.",
      img: "/images/service2.png",
    },
    {
      title: "UI/UX Design",
      desc: "Creative and user-centered designs that deliver exceptional digital experiences.",
      img: "/images/service3.png",
    },
    {
      title: "Solar Installation",
      desc: "Reliable and efficient solar power solutions for homes and businesses.",
      img: "/images/solar.png", // Replace with your actual image
    },
    {
      title: "Photocopier Repair",
      desc: "Expert maintenance and repair services for photocopiers and printers.",
      img: "/images/photocopier.png", // Replace with your actual image
    },
    {
      title: "CCTV Installation",
      desc: "Professional security camera installation with 24/7 surveillance systems.",
      img: "/images/cctv.png", // Replace with your actual image
    },
  ];

  return (
    <div className="pt-10 pb-20 bg-gray-50">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Our Services
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We deliver innovative technology and engineering solutions to help your business grow
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group border border-gray-100"
          >
            {/* Image Container */}
            <div className="h-52 bg-gray-100 flex items-center justify-center relative overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="w-28 h-28 object-contain transition-transform duration-500 group-hover:scale-110"
              />
              {/* Optional overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>

            {/* Content */}
            <div className="p-7">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3 text-center">
                {service.title}
              </h2>
              
              <p className="text-gray-600 text-center leading-relaxed mb-8">
                {service.desc}
              </p>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-2xl transition-all duration-300 active:scale-95 shadow-lg shadow-blue-500/30">
                Learn More / Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <p className="text-gray-600 mb-4">Have a custom project in mind?</p>
        <button 
          onClick={() => window.location.href = '/apply'}
          className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition">
          Get a Free Consultation
        </button>
      </div>
    </div>
  );
}