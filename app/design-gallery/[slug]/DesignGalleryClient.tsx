"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronLeft, Phone, ArrowRight } from "lucide-react";
import type { DesignCategory, GalleryFilter } from "@/lib/designGalleryData";
import { GALLERY_FILTERS } from "@/lib/designGalleryData";

const SectionLabel = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center gap-4 mb-6">
    <div className="flex items-center gap-2 text-[#D4AF37]/50">
      <div className="w-6 h-[1px] bg-[#D4AF37]/50" />
      <svg width="8" height="8" viewBox="0 0 8 8">
        <polygon points="4,0 8,4 4,8 0,4" fill="#D4AF37" fillOpacity="0.6" />
      </svg>
    </div>
    <span className="text-[11px] tracking-[0.4em] uppercase font-bold text-white">
      {title}
    </span>
    <div className="flex items-center gap-2 text-[#D4AF37]/50">
      <svg width="8" height="8" viewBox="0 0 8 8">
        <polygon points="4,0 8,4 4,8 0,4" fill="#D4AF37" fillOpacity="0.6" />
      </svg>
      <div className="w-6 h-[1px] bg-[#D4AF37]/50" />
    </div>
  </div>
);

export default function DesignGalleryClient({
  category,
}: {
  category: DesignCategory;
}) {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("All");
  const [galleryPage, setGalleryPage] = useState(0);
  const [columns, setColumns] = useState(2);
  const ITEMS_PER_PAGE = 4;

  // Responsive grid columns based on screen size
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 640) setColumns(1);
      else if (width < 1024) setColumns(2);
      else setColumns(2);
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // Moodboard image changes with filter
  const activeMoodboard =
    category.projectOverview.moodboardImages.find(
      (m) => m.filter === activeFilter,
    )?.image ?? category.projectOverview.moodboardImages[0].image;

  const filteredGallery =
    activeFilter === "All"
      ? category.gallery
      : category.gallery.filter((g) => g.filter === activeFilter);

  const totalPages = Math.ceil(filteredGallery.length / ITEMS_PER_PAGE);
  const visibleGallery = filteredGallery.slice(
    galleryPage * ITEMS_PER_PAGE,
    galleryPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  );

  const handleFilterChange = (f: GalleryFilter) => {
    setActiveFilter(f);
    setGalleryPage(0);
  };

  return (
    <div className="min-h-screen bg-[#1B4D3E] font-sans overflow-x-hidden">
      {/* ── BREADCRUMB ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-6 sm:pt-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] tracking-[0.15em] uppercase flex-wrap"
        >
          <Link
            href="/"
            className="text-white/30 hover:text-[#D4AF37] transition-colors"
          >
            Home
          </Link>
          <ChevronRight size={10} className="text-[#D4AF37]/40 shrink-0" />
          <Link
            href="/design-gallery"
            className="text-white/30 hover:text-[#D4AF37] transition-colors"
          >
            Interiors
          </Link>
          <ChevronRight size={10} className="text-[#D4AF37]/40 shrink-0" />
          <span className="text-[#D4AF37]/80 truncate">{category.title}</span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-10 space-y-12 sm:space-y-16">
        {/* ── HERO SPLIT: Title left, Image right ── */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5 sm:space-y-6 text-center lg:text-left"
          >
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#D4AF37] uppercase tracking-wide leading-[1.1] sm:leading-[1.05]">
                {category.title}
              </h1>
              <p className="font-serif italic text-white/60 text-base sm:text-lg mt-2">
                {category.tagline}
              </p>
            </div>

            {/* Stats - responsive stacking */}
            <div className="flex flex-wrap justify-center lg:justify-start items-stretch gap-0 border border-[#D4AF37]/20 rounded-sm overflow-hidden w-fit mx-auto lg:mx-0">
              {category.stats.map((stat, i) => (
                <div
                  key={i}
                  className={`px-4 sm:px-6 py-3 sm:py-4 text-center ${i < category.stats.length - 1 ? "border-r border-[#D4AF37]/20" : ""}`}
                >
                  <p className="font-serif text-xl sm:text-2xl font-bold text-[#D4AF37]">
                    {stat.value}
                  </p>
                  <p className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-white/40 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Project Overview */}
            <div className="border border-[#D4AF37]/15 rounded-sm p-4 sm:p-5 space-y-3 sm:space-y-4 bg-white/[0.02]">
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#D4AF37]/70 font-semibold flex items-center justify-center lg:justify-start gap-2">
                <svg width="8" height="8" viewBox="0 0 8 8">
                  <polygon
                    points="4,0 8,4 4,8 0,4"
                    fill="#D4AF37"
                    fillOpacity="0.7"
                  />
                </svg>
                Project Overview
                <svg width="8" height="8" viewBox="0 0 8 8">
                  <polygon
                    points="4,0 8,4 4,8 0,4"
                    fill="#D4AF37"
                    fillOpacity="0.7"
                  />
                </svg>
              </p>
              <ul className="space-y-2">
                {category.projectOverview.points.map((pt, i) => (
                  <li
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 text-sm text-center sm:text-left"
                  >
                    <span className="hidden sm:inline w-1.5 h-1.5 rounded-full bg-[#D4AF37]/60 shrink-0 mt-1.5" />
                    <span className="text-white/40 text-xs sm:text-sm">
                      {pt.label}:
                    </span>
                    <span className="text-white/70 sm:text-white/80 text-xs sm:text-sm break-words">
                      {pt.value}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] border border-[#D4AF37]/40 px-4 sm:px-5 py-2 sm:py-2.5 hover:bg-[#D4AF37] hover:text-[#111009] transition-all duration-300"
                >
                  Download Brochure <ChevronRight size={12} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right: Hero image + moodboard that changes with filter */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-3 sm:space-y-4"
          >
            <div className="relative overflow-hidden rounded-sm aspect-video border border-[#D4AF37]/10 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.7)]">
              <Image
                src={category.heroImage}
                alt={category.title}
                fill
                className="object-cover"
                priority
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Moodboard — updates when filter changes */}
            <motion.div
              key={activeMoodboard}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-sm aspect-[16/5] border border-[#D4AF37]/10"
            >
              <Image
                src={activeMoodboard}
                alt="Moodboard"
                fill
                className="object-cover"
                quality={85}
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute top-2 left-2 sm:left-3 text-[8px] sm:text-[9px] tracking-[0.3em] uppercase text-[#D4AF37]/60">
                {activeFilter} Moodboard
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── GALLERY + MATERIALS ── */}
        <div className="grid lg:grid-cols-[1fr_280px] gap-8 lg:gap-10 items-start">
          {/* Gallery */}
          <div className="space-y-5 sm:space-y-6">
            <SectionLabel title={`Our ${category.title} Gallery`} />

            {/* Filter tabs - responsive wrap */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center sm:justify-start">
              {GALLERY_FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => handleFilterChange(f)}
                  className={`text-[10px] sm:text-[11px] tracking-[0.15em] uppercase px-3 sm:px-4 py-1.5 sm:py-2 border transition-all duration-200 whitespace-nowrap ${
                    activeFilter === f
                      ? "bg-[#D4AF37] text-[#111009] border-[#D4AF37] font-semibold"
                      : "border-white/15 text-white/50 hover:border-[#D4AF37]/40 hover:text-white/80"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Grid - responsive columns */}
            <AnimatePresence mode="popLayout">
              <div
                className={`grid gap-3 ${
                  columns === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"
                }`}
              >
                {visibleGallery.map((img, i) => (
                  <motion.div
                    key={img.src}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    className="relative overflow-hidden rounded-sm aspect-[4/3] group border border-[#D4AF37]/10"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      quality={80}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 sm:gap-6 pt-2">
                <button
                  onClick={() => setGalleryPage((p) => Math.max(0, p - 1))}
                  disabled={galleryPage === 0}
                  className="w-7 h-7 sm:w-8 sm:h-8 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] disabled:opacity-20 hover:bg-[#D4AF37]/10 transition-colors"
                >
                  <ChevronLeft size={12} />
                </button>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setGalleryPage(i)}
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-200 ${
                        galleryPage === i
                          ? "bg-[#D4AF37] scale-125"
                          : "bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() =>
                    setGalleryPage((p) => Math.min(totalPages - 1, p + 1))
                  }
                  disabled={galleryPage === totalPages - 1}
                  className="w-7 h-7 sm:w-8 sm:h-8 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] disabled:opacity-20 hover:bg-[#D4AF37]/10 transition-colors"
                >
                  <ChevronRight size={12} />
                </button>
              </div>
            )}
          </div>

          {/* Materials & Finishes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[10px] sm:text-[11px] tracking-[0.35em] uppercase font-bold text-white">
                Materials & Finishes
              </span>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {category.materials.map((mat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-sm aspect-square border border-[#D4AF37]/10 cursor-pointer"
                >
                  <Image
                    src={mat.image}
                    alt={mat.label}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-end p-1.5 sm:p-2">
                    <span className="text-[9px] sm:text-[10px] tracking-[0.1em] uppercase text-white font-medium leading-tight">
                      {mat.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              href="/materials"
              className="flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 border border-[#D4AF37]/25 text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#D4AF37]/70 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all duration-300 mt-2"
            >
              View All Materials <ArrowRight size={11} />
            </Link>
          </motion.div>
        </div>

        {/* ── CTA BANNER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-sm border border-[#D4AF37]/20"
        >
          {/* BG image */}
          <div className="absolute inset-0">
            <Image
              src={category.gallery[0]?.src ?? category.heroImage}
              alt="CTA bg"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#111009]/95 via-[#111009]/80 to-[#111009]/60" />

          <div className="relative z-10 flex flex-col md:grid md:grid-cols-[1fr_auto] items-center gap-4 md:gap-6 px-5 sm:px-8 py-6 sm:py-8 text-center md:text-left">
            <div className="space-y-1">
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white">
                {category.cta.heading}
              </h3>
              <p className="text-white/40 sm:text-white/50 text-xs sm:text-sm">
                {category.cta.subheading}
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2 sm:gap-3 shrink-0">
              <div className="flex items-center gap-2 text-[#D4AF37]/60 text-[9px] sm:text-[10px] tracking-[0.3em] uppercase">
                <Phone size={10} />
                Call Us
              </div>
              <a
                href={`tel:${category.cta.phone.replace(/\s/g, "")}`}
                className="font-serif text-xl sm:text-2xl font-bold text-[#D4AF37] hover:text-white transition-colors duration-300 tracking-wide"
              >
                {category.cta.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
