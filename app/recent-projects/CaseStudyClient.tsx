"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, MapPin, Home, Maximize, IndianRupee, Clock, Check } from "lucide-react";
import type { RecentProject } from "@/lib/recentProjectsData";

const statIcons: Record<string, any> = {
    Location: MapPin,
    "Property Type": Home,
    "Project Size": Maximize,
    "Total Cost": IndianRupee,
    Duration: Clock,
};

const SectionDivider = ({ title }: { title: string }) => (
    <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-5"
    >
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/40" />
        <h2 className="font-serif text-xl md:text-2xl font-bold text-white whitespace-nowrap">
            <span className="gradient-heading text-2xl md:text-2xl leading-[1.1]">{title}</span>
        </h2>
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/40" />
    </motion.div>
);

const BeforeAfterSlider = ({ before, after }: { before: string; after: string }) => {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const updateSlider = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        setSliderPos((x / rect.width) * 100);
    };

    return (
        <div
            ref={containerRef}
            className="relative overflow-hidden rounded-lg aspect-video cursor-col-resize select-none"
            onMouseDown={() => { isDragging.current = true; }}
            onMouseMove={(e) => { if (isDragging.current) updateSlider(e.clientX); }}
            onMouseUp={() => { isDragging.current = false; }}
            onMouseLeave={() => { isDragging.current = false; }}
            onTouchMove={(e) => updateSlider(e.touches[0].clientX)}
        >
            <div className="absolute inset-0">
                <Image src={after} alt="After" fill className="object-cover pointer-events-none" />
            </div>
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
                <div className="absolute inset-0 w-screen">
                    <Image src={before} alt="Before" fill className="object-cover pointer-events-none" />
                </div>
            </div>
            <div className="absolute top-0 bottom-0 w-[2px] bg-[#D4AF37]" style={{ left: `${sliderPos}%` }}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#D4AF37] shadow-lg flex items-center justify-center gap-0.5">
                    <ChevronRight size={12} className="text-[#051711] rotate-180" strokeWidth={2.5} />
                    <ChevronRight size={12} className="text-[#051711]" strokeWidth={2.5} />
                </div>
            </div>
            <div className="absolute bottom-3 left-4 text-[10px] tracking-[0.25em] uppercase text-white/70 font-medium bg-[#051711]/60 px-2 py-1 rounded">Before</div>
            <div className="absolute bottom-3 right-4 text-[10px] tracking-[0.25em] uppercase text-white/70 font-medium bg-[#051711]/60 px-2 py-1 rounded">After</div>
        </div>
    );
};

