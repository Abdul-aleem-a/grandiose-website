"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Calendar,
  Building2,
  Home as HomeIcon,
  MapPin,
  Star,
  Users2,
  PenTool,
  HeartHandshake,
  Play,
  ChevronLeft,
  ChevronRight,
  Globe,
  Instagram,
  Youtube,
  Linkedin,
  FileText,
  ChevronDown,
  MessageCircle,
} from "lucide-react";
import noorimg from "../../public/images/noor.webp";
import project1 from "../../public/images/recent-projects/l&t/l&t.webp";
import project2 from "../../public/images/recent-projects/bda/DSC01592.webp";
import project3 from "../../public/images/recent-projects/villa/DSC06807.webp";
import project4 from "../../public/images/recent-projects/metri/metri3bhk.webp";
import project5 from "../../public/images/recent-projects/metri2/metri2bhk.webp";
import contactimg from '../../public/images/contact.jpg'

// ─── DUMMY IMAGES ───
// Using picsum.photos for all dummy images
const dummyImages = {
  founder: noorimg,
  video1: project1,
  video2: project2,
  video3: project3,
  video4: project4,
  video5: project5,
  project1: project1,
  project2: project2,
  project3: project3,
  project4: project4,
  project5: project5,
  journal1: project1,
  journal2: project2,
  journal3: project3,
  cta: contactimg,
};

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const founderStats = [
  {
    icon: Calendar,
    label: "Since",
    value: "2018",
    desc: "Established with a passion for quality & detail",
  },
  {
    icon: Building2,
    label: "100+",
    value: "",
    desc: "Completed Projects Across Bangalore",
  },
  {
    icon: HomeIcon,
    label: "End-to-End",
    value: "",
    desc: "Turnkey Interior Solutions Under One Roof",
  },
  {
    icon: MapPin,
    label: "Bangalore",
    value: "",
    desc: "Based Team Serving with Pride",
  },
];

const quickStats = [
  { icon: Star, value: "100+", label: "Completed Projects" },
  { icon: Users2, value: "6+", label: "Years of Experience" },
  { icon: PenTool, value: "100%", label: "In-House Design & Execution" },
  { icon: HeartHandshake, value: "100%", label: "Client Satisfaction" },
];

const featuredVideos = [
  {
    title: "Luxury 3BHK Apartment Tour",
    sub: "Whitefield, Bangalore",
    duration: "1:02",
    img: dummyImages.video1,
  },
  {
    title: "Complete Modular Kitchen",
    sub: "Design & Walkthrough",
    duration: "0:58",
    img: dummyImages.video2,
  },
  {
    title: "Behind the Scenes",
    sub: "Factory to Installation",
    duration: "1:15",
    img: dummyImages.video3,
  },
  {
    title: "Client Testimonial",
    sub: "Our Happy Clients",
    duration: "1:07",
    img: dummyImages.video4,
  },
  {
    title: "Interior Design Tips",
    sub: "Space Planning Guide",
    duration: "0:46",
    img: dummyImages.video5,
  },
];

const signatureProjects = [
  {
    title: "L & T Raintree Boulevard 3BHK",
    sub: "L & T Raintree Boulevard",
    img: dummyImages.project1,
  },
  {
    title: "BDA Flats Kommaghatta - 2BHK",
    sub: "Kommaghatta",
    img: dummyImages.project2,
  },
  {
    title: "Serenity Highland - Villa",
    sub: "Serenity Highland",
    img: dummyImages.project3,
  },
  {
    title: "Mantri Webcity 3BHK",
    sub: "Mantri Webcity",
    img: dummyImages.project4,
  },
  {
    title: "Mantri Webcity",
    sub: "Mantri Webcity",
    img: dummyImages.project5,
  },
];

const exploreLinks = [
  {
    icon: Globe,
    label: "Official Website",
    value: "thegrandiose.in",
    href: "https://thegrandiose.in",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@thegrandiose.home.interiors",
    href: "#",
  },
  {
    icon: Youtube,
    label: "YouTube Channel",
    value: "The Grandiose Home Interiors",
    href: "#",
  },
  {
    icon: Star,
    label: "Google Business Profile",
    value: "See our reviews",
    href: "#",
  },
  { icon: Linkedin, label: "LinkedIn", value: "Connect with us", href: "#" },
];

const designResources = [
  {
    icon: FileText,
    title: "Interior Design Cost Guide",
    sub: "Estimate your budget smartly",
  },
  {
    icon: FileText,
    title: "Material Selection Guide",
    sub: "Make the right material choices",
  },
  {
    icon: FileText,
    title: "Luxury Design Lookbook",
    sub: "Handpicked for elegant living",
  },
  { icon: FileText, title: "Company Profile", sub: "Know more about us" },
];

