import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "",
    image: "/services/Courses.jpg",
    link: "/websitecourses",
  },
  {
    id: 2,
    title: "",
    image: "/services/treatment.jpg",
    link: "/treatments",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-[#FAF8F6]">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-playfair font-extrabold text-[#3B2F2F] mb-14 tracking-wide uppercase"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-[#D4AF37]">Services</span>
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service) => (
            <motion.div
              key={service.id}
              onClick={() => navigate(service.link)}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl border-2 border-transparent hover:border-[#D4AF37] bg-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

              {/* Background Image */}
              <motion.img
                src={service.image}
                alt={`Timeless Aesthetics ${service.title}`}
                className="w-full h-auto md:h-72 object-cover object-top rounded-2xl transition-transform duration-700"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition duration-500 rounded-2xl"></div>

              {/* Title */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.h3
                  className="text-3xl font-playfair font-bold text-white drop-shadow-2xl tracking-wide transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                >
                  {service.title}
                </motion.h3>
              </div>

              {/* Gold Hover Underline */}
              <motion.div
                className="absolute bottom-4 left-0 w-0 h-1 bg-[#D4AF37] group-hover:w-16 transition-all duration-500 rounded"
              ></motion.div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;