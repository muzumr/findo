import { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "@remix-run/react";

const cars = [
  {
    id: 1,
    title: "Honda BRV",
    description: "Comfortable and reliable with spacious seating. Choose from our premium fleet for your next trip.",
    price: "PKR 15,000 - 18,000/day",
    image: "/brv.png",
  },
  {
    id: 2,
    title: "Toyota Land Cruiser",
    description: "Luxury and performance combined. Perfect for both city and adventure rides.",
    price: "PKR 25,000/day",
    image: "/landCruser.png",
  },
  {
    id: 3,
    title: "Hiace Van",
    description: "Spacious van ideal for group travels and long trips, ensuring maximum comfort.",
    price: "PKR 15,500/day",
    image: "/van.jpg",
  },
  {
    id: 4,
    title: "Honda BRV",
    description: "Another view of the Honda BRV, versatile and reliable for your travels.",
    price: "PKR 15,000/day",
    image: "/car.jpg",
  },
];

export default function CarsPage() {
  useEffect(() => {
    gsap.utils.toArray(".car-card").forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)", duration: 0.3 });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, boxShadow: "0px 4px 6px rgba(0,0,0,0.1)", duration: 0.3 });
      });
    });
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Cars</h1>
      <div className="grid gap-6">
        {cars.map((car) => (
          <div
            key={car.id}
            className="car-card flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 cursor-pointer"
          >
            <img
              src={car.image}
              alt={car.title}
              className="w-full md:w-1/3 object-cover h-48 md:h-auto"
            />
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold">{car.title}</h2>
                <p className="text-gray-600 text-sm mt-2">{car.description}</p>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <p className="text-green-600 font-bold">{car.price}</p>
                <div className="flex gap-3 mt-2 sm:mt-0">
                  <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
                    Book Now
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
