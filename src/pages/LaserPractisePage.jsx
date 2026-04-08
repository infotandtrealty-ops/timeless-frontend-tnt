import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Nav";
import Footer from "../components/Footer";

const courses = [
  {
    title: "Laser Hair Reduction",
    link: "/courses/laser-practice/laser-practice-page1",
    description:
      "A comprehensive module covering laser-tissue interaction, melanin absorption, safety protocols (ANSI standards), and hands-on mastery of Diode, Nd:YAG, and IPL technologies.",
      image: "/laser-practise/laser.png",
    },
  {
    title: "HIFU (Skin Tightening)",
    link: "/courses/laser-practice/laser-practice-page2",
    description:
      "Master High-Intensity Focused Ultrasound technology for non-invasive SMAS lifting. Learn precise depth targeting for facial rejuvenation and body contouring clinical outcomes.",
    image: "/laser-practise/HIFU.png",
  },
];

const LaserPractisePage = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="relative h-72 flex items-center justify-center">
        <img
              src="/laser-practise/HIFU.png"
              alt="Laser Practice Courses Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center text-white z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-playfair font-bold tracking-wide uppercase"
          >
            Laser <span className="text-[#D4AF37]">Practice</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-2 text-sm opacity-90 font-lato"
          >
            Home / Courses / Laser Practice
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
              src="/laser-practise/laser.png"
              alt="Advanced Laser Training"
              className="rounded-xl shadow-xl border-2 border-[#D4AF37] hover:scale-105 transition-transform duration-300 relative z-10"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#D4AF37] rounded-xl z-0"></div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#3B2F2F] mb-4 uppercase tracking-wide">
              Advanced <span className="text-[#D4AF37]">Laser Science</span>
            </h2>

            <span className="block w-16 h-1 bg-[#D4AF37] mt-2 mb-6 rounded"></span>

            <p className="text-lg text-[#555555] font-lato leading-relaxed mb-6">
              In the rapidly evolving field of medical aesthetics, mastering laser technology is essential. Our <strong>Laser Practice Programs</strong> bridge the gap between theoretical physics and clinical excellence. 
            </p>
            
            <p className="text-lg text-[#555555] font-lato leading-relaxed mb-6">
              Students gain hands-on experience in <strong>energy-based devices</strong>, focusing on the Fitzpatrick scale, thermal relaxation times, and wavelength selection to ensure maximum efficacy with zero downtime for patients.
            </p>

            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-[#3B2F2F] text-white rounded-full font-medium font-lato tracking-wide hover:bg-[#D4AF37] transition-all duration-300 shadow-lg"
            >
              Enroll in Laser Training
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-playfair font-bold text-[#3B2F2F] uppercase"
          >
            Clinical <span className="text-[#D4AF37]">Modules</span>
          </motion.h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {courses.map((course) => (
            <motion.div
              key={course.title}
              whileHover={{ y: -10 }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 group max-w-sm"
            >
              {/* Course Image */}
              <div className="overflow-hidden h-60">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-playfair font-bold text-[#3B2F2F] mb-4">
                  {course.title}
                </h3>

                <p className="text-[#666666] font-lato text-sm mb-6 leading-relaxed">
                  {course.description}
                </p>

                <Link
                  to={course.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#D4AF37] uppercase tracking-widest hover:gap-4 transition-all duration-300"
                >
                  Explore Course <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default LaserPractisePage;