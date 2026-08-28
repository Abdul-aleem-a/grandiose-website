// app/faq/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageCircle, Phone, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    category: "About The Grandiose",
    faqs: [
      {
        q: "What interior design services does The Grandiose - Home Interiors offer?",
        a: "End-to-end home interior design services including residential interiors, modular kitchens, wardrobes and storage, living room and bedroom design, false ceiling and lighting, and turnkey execution from concept to handover.",
      },
      {
        q: "Is The Grandiose a residential interior designer in Bengaluru?",
        a: "Yes, we are a Bengaluru-based residential interior design studio specializing in apartments, villas, and complete home interiors.",
      },
      {
        q: "Does The Grandiose provide complete home interior design and renovation services?",
        a: "Yes, we handle both fresh interior projects and full home renovations, from design and material selection to execution and handover.",
      },
      {
        q: "What makes The Grandiose different from other interior designers in Bengaluru?",
        a: "We combine personalized design with disciplined project execution - every client works with a dedicated designer and project manager from concept through after-sales support.",
      },
      {
        q: "Which areas in Bengaluru does The Grandiose serve?",
        a: "We serve clients across Bengaluru, including Whitefield, HSR Layout, Indiranagar, Koramangala, Electronic City, and other parts of the city.",
      },
    ],
  },
  {
    category: "Design & Specializations",
    faqs: [
      {
        q: "Can The Grandiose design interiors for apartments and villas?",
        a: "Yes, we design interiors for 2BHK and 3BHK apartments as well as independent villas, tailoring space planning to each layout.",
      },
      {
        q: "Does The Grandiose offer modular kitchen design?",
        a: "Yes, we design modular kitchens in L-shaped, U-shaped, parallel, straight, and island layouts, using hardware from brands like Hettich, Häfele, and Blum.",
      },
      {
        q: "Does The Grandiose design wardrobes and storage solutions?",
        a: "Yes, we create customized wardrobes and storage - including floor-to-ceiling units, loft cabinets, and storage beds - designed around each room's layout.",
      },
      {
        q: "Can I get a customized interior design based on my budget and style preference?",
        a: "Yes, we tailor design style, materials, and scope to each client's budget and personal preferences.",
      },
    ],
  },
  {
    category: "Materials & Quality",
    faqs: [
      {
        q: "What materials and hardware brands does The Grandiose use?",
        a: "We work with trusted plywood brands such as Green Ply, Century Ply, Royale Touche Ply, Endura Ply, and Gurjan Prime Ply (or equivalent), with MR Grade, BWP, and HDHMR used at specific areas and external finishes. For laminates, we use Merino, Century, Advance Lam, Euro Prateek, Virgo, and Design Tree, and for hardware, we work with Häfele, Blum, Hettich, and Ebco. We deal with all the brands mentioned above, and provide a quote based on your selection.",
      },
    ],
  },
  {
    category: "Process & Execution",
    faqs: [
      {
        q: "Does The Grandiose provide turnkey interior design services?",
        a: "Yes, we offer turnkey solutions covering design, material sourcing, and on-site execution under one team, with a dedicated project manager assigned to each home.",
      },
      {
        q: "How does the home interior design process work?",
        a: "Our process starts with an initial consultation, followed by requirement gathering and estimate, token and measurement, personalized 3D design, installation, and after-sales support.",
      },
      {
        q: "Does The Grandiose provide 3D interior design concepts before execution?",
        a: "Yes, every project includes 3D design concepts so clients can review the look and layout before work begins.",
      },
      {
        q: "How does the site visit and measurement process work?",
        a: "After the initial consultation, our team visits your site to take detailed measurements, which form the basis for your 3D design and estimate.",
      },
      {
        q: "Do I need to be present at the site during execution?",
        a: "No, our project manager oversees on-site execution and keeps you updated regularly, so your presence isn't required throughout the process.",
      },
      {
        q: "Does The Grandiose take up partial or piecemeal interior work?",
        a: "No, we don't take up partial work such as single-room-only projects, design-only services without execution, or supply-of-labour-only arrangements. We work on complete interior projects — from design to execution — to ensure consistency in quality, materials, and overall finish across the entire home.",
      },
      // New FAQs added below
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
        q: "How much does home interior design cost?",
        a: "Cost depends on factors like home size, material choices, and scope of work. We recommend a free consultation for a detailed, customized quotation.",
      },
      {
        q: "What payment structure does The Grandiose follow?",
        a: "We follow a milestone-based payment structure, with payments linked to project stages such as token, design approval, execution, and handover - full details are shared in your project quotation.",
      },
      // New FAQs added below
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
    category: "Timeline & Support",
    faqs: [
      {
        q: "What happens if my project timeline gets delayed?",
        a: "We assign a dedicated project manager to track progress and keep clients updated. If delays occur due to site or material factors, we communicate revised timelines proactively.",
      },
      {
        q: "What after-sales support does The Grandiose provide?",
        a: "We offer after-sales service covering warranty support, minor fixes, and maintenance assistance after project handover.",
      },
    ],
  },
  {
    category: "Warranty",
    faqs: [
      {
        q: "What warranty does The Grandiose provide?",
        a: "We offer a 10-year warranty on structural woodwork and a 5-year warranty on kitchen hardware.",
      },
      // New FAQ added below (merged warranty info)
      {
        q: "Do you offer any warranty?",
        a: "When you design your interiors with us, you get a 10-year warranty on our services. And in addition, all accessories, hardware and appliances are covered as per the respective Manufacturer's Warranty Policy.",
      },
    ],
  },
  {
    category: "Location & Consultation",
    faqs: [
      {
        q: "How can I get a quote or book a consultation with The Grandiose?",
        a: "You can book a free consultation via our website contact form or WhatsApp, and our team will get in touch to understand your requirements.",
      },
    ],
  },
  // New category added
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
          <div className="px-6 pb-5 text-base md:text-lg leading-7 md:leading-8 text-white/70 font-sans whitespace-pre-line">
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
              <HelpCircle
                size={50}
                className="gradient-heading text-2xl md:text-2xl mb-5"
              />
              <div className="h-px w-12 bg-golden/40" />
            </div>
            <h1 className="gradient-heading text-4xl md:text-5xl mb-5">
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
                <h2 className="gradient-heading text-1xl md:text-2xl mb-5">
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
