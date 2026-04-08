import React, { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TeamMember = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  const teamMembers = [
    {
      id: 1,
      name: "Aastha Ratra",
      role: "Head Operations & Business Development",
      image: "/team-member/1.jpeg",
      shortDescription:
        "A self-driven individual who believes in giving her best in all endeavours, setting an example of leadership and continuous learning.",
      fullDescription:
        "Aastha Ratra, Head Operations and Business Development at Timeless Aesthetics, is a self-driven individual and believes in giving her best in all endeavours that she undertakes. She loves being an independent working mom who is ready to set an example for her children that a happy mom is a good mom. She truly believes in the fact that anyone who stops learning is old, whether at 20 or at 80. Learning has no age; you can learn at any age.",
    },
    {
      id: 2,
      name: "Dr. Anshul Threja",
      role: "Dentist & Facial Aesthetician",
      image: "/team-member/2.webp",
      shortDescription:
        "A Skilled Dentist (BDS), Facial Aesthetician Cosmetologist, and Permanent Makeup trainer with vast expertise and international accreditation.",
      fullDescription:
        "A Skilled Dentist (BDS), Facial Aesthetician Cosmetologist, and Permanent Makeup trainer at Timeless Aesthetics. She has vast expertise in the permanent makeup industry and is a Senior Trainer and Permanent Makeup Specialist with international accreditation. She attended Timeless Aesthetics for her Facial Aesthetics, Cosmetology, and Permanent Makeup education and certification. The American Academy of Micropigmentation awarded her a certificate as a permanent makeup artist. She is a self-driven individual who believes in giving her best in all endeavours.",
    },
    {
      id: 3,
      name: "Prabhneet Bhatnagar",
      role: "PMU Specialist & Trainer",
      image: "/team-member/3.webp",
      shortDescription:
        "A professional trainer and Permanent Makeup specialist with international certification from the American Academy of Micropigmentation.",
      fullDescription:
        "Prabhneet Bhatnagar is a professional trainer and a Permanent Makeup specialist at Timeless Aesthetics. She has vast expertise in the field. She received her training and certification in Cosmetology and Permanent Makeup from Timeless Aesthetics and the American Academy of Micropigmentation.",
    },
    {
      id: 4,
      name: "Sania Sharma",
      role: "PMU Artist & Trainer",
      image: "/team-member/4.jpeg",
      shortDescription:
        "Professional Permanent Makeup Artist and Trainer holding an MBA from IMI Belgium and Fellowships from IAAT Sweden.",
      fullDescription:
        "Sania Sharma is a professional Permanent Makeup Artist and Trainer at Timeless Aesthetics. An MBA from IMI Belgium, she pursued her Fellowship in Permanent Makeup and Cosmetology from IAAT Sweden and the American Academy of Micropigmentation.",
    },
  ];

  // We duplicate data for infinite loop illusion
  const carouselItems = [...teamMembers, ...teamMembers, ...teamMembers];

  // Auto-scroll Logic using Ref (Better for manual button control)
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;

    const scroll = () => {
      if (!isPaused) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 3) {
            // Reset to start silently to create infinite loop effect
            scrollContainer.scrollLeft = 0;
        } else {
            scrollContainer.scrollLeft += 3; // Adjust speed here (1 is normal)
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Button Handlers
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-[#FAF8F6] overflow-hidden relative group">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold uppercase text-[#3B2F2F] tracking-wide">
            Our Expert Team
          </h2>
          <span className="block w-20 h-1 bg-[#D4AF37] mx-auto mt-2 rounded"></span>
          <p className="text-[#555555] mt-4 max-w-2xl mx-auto">
            Meet our highly qualified professionals dedicated to providing
            exceptional aesthetic care.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div 
            className="relative w-full max-w-6xl mx-auto border-x border-transparent"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Left Arrow Button */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 border-2 border-[#D4AF37] text-[#D4AF37] p-3 rounded-full shadow-lg hover:bg-[#D4AF37] hover:text-white transition-all duration-300 hidden md:flex items-center justify-center transform -translate-x-1/2 hover:scale-110"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow Button */}
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 border-2 border-[#D4AF37] text-[#D4AF37] p-3 rounded-full shadow-lg hover:bg-[#D4AF37] hover:text-white transition-all duration-300 hidden md:flex items-center justify-center transform translate-x-1/2 hover:scale-110"
            aria-label="Scroll Right"
          >
            <ChevronRight size={24} />
          </button>

          {/* Moving Track */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden w-full scroll-smooth no-scrollbar py-4"
            style={{ whiteSpace: "nowrap" }}
          >
            {carouselItems.map((member, index) => (
              <div
                key={`${member.id}-${index}`}
                className="w-[260px] md:w-[300px] flex-shrink-0 bg-white rounded-xl shadow-lg border border-[#e0e0e0] hover:border-[#D4AF37] transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                {/* Image Section */}
                <div className="h-[280px] w-full overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role} at Timeless Aesthetics`}
                    width="400"
                    height="280"
                    loading="lazy"
                    className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content Section */}
                <div className="p-5 text-center whitespace-normal">
                  <h3 className="text-lg font-bold font-playfair text-[#3B2F2F]">
                    {member.name}
                  </h3>
                  <p className="text-[#D4AF37] font-medium text-xs uppercase tracking-wider mb-3">
                    {member.role}
                  </p>
                  <p className="text-[#555555] text-xs line-clamp-2 mb-4 leading-relaxed">
                    {member.shortDescription}
                  </p>
                  <button
                    className="inline-block px-5 py-2 border border-[#D4AF37] text-[#D4AF37] rounded-full text-xs font-semibold hover:bg-[#D4AF37] hover:text-white transition-colors duration-300"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-10 bg-white/80 p-1 rounded-full text-[#3B2F2F] hover:text-red-500 hover:bg-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-2/5 h-64 md:h-auto">
                <img
                  src={selectedMember.image}
                  alt={`${selectedMember.name} - ${selectedMember.role} at Timeless Aesthetics`}
                  width="320"
                  height="256"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-playfair font-bold text-[#3B2F2F] mb-1">
                  {selectedMember.name}
                </h3>
                <p className="text-[#D4AF37] font-medium text-lg mb-6">
                  {selectedMember.role}
                </p>

                <div className="space-y-4 text-[#555555] leading-relaxed">
                  <p>{selectedMember.fullDescription}</p>
                  <p>
                    With a commitment to excellence and a passion for aesthetics,{" "}
                    {selectedMember.name.split(" ")[0]} ensures that every client
                    receives personalized care tailored to their unique needs.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamMember;