// "use client";

// import { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import { ChevronRight, MapPin, Home, Maximize, IndianRupee, Clock, Play } from "lucide-react";

// // Replace these with your actual image imports
// import heroImg from "../../public/sofa.jpg";
// import beforeImg from "../../public/sofa.jpg";
// import afterImg from "../../public/sofa.jpg";
// import kitchen1Img from "../../public/sofa.jpg";
// import kitchen2Img from "../../public/sofa.jpg";
// import bedroomImg from "../../public/sofa.jpg";
// import execImg1 from "../../public/sofa.jpg";
// import execImg2 from "../../public/sofa.jpg";
// import execImg3 from "../../public/sofa.jpg";

// const projectStats = [
//     { icon: MapPin, label: "Location", value: "Whitefield, Bangalore" },
//     { icon: Home, label: "Property Type", value: "3BHK Apartment" },
//     { icon: Maximize, label: "Project Size", value: "1,750 sq.ft." },
//     { icon: IndianRupee, label: "Total Cost", value: "₹ 30 Lakh" },
//     { icon: Clock, label: "Duration", value: "2 months" },
// ];

// const clientRequirements = [
//     "Seamless transition between living, dining and kitchen areas.",
//     "An elegant Modular Kitchen with premium materials.",
//     "A serene Master Bedroom with style full frame work.",
//     "Existing one intersection between living, dining and kitchen.",
//     "An elegant modular Kitchen with premium materials.",
//     "A serene Master Bedroom with a plush design.",
//     "A Luxurious Study/Guest Room with rich wood panel paneling, perfect for relaxation or work.",
// ];

// const executionSteps = [
//     { label: "Structural modifications and false ceiling work", image: execImg1 },
//     { label: "Modular fittings with quartz countertops, sleek countery and dissectanles.", image: execImg2 },
//     { label: "Bespoke wardrobes and paneling", image: execImg3 },
// ];

// const finalRooms = [
//     { label: "Modular Kitchen", image: kitchen1Img },
//     { label: "Modular Kitchen", image: kitchen2Img },
//     { label: "Bedroom and room", image: bedroomImg },
// ];

// const CaseStudy = () => {
//     return (
//         <div className="min-h-screen bg-[#1B4D3E] font-sans">

//             {/* ── HERO HEADER ── */}
//             <section className="relative h-[52vh] min-h-[380px] overflow-hidden flex items-center justify-center">
//                 <div className="absolute inset-0 w-full h-full">
//                     <Image
//                         src={heroImg}
//                         alt="3BHK Apartment Transformation"
//                         fill
//                         className="object-cover object-center scale-105 opacity-30"
//                         priority
//                         sizes="100vw"
//                         quality={90}
//                     />
//                 </div>
//                 <div className="absolute inset-0 bg-[#1B4D3E]/90" />
//                 <div className="absolute inset-0 bg-gradient-to-b from-[#1B4D3E]/30 via-[#1B4D3E]/70 to-[#1B4D3E]" />
//                 <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60" />

//                 <div className="relative z-10 text-center px-6">
//                     <motion.p
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.2 }}
//                         className="text-[10px] tracking-[0.55em] uppercase text-[#D4AF37] mb-4 font-medium"
//                     >
//                         The Grandiose · Bangalore
//                     </motion.p>
//                     <motion.h1
//                         initial={{ opacity: 0, y: 24 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.35, type: "spring", stiffness: 60 }}
//                         className="font-serif text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-5"
//                     >
//                         Stunning{" "}
//                         <span className="italic font-normal text-[#D4AF37]">3BHK Apartment</span>
//                         <br />Transformation
//                     </motion.h1>
//                     <motion.p
//                         initial={{ opacity: 0, y: 14 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.5 }}
//                         className="text-white/70 text-sm md:text-base max-w-md mx-auto leading-relaxed"
//                     >
//                         Luxury Interiors in the Heart of Bangalore
//                     </motion.p>
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.65 }}
//                         className="flex items-center justify-center gap-2 mt-6 text-[11px] tracking-[0.15em] uppercase"
//                     >
//                         <Link href="/" className="text-white/40 hover:text-[#D4AF37] transition-colors duration-300">Home</Link>
//                         <ChevronRight size={12} className="text-[#D4AF37]/50" />
//                         <Link href="/projects" className="text-white/40 hover:text-[#D4AF37] transition-colors duration-300">Projects</Link>
//                         <ChevronRight size={12} className="text-[#D4AF37]/50" />
//                         <span className="text-[#D4AF37]">3BHK Transformation</span>
//                     </motion.div>
//                 </div>

