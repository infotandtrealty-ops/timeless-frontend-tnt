import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
// Removed imports for components from "@/components/ui"
import { Clock, Users, Award, BookOpen, Star, CheckCircle, ArrowLeft, PlayCircle } from "lucide-react";
import Nav from "../components/Nav"; // Changed from Header
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const IndividualServicePage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // 👈 ye add kar
  const [serviceData, setServiceData] = useState(null); // Type removed
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extract service path from URL
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const servicePath = pathSegments.slice(1).join('/'); // Remove 'services' from path
    
    // Load service data based on path
    loadServiceData(servicePath);
  }, [location.pathname]);

  const loadServiceData = (servicePath) => { // Type removed
    setLoading(true);
    
    // Service data mapping based on the navigation structure
    const serviceDataMap = { // Type removed
      // Permanent Makeup Services
      "permanent-makeup/microblading": {
        title: "Microblading",
        description: "Achieve perfectly shaped, natural-looking eyebrows with our professional microblading service. Using fine, hair-like strokes, we create realistic eyebrow hair that lasts for 12-18 months.",
        duration: "2-3 Hours",
        category: "Permanent Makeup",
        subcategory: "Eyebrow Enhancement",
        price: "₹15,000",
        image: "/images/courses-banner.jpeg",
        features: [
          "Hand-drawn hair strokes",
          "Natural-looking results",
          "Customized shape and color",
          "Professional consultation",
          "Touch-up included",
          "Sterile environment"
        ],
        benefits: [
          "Save time on daily makeup",
          "Waterproof and smudge-proof",
          "Natural appearance",
          "Long-lasting results",
          "Perfect for active lifestyles",
          "Boosts self-confidence"
        ],
        process: [
          "Initial consultation and design",
          "Numbing cream application",
          "Custom shape drawing",
          "Color selection and matching",
          "Microblading procedure",
          "Aftercare instructions"
        ],
        aftercare: [
          "Keep area dry for 24 hours",
          "Apply healing ointment as directed",
          "Avoid sun exposure",
          "No swimming for 2 weeks",
          "Gentle cleansing only",
          "Schedule touch-up appointment"
        ],
        contraindications: [
          "Pregnancy or breastfeeding",
          "Diabetes (uncontrolled)",
          "Blood clotting disorders",
          "Skin conditions in treatment area",
          "Recent Botox in eyebrow area",
          "Allergic to numbing agents"
        ],
        relatedServices: [
          {
            name: "Ombre Brows",
            link: "/services/permanent-makeup/ombre-brows",
            description: "Soft, powdered eyebrow effect"
          },
          {
            name: "Powder Brows",
            link: "/services/permanent-makeup/powder-brows",
            description: "Full, defined eyebrows with powdered finish"
          },
          {
            name: "Combination Brows",
            link: "/services/permanent-makeup/combination-brows",
            description: "Perfect blend of microblading and powder"
          }
        ]
      },
    
      "permanent-makeup/vitiligo-camouflage": {
        title: "Vitiligo Camouflage",
        description: "Specialized treatment for vitiligo coverage using advanced micropigmentation techniques. Restore your skin's natural appearance with professional camouflage that lasts for years.",
        duration: "3-4 Hours",
        category: "Permanent Makeup",
        subcategory: "Skin Camouflage",
        price: "₹35,000",
        image: "/images/courses-banner.jpeg",
        features: [
          "Specialized vitiligo treatment",
          "Natural skin tone matching",
          "Long-lasting results",
          "Professional consultation",
          "Multiple sessions included",
          "Sterile environment"
        ],
        benefits: [
          "Reduced vitiligo appearance",
          "Restored confidence",
          "Natural appearance",
          "Long-lasting results",
          "Low maintenance",
          "Professional results"
        ],
        process: [
          "Initial consultation and assessment",
          "Skin tone analysis",
          "Color matching",
          "Treatment area preparation",
          "Vitiligo camouflage procedure",
          "Aftercare instructions"
        ],
        aftercare: [
          "Keep area clean and dry",
          "Apply healing ointment as directed",
          "Avoid sun exposure",
          "No swimming for 2 weeks",
          "Gentle cleansing only",
          "Schedule follow-up sessions"
        ],
        contraindications: [
          "Pregnancy or breastfeeding",
          "Active vitiligo progression",
          "Diabetes (uncontrolled)",
          "Blood clotting disorders",
          "Allergic to numbing agents",
          "Recent skin treatments"
        ],
        relatedServices: [
          {
            name: "Stretch Mark Camouflage",
            link: "/services/permanent-makeup/stretch-mark-camouflage",
            description: "Professional stretch mark coverage"
          },
          {
            name: "Acne Scar Treatment",
            link: "/services/facial-aesthetics/acne-scar",
            description: "Advanced treatment for acne scar reduction"
          }
        ]
      }
    };

    const service = serviceDataMap[servicePath];
    if (service) {
      setServiceData(service);
    } else {
      // Fallback placeholder for any service route not yet defined
      const [categoryKey, serviceKey] = servicePath.split('/');
      if (categoryKey && serviceKey) {
        const toTitleCase = (text) => text // Type removed
          .split('-')
          .map(part => part.charAt(0).toUpperCase() + part.slice(1))
          .join(' ');
        const categoryMap = { // Type removed
          'permanent-makeup': 'Permanent Makeup',
          'cosmetology': 'Cosmetology',
          'facial-aesthetics': 'Facial Aesthetics',
          'dentistry': 'Dentistry'
        };
        const title = toTitleCase(serviceKey);
        const category = categoryMap[categoryKey] || 'Services';
        const placeholder = { // Type removed
          title,
          description: `Details about ${title} in ${category}. This is placeholder content to be replaced with real copy.`,
          duration: "60 Minutes",
          category,
          subcategory: "General",
          price: "₹—",
          image: "/images/courses-banner.jpeg",
          features: [
            "Professional care",
            "Safe and hygienic",
            "Personalized plan",
            "Modern techniques",
            "Aftercare guidance",
            "Expert team"
          ],
          benefits: [
            "Visible improvement",
            "Confidence boost",
            "Minimal downtime",
            "Tailored approach",
            "Comfort-focused",
            "Quality results"
          ],
          process: [
            "Consultation and assessment",
            "Treatment planning",
            "Procedure",
            "Soothing and protection",
            "Aftercare instructions",
            "Follow-up (if needed)"
          ],
          aftercare: [
            "Follow provided care plan",
            "Use SPF daily",
            "Avoid heat/sun for 24-48h",
            "Hydrate and rest",
            "Gentle skincare",
            "Contact clinic for concerns"
          ],
          contraindications: [
            "Pregnancy (some treatments)",
            "Active infection at site",
            "Allergy to components",
            "Bleeding disorders",
            "Uncontrolled medical conditions",
            "Recent invasive procedure at site"
          ],
          relatedServices: []
        };
        setServiceData(placeholder);
      } else {
        setServiceData(null);
      }
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-luxury-gold mx-auto"></div>
          <p className="mt-4 text-luxury-muted">Loading service information...</p>
        </div>
      </div>
    );
  }

  if (!serviceData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-luxury-dark mb-4">Service Not Found</h1>
          <p className="text-luxury-muted mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  // --- HTML/JSX Rendering with standard elements and classes ---

  return (
    <div className="min-h-screen bg-[#FAF8F6] flex flex-col font-lato">
      <Nav /> {/* Replaced Header with Nav */}

      {/* Hero Section */}
      <div
        className="relative text-white py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${serviceData.image})`,
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              {/* Button replaced with standard button/Link with Button's classes */}
              <Link to={`/services/${serviceData.category.toLowerCase().replace(' ', '-')}`}
                className="inline-flex items-center justify-center h-9 px-3 rounded-md text-sm font-medium transition-colors bg-transparent text-white hover:bg-white/10 hover:text-[#D4AF37]">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to {serviceData.category}
              </Link>
            </div>
            {/* Badge replaced with standard span with Badge's classes */}
            <span
              className="mb-6 text-sm px-4 py-1 inline-flex items-center rounded-full font-semibold bg-white/20 backdrop-blur-sm"
            >
              {serviceData.category} • {serviceData.subcategory}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair uppercase tracking-wide">
              {serviceData.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-6 text-lg mt-8">
              <span className="flex items-center gap-2">
                <Clock className="h-5 w-5" /> {serviceData.duration}
              </span>
              <span className="flex items-center gap-2">
                <Award className="h-5 w-5" /> Professional
              </span>
              <span className="flex items-center gap-2">
                <Users className="h-5 w-5" /> Expert Care
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Overview - Card replaced with div */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-2xl border-2 border-[#D4AF37]/30 bg-white p-6 shadow-subtle">
                <div className="pb-4 space-y-1"> {/* CardHeader structure */}
                  <h3 className="flex items-center gap-2 text-xl text-[#3B2F2F] font-playfair font-semibold"> {/* CardTitle structure */}
                    <BookOpen className="h-5 w-5 text-[#D4AF37]" /> Service Overview
                  </h3>
                </div>
                <div className="pt-0"> {/* CardContent structure */}
                  <p className="text-[#555] leading-relaxed text-lg">
                    {serviceData.description}
                  </p>
                  <span className="block w-16 h-1 bg-[#D4AF37] mt-4 rounded"></span>
                </div>
              </div>
            </motion.div>

            {/* Video */}
            {serviceData.videoUrl && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="rounded-2xl border-2 border-[#D4AF37]/20 bg-white p-6 shadow-xl overflow-hidden"> {/* Card structure */}
                  <div className="pb-4 space-y-1"> {/* CardHeader structure */}
                    <h3 className="flex items-center gap-2 text-xl text-[#3B2F2F] font-playfair font-semibold"> {/* CardTitle structure */}
                      <PlayCircle className="h-5 w-5 text-[#D4AF37]" /> Watch Procedure Intro
                    </h3>
                  </div>
                  <div className="pt-0"> {/* CardContent structure */}
                    <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
                      <iframe
                        src={serviceData.videoUrl}
                        title="Service Intro"
                        className="w-full h-full"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Meet Your Practitioner */}
            {serviceData.instructor && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="rounded-2xl border-2 border-[#D4AF37]/30 bg-white p-6 shadow-subtle"> {/* Card structure */}
                  <div className="pb-4 space-y-1"> {/* CardHeader structure */}
                    <h3 className="flex items-center gap-2 text-xl text-[#3B2F2F] font-playfair font-semibold"> {/* CardTitle structure */}
                      <Users className="h-5 w-5 text-[#D4AF37]" /> Meet Your Practitioner
                    </h3>
                  </div>
                  <div className="pt-0 space-y-4"> {/* CardContent structure */}
                    <div className="flex items-center gap-4">
                      {serviceData.instructor.image && (
                        <img
                          src={serviceData.instructor.image}
                          alt={serviceData.instructor.name}
                          className="w-24 h-24 rounded-full object-cover border-2 border-[#D4AF37]"
                        />
                      )}
                      <div>
                        <h3 className="text-lg font-semibold text-[#3B2F2F]">
                          {serviceData.instructor.name}
                        </h3>
                        <p className="text-[#555] text-sm">{serviceData.instructor.bio}</p>
                        <p className="text-[#555] text-sm mt-1">{serviceData.instructor.experience}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-2xl border-2 border-[#D4AF37]/30 bg-white p-6 shadow-subtle"> {/* Card structure */}
                <div className="pb-4 space-y-1"> {/* CardHeader structure */}
                  <h3 className="text-xl text-[#3B2F2F] font-playfair font-semibold">Benefits</h3> {/* CardTitle structure */}
                  <p className="text-sm text-gray-500"> {/* CardDescription structure */}
                    What you can expect from our {serviceData.title.toLowerCase()} service
                  </p>
                </div>
                <div className="pt-0"> {/* CardContent structure */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {serviceData.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                        <span className="text-[#555]">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-2xl border-2 border-[#D4AF37]/30 bg-white p-6 shadow-subtle"> {/* Card structure */}
                <div className="pb-4 space-y-1"> {/* CardHeader structure */}
                  <h3 className="text-xl text-[#3B2F2F] font-playfair font-semibold">Our Process</h3> {/* CardTitle structure */}
                  <p className="text-sm text-gray-500"> {/* CardDescription structure */}
                    How we deliver exceptional {serviceData.title.toLowerCase()} service
                  </p>
                </div>
                <div className="pt-0"> {/* CardContent structure */}
                  <div className="space-y-3">
                    {serviceData.process.map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-[#D4AF37] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </div>
                        <span className="text-[#555]">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Aftercare */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-2xl border-2 border-[#D4AF37]/30 bg-white p-6 shadow-subtle"> {/* Card structure */}
                <div className="pb-4 space-y-1"> {/* CardHeader structure */}
                  <h3 className="text-xl text-[#3B2F2F] font-playfair font-semibold">Aftercare Instructions</h3> {/* CardTitle structure */}
                  <p className="text-sm text-gray-500">Important guidelines for optimal results</p> {/* CardDescription structure */}
                </div>
                <div className="pt-0"> {/* CardContent structure */}
                  <div className="space-y-3">
                    {serviceData.aftercare.map((instruction, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                        <span className="text-[#555]">{instruction}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contraindications */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-2xl border-2 border-[#D4AF37]/30 bg-white p-6 shadow-subtle"> {/* Card structure */}
                <div className="pb-4 space-y-1"> {/* CardHeader structure */}
                  <h3 className="text-xl text-[#3B2F2F] font-playfair font-semibold">Contraindications</h3> {/* CardTitle structure */}
                  <p className="text-sm text-gray-500">Please inform us if any of these apply to you</p> {/* CardDescription structure */}
                </div>
                <div className="pt-0"> {/* CardContent structure */}
                  <div className="space-y-3">
                    {serviceData.contraindications.map((contraindication, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-semibold">
                          !
                        </div>
                        <span className="text-[#555]">{contraindication}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar (Sticky) */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-8">
              
              {/* Service Information - Card replaced with div */}
              <div className="rounded-lg border-2 border-[#D4AF37]/30 bg-white p-6"> 
                <div className="pb-4 space-y-1 border-b"> {/* CardHeader structure */}
                  <h3 className="text-xl text-[#3B2F2F] font-playfair font-semibold">Service Information</h3> {/* CardTitle structure */}
                </div>
                <div className="pt-4 space-y-4"> {/* CardContent structure */}
                  <div className="flex justify-between items-center">
                    <span className="text-[#555]">Duration:</span>
                    <span className="font-semibold">{serviceData.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#555]">Category:</span>
                    <span className="font-semibold">{serviceData.category}</span>
                  </div>
                  {/* <div className="flex justify-between items-center border-b pb-4">
                    <span className="text-[#555]">Price:</span>
                    <span className="text-2xl font-bold text-[#D4AF37]">
                      {serviceData.price}
                    </span>
                  </div> */}
                  {/* Buttons replaced with standard button elements */}
                  {/* <button className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-12 py-3 px-4 bg-transparent border-2 border-[#D4AF37] text-[#3B2F2F] hover:bg-[#D4AF37] hover:text-white">
                    Book Appointment
                  </button> */}

<button
      onClick={() => navigate("/contact")}
      className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-12 py-3 px-4 bg-transparent border-2 border-[#D4AF37] text-[#3B2F2F] hover:bg-[#D4AF37] hover:text-white"
    >
      Book Appointment
    </button>

    
                  {/* <button className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-10 py-2 px-4 border border-[#D4AF37] bg-white text-[#3B2F2F] hover:bg-[#D4AF37] hover:text-white">
                    Download Brochure
                  </button> */}
                </div>
              </div>

              {/* Service Features - Card replaced with div */}
              <div className="rounded-lg border-2 border-[#D4AF37]/20 bg-white p-6">
                <div className="pb-4 space-y-1 border-b"> {/* CardHeader structure */}
                  <h3 className="text-xl text-[#3B2F2F] font-playfair font-semibold">Service Features</h3> {/* CardTitle structure */}
                </div>
                <div className="pt-4"> {/* CardContent structure */}
                  <div className="space-y-3">
                    {serviceData.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-[#555]">
                        <Star className="h-4 w-4 text-[#D4AF37]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Related Services - Card replaced with div */}
              <div className="rounded-lg border bg-white p-6">
                <div className="pb-4 space-y-1 border-b"> {/* CardHeader structure */}
                  <h3 className="text-xl font-semibold">Related Services</h3> {/* CardTitle structure */}
                </div>
                <div className="pt-4"> {/* CardContent structure */}
                  <div className="space-y-3">
                    {serviceData.relatedServices.map((service, index) => (
                      <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                        <Link
                          to={service.link}
                          className="block hover:text-[#D4AF37] transition-colors duration-200"
                        >
                          <h4 className="font-semibold text-sm">{service.name}</h4>
                          <p className="text-xs text-[#777]">{service.description}</p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IndividualServicePage;