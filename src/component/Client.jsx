import { useState } from "react";
import Real from "../assets/RealTeh.png"
import Free from "../assets/Free.png"
import Pixel from "../assets/pixel.png"
import Soft from "../assets/Soft.png"

const client = [
  {
    img: Real,
    name: "Star handled our installation project with outstanding professionalism. The entire process—from planning to final setup—was smooth, quick, and perfectly executed. Their team paid attention to every detail and made sure everything was working flawlessly before completing the job. We’re extremely satisfied with the quality of the work done. Star truly delivers success you can rely on.",
  },
  {
    img: Free,
    name: "Collaborating with Star was an absolute pleasure. From the very beginning, their team showed great communication, professionalism, and creativity. Our joint efforts turned into a highly successful project, exceeding all expectations. Star’s ability to understand our needs and work seamlessly with us made the collaboration smooth and productive. We look forward to working with them again.",
  },
  {
    img: Pixel,
    name: "He is a perfect teacher. Learning from him has been an incredible experience. He explains concepts clearly, is patient with questions, and makes learning enjoyable. Thanks to his guidance, I’ve gained confidence and a deeper understanding of the subject. I highly recommend him to anyone who wants to learn effectively.",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=774&auto=format&fit=crop",
    name: "Working with Star Tech on our project pattern was a game-changer. Their team carefully analyzed our requirements and implemented a clear, efficient system that worked flawlessly. The pattern they introduced not only improved our workflow but also enhanced overall performance. Star Tech’s expertise and consistency made the entire process smooth and successful. We’re extremely happy with the results.",
  },
  {
    img: Soft,
    name: "Working with Star has been one of the best decisions we’ve made. Their team is consistently reliable, highly skilled, and always delivers quality work on time. From communication to execution, everything feels smooth and professional. Star doesn’t just solve problems — they bring smart, innovative solutions that push our projects forward. I’m truly impressed by their consistency and commitment to excellence.",
  },
];

export function Client() {
  const [currentImage, setCurrentimage] = useState(0);

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">

        {/* ========= HEADER ========= */}
        <h2 className="text-center text-3xl font-semibold">
          Trusted by the world's most innovative companies
        </h2>

        <p className="text-center text-lg mt-4 text-gray-600">
          Global leaders partner with Star Tech to drive workforce
          transformation and unlock their organization's full potential
          through cutting-edge tech skills.
        </p>

        <hr className="my-10 border-gray-300" />

        {/* ========= LOGO GRID ========= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
          <img
            src="https://foundations.projectpythia.org/build/GitHub-logo-908bd49004aa8b40db28a805a16e3f24.png"
            alt="Github"
            className="h-12 opacity-70 hover:opacity-100 transition"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            alt="Microsoft"
            className="h-12 opacity-70 hover:opacity-100 transition"
          />

          <img
            src="https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=774&auto=format&fit=crop"
            alt="Google"
            className="h-10 opacity-70 hover:opacity-100 transition"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon"
            className="h-10 opacity-70 hover:opacity-100 transition"
          />
        </div>
      </div>

      {/* ========= TESTIMONIAL CAROUSEL ========= */}
      <div className="mt-16 text-center">
        <h1 className="text-2xl font-bold mb-6">Success that speaks for itself</h1>

        <div className="p-2 w-50 flex flex-col bg-blue-100 items-center">
          <img
            src={client[currentImage].img}
            alt={client[currentImage].name}
            className=" h-20 rounded-full object-contain mb-4"
          />

          <p className="text-xl font-medium">{client[currentImage].name}</p>

          <button
            onClick={() => setCurrentimage((prev) => (prev + 1) % client.length)}
            className="mt-5 px-6 py-2  bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
