import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Nav";
import Footer from "../components/Footer";

// 👉 Services data
const courses = [
  { title: "Veneers Dentures", link: "/services/dentistry/veneers-dentures", image: "/denist/veneers.jpg" },
  { title: "Smile Designing", link: "/services/dentistry/smile-designing", image: "/denist/smile-designing.webp" },
  { title: "Invisalign", link: "/services/dentistry/invisalign", image: "/denist/Invisalign.jpg" },
  { title: "Extractions", link: "/services/dentistry/extractions", image: "/denist/Extractions.jpg" },
  { title: "Gum Surgeries", link: "/services/dentistry/gum-surgeries", image: "/denist/gum-surgeries.jpg" },
  { title: "Orthodontics", link: "/services/dentistry/orthodontics", image: "/denist/Orthodontics.jpg" },
  { title: "Teeth Whitening", link: "/services/dentistry/teeth-whitening", image: "/denist/teet-whetening.jpg" },
  { title: "Dental Implants", link: "/services/dentistry/dental-implants", image: "/denist/dental-implants.jpg" },
  { title: "Crown & Bridges", link: "/services/dentistry/crown-bridges", image: "/denist/Crowns and Bridges.jpg" },
  { title: "Gum Depigmentation", link: "/services/dentistry/gum-depigmentation", image: "/denist/veneers.jpg" },
  { title: "Root Canal Treatment", link: "/services/dentistry/root-canal", image: "/denist/root-canal.jpg" },
  { title: "Tooth Colored Fillings", link: "/services/dentistry/tooth-colored-fillings", image: "/denist/Tooth-Colored Fillings.webp" },
  { title: "Oral Cancer Screening", link: "/services/dentistry/oral-cancer", image: "/denist/Oral Cancer Screening.webp" },
];

const Dentistry = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="relative h-72 flex items-center justify-center">
        <img
          src="/images/cc.png"
          alt="Dentistry Services Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-semibold tracking-wide uppercase"
          >
            Dentistry Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-2 text-sm opacity-90"
          >
            Home / Services / Dentistry
          </motion.p>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-[#FAF8F6] py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <motion.img
            src="/images/faical.webp"
            alt="Dentistry Services"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-xl shadow-xl border border-gray-200 hover:scale-105 transition-transform duration-300"
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
              About Dentistry
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              We provide advanced dental care services including cosmetic dentistry, 
              orthodontics, dental implants, and oral health treatments. Our goal is 
              to ensure healthy, confident smiles using modern technology and expert care.
            </p>

            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Enroll Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-12"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300 group"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-48 w-full object-cover group-hover:scale-105 transition duration-300"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {course.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  Professional dental care service for better oral health and confident smile.
                </p>

                <Link
                  to={course.link}
                  className="text-sm font-medium text-black hover:underline"
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
};

export default Dentistry;