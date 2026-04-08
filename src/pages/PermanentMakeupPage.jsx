import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Nav";
import Footer from "../components/Footer";

import FeaturedClients from "../components/FeaturedClients";
import WhyChooseUs from "../components/WhyChooseUs";
import BeforeAfterResults from "../components/BeforeAfterResults";
import FAQ from "../components/FAQ";
import BlogSection from "../components/BlogSection";

const courses = [
  {
    title: "Master's in Permanent Makeup",
    link: "/courses/permanent-makeup/masters-eyebrows",
    description:
      "An advanced program focusing on 6D Microblading, Ombré Shading, and Powder Brows for a flawless finish.",
    image: "/Permanent Makeup/Banner_Cover/1.png",
  },
  {
    title: "PG Diploma in Permanent Makeup",
    link: "/courses/permanent-makeup/pg-diploma",
    description:
      "A comprehensive clinical diploma covering Brows, Lips, Eyeliner, and Color Theory for aspiring professionals.",
      image: "/Permanent Makeup/Banner_Cover/2.png",
    },
  {
    title: "Masterclass in Scalp Micropigmentation",
    link: "/courses/permanent-makeup/master-scalp",
    description:
      "Learn the art of non-surgical hair restoration, creating the illusion of fuller hair follicles.",
      image: "/Permanent Makeup/Banner_Cover/3.png",
    },
  {
    title: "Medical Micropigmentation",
    link: "/courses/permanent-makeup/Medical-Micropigmentation",
    description:
      "Specialized training in Areola reconstruction, Vitiligo camouflage, and Scar revision techniques.",
      image: "/Permanent Makeup/Banner_Cover/4.png",
    },
  {
    title: "Lash Lift & Brow Lamination",
    link: "/courses/permanent-makeup/cert-skin-tech",
    description:
      "Master the trending semi-permanent treatments to enhance natural lashes and brow symmetry.",
      image: "/Permanent Makeup/Banner_Cover/5.png",
    },
  {
    title: "Lip Blush & Neutralization",
    link: "/courses/permanent-makeup/Medical-micropigmentation",
    description:
      "Techniques for defining lip contours and neutralizing dark pigments for a natural tint.",
      image: "/Permanent Makeup/Banner_Cover/6.png",
    },
];

const PermanentMakeupPage = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="relative h-[450px] flex items-center justify-center">
        <img
          src="/Permanent Makeup/Banner_Cover/Top_Main Banner.png"
          alt="Permanent Makeup Training"
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
            Master the Art of <br /> <span className="text-[#D4AF37]">Permanent Makeup</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-lg font-lato max-w-2xl mx-auto"
          >
            Empowering aspiring artists with clinical precision and creative excellence in Micropigmentation.
          </motion.p>
        </div>
      </div>

      {/* About Section - Specific to PMU */}
      <section className="bg-[#FAF8F6] py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/Permanent Makeup/Banner_Cover/Middle_Main Banner.png"
              alt="PMU Training Session"
              className="rounded-xl shadow-2xl border-b-8 border-r-8 border-[#D4AF37]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#3B2F2F] mb-4 uppercase">
              Become a Certified <span className="text-[#D4AF37]">PMU Expert</span>
            </h2>
            <p className="text-lg text-[#555555] font-lato leading-relaxed mb-6">
              Permanent Makeup (PMU) is one of the fastest-growing sectors in the beauty industry. Our academy provides an intensive curriculum that blends <strong>medical safety standards</strong> with <strong>artistic precision</strong>.
            </p>
            <ul className="space-y-3 mb-8 text-[#444] font-lato">
              <li className="flex items-center gap-2">
                <span className="text-[#D4AF37]">✔</span> Hands-on training on live models
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#D4AF37]">✔</span> Mastery in Pigment Science & Color Theory
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#D4AF37]">✔</span> Advanced hygiene & sterilization protocols
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#D4AF37]">✔</span> Business setup & marketing guidance
              </li>
            </ul>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-[#3B2F2F] text-white rounded-full font-medium hover:bg-[#D4AF37] transition-all duration-300 shadow-lg"
            >
              Start Your Career Today
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
            Our PMU <span className="text-[#D4AF37]">Specializations</span>
          </motion.h2>
          <p className="text-[#777] mt-2">Choose your path to professional certification</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white border border-gray-100 shadow-sm rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="overflow-hidden h-56">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-[#3B2F2F] mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {course.title}
                </h3>
                <p className="text-[#666666] font-lato text-sm mb-6 leading-relaxed">
                  {course.description}
                </p>
                <Link
                  to={course.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#D4AF37] uppercase tracking-widest hover:translate-x-2 transition-transform duration-300"
                >
                  View Curriculum <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Components */}
      <WhyChooseUs />
      <BeforeAfterResults />
      
      <div className="bg-[#3B2F2F] py-16">
         <FeaturedClients />
      </div>

      <FAQ />
      <BlogSection />

      <Footer />
    </>
  );
};

export default PermanentMakeupPage;