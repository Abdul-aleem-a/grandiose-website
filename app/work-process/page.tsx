"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight, Phone, MessageCircle, Check, Clock, Users, 
  Ruler, Box, Truck, Headphones
} from "lucide-react";
import workBg from "../../public/sofa.jpg";

// Import step images
import step1Img from "../../public/sofa.jpg";
import step2Img from "../../public/sofa.jpg";
import step3Img from "../../public/sofa.jpg";
import step4Img from "../../public/sofa.jpg";
import step5Img from "../../public/sofa.jpg";
import step6Img from "../../public/sofa.jpg";
import { link } from "fs";

const processData = [
  {
    id: "step1",
    number: "01",
    icon: Users,
    label: "Customer Contacts Us",
    tagline: "Step 1 - Your Journey Begins",
    heroImage: step1Img,
    description:
      "At The Grandiose - Home Interiors, we are dedicated to providing the best customer service for your interior design needs.",
    longDescription:
      "We invite you to visit our office and meet with our experienced sales manager, who can personally guide you through our range of products and design solutions tailored to your specific requirements.",
    features: [
      "Personal consultation with expert sales manager",
      "Understanding your design preferences",
      "Showroom visit to experience materials",
      "Initial design discussion",
    ],
    link:'@/work-process',
  },
  {
    id: "step2",
    number: "02",
    icon: Clock,
    label: "Requirement and Rough Estimate",
    tagline: "Step 2 - Understanding Your Vision",
    heroImage: step2Img,
    description:
      "Understanding your needs is the cornerstone of every successful design project. At 'The Grandiose' we prioritize open communication with our clients, giving you the reins.",
    longDescription:
      "Our seasoned interior designers specialize in crafting bespoke solutions for residential spaces, be it an apartment or villa. We re-envision your home with expertise, offering a precise estimate tailored to your unique vision, desired atmosphere, and budget.",
    features: [
      "In-depth requirement analysis",
      "Budget planning and optimization",
      "Design style consultation",
      "Preliminary cost estimation",
    ],
  },
  {
    id: "step3",
    number: "03",
    icon: Ruler,
    label: "Token Payment and Space Measurement",
    tagline: "Step 3 - Precision Planning",
    heroImage: step3Img,
    description:
      "After receiving your initial estimate, our team of experienced and qualified designers ensures precision by making a dedicated site visit to take actual measurements.",
    longDescription:
      "Every step of this process is carefully scheduled to align with your convenience. Discover the precision and convenience of The Grandiose - Home Interiors. Your vision, our expertise.",
    features: [
      "Professional on-site measurement",
      "Detailed space analysis",
      "Structural assessment",
      "Convenient scheduling",
    ],
  },
  {
    id: "step4",
    number: "04",
    icon: Box,
    label: "Personalized 3D Design Models",
    tagline: "Step 4 - Visualizing Your Dream",
    heroImage: step4Img,
    description:
      "We believe in personalizing your interior design experience. Our service includes the creation of highly realistic 3D models based on your provided measurements and design preferences.",
    longDescription:
      "Experience your dream home before it's built with our cutting-edge 3D visualization technology. Walk through every room, see material combinations, and make informed decisions with confidence.",
    features: [
      "Photorealistic 3D renderings",
      "Virtual walkthrough experience",
      "Material and color visualization",
      "Multiple design iterations",
    ],
  },
  {
    id: "step5",
    number: "05",
    icon: Truck,
    label: "Installation and Handover",
    tagline: "Step 5 - From Design to Reality",
    heroImage: step5Img,
    description:
      "At The Grandiose, our commitment to exceptional customer service is at the heart of our design process. We understand that designing a home involves a multitude of important considerations.",
    longDescription:
      "For the production and assembly of modular kitchens and furniture, we operate cutting-edge factories with modern production lines. Our products are known for their exceptional quality, reliability, and impeccable aesthetics. Furthermore, we prioritize a timely handover of your dream home, ensuring that you can step into your beautifully designed space as planned.",
    features: [
      "State-of-the-art manufacturing",
      "Quality-controlled production",
      "Professional installation team",
      "Timely project completion",
    ],
  },
  {
    id: "step6",
    number: "06",
    icon: Headphones,
    label: "After-Sales Services",
    tagline: "Step 6 - Lifelong Support",
    heroImage: step6Img,
    description:
      "At The Grandiose, our mission is to create spaces that evoke transformative experiences within your home. Our commitment doesn't end with project completion.",
    longDescription:
      "Our dedicated after-sales client relations and service team stands ready to provide superior support. Whether you have interior-related questions, seek material advice, or desire fresh inspiration, our experienced team is here to assist you. We're proud to offer a 10-year product warranty and lifelong support for our valued clients.",
    features: [
      "10-year product warranty",
      "Lifelong customer support",
      "Maintenance guidance",
      "Post-installation service",
    ],
  },
];

const WorkProcess = () => {
  return (
    <div className="min-h-screen bg-[#051711] font-sans">
      {/* ── CINEMATIC HERO HEADER ── */}
      <section className="relative h-[52vh] min-h-[380px] overflow-hidden flex items-center justify-center">
        {/* Background image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={workBg}
            alt="Work Process hero"
            fill
            className="object-cover object-center scale-105 opacity-30 transition-transform duration-700 hover:scale-110"
            priority
            sizes="100vw"
            quality={90}
          />
        </div>
        {/* Layered overlays with royal green */}
        <div className="absolute inset-0 bg-[#051711]/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#051711]/30 via-[#051711]/70 to-[#051711]" />
        {/* Decorative gold line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60" />

        {/* CENTER TEXT */}
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] tracking-[0.55em] uppercase text-[#D4AF37] mb-4 font-sans font-medium"
          >
            The Grandiose · Bangalore
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, type: "spring", stiffness: 60 }}
            className="gradient-heading text-5xl md:text-5xl mb-5"
          >
            Our Work Process
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white/70 text-sm md:text-base font-palegoldenrod max-w-md mx-auto leading-relaxed"
          >
            A seamless journey from concept to completion, crafted with precision and care.
          </motion.p>

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="flex items-center justify-center gap-2 mt-6 text-[11px] tracking-[0.15em] uppercase"
          >
            <Link href="/" className="text-white/40 hover:text-[#D4AF37] transition-colors duration-300">
              Home
            </Link>
            <ChevronRight size={12} className="text-[#D4AF37]/50" />
            <span className="text-[#D4AF37]">Work Process</span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40"
        >
          <div className="w-[1px] h-6 bg-[#D4AF37]" />
          <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
        </motion.div>
      </section>

      {/* ── PROCESS SECTIONS ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 space-y-32">
        {processData.map((step, idx) => {
          const Icon = step.icon;
          const isEven = idx % 2 === 0;
          return (
            <div key={step.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  isEven ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                {/* ── IMAGE SIDE WITH SMOOTH HOVER EFFECTS ── */}
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="relative overflow-hidden rounded-lg aspect-[4/3] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)]">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <Image
                        src={step.heroImage}
                        alt={step.label}
                        fill
                        className="object-cover transition-all duration-500 ease-out"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        quality={85}
                      />
                    </motion.div>
                    
                    {/* Animated overlay gradient */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-[#051711]/90 via-[#051711]/20 to-transparent"
                      initial={{ opacity: 0.6 }}
                      whileHover={{ opacity: 0.8 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Step Number Badge with hover animation */}
                    <motion.div 
                      className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#D4AF37] text-[#051711] flex items-center justify-center font-bold text-xl font-serif shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Decorative gold corner accent with hover animation */}
                  <motion.div 
                    className={`absolute -top-3 ${isEven ? "-left-3" : "-right-3"} w-12 h-12 border-t-2 border-l-2 ${isEven ? "" : "border-l-0 border-r-2"} border-[#D4AF37]/50 rounded-tl-sm pointer-events-none`}
                    whileHover={{ scale: 1.1, borderColor: "#D4AF37" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>

                {/* ── CONTENT SIDE ── */}
                <motion.div 
                  className="flex flex-col gap-6"
                  initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {/* Step label */}
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon size={18} className="text-[#D4AF37]" strokeWidth={1.4} />
                    </motion.div>
                    <p className="text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] font-medium font-sans">
                      Step {step.number}
                    </p>
                  </div>

                  {/* Heading */}
                  <h2 className="gradient-heading text-2xl md:text-2xl">
                    {step.label}
                  </h2>

                  {/* Gold divider */}
                  <div className="w-12 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/30" />

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed font-sans">
                    {step.description}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed font-sans">
                    {step.longDescription}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2.5">
                    {step.features.map((f, fi) => (
                      <motion.li 
                        key={fi} 
                        className="flex items-start gap-3 text-sm text-white/80 font-sans"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + fi * 0.1 }}
                      >
                        <span className="mt-0.5 w-4 h-4 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0">
                          <Check size={9} className="text-[#D4AF37]" strokeWidth={2.5} />
                        </span>
                        {f}
                      </motion.li>
                    ))}
                  </ul>

                </motion.div>
              </motion.div>

              {/* Divider between steps */}
              {idx < processData.length - 1 && (
                <motion.div 
                  className="mt-20 flex items-center gap-6"
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex-1 h-[1px] bg-white/20" />
                  <motion.div 
                    className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40"
                    whileHover={{ scale: 1.5, backgroundColor: "#D4AF37" }}
                  />
                  <div className="flex-1 h-[1px] bg-white/20" />
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkProcess;