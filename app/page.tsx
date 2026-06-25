"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { PenTool, Star, Quote, Sofa, Settings, Award } from "lucide-react";
import ctabannerimg from "../public/images/cta-banner.jpg";

import slide1img from "../public/images/slide1.webp";
import slide2img from "../public/images/slide2.webp";
import slide3img from "../public/images/slide3.webp";
import slide4img from "../public/images/slide4.webp";
import slide5img from "../public/images/slide5.webp";

export default function Home() {
  const slides = [
    {
      image: slide1img,
      tagline: "Bangalore",
      heading: "Elevating Luxuary Living",
      italic: "in Bangalore",
      sub: "Delivering bespoke luxury interiors that blend elegance, comfort, and functionality for discerning homeowners across Whitefield, Koramangala, Indiranagar, HSR Layout, and Bangalore's premier locations.",
    },
    {
      image: slide2img,
      tagline: "Bangalore",
      heading: "Luxury Design Experts",
      italic: "in Bangalore",
      sub: "Luxury interior design for homes, villas, and apartments across Whitefield, HSR Layout, Koramangala, Indiranagar, and Bangalore's finest communities.",
    },
    {
      image: slide3img,
      tagline: "Bangalore",
      heading: "Premium Interior Designers",
      italic: "in Bangalore",
      sub: "Creating elegant and personalized interiors for homes, villas, and apartments across Bangalore, including Whitefield, Indiranagar, Koramangala, HSR Layout, Sarjapur Road, Hebbal, and Yelahanka.",
    },
    {
      image: slide4img,
      tagline: "Bangalore",
      heading: "Elegant Interiors for Modern Homes",
      italic: "in Bangalore",
      sub: "Elevating everyday living through thoughtfully designed luxury interiors in Whitefield, Indiranagar, Koramangala, Sarjapur Road, and across Bangalore.",
    },
    {
      image: slide5img,
      tagline: "Bangalore",
      heading: "Crafting Luxury Living Experiences Across",
      italic: "in Bangalore",
      sub: "Designing refined interiors that reflect your lifestyle, with premium solutions for residences across Whitefield, HSR Layout, Koramangala, Indiranagar, and Bangalore.",
    },
  ];

  const usps = [
    {
      icon: PenTool,
      value: "Bespoke Interiors",
      label: "Refined designs customized to your lifestyle and preferences.",
    },
    {
      icon: Sofa,
      value: "Signature Collection",
      label:
        "Exclusive luxury furniture and decor items available for immediate.",
    },
    {
      icon: Settings,
      value: "Turnkey Solutions",
      label: "End-to-end execution, transparent BOQ, and site supervision.",
    },
    {
      icon: Award,
      value: "Trusted Expertise",
      label: "100+ elite homes crafted in Bangalore by our experienced team.",
    },
  ];

  const expertiseItems = [
    {
      title: "Living Spaces",
      image: "/images/living-space.webp",
      alt: "Bare living room shell with natural light",
    },
    {
      title: "Modular Kitchens",
      image: "/images/moduler-kitchen.webp",
      alt: "Modern modular kitchen with marble island",
    },
    {
      title: "Bedroom Designs",
      image: "/images/bedroom-design.webp",
      alt: "Luxury bedroom with emerald velvet bed",
    },
  ];

  const ouServices = [
    {
      title: "Residential Interiors",
      image: "/images/residential.jpg",
      alt: "Bare living room shell with natural light",
    },
    {
      title: "Commercial Interiors",
      image: "/images/commercial.jpg",
      alt: "Modern modular kitchen with marble island",
    },
    {
      title: "Corporate Interiors",
      image: "/images/corporate.jpg",
      alt: "Modern modular kitchen with marble island",
    },
    {
      title: "Modular Kitchen",
      image: "/images/modular.jpg",
      alt: "Luxury bedroom with emerald velvet bed",
    },
    {
      title: "Architectural Planning",
      image: "/images/architectural.jpg",
      alt: "Luxury bedroom with emerald velvet bed",
    },
  ];

  const workProcess = [
    {
      title: "Customer Contacts Us",
      image: "/images/work-process.jpg",
      alt: "Bare living room shell with natural light",
    },
    {
      title: "Requirement & Estimate",
      image: "/images/rough.jpg",
      alt: "Modern modular kitchen with marble island",
    },
    {
      title: "Token & Measurement",
      image: "/images/token-payment.jpg",
      alt: "Luxury bedroom with emerald velvet bed",
    },
    {
      title: "Personalised 3D Designs",
      image: "/images/3d-design.jpg",
      alt: "Luxury bedroom with emerald velvet bed",
    },
    {
      title: "Installation & Handover",
      image: "/images/installation.jpg",
      alt: "Luxury bedroom with emerald velvet bed",
    },
    {
      title: "After-Sales Service",
      image: "/images/sale-services.jpg",
      alt: "Luxury bedroom with emerald velvet bed",
    },
  ];

  const testimonials = [
    {
      quote:
        "Overall, excellent work from The Grandiose. We sent all the designs we had in mind to Mr. Noor and he implemented them all upto the mark. He understood our requirements and delivered well. Will recommend Grandiose to everyone for interior work.",
      author: "Payel Das",
      rating: 5,
    },
    {
      quote:
        "Noor is quite professional and competitive in terms providing the timely delivery and agreed quality. As we were not in town during the work, he was always approachable and being transparent about the progress of the work. It has been a flawless experience for us where we got the basic interior done without any hassles and delays.",
      author: "Deepak Sikri",
      rating: 5,
    },
    {
      quote:
        "Mr Noor, has always been responsive on time and great quality has always been delivered as promised.",
      author: "Bhakti Bhosale",
      rating: 5,
    },
    {
      quote:
        "We got our interiors done from them which includes TV cabinet, false ceiling, hall partition and cupboards. Noor who is the head of Grandiose, first met with us to understand our likes and dislikes before starting the project. Based on our discussion the designs he provided were liked by us. Even the finish we got was exactly same as the design. They were very transparent about the materials they are gonna use and the quality of materials is pretty good which has been used.",
      author: "Ravi kumar",
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
              className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-4 animate-gradient"
            >
              {slide.heading}
              <br />
              <span className="italic font-normal text-white">
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

      {/* expertise SECTION */}
      <section
        id="expertise"
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
              Our Expertise
            </p>

            <h2 className="gradient-heading text-3xl md:text-4xl leading-[1.1] mb-5">
              Luxury Meets Discipline
            </h2>

            <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              At The Grandiose, we blend exquisite design with structured
              project management. Every detail is meticulously planned and
              executed, delivering sophisticated interiors on time, within
              budget.
            </p>
          </motion.div>

          {/* Expertise Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
            {expertiseItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative rounded-sm overflow-hidden transition-all duration-500"
              >
                {/* Gold Top Line */}
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#D4AF37] to-[#C9A227] group-hover:w-full transition-all duration-500 z-10" />

                {/* Image */}
                <div className="relative w-full h-[260px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051711]/40 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-7 bg-[#051711]">
                  <h3 className="font-serif text-[25px] font-semibold text-white mb-4 text-center">
                    {item.title}
                  </h3>

                  <div className="flex justify-center">
                    <a
                      href="/services"
                      className="inline-flex items-center justify-center px-6 py-2.5 text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-medium border border-[#D4AF37]/40 rounded-sm hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* our services SECTION */}
      <section id="ouServices" className="bg-[#051711]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#D4AF37] mb-4 font-medium">
              What we offer
            </p>

            <h2 className="gradient-heading text-3xl md:text-4xl leading-[1.1] mb-5">
              Our Services
            </h2>
          </motion.div>

          {/* Expertise Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
            {ouServices.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative rounded-sm overflow-hidden transition-all duration-500"
              >
                {/* Gold Top Line */}
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#D4AF37] to-[#C9A227] group-hover:w-full transition-all duration-500 z-10" />

                {/* Image */}
                <div className="relative w-full h-[260px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051711]/40 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-7 bg-[#051711]">
                  <h3 className="font-serif text-[25px] font-semibold text-white mb-4 text-center">
                    {item.title}
                  </h3>

                  <div className="flex justify-center">
                    <a
                      href="/services"
                      className="inline-flex items-center justify-center px-6 py-2.5 text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-medium border border-[#D4AF37]/40 rounded-sm hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* workProcess SECTION */}
      <section
        id="workProcess"
        className="bg-[#051711] py-24 md:py-32 px-6 md:px-10"
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

            <h2 className="gradient-heading text-3xl md:text-4xl leading-[1.1] mb-5">
              Our Work Process
            </h2>
          </motion.div>

          {/* Expertise Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
            {workProcess.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative rounded-sm overflow-hidden transition-all duration-500"
              >
                {/* Gold Top Line */}
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#D4AF37] to-[#C9A227] group-hover:w-full transition-all duration-500 z-10" />

                {/* Image */}
                <div className="relative w-full h-[260px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051711]/40 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-7 bg-[#051711]">
                  <h3 className="font-serif text-[25px] font-semibold text-white mb-4 text-center">
                    {item.title}
                  </h3>

                  <div className="flex justify-center">
                    <a
                      href="/work-process"
                      className="inline-flex items-center justify-center px-6 py-2.5 text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] font-medium border border-[#D4AF37]/40 rounded-sm hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="bg-[#051711]">
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
              <div className="relative border border-[#D4AF37]/40 overflow-hidden">
                <iframe
                  className="w-full h-[360px]"
                  src="https://www.youtube.com/embed/8l0UUevU75I?autoplay=1&mute=1&loop=1&playlist=8l0UUevU75I"
                  title="The Grandiose Interior Design"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
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
      <section className="bg-[#051711] py-24 px-6 md:px-10">
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
            src={ctabannerimg}
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
