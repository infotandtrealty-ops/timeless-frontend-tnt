import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Nav";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import BlogSection from "../components/BlogSection";
import WhyChooseUs from "../components/WhyChooseUs";
import { motion } from "framer-motion";

const Websitecourses = () => {
  const courses = [
    {
      name: "Permanent Makeup",
      image: "/images/goo.jpg",
      link: "/courses/permanent-makeup",
    },
    {
      name: "Cosmetology",
      image: "/images/mm.webp",
      link: "/courses/cosmetology",
    },
    {
      name: "Facial Aesthetics",
      image: "/images/faical.webp",
      link: "/courses/facial-aesthetics",
    },
    {
      name: "Fellowship",
      image: "/images/goo.jpg",
      link: "/courses/fellowship",
    },
    {
      name: "Laser Practise",
      image: "/images/mm.webp",
      link: "/courses/laser-practise",
    },
  ];

  return (
    <>
      {/* Header */}
      <Header />

      {/* Banner Section */}
      <div className="relative h-72 flex items-center justify-center">
        <img
          src="/images/our services/000.webp"
          alt="Timeless Academy Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-serif font-bold tracking-wide">
            Aesthetics Academy
          </h1>
          <p className="mt-2 text-sm opacity-90">Home / Aesthetics Academy</p>
        </div>
      </div>

      {/* Academy Intro */}
      <div className="container mx-auto px-6 py-20">

        {/* About Section */}
        <section className="bg-[#FAF8F6] py-20">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

            {/* Left Image */}
            <motion.img
              src="/images/goo.jpg"
              alt="About Course"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-xl shadow-xl border-2 border-[#D4AF37] hover:scale-105 transition-transform duration-300"
            />

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#3B2F2F] mb-4 uppercase tracking-wide">
                About the <span className="text-[#D4AF37]">Course</span>
              </h2>
              <span className="block w-16 h-1 bg-[#D4AF37] mt-2 mb-6 rounded"></span>
              <p className="text-lg text-[#555555] font-lato leading-relaxed mb-6">
                Learn industry-standard techniques in micropigmentation and brow, lip, and scalp artistry. 
                Our expert-designed curriculum ensures hands-on training and professional certification 
                for a successful career in permanent makeup.
              </p>
              <Link
                to="/allcourses"
                className="inline-block px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full font-medium font-lato tracking-wide hover:bg-[#D4AF37] hover:text-white hover:scale-105 transition-all duration-300"
              >
                Enroll Now
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Course Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-16">
          {courses.map((course, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image with overlay */}
              <div className="h-64 w-full relative">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>

              {/* Content - Glass effect */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-lg group-hover:bg-white/90 transition">
                  <h4 className="text-lg font-serif font-bold text-gray-900 mb-3 group-hover:text-yellow-700 transition-colors">
                    {course.name}
                  </h4>
                  <Link
                    to={course.link}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white px-5 py-2 rounded-full text-sm font-medium tracking-wide shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Learn More
                    <span className="transform group-hover:translate-x-1 transition">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Extra Sections */}
      <WhyChooseUs />
      <BlogSection />
      <FAQ />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Websitecourses;
