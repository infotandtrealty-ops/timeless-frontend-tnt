import React, { useEffect, useRef, useState } from "react";

const ClientTestimonials = () => {
  const marqueeRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false); // Scroll pause state

  useEffect(() => {
    // Load Instagram script
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }

    // Auto scroll logic
    let scrollAmount = 0;
    const speed = 0.4;
    let requestRef;

    const scroll = () => {
      if (!marqueeRef.current) return;

      // Agar user ne hover kiya hai (isPaused true), toh scroll mat karo
      if (!isPaused) {
        scrollAmount += speed;
        marqueeRef.current.scrollLeft = scrollAmount;

        if (
          marqueeRef.current.scrollLeft >=
          marqueeRef.current.scrollWidth / 2
        ) {
          scrollAmount = 0;
        }
      } else {
        // Jab pause ho, toh scrollAmount ko current position pe update rakho
        scrollAmount = marqueeRef.current.scrollLeft;
      }

      requestRef = requestAnimationFrame(scroll);
    };

    requestRef = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(requestRef);
  }, [isPaused]); // Depend on isPaused state

  const testimonials = [
    "https://www.instagram.com/reel/DTkuXF1jAcj/",
    "https://www.instagram.com/reel/DRttlCokRDN/",
    "https://www.instagram.com/reel/DLUD8TOxZFE/",
    "https://www.instagram.com/reel/DS4KtLrCB3P/",
  ];

  const loopData = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-white text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            <span style={{ color: "#D4AF37" }}>Client Testimonials</span>
          </h2>
          <p className="text-black max-w-2xl mx-auto">
            Real experiences. Real transformations at{" "}
            <span style={{ color: "#D4AF37" }} className="font-semibold">
              Timeless Aesthetics
            </span>
          </p>
        </div>

        {/* Infinite marquee */}
        <div
          ref={marqueeRef}
          className="flex gap-10 overflow-x-hidden whitespace-nowrap py-10"
          onMouseEnter={() => setIsPaused(true)}   // Pause on hover
          onMouseLeave={() => setIsPaused(false)}  // Resume on leave
        >
          {loopData.map((url, index) => (
            <div
              key={index}
              className="min-w-[340px] md:min-w-[420px] bg-white rounded-2xl shadow-xl p-4 transition-transform duration-300 hover:scale-105"
            >
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  background: "#fff",
                  border: 0,
                  borderRadius: "14px",
                  margin: "0 auto",
                  width: "100%",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;