export default function CaseStudyClient({ project }: { project: RecentProject }) {
    return (
        <div className="min-h-screen bg-[#051711] font-sans overflow-x-hidden">

            {/* ── HERO ── */}
            <section className="relative h-[52vh] min-h-[380px] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0">
                    <Image src={project.heroImage} alt={project.title} fill className="object-cover object-center scale-105 opacity-30" priority sizes="100vw" quality={90} />
                </div>
                <div className="absolute inset-0 bg-[#051711]/90" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#051711]/30 via-[#051711]/70 to-[#051711]" />
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60" />

                <div className="relative z-10 text-center px-4 sm:px-6">
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="text-[9px] sm:text-[10px] tracking-[0.55em] uppercase text-[#D4AF37] mb-4 font-medium">
                        The Grandiose · Bangalore
                    </motion.p>
                    <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, type: "spring", stiffness: 60 }}
                        className="gradient-heading text-2xl md:text-4xl leading-[1.1]">
                        {project.title}{" "}
                        <br />
                        <span className="italic font-palegoldenrod text-[#D4AF37]">{project.subtitle}</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                        className="text-white/70 text-xs sm:text-sm md:text-base max-w-md mx-auto leading-relaxed px-3">
                        Luxury Interiors in the Heart of Bangalore
                    </motion.p>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
                        className="flex items-center justify-center gap-2 mt-5 sm:mt-6 text-[10px] sm:text-[11px] tracking-[0.15em] uppercase flex-wrap">
                        <Link href="/" className="text-white/40 hover:text-[#D4AF37] transition-colors duration-300">Home</Link>
                        <ChevronRight size={11} className="text-[#D4AF37]/50" />
                        <Link href="/recent-projects" className="text-white/40 hover:text-[#D4AF37] transition-colors duration-300">Projects</Link>
                        <ChevronRight size={11} className="text-[#D4AF37]/50" />
                        <span className="text-[#D4AF37] truncate max-w-[150px] sm:max-w-none">{project.title}</span>
                    </motion.div>
                </div>

                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
                    <div className="w-[1px] h-6 bg-[#D4AF37]" />
                    <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                </motion.div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-20 space-y-16 sm:space-y-24">

                {/* ── STATS BAR ── */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-[#D4AF37]/20 rounded-lg overflow-hidden border border-[#D4AF37]/20">
                    {project.stats.map((stat, i) => {
                        const Icon = statIcons[stat.label] ?? MapPin;
                        return (
                            <div key={i} className="bg-[#051711] px-3 sm:px-5 py-4 sm:py-5 flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-[#D4AF37]/60">
                                    <Icon size={12} strokeWidth={1.5} />
                                    <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-medium">{stat.label}</span>
                                </div>
                                <p className="text-white text-xs sm:text-sm font-serif font-semibold break-words">{stat.value}</p>
                            </div>
                        );
                    })}
                </motion.div>

                {/* ── HERO IMAGE ── */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                    className="relative overflow-hidden rounded-lg aspect-video shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)] group">
                    <Image src={project.heroImage} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" quality={90} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051711]/60 to-transparent" />
                </motion.div>

                {/* ── PROJECT OVERVIEW ── */}
                <SectionDivider title="Project Overview" />

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    className="grid lg:grid-cols-2 gap-6">
                    {/* Client Brief Card */}
                    <div className="bg-[#051711] border border-[#D4AF37]/15 rounded-lg p-5 sm:p-6 space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="w-7 h-7 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0 mt-0.5">
                                <span className="text-[#D4AF37] text-xs font-bold font-serif">1</span>
                            </span>
                            <h3 className="gradient-heading text-1xl md:text-1xl leading-[1.1]">Client Brief & Requirements</h3>
                        </div>
                        <p className="text-white/60 text-xs sm:text-sm leading-relaxed pl-10">{project.clientBrief.summary}</p>
                        <div className="pl-10 relative overflow-hidden rounded-md aspect-video">
                            <Image src={project.projectOverview.clientBriefImage} alt="Client brief" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#051711]/60 to-transparent" />
                        </div>
                    </div>

                    {/* Execution Card */}
                    <div className="bg-[#051711] border border-[#D4AF37]/15 rounded-lg p-5 sm:p-6 space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="w-7 h-7 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0 mt-0.5">
                                <span className="text-[#D4AF37] text-xs font-bold font-serif">2</span>
                            </span>
                            <h3 className="gradient-heading text-1xl md:text-1xl leading-[1.1]">Design & Execution Phase</h3>
                        </div>
                        <div className="pl-10 grid grid-cols-2 gap-3">
                            {project.projectOverview.executionImages.map((item, i) => (
                                <div key={i} className="space-y-1.5">
                                    <div className="relative overflow-hidden rounded-md aspect-video">
                                        <Image src={item.img} alt={item.label} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <p className="text-[9px] sm:text-[10px] text-white/50 leading-snug text-center">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* ── CLIENT BRIEF ── */}
                <SectionDivider title="Client Brief & Requirements"/>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
                    <div className="space-y-4 sm:space-y-5">
                        <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{project.clientBrief.summary}</p>
                        <ul className="space-y-2 sm:space-y-3">
                            {project.clientBrief.requirements.map((req, i) => (
                                <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                    className="flex items-start gap-3 text-xs sm:text-sm text-white/75">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                                    {req}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                    <BeforeAfterSlider before={project.beforeImage} after={project.afterImage} />
                </motion.div>

                {/* ── DESIGN & EXECUTION ── */}
                <SectionDivider title="Design & Execution" />

                <div className="space-y-8 sm:space-y-10">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                        {project.executionSteps.map((step, i) => (
                            <motion.p key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="text-[10px] sm:text-[11px] text-[#D4AF37]/80 tracking-wide leading-relaxed px-2">
                                {step.label}
                            </motion.p>
                        ))}
                    </div>
                    <BeforeAfterSlider before={project.beforeAfterExecution.before} after={project.beforeAfterExecution.after} />
                </div>

                {/* ── FINAL TRANSFORMATION ── */}
                <SectionDivider title="Final Transformation" />

                <div className="space-y-6 sm:space-y-8">
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="text-center text-white/60 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto px-4">
                        {project.finalTransformation.description}
                    </motion.p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {project.finalTransformation.rooms.map((room, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6 }}
                                className="group">
                                <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                                    <Image src={room.image} alt={room.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#051711]/70 to-transparent" />
                                </div>
                                <p className="mt-2 sm:mt-3 text-center text-[10px] sm:text-xs tracking-[0.2em] uppercase text-white/60 font-medium">{room.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ── CTA ── */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                    className="flex justify-center pt-4">
                    <Link href="/contact-us"
                        className="px-6 sm:px-10 py-3 sm:py-4 border border-[#D4AF37]/60 text-[#D4AF37] text-[10px] sm:text-xs tracking-[0.35em] uppercase font-medium hover:bg-[#D4AF37] hover:text-[#051711] transition-all duration-300 rounded-sm">
                        Get a Free Consultation
                    </Link>
                </motion.div>

            </div>
        </div>
    );
}