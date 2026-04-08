import React, { useState ,useEffect  } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { useLocation } from "react-router-dom"; // Import zaroori hai
import Header from "../components/Nav";
import Footer from "../components/Footer";
import axios from "axios";
import { serverUrl } from "../App";
import { toast } from "react-toastify";

const ContactPage = () => {

  const { search, hash } = useLocation(); // Yeh line missing thi

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", service: "", message: "",
  });


  useEffect(() => {
    // URL se service nikalne ke liye (e.g., ?service=pmu)
    const params = new URLSearchParams(search);
    const serviceParam = params.get("service");

    if (serviceParam) {
      setFormData((prev) => ({ ...prev, service: serviceParam }));
    }
    

    // Hash scroll handle karne ke liye (#contact-form)
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // Thoda delay taaki page load ho jaye
      }
    }
  }, [search, hash]);




  const [submitting, setSubmitting] = useState(false);
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifyingOtp, setVerifyingOtp] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  // Send OTP
  const handleSendOtp = async () => {

    if (!formData.firstName || !formData.email || !formData.phone || !formData.service) {
      toast.error("Please fill required fields first");
      return;
    }

    setSendingOtp(true);

    try {

      const res = await axios.post(`${serverUrl}/api/leads/send-otp`, formData);

      toast.success(res.data.message);
      setShowOtpInput(true);

    } catch (err) {

      toast.error(err.response?.data?.message || "Failed to send OTP");

    } finally {

      setSendingOtp(false);

    }
  };

  // Verify OTP
  const handleVerifyOtp = async () => {

    if (otp.length !== 6) {
      toast.error("Enter valid OTP");
      return;
    }

    setVerifyingOtp(true);

    try {

      const res = await axios.post(`${serverUrl}/api/leads/verify-otp`, {
        email: formData.email,
        otp
      });

      toast.success(res.data.message);

      setOtpVerified(true);
      setShowOtpInput(false);

    } catch (err) {

      toast.error(err.response?.data?.message || "Invalid OTP");

    } finally {

      setVerifyingOtp(false);

    }
  };

  // Submit Form
  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!otpVerified) {
      toast.error("Please verify OTP first");
      return;
    }

    setSubmitting(true);

    try {

      const res = await axios.post(`${serverUrl}/api/leads/create`, {
        email: formData.email
      });

      toast.success(res.data.message);

      setFormData({
        firstName: "", lastName: "", email: "", phone: "", service: "", message: ""
      });

      setOtp("");
      setOtpVerified(false);

    } catch (err) {

      toast.error(err.response?.data?.message || "Submission failed");

    } finally {

      setSubmitting(false);

    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      <Header />

      {/* HERO SECTION */}

      <div className="relative h-[65vh] flex items-center justify-center text-center text-white">

        <img
          src="https://invest.up.gov.in/wp-content/uploads/2020/10/Contactus.jpg"
          className="absolute w-full h-full object-cover"
          alt="Contact clinic"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-3xl px-6">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact Our Experts
          </h1>

          <p className="text-lg text-gray-200 mb-6">
            Have questions about treatments or courses?  
            Our team is ready to assist you.
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

        {/* LEFT INFO */}

        <div className="space-y-8">

          <h2 className="text-3xl font-bold text-gray-900">
            Get in Touch
          </h2>

          <p className="text-gray-600">
            Our aesthetic experts are available to guide you about procedures,
            consultations and training programs.
          </p>

          <div className="space-y-6">

            <div className="flex gap-4 items-start">
              <Phone className="text-yellow-600"/>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">+91 9654009966</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Mail className="text-yellow-600"/>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">info@timelessaesthetics.in</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <MapPin className="text-yellow-600"/>
              <div>
                <p className="font-semibold">Locations</p>
                <p className="text-gray-600">Gurgaon • Amritsar • Jammu</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Clock className="text-yellow-600"/>
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
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input"
            />

            <input
              id="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="input"
            />

            <select
              id="service"
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

            {/* OTP */}

            {!otpVerified && !showOtpInput && (
              <button
                type="button"
                onClick={handleSendOtp}
                className="btn-yellow w-full"
              >
                {sendingOtp ? "Sending OTP..." : "Send OTP"}
              </button>
            )}

            {showOtpInput && (
              <div className="flex gap-4">

                <input
                  value={otp}
                  onChange={(e)=>setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  className="input flex-1"
                />

                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  className="btn-green"
                >
                  Verify
                </button>

              </div>
            )}

            {otpVerified && (
              <div className="text-green-600 font-medium">
                Email verified ✓
              </div>
            )}

            <button
              type="submit"
              disabled={!otpVerified || submitting}
              className="btn-dark w-full"
            >
              {submitting ? "Submitting..." : "Submit Inquiry"}
            </button>

          </form>

        </div>

      </div>

      {/* WHATSAPP BUTTON */}

      <a
        href="https://wa.me/919654009966"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <MessageCircle/>
      </a>

      <Footer />

    </div>
  );
};

export default ContactPage;