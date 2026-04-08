import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Nav";
import Footer from "../components/Footer";

const courses = [
  {
    title: "Fellowship in Permanent Makeup and Cosmetology",
    link: "/courses/fellowship/permanent-cosmetology",
    description: "An intensive clinical program blending micropigmentation artistry with advanced cosmetology protocols for complete aesthetic mastery.",
    image: "/images/courses/Fellowship pmu n cos.jpeg",
  },
  {
    title: "Fellowship in Facial Aesthetics, Permanent Makeup & Cosmetology",
    link: "/courses/fellowship/facial-permanent-cosmetology",
    description: "A prestigious integrated fellowship covering advanced injectables, semi-permanent makeup, and clinical skin care treatments.",
    image: "/images/courses/Lipolytic injection.jpeg"
    },
  {
    title: "Fellowship in Facial Aesthetics",
    link: "/courses/fellowship/facial-aesthetics",
    description: "Specialized training focused on non-surgical facial rejuvenation, including advanced filler mapping and toxin injection protocols.",
    image: "/images/courses/Fellowship in Facial aesthetics.jpeg"
  
  },
  {
    title: "Fellowship in PMU, Cosmetology, Medical Micropigmentation & Plasma Pen",
    link: "/courses/fellowship/permanent-micropigmentation",
    description: "Master high-end medical-grade procedures, including areola reconstruction, vitiligo camouflage, and fibroblast skin tightening.",
    image: "/images/courses/Fellowship in Facial aesthetics.jpeg"
  },
  {
    title: "Full-Spectrum Fellowship: Facial Aesthetics, PMU, Cosmetology & Plasma Pen",
    link: "/courses/fellowship/facial-permanent-micropigmentation",
    description: "The ultimate cross-disciplinary clinical residency providing full immersion into advanced aesthetic medicine and corrective artistry.",
    image: "/images/courses/Fellowship in Facial aesthetics.jpeg"
  },
];

function FellowshipCoursesPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="relative h-80 flex items-center justify-center">
        <img
          src="/images/courses-banner.jpeg"
          alt="Advanced Fellowship Programs"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center text-white z-10 px-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-playfair font-bold tracking-wide uppercase"
          >
            Clinical <span className="text-[#D4AF37]">Fellowships</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-sm md:text-lg opacity-90 font-lato max-w-2xl mx-auto"
          >
            Elite mentorship programs designed to transition professionals into world-class aesthetic practitioners.
          </motion.p>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-[#FAF8F6] py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/images/faical.webp"
              alt="Elite Fellowship Mentorship"
              className="rounded-xl shadow-2xl border-b-8 border-r-8 border-[#D4AF37] relative z-10"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#3B2F2F] mb-4 uppercase tracking-wide">
              The Path to <span className="text-[#D4AF37]">Mastery</span>
            </h2>
            <span className="block w-20 h-1.5 bg-[#D4AF37] mt-2 mb-8 rounded"></span>
            <p className="text-lg text-[#555555] font-lato leading-relaxed mb-6">
              Our Fellowship programs are the gold standard in aesthetic education. Unlike standard courses, these programs provide **extended clinical immersion** and **one-on-one mentorship** with industry pioneers.
            </p>
            <p className="text-lg text-[#555555] font-lato leading-relaxed mb-8">
              We bridge the gap between theoretical knowledge and professional excellence, ensuring our fellows master multi-disciplinary techniques—from **Facial Aesthetics** to **Medical Micropigmentation**—on live cases.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-[#3B2F2F] text-white rounded-full font-bold font-lato tracking-widest hover:bg-[#D4AF37] hover:scale-105 transition-all duration-300 shadow-xl"
            >
              APPLY FOR FELLOWSHIP
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-playfair font-bold text-[#3B2F2F] uppercase"
          >
            Available <span className="text-[#D4AF37]">Specializations</span>
          </motion.h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
            >
              {/* Course Image */}
              <div className="h-60 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-playfair font-bold text-[#3B2F2F] mb-4 leading-snug group-hover:text-[#D4AF37] transition-colors">
                  {course.title}
                </h3>
                <p className="text-[#666666] font-lato text-sm mb-8 leading-relaxed flex-grow">
                  {course.description}
                </p>
                <Link
                  to={course.link}
                  className="inline-block px-6 py-2.5 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full text-xs font-bold font-lato tracking-widest text-center hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
                >
                  VIEW FELLOWSHIP DETAILS
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default FellowshipCoursesPage;