import React, { useEffect, useState } from "react";
import Card from "./Card.jsx";
import { useSelector } from "react-redux";
import { SiViaplay } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Cardspage() {
  const [popularCourses, setPopularCourses] = useState([]);
  const { courseData } = useSelector((state) => state.course);
  const navigate = useNavigate();

  useEffect(() => {
    setPopularCourses(courseData.slice(0, 6));
  }, [courseData]);

  return (
    <section className="relative py-20 bg-[#FAF8F6] flex flex-col items-center justify-center overflow-hidden">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-[#3B2F2F] text-center mb-6 font-playfair tracking-wide"
      >
        Our Popular Courses
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="lg:w-[50%] md:w-[70%] w-[90%] text-center text-[#555555] text-[16px] leading-relaxed font-lato mb-16"
      >
        Explore top-rated courses designed to boost your skills, enhance your
        career, and unlock new opportunities in tech, AI, business, and beyond.
      </motion.p>

      {/* Courses Grid */}
      <div className="w-full flex flex-wrap items-center justify-center gap-10 px-6 md:px-10 lg:px-16">
        {popularCourses.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card
              id={item._id}
              thumbnail={item.thumbnail}
              title={item.title}
              price={item.price}
              category={item.category}
              reviews={item.reviews}
            />
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        onClick={() => navigate("/allcourses")}
        className="mt-12 flex items-center gap-2 px-8 py-3 rounded-full border border-[#D4AF37] text-[#D4AF37] font-medium text-lg hover:bg-[#D4AF37] hover:text-white transition duration-300 transform hover:scale-110 shadow-md"
      >
        View All Courses{" "}
        <SiViaplay className="w-[24px] h-[24px] fill-[#D4AF37] hover:fill-white transition" />
      </motion.button>

      {/* Decorative Blur Circle */}
      <div className="absolute w-[300px] h-[300px] bg-[#D4AF37]/20 rounded-full blur-3xl top-10 left-10 -z-10"></div>
      <div className="absolute w-[250px] h-[250px] bg-[#3B2F2F]/10 rounded-full blur-3xl bottom-10 right-10 -z-10"></div>
    </section>
  );
}

export default Cardspage;
