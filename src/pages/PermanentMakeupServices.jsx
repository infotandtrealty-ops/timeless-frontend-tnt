import Header from "../components/Nav";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ✅ Services data with title, slug, description, image
const services = [
  {
    slug: "microblading",
    title: "Microblading",
    description: "Enhance eyebrows with fine, natural-looking strokes using microblading technique.",
    image: "/comostolgy/permant/Microblading.webp",
    },
  {
    slug: "ombre-brows",
    title: "Ombre Brows",
    description: "Get soft, shaded brows with a gradient effect that lasts longer.",
    image: "/comostolgy/permant/Ombre-Brows.jpeg",
  },
  {
    slug: "powder-brows",
    title: "Powder Brows",
    description: "Achieve bold, powdered brows with long-lasting results.",
    image: "/comostolgy/permant/Microblading.webp",
  },
  {
    slug: "combination-brows",
    title: "Combination Brows",
    description: "A mix of microblading and shading for the perfect eyebrow look.",
    image: "/comostolgy/permant/Combination-Brows.webp",
  },
  {
    slug: "lip-color",
    title: "Permanent Lip Color",
    description: "Add vibrant, long-lasting tint to lips with permanent makeup.",
    image: "/comostolgy/permant/Permanent Lip Color.webp",
  },
  {
    slug: "beauty-spot",
    title: "Permanent Beauty Spot",
    description: "Enhance your beauty naturally with custom-designed permanent beauty spots.",
    image: "/comostolgy/permant/Microblading.webp",
  },
  {
    slug: "lash-lift",
    title: "Eye Lash Lift",
    description: "Give your lashes a natural curl and lifted appearance without extensions.",
    image: "/comostolgy/permant/Eye Lash Lift.webp",
  },
  {
    slug: "eyebrows-lamination",
    title: "Eyebrows Lamination",
    description: "Get fuller, defined, and perfectly styled brows with lamination.",
    image: "/comostolgy/permant/Eyebrows-Lamination.webp",
  },
  {
    slug: "scalp-micropigmentation",
    title: "Scalp Micro Pigmentation",
    description: "Restore natural hair follicle appearance with advanced scalp micropigmentation.",
    image: "/comostolgy/permant/Scalp-Micropigmentation.webp",
  },
  {
    slug: "stretch-mark-camouflage",
    title: "Stretch Mark Camouflage",
    description: "Blend and conceal stretch marks using expert camouflage techniques.",
    image: "/comostolgy/permant/Stretch Mark Camouflage.webp",
  },
  {
    slug: "vitiligo-camouflage",
    title: "Vitiligo Camouflage",
    description: "Restore natural skin tone appearance with permanent camouflage techniques.",
    image: "/comostolgy/permant/vitiligo1.webp",
  },
];

const PermanentMakeupServices = () => {
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
                  to={`/services/permanent-makeup/${service.slug}`}
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

export default PermanentMakeupServices;
