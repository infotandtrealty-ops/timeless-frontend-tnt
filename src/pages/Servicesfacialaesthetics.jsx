import Header from "../components/Nav";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


// Services Data
const services = [
  {
    slug: "botox",
    title: "Botox",
    description: "Reduce fine lines and wrinkles for a youthful, refreshed look with Botox treatments.",
    image: "/facial-aesthetics/botox-treatment.webp",
    link: "/services/facial-aesthetics/botox",
  },
  {
    slug: "face-lift",
    title: "Face Lift",
    description: "Tighten sagging skin and restore facial contours with advanced facelift procedures.",
    image: "/facial-aesthetics/facelift.webp",
    link: "/services/facial-aesthetics/face-lift",
  },
  {
    slug: "thread-lift",
    title: "Thread Lift",
    description: "Non-surgical facelift using dissolvable threads for lifted and firmer skin.",
    image: "/facial-aesthetics/thread-lift.webp",
    link: "/services/facial-aesthetics/thread-lift",
  },
  {
    slug: "nose-fillers",
    title: "Nose Fillers",
    description: "Enhance and reshape your nose with non-surgical dermal filler treatments.",
    image: "/facial-aesthetics/nose-filler.webp",
    link: "/services/facial-aesthetics/nose-fillers",
  },
  {
    slug: "chin-jawline",
    title: "Chin & Jawline Augmentation",
    description: "Define chin and jawline for a sculpted, balanced, and youthful facial profile.",
    image: "/facial-aesthetics/chin-jawline.webp",
    link: "/services/facial-aesthetics/chin-jawline",
  },
  {
    slug: "lip-fillers",
    title: "Lip Fillers",
    description: "Add volume, shape, and hydration to lips with natural-looking lip fillers.",
    image: "/facial-aesthetics/lip-fillers.webp",
    link: "/services/facial-aesthetics/lip-fillers",
  },
  {
    slug: "chemical-peels",
    title: "Chemical Peels",
    description: "Improve skin texture, tone, and clarity with customized chemical peels.",
    image: "/facial-aesthetics/chemical-peels.webp",
    link: "/services/facial-aesthetics/chemical-peels",
  },
  {
    slug: "acne-scar",
    title: "Acne Scar Treatment",
    description: "Reduce acne scars and achieve smoother skin with advanced treatments.",
    image: "/facial-aesthetics/acne-scar-treatment.webp",
    link: "/services/facial-aesthetics/acne-scar",
  },
  {
    slug: "vitamin-drips",
    title: "Vitamin Drips",
    description: "Boost skin glow, hydration, and immunity with nutrient-rich vitamin drips.",
    image: "/facial-aesthetics/vitamin-drips.webp",
    link: "/services/facial-aesthetics/vitamin-drips",
  },
  {
    slug: "pdrn",
    title: "PDRN",
    description: "Stimulate skin repair, collagen production, and rejuvenation using PDRN therapy.",
    image: "/facial-aesthetics/PDRN.jpg",
    link: "/services/facial-aesthetics/pdrn",
  },
  {
    slug: "profhilo",
    title: "Profhilo",
    description: "Deep skin hydration and bio-remodeling for firm, radiant, and youthful skin.",
    image: "/facial-aesthetics/Profhilo.jpg",
    link: "/services/facial-aesthetics/profhilo",
  },
  {
    slug: "hyperhidrosis",
    title: "Hyperhidrosis",
    description: "Treat excessive sweating effectively with safe and long-lasting solutions.",
    image: "/facial-aesthetics/Hyperhidrosis.jpg",
    link: "/services/facial-aesthetics/hyperhidrosis",
  },
  {
    slug: "polynucleotides",
    title: "Polynucleotides",
    description: "Regenerate skin cells, boost elasticity, and restore skin health naturally.",
    image: "/facial-aesthetics/Polynucleotides.jpg",
    link: "/services/facial-aesthetics/polynucleotides",
  },
  {
    slug: "exosomes",
    title: "Exosomes",
    description: "Next-gen skin rejuvenation therapy using exosomes for repair and glow.",
    image: "/facial-aesthetics/Exosomes.jpg",
    link: "/services/facial-aesthetics/exosomes",
  },
  {
    slug: "neck-rejuvenation",
    title: "Neck Rejuvenation",
    description: "Tighten, smooth, and rejuvenate aging neck skin with targeted treatments.",
    image: "/facial-aesthetics/Neck Rejuvenation.jpg",
    link: "/services/facial-aesthetics/neck-rejuvenation",
  },
  {
    slug: "hands-rejuvenation",
    title: "Hands Rejuvenation",
    description: "Restore youthfulness to hands by reducing wrinkles, spots, and thinning skin.",
    image: "/facial-aesthetics/Hand Rejuvenation.jpg",
    link: "/services/facial-aesthetics/hands-rejuvenation",
  },
];

const Servicesfacialaesthetics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ✅ Hero Banner FIXED */}
      <div
        className="relative bg-cover bg-center h-48 md:h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/our services/1.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center text-white z-10">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Facial Aesthetics
          </h1>

          <p className="mt-2 text-sm">
            Home / Services / Facial Aesthetics
          </p>
        </div>
      </div>

      {/* ✅ About Section FIXED */}
      <section className="bg-[#FAF8F6] py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <motion.img
            src="/images/goo.jpg"
            alt="Facial Aesthetics"
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
              About Facial Aesthetics
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Our facial aesthetics treatments are designed to enhance your natural beauty 
              and restore a youthful appearance. We offer advanced, non-surgical solutions 
              including Botox, fillers, skin rejuvenation, and anti-aging treatments using 
              modern technology and expert care.
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

      {/* Services Section (same, just heading cleaned) */}
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
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300 group"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover group-hover:scale-105 transition duration-300"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>

                <Link
                  to={`/services/facial-aesthetics/${service.slug}`}
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
    </div>
  );
};

export default Servicesfacialaesthetics;