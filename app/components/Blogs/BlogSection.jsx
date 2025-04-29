// app/components/BlogSection.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const blogPosts = [
  {
    id: 1,
    title: "Discover the Hidden Valleys of Baltistan",
    excerpt: "Explore the untouched beauty of Baltistan, from lush valleys to snow-capped peaks. Adventure awaits you around every corner.",
    image: "/basho.jpg",
  },
  {
    id: 2,
    title: "Cultural Wonders of Baltistan",
    excerpt: "Dive deep into the rich culture and traditions that have been preserved for centuries in the breathtaking landscapes of Baltistan.",
    image: "/skdu.jpg",
  },
  {
    id: 3,
    title: "Top Trekking Trails You Must Explore",
    excerpt: "Baltistan offers some of the world's best trekking routes. Get ready to embark on trails that offer surreal views and thrilling experiences.",
    image: "/shigerlack.jpg",
  },
  {
    id: 4,
    title: "Experience the Warm Hospitality",
    excerpt: "Meet the warm-hearted locals and experience true Baltistani hospitality. Their stories and traditions will stay with you forever.",
    image: "/khaplu.jpg",
  },
];

export default function BlogSection() {
    const cardsRef = useRef([]);
  
    useEffect(() => {
      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.set(card, { scale: 1 });
  
          card.addEventListener("mouseenter", () => {
            gsap.to(card, { scale: 1.03, duration: 0.5, ease: "power2.out" });
          });
  
          card.addEventListener("mouseleave", () => {
            gsap.to(card, { scale: 1, duration: 0.5, ease: "power2.out" });
          });
        }
      });
    }, []);
  
    return (
      <section className="py-12 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-10">Blogs</h1>
        <div className="flex flex-col gap-10">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-72 object-cover" // h-72 = taller image
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }