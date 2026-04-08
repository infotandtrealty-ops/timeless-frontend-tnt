import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// import all client logos
import img1 from "../assets/clients/1.jpg";
import img2 from "../assets/clients/2.jpg";
import img3 from "../assets/clients/3.jpg";
import img4 from "../assets/clients/4.jpg";
import img5 from "../assets/clients/5.jpg";
import img6 from "../assets/clients/6.jpg";
import img7 from "../assets/clients/7.jpg";
import img8 from "../assets/clients/8.jpg";
import img9 from "../assets/clients/9.jpg";
import img10 from "../assets/clients/10.jpg";

const FeaturedClients = () => {
  // ✅ useRef without TypeScript type
  const scrollRef = useRef(null);
  const logos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const totalWidth = scrollContainer.scrollWidth / 2; // duplicate logos for smooth loop

    const step = () => {
      scrollAmount += 0.5; // scroll speed
      scrollContainer.scrollLeft = scrollAmount;

      if (scrollAmount >= totalWidth) scrollAmount = 0;

      requestAnimationFrame(step); // smooth animation
    };

    const animation = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <section className="py-16 bg-[#FAF8F6]">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-playfair font-bold uppercase text-[#3B2F2F] tracking-wide">
          We Are Featured
        </h2>
        <span className="block w-20 h-1 bg-[#D4AF37] mx-auto mt-2 rounded"></span>
      </motion.div>

      {/* Smooth Carousel */}
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden space-x-12 items-center"
      >
        {[...logos, ...logos].map((logo, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-40 h-32 md:w-48 md:h-40 flex items-center justify-center bg-white rounded-xl shadow-md border-2 border-[#D4AF37] p-4 transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <img 
              src={logo} 
              alt={`Featured client logo ${index + 1} - Timeless Aesthetics partner`} 
              width="160"
              height="128"
              loading="lazy"
              className="h-full object-contain" 
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedClients;
