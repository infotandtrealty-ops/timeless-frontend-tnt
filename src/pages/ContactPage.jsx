import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle2, X } from "lucide-react"; // Naye icons add kiye
import { useLocation } from "react-router-dom";
import Header from "../components/Nav";
import Footer from "../components/Footer";
import axios from "axios";
import { toast } from "react-toastify";

const ContactPage = () => {
  const { search, hash } = useLocation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // Popup state

  useEffect(() => {
    const params = new URLSearchParams(search);
    const serviceParam = params.get("service");
    if (serviceParam) {
      setFormData((prev) => ({ ...prev, service: serviceParam }));
    }

    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [search, hash]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await axios.post("https://formspree.io/f/xlgoqnzq", formData);

      if (res.status === 200) {
        setShowSuccessPopup(true); // Form submit hone par popup dikhao
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative bg-gray-50 min-h-screen">
      <Header />

      {/* SUCCESS POPUP MODAL */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setShowSuccessPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
            
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={48} />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-6">
              Your inquiry has been submitted successfully. Our team will contact you shortly.
            </p>
            
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 rounded-xl transition shadow-lg shadow-yellow-600/20"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <div className="relative h-[65vh] flex items-center justify-center text-center text-white">
        <img
          src="https://invest.up.gov.in/wp-content/uploads/2020/10/Contactus.jpg"
          className="absolute w-full h-full object-cover"
          alt="Contact clinic"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Our Experts</h1>
          <p className="text-lg text-gray-200 mb-6">
            Have questions about treatments or courses? Our team is ready to assist you.
          </p>
          <a
            href="#contact-form"
            className="bg-yellow-600 hover:bg-yellow-700 px-8 py-3 rounded-full font-semibold transition"
          >
            Send Inquiry
          </a>
        </div>
      </div>

      {/* CONTACT FORM SECTION */}
      <div id="contact-form" className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">
        {/* LEFT INFO (Wahi purana content) */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
          <p className="text-gray-600">
            Our aesthetic experts are available to guide you about procedures, consultations and training programs.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <Phone className="text-yellow-600" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">+91 9654009966</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Mail className="text-yellow-600" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">info@timelessaesthetics.in</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <MapPin className="text-yellow-600" />
              <div>
                <p className="font-semibold">Locations</p>
                <p className="text-gray-600">Gurgaon • Amritsar • Jammu</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Clock className="text-yellow-600" />
              <div>
                <p className="font-semibold">Working Hours</p>
                <p className="text-gray-600">Mon–Sat : 9AM – 7PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white rounded-2xl shadow-lg p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input
                id="firstName"
                required
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="input"
              />
              <input
                id="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="input"
              />
            </div>
            <input
              id="email"
              type="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input"
            />
            <input
              id="phone"
              required
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="input"
            />
            <select
              id="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="input"
            >
              <option value="">Select Service</option>
              <option value="pmu">Permanent Makeup</option>
              <option value="cosmo">Cosmetology</option>
              <option value="facial">Facial Aesthetics</option>
            </select>
            <textarea
              id="message"
              rows="4"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="input"
            />

            <button
              type="submit"
              disabled={submitting}
              className="btn-dark w-full"
            >
              {submitting ? "Submitting..." : "Submit Inquiry"}
            </button>
          </form>
        </div>
      </div>

      <a
        href="https://wa.me/919654009966"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <MessageCircle />
      </a>

      <Footer />
    </div>
  );
};

export default ContactPage;