//                 <motion.div
//                     animate={{ y: [0, 8, 0] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                     className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40"
//                 >
//                     <div className="w-[1px] h-6 bg-[#D4AF37]" />
//                     <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
//                 </motion.div>
//             </section>

//             <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 space-y-24">

//                 {/* ── PROJECT STATS BAR ── */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6 }}
//                     className="grid grid-cols-2 md:grid-cols-5 gap-px bg-[#D4AF37]/20 rounded-lg overflow-hidden border border-[#D4AF37]/20"
//                 >
//                     {projectStats.map((stat, i) => {
//                         const Icon = stat.icon;
//                         return (
//                             <div key={i} className="bg-[#162E27] px-5 py-5 flex flex-col gap-2">
//                                 <div className="flex items-center gap-2 text-[#D4AF37]/60">
//                                     <Icon size={13} strokeWidth={1.5} />
//                                     <span className="text-[10px] tracking-[0.3em] uppercase font-medium">{stat.label}</span>
//                                 </div>
//                                 <p className="text-white text-sm font-serif font-semibold">{stat.value}</p>
//                             </div>
//                         );
//                     })}
//                 </motion.div>

//                 {/* ── HERO IMAGE ── */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.7 }}
//                     className="relative overflow-hidden rounded-lg aspect-video shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)] group"
//                 >
//                     <Image src={heroImg} alt="Living Room" fill className="object-cover group-hover:scale-105 transition-transform duration-700" quality={90} />
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#1B4D3E]/60 to-transparent" />
//                 </motion.div>

//                 {/* ── SECTION DIVIDER ── */}
//                 <SectionDivider title="Project Overview" />

//                 {/* ── PROJECT OVERVIEW ── */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6 }}
//                     className="grid lg:grid-cols-2 gap-6"
//                 >
//                     {/* Client Brief Card */}
//                     <div className="bg-[#162E27] border border-[#D4AF37]/15 rounded-lg p-6 space-y-4">
//                         <div className="flex items-start gap-3">
//                             <span className="w-7 h-7 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0 mt-0.5">
//                                 <span className="text-[#D4AF37] text-xs font-bold font-serif">1</span>
//                             </span>
//                             <h3 className="font-serif text-lg font-bold text-white">Client Brief & Requirements</h3>
//                         </div>
//                         <p className="text-white/60 text-sm leading-relaxed pl-10">
//                             The Singh family wanted a sophisticated, elegant home that combined modern luxury with practical living solutions. Their vision was clear: a high-end, timeless design with meticulous execution.
//                         </p>
//                         <div className="pl-10 relative overflow-hidden rounded-md aspect-video">
//                             <Image src={heroImg} alt="Client brief" fill className="object-cover" />
//                             <div className="absolute inset-0 bg-gradient-to-t from-[#1B4D3E]/60 to-transparent" />
//                         </div>
//                     </div>

//                     {/* Design & Execution Card */}
//                     <div className="bg-[#162E27] border border-[#D4AF37]/15 rounded-lg p-6 space-y-4">
//                         <div className="flex items-start gap-3">
//                             <span className="w-7 h-7 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0 mt-0.5">
//                                 <span className="text-[#D4AF37] text-xs font-bold font-serif">2</span>
//                             </span>
//                             <h3 className="font-serif text-lg font-bold text-white">Design & Execution Phase</h3>
//                         </div>
//                         <div className="pl-10 grid grid-cols-2 gap-3">
//                             {[
//                                 { img: execImg1, label: "Structural modifications and false ceiling work" },
//                                 { img: execImg2, label: "Modular kitchen installation with quartz countertops" },
//                                 { img: execImg3, label: "Bespoke wardrobes and paneling" },
//                                 { img: kitchen1Img, label: "Custom furniture fit-out and decor styling" },
//                             ].map((item, i) => (
//                                 <div key={i} className="space-y-1.5">
//                                     <div className="relative overflow-hidden rounded-md aspect-video">
//                                         <Image src={item.img} alt={item.label} fill className="object-cover hover:scale-105 transition-transform duration-500" />
//                                     </div>
//                                     <p className="text-[10px] text-white/50 leading-snug text-center">{item.label}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </motion.div>
//                 {/* ── SECTION DIVIDER ── */}
//                 <SectionDivider title="Client Brief & Requirements" />

