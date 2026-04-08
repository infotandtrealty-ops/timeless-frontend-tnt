import Header from "../components/Nav";   // 👈 apne Header ka path dalna
import Footer from "../components/Footer";   // 👈 apne Footer ka path dalna
import FAQ from "../components/FAQ";
import BlogSection from "../components/BlogSection";
import WhyChooseUs from "../components/WhyChooseUs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";



const Treatments = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Banner */}
      <div
        className="relative bg-cover bg-center h-64 flex items-center justify-center"
        style={{
            backgroundImage: "url('/images/our services/1.webp')", // 👈 public folder path
          }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-4xl font-bold">Our Treatments</h1>
          <p className="mt-2 text-sm">Home / Our Treatments</p>
        </div>
      </div>



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
About the <span className="text-[#D4AF37]">Treatments</span>
</h2>
<span className="block w-16 h-1 bg-[#D4AF37] mt-2 mb-6 rounded"></span>
<p className="text-lg text-[#555555] font-lato leading-relaxed mb-6">
Learn industry-standard techniques in micropigmentation and brow,
lip, and scalp artistry. Our expert-designed curriculum ensures
hands-on training and professional certification for a successful
career in permanent makeup.
</p>
<Link
to="/contact"
className="inline-block px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full font-medium font-lato tracking-wide hover:bg-[#D4AF37] hover:text-white hover:scale-105 transition-all duration-300"
>
Enroll Now
</Link>
</motion.div>
</div>
</section>

      {/* Cards Section */}
<div className="container mx-auto px-6 pb-16 grid md:grid-cols-3 gap-8">
  
  {/* Card 1 */}
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
    <img 
      src="/images/our services/1.webp" 
      alt="Permanent Makeup" 
      className="w-full h-48 object-cover"
    />
    <div className="p-4 text-center">
      <h3 className="text-xl font-bold mb-2">PERMANENT MAKEUP</h3>
      <p className="text-sm text-gray-600 mb-4">
        Permanent makeup is a cosmetic technique using pigments to create 
        eyebrow, lip, and eyeliner enhancements.
      </p>
      <a
  href="/permanent-makeup"
  className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white px-5 py-2 rounded-full text-sm font-medium tracking-wide shadow-md hover:shadow-lg transition-all duration-300 group"
>
  Read More
  <span className="transform group-hover:translate-x-1 transition">
    →
  </span>
</a>

    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
    <img 
      src="/images/our services/2.webp" 
      alt="Cosmetology" 
      className="w-full h-48 object-cover"
    />
    <div className="p-4 text-center">
      <h3 className="text-xl font-bold mb-2">COSMETOLOGY</h3>
      <p className="text-sm text-gray-600 mb-4">
        Cosmetology is the art of beautifying the skin, face and hair to 
        enhance the physical appearance.
      </p>

      <a
        href="/services/cosmetology" 
  className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white px-5 py-2 rounded-full text-sm font-medium tracking-wide shadow-md hover:shadow-lg transition-all duration-300 group"
>
  Read More
  <span className="transform group-hover:translate-x-1 transition">
    →
  </span>
</a>

    </div>
  </div>

    {/* Card 3 */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
    <img 
      src="/images/our services/3.webp" 
      alt="Cosmetology" 
      className="w-full h-48 object-cover"
    />
    <div className="p-4 text-center">
      
      <h3 className="text-xl font-bold mb-2">FACIAL AESTHETICS</h3>
      <p className="text-sm text-gray-600 mb-4">
        Cosmetology is the art of beautifying the skin, face and hair to 
        enhance the physical appearance.
      </p>
      <a
   href="/services/facial-aesthetics" 
     className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white px-5 py-2 rounded-full text-sm font-medium tracking-wide shadow-md hover:shadow-lg transition-all duration-300 group"
>
  Read More
  <span className="transform group-hover:translate-x-1 transition">
    →
  </span>
</a>
                                                                    


    </div>
  </div>




  {/* Card 4 */}
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
    <img 
      src="/images/our services/3.webp" 
      alt="Facial Aesthetics" 
      className="w-full h-48 object-cover"
    />
    <div className="p-4 text-center">
      <h3 className="text-xl font-bold mb-2">DENTISTRY</h3>
      <p className="text-sm text-gray-600 mb-4">
        Facial aesthetics includes non-surgical treatments like skincare, 
        injectables, and thread lifts.
      </p>
      <a
  href="/services/dentistry"
  className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white px-5 py-2 rounded-full text-sm font-medium tracking-wide shadow-md hover:shadow-lg transition-all duration-300 group"
>
  Read More
  <span className="transform group-hover:translate-x-1 transition">
    →
  </span>
</a>
 
    </div>
  </div>

</div>
 


      <WhyChooseUs />
      <BlogSection />
      <FAQ />


  

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Treatments;
