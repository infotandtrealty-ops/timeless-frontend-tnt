import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Heart, ShoppingBag, ShieldCheck, Star, Users, Globe } from 'lucide-react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-[#FAF8F6] font-lato text-[#3B2F2F]">
            <SEO 
                title="About Us | Timeless Aesthetics" 
                description="Discover Timeless Aesthetics, India's pioneer in Permanent Makeup and Cosmetology, led by Dr. Shikha Baghi and Mr. Ashish Thapar." 
            />
            <header>
                <Nav />
            </header>
            
            <main>
                {/* --- HERO BANNER SECTION --- */}
                <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                    {/* Updated Banner Image Path */}
                    <div 
                        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                        style={{ 
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/Permanent Makeup/Banner_Cover/Top_Main Banner.png')`,
                            backgroundAttachment: 'fixed'
                        }}
                    ></div>

                    <div className="relative z-10 text-center text-white px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] mb-4 text-sm md:text-base">
                                Leading the Aesthetic Revolution
                            </p>
                            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
                                Timeless Aesthetics
                            </h1>
                            <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed font-light">
                                India's pioneer in Permanent Makeup, Facial Aesthetics, and Modern Cosmetology.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* --- VISION & LEGACY SECTION --- */}
                <section className="py-24 px-6">
                    <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-playfair font-bold mb-8 text-[#D4AF37]">Redefining Beauty Standards</h2>
                            <div className="space-y-6 text-lg leading-relaxed text-[#555]">
                                <p>
                                    <strong>Timeless Aesthetics</strong> is the best aesthetic clinic in Gurgaon, offering a diverse range of 
                                    non-surgical aesthetic treatments. We specialize in <strong>Permanent Makeup, Facial Aesthetics, and Modern Cosmetology</strong>.
                                </p>
                                <p>
                                    Founded and led by <strong>Dr. Shikha Baghi</strong>, Timeless Aesthetics pioneered the PMU industry in India. 
                                    Our mission is to combine medical expertise with artistic precision to reshape how beauty is perceived and achieved. 
                                    Our skin and hair clinic aspires to become a global authority in aesthetics.
                                </p>
                                <div className="grid grid-cols-2 gap-4 mt-8">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-[#D4AF37]/10 rounded-lg text-[#D4AF37]"><Star size={20}/></div>
                                        <span className="text-sm font-bold uppercase tracking-tight">Master Artistry</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-[#D4AF37]/10 rounded-lg text-[#D4AF37]"><Globe size={20}/></div>
                                        <span className="text-sm font-bold uppercase tracking-tight">Global Authority</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }} 
                            whileInView={{ opacity: 1, scale: 1 }} 
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img 
                                src="/images/our services/2.webp" 
                                alt="Timeless Aesthetics Clinic" 
                                className="rounded-2xl shadow-2xl border-2 border-[#D4AF37]/30 z-10 relative w-full h-[500px] object-cover"
                            />
                            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-[#D4AF37]/20 rounded-2xl -z-0"></div>
                            
                            <div className="absolute -bottom-8 -left-8 bg-[#3B2F2F] text-white p-8 rounded-2xl hidden lg:block shadow-2xl">
                                <p className="text-4xl font-bold text-[#D4AF37]">Diamond</p>
                                <p className="text-xs uppercase tracking-widest mt-1">Trainer Hub in India (AAM)</p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* --- LEADERSHIP SECTION --- */}
                <section className="py-24 bg-[#3B2F2F] text-white px-6">
                    <div className="container mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">The Minds Behind TA</h2>
                            <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                            {/* Dr. Shikha Baghi */}
                            <div className="flex flex-col items-center text-center">
                                <div className="relative mb-8 group">
                                    <img 
                                        src="/images/22.png" 
                                        alt="Dr. Shikha Baghi" 
                                        className="w-64 h-64 rounded-full object-cover border-4 border-[#D4AF37] shadow-2xl transition-transform duration-500 group-hover:scale-105" 
                                    />
                                    <div className="absolute bottom-4 right-4 bg-[#D4AF37] p-3 rounded-full shadow-lg">
                                        <Award className="text-white h-7 w-7" />
                                    </div>
                                </div>
                                <h3 className="text-3xl font-playfair font-bold text-[#D4AF37]">Dr. Shikha Baghi</h3>
                                <p className="text-[#D4AF37]/80 font-bold mb-4">BDS, MDS (Endodontics) | Master Artist</p>
                                <p className="text-white/70 max-w-md leading-relaxed">
                                    A pioneer who introduced PMU and Cosmetology to India on an unparalleled scale. 
                                    As the only **Diamond Trainer of the American Academy of Micropigmentation (AAM)** in India, 
                                    she has shaped the careers of hundreds of professionals nationwide with her clear vision and unwavering will.
                                </p>
                            </div>

                            {/* Mr. Ashish Thapar */}
                            <div className="flex flex-col items-center text-center">
                                <div className="relative mb-8 group">
                                    <img 
                                        src="/images/11.jpg" 
                                        alt="Mr. Ashish Thapar" 
                                        className="w-64 h-64 rounded-full object-cover border-4 border-[#D4AF37]/50 shadow-2xl transition-transform duration-500 group-hover:scale-105" 
                                    />
                                    <div className="absolute bottom-4 right-4 bg-[#D4AF37] p-3 rounded-full shadow-lg">
                                        <ShieldCheck className="text-white h-7 w-7" />
                                    </div>
                                </div>
                                <h3 className="text-3xl font-playfair font-bold text-[#D4AF37]">Mr. Ashish Thapar</h3>
                                <p className="text-[#D4AF37]/80 font-bold mb-4">B.E. Production Engineering | MD</p>
                                <p className="text-white/70 max-w-md leading-relaxed">
                                    The strategic force behind Timeless Aesthetics. As the Founder and Managing Director of 
                                    **TandT Realty Services Pvt. Ltd.**, he guides business development, sales, and marketing, 
                                    ensuring the brand reaches new heights through expert leadership and operational excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- CORE PILLARS SECTION --- */}
                <section className="py-24 px-6 bg-white">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-playfair font-bold text-[#3B2F2F]">Our Ecosystem</h2>
                            <p className="text-[#D4AF37] font-bold mt-2 uppercase tracking-widest">Everything under one roof</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { 
                                    icon: <Award />, 
                                    title: "The Clinic", 
                                    desc: "Offering a diverse range of non-surgical options focusing on Permanent Makeup and Modern Cosmetology." 
                                },
                                { 
                                    icon: <BookOpen />, 
                                    title: "The Academy", 
                                    desc: "State-of-the-art academy providing certified training. Hundreds of students join annually to earn TA Master's and Fellowship certificates." 
                                },
                                { 
                                    icon: <ShoppingBag />, 
                                    title: "The Shop", 
                                    desc: "Exclusive selection of health-compliant products and equipment curated for professional aestheticians." 
                                },
                                { 
                                    icon: <Heart />, 
                                    title: "The Promise", 
                                    desc: "Our commitment to humanity, offering free treatments for acid attack survivors and underprivileged individuals." 
                                }
                            ].map((item, index) => (
                                <motion.div 
                                    key={index} 
                                    whileHover={{ y: -10 }}
                                    className="p-8 bg-[#FAF8F6] border border-[#D4AF37]/20 rounded-3xl text-center flex flex-col items-center"
                                >
                                    <div className="text-[#D4AF37] mb-6 scale-[1.5]">{item.icon}</div>
                                    <h4 className="text-xl font-playfair font-bold mb-4 text-[#3B2F2F]">{item.title}</h4>
                                    <p className="text-[#555] text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- CTA SECTION --- */}
                <section className="py-24 bg-[#D4AF37] px-6 text-center">
                    <div className="container mx-auto max-w-4xl">
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-white">Reshaping Beauty Standards Across India</h2>
                        <p className="text-white/90 mb-10 text-lg leading-relaxed">
                            Whether you're looking for expert treatment or professional training, 
                            Timeless Aesthetics is your destination for excellence.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button className="bg-[#3B2F2F] text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-white hover:text-[#3B2F2F] transition-all transform hover:scale-105">
                                Book an Appointment
                            </button>
                            <button className="bg-white text-[#3B2F2F] px-10 py-4 rounded-full font-bold shadow-xl hover:bg-[#3B2F2F] hover:text-white transition-all transform hover:scale-105">
                                Join the Academy
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default AboutUs;