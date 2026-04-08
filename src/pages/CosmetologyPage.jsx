import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Nav";
import Footer from "../components/Footer";

// Professional course data with refined descriptions
const courses = [
  {
    title: "Certificate in Professional Cosmetology",
    link: "/courses/cosmetology/master-chemical-peels",
    description:
      "A fast-track program focusing on skin anatomy, advanced facial treatments, and the precision application of clinical chemical peels for various skin concerns.",
    image: "/Cosmetology/Banner_Cover/1.png",
  },
  {
    title: "Diploma in Cosmetology",
    link: "/courses/cosmetology/diploma-advanced",
    description:
      "An extensive clinical program covering medical-grade skin care, electrical aesthetic treatments, and advanced hair and scalp therapy protocols.",
      image: "/Cosmetology/Banner_Cover/2.png",
    },
];

const CosmetologyPage = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="relative h-80 flex items-center justify-center">
        <img
          src="/Cosmetology/Banner_Cover/Top_Main Banner.png"
          alt="Clinical Cosmetology Banner"
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
            Clinical <span className="text-[#D4AF37]">Cosmetology</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-3 text-sm md:text-lg opacity-90 font-lato max-w-2xl mx-auto"
          >
            Advance your career with science-based aesthetic training and hands-on clinical expertise.
          </motion.p>
        </div>
      </div>

      {/* About Section - Specific to Cosmetology */}
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
              src="/Cosmetology/Banner_Cover/Middle_Main Banner.png"
              alt="Cosmetology Practice"
              className="rounded-xl shadow-2xl border-b-4 border-r-4 border-[#D4AF37] hover:scale-[1.02] transition-transform duration-300"
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
              The Art & <span className="text-[#D4AF37]">Science of Beauty</span>
            </h2>
            <span className="block w-16 h-1 bg-[#D4AF37] mt-2 mb-6 rounded"></span>
            <p className="text-lg text-[#555555] font-lato leading-relaxed mb-6">
              Cosmetology is more than just surface-level beauty—it is a specialized field of clinical science. Our courses are designed to give you a deep understanding of skin biology, chemical formulations, and the latest aesthetic technologies.
            </p>
            <p className="text-md text-[#555555] font-lato leading-relaxed mb-8">
              Whether you are looking for a focused certificate in peels or a comprehensive diploma in advanced care, our curriculum ensures you gain the <strong>hands-on confidence</strong> required to excel in modern clinics and med-spas.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-[#3B2F2F] text-white rounded-full font-medium font-lato tracking-wide hover:bg-[#D4AF37] hover:shadow-lg transition-all duration-300"
            >
              Enroll Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-playfair font-bold text-center text-[#3B2F2F] uppercase"
          >
            Available <span className="text-[#D4AF37]">Programs</span>
          </motion.h2>
          <div className="w-24 h-1 bg-[#D4AF37] mt-4"></div>
        </div>

        {/* Updated grid to center the two cards nicely on large screens */}
        <div className="flex flex-wrap justify-center gap-10">
          {courses.map((course) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group max-w-sm w-full"
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
              <div className="p-8">
                <h3 className="text-2xl font-playfair font-semibold text-[#3B2F2F] mb-4">
                  {course.title}
                </h3>
                <p className="text-[#666666] font-lato text-sm mb-6 leading-relaxed">
                  {course.description}
                </p>
                <Link
                  to={course.link}
                  className="inline-flex items-center text-[#D4AF37] font-bold text-sm tracking-widest uppercase group-hover:gap-3 transition-all duration-300"
                >
                  Learn More <span className="ml-2">→</span>
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

export default CosmetologyPage;