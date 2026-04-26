"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import aboutHeroBg from "../../public/sofa.jpg";
import { ChevronRight, ArrowRight } from "lucide-react";
import aboutStudio from "../../public/sofa.jpg";

function page() {
  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={aboutHeroBg}
            alt="The Grandiose design studio"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
        </div>
        <div className="absolute inset-0 bg-[#1B4D3E]/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B4D3E]/40 via-transparent to-[#1B4D3E]/90" />

        <div className="relative z-10 text-center px-6">
          {/* Breadcrumb */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-5"
          >
            Why <span className="text-[#D4AF37] italic font-normal">Us ?</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-20 h-[2px] bg-[#D4AF37] mx-auto mb-5 origin-center"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-white/60 text-sm md:text-base max-w-xl mx-auto font-sans tracking-wide"
          >
            Bangalore's premier interior design studio — crafting grandeur since
            2018
          </motion.p>
          <br />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-white/50 text-[11px] tracking-[0.25em] uppercase font-sans mb-6"
          >
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37]">Why US?</span>
          </motion.div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-[#D4AF37]/25" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-[#D4AF37]/25" />
      </section>

      {/* ─── OUR STORY ─── */}
      <section className="py-24 md:py-36 px-6 md:px-10 bg-[#1B4D3E]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-[#D4AF37]/20 rounded-sm -z-10" />
              <div className="relative overflow-hidden rounded-sm aspect-[4/5]">
                <Image
                  src={aboutStudio}
                  alt="The Grandiose studio interior"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                />
              </div>
              <div className="absolute -bottom-5 left-6 bg-[#1B4D3E] text-white px-6 py-4 rounded-sm shadow-xl border border-[#D4AF37]/30">
                <span className="font-serif text-3xl font-bold text-[#D4AF37] block">
                  7+
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-white/60 font-sans">
                  Years of Excellence
                </span>
              </div>
            </motion.div>

            {/* Content side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[11px] tracking-[0.45em] uppercase text-[#D4AF37] mb-4 font-sans font-medium">
                Why this Company ?
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                The Grandiose
                <br />
                <span className="italic font-normal text-[#D4AF37]">
                  Home Interiors
                </span>
              </h2>
              <div className="w-12 h-[2px] bg-[#D4AF37] mb-7" />

              <p className="text-white/70 leading-relaxed mb-4 text-sm md:text-base font-sans">
                Every customer receives personal attention from our team of
                experts in home interior design. Based on the project value,
                location of the site, and client specifications, the company
                assigns a client to an interior designer. The world is your
                oyster when it comes to interior design services. By leveraging
                our specialized approach, we gain appreciation value for our
                clients' homes, businesses, and properties.
              </p>
              <p className="text-white/70 leading-relaxed mb-4 text-sm md:text-base font-sans">
                Today, it is common for businesses to put interior design on the
                back burner due to their busy schedules. A solution that saves
                you time and money is available at The Grandiose.
              </p>
              <p className="text-white/70 leading-relaxed mb-10 text-sm md:text-base font-sans">
                As interior designers, we strive to design residential interiors
                that are modular, easy to install, easy to refix, and if
                necessary, easy to relocate whenever possible.
              </p>

              <motion.a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#D4AF37] text-[#1B4D3E] hover:bg-[#D4AF37]/85 text-[11px] tracking-[0.2em] uppercase rounded-sm transition-all duration-300 font-medium font-sans"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch <ArrowRight size={14} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;