//                 {/* ── CLIENT BRIEF ── */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6 }}
//                     className="grid lg:grid-cols-2 gap-12 items-start"
//                 >
//                     <div className="space-y-5">
//                         <p className="text-white/70 text-sm leading-relaxed">
//                             The Singh family's expectations, the requirements include:
//                         </p>
//                         <ul className="space-y-3">
//                             {clientRequirements.map((req, i) => (
//                                 <motion.li
//                                     key={i}
//                                     initial={{ opacity: 0, x: -10 }}
//                                     whileInView={{ opacity: 1, x: 0 }}
//                                     viewport={{ once: true }}
//                                     transition={{ delay: i * 0.08 }}
//                                     className="flex items-start gap-3 text-sm text-white/75"
//                                 >
//                                     <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
//                                     {req}
//                                 </motion.li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Before / After */}
//                     {/* Before / After Slider */}
//                     <BeforeAfterSlider before={beforeImg} after={afterImg} />
//                 </motion.div>

//                 {/* ── SECTION DIVIDER ── */}
//                 <SectionDivider title="Design & Execution" />

//                 {/* ── EXECUTION PHASE ── */}
//                 <div className="space-y-10">
//                     <div className="grid grid-cols-3 gap-4 text-center">
//                         {executionSteps.map((step, i) => (
//                             <motion.p
//                                 key={i}
//                                 initial={{ opacity: 0, y: 10 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: i * 0.1 }}
//                                 className="text-[11px] text-[#D4AF37]/80 tracking-wide leading-relaxed"
//                             >
//                                 {step.label}
//                             </motion.p>
//                         ))}
//                     </div>

//                     {/* Execution before/after */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6 }}
//                         className="grid grid-cols-2 gap-4"
//                     >
//                         {[beforeImg, afterImg].map((img, i) => (
//                             <div key={i} className="relative group overflow-hidden rounded-lg aspect-video">
//                                 <Image src={img} alt={i === 0 ? "Before execution" : "After execution"} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-[#1B4D3E]/50 to-transparent" />
//                                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                     <div className="w-12 h-12 rounded-full bg-[#D4AF37]/90 flex items-center justify-center">
//                                         <Play size={18} className="text-[#1B4D3E] fill-[#1B4D3E] ml-1" />
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </motion.div>
//                 </div>

//                 {/* ── SECTION DIVIDER ── */}
//                 <SectionDivider title="Final Transformation" />

//                 {/* ── FINAL ROOMS ── */}
//                 <div className="space-y-6">
//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="text-center text-white/60 text-sm leading-relaxed max-w-2xl mx-auto"
//                     >
//                         The result is a luxurious, cohesive space filled with high-quality finishes and bespoke furniture. Every room harmonizes elegance and functionality, reflecting The Grandiose's dedication to detail.
//                     </motion.p>

//                     <div className="grid grid-cols-3 gap-4">
//                         {finalRooms.map((room, i) => (
//                             <motion.div
//                                 key={i}
//                                 initial={{ opacity: 0, y: 30 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: i * 0.12, duration: 0.6 }}
//                                 className="group"
//                             >
//                                 <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
//                                     <Image src={room.image} alt={room.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
//                                     <div className="absolute inset-0 bg-gradient-to-t from-[#1B4D3E]/70 to-transparent" />
//                                 </div>
//                                 <p className="mt-3 text-center text-xs tracking-[0.2em] uppercase text-white/60 font-medium">{room.label}</p>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* ── CTA ── */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5 }}
//                     className="flex justify-center pt-4"
//                 >
//                     <Link
//                         href="/contact"
//                         className="px-10 py-4 border border-[#D4AF37]/60 text-[#D4AF37] text-xs tracking-[0.35em] uppercase font-medium hover:bg-[#D4AF37] hover:text-[#1B4D3E] transition-all duration-300 rounded-sm"
//                     >
//                         Get a Free Consultation
//                     </Link>
//                 </motion.div>

//             </div>
//         </div>
//     );
// };