const journalPosts = [
  {
    title: "How Much Does a 3BHK Interior Cost in Bangalore?",
    date: "May 20, 2024",
    img: dummyImages.journal1,
  },
  {
    title: "Best Plywood for Interiors – A Complete Guide",
    date: "May 10, 2024",
    img: dummyImages.journal2,
  },
  {
    title: "Top 10 Luxury Kitchen Trends for 2024",
    date: "Apr 28, 2024",
    img: dummyImages.journal3,
  },
];

const testimonials = [
  {
    name: "Rakesh & Priya",
    location: "Whitefield",
    quote:
      "The Grandiose transformed our empty apartment into a luxurious home. The attention to detail and execution was brilliant!",
  },
  {
    name: "Ankita Sharma",
    location: "HSR Layout",
    quote:
      "Professional, transparent and highly creative team. They delivered exactly what was promised, on time.",
  },
  {
    name: "Manoj Nair",
    location: "Sarjapur Road",
    quote:
      "From design to handover, everything was seamless. Truly a team you can trust with your dream home.",
  },
];

const getInitials = (name: string) => {
  const words = name.split(" ").filter((w) => /^[A-Za-z]/.test(w));
  if (words.length === 0) return "";
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

/* ------------------------------------------------------------------ */
/* Component                                                          */
/* ------------------------------------------------------------------ */

const FounderPage = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  return (
    <div className="min-h-screen bg-[#051711]">
      {/* ─── FOUNDER HERO ─── */}
      <section className="relative bg-[#051711] border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
          <div className="grid lg:grid-cols-[1fr_1.4fr_auto] gap-10 lg:gap-14 items-center">
            {/* Founder photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/5] max-w-sm mx-auto lg:mx-0 rounded-sm overflow-hidden"
            >
              <Image
                src={dummyImages.founder}
                alt="Noor Alam — Founder & Design Director"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
                priority
              />
            </motion.div>

            {/* Founder content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center lg:text-left"
            >
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#D4AF37] mb-3 font-sans font-medium text-center">
                Founder &amp; Design Director
              </p>
              <h1 className="gradient-heading text-5xl md:text-6xl mb-2 text-center">
                Noor Alam
              </h1>
              <p className="text-[12px] tracking-[0.3em] uppercase text-white/50 font-sans mb-5 text-center">
                The Grandiose Home Interiors
              </p>
              <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mb-6" />

              <p className="text-white/70 text-sm md:text-[15px] leading-relaxed font-sans max-w-md mx-auto lg:mx-0 mb-8 text-center">
                I believe luxury lies in the perfect balance of thoughtful
                design, quality materials and disciplined execution. My team and
                I are committed to turning your vision into timeless spaces you
                will love, every single day.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <motion.a
                  href="/contact-us"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-[#051711] text-[11px] tracking-[0.15em] uppercase rounded-sm font-medium font-sans hover:bg-[#D4AF37]/85 transition-colors duration-300"
                >
                  <Calendar size={14} /> Book a Consultation
                </motion.a>
                <motion.a
                  href="https://wa.me/9113054788"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#D4AF37]/40 text-white text-[11px] tracking-[0.15em] uppercase rounded-sm font-medium font-sans hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-300"
                >
                  <MessageCircle size={14} /> WhatsApp Me
                </motion.a>
              </div>
            </motion.div>

            {/* Founder mini-stats - Mobile: 2 columns, Desktop: vertical */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border-t lg:border-t-0 lg:border-l border-[#D4AF37]/15 pt-8 lg:pt-0 lg:pl-10"
            >
              <div className="grid grid-cols-2 lg:flex lg:flex-col gap-6">
                {founderStats.map((s) => (
                  <div key={s.desc} className="flex items-start gap-4">
                    <s.icon
                      size={20}
                      className="text-[#D4AF37] shrink-0 mt-1"
                    />
                    <div>
                      <p className="font-serif text-xl text-white leading-none mb-1">
                        {s.label}
                        {s.value && (
                          <span className="block font-serif text-2xl text-[#D4AF37]">
                            {s.value}
                          </span>
                        )}
                      </p>
                      <p className="text-white/50 text-[12px] font-sans leading-snug max-w-[180px]">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── QUICK STATS STRIP ─── */}
      <section className="bg-[#0a2018] border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
            {quickStats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`
            flex flex-col items-center text-center
            ${i < quickStats.length - 1 ? "md:border-r border-[#D4AF37]/15" : ""}
            md:px-6 first:pl-0 last:pr-0
          `}
              >
                <s.icon size={28} className="text-[#D4AF37] mb-2" />

                <span className="font-serif text-2xl md:text-3xl text-white block leading-none">
                  {s.value}
                </span>

                <span className="text-[10px] tracking-[0.15em] uppercase text-white/50 font-sans mt-1">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED VIDEOS ─── */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[#051711]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <p className="text-[12px] tracking-[0.3em] uppercase text-[#D4AF37] font-sans font-medium">
              Featured Videos
            </p>
            <Link
              href="#"
              className="text-[12px] tracking-[0.1em] uppercase text-[#D4AF37]/80 hover:text-[#D4AF37] font-sans flex items-center gap-1"
            >
              View all videos <ChevronRight size={14} />
            </Link>
          </div>

          <div className="relative">
            {/* Left Button */}
            <button
              aria-label="Previous videos"
              className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#0a2018] border border-[#D4AF37]/40 items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#051711] transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Video container with responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {featuredVideos.map((v, i) => (
                <motion.div
                  key={v.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="group"
                >
                  {/* Increased height: changed from aspect-[4/3] to aspect-[3/4] */}
                  <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden mb-3 border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/60 transition-colors duration-300">
                    <Image
                      src={v.img}
                      alt={v.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play
                          size={18}
                          className="text-[#051711] ml-0.5"
                          fill="#051711"
                        />
                      </div>
                    </div>
                    <span className="absolute bottom-3 right-3 text-[11px] bg-black/70 text-white px-2 py-1 rounded font-sans border border-[#D4AF37]/20">
                      {v.duration}
                    </span>
                  </div>
                  <h3 className="text-white text-[14px] md:text-[15px] font-sans font-medium leading-snug group-hover:text-[#D4AF37] transition-colors duration-300">
                    {v.title}
                  </h3>
                  <p className="text-white/50 text-[12px] md:text-[13px] font-sans">
                    {v.sub}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Right Button */}
            <button
              aria-label="Next videos"
              className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#0a2018] border border-[#D4AF37]/40 items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#051711] transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ─── SIGNATURE PROJECTS ─── */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[#051711] border-t border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <p className="text-[12px] tracking-[0.3em] uppercase text-[#D4AF37] font-sans font-medium">
              Signature Projects
            </p>
            <Link
              href="/recent-projects"
              className="text-[12px] tracking-[0.1em] uppercase text-[#D4AF37]/80 hover:text-[#D4AF37] font-sans flex items-center gap-1"
            >
              View all projects <ChevronRight size={14} />
            </Link>
          </div>

          {/* FIXED: Vertical stack on mobile, grid on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {signatureProjects.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group"
              >
                <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden mb-3">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 220px"
                  />
                </div>
                <h3 className="text-white text-[14px] font-sans font-medium">
                  {p.title}
                </h3>
                <p className="text-white/50 text-[12px] font-sans">{p.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPLORE MORE / RESOURCES / JOURNAL ─── */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[#0a2018] border-t border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 md:gap-0">
          {/* Explore More */}
          <div className="md:pr-8 md:border-r border-[#D4AF37]/15">
            <p className="text-[12px] tracking-[0.3em] uppercase text-[#D4AF37] font-sans font-medium mb-6">
              Explore More
            </p>
            <div className="flex flex-col divide-y divide-white/10">
              {exploreLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  className="flex items-center justify-between py-4 group"
                >
                  <div className="flex items-center gap-3">
                    <l.icon size={18} className="text-[#D4AF37]" />
                    <div>
                      <p className="text-white text-[13px] font-sans">
                        {l.label}
                      </p>
                      <p className="text-white/50 text-[11px] font-sans">
                        {l.value}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    size={14}
                    className="text-white/30 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all duration-300"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Design Resources */}
          <div className="md:px-8 md:border-r border-[#D4AF37]/15">
            <p className="text-[12px] tracking-[0.3em] uppercase text-[#D4AF37] font-sans font-medium mb-6">
              Design Resources
            </p>
            <div className="flex flex-col divide-y divide-white/10">
              {designResources.map((r) => (
                <Link
                  key={r.title}
                  href="#"
                  className="flex items-center justify-between py-4 group"
                >
                  <div className="flex items-center gap-3">
                    <r.icon size={18} className="text-[#D4AF37]" />
                    <div>
                      <p className="text-white text-[13px] font-sans">
                        {r.title}
                      </p>
                      <p className="text-white/50 text-[11px] font-sans">
                        {r.sub}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Latest from Journal */}
          <div className="md:pl-8">
            <div className="flex items-center justify-between mb-6">
              <p className="text-[12px] tracking-[0.3em] uppercase text-[#D4AF37] font-sans font-medium">
                Latest From Design Journal
              </p>
            </div>
            <div className="flex flex-col gap-5">
              {journalPosts.map((post) => (
                <Link key={post.title} href="#" className="flex gap-4 group">
                  <div className="relative w-16 h-16 shrink-0 rounded-sm overflow-hidden">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <p className="text-white text-[13px] font-sans leading-snug group-hover:text-[#D4AF37] transition-colors duration-300">
                      {post.title}
                    </p>
                    <p className="text-white/40 text-[11px] font-sans mt-1">
                      {post.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-1 mt-6 text-[12px] tracking-[0.1em] uppercase text-[#D4AF37]/80 hover:text-[#D4AF37] font-sans"
            >
              View all articles <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[#051711] border-t border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[12px] tracking-[0.3em] uppercase text-[#D4AF37] font-sans font-medium mb-8">
            What Our Clients Say
          </p>

          <div className="relative">
            <button
              aria-label="Previous testimonial"
              onClick={() =>
                setTestimonialIndex((i) =>
                  i === 0 ? testimonials.length - 1 : i - 1,
                )
              }
              className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[#051711] border border-[#D4AF37]/30 items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37]/10"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-[#0a2018] border border-[#D4AF37]/15 rounded-sm p-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        size={13}
                        className="text-[#D4AF37]"
                        fill="#D4AF37"
                      />
                    ))}
                  </div>
                  <p className="text-white/70 text-[13px] leading-relaxed font-sans mb-6">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 bg-[#D4AF37]/15 flex items-center justify-center">
                      <span className="text-[#D4AF37] text-[13px] font-sans font-semibold">
                        {getInitials(t.name)}
                      </span>
                    </div>
                    <div>
                      <p className="text-white text-[13px] font-sans font-medium">
                        – {t.name}
                      </p>
                      <p className="text-white/40 text-[11px] font-sans">
                        {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              aria-label="Next testimonial"
              onClick={() =>
                setTestimonialIndex((i) =>
                  i === testimonials.length - 1 ? 0 : i + 1,
                )
              }
              className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[#051711] border border-[#D4AF37]/30 items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37]/10"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setTestimonialIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === testimonialIndex
                    ? "w-6 bg-[#D4AF37]"
                    : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT / CTA FORM ─── */}
      <section
        id="contact"
        className="relative py-16 md:py-20 px-6 md:px-10 bg-[#0a2018] border-t border-[#D4AF37]/15 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1fr_0.9fr] gap-10 items-center">
          {/* Left copy */}
          <div>
            <div className="w-12 h-12 rounded-sm border border-[#D4AF37]/40 flex items-center justify-center mb-5">
              <HomeIcon size={20} className="text-[#D4AF37]" />
            </div>
            <h2 className="gradient-heading text-2xl md:text-3xl mb-4 leading-snug">
              Let's Create Something
              <br />
              Extraordinary Together
            </h2>
            <p className="text-white/60 text-sm font-sans leading-relaxed">
              Have a project in mind? Let's discuss how we can bring your vision
              to life with elegance and precision.
            </p>
          </div>

          {/* Form - Mobile: single column, Desktop: 2 columns */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="col-span-1 bg-[#051711] border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder:text-white/40 font-sans focus:outline-none focus:border-[#D4AF37]/50"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="col-span-1 bg-[#051711] border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder:text-white/40 font-sans focus:outline-none focus:border-[#D4AF37]/50"
            />
            <div className="relative col-span-1">
              <select className="w-full appearance-none bg-[#051711] border border-white/10 rounded-sm px-4 py-3 text-sm text-white/70 font-sans focus:outline-none focus:border-[#D4AF37]/50">
                <option>Project Location</option>
                <option>Whitefield</option>
                <option>HSR Layout</option>
                <option>Koramangala</option>
                <option>Sarjapur Road</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
              />
            </div>
            <div className="relative col-span-1">
              <select className="w-full appearance-none bg-[#051711] border border-white/10 rounded-sm px-4 py-3 text-sm text-white/70 font-sans focus:outline-none focus:border-[#D4AF37]/50">
                <option>Budget Range</option>
                <option>Under ₹10L</option>
                <option>₹10L – ₹25L</option>
                <option>₹25L – ₹50L</option>
                <option>₹50L+</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="col-span-1 md:col-span-2 mt-2 bg-[#D4AF37] text-[#051711] text-[12px] tracking-[0.15em] uppercase font-medium font-sans py-3.5 rounded-sm hover:bg-[#D4AF37]/85 transition-colors duration-300"
            >
              Schedule a Free Consultation
            </motion.button>
          </form>

          {/* Right image - Hidden on mobile, visible on desktop */}
          <div className="relative hidden lg:block w-full aspect-[3/4] rounded-sm overflow-hidden">
            <Image
              src={dummyImages.cta}
              alt="The Grandiose interior"
              fill
              className="object-cover"
              sizes="320px"
            />
            <div className="absolute inset-0 bg-[#051711]/30" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FounderPage;
