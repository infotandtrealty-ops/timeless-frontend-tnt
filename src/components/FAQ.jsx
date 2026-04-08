import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Does permanent makeup hurt?",
    answer:
      "Some discomfort may be experienced, but numbing agents are used to minimize pain.",
  },
  {
    question: "How long does the procedure take?",
    answer:
      "The procedure usually takes 1–2 hours depending on the area being treated.",
  },
  {
    question: "Are there any risks involved?",
    answer:
      "As with any cosmetic procedure, there are risks including infection, allergic reactions, and dissatisfaction with results. Choosing a skilled and licensed technician helps minimize these risks.",
  },
  {
    question: "What treatments fall under facial aesthetics?",
    answer:
      "Facial aesthetics includes treatments like Botox, dermal fillers, skin rejuvenation, and more.",
  },
  {
    question: "Are facial aesthetic treatments safe?",
    answer:
      "Yes, when performed by licensed professionals, these treatments are considered safe.",
  },
  {
    question: "At what age should I consider facial aesthetic treatments?",
    answer:
      "There is no fixed age. It depends on individual needs, usually after mid-20s when aging signs appear.",
  },
  {
    question: "What are the benefits of visiting a skin and hair clinic?",
    answer:
      "You get expert advice, professional treatments, and access to advanced technology for better skin and hair care.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF8F6]">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold uppercase text-[#3B2F2F] tracking-wide">
            Frequently Asked Questions
          </h2>
          <span className="bg-yellow-300 block w-20 h-1 bg-[#D4AF37] mx-auto mt-2 rounded"></span>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-yellow-300 border-2 border-[#D4AF37] rounded-xl shadow-md overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-[#3B2F2F] text-lg hover:bg-[#FFF4D9] transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-2xl">
                  {openIndex === index ? "✖" : "＋"}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-4 text-[#555555] leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
