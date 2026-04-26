"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  signatureProducts,
  CATEGORIES,
  type Category,
} from "@/lib/signatureCollectionData";

const DiamondDivider = () => (
  <div className="flex items-center justify-center gap-3">
    <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
    <svg
      width="12"
      height="12"
      viewBox="0 0 14 14"
      fill="none"
      className="w-3 h-3 sm:w-3.5 sm:h-3.5"
    >
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
    <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
  </div>
);

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");

  const filtered =
    activeCategory === "ALL"
      ? signatureProducts
      : signatureProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#1B4D3E] font-sans overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
        {/* Top divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6 }}
        >
          <DiamondDivider />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest uppercase text-[#D4AF37] mt-6 mb-2 px-2"
          style={{ letterSpacing: "0.1em" }}
        >
          Signature Collection
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-serif italic text-white/70 sm:text-white/80 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 px-4"
        >
          Exquisite Pieces for Luxurious Living
        </motion.p>

        {/* Category Filter - responsive scrollable on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-start overflow-x-auto sm:overflow-visible gap-x-4 sm:gap-x-6 gap-y-2 border-b border-white/10 pb-3 sm:pb-4 mb-8 sm:mb-10 scrollbar-thin"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-medium pb-1.5 sm:pb-1 transition-all duration-300 border-b-2 whitespace-nowrap ${
                activeCategory === cat
                  ? "text-[#D4AF37] border-[#D4AF37]"
                  : "text-white/40 sm:text-white/50 border-transparent hover:text-white/70 sm:hover:text-white/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Products Grid - responsive: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 text-center">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <motion.div
                key={product.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group flex flex-col gap-2 sm:gap-3"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-sm aspect-[4/3] border border-[#D4AF37]/15 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)]">
                  <Image
                    src={product.heroImage}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B4D3E]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Label + CTA */}
                <div className="flex flex-col items-start gap-1.5 sm:gap-2 px-1">
                  <h3 className="font-serif text-white text-sm sm:text-base font-semibold leading-snug line-clamp-2">
                    {product.name}
                  </h3>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] border border-[#D4AF37]/40 px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-[#D4AF37] hover:text-[#1B4D3E] transition-all duration-300 rounded-sm inline-block"
                  >
                    Enquire Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 text-center"
          >
            <p className="text-white/50 text-sm tracking-wide">
              No products found in this category.
            </p>
          </motion.div>
        )}

        {/* Bottom divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 sm:mt-16 space-y-4"
        >
          <DiamondDivider />
          <p className="font-serif italic text-[#D4AF37] text-lg sm:text-xl">
            Discover Timeless Elegance
          </p>
          <DiamondDivider />
        </motion.div>
      </div>
    </div>
  );
}
