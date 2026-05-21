"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Award, Users, Calendar, Shield, ChevronRight, Phone, ArrowRight } from "lucide-react";

// Import images with Next.js Image optimization
import aboutHeroBg from "../../public/sofa.jpg";
import aboutStudio from "../../public/sofa.jpg";
import aboutTeam from "../../public/sofa.jpg";
import aboutProject1 from "../../public/sofa.jpg";
import aboutProject2 from "../../public/sofa.jpg";
import aboutProject3 from "../../public/sofa.jpg";

const stats = [
  { icon: Calendar, value: "2018", label: "Year of Establishment" },
  { icon: Users, value: "60+", label: "Skilled Team Members" },
  { icon: Award, value: "150+", label: "Happy Customers" },
  { icon: Shield, value: "10", label: "Years Warranty" },
];

const team = [
  { name: "Noor Alam", role: "Founder", initials: "NA" },
  { name: "Asviya Imran", role: "Interior Architect", initials: "AI" },
  { name: "Shaikh Sulaiman", role: "Site Manager", initials: "SS" },
  { name: "Nagesh", role: "Interior Designer", initials: "N" },
  { name: "Yaseen Arafath", role: "Civil Engineer", initials: "YA" },
];

const signatureProjects = [
  { name: "Prestige Group", img: aboutProject1 },
  { name: "Sobha Limited", img: aboutProject2 },
  { name: "Adarsh Palm Retreat", img: aboutProject3 },
  { name: "Mantri Developers", img: aboutProject1 },
  { name: "Brigade Group", img: aboutProject2 },
  { name: "Puravankara", img: aboutProject3 },
  { name: "Puravankara", img: aboutProject3 },
  { name: "Puravankara", img: aboutProject3 },
  { name: "Puravankara", img: aboutProject3 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const About = () => {
  return (
    <div className="min-h-screen bg-[#051711]">
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
        <div className="absolute inset-0 bg-[#051711]/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#051711]/40 via-transparent to-[#051711]/90" />

        <div className="relative z-10 text-center px-6">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-white/50 text-[11px] tracking-[0.25em] uppercase font-sans mb-6"
          >
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <ChevronRight size={12} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37]">About Us</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="gradient-heading text-5xl md:text-5xl mb-5"
          >
            About Us
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
            Bangalore's premier interior design studio — crafting grandeur since 2018
          </motion.p>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-[#D4AF37]/25" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-[#D4AF37]/25" />
      </section>

      {/* ─── OUR STORY ─── */}
      <section className="py-24 md:py-36 px-6 md:px-10 bg-[#051711]">
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
              <div className="absolute -bottom-5 left-6 bg-[#051711] text-white px-6 py-4 rounded-sm shadow-xl border border-[#D4AF37]/30">
                <span className="font-serif text-3xl font-bold text-[#D4AF37] block">8+</span>
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
                About Our Studio
              </p>
              <h2 className="gradient-heading text-5xl md:text-5xl mb-5">
                The Grandiose
                <br />
                <span className="italic gradient-heading text-5xl md:text-5xl mb-5">Home Interiors</span>
              </h2>
              <div className="w-12 h-[2px] bg-[#D4AF37] mb-7" />

              <p className="text-white/70 leading-relaxed mb-4 text-sm md:text-base font-sans">
                Professional interior designers can help you bring your ideas to life. Need assistance
                choosing the right interior components and design for your new home or renovating an old
                one? Investing in a professional interior designer will increase your home's value over
                time.
              </p>
              <p className="text-white/70 leading-relaxed mb-4 text-sm md:text-base font-sans">
                Adding new ideas to your home is part of the creative journey you are embarking upon.
                Different experiences may lead to different ideas.
              </p>
              <p className="text-white/70 leading-relaxed mb-10 text-sm md:text-base font-sans">
                As a team, we recognize that each client, site, and location has a unique personality. Our
                mission is to design contemporary, inspiring, and customized environments and spaces for
                each of our clients. Collaboration with the client ensures that no two projects are
                identical, highlighting diversity in creativeness and knowledge.
              </p>

              <motion.a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#D4AF37] text-[#051711] hover:bg-[#D4AF37]/85 text-[11px] tracking-[0.2em] uppercase rounded-sm transition-all duration-300 font-medium font-sans"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch <ArrowRight size={14} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── STATS BANNER ─── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={aboutTeam}
            alt="Our team at work"
            fill
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
        </div>
        <div className="absolute inset-0 bg-[#051711]/85" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <stat.icon className="mx-auto mb-3 text-[#D4AF37]" size={28} />
                <p className="text-[10px] tracking-[0.25em] uppercase text-white/50 font-sans mb-2">
                  {stat.label}
                </p>
                <span className="font-serif text-4xl md:text-5xl font-bold text-[#D4AF37]">
                  {stat.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR TEAM ─── */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-[#051711]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#D4AF37] mb-4 font-sans font-medium">
              The People Behind
            </p>
            <h2 className="gradient-heading text-3xl md:text-3xl mb-5">
              Our Team
            </h2>
            <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group text-center"
              >
                {/* Avatar circle */}
                <div className="relative w-28 h-28 mx-auto mb-5">
                  <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/30 group-hover:border-[#D4AF37]/60 transition-colors duration-500" />
                  <div className="absolute inset-[3px] rounded-full border border-white/10" />
                  <div className="absolute inset-0 rounded-full bg-white/5 flex items-center justify-center">
                    <span className="font-serif text-2xl font-bold text-[#D4AF37]">
                      {member.initials}
                    </span>
                  </div>
                </div>
                <h3 className="font-serif text-lg font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-[11px] tracking-[0.15em] uppercase text-white/50 font-sans">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SIGNATURE PROJECTS ─── */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-[#051711] border-t border-[#D4AF37]/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#D4AF37] mb-4 font-sans font-medium">
              Trusted By The Best
            </p>
            <h2 className="gradient-heading text-3xl md:text-3xl mb-5">
              Our Signature Projects
            </h2>
            <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {signatureProjects.map((project, i) => (
              <motion.div
                key={`${project.name}-${i}`}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group"
              >
                <div className="aspect-square rounded-full overflow-hidden border-2 border-[#D4AF37]/20 group-hover:border-[#D4AF37]/60 transition-all duration-500 mx-auto w-28 h-28 md:w-32 md:h-32">
                  <div className="relative w-full h-full">
                    <Image
                      src={project.img}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="128px"
                      quality={85}
                    />
                  </div>
                </div>
                <p className="text-center mt-3 text-[10px] tracking-[0.15em] uppercase text-white/60 font-sans group-hover:text-[#D4AF37] transition-colors duration-300">
                  {project.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 px-6 bg-[#051711] border-t border-[#D4AF37]/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-[11px] tracking-[0.45em] uppercase text-[#D4AF37] mb-4 font-sans font-medium">
            Ready to Transform Your Space?
          </p>
          <h2 className="gradient-heading text-3xl md:text-3xl mb-5">
            Let's Craft Your
            <br />
            <span className="italic gradient-heading text-2xl md:text-2xl mb-5">Dream Home</span>
          </h2>
          <p className="text-white/60 mb-10 text-sm md:text-base font-sans max-w-lg mx-auto">
            Every great space starts with a conversation. Reach out to our team and let's begin
            your journey towards a beautifully crafted interior.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#D4AF37] text-[#051711] hover:bg-[#D4AF37]/85 text-[11px] tracking-[0.2em] uppercase rounded-sm transition-all duration-300 font-medium font-sans"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              WhatsApp Us <ArrowRight size={14} />
            </motion.a>
            <motion.a
              href="tel:+919876543210"
              className="inline-flex items-center gap-3 px-8 py-3.5 border border-[#D4AF37]/40 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] text-[11px] tracking-[0.2em] uppercase rounded-sm transition-all duration-300 font-medium font-sans"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={14} /> Call Us
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;