"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { recentProjects } from "@/lib/recentProjectsData";

// Decorative diamond divider SVG
const DiamondDivider = () => (
  <div className="flex items-center justify-center gap-3 my-2">
    <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
    <svg
      width="12"
      height="12"
      viewBox="0 0 14 14"
      fill="none"
      className="sm:w-3.5 sm:h-3.5"
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

export default function RecentProjectsPage() {
  return (
    <div className="min-h-screen bg-[#051711] font-sans overflow-x-hidden">
      {/* Noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('/noise.png')] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
        {/* Top diamond divider */}
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
          transition={{ delay: 0.2, duration: 0.6 }}
          className="gradient-heading text-4xl md:text-5xl leading-[1.1]"
          style={{
            fontFamily: "Cabinet Grotesk",
          }}
        >
          Projects
        </motion.h1>

        <br />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-white text-base md:text-lg font-serif font-palegoldenrod tracking-wide mb-3 px-2"
        >
          Crafted Luxury Interiors in Bangalore
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="text-white/50 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto px-4"
        >
          From concept to completion — explore our refined transformations.
        </motion.p>

        {/* Projects Grid - 1 on mobile, 2 on tablet, 3 on desktop */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 text-left">
          {recentProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              className="group flex flex-col gap-2 sm:gap-3"
            >
              {/* Image */}
              <Link href={`/recent-projects/${project.slug}`}>
                <div className="relative overflow-hidden rounded-sm aspect-[4/3] border border-[#D4AF37]/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)] cursor-pointer">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B4D3E]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
              {/* Label + CTA */}
              <div className="flex flex-col items-start gap-1.5 sm:gap-2 px-1">
                <h3 className="font-serif text-white text-base sm:text-lg font-semibold leading-snug">
                  {project.title} —{" "}
                  <span className="italic font-normal text-white/70">
                    {project.subtitle}
                  </span>
                </h3>
                <Link
                  href={`/recent-projects/${project.slug}`}
                  className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#D4AF37] border border-[#D4AF37]/40 px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-[#D4AF37] hover:text-[#1B4D3E] transition-all duration-300 rounded-sm inline-block"
                >
                  View Case Study
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom diamond divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 sm:mt-20"
        >
          <DiamondDivider />
        </motion.div>
      </div>
    </div>
  );
}
