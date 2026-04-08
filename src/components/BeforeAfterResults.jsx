import React, { useEffect } from "react";
import { motion } from "framer-motion";

const BeforeAfterResults = () => {
  const results = [
    { id: 1, title: "Chin Filler", image: "/before-after/1.webp" },
    { id: 2, title: "Full Face Lift", image: "/before-after/2.webp" },
    { id: 3, title: "Permanent Eyebrows", image: "/before-after/3.webp" },
    { id: 4, title: "Chin Filler", image: "/before-after/4.webp" },
  ];
  

  useEffect(() => {
    const scrollContainer = document.getElementById("results-carousel");
    if (!scrollContainer) return;

    const card = scrollContainer.querySelector("div");
    if (!card) return;

    const cardWidth = card.offsetWidth + 24; // 24px gap
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex++;
      scrollContainer.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth",
      });

      // Reset when reaching the end
      if (
        currentIndex * cardWidth >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        currentIndex = 0;
        setTimeout(() => {
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        }, 600);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF8F6]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold uppercase text-[#3B2F2F] tracking-wide">
            Before & After Results
          </h2>
          <span className="block w-20 h-1 bg-[#D4AF37] mx-auto mt-2 rounded"></span>
        </motion.div>

        {/* Carousel */}
        <div
          id="results-carousel"
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth justify-center"
        >
          {results.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: item.id * 0.2 }}
              className="flex-shrink-0 w-[250px] bg-white rounded-xl shadow-xl overflow-hidden snap-center transform transition duration-500 hover:scale-105 hover:shadow-2xl border-2 border-[#D4AF37]"
            >
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 text-center">
                <p className="text-[#3B2F2F] font-playfair font-semibold">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterResults;
