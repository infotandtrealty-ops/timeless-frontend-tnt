import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">

      {/* WhatsApp */}
      <a
        href="https://wa.me/919873139390"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
      >
        <MessageCircle className="w-5 h-5" />
      </a>



    </div>
  );
};

export default FloatingButtons ;