'use client';

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#000000] text-luxury-dark border-t border-border mt-10">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + Info */}
        <div>
          <img 
            src={logo} 
            className='w-[150px] md:w-[200px] rounded-md cursor-pointer' 
            onClick={() => navigate("/")} 
            alt="Logo" 
          />
          <p className="text-sm text-white mt-3">
            Timeless Aesthetics brings world-class facial aesthetics, cosmetology,
            and permanent makeup training and services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-white">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/shop/permanent-makeup" className="hover:text-luxury-gold text-gray-300">Shop</a></li>
            <li><a href="/treatments" className="hover:text-luxury-gold text-gray-300">Services</a></li>
            <li><a href="/academy" className="hover:text-luxury-gold text-gray-300">Academy</a></li>
            <li><a href="/blogs" className="hover:text-luxury-gold text-gray-300">Blog</a></li>
            <li><a href="/contact" className="hover:text-luxury-gold text-gray-300">Contact</a></li>
            <li><a href="/about" className="hover:text-luxury-gold text-gray-300">About</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-3 text-white">CATEGORY</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/shop/permanent-makeup" className="hover:text-luxury-gold text-gray-300">Permanent Makeup</a></li>
            <li><a href="/treatments" className="hover:text-luxury-gold text-gray-300">Facial Aesthetics</a></li>
            <li><a href="/treatments" className="hover:text-luxury-gold text-gray-300">Cosmetology</a></li>
            <li><a href="/treatments" className="hover:text-luxury-gold text-gray-300">Dentistry</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3 text-white">GET IN TOUCH</h3>
          <p className="text-sm text-gray-300">
            Timeless Aesthetics <br />
            2nd Floor, Ameya One, Golf Course Road, Sector 42, Gurgaon, Haryana 122022
          </p>
          <p className="mt-2 text-sm text-gray-300">📞 (+91) 9654009966</p>
          <p className="text-sm text-gray-300">✉️ info@timelessaesthetics.in</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-3">
            <a href="https://www.facebook.com/timelessaestheticsindia/" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-5 w-5 text-gray-300 hover:text-luxury-gold" />
            </a>
            <a href="https://www.instagram.com/timelessaestheticsindia/" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5 text-gray-300 hover:text-luxury-gold" />
            </a>
            <a href="https://www.linkedin.com/company/timeless-aesthetics-india/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-gray-300 hover:text-luxury-gold" />
            </a>
            <a href="https://www.youtube.com/channel/UCcQah2hkfFzjQ6YgzZpJUFw" target="_blank" rel="noopener noreferrer">
              <Youtube className="h-5 w-5 text-gray-300 hover:text-luxury-gold" />
            </a>
            <a href="https://x.com/tastheticsindia" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5 text-gray-300 hover:text-luxury-gold" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border text-center py-4 text-xs text-gray-400">
        © 2023, All rights reserved. |{" "}
        <a href="/privacy-policy" className="hover:text-luxury-gold">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;