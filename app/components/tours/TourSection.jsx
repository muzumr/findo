// app/components/TourSection.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const tours = [
  {
    id: 1,
    title: "Skardu Valley Adventure",
    description: "Experience the stunning landscapes of Skardu Valley with guided tours to lakes, deserts, and mountain peaks.",
    reviews: "1,230 reviews",
    score: "9.2",
    buttonText: "Explore Tour",
    image: "/skdu.jpg",
  },
  {
    id: 2,
    title: "Hiking Expedition in Baltoro",
    description: "Join our trekking expedition through Baltoro Glacier, one of the most breathtaking trails in the Karakoram range.",
    reviews: "987 reviews",
    score: "9.5",
    buttonText: "View Trek",
    image: "https://th.bing.com/th/id/OIP.vRGrvXRJcG7FWYev0ay2-gHaFj?rs=1&pid=ImgDetMain",
  },
  {
    id: 3,
    title: "Cultural Tour of Shigar Valley",
    description: "Discover ancient forts, beautiful mosques, and the unique culture of Shigar Valley with our guided cultural tours.",
    reviews: "742 reviews",
    score: "9.0",
    buttonText: "See Details",
    image: "https://th.bing.com/th/id/OIP.8mA5erSB4UTHqFoZRvv-GQHaEH?rs=1&pid=ImgDetMain",
  },
];

export default function TourSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (card) {
        gsap.set(card, { scale: 1 });

        card.addEventListener("mouseenter", () => {
          gsap.to(card, { scale: 1.02, duration: 0.4, ease: "power2.out" });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, { scale: 1, duration: 0.4, ease: "power2.out" });
        });
      }
    });
  }, []);

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">Baltistan Tour Packages</h1>
      <div className="flex flex-col gap-8">
        {tours.map((tour, index) => (
          <div
            key={tour.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300"
          >
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full md:w-1/3 h-60 object-cover"
            />
            <div className="flex flex-col justify-between p-6 flex-1">
              <div>
                <h2 className="text-2xl font-semibold mb-2">{tour.title}</h2>
                <p className="text-gray-600 mb-4">{tour.description}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="text-gray-500 text-sm">{tour.reviews}</p>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-yellow-400">⭐</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-green-600 font-bold">{tour.score}</div>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
                    {tour.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
