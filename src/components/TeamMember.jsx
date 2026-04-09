import React, { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TeamMember = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Aastha Ratra",
      role: "Head Operations & Business Development",
      image: "/team-member/1.jpeg",
      shortDescription: "A self-driven individual who believes in giving her best in all endeavours.",
      fullDescription: "Aastha Ratra believes in giving her best in all endeavours. She loves being an independent working mom and believes learning has no age.",
    },
    {
      id: 2,
      name: "Dr. Anshul Threja",
      role: "Dentist & Facial Aesthetician",
      image: "/team-member/2.webp",
      shortDescription: "Skilled Dentist, Facial Aesthetician Cosmetologist, and Permanent Makeup trainer.",
      fullDescription: "Senior Trainer and Permanent Makeup Specialist with international accreditation from the American Academy of Micropigmentation.",
    },
    {
      id: 3,
      name: "Prabhneet Bhatnagar",
      role: "PMU Specialist & Trainer",
      image: "/team-member/3.webp",
      shortDescription: "Professional trainer and PMU specialist with international certification.",
      fullDescription: "Prabhneet has vast expertise in Cosmetology and PMU, certified by the American Academy of Micropigmentation.",
    },
    {
      id: 4,
      name: "Sania Sharma",
      role: "PMU Artist & Trainer",
      image: "/team-member/4.jpeg",
      shortDescription: "Professional PMU Artist holding an MBA and international fellowships.",
      fullDescription: "Sania holds an MBA from IMI Belgium and Fellowships from IAAT Sweden and the American Academy of Micropigmentation.",
    },
  ];

  // Infinite loop ke liye data ko duplicate kar rahe hain
  const duplicatedMembers = [...teamMembers, ...teamMembers];

  return (
    <section className="py-16 bg-[#FAF8F6] overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase text-[#3B2F2F] tracking-wide">
          Our Expert Team
        </h2>
        <span className="block w-20 h-1 bg-[#D4AF37] mx-auto mt-2 rounded"></span>
      </div>

      {/* Main Smooth Carousel Track */}
      <div className="flex overflow-hidden relative group">
        <motion.div
          className="flex gap-6"
          animate={{
            x: ["0%", "-50%"], // 0 se 50% tak move karega (kyunki humne data double kiya hai)
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25, // Speed adjust karne ke liye seconds badhao ya kam karo
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
          whileHover={{ transition: { duration: 50 } }} // Hover pe slow karne ke liye (Optional)
        >
          {duplicatedMembers.map((member, index) => (
            <div
              key={`${member.id}-${index}`}
              className="w-[280px] md:w-[320px] flex-shrink-0 bg-white rounded-xl shadow-md border border-gray-100 hover:border-[#D4AF37] transition-colors duration-300 cursor-pointer overflow-hidden"
              onClick={() => setSelectedMember(member)}
            >
              <div className="h-[300px] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-[#3B2F2F]">{member.name}</h3>
                <p className="text-[#D4AF37] text-xs font-semibold uppercase mb-3">{member.role}</p>
                <button className="text-xs font-bold border-b border-[#D4AF37] pb-1 text-[#3B2F2F] hover:text-[#D4AF37] transition-colors">
                  VIEW PROFILE
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal Section */}
      <AnimatePresence>
        {selectedMember && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-[999]"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl max-w-3xl w-full flex flex-col md:flex-row overflow-hidden relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 bg-white/50 rounded-full hover:bg-red-50 transition-colors z-10"
              >
                <X size={20} />
              </button>
              
              <div className="md:w-1/2 h-80 md:h-auto">
                <img src={selectedMember.image} className="w-full h-full object-cover" alt="" />
              </div>
              
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[#3B2F2F] mb-1">{selectedMember.name}</h3>
                <p className="text-[#D4AF37] font-semibold mb-4">{selectedMember.role}</p>
                <p className="text-gray-600 leading-relaxed">{selectedMember.fullDescription}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamMember;