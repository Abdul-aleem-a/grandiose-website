// app/faq/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageCircle, Phone, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    category: "Services & Scope",
    faqs: [
      {
        q: "What is included in core furnishing?",
        a: "Modular Kitchen, wardrobes, cots, and any other storage units, living-dining partitions, wall paneling, sofas, chairs, etc.",
      },
      {
        q: "What is included in soft furnishing?",
        a: "Curtains, blinds, carpets, quilts, wall pictures, wallpapers, etc.",
      },
    ],
  },
  {
    category: "Process & Execution",
    faqs: [
      {
        q: "What is the procedure of getting a work done by the Grandiose?",
        a: "1) Customer Contacts Us\n2) Requirement and Rough Estimate\n3) Token payment and Actual Measurement of Space\n4) Personal Attention for Design\n5) Installation and Handover\n6) After-Sales Services",
      },
      {
        q: "Where do you undertake work?",
        a: "We undertake complete interior design and implementation works across Bengaluru.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    faqs: [
      {
        q: "Do you charge a design fee?",
        a: "Yes, we do have a 10% design and management fee. This fee will be reduced from the final quoted amount.",
      },
      {
        q: "Do you accept card payment?",
        a: "Yes, we accept credit cards with a convenience fee of 2%.",
      },
      {
        q: "Do you provide EMI Payment options?",
        a: "Regrettably, we do not offer EMI as a payment alternative presently.",
      },
    ],
  },
  {
    category: "Warranty & Support",
    faqs: [
      {
        q: "Do you offer any warranty?",
        a: "When you design your interiors with us, you get a 10-year warranty on our services. And in addition, all accessories, hardware and appliances are covered as per the respective Manufacturer's Warranty Policy.",
      },
    ],
  },
];

const FAQItem = ({
  q,
  a,
  isOpen,
  onClick,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onClick: () => void;
}) => (
  <div className="border border-golden/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-golden/40 bg-[#051711]">
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between px-6 py-5 text-left font-sans text-sm md:text-base font-medium text-white hover:text-golden transition-colors duration-300"
    >
      <span className="pr-4">{q}</span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="shrink-0"
      >
        <ChevronDown size={18} className="text-golden" />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-5 text-sm leading-relaxed text-white/60 font-sans whitespace-pre-line">
            {a}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFaq = (key: string) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="min-h-screen bg-[#051711]">
      {/* Hero Section */}
      <section className="relative bg-[#051711] pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-12 left-12 w-32 h-32" />
        <div className="absolute bottom-8 right-16 w-24 h-24" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 caret-amber-400" />
              <HelpCircle size={50} className="gradient-heading text-2xl md:text-2xl mb-5" />
              <div className="h-px w-12 bg-golden/40" />
            </div>
            <h1 className="gradient-heading text-5xl md:text-5xl mb-5">
              Frequently Asked Questions
            </h1>
            <nav className="flex items-center justify-center gap-2 text-sm font-sans">
              <Link
                href="/"
                className="text-white/50 hover:text-golden transition-colors"
              >
                Home
              </Link>
              <span className="text-golden">/</span>
              <span className="text-white/80">FAQ</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          {faqData.map((category, ci) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-golden rounded-full" />
                <h2 className="gradient-heading text-2xl md:text-2xl mb-5">
                  {category.category}
                </h2>
              </div>
              <div className="space-y-3">
                {category.faqs.map((faq, fi) => {
                  const key = `${ci}-${fi}`;
                  return (
                    <FAQItem
                      key={key}
                      q={faq.q}
                      a={faq.a}
                      isOpen={openIndex === key}
                      onClick={() => toggleFaq(key)}
                    />
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#051711] py-16 md:py-20 border-t border-golden/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="gradient-heading text-3xl md:text-3xl mb-5">
              Still Have Questions?
            </h2>
            <p className="text-white/50 font-sans text-sm md:text-base mb-8 max-w-xl mx-auto">
              Our design consultants are happy to help. Reach out via WhatsApp
              for instant answers or call us for a detailed discussion.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/9113054788?text=Hello The Grandiose Team. I am interested to know more about your home interior and renovation services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white text-sm font-medium tracking-wider uppercase rounded-lg hover:bg-[#25D366]/90 transition-all duration-300 font-sans"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
              <a
                href="tel:+91 9113054788"
                className="inline-flex items-center gap-2 px-8 py-3 border border-golden text-golden text-sm font-medium tracking-wider uppercase rounded-lg hover:bg-golden bg-[#25D366] text-white hover:bg-[#25D366]/90 transition-all duration-300 font-sans"
              >
                <Phone size={16} />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}