import React, { useEffect, useState, useCallback } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ClientTestimonials = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    "https://www.instagram.com/reel/DS4KtLrCB3P/",
    "https://www.instagram.com/reel/DLUD8TOxZFE/",
    "https://www.instagram.com/reel/DUPyOu-AIS1/",
    "https://www.instagram.com/reel/DS1nO4DACBJ/"
  ];

  // Infinite Logic: Hum items ko replicate kar rahe hain taaki "white space" na aaye
  const displayItems = [...testimonials, ...testimonials, ...testimonials];
  const totalOriginal = testimonials.length;

  useEffect(() => {
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, [index]);

  const nextStep = useCallback(() => {
    setIndex((prev) => (prev + 1 >= totalOriginal ? 0 : prev + 1));
  }, [totalOriginal]);

  const prevStep = () => {
    setIndex((prev) => (prev === 0 ? totalOriginal - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextStep, 5000);
    return () => clearInterval(timer);
  }, [nextStep, isPaused]);

  return (
    <section className="py-20 bg-[#FAF8F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[#3B2F2F]">
            Client <span className="text-[#D4AF37]">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>

        <div 
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button 
            onClick={prevStep} 
            className="absolute -left-2 md:left-[-20px] top-1/2 -translate-y-1/2 z-30 p-3 bg-white rounded-full shadow-xl text-[#3B2F2F] hover:bg-[#D4AF37] hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <ChevronLeft size={28} />
          </button>

          <button 
            onClick={nextStep} 
            className="absolute -right-2 md:right-[-20px] top-1/2 -translate-y-1/2 z-30 p-3 bg-white rounded-full shadow-xl text-[#3B2F2F] hover:bg-[#D4AF37] hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <ChevronRight size={28} />
          </button>

          {/* Slider Window */}
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-6"
              animate={{ 
                // Ab ye logic white space ko cover kar lega
                x: `calc(-${index * (window.innerWidth < 768 ? 100 : 33.33)}% - ${index * 16}px)` 
              }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
              {displayItems.map((url, i) => (
                <div 
                  key={i} 
                  className="w-full md:w-[calc(33.33%-16px)] flex-shrink-0 bg-white rounded-2xl shadow-lg p-2 h-[600px] border border-gray-100"
                >
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={url}
                    data-instgrm-version="14"
                    style={{ width: "100%", height: "100%", margin: 0 }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Dots Indicators (Only for original items) */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`transition-all duration-500 rounded-full h-2.5 ${
                index === i ? "bg-[#D4AF37] w-10" : "bg-gray-300 w-2.5"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;