import React from 'react';
import { Clock, Users, Award, BookOpen, Star, CheckCircle, ArrowRight, GraduationCap, Trophy, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Nav";
import Footer from "../components/Footer";

// Utility component to render stars (since the original used a custom Card component that included this)
const StarRating = ({ rating }) => (
  <div className="flex justify-center mb-4">
    {[...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-[#FFD700] fill-current' : 'text-gray-300'}`} 
      />
    ))}
  </div>
);

const AcademyPage = () => {
  const courseCategories = [
    {
      title: "Permanent Makeup",
      description: "Master the art of permanent makeup with our comprehensive courses",
      courses: 8,
      duration: "2-10 Days",
      price: "Starting from ₹25,000",
      image: "/images/courses-banner.jpeg",
      features: [
        "Microblading techniques",
        "Powder brow application",
        "Lip micropigmentation",
        "Scalp micropigmentation",
        "Professional certification",
        "Hands-on training"
      ]
    },
    {
      title: "Cosmetology",
      description: "Learn advanced cosmetology techniques and skin care treatments",
      courses: 5,
      duration: "2-6 Months",
      price: "Starting from ₹25,000",
      image: "/images/courses-banner.jpeg",
      features: [
        "Chemical peel treatments",
        "HydraFacial technology",
        "Advanced facial techniques",
        "Skin analysis methods",
        "Professional certification",
        "Clinical experience"
      ]
    },
    {
      title: "Facial Aesthetics",
      description: "Master non-surgical facial treatments and injectable techniques",
      courses: 9,
      duration: "2-6 Months",
      price: "Starting from ₹40,000",
      image: "/images/courses-banner.jpeg",
      features: [
        "Botox and filler techniques",
        "Thread lift procedures",
        "Advanced injection methods",
        "Facial anatomy knowledge",
        "Professional certification",
        "Clinical supervision"
      ]
    },
    {
      title: "Fellowship Courses",
      description: "Comprehensive fellowship programs for complete aesthetic expertise",
      courses: 5,
      duration: "6-15 Months",
      price: "Starting from ₹2,00,000",
      image: "/images/courses-banner.jpeg",
      features: [
        "Complete aesthetic training",
        "Business management",
        "Research opportunities",
        "Clinical experience",
        "Mentorship program",
        "Advanced certification"
      ]
    }
  ];

  const academyFeatures = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Expert Faculty",
      description: "Learn from industry-leading professionals with years of experience"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Certified Programs",
      description: "All our courses are certified and recognized by industry standards"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Hands-on Training",
      description: "Practical training with real clients and modern equipment"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Small Batch Size",
      description: "Personalized attention with maximum 4 students per batch"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Lifetime Support",
      description: "Ongoing support and guidance even after course completion"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Comprehensive Curriculum",
      description: "Complete training covering theory, practice, and business aspects"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      course: "Masters in Facial Aesthetics",
      rating: 5,
      comment: "The academy provided excellent training with hands-on experience. The faculty is highly knowledgeable and supportive."
    },
    {
      name: "Sarah Johnson",
      course: "Permanent Makeup Course",
      rating: 5,
      comment: "I learned so much in just a few days. The small batch size allowed for personalized attention and better learning."
    },
    {
      name: "Dr. Rajesh Kumar",
      course: "Fellowship in Aesthetics",
      rating: 5,
      comment: "The comprehensive curriculum and practical training helped me establish my own successful practice."
    }
  ];
  
  // Define custom colors based on the original component usage
  // Note: I'm approximating `luxury-dark`, `luxury-muted`, and `luxury-gold` with standard Tailwind colors 
  // or a common gold hex to ensure some styling is present.
  const LUXURY_GOLD = '#B8860B'; // DarkGoldenrod - a common gold shade
  const LUXURY_DARK = '#1a1a1a'; // Dark gray/black
  const LUXURY_MUTED = '#6b7280'; // Gray-500

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Hero Section */}
      <div 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/images/courses-banner.jpeg)`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Replaced Badge with a styled div/span */}
            <div className="inline-flex items-center rounded-full border border-gray-50 bg-white/20 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm mb-4">
              Timeless Aesthetics Academy
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Aesthetic Training
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Master the art of aesthetic medicine with our comprehensive courses, expert faculty, and hands-on training programs designed for professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Small Batches</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Certified Programs</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <span>Expert Faculty</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Academy Features */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: LUXURY_DARK }}>
            Why Choose Our Academy?
          </h2>
          <p className="text-lg" style={{ color: LUXURY_MUTED }}>
            We provide world-class training with industry-leading standards
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {academyFeatures.map((feature, index) => (
            // Replaced Card with a styled div
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow duration-300">
              {/* CardHeader content */}
              <div className="pb-4 space-y-1">
                <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${LUXURY_GOLD}1A`, color: LUXURY_GOLD }}>
                  {feature.icon}
                </div>
                {/* CardTitle content */}
                <h3 className="text-xl font-semibold" style={{ color: LUXURY_DARK }}>{feature.title}</h3>
              </div>
              {/* CardContent content */}
              <div>
                <p style={{ color: LUXURY_MUTED }}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Categories */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: LUXURY_DARK }}>
              Our Course Categories
            </h2>
            <p className="text-lg" style={{ color: LUXURY_MUTED }}>
              Choose from our comprehensive range of professional courses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {courseCategories.map((category, index) => (
              // Replaced Card with a styled div
              <div key={index} className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* CardHeader content */}
                <div className="p-6 pb-4 space-y-1">
                  {/* CardTitle content */}
                  <h3 className="text-2xl font-semibold" style={{ color: LUXURY_DARK }}>{category.title}</h3>
                  {/* CardDescription content */}
                  <p className="text-base" style={{ color: LUXURY_MUTED }}>{category.description}</p>
                </div>
                {/* CardContent content */}
                <div className="p-6 pt-0">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold" style={{ color: LUXURY_GOLD }}>{category.courses}</div>
                      <div className="text-sm" style={{ color: LUXURY_MUTED }}>Courses</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold" style={{ color: LUXURY_GOLD }}>{category.duration}</div>
                      <div className="text-sm" style={{ color: LUXURY_MUTED }}>Duration</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: LUXURY_GOLD }} />
                        <span className="text-sm" style={{ color: LUXURY_MUTED }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold" style={{ color: LUXURY_GOLD }}>{category.price}</span>
                  </div>
                  
                  {/* Replaced Button with a styled Link/button */}
                  <Link to="/courses" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-10 py-2 w-full group-hover:bg-opacity-90 hover:bg-opacity-90 flex items-center justify-center gap-2 bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors duration-300" style={{ backgroundColor: LUXURY_DARK, color: 'white' }}>
                    Explore Courses
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: LUXURY_DARK }}>
            What Our Students Say
          </h2>
          <p className="text-lg" style={{ color: LUXURY_MUTED }}>
            Hear from our successful graduates
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            // Replaced Card with a styled div
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 text-center">
              {/* CardHeader content */}
              <div className="pb-4 space-y-1">
                <StarRating rating={testimonial.rating} />
                {/* CardDescription content (using p for italic comment) */}
                <p className="text-base italic" style={{ color: LUXURY_MUTED }}>
                  "{testimonial.comment}"
                </p>
              </div>
              {/* CardContent content */}
              <div>
                <div className="font-semibold" style={{ color: LUXURY_DARK }}>{testimonial.name}</div>
                <div className="text-sm" style={{ color: LUXURY_MUTED }}>{testimonial.course}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16" style={{ backgroundColor: LUXURY_GOLD }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Aesthetic Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our academy and become a certified aesthetic professional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Replaced Button with styled Links/buttons */}
            <Link 
              to="/courses"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-11 px-8 py-2 bg-white text-black hover:bg-gray-100" 
            >
              Browse Courses
            </Link>
            <button 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-11 px-8 py-2 border border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    
      <Footer />
    </div>
  );
};

export default AcademyPage;