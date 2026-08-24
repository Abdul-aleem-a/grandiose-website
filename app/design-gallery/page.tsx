"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { designCategories } from "@/lib/designGalleryData";

const DiamondDivider = () => (
  <div className="flex items-center justify-center gap-3">
    <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect
        x="7"
        y="0.5"
        width="9"
        height="9"
        transform="rotate(45 7 0.5)"
        fill="#D4AF37"
        fillOpacity="0.7"
      />
    </svg>
    <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
  </div>
);

export default function DesignGalleryPage() {
  // Split into rows: 2 + 2 + last row (remaining)
  const rows: (typeof designCategories)[] = [];
  for (let i = 0; i < designCategories.length; i += 2) {
    rows.push(designCategories.slice(i, i + 2));
  }

  return (
    <div className="min-h-screen bg-[#051711] font-sans">
      <div className="max-w-7xl mx-auto px-0">
        {/* ── GRID ── */}
        <div className="flex flex-col">
          {rows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className={`grid grid-cols-1 sm:grid-cols-2 mt-6 sm:mt-10 gap-6 sm:gap-10 ${
                rowIdx < rows.length - 1
                  ? "border-b border-[#D4AF37]/15 pb-6 sm:pb-0"
                  : ""
              }`}
            >
              {row.map((category, colIdx) => (
                <motion.div
                  key={category.slug}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: (rowIdx * 2 + colIdx) * 0.1,
                    duration: 0.7,
                  }}
                  className={`relative group overflow-hidden aspect-[16/7] cursor-pointer ${
                    colIdx === 0 && row.length === 2 && rowIdx < rows.length - 1
                      ? "sm:border-r sm:border-[#D4AF37]/15"
                      : ""
                  }`}
                >
                  <Link
                    href={`/design-gallery/${category.slug}`}
                    className="block w-full h-full"
                  >
                    {/* Background Image */}
                    <Image
                      src={category.heroImage}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      quality={85}
                    />

                    {/* Dark overlay - deeper on hover */}
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
                    {/* Gradient from bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Gold border reveal on hover */}
                    <div className="absolute inset-0 border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/30 transition-all duration-500" />

                    {/* Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8">
                      <motion.h2 className="font-serif text-2xl sm:text-3xl md:text-2xl lg:text-5xl font-semibold text-white mb-2 leading-tight drop-shadow-lg">
                        {category.title}{" "}
                        <span className="italic font-normal text-[#D4AF37]">
                          Designs
                        </span>
                      </motion.h2>
                      <p className="text-white/60 text-xs sm:text-sm md:text-base font-sans tracking-wide group-hover:text-white/80 transition-colors duration-300 px-2 sm:px-0">
                        {category.subtitle}
                      </p>

                      {/* Hover CTA */}
                      <motion.div className="mt-3 sm:mt-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <span className="text-[9px] sm:text-[10px] tracking-[0.35em] uppercase text-[#D4AF37] border border-[#D4AF37]/50 px-3 sm:px-5 py-1.5 sm:py-2 inline-block">
                          Explore Designs
                        </span>
                      </motion.div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
