import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Clock, Star, CheckCircle, ArrowRight, Navigation, Globe, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Nav";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

// --- UI COMPONENTS ---
const Card = ({ className = "", children }) => (
  <div className={`rounded-3xl border border-gray-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const Button = ({ className = "", variant = "default", children, ...props }) => {
  const base = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2";
  const variants = {
    default: "bg-[#D4AF37] text-white hover:bg-[#B8962E] hover:shadow-lg hover:shadow-[#D4AF37]/30",
    outline: "border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white"
  };
  return <button className={`${base} ${variants[variant]} ${className}`} {...props}>{children}</button>;
};

const ClinicsPage = () => {
  const location = useLocation();
  const [clinicData, setClinicData] = useState(null);
  const [loading, setLoading] = useState(true);

  // --- AAPKA SAARA ORIGINAL DATA ---
  const clinicsData = {
    amritsar: {
      id: 'amritsar',
      name: 'Timeless Aesthetics - Amritsar',
      address: '123 Beauty Street, Amritsar, Punjab 143001',
      phone: '+91 9654009966',
      email: 'amritsar@timelessaesthetics.in',
      hours: [
        'Monday - Saturday: 9:00 AM - 7:00 PM',
        'Sunday: 10:00 AM - 5:00 PM'
      ],
      services: ['Permanent Makeup', 'Cosmetology', 'Facial Aesthetics', 'Dentistry', 'Academy Courses'],
      features: ['State-of-the-art equipment', 'Certified professionals', 'Sterile environment'],
      image: '/images/courses-banner.jpeg',
      description: 'Our flagship clinic in Amritsar offers comprehensive aesthetic services in a modern, comfortable environment. Located in the heart of the city, we provide world-class treatments with expert care.',
      rating: 4.9,
      reviews: 127
    },
    gurgaon: {
      id: 'gurgaon',
      name: 'Timeless Aesthetics - Gurgaon',
      address: '456 Aesthetic Avenue, Gurgaon, Haryana 122001',
      phone: '+91 9876543210',
      email: 'gurgaon@timelessaesthetics.in',
      hours: [
        'Monday - Saturday: 9:00 AM - 7:00 PM',
        'Sunday: 10:00 AM - 5:00 PM'
      ],
      services: ['Permanent Makeup', 'Cosmetology', 'Facial Aesthetics', 'Dentistry', 'Academy Courses'],
      features: ['Modern facility', 'Expert team', 'Advanced technology', 'Valet parking'],
      image: '/images/courses-banner.jpeg',
      description: 'Our Gurgaon clinic brings luxury aesthetic care to the corporate hub. With cutting-edge technology and a team of experienced professionals, we deliver exceptional results.',
      rating: 4.8,
      reviews: 89
    },
    jammu: {
      id: 'jammu',
      name: 'Timeless Aesthetics - Jammu',
      address: '789 Glamour Road, Jammu, Jammu & Kashmir 180001',
      phone: '+91 8765432109',
      email: 'jammu@timelessaesthetics.in',
      hours: [
        'Monday - Saturday: 9:00 AM - 7:00 PM',
        'Sunday: Closed'
      ],
      services: ['Permanent Makeup', 'Cosmetology', 'Facial Aesthetics', 'Dentistry', 'Academy Courses'],
      features: ['Professional care', 'Modern equipment', 'Family-friendly'],
      image: '/images/courses-banner.jpeg',
      description: 'Our Jammu clinic provides comprehensive aesthetic services to the valley region. We combine traditional care with modern techniques to deliver outstanding results.',
      rating: 4.7,
      reviews: 156
    }
  };

  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const slug = pathSegments[1];
    
    // Check if we are on a specific clinic page or the main list
    if (slug && clinicsData[slug]) {
      setClinicData(clinicsData[slug]);
    } else {
      setClinicData(null);
    }
    setLoading(false);
  }, [location.pathname]);

  if (loading) return (
    <div className="h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D4AF37]"></div>
    </div>
  );

  // --- VIEW 1: ALL CLINICS LIST ---
  if (!clinicData) return (
    <div className="min-h-screen bg-[#FDFCFB]">
      <Header />
      <section className="pt-32 pb-20 bg-[#FAF9F6] border-b border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-5xl md:text-7xl font-serif text-gray-900 mb-6 italic">Our Sanctuaries</motion.h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Discover a world where science meets beauty. Visit any of our three luxury centers across India.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-10">
          {Object.values(clinicsData).map((clinic) => (
            <motion.div whileHover={{ y: -10 }} key={clinic.id}>
              <Card className="h-full flex flex-col group">
                <div className="relative h-64 overflow-hidden">
                  <img src={clinic.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={clinic.name} />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-serif mb-3 text-gray-800">{clinic.name}</h3>
                  <div className="flex items-center gap-2 mb-6">
                    <Star className="w-4 h-4 text-[#D4AF37] fill-current" />
                    <span className="text-sm font-bold text-gray-600">{clinic.rating} ({clinic.reviews} Reviews)</span>
                  </div>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3 text-gray-500 text-sm">
                      <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{clinic.address}</span>
                    </div>
                  </div>
                  <Link to={`/clinics/${clinic.id}`}>
                    <Button className="w-full">Explore Clinic <ArrowRight className="w-4 h-4" /></Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );

  // --- VIEW 2: SINGLE CLINIC PAGE ---
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="relative h-[65vh] flex items-center pt-20 overflow-hidden">
        <motion.div initial={{scale:1.2}} animate={{scale:1}} transition={{duration:1.5}} className="absolute inset-0 z-0">
          <img src={clinicData.image} className="w-full h-full object-cover" alt={clinicData.name} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div initial={{opacity:0, x:-30}} animate={{opacity:1, x:0}} className="max-w-3xl">
            <span className="inline-block px-4 py-1 border border-[#D4AF37] rounded-full text-[10px] tracking-[0.2em] uppercase mb-6 text-[#D4AF37] font-bold bg-black/20 backdrop-blur-md">
              Aesthetic Excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight italic">{clinicData.name}</h1>
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-md">
                <Star className="w-4 h-4 text-[#D4AF37] fill-current" />
                <span className="text-sm font-bold">{clinicData.rating} Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-md">
                <Globe className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm font-bold">Standard Certified</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16">
          
          <div className="lg:col-span-2 space-y-16">
            <div>
              <h2 className="text-3xl font-serif mb-8 text-gray-800 italic">About the Facility</h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed mb-10 border-l-4 border-[#D4AF37] pl-8">
                {clinicData.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {clinicData.services.map((service, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-[#FAF9F6] border border-gray-100 group hover:border-[#D4AF37] transition-colors">
                    <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
                    <span className="font-medium text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif mb-8 text-gray-800 italic">Premium Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {clinicData.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-500 text-sm italic">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <Card className="p-8 sticky top-28 bg-[#FAF9F6] border-[#D4AF37]/20">
              <h3 className="text-xl font-serif mb-8 italic tracking-wide">Contact & Hours</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                    <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-gray-400 mb-1 tracking-widest">Address</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{clinicData.address}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                    <Clock className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-gray-400 mb-1 tracking-widest">Opening Hours</h4>
                    <div className="text-gray-700 text-sm space-y-1 italic">
                      {clinicData.hours.map((h, i) => <p key={i}>{h}</p>)}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                    <Phone className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-gray-400 mb-1 tracking-widest">Direct Contact</h4>
                    <p className="text-gray-700 font-bold">{clinicData.phone}</p>
                    <p className="text-gray-400 text-xs">{clinicData.email}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 space-y-4">
                <Button className="w-full py-4 text-sm uppercase tracking-widest font-bold">Book Online</Button>
                <Button variant="outline" className="w-full text-xs uppercase tracking-widest border-gray-200 text-gray-500">
                  <Navigation className="w-3 h-3" /> Get Directions
                </Button>
              </div>
            </Card>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClinicsPage;