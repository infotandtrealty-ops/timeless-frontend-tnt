import Header from "../components/Nav";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Cosmetology Services Data
const services = [
  {
    slug: "vampire-facial",
    title: "Vampire Facial",
    description: "Rejuvenate your skin naturally with PRP-based vampire facial therapy.",
    image: "/comostolgy/botox-treatment.webp",
    link: "/services/cosmetology/vampire-facial",
  },
  {
    slug: "mesotherapy",
    title: "Mesotherapy",
    description: "Revitalize skin and hair using nutrient-rich mesotherapy techniques.",
    image: "/comostolgy/mesotherapy.webp",
    link: "/services/cosmetology/mesotherapy",
  },
  {
    slug: "prp-hair",
    title: "PRP for Hair",
    description: "Boost hair growth and thickness with advanced PRP hair treatments.",
    image: "/comostolgy/prp-hair.webp",
    link: "/services/cosmetology/prp-hair",
  },
  {
    slug: "hydrafacial",
    title: "HydraFacial",
    description: "Deep cleanse, hydrate, and refresh your skin with HydraFacial therapy.",
    image: "/comostolgy/hydra-facial.webp",
    link: "/services/cosmetology/hydrafacial",
  },
  {
    slug: "dermaplaning",
    title: "Dermaplaning",
    description: "Exfoliate dead skin and peach fuzz for a smooth, glowing complexion.",
    image: "/comostolgy/dermaplaning.webp",
    link: "/services/cosmetology/dermaplaning",
  },
  {
    slug: "medicated-facial",
    title: "Medicated Facial",
    description: "Customized facials designed to treat acne, pigmentation, and dull skin.",
    image: "/comostolgy/medicated-facial.webp",
    link: "/services/cosmetology/medicated-facial",
  },
  {
    slug: "laser-hair-reduction",
    title: "Laser Hair Reduction",
    description: "Safe and effective laser hair removal for smooth, hair-free skin.",
    image: "/comostolgy/laser-hair-reduction.webp",
    link: "/services/cosmetology/laser-hair-reduction",
  },
  {
    slug: "wellness-drips",
    title: "Wellness Drips",
    description: "Boost energy, immunity, and hydration with IV wellness drips.",
    image: "/comostolgy/wellness-drips.webp",
    link: "/services/cosmetology/wellness-drips",
  },
];

const ServiceCategoryPagelanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <div
        className="relative bg-cover bg-center h-48 md:h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/our services/1.webp')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-3xl md:text-4xl font-bold">Permanent Makeup</h1>
          <p className="mt-2 text-sm">Home / Permanent Makeup</p>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-[#FAF8F6] py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.img
            src="/images/goo.jpg"
            alt="About Treatments"
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
              About the <span className="text-[#D4AF37]">Treatments</span>
            </h2>
            <span className="block w-16 h-1 bg-[#D4AF37] mt-2 mb-6 rounded"></span>
            <p className="text-lg text-[#555555] font-lato leading-relaxed mb-6">
              Learn industry-standard techniques in micropigmentation and brow,
              lip, and scalp artistry. Our expert-designed services deliver
              confidence and beauty with long-lasting results.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full font-medium font-lato tracking-wide hover:bg-[#D4AF37] hover:text-white hover:scale-105 transition-all duration-300"
            >
              Book Appointment
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
          className="text-4xl font-playfair font-bold text-center text-[#3B2F2F] mb-12 uppercase"
        >
          Our <span className="text-[#D4AF37]">Services</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Service Image */}
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-[#3B2F2F] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#555555] font-lato text-sm mb-4">
                  {service.description}
                </p>
                <Link
                  to={`/services/cosmetology/${service.slug}`}
                  className="inline-block px-5 py-2 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full text-sm font-medium font-lato hover:bg-[#D4AF37] hover:text-white hover:scale-105 transition-all duration-300"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceCategoryPagelanding;