// // ── Reusable Section Divider ──
// const SectionDivider = ({ title }: { title: string }) => (
//     <motion.div
//         initial={{ opacity: 0, scaleX: 0 }}
//         whileInView={{ opacity: 1, scaleX: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//         className="flex items-center gap-5"
//     >
//         <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/40" />
//         <h2 className="font-serif text-xl md:text-2xl font-bold text-white whitespace-nowrap">
//             <span className="italic font-normal text-[#D4AF37]">{title}</span>
//         </h2>
//         <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/40" />
//     </motion.div>
// );

// export default CaseStudy;

// const BeforeAfterSlider = ({ before, after }: { before: any; after: any }) => {
//     const [sliderPos, setSliderPos] = useState(50);
//     const containerRef = useRef<HTMLDivElement>(null);
//     const isDragging = useRef(false);

//     const updateSlider = (clientX: number) => {
//         if (!containerRef.current) return;
//         const rect = containerRef.current.getBoundingClientRect();
//         const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
//         setSliderPos((x / rect.width) * 100);
//     };

//     const onMouseDown = () => { isDragging.current = true; };
//     const onMouseMove = (e: React.MouseEvent) => { if (isDragging.current) updateSlider(e.clientX); };
//     const onMouseUp = () => { isDragging.current = false; };
//     const onTouchMove = (e: React.TouchEvent) => { updateSlider(e.touches[0].clientX); };

//     return (
//         <div
//             ref={containerRef}
//             className="relative overflow-hidden rounded-lg aspect-video cursor-col-resize select-none"
//             onMouseDown={onMouseDown}
//             onMouseMove={onMouseMove}
//             onMouseUp={onMouseUp}
//             onMouseLeave={onMouseUp}
//             onTouchMove={onTouchMove}
//         >
//             {/* After (full) */}
//             <div className="absolute inset-0">
//                 <Image src={after} alt="After" fill className="object-cover pointer-events-none" />
//             </div>

//             {/* Before (clipped) */}
//             <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
//                 <div className="absolute inset-0" style={{ width: containerRef.current?.offsetWidth || "100%" }}>
//                     <Image src={before} alt="Before" fill className="object-cover pointer-events-none" />
//                 </div>
//             </div>

//             {/* Divider line */}
//             <div className="absolute top-0 bottom-0 w-[2px] bg-[#D4AF37]" style={{ left: `${sliderPos}%` }}>
//                 {/* Handle */}
//                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#D4AF37] shadow-lg flex items-center justify-center gap-0.5">
//                     <ChevronRight size={12} className="text-[#1B4D3E] rotate-180" strokeWidth={2.5} />
//                     <ChevronRight size={12} className="text-[#1B4D3E]" strokeWidth={2.5} />
//                 </div>
//             </div>

//             {/* Labels */}
//             <div className="absolute bottom-3 left-4 text-[10px] tracking-[0.25em] uppercase text-white/70 font-medium bg-[#1B4D3E]/60 px-2 py-1 rounded">Before</div>
//             <div className="absolute bottom-3 right-4 text-[10px] tracking-[0.25em] uppercase text-white/70 font-medium bg-[#1B4D3E]/60 px-2 py-1 rounded">After</div>
//         </div>
//     );
// };

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { recentProjects } from "@/lib/recentProjectsData";

// Decorative diamond divider SVG
const DiamondDivider = () => (
    <div className="flex items-center justify-center gap-3 my-2">
        <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="sm:w-3.5 sm:h-3.5">
            <rect x="7" y="0.5" width="9" height="9" transform="rotate(45 7 0.5)" fill="#D4AF37" fillOpacity="0.7" />
        </svg>
        <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
    </div>
);

export default function RecentProjectsPage() {
    return (
        <div className="min-h-screen bg-[#1B4D3E] font-sans overflow-x-hidden">
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
                    className="font-serif text-5xl sm:text-6xl md:text-7xl italic font-normal text-[#D4AF37] mt-4 mb-4"
                >
                    Projects
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-white text-base md:text-lg font-serif font-semibold tracking-wide mb-3 px-2"
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
                            <div className="relative overflow-hidden rounded-sm aspect-[4/3] border border-[#D4AF37]/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)]">
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

                            {/* Label + CTA */}
                            <div className="flex flex-col items-start gap-1.5 sm:gap-2 px-1">
                                <h3 className="font-serif text-white text-base sm:text-lg font-semibold leading-snug">
                                    {project.title} —{" "}
                                    <span className="italic font-normal text-white/70">{project.subtitle}</span>
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