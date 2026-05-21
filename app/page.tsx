"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Maximize2,
  IndianRupee,
  Headphones,
  Building2,
  Utensils,
  PenTool,
  Lightbulb,
  Ruler,
  MessageCircle,
  FileText,
  CreditCard,
  Boxes,
  Wrench,
  HeartHandshake,
  Star,
  Quote,
} from "lucide-react";

import heroImage from "@/public/sofa.jpg";
import link  from "next/link";

export default function Home() {
  const slides = [
    {
      image: heroImage,
      tagline: "Premium Interior Design Studio",
      heading: "Crafting",
      italic: "Grandeur",
      sub: "We transform ordinary spaces into extraordinary living experiences through thoughtful design and meticulous craftsmanship.",
    },
    {
      image: heroImage,
      tagline: "Bedroom Sanctuaries",
      heading: "Serene",
      italic: "Retreats",
      sub: "Master bedrooms designed for rest, elegance and personal expression — tailored to your lifestyle.",
    },
    {
      image: heroImage,
      tagline: "Modular Kitchens",
      heading: "Marble &",
      italic: "Brass",
      sub: "Precision-crafted modular kitchens that blend luxury materials with intelligent storage solutions.",
    },
    {
      image: heroImage,
      tagline: "Dining Spaces",
      heading: "Grand",
      italic: "Gatherings",
      sub: "Dining rooms conceived for family celebrations — where every detail invites warmth and conversation.",
    },
    {
      image: heroImage,
      tagline: "Outdoor Living",
      heading: "Sunset",
      italic: "Terraces",
      sub: "Outdoor sanctuaries that blend architecture with nature for unforgettable open-air living.",
    },
  ];

  const usps = [
    { icon: Shield, value: "10 Years Service Warranty", label: "Quality Work" },
    {
      icon: Maximize2,
      value: "20% Extra Storage",
      label: "We Care Your Space",
    },
    {
      icon: IndianRupee,
      value: "Affordable and Efficient",
      label: "Cost Effective",
    },
    { icon: Headphones, value: "24/7 SUPPORT", label: "Support every time" },
  ];

  const services = [
    {
      icon: Building2,
      title: "Residential I nteriors",
      description:
        "Complete home transformations from concept to completion — creating personalised luxury living spaces.",
      tag: "Most Popular",
    },
    {
      icon: Building2,
      title: "Commercial Interiors",
      description:
        "Professional spaces that inspire productivity and reflect your brand's identity with precision.",
      tag: null,
    },
    {
      icon: Utensils,
      title: "Modular Kitchen",
      description:
        "Custom modular kitchens with premium finishes, smart storage, and elegant German hardware.",
      tag: "Trending",
    },
    {
      icon: PenTool,
      title: "Architectural Planning",
      description:
        "Comprehensive architectural plans and 3D elevations for new builds and full renovations.",
      tag: null,
    },
    {
      icon: Ruler,
      title: "Space Planning",
      description:
        "Intelligent layouts that optimise flow, function, and comfort for every room.",
      tag: null,
    },
  ];

  const steps = [
    {
      num: "01",
      icon: MessageCircle,
      title: "Customer Contacts Us",
      desc: "Share your vision and requirements with our expert design consultants.",
    },
    {
      num: "02",
      icon: FileText,
      title: "Requirement & Estimate",
      desc: "We analyse your space and provide a detailed, transparent cost estimate.",
    },
    {
      num: "03",
      icon: CreditCard,
      title: "Token & Measurement",
      desc: "Secure your project with a booking and precise on-site measurement.",
    },
    {
      num: "04",
      icon: Boxes,
      title: "Personalised 3D Designs",
      desc: "Experience your dream space in photo-realistic 3D before we begin.",
    },
    {
      num: "05",
      icon: Wrench,
      title: "Installation & Handover",
      desc: "Expert installation with rigorous quality checks at every stage.",
    },
    {
      num: "06",
      icon: HeartHandshake,
      title: "After-Sales Service",
      desc: "Ongoing support and maintenance for lasting satisfaction.",
    },
  ];

  const testimonials = [
    {
      quote:
        "The Grandiose transformed our home beyond imagination. Every detail was thoughtfully considered, and the craftsmanship is impeccable.",
      author: "Reshma Parveen",
      role: "Homeowner, Bangalore",
      rating: 5,
    },
    {
      quote:
        "Mr. Noor gave us plenty of options and designed our home as if it were his own. Transparent pricing and stunning results.",
      author: "Gafur Mohammed",
      role: "Homeowner, Hyderabad",
      rating: 5,
    },
    {
      quote:
        "Excellent execution and on-time completion. The 3D designs were exactly what we received.",
      author: "Ashutosh Mitra",
      role: "Homeowner, Mumbai",
      rating: 5,
    },
    {
      quote:
        "Overall a wonderful experience. Really grateful for the services provided.",
      author: "Naveen Pareek",
      role: "Homeowner, Delhi",
      rating: 5,
    },
  ];

  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <Image
              src={slide.image}
              alt={slide.heading}
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 text-center px-6 max-w-5xl w-full">
          <motion.div
            key={`rule-${current}`}
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1px] bg-[#D4AF37] mx-auto mb-6"
          />

          <AnimatePresence mode="wait">
            <motion.p
              key={`tag-${current}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[11px] tracking-[0.5em] uppercase text-[#D4AF37] mb-5"
            >
              {slide.tagline}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.h1
              key={`h1-${current}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-4 animate-gradient"
            >
              {slide.heading}
              <br />
              <span className="italic font-normal text-[#D4AF37]">
                {slide.italic}
              </span>
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${current}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="text-white/70 text-sm md:text-base max-w-xl mx-auto mb-10"
            >
              {slide.sub}
            </motion.p>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <Link
              href="/recent-projects"
              className="px-10 py-3 text-xs tracking-widest uppercase bg-[#D4AF37] text-black hover:bg-[#C9A227] transition rounded"
            >
              View Projects
            </Link>

            <a
              href="/contact-us"
              className="px-10 py-3 text-xs tracking-widest uppercase border border-white/40 text-white hover:bg-white/10 transition rounded"
            >
              Free Consultation
            </a>
          </motion.div>

          <div className="flex items-center justify-center gap-2 mt-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-500 rounded-full ${
                  i === current ? "w-8 h-2 bg-[#D4AF37]" : "w-2 h-2 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* USP BANNER */}
      <section className="relative -mt-14 z-20 w-full">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 lg:grid-cols-4 bg-[#051711] shadow-2xl overflow-hidden border-y border-[#D4AF37]/20 w-full"
          >
            {usps.map((usp, i) => (
              <div
                key={usp.label}
                className={`group flex flex-col items-center text-center gap-3 p-7 md:p-9 hover:bg-[#0A1C17] transition-colors duration-400 ${
                  i < usps.length - 1 ? "border-r border-[#D4AF37]/15" : ""
                }`}
              >
                <usp.icon
                  size={28}
                  strokeWidth={1.2}
                  className="text-[#D4AF37] group-hover:scale-110 transition-transform duration-300"
                />

                <div>
                  <p className="font-serif text-xl md:text-2xl font-bold text-white mb-0.5">
                    {usp.value}
                  </p>

                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/60">
                    {usp.label}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="py-24 md:py-36 px-6 md:px-10 bg-[#051711]"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#D4AF37] mb-4 font-medium">
              What We Offer
            </p>

            <h2 className="gradient-heading text-3xl md:text-4xl leading-[1.1]">
              Our Services
            </h2>
          </motion.div>

          {/* Services Grid */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative p-8 md:p-10 bg-[#051711] rounded-sm hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/60"
              >
                {/* Gold Top Line */}
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#D4AF37] to-[#C9A227] group-hover:w-full transition-all duration-500" />

                {/* Icon */}
                <service.icon
                  size={30}
                  strokeWidth={1.2}
                  className="text-[#D4AF37] mb-6 group-hover:text-[#D4AF37]/80 group-hover:scale-110 transition-all duration-300"
                />

                {/* Title - Changed to white */}
                <h3 className="font-serif text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description - Changed to light gray/white */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More - Changed to white/gold */}
                <a
                  href="#contact"
                  className="inline-block mt-6 text-[10px] tracking-[0.2em] uppercase text-gray-300 font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:text-[#D4AF37]"
                >
                  Learn More →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
        {/* View More Button */}

        <div className="mt-16 flex justify-center">
          <Link
            href="/services"
            className="px-12 py-3 text-xs tracking-[0.25em] uppercase bg-[#D4AF37] text-black hover:bg-[#C9A227] transition-all duration-300 rounded-sm shadow-lg"
          >
            View More
          </Link>
        </div>
      </section>

      {/* WORK PROCESS */}

      <section
        id="process"
        className="py-24 md:py-36 px-6 md:px-10 bg-[#051711] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#D4AF37] mb-4 font-medium">
              How We Work
            </p>

            <h2
              className="gradient-heading text-3xl md:text-4xl leading-[1.1]"
              style={{
                background:
                  "linear-gradient(270deg, #fff6d5, #f7d774, #CC9008, #fff1b8, #b67a00, #fff6d5)",
                backgroundSize: "400% 400%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Work Process
            </h2>
          </motion.div>

          {/* Steps Grid */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 md:p-10 border border-white/10 hover:border-[#D4AF37]/50 hover:bg-white/5 rounded-sm transition-all duration-500 overflow-hidden"
              >
                {/* Background Number */}

                <span className="absolute top-3 right-5 font-serif text-7xl font-bold text-white/5 group-hover:text-[#D4AF37]/10 transition-colors duration-500 select-none">
                  {step.num}
                </span>

                {/* Icon + Step */}

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/15 flex items-center justify-center group-hover:bg-[#D4AF37]/25 transition-colors duration-300">
                    <step.icon
                      size={16}
                      strokeWidth={1.5}
                      className="text-[#D4AF37]"
                    />
                  </div>

                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37]/70 font-medium">
                    Step {step.num}
                  </span>
                </div>

                {/* Title */}

                <h3 className="font-serif text-lg font-semibold text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}

                <p className="text-white/60 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
         <div className="mt-16 flex justify-center">
          <Link
            href="/work-process"
            className="px-12 py-3 text-xs tracking-[0.25em] uppercase bg-[#D4AF37] text-black hover:bg-[#C9A227] transition-all duration-300 rounded-sm shadow-lg"
          >
            View More
          </Link>
        </div>
      </section>

      {/* PROJECTS SECTION */}

      <section className="py-24 md:py-32 px-6 md:px-10 bg-[#051711]">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#D4AF37] mb-4 font-medium">
              Our Portfolio
            </p>

            <h2 className="gradient-heading text-3xl md:text-4xl leading-[1.1]">
              Our Projects
            </h2>
          </motion.div>

          {/* Content Layout */}

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[11px] tracking-[0.45em] uppercase text-[#D4AF37] mb-4 ">
                Recent Projects
              </p>

              <br />

              <h2 className="gradient-heading text-3xl md:text-3xl leading-[1.1]">
                Crafted to Perfection
              </h2>

              <br />

              <div className="flex gap-1 mb-6 text-[#D4AF37] text-lg text-center">
                ★ ★ ★ ★ ★
              </div>

              <p className="text-white/70 leading-relaxed max-w-md mb-6">
                “The Grandiose transformed our apartment into a luxurious haven.
                Their attention to detail and precise execution exceeded our
                expectations.”
              </p>

              <p className="text-[#D4AF37] text-sm">
                – Mr & Mrs. Reddy, Bangalore
              </p>
            </motion.div>

            {/* RIGHT IMAGE */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative border border-[#D4AF37]/40">
                <Image
                  src={heroImage}
                  alt="Project"
                  className="w-full h-[360px] object-cover"
                />

                {/* Play Button */}

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-[#D4AF37] flex items-center justify-center backdrop-blur-md cursor-pointer hover:scale-110 transition">
                    <span className="text-[#D4AF37] text-xl">▶</span>
                  </div>
                </div>
              </div>

              {/* Button */}

              <div className="flex justify-center mt-6">
                <Link
                  href="/recent-projects"
                  className="px-10 py-3 border border-[#D4AF37] text-[#D4AF37] uppercase tracking-widest text-xs hover:bg-[#D4AF37] hover:text-black transition"
                >
                  View All Projects
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}

      <section className="py-24 md:py-36 px-6 md:px-10 bg-[#051711]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#D4AF37] mb-4 font-medium">
              Client Stories
            </p>

            <h2 className="gradient-heading text-3xl md:text-4xl leading-[1.1]">
              What Our Clients Say
            </h2>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 md:p-10 bg-[#0A1C17] rounded-sm border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Gold top bar */}
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#D4AF37] group-hover:w-full transition-all duration-500" />

                {/* Quote icon */}
                <Quote
                  size={40}
                  strokeWidth={0.8}
                  className="text-[#D4AF37]/40 mb-4"
                />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star
                      key={j}
                      size={13}
                      className="fill-[#D4AF37] text-[#D4AF37]"
                    />
                  ))}
                </div>

                {/* Quote - Changed to white */}
                <p className="font-serif text-base md:text-lg italic text-white leading-relaxed mb-8">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                      <span className="font-serif text-[#D4AF37] font-bold text-sm">
                        {t.author[0]}
                      </span>
                    </div>

                    <div>
                      {/* Author name - Changed to white */}
                      <p className="text-white text-sm font-semibold">
                        {t.author}
                      </p>

                      {/* Role - Changed to light gray */}
                      <p className="text-gray-400 text-xs mt-0.5">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/reviews"
            className="px-12 py-3 text-xs tracking-[0.25em] uppercase bg-[#D4AF37] text-black hover:bg-[#C9A227] transition-all duration-300 rounded-sm shadow-lg"
          >
            View More
          </Link>
        </div>
      </section>

      {/* FINAL CTA SECTION */}

      <section
        id="contact"
        className="relative py-32 md:py-44 px-6 md:px-10 overflow-hidden"
      >
        {/* Background */}

        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Luxury interior consultation"
            fill
            className="object-cover"
          />

          {/* Green overlay */}

          <div className="absolute inset-0 bg-[#051711]/85" />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#051711]/40" />
        </div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          {/* Gold Divider */}

          <div className="w-14 h-[2px] bg-[#D4AF37] mx-auto mb-8" />

          <p className="text-[11px] tracking-[0.5em] uppercase text-[#D4AF37] mb-5">
            Start Your Journey
          </p>

          {/* Heading */}

          <h2 className="gradient-heading text-3xl md:text-4xl leading-[1.1]">
            Need Creafting Grandeur
            <br />
            <span className="italic gradient-heading text-3xl md:text-4xl leading-[1.1]">
              Service...?
            </span>
          </h2>
          <br />

          {/* Description */}

          <p className="text-white/70 text-sm md:text-base max-w-md mx-auto mb-12 leading-relaxed font-palegoldenrod">
            Every customer receives personal attention from our team of experts
            in home interior design. Based on the project value, location of the
            site, and client specifications, the company assigns a client to an
            interior designer
          </p>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 text-[11px] tracking-[0.25em] uppercase bg-[#D4AF37] text-black font-medium hover:bg-[#C9A227] transition-all duration-300 rounded-sm shadow-lg"
            >
              Book Free Consultation
            </a>

            <a
              href="tel:+919876543210"
              className="w-full sm:w-auto px-10 py-4 text-[11px] tracking-[0.25em] uppercase border border-white/35 text-white hover:bg-white/10 transition-all duration-300 rounded-sm"
            >
              Call Us Now
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
