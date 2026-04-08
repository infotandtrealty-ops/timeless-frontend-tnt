import { motion } from "framer-motion";
import aboutImg from "../assets/about-us.webp";

import { ChartTooltip } from "./ui/chart";

const AboutSection = () => {
  return (
    <section
      id="about-us"
      className="py-20 bg-[#FAF8F6] relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl md:text-5xl font-extrabold text-[#3B2F2F] mb-6 font-playfair tracking-wider"
        >
          Best Aesthetic Clinic in India
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center max-w-4xl mx-auto text-[#555555] mb-16 leading-relaxed font-lato"
        >
          Timeless Aesthetics seamlessly blends expert cosmetic treatments with
          top-tier professional education. As a clinic, it delivers advanced
          facial aesthetics, permanent makeup, and modern cosmetology, ensuring
          clients receive refined, high-quality care. Meanwhile, the academy
          empowers aspiring professionals through government-certified courses,
          hands-on training, and global accreditation and affiliations around
          the globe. Whether you're looking for transformative beauty treatments
          or a prestigious learning experience, Timeless Aesthetics stands as a
          hub of excellence in the industry.
        </motion.p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src={aboutImg}
              alt="Dr. Shikha Baghi"
              className="w-full max-w-md h-auto object-cover rounded-xl shadow-xl border-2 border-[#D4AF37] transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-[#D4AF37] text-xl md:text-xl font-semibold mb-2 tracking-wide uppercase inline-block font-playfair relative">
              About
              <span className="block w-16 h-1 bg-[#D4AF37] mt-2 rounded"></span>
            </h3>

            <h2 className="text-3xl md:text-4xl font-bold text-[#3B2F2F] mb-6 font-playfair">
              Timeless Aesthetics
            </h2>

            <p className="text-[#555555] mb-6 leading-relaxed font-lato">
              Timeless Aesthetics is a pioneer in Permanent Makeup, Cosmetology
              & Facial Aesthetics in India led by{" "}
              <span className="font-semibold">Dr. Shikha Baghi</span> (Founder
              and Managing Director). She is BDS, MDS (Endodontist), and Master
              Trainer of Permanent Makeup, Cosmetology and Facial Aesthetics.
              She is the first Diamond Trainer of the American Academy Of
              Micropigmentation (AAM).
            </p>

            <p className="text-[#555555] leading-relaxed font-lato">
              Timeless Aesthetics in its business development, sales, and
              marketing is led by{" "}
              <span className="font-semibold">Mr. Ashish Thapar</span> (Founder
              & Managing Director). He has a B.E. in Production Engineering and
              is the Founder and Managing Director of T and T Realty Services
              Pvt. Ltd.
            </p>

            {/* Button */}
            <div className="mt-8">
              <a
                href="/about"
                className="inline-block px-8 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-full font-medium hover:bg-[#D4AF37] hover:text-white transition duration-300 transform hover:scale-110 shadow-md"
              >
                Know More
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection ;
