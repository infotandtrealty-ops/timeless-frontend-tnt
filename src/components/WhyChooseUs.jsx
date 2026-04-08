import { motion } from "framer-motion";
import TaClinic from "../assets/Ta-clinic.jpg";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-[#FAF8F6]">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold uppercase text-[#3B2F2F] mb-6 tracking-wide">
            Why Timeless Aesthetics is the Best <br /> Aesthetic Clinic in India?
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[#555555] mb-8 leading-relaxed font-lato"
          >
            Timeless Aesthetics aspires to become a global leader in aesthetics. 
            With our clinics and academies opening all across India, we're taking a 
            significant step in the right direction. At Timeless Aesthetics, we are not 
            just an Aesthetic clinic; we are a journey towards discovering your timeless beauty. 
            Here's why you should choose us:
          </motion.p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-yellow-50 p-6 rounded-xl shadow-lg text-center border-t-4 border-[#D4AF37]"
            >
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-[#3B2F2F]">5k+</h3>
              <p className="text-[#555555] mt-2 font-lato">No. of Graduates</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-green-50 p-6 rounded-xl shadow-lg text-center border-t-4 border-[#D4AF37]"
            >
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-[#3B2F2F]">11+</h3>
              <p className="text-[#555555] mt-2 font-lato">Years of Experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-red-50 p-6 rounded-xl shadow-lg text-center border-t-4 border-[#D4AF37]"
            >
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-[#3B2F2F]">20k+</h3>
              <p className="text-[#555555] mt-2 font-lato">No. of Treatments Conducted</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={TaClinic}
            alt="Timeless Aesthetics Clinic"
            className="rounded-xl shadow-xl w-full max-w-2xl object-cover border-4 border-[#D4AF37] transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs ;
