import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const ClientTestimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false); // New State

  const testimonials = [
    "https://www.instagram.com/reel/DS4KtLrCB3P/",
    "https://www.instagram.com/reel/DLUD8TOxZFE/",
    "https://www.instagram.com/reel/DUPyOu-AIS1/",
    "https://www.instagram.com/reel/DS1nO4DACBJ/"
  ];

  useEffect(() => {
    const processEmbeds = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      } else {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      }
    };
    processEmbeds();
  }, [index]);

  const nextStep = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1 >= testimonials.length ? 0 : prev + 1));
  }, [testimonials.length]);

  const prevStep = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // --- Auto Scroll Logic (Pauses if isAutoScrollPaused is true) ---
  useEffect(() => {
    if (isAutoScrollPaused) return; // Stop timer if paused

    const timer = setInterval(() => {
      nextStep();
    }, 6000); 
    return () => clearInterval(timer);
  }, [nextStep, isAutoScrollPaused]);

  const getVisibleIndices = () => {
    const i1 = index;
    const i2 = (index + 1) % testimonials.length;
    const i3 = (index + 2) % testimonials.length;
    return [i1, i2, i3];
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section className="py-20 bg-[#FAF8F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[#3B2F2F]">
            Client <span className="text-[#D4AF37]">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            See the magic our experts create. Real results from our wonderful clients.
          </p>
          {isAutoScrollPaused && (
            <button 
              onClick={() => setIsAutoScrollPaused(false)}
              className="mt-4 text-xs font-bold text-[#D4AF37] border border-[#D4AF37] px-4 py-1 rounded-full hover:bg-[#D4AF37] hover:text-white transition-all"
            >
              RESUME AUTO-SCROLL
            </button>
          )}
        </div>

        <div className="relative group">
          <button
            onClick={() => { prevStep(); setIsAutoScrollPaused(true); }}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white rounded-full shadow-xl text-[#3B2F2F] hover:bg-[#D4AF37] hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => { nextStep(); setIsAutoScrollPaused(true); }}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white rounded-full shadow-xl text-[#3B2F2F] hover:bg-[#D4AF37] hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-6 overflow-visible">
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              {visibleIndices.map((idx, pos) => (
                <motion.div
                  key={`${testimonials[idx]}-${pos}`}
                  initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`${pos === 0 ? "block" : "hidden md:block"} 
                    relative w-full max-w-[340px] md:w-[380px] bg-white rounded-2xl shadow-lg border border-gray-100 p-2 h-[620px]`}
                >
                  {/* OVERLAY: Jab tak pause nahi hai, yeh click catch karega */}
                  {!isAutoScrollPaused && (
                    <div 
                      className="absolute inset-0 z-20 cursor-pointer flex items-center justify-center bg-black/5 rounded-2xl group/play"
                      onClick={() => setIsAutoScrollPaused(true)}
                    >
                       <div className="bg-white/20 backdrop-blur-md p-4 rounded-full opacity-0 group-hover/play:opacity-100 transition-opacity">
                        <Play className="text-white fill-white" size={32} />
                       </div>
                    </div>
                  )}

                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={testimonials[idx]}
                    data-instgrm-version="14"
                    style={{
                      background: "#fff",
                      border: 0,
                      borderRadius: "14px",
                      width: "100%",
                      margin: 0,
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
                setIsAutoScrollPaused(true);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === i 
                ? "bg-[#D4AF37] w-8 h-2.5" 
                : "bg-gray-300 w-2.5 h-2.5 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;