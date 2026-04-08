import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Nav";
import Footer from "../components/Footer";

const courses = [
  { 
    title: "Masters in Aesthetics Medicine", 
    link: "/courses/facial-aesthetics/medical", 
    description: "An advanced clinical program integrating medical pharmacology with the latest facial rejuvenation and injectable technologies.", 
    image: "/images/courses/1.jpeg" 
  },
  { 
    title: "Masters in Facial Aesthetics", 
    link: "/courses/facial-aesthetics/masters", 
    description: "Master the art of full-face restoration, focusing on volume replacement, wrinkle relaxation, and aesthetic symmetry.", 
    image: "/images/courses/2.jpeg" 
  },
  { 
    title: "Master Class In Lipolytic Injections", 
    link: "/courses/facial-aesthetics/master-lipolytic", 
    description: "Expert training in non-surgical fat dissolution techniques for submental and body contouring with clinical safety standards.", 
    image: "/images/courses/3.jpeg" 
  },
  { 
    title: "Master Class in Nose correction", 
    link: "/courses/facial-aesthetics/master-nose", 
    description: "Learn high-precision liquid rhinoplasty techniques to correct dorsal humps and lift nasal tips using advanced fillers.", 
    image: "/images/courses/44.png" 
  },
  { 
    title: "Master Class In Acne Scar Treatment", 
    link: "/courses/facial-aesthetics/master-acne", 
    description: "Comprehensive management of post-acne scarring using a multi-modality approach including subcision and resurfacing.", 
    image: "/images/courses/5.png" 
  },
  { 
    title: "Masters Class in Plasma Pen", 
    link: "/courses/facial-aesthetics/master-plasma", 
    description: "Specialized training in fibroblast plasma technology for non-invasive skin tightening and eyelid rejuvenation.", 
    image: "/images/courses/Plasma pen.jpeg" 
  },
  { 
    title: "Master class in Under eye rejuvenation", 
    link: "/courses/facial-aesthetics/master-undereye", 
    description: "Address dark circles, tear troughs, and periorbital aging with advanced injectable and skin quality protocols.", 
    image: "/images/courses/Masterclass in undereye rejuvenation.jpeg" 
  },
  { 
    title: "Master class in Lip Fillers", 
    link: "/courses/facial-aesthetics/master-fillers", 
    description: "Focus on the 'Golden Ratio' and advanced injection mapping to achieve natural volume and defined lip contours.", 
    image: "/images/courses/Masterclass in lip fillers.jpeg" 
  },
  { 
    title: "PG Diploma in Facial Aesthetics", 
    link: "/courses/facial-aesthetics/pg-diploma", 
    description: "A deep-dive diploma program covering the complete spectrum of non-surgical facial aesthetic medicine.", 
    image: "/images/courses/Fellowship in Facial aesthetics.jpeg" 
  },
  { 
    title: "Certificate Course in Lipolytic Injections", 
    link: "/courses/facial-aesthetics/cert-lipolytic", 
    description: "Foundational certification for medical practitioners entering the field of non-surgical fat reduction therapy.", 
    image: "/images/courses/Lipolytic injection.jpeg" 
  },
];

function FacialAestheticsPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="relative h-72 flex items-center justify-center">
        <img
          src="/images/cc.png"
          alt="Facial Aesthetics Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white z-10 px-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-playfair font-bold tracking-wide uppercase"
          >
            Facial Aesthetics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-2 text-sm opacity-90 font-lato"
          >
            Home / Courses / Facial Aesthetics
          </motion.p>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-[#FAF8F6] py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.img
            src="/images/faical.webp"
            alt="About Course"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-xl shadow-xl border-2 border-[#D4AF37] hover:scale-105 transition-transform duration-300 w-full"
          />

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#3B2F2F] mb-4 uppercase tracking-wide">
              Aesthetic <span className="text-[#D4AF37]">Excellence</span>
            </h2>
            <span className="block w-16 h-1 bg-[#D4AF37] mt-2 mb-6 rounded"></span>
            <p className="text-lg text-[#555555] font-lato leading-relaxed mb-6">
              Our Facial Aesthetics curriculum is designed for medical professionals looking to master the art of non-surgical rejuvenation. We focus on a combination of deep anatomical knowledge and refined artistic vision.
            </p>
            <p className="text-lg text-[#555555] font-lato leading-relaxed mb-6">
              From mastering the complex <strong>Golden Ratio</strong> in lip augmentation to safely performing liquid rhinoplasty, our hands-on modules ensure clinical precision and world-class patient outcomes.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full font-medium font-lato tracking-wide hover:bg-[#D4AF37] hover:text-white hover:scale-105 transition-all duration-300 shadow-md"
            >
              Enroll Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-playfair font-bold text-center text-[#3B2F2F] mb-12 uppercase"
        >
          Specialized <span className="text-[#D4AF37]">Curriculum</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-playfair font-semibold text-[#3B2F2F] mb-3">
                  {course.title}
                </h3>
                <p className="text-[#555555] font-lato text-sm mb-6 flex-grow">
                  {course.description}
                </p>
                <Link
                  to={course.link}
                  className="inline-block px-5 py-2 mt-auto border-2 border-[#D4AF37] text-[#D4AF37] rounded-full text-sm font-medium font-lato text-center hover:bg-[#D4AF37] hover:text-white hover:scale-105 transition-all duration-300"
                >
                  Learn More →
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

export default FacialAestheticsPage;