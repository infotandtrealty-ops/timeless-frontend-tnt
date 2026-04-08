import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { 
  Clock, Star, Users, CheckCircle, Award, 
  ArrowRight, ShieldCheck, Zap, Globe 
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav"; 
import Footer from "../components/Footer";

const CoursePage = () => {
  const location = useLocation();
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);


  const navigate = useNavigate();


  // const courseDataMap = {
  //   "permanent-makeup/masters-eyebrows": {
  //     title: "Master's in Permanent Makeup",
  //     category: "Elite Certification Program",
  //     description: "An all-inclusive program covering the full spectrum of Permanent Makeup. Master advanced techniques for precision and natural-looking cosmetic results with clinical precision and creative excellence.",
  //     duration: "10 Days",
  //     level: "Mastery",
  //     image: "/images/courses-banner.jpeg",
  //     courseDetailImage: "/courses2/MastersinPMU.png", 
  //     features: [
  //       "Hands-on Practice",
  //       "Live Models",
  //       "Business Training",
  //       "Full PMU Kit Included"
  //     ],
  //     instructor: {
  //       name: "Dr. Shikha Baghi",
  //       experience: "12+ Years Experience",
  //       image: "/images/dr.png"
  //     }
  //   }
  // };

  
const courseDataMap = {
  // Permanent Makeup Courses
"permanent-makeup/masters-eyebrows": {
    title: "Master's in Permanent Makeup",

    description: "An all-inclusive masterclass covering the full spectrum of Permanent Makeup. Master the advanced techniques for eyebrows, luscious lip blush, and precision eyeliner. This course is designed to turn you into a complete PMU artist with extensive hands-on training using global standards.",

    // ✅ NEW SEO DATA ADDED
    seoTitle: "Permanent Makeup Course in Amritsar | Timeless Aesthetics",

    seoDescription: "Get safe permanent makeup in Amritsar including microblading, lip blush, eyebrow tinting and natural-looking cosmetic results.",

    metaKeywords: "permanent makeup Amritsar, microblading Amritsar, lip blush Amritsar, eyebrow microblading Amritsar, cosmetic tattoo Amritsar, semi permanent makeup Amritsar, best permanent makeup clinic Amritsar",

    duration: "10 Days",
    level: "Mastery",
    category: "Permanent Makeup",
    courseDetailImage: "/courses2/MastersinPMU.png", 

    price: "₹1,25,000",
    image: "/Masters-in-PMU.png",

    features: [
        "Full PMU kit included (Machine & Pigments)",
        "Hands-on practice on live models",
        "Mastery in Brows, Lips, and Eyeliner",
        "Advanced mapping and symmetry tools",
        "Small batch training (max 4 students)",
        "Lifetime post-training mentorship",
        "Business branding & client acquisition module"
    ],

    curriculum: [
        "Fundamental Theory of PMU",
        "Advanced Skin Anatomy & Pigment Science",
        "Eyebrows: Microblading, Ombre & Powder Brows",
        "Lips: Lip Blush, Dark Lip Correction & Full Tint",
        "Eyeliner: Classic Winged & Lash Enhancement",
        "Color Theory & Needle Cartridge Selection",
        "Sanitization and Safety Protocols",
        "Portfolio Building & Photography",
        "Business setup and legal licensing"
    ],

    requirements: [
        "Passion for the beauty and aesthetic industry",
        "No prior experience required (Beginner to Master)",
        "Steady hand and keen eye for detail",
        "Valid ID proof"
    ],

    certification: "International Master's Diploma in Permanent Makeup from Timeless Aesthetics Academy",

    instructor: {
        name: "Dr. Shikha Baghi",
        bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
        experience: "Trained 500+ professionals globally",
        image: "/images/dr.png",
        // courseDetailImage: "/courses2/MastersinPMU.png",
        courseDetailImage: "/courses2/Master class in Scalp Micropigmentation.png", 

    },

    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
},



          "permanent-makeup/master-scalp": {
            title: "Master class in Scalp Micropigmentation",
            description:
            "Specialized training in scalp micropigmentation for hair loss treatment. Learn advanced techniques to create natural-looking hair follicles and restore confidence in clients with hair loss.",
            duration: "4 Days",
            level: "Advanced",
            category: "Permanent Makeup",
            price: "₹55,000",
            image: "/images/courses-banner.jpeg",
            courseDetailImage: "/courses2/Master class in Scalp Micropigmentation.png", 
                        
            features: [
            "Advanced SMP techniques",
            "Hair loss pattern analysis",
            "Color matching expertise",
            "Client consultation skills",
            "Business development guidance",
            "Professional equipment training",
            ],
            curriculum: [
            "Scalp anatomy and hair growth",
            "Hair loss types and patterns",
            "SMP needle configurations",
            "Color theory for scalp work",
            "Client consultation process",
            "Treatment planning",
            "Aftercare protocols",
            ],
            requirements: [
            "Previous micropigmentation experience preferred",
            "Understanding of hair loss conditions",
            "Valid medical license (if applicable)",
            "Portfolio review",
            ],
            certification: "Master Certificate in Scalp Micropigmentation",
            instructor: {
            name: "Dr. Shikha Baghi",
            bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
            experience: "Trained 500+ professionals globally",
            image: "/images/dr.png", // replace with actual image
            },
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            },









          "permanent-makeup/pg-diploma": {
            title: "PG Diploma in Permanent Make up",
            description: "Comprehensive postgraduate diploma covering all aspects of permanent makeup including eyebrows, lips, eyeliner, and areola restoration. Perfect for those seeking complete expertise in the field.",
            
            

              // ✅ NEW SEO DATA ADDED
    seoTitle: "Post Graduate Diploma in Permanent Makeup in Amritsar | Timeless Aesthetics",

    seoDescription: "Enroll in a Post Graduate Diploma in Permanent Makeup in Amritsar. Learn microblading, lip blush, cosmetic tattooing with expert training & certification",

    metaKeywords: "PG Diploma in Permanent Makeup, permanent makeup course Amritsar, microblading course Amritsar, cosmetic tattoo course Amritsar, PMU training Amritsar, professional makeup certification Amritsar, semi permanent makeup course",           
            
            duration: "10 Days",
            level: "Professional",
            category: "Permanent Makeup",
            price: "₹85,000",
            image: "/images/courses-banner.jpeg",
            courseDetailImage: "/courses2/PG Diploma in PMU.png", 
            features: [
              "Complete permanent makeup training",
              "All techniques covered",
              "Business management module",
              "Marketing strategies",
              "Client management system",
              "Advanced equipment training"
            ],
            curriculum: [
              "Foundation theory",
              "Eyebrow techniques",
              "Lip micropigmentation",
              "Eyeliner application",
              "Areola restoration",
              "Color theory and mixing",
              "Business setup and management",
              "Marketing and client acquisition"
            ],
            requirements: [
              "High school diploma or equivalent",
              "Basic computer skills",
              "Valid ID and address proof",
              "Medical fitness certificate"
            ],
            certification: "Post Graduate Diploma in Permanent Makeup",
            instructor: {
              name: "Dr. Shikha Baghi",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
courseDetailImage: "/courses2/PG Diploma in PMU.png", 

              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },




   "permanent-makeup/Medical-micropigmentation": {
    title: "Medical Micropigmentation",
    description: "A specialized clinical course focusing on paramedical tattooing. This masterclass covers advanced procedures like Areola restoration, Vitiligo camouflage, Scar revision, and Scalp Micropigmentation (SMP) to help patients regain confidence after medical treatments or trauma.",
    duration: "7 Days",
    level: "Expert / Master",
    category: "Paramedical Micropigmentation",
    price: "₹85,000", 
    image: "/images/courses-banner.jpeg",
    features: [
        "Clinical safety and sterilization protocols",
        "Paramedical camouflage techniques",
        "Vitiligo & Scar revision mastery",
        "Areola reconstruction training",
        "Hands-on practice on clinical models",
        "Medical grade pigment science",
        "Lifetime clinical support"
    ],
    curriculum: [
        "Introduction to Paramedical Tattooing",
        "Skin Grafting & Burn Scar Camouflage",
        "Vitiligo Re-pigmentation Techniques",
        "Areola Reconstruction Post-Mastectomy",
        "Scalp Micropigmentation (SMP) Fundamentals",
        "Cleft Lip Shape Correction",
        "Striae (Stretch Mark) Camouflage",
        "Medical Anesthesia & Pain Management",
        "Client Psychology & Medical Consultation"
    ],
    requirements: [
        "Basic knowledge of Micropigmentation or Nursing/Cosmetology",
        "Valid Medical or Beauty Professional ID",
        "Medical clearance & steady hands",
        "Passion for restorative aesthetics"
    ],
    certification: "Master Class Diploma in Medical & Paramedical Micropigmentation",
    instructor: {
        name: "Dr. Shikha Baghi",
        bio: "International trainer with 12+ years of expertise in Medical Micropigmentation & Restorative Aesthetics.",
        experience: "Trained 500+ professionals globally in clinical PMU",
        image: "/images/dr.png",
        courseDetailImage: "/Permanent Makeup/Lip_Blush_&_Neutralization.png"
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    courseDetailImage: "/courses2/1.jpeg"
    

},



"permanent-makeup/cert-brows-lash": {
    title: "Certificate in Brows and Lash Lift",

    description: "Comprehensive training in eyebrow and eyelash lifting techniques. Learn to enhance natural brows and lashes with safe, effective lifting methods.",

    // ✅ SEO DATA ADDED
    seoTitle: "Certificate in Brows & Lash Lift in Amritsar",

    seoDescription: "Certificate in Brows and Lash Lift course in Amritsar. Learn brow lamination, lash lift techniques with professional training and certification.",

    metaKeywords: "brows and lash lift course Amritsar, brow lamination course Amritsar, lash lift training Amritsar, eyebrow shaping course Amritsar, lash lift certification Amritsar, beauty certification course Amritsar",

    duration: "2 Days",
    level: "Beginner",
    category: "Permanent Makeup",
    price: "₹25,000",
    image: "/images/courses-banner.jpeg",

    features: [
        "Brow lifting techniques",
        "Lash lift procedures",
        "Chemical safety protocols",
        "Client consultation skills",
        "Aftercare guidance",
        "Product knowledge"
    ],

    curriculum: [
        "Hair structure and growth",
        "Chemical lifting principles",
        "Brow shaping and lifting",
        "Lash lift techniques",
        "Safety protocols",
        "Client consultation",
        "Aftercare instructions"
    ],

    requirements: [
        "No prior experience required",
        "Basic understanding of beauty treatments",
        "Valid ID proof",
        "Allergy testing recommended"
    ],

    certification: "Certificate in Brows and Lash Lift",

    instructor: {
        name: "Dr. Shikha Baghi",
        bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
        experience: "Trained 500+ professionals globally",
        image: "/images/dr.png",
    },

    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
},




"permanent-makeup/cert-scalp": {
    title: "Certificate in Scalp Micropigmentation",

    description: "Foundation course in scalp micropigmentation for beginners. Learn the basics of creating natural-looking hair follicles for clients with hair loss.",

    // ✅ SEO DATA ADDED
    seoTitle: "Scalp Micropigmentation Course in Amritsar | Timeless Aesthetics",

    seoDescription: "Get certified in scalp micropigmentation training in Amritsar. Learn SMP techniques for hair density, bald spots & professional client results.",

    metaKeywords: "scalp micropigmentation course Amritsar, SMP certification Amritsar, hair tattoo course Amritsar, scalp pigmentation training Amritsar, hair density treatment course, SMP professional training",

    duration: "3 Days",
    level: "Beginner",
    category: "Permanent Makeup",
    price: "₹40,000",
    image: "/images/goo.jpg",


    features: [
        "Basic SMP techniques",
        "Hair loss understanding",
        "Client consultation basics",
        "Equipment handling",
        "Safety protocols",
        "Aftercare procedures"
    ],

    curriculum: [
        "Introduction to SMP",
        "Hair loss types",
        "Basic needle techniques",
        "Color selection",
        "Client consultation",
        "Treatment planning",
        "Aftercare protocols"
    ],

    requirements: [
        "No prior experience required",
        "Interest in hair loss solutions",
        "Valid ID proof",
        "Medical clearance"
    ],

    certification: "Certificate in Scalp Micropigmentation",

    instructor: {
        name: "Dr. Shikha Baghi",
        bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
        experience: "Trained 500+ professionals globally",
        image: "/images/dr.png",
    },

    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
},





"permanent-makeup/cert-laser-hair": {
    title: "Certificate Course in Laser Hair Reduction",

    description: "Professional training in laser hair reduction techniques. Learn safe and effective methods for permanent hair removal using advanced laser technology.",

    // ✅ SEO DATA ADDED
    seoTitle: "Laser Hair Reduction Course in Amritsar | Laser Hair Reduction",

    seoDescription: "Enroll in Laser Hair Reduction Course in Amritsar. Learn laser safety, hair removal techniques & hands-on training.",

    metaKeywords: "laser hair reduction course Amritsar, laser hair removal training Amritsar, laser technician course Amritsar, aesthetic laser course Amritsar, laser safety training Amritsar, cosmetic laser certification",

    duration: "4 Days",
    level: "Intermediate",
    category: "Permanent Makeup",
    price: "₹50,000",
    image: "/images/goo.jpg",
    courseDetailImage: "/courses2/1.jpeg",

    features: [
        "Laser technology understanding",
        "Skin type analysis",
        "Safety protocols",
        "Treatment planning",
        "Client consultation",
        "Equipment maintenance"
    ],

    curriculum: [
        "Laser physics and safety",
        "Skin types and hair colors",
        "Treatment protocols",
        "Client consultation",
        "Pre and post care",
        "Equipment operation",
        "Business aspects"
    ],

    requirements: [
        "Basic medical knowledge preferred",
        "Valid ID proof",
        "Medical clearance",
        "Understanding of skin anatomy"
    ],

    certification: "Certificate in Laser Hair Reduction",

    instructor: {
        name: "Dr. Shikha Baghi",
        bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
        experience: "Trained 500+ professionals globally",
        image: "/images/dr.png",
    },

    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
},


"permanent-makeup/cert-skin-tech": { 
    title: "Certificate Course in Lash Lift & Tint, Brow Lamination and Tint",
    description: "Master the art of eye enhancement with our specialized dual-certification course. Learn to create perfectly curled lashes and fluffy, groomed brows using professional lifting and tinting techniques that last for weeks.",
    duration: "2 Days", // In procedures ke liye 2 din ideal hain
    level: "Beginner to Intermediate",
    category: "Lash & Brow Artistry",
    price: "₹25,000", 
    image: "/images/goo.jpg",
    courseDetailImage: "/courses2/permanent makeup/Certificate Course in lash lift & tint Brow lamination and tint.png", // Added here
    features: [
        "Mastering Lash Lift & Tint",
        "Brow Lamination & Tinting expertise",
        "Eye anatomy and safety protocols",
        "Hands-on practice on live models",
        "Product chemistry and processing times",
        "Kit advice and business branding",
        "Lifetime post-training support"
    ],
    curriculum: [
        "Anatomy of the Eye and Hair Growth Cycle",
        "Client Consultation & Patch Testing",
        "Lash Lift Procedure: Step-by-Step Mastery",
        "Lash Tinting: Customizing shades for clients",
        "Brow Lamination: Mapping & Styling",
        "Brow Tinting & Shaping techniques",
        "Sanitization, Hygiene & Aftercare Protocols",
        "Client Troubleshooting & Maintenance",
        "Business setup and pricing your services"
    ],
    requirements: [
        "A keen eye for detail and steady hands",
        "Valid ID proof",
        "Interest in eye aesthetics",
        "No prior beauty experience required"
    ],
    certification: "Certificate in Professional Lash Lift, Brow Lamination & Tinting",
    instructor: {
        name: "Dr. Shikha Baghi",
        bio: "International trainer with 12+ years of expertise in Permanent Makeup, Lash & Brow Artistry.",
        experience: "Trained 500+ professionals globally",
        image: "/images/dr.png",
        courseDetailImage: "/courses2/Certificate Course in lash lift & tint Brow lamination and tint.png" // Added here as well
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
},








"permanent-makeup/Medical-Micropigmentation": { 
    title: "Certificate Course in Lash Lift & Tint, Brow Lamination and Tint",
    description: "Master the art of eye enhancement with our specialized dual-certification course. Learn to create perfectly curled lashes and fluffy, groomed brows using professional lifting and tinting techniques that last for weeks.",
    duration: "2 Days", // In procedures ke liye 2 din ideal hain
    level: "Beginner to Intermediate",
    category: "Lash & Brow Artistry",
    price: "₹25,000", 
    image: "/images/goo.jpg",
    courseDetailImage: "/courses2/1.jpeg", // Added here
    features: [
        "Mastering Lash Lift & Tint",
        "Brow Lamination & Tinting expertise",
        "Eye anatomy and safety protocols",
        "Hands-on practice on live models",
        "Product chemistry and processing times",
        "Kit advice and business branding",
        "Lifetime post-training support"
    ],
    curriculum: [
        "Anatomy of the Eye and Hair Growth Cycle",
        "Client Consultation & Patch Testing",
        "Lash Lift Procedure: Step-by-Step Mastery",
        "Lash Tinting: Customizing shades for clients",
        "Brow Lamination: Mapping & Styling",
        "Brow Tinting & Shaping techniques",
        "Sanitization, Hygiene & Aftercare Protocols",
        "Client Troubleshooting & Maintenance",
        "Business setup and pricing your services"
    ],
    requirements: [
        "A keen eye for detail and steady hands",
        "Valid ID proof",
        "Interest in eye aesthetics",
        "No prior beauty experience required"
    ],
    certification: "Certificate in Professional Lash Lift, Brow Lamination & Tinting",
    instructor: {
        name: "Dr. Shikha Baghi",
        bio: "International trainer with 12+ years of expertise in Permanent Makeup, Lash & Brow Artistry.",
        experience: "Trained 500+ professionals globally",
        image: "/images/dr.png",
        courseDetailImage: "/courses2/1.jpeg"
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
},

// Cosmetology Courses
"cosmetology/master-chemical-peels": {
  title: "Certificate in Professional Cosmetology",

  description: "A comprehensive professional program covering the fundamentals and advanced techniques of skin care, hair treatments, and makeup artistry. Designed for aspiring beauty professionals to master the art and science of aesthetics.",

  // ✅ SEO DATA ADDED
  seoTitle: "Professional Cosmetology Course in Amritsar | Timeless Aesthetics",

  seoDescription: "Join a Professional Cosmetology course in Amritsar. Learn skincare, lasers, makeup & advanced aesthetic treatments with certification.",

  metaKeywords: "professional cosmetology course Amritsar, cosmetology course Amritsar, aesthetic cosmetology training Amritsar, skin and laser course Amritsar, beauty and cosmetology certification, cosmetologist course Amritsar",

  duration: "3 Months",
  level: "Beginner to Intermediate",
  category: "Cosmetology",
  price: "₹1,20,000",
  image: "/images/goo.jpg",
  courseDetailImage: "/courses2/cosmotolgy/1.png",

  features: [
      "Hands-on training in skin & hair care",
      "Advanced facial & chemical peel techniques",
      "Professional makeup & styling basics",
      "Client management & salon ethics",
      "Product chemistry & skin anatomy",
      "Internship opportunities"
  ],

  curriculum: [
      "Introduction to Cosmetology & Skin Science",
      "Deep Cleansing & Advanced Facials",
      "Chemical Peels & Skin Rejuvenation",
      "Hair Structure, Cutting & Coloring",
      "Basic to Bridal Makeup Artistry",
      "Manicure, Pedicure & Nail Art",
      "Sterilization & Clinical Safety",
      "Business Management for Beauty Professionals"
  ],

  requirements: [
      "Minimum 10th or 12th Standard education",
      "Passion for the beauty & wellness industry",
      "Valid ID proof",
      "No prior experience required"
  ],

  certification: "Professional Certificate in Cosmetology",

  instructor: {
      name: "Dr. Shikha Baghi",
      bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
      experience: "Trained 500+ professionals globally",
      image: "/images/dr.png",
      courseDetailImage: "/courses2/cosmotolgy/1.png"
  },

  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
},








"cosmetology/diploma-advanced": {
    title: "Diploma in Cosmetology",

    description: "A comprehensive diploma program designed to master the fundamentals and advanced techniques of cosmetology. This course covers clinical skin treatments, hair aesthetics, and professional beauty management to prepare you for a global career.",

    // ✅ SEO DATA ADDED
    seoTitle: "Diploma in Cosmetology Course in Amritsar | Timeless Aesthetics",

    seoDescription: "Enroll in a Diploma in Cosmetology in Amritsar. Learn skincare, lasers, makeup and advanced aesthetic treatments with certification.",

    metaKeywords: "diploma in cosmetology Amritsar, cosmetology course Amritsar, beauty and cosmetology diploma, aesthetic cosmetology training Amritsar, skin and laser course Amritsar, cosmetologist course Amritsar",

    duration: "6 Months",
    level: "Professional",
    category: "Cosmetology",
    price: "₹1,20,000",
    image: "/images/goo.jpg",
    courseDetailImage: "/courses2/cosmotolgy/2.png",

    features: [
        "In-depth cosmetology training",
        "Clinical & aesthetic treatment techniques",
        "Business management & salon ethics",
        "Advanced client consultation skills",
        "Comprehensive product & chemical knowledge",
        "Extensive practical & hands-on experience"
    ],

    curriculum: [
        "Advanced Skin Anatomy & Physiology",
        "Clinical Facial & Extraction Techniques",
        "Chemical Peels & Skin Resurfacing",
        "Microdermabrasion & Skin Polishing",
        "LED Light Therapy & Electrotherapy",
        "Hair Analysis & Advanced Styling",
        "Salon Operations & Business Management",
        "Professional Marketing & Social Media for Therapists"
    ],

    requirements: [
        "High school diploma (10th or 12th)",
        "Basic understanding of the beauty industry",
        "Valid ID proof",
        "Passion for aesthetic excellence"
    ],

    certification: "Diploma in Cosmetology",

    instructor: {
        name: "Dr. Shikha Baghi",
        bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
        experience: "Trained 500+ professionals globally",
        image: "/images/dr.png",
        courseDetailImage: "/courses2/cosmotolgy/2.png"
    },

    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
},





"cosmetology/cert-professional": {
    title: "Certificate in Professional Cosmetology",

    description: "Professional certification in cosmetology covering essential skin care treatments, facial techniques, and client consultation skills.",

    // ✅ SEO DATA ADDED
    seoTitle: "Professional Cosmetology Classes in Amritsar | Timeless Aesthetics",

    seoDescription: "Join professional cosmetology classes in Amritsar. Learn skincare, lasers, makeup & advanced aesthetic treatments with certification.",

    metaKeywords: "professional cosmetology classes Amritsar, cosmetology classes Amritsar, beauty and cosmetology training Amritsar, skin and laser classes Amritsar, aesthetic cosmetology course Amritsar, cosmetologist training Amritsar",

    duration: "3 Months",
    level: "Professional",
    category: "Cosmetology",
    price: "₹75,000",
    image: "/images/goo.jpg",

    features: [
        "Professional skin care training",
        "Facial treatment techniques",
        "Client consultation skills",
        "Product knowledge",
        "Safety protocols",
        "Business basics"
    ],

    curriculum: [
        "Skin anatomy and types",
        "Facial treatment protocols",
        "Product selection and application",
        "Client consultation",
        "Safety and hygiene",
        "Business fundamentals"
    ],

    requirements: [
        "High school education",
        "Interest in beauty industry",
        "Valid ID proof",
        "Medical clearance"
    ],

    certification: "Professional Certificate in Cosmetology",

    instructor: {
        name: "Dr. Shikha Baghi",
        bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
        experience: "Trained 500+ professionals globally",
        image: "/images/dr.png"
    },

    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
},



"cosmetology/cert-hydrafacial": {
    title: "Certificate Course in Medicated Hydrafacial",

    description: "Specialized training in medicated HydraFacial treatments. Learn to customize treatments for various skin concerns using advanced HydraFacial technology.",

    // ✅ SEO DATA ADDED
    seoTitle: "Medicated Hydrafacial Training in Amritsar | Timeless Aesthetics",

    seoDescription: "Join best medicated Hydrafacial training in Amritsar. Learn advanced Hydrafacial techniques, skin protocols & hands-on clinical training.",

    metaKeywords: "medicated Hydrafacial training Amritsar, Hydrafacial course Amritsar, advanced Hydrafacial training Amritsar, skin treatment training Amritsar, aesthetic facial course Amritsar, Hydrafacial certification",

    duration: "2 Days",
    level: "Intermediate",
    category: "Cosmetology",
    price: "₹30,000",
    image: "/assets/courses/permanent-cosmetology.jpg",

    features: [
        "HydraFacial technology training",
        "Medicated treatment protocols",
        "Skin analysis techniques",
        "Client consultation",
        "Equipment operation",
        "Aftercare procedures"
    ],

    curriculum: [
        "HydraFacial technology",
        "Medicated serums and protocols",
        "Skin analysis and treatment selection",
        "Equipment operation and maintenance",
        "Client consultation",
        "Aftercare and follow-up"
    ],

    requirements: [
        "Basic skin care knowledge",
        "Valid ID proof",
        "Medical clearance",
        "Equipment training completion"
    ],

    certification: "Certificate in Medicated HydraFacial",

    instructor: {
        name: "Dr. Shikha Baghi",
        bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
        experience: "Trained 500+ professionals globally",
        image: "/images/dr.png"
    },

    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
},

          
"cosmetology/cert-chemical-peels": {
    title: "Certificate Courses in Chemical Peels",

    description: "Foundation course in chemical peel treatments. Learn safe and effective methods for performing various types of chemical peels.",

    // ✅ SEO DATA ADDED
    seoTitle: "Chemical Peels Course in Amritsar | Timeless Aesthetics",

    seoDescription: "Enroll in a Chemical Peels course in Amritsar. Learn superficial to advanced peels, skin protocols & hands-on clinical training.",

    metaKeywords: "chemical peels course Amritsar, skin peel training Amritsar, aesthetic skin course Amritsar, chemical peel certification, dermatology peel training Amritsar, advanced facial peel course",

    duration: "2 Days",
    level: "Beginner",
    category: "Cosmetology",
    price: "₹25,000",
    image: "/images/goo.jpg",

    features: [
        "Chemical peel basics",
        "Safety protocols",
        "Skin type analysis",
        "Treatment selection",
        "Client consultation",
        "Aftercare procedures"
    ],

    curriculum: [
        "Introduction to chemical peels",
        "Skin anatomy and types",
        "Peel types and selection",
        "Safety protocols",
        "Application techniques",
        "Client consultation",
        "Aftercare procedures"
    ],

    requirements: [
        "No prior experience required",
        "Valid ID proof",
        "Medical clearance",
        "Interest in skin treatments"
    ],

    certification: "Certificate in Chemical Peels",

    instructor: {
        name: "Dr. Shikha Baghi",
        bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
        experience: "Trained 500+ professionals globally",
        image: "/images/dr.png"
    },

    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
},


          // Facial Aesthetics Courses
          "facial-aesthetics/medical": {
            title: "Masters in Medical Aesthetics",
            description: "Comprehensive master's program in facial aesthetics covering all aspects of non-surgical facial treatments including injectables, threads, and advanced techniques.",
            duration: "6 Months",
            level: "Master's",
            category: "Medical Aesthetics",
            price: "₹2,50,000",
            image: "/images/goo.jpg",
            courseDetailImage: "/courses2/aesthetic.jpeg",
            features: [
              "Complete facial aesthetics training",
              "Advanced injection techniques",
              "Thread lift procedures",
              "Business management",
              "Clinical experience",
              "Mentorship program"
            ],
            curriculum: [
              "Facial anatomy and aging",
              "Injectable treatments (Botox, Fillers)",
              "Thread lift techniques",
              "Advanced procedures",
              "Client consultation and assessment",
              "Business management and marketing",
              "Clinical practice and supervision"
            ],
            requirements: [
              "Medical degree or equivalent",
              "Valid medical license",
              "Previous aesthetic experience preferred",
              "Portfolio review"
            ],
            certification: "Master's Degree in Facial Aesthetics",
            instructor: {
              name: "Dr. Shikha Baghi",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },




          

        "facial-aesthetics/masters": {
  title: "Masters in Facial Aesthetics",

  description:
    "Comprehensive master's program in facial aesthetics covering all aspects of non-surgical facial treatments including injectables, threads, and advanced techniques.",

  // ✅ SEO FIELDS ADDED
  seoTitle:
    "Masters in Facial Aesthetics Course in Amritsar | Timeless Aesthetics",

  seoDescription:
    "Advance your career with a Masters in Facial Aesthetics in Amritsar. Learn Botox, dermal fillers, thread lifts, and non-surgical skin treatments to deliver safe and natural results.",

  metaKeywords:
    "Masters in Facial Aesthetics Amritsar, Botox training Amritsar, filler course Amritsar, non surgical facial course, aesthetic medicine training Punjab, dermal filler training Amritsar",

  slug: "masters-in-facial-aesthetics",

  duration: "6 Months",
  level: "Master's",
  category: "Facial Aesthetics",
  price: "₹2,50,000",

  image: "/images/goo.jpg",
  courseDetailImage: "/courses2/facial-ashtetic.jpeg",

  // Optional: add this for right-side poster

  features: [
    "Complete facial aesthetics training",
    "Advanced injection techniques",
    "Thread lift procedures",
    "Business management",
    "Clinical experience",
    "Mentorship program",
  ],

  curriculum: [
    "Facial anatomy and aging",
    "Injectable treatments (Botox, Fillers)",
    "Thread lift techniques",
    "Advanced procedures",
    "Client consultation and assessment",
    "Business management and marketing",
    "Clinical practice and supervision",
  ],

  requirements: [
    "Medical degree or equivalent",
    "Valid medical license",
    "Previous aesthetic experience preferred",
    "Portfolio review",
  ],

  certification: "Master's Degree in Facial Aesthetics",

  instructor: {
    name: "Dr. Shikha Baghi",
    bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
    experience: "Trained 500+ professionals globally",
    image: "/images/dr.png",
  },

  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
},






          
"facial-aesthetics/master-lipolytic": {
  title: "Master Class in Lipolytic Injections",

  description:
    "Join a Master Class in Lipolytic Injections and learn safe fat-dissolving techniques for body contouring and non-surgical aesthetic treatments. Gain hands-on training in advanced injectable protocols with expert supervision.",

  // ✅ SEO FIELDS ADDED
  seoTitle:
    "Master Class in Lipolytic Injections | Fat Dissolving Injection Training",

  seoDescription:
    "Join a Master Class in Lipolytic Injections and learn safe fat-dissolving techniques for body contouring and non-surgical aesthetic treatments.",

  metaKeywords:
    "lipolytic injections course, fat dissolving injections training, body contouring course, aesthetic medicine training, non surgical fat reduction, mesotherapy fat reduction, cosmetic injectable training, aesthetic practitioner course",

  slug: "master-class-lipolytic-injections",

  duration: "3 Days",
  level: "Advanced",
  category: "Facial Aesthetics",
  price: "₹60,000",
  image: "/images/goo.jpg",
  courseDetailImage: "/courses2/lipo.jpeg",

  features: [
    "Advanced lipolytic techniques",
    "Anatomy and safety protocols",
    "Treatment planning",
    "Client consultation",
    "Complication management",
    "Business development"
  ],

  curriculum: [
    "Fat anatomy and physiology",
    "Lipolytic agents and mechanisms",
    "Injection techniques and protocols",
    "Treatment planning and assessment",
    "Safety protocols and complications",
    "Client consultation and consent"
  ],

  requirements: [
    "Medical degree required",
    "Valid medical license",
    "Previous injection experience",
    "Portfolio review"
  ],

  certification: "Master Certificate in Lipolytic Injections",

  instructor: {
    name: "Dr. Shikha Baghi",
    bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
    experience: "Trained 500+ professionals globally",
    image: "/images/dr.png",
  },

  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
},




"facial-aesthetics/master-nose": {
  title: "Master Class in Nose Correction",

  description:
    "Join a Master Class in Nose Correction and learn non-surgical rhinoplasty techniques using dermal fillers for safe, precise aesthetic results. This advanced training helps you master liquid rhinoplasty with hands-on clinical practice.",

  // ✅ SEO FIELDS ADDED
  seoTitle:
    "Master Class in Nose Correction | Non-Surgical Rhinoplasty Training",

  seoDescription:
    "Join a Master Class in Nose Correction and learn non-surgical rhinoplasty techniques using dermal fillers for safe, precise aesthetic results.",

  metaKeywords:
    "nose correction course, non surgical rhinoplasty training, liquid rhinoplasty course, dermal fillers nose shaping, aesthetic medicine training, facial contouring course, cosmetic injectable training",

  slug: "master-class-nose-correction",

  duration: "2 Days",
  level: "Advanced",
  category: "Facial Aesthetics",
  price: "₹45,000",
  image: "/images/goo.jpg",
  courseDetailImage: "/courses2/non-surgical.jpeg",

  features: [
    "Non-surgical nose correction",
    "Advanced dermal filler techniques",
    "Detailed nasal anatomy & vascular safety",
    "Treatment planning and facial harmony analysis",
    "Client consultation and case selection",
    "Complication management protocols"
  ],

  curriculum: [
    "Nose anatomy and vascular danger zones",
    "Dermal filler rheology and product selection",
    "Liquid rhinoplasty injection techniques",
    "Mapping and reshaping strategies",
    "Safety and complication management",
    "Client consultation and informed consent"
  ],

  requirements: [
    "Medical degree required",
    "Valid medical license",
    "Previous dermal filler experience",
    "Portfolio review"
  ],

  certification: "Master Certificate in Non-Surgical Nose Correction",

  instructor: {
    name: "Dr. Shikha Baghi",
    bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
    experience: "Trained 500+ professionals globally",
    image: "/images/dr.png",
  },

  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
},





          "facial-aesthetics/master-acne": {
            title: "Master Class In Acne Scar Treatment",
            description: "Advanced training in acne scar treatment using various techniques including lasers, microneedling, and chemical peels for optimal scar reduction.",
            duration: "3 Days",
            courseDetailImage: "/courses2/acne-scar.jpeg",
            level: "Advanced",
            category: "Facial Aesthetics",
            price: "₹50,000",
            image: "/images/goo.jpg",
            features: [
              "Advanced scar treatment techniques",
              "Multiple treatment modalities",
              "Treatment planning",
              "Client consultation",
              "Safety protocols",
              "Results optimization"
            ],
            curriculum: [
              "Acne scar types and classification",
              "Laser treatments for scars",
              "Microneedling techniques",
              "Chemical peel protocols",
              "Combination treatments",
              "Treatment planning and assessment"
            ],
            requirements: [
              "Medical degree or equivalent",
              "Previous aesthetic experience",
              "Valid medical license",
              "Portfolio review"
            ],
            certification: "Master Certificate in Acne Scar Treatment",
            instructor: {
              name: "Dr. Shikha Baghi",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          "facial-aesthetics/master-plasma": {
            title: "Masters Class in Plasma Pen",
            description: "Comprehensive training in plasma pen technology for skin tightening, scar treatment, and skin rejuvenation. Learn advanced techniques for optimal results.",
            duration: "2 Days",
            level: "Advanced",
            category: "Facial Aesthetics",
            price: "₹40,000",
            image: "/images/goo.jpg",
            courseDetailImage: "/courses2/plasma-pen.jpeg",
            features: [
              "Plasma pen technology training",
              "Advanced treatment techniques",
              "Safety protocols",
              "Client consultation",
              "Treatment planning",
              "Aftercare procedures"
            ],
            curriculum: [
              "Plasma pen technology and principles",
              "Treatment protocols and techniques",
              "Safety protocols and precautions",
              "Client consultation and assessment",
              "Treatment planning",
              "Aftercare and healing process"
            ],
            requirements: [
              "Medical degree or equivalent",
              "Previous aesthetic experience",
              "Valid medical license",
              "Equipment training completion"
            ],
            certification: "Master Certificate in Plasma Pen Treatment",
            instructor: {
              name: "Dr. Shikha Baghi",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          "facial-aesthetics/master-undereye": {
            title: "Master class in Under eye rejuvenation",
            description: "Specialized training in under-eye rejuvenation techniques including fillers, PRP, and advanced treatments for dark circles, bags, and fine lines.",
            duration: "2 Days",
            level: "Advanced",
            category: "Facial Aesthetics",
            price: "₹45,000",
            image: "/images/goo.jpg",
            courseDetailImage: "/courses2/under-eye.jpeg",
            features: [
              "Under-eye anatomy and aging",
              "Advanced treatment techniques",
              "Safety protocols",
              "Client consultation",
              "Treatment planning",
              "Complication management"
            ],
            curriculum: [
              "Under-eye anatomy and aging process",
              "Treatment options and selection",
              "Injection techniques and protocols",
              "Safety protocols and complications",
              "Client consultation and assessment",
              "Treatment planning and follow-up"
            ],
            requirements: [
              "Medical degree required",
              "Valid medical license",
              "Previous injection experience",
              "Portfolio review"
            ],
            certification: "Master Certificate in Under-eye Rejuvenation",
            instructor: {
              name: "Dr. Shikha Baghi",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          "facial-aesthetics/master-fillers": {
            title: "Master class in Lip Fillers",
            description: "Advanced training in lip augmentation using dermal fillers. Learn to create natural-looking, beautiful lips with safe and effective techniques.",
            duration: "2 Days",
            level: "Advanced",
            category: "Facial Aesthetics",
            price: "₹40,000",
            image: "/images/goo.jpg",
            courseDetailImage: "/courses2/lips.jpeg",
            features: [
              "Advanced lip filler techniques",
              "Anatomy and safety protocols",
              "Treatment planning",
              "Client consultation",
              "Complication management",
              "Results optimization"
            ],
            curriculum: [
              "Lip anatomy and structure",
              "Filler selection and techniques",
              "Treatment planning and assessment",
              "Injection protocols and safety",
              "Client consultation and consent",
              "Complications and management"
            ],
            requirements: [
              "Medical degree required",
              "Valid medical license",
              "Previous filler experience",
              "Portfolio review"
            ],
            certification: "Master Certificate in Lip Fillers",
            instructor: {
              name: "Dr. Shikha Baghi",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          "facial-aesthetics/pg-diploma": {
            title: "PG Diploma in Facial Aesthetics",
            description: "Comprehensive postgraduate diploma in facial aesthetics covering all non-surgical treatments including injectables, threads, and advanced procedures.",
            duration: "4 Months",
            level: "Post Graduate",
            category: "Facial Aesthetics",
            price: "₹1,80,000",
            image: "/images/goo.jpg",
            courseDetailImage: "/courses2/PG-Diploma-in-Facial-Aesthetics.jpeg",
            features: [
              "Complete facial aesthetics training",
              "Advanced injection techniques",
              "Thread lift procedures",
              "Business management",
              "Clinical experience",
              "Mentorship program"
            ],
            curriculum: [
              "Facial anatomy and aging",
              "Injectable treatments",
              "Thread lift techniques",
              "Advanced procedures",
              "Client consultation",
              "Business management",
              "Clinical practice"
            ],
            requirements: [
              "Medical degree or equivalent",
              "Valid medical license",
              "Previous aesthetic experience preferred",
              "Portfolio review"
            ],
            certification: "Post Graduate Diploma in Facial Aesthetics",
            instructor: {
              name: "Dr. Shikha Baghi",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          "facial-aesthetics/cert-lipolytic": {
            title: "Certificate Course in Lipolytic Injections",
            description: "Foundation course in lipolytic injection techniques for fat reduction. Learn safe and effective methods for non-surgical body contouring.",
            duration: "2 Days",
            level: "Intermediate",
            category: "Facial Aesthetics",
            price: "₹45,000",
            image: "/images/goo.jpg",
            courseDetailImage: "/courses2/lipo.jpeg",
            features: [
              "Basic lipolytic techniques",
              "Anatomy and safety",
              "Treatment protocols",
              "Client consultation",
              "Safety procedures",
              "Aftercare protocols"
            ],
            curriculum: [
              "Fat anatomy and physiology",
              "Lipolytic agents and mechanisms",
              "Basic injection techniques",
              "Safety protocols",
              "Client consultation",
              "Aftercare procedures"
            ],
            requirements: [
              "Medical degree required",
              "Valid medical license",
              "Basic injection experience",
              "Medical clearance"
            ],
            certification: "Certificate in Lipolytic Injections",
            instructor: {
              name: "Dr. Shikha Baghi",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          // Fellowship Courses
          "fellowship/permanent-cosmetology": {
            title: "Fellowship in Permanent Make up and Cosmetology",
            description: "Comprehensive fellowship program combining permanent makeup and cosmetology training. Perfect for those seeking expertise in both fields.",
            duration: "8 Months",
            level: "Fellowship",
            category: "Fellowship Courses",
            price: "₹2,00,000",
            image: "/images/goo.jpg",
            courseDetailImage: "/courses2/fellowship.jpeg",
            features: [
              "Complete permanent makeup training",
              "Advanced cosmetology techniques",
              "Business management",
              "Clinical experience",
              "Mentorship program",
              "Research opportunities"
            ],
            curriculum: [
              "Permanent makeup techniques",
              "Advanced cosmetology",
              "Business management",
              "Client consultation",
              "Clinical practice",
              "Research methodology"
            ],
            requirements: [
              "High school diploma or equivalent",
              "Previous beauty industry experience preferred",
              "Valid ID proof",
              "Medical clearance"
            ],
            certification: "Fellowship in Permanent Makeup and Cosmetology",
            instructor: {
              name: "Dr. Shikha Baghi",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          "fellowship/facial-permanent-cosmetology": {
            title: "Fellowship in Facial Aesthetics, Permanent Make up & Cosmetology",
            description: "Comprehensive fellowship covering facial aesthetics, permanent makeup, and cosmetology. The ultimate program for complete aesthetic expertise.",
            duration: "12 Months",
            level: "Fellowship",
            category: "Fellowship Courses",
            price: "₹3,50,000",
            image: "/images/goo.jpg",
            courseDetailImage: "/courses2/Fellowship-in-Facial-Aesthetics.jpeg",
            features: [
              "Complete aesthetic training",
              "All three specialties covered",
              "Advanced business management",
              "Clinical experience",
              "Research opportunities",
              "Mentorship program"
            ],
            curriculum: [
              "Facial aesthetics techniques",
              "Permanent makeup procedures",
              "Advanced cosmetology",
              "Business management",
              "Clinical practice",
              "Research and development"
            ],
            requirements: [
              "Medical degree or equivalent",
              "Valid medical license",
              "Previous aesthetic experience",
              "Portfolio review"
            ],
            certification: "Fellowship in Facial Aesthetics, Permanent Makeup & Cosmetology",
            instructor: {
              name: "Dr. Shikha Baghi",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          "fellowship/facial-aesthetics": {
            title: "Fellowship in Facial Aesthetics",
            description: "Advanced fellowship program in facial aesthetics covering all non-surgical treatments and advanced procedures for comprehensive expertise.",
            duration: "6 Months",
            level: "Fellowship",
            category: "Fellowship Courses",
            price: "₹2,80,000",
            image: "/images/goo.jpg",
            courseDetailImage: "/courses2/fellowship.jpeg",
            features: [
              "Advanced facial aesthetics training",
              "All injection techniques",
              "Thread lift procedures",
              "Business management",
              "Clinical experience",
              "Research opportunities"
            ],
            curriculum: [
              "Advanced facial anatomy",
              "Injectable treatments",
              "Thread lift techniques",
              "Advanced procedures",
              "Business management",
              "Clinical practice"
            ],
            requirements: [
              "Medical degree required",
              "Valid medical license",
              "Previous aesthetic experience",
              "Portfolio review"
            ],
            certification: "Fellowship in Facial Aesthetics",
            instructor: {
              name: "Dr. Shikha Baghi",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          "fellowship/permanent-micropigmentation": {
            title: "Fellowship in Permanent Make up & Cosmetology, Medical Micropigmentation , Plasma Pen",
            description: "Comprehensive fellowship combining permanent makeup, cosmetology, medical micropigmentation, and plasma pen techniques for complete expertise.",
            duration: "10 Months",
            level: "Fellowship",
            category: "Fellowship Courses",
            price: "₹3,00,000",
            image: "/images/goo.jpg",
            courseDetailImage: "/courses2/fellowship.jpeg",
            features: [
              "Complete permanent makeup training",
              "Advanced cosmetology",
              "Medical micropigmentation",
              "Plasma pen technology",
              "Business management",
              "Clinical experience"
            ],
            curriculum: [
              "Permanent makeup techniques",
              "Advanced cosmetology",
              "Medical micropigmentation",
              "Plasma pen procedures",
              "Business management",
              "Clinical practice"
            ],
            requirements: [
              "Medical degree or equivalent",
              "Valid medical license",
              "Previous aesthetic experience",
              "Portfolio review"
            ],
            certification: "Fellowship in Permanent Makeup, Cosmetology, Medical Micropigmentation & Plasma Pen",
            instructor: {
              name: "Dr. Shikha Baghi",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          "fellowship/facial-permanent-micropigmentation": {
            title: "Fellowship in Facial Aesthetics, Permanent Make up & Cosmetology, Medical Micropigmentation , Plasma Pen",
            description: "The ultimate fellowship program covering all aspects of aesthetic medicine including facial aesthetics, permanent makeup, cosmetology, medical micropigmentation, and plasma pen techniques.",
            duration: "15 Months",
            level: "Fellowship",
            category: "Fellowship Courses",
            price: "₹4,50,000",
            image: "/images/goo.jpg",
            courseDetailImage: "/courses2/fellowship.jpeg",
            features: [
              "Complete aesthetic training",
              "All specialties covered",
              "Advanced business management",
              "Clinical experience",
              "Research opportunities",
              "Mentorship program"
            ],
            curriculum: [
              "Facial aesthetics techniques",
              "Permanent makeup procedures",
              "Advanced cosmetology",
              "Medical micropigmentation",
              "Plasma pen technology",
              "Business management",
              "Clinical practice",
              "Research methodology"
            ],
            requirements: [
              "Medical degree required",
              "Valid medical license",
              "Previous aesthetic experience",
              "Portfolio review"
            ],
            certification: "Fellowship in Facial Aesthetics, Permanent Makeup, Cosmetology, Medical Micropigmentation & Plasma Pen",
            instructor: {
              name: "Dr. Shikha Baghi",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },

          "laser-practice/laser-practice-page1": {
  title: "Certificate in Advanced Laser Treatments and Skin Rejuvenation",
  description: "Learn the art and science of advanced laser treatments for skin rejuvenation, hair reduction, and pigmentation correction from top industry experts.",
  duration: "6 Months",
  level: "Certificate",
  category: "Laser Practice Courses",
  price: "₹1,80,000",
  image: "/images/laser1.jpg",
  courseDetailImage: "/courses2/laser1.jpeg",
  
  features: [
    "Hands-on laser training",
    "Skin rejuvenation techniques",
    "Laser safety certification",
    "Case-based learning",
    "Industry-standard equipment usage"
  ],
  curriculum: [
    "Introduction to laser technology",
    "Skin anatomy and laser interaction",
    "Hair reduction treatments",
    "Pigmentation and tattoo removal",
    "Laser facial rejuvenation",
    "Post-procedure care"
  ],
  requirements: [
    "Basic cosmetology knowledge",
    "Minimum 12th pass (Science preferred)",
    "Interest in laser and skin treatments"
  ],
  certification: "Certificate in Advanced Laser Treatments & Skin Rejuvenation",
  instructor: {
    name: "Dr. Shikha Baghi",
    bio: "Dermatologist and Laser Specialist with 10+ years of clinical experience in advanced laser techniques.",
    experience: "Trained over 300 professionals across India",
    image: "/images/22.png",
    courseDetailImage: "/courses2/1.jpeg", // New Image Path
  },
  videoUrl: "https://www.youtube.com/embed/Cz3b8x6X1Vw"
  },



  "laser-practice/laser-practice-page2": {
    title: "Professional Diploma in Aesthetic Laser and Light-Based Therapies",
    description: "A complete diploma course designed for medical and beauty professionals to master aesthetic laser and light-based treatments.",
    duration: "12 Months",
    level: "Diploma",
    category: "Laser Practice Courses",
    price: "₹2,80,000",
    image: "/images/laser2.jpg",
    courseDetailImage: "/courses2/laser2.jpeg",
    features: [
      "Comprehensive laser training",
      "Light-based treatment modules",
      "Hands-on clinical sessions",
      "Certification recognized by top academies",
      "Real case studies"
    ],
    curriculum: [
      "Laser physics and safety protocols",
      "Hair and skin laser applications",
      "Fractional laser resurfacing",
      "Photo facial and LED therapy",
      "Laser tattoo and scar revision",
      "Business setup & client handling"
    ],
    requirements: [
      "Medical or beauty professional background",
      "Basic computer knowledge",
      "Interest in aesthetic procedures"
    ],
    certification: "Professional Diploma in Aesthetic Laser & Light-Based Therapies",
    instructor: {
      name: "Dr. Shikha Baghi",
      bio: "Certified Laser and Aesthetic Medicine Specialist with 8+ years of experience in laser-based skin therapies.",
      experience: "Conducted 200+ workshops on aesthetic laser treatments",
      image: "/images/dr.png",
      courseDetailImage: "/courses2/1.jpeg", // New Image Path

    },
    videoUrl: "https://www.youtube.com/embed/dJRS8i3j8Fk"
  }
  
  ,
  };

  useEffect(() => {
    const rawPath = decodeURIComponent(location.pathname);
    let coursePath = rawPath.replace(/^\/+|\/+$/g, "").replace("courses/", "");
    const course = courseDataMap[coursePath];
    if (course) {
      setCourseData(course);
      document.title = course.title;
    }
    setLoading(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (loading) return <div className="h-screen flex items-center justify-center bg-[#0A0A0A] text-[#C8A43F]">Loading...</div>;
  if (!courseData) return <div className="h-screen flex items-center justify-center text-white bg-[#0A0A0A]">Course Not Found</div>;

  return (
    <div className="min-h-screen font-sans">
      <Nav />

      {/* --- LAYER 1: PURE BLACK HEADER Area --- */}
      <div className="bg-[#0A0A0A] pt-24 pb-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-[2px]">
            <span>Home</span>
            <span>/</span>
            <span>Courses</span>
            <span>/</span>
            <span className="text-gray-300">{courseData.title}</span>
          </div>
        </div>
      </div>





      {/* --- LAYER 2: MATTE GRAY HERO (#111414) --- */}
      <section className="bg-[#111414] py-16 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT CONTENT */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-[#C8A43F] font-bold text-lg italic tracking-wide">
                Welcome to @Timeless-Studio Family
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                {courseData.title} <br/>
              </h1>

              <div className="flex flex-wrap gap-6 py-4">
                <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <Zap size={16} className="text-[#C8A43F]" />
                  <span className="text-xs font-bold uppercase tracking-wider">Intensive Training</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <Globe size={16} className="text-[#C8A43F]" />
                  <span className="text-xs font-bold uppercase tracking-wider">Hindi / English</span>
                </div>
                <div className="flex items-center gap-1 text-[#C8A43F] px-4 py-2">
                  <span className="font-bold mr-1 italic">4.9</span>
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE (Flyer starts here and overlaps with Layer 3) */}
            <div className="lg:col-span-5 relative z-30">
              <div className="lg:absolute top-0 w-full bg-[#1A1A1A] rounded-[2rem] border border-gray-800 shadow-2xl overflow-hidden p-6">
                <div className="rounded-2xl overflow-hidden border border-white/10 mb-8">
                  <img 
                    src={courseData.courseDetailImage} 
                    alt="Course Flyer" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-[10px] uppercase font-bold tracking-[2px]">Investment Details</span>
                    <span className="text-white text-3xl font-black uppercase">Enquire For Fees</span>
                  </div>




<button
onClick={() => navigate("/contact#contact-form")}
className="w-full bg-gradient-to-r from-[#C8A43F] to-[#B8932F] text-black font-black py-5 rounded-2xl text-sm transition-all hover:scale-[1.02] shadow-xl shadow-[#C8A43F]/10 uppercase tracking-[2px]"
>
  Enroll Now <ArrowRight size={20} className="inline ml-2" />
</button>
                 
                 
                 
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                    {courseData.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase">
                        <CheckCircle size={14} className="text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>










      {/* --- LAYER 3: CLEAN WHITE MAIN SECTION --- */}
      <section className="bg-white py-24 min-h-[500px]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* ABOUT CONTENT (Stays White) */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-8">
                <h2 className="text-4xl font-black text-[#1A1A1A] uppercase tracking-tighter italic flex items-center gap-4">
                  About Course
                  <div className="h-1 flex-1 bg-gradient-to-r from-[#C8A43F] to-transparent opacity-30"></div>
                </h2>
                <p className="text-gray-600 text-xl leading-relaxed font-medium">
                  {courseData.description}
                </p>
              </div>

              {/* INSTRUCTOR SUB-SECTION */}
              <div className="bg-[#FAF9F6] p-10 rounded-[2.5rem] flex flex-col sm:flex-row items-center gap-8 border border-gray-100">
                <img 
                  src={courseData.instructor.image} 
                  className="w-32 h-32 rounded-full object-cover border-2 border-[#C8A43F] shadow-lg" 
                  alt="Instructor" 
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-black text-[#1A1A1A] uppercase tracking-tighter">{courseData.instructor.name}</h3>
                  <p className="text-[#C8A43F] font-bold text-sm mb-4 uppercase tracking-widest">{courseData.instructor.experience}</p>
                  <p className="text-gray-500 italic max-w-md leading-relaxed">
                    "Leading the industry with decade-long expertise. We don't just teach techniques; we craft professional careers."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoursePage;