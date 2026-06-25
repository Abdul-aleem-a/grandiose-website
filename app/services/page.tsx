"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Building2,
  Utensils,
  PenTool,
  Lightbulb,
  Ruler,
  Briefcase,
  ChevronRight,
  Check,
  ArrowRight,
  Phone,
  MessageCircle,
  X,
  ChevronLeft,
} from "lucide-react";

// Import images with Next.js Image optimization
import serviceResidential from "../../public/images/servicesimgs/serviceResidential.jpg";
import serviceResidential2 from "../../public/images/servicesimgs/serviceResidential2.jpg";
import serviceResidential3 from "../../public/images/servicesimgs/serviceResidential3.jpg";
import serviceResidential4 from "../../public/images/servicesimgs/serviceResidential4.jpg";
import serviceCommercial from "../../public/images/servicesimgs/serviceCommercial.jpg";
import serviceCommercial2 from "../../public/images/servicesimgs/serviceCommercial2.jpg";
import serviceCommercial3 from "../../public/images/servicesimgs/serviceCommercial3.jpg";
import serviceCommercial4 from "../../public/images/servicesimgs/serviceCommercial4.jpg";
import serviceCorporate from "../../public/images/servicesimgs/serviceCorporate.jpg";
import serviceCorporate2 from "../../public/images/servicesimgs/serviceCorporate2.jpg";
import serviceCorporate3 from "../../public/images/servicesimgs/serviceCorporate3.jpg";
import serviceCorporate4 from "../../public/images/servicesimgs/serviceCorporate4.jpg";
import serviceKitchen from "../../public/images/servicesimgs/serviceKitchen.jpg";
import serviceKitchen2 from "../../public/images/servicesimgs/serviceKitchen2.jpg";
import serviceKitchen3 from "../../public/images/servicesimgs/serviceKitchen3.jpg";
import serviceKitchen4 from "../../public/images/servicesimgs/serviceKitchen4.jpg";
import serviceArchitecture from '../../public/images/servicesimgs/serviceArchitecture.jpg'
import serviceArchitecture2 from '../../public/images/servicesimgs/serviceArchitecture2.jpg'
import serviceArchitecture3 from '../../public/images/servicesimgs/serviceArchitecture3.jpg'
import serviceArchitecture4 from '../../public/images/servicesimgs/serviceArchitecture4.jpg'
import servicesBg from "../../public/images/servicesimgs/serviceResidential3.jpg";

const serviceData = [
  {
    id: "residential",
    icon: Home,
    label: "Residential Interiors",
    tagline: "Where Every Room Tells Your Story",
    heroImage: serviceResidential,
    gallery: [
      serviceResidential,
      serviceResidential2,
      serviceResidential3,
      serviceResidential4,
    ],
    description:
      "Residential interiors are the canvas upon which inhabitants express their personalities, lifestyles, and preferences. Through the careful selection of furniture, color palettes, and decor, each room tells a unique story, evoking emotions and creating a sense of belonging.",
    longDescription:
      "From sleek modern designs to cozy traditional spaces, there's a plethora of interior styles to explore, allowing homeowners to craft environments that resonate with their individual tastes.",
    features: [
      "Complete home transformation — concept to handover",
      "3D walkthroughs before execution begins",
      "Premium material sourcing with verified vendors",
      "Dedicated project manager assigned to your home",
      "10-year structural warranty on all woodwork",
    ],
  },
  {
    id: "commercial",
    icon: Building2,
    label: "Commercial Interiors",
    tagline: "Spaces That Inspire Productivity & Prestige",
    heroImage: serviceCommercial,
    gallery: [
      serviceCommercial,
      serviceCommercial2,
      serviceCommercial3,
      serviceCommercial4,
    ],
    description:
      "Creating captivating commercial interiors is an artful fusion of functionality, aesthetics, and brand identity. From sleek corporate offices to vibrant retail spaces, every design choice plays a pivotal role in enhancing productivity, attracting clientele, and fostering a memorable brand experience.",
    longDescription:
      "Through meticulous attention to detail, innovative use of materials, and a keen understanding of spatial dynamics, commercial interiors become more than mere physical spaces; they become compelling narratives that reflect the essence and aspirations of the businesses they inhabit. Whether it's optimizing workflow, invoking a sense of comfort, or igniting inspiration, each element within these interiors contributes to a harmonious blend of form and function, elevating the everyday encounters of employees and customers alike.",
    features: [
      "Office, retail, hospitality & showroom design",
      "Brand-aligned colour schemes and material palette",
      "Ergonomic space planning for maximum efficiency",
      "Turnkey execution with minimal business disruption",
      "Post-handover maintenance support",
    ],
  },
  {
    id: "corporate",
    icon: Briefcase,
    label: "Corporate Interiors",
    tagline: "Environments That Inspire Innovation",
    heroImage: serviceCorporate,
    gallery: [
      serviceCorporate,
      serviceCorporate2,
      serviceCorporate3,
      serviceCorporate4,
    ],
    description:
      "Corporate interiors are the embodiment of a company's ethos and vision, seamlessly blending functionality with sophistication to cultivate an environment conducive to productivity and innovation.",
    longDescription:
      "Every design element, from ergonomic workstations to collaborative meeting spaces, is meticulously crafted to reflect the organization's identity and inspire its workforce. Through thoughtful use of color, texture, and lighting, corporate interiors transcend mere functionality, fostering a sense of belonging and motivation among employees while leaving a lasting impression on clients and visitors.",
    features: [
      "Ergonomic workspace planning",
      "Collaborative meeting spaces",
      "Brand identity integration",
      "Sustainable design solutions",
      "Biophilic design elements",
    ],
  },
  {
    id: "kitchen",
    icon: Utensils,
    label: "Modular Kitchen",
    tagline: "Where Efficiency Meets Elegance",
    heroImage: serviceKitchen,
    gallery: [
      serviceKitchen,
      serviceKitchen2,
      serviceKitchen3,
      serviceKitchen4,
    ],
    description:
      "Modular kitchens revolutionize culinary spaces, seamlessly blending efficiency with elegance to redefine the heart of the home.",
    longDescription:
      "With customizable modules and innovative storage solutions, these kitchens optimize every inch of space, offering unparalleled organization and convenience. From sleek cabinets to state-of-the-art appliances, each element is meticulously designed to enhance workflow and elevate the cooking experience. With a perfect balance of form and function, modular kitchens not only reflect individual style but also inspire creativity and culinary mastery, transforming every meal preparation into a delightful journey.",
    features: [
      "German hardware: Hettich, Häfele & Blum fittings",
      "Scratch-resistant laminates and acrylic finishes",
      "Smart corner storage and tall-unit solutions",
      "Under-cabinet and plinth LED lighting integrated",
      "5-year warranty on all kitchen hardware",
    ],
  },
  {
    id: "architecture",
    icon: PenTool,
    label: "Architectural Plan & Elevation",
    tagline: "Blueprints Built for Grandeur",
    heroImage: serviceArchitecture,
    gallery: [
      serviceArchitecture,
      serviceArchitecture2,
      serviceArchitecture3,
      serviceArchitecture4,
    ],
    description:
      "Architectural plan and elevation services revolutionize spatial design, seamlessly blending efficiency with elegance to redefine the essence of built environments.",
    longDescription:
      "With customizable modules and innovative structural solutions, these designs optimize every square foot, offering unparalleled organization and convenience. From sleek facades to state-of-the-art spatial planning, each element is meticulously crafted to enhance workflow and elevate the living experience. With a perfect balance of form and function, architectural plans not only reflect individual style but also inspire creativity and architectural mastery, transforming every space into a masterpiece.",
    features: [
      "Concept design and feasibility studies",
      "Detailed architectural + structural drawings",
      "3D exterior and interior elevations",
      "Vastu-compliant planning on request",
      "Regulatory approval documentation support",
    ],
  },
];

const Services = () => {
  const [active, setActive] = useState("residential");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<{
    src: any;
    alt: string;
    index: number;
    gallery: any[];
  } | null>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleNavClick = (id: string) => {
    setActive(id);
    const el = sectionRefs.current[id];
    if (el) {
      const offset = 120;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const openLightbox = (
    img: any,
    alt: string,
    index: number,
    gallery: any[],
  ) => {
    setCurrentImage({ src: img, alt, index, gallery });
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    if (currentImage) {
      const nextIndex = (currentImage.index + 1) % currentImage.gallery.length;
      setCurrentImage({
        ...currentImage,
        src: currentImage.gallery[nextIndex],
        index: nextIndex,
      });
    }
  };

  const prevImage = () => {
    if (currentImage) {
      const prevIndex =
        (currentImage.index - 1 + currentImage.gallery.length) %
        currentImage.gallery.length;
      setCurrentImage({
        ...currentImage,
        src: currentImage.gallery[prevIndex],
        index: prevIndex,
      });
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "Escape") closeLightbox();
  };

  return (
    <div className="min-h-screen bg-[#051711] font-sans">
      {/* ── CINEMATIC HERO HEADER ── */}
      <section className="relative h-[52vh] min-h-[380px] overflow-hidden flex items-center justify-center">
        {/* Background image with Next.js Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={servicesBg}
            alt="Services hero"
            fill
            className="object-cover object-center scale-105 opacity-30 transition-transform duration-700 hover:scale-110"
            priority
            sizes="100vw"
            quality={90}
          />
        </div>
        {/* Layered overlays with royal green */}
        <div className="absolute inset-0 bg-[#051711]/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#051711]/30 via-[#051711]/70 to-[#051711]" />
        {/* Decorative gold line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60" />

        {/* CENTER TEXT */}
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] tracking-[0.55em] uppercase text-[#D4AF37] mb-4 font-sans font-medium"
          >
            The Grandiose · Bangalore
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, type: "spring", stiffness: 60 }}
            className="gradient-heading text-3xl md:text-5xl mb-5"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white/70 text-sm md:text-base font-palegoldenrod max-w-md mx-auto leading-relaxed"
          >
            Crafting refined, functional interiors tailored to your lifestyle —
            from concept to completion.
          </motion.p>

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="flex items-center justify-center gap-2 mt-6 text-[11px] tracking-[0.15em] uppercase"
          >
            <Link
              href="/"
              className="text-white/40 hover:text-[#D4AF37] transition-colors duration-300"
            >
              Home
            </Link>
            <ChevronRight size={12} className="text-[#D4AF37]/50" />
            <span className="text-[#D4AF37]">Services</span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40"
        >
          <div className="w-[1px] h-6 bg-[#D4AF37]" />
          <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
        </motion.div>
      </section>

      {/* ── STICKY SERVICE CATEGORY NAV ── */}
      <div className="sticky top-[64px] z-40 bg-[#051711]/95 backdrop-blur-lg border-b border-[#D4AF37]/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="flex overflow-x-auto scrollbar-none gap-0">
            {serviceData.map((s) => {
              const Icon = s.icon;
              const isActive = active === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => handleNavClick(s.id)}
                  className={`relative flex items-center gap-2 px-4 md:px-6 py-4 text-[10px] md:text-[11px] tracking-[0.15em] uppercase font-medium whitespace-nowrap transition-all duration-300 border-b-2 font-sans
                    ${
                      isActive
                        ? "border-[#D4AF37] text-[#D4AF37]"
                        : "border-transparent text-white/60 hover:text-white hover:border-white/20"
                    }`}
                >
                  <Icon size={13} className="shrink-0" />
                  <span className="hidden md:block">{s.label}</span>
                  <span className="md:hidden">{s.label.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── SERVICE SECTIONS ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 space-y-32">
        {serviceData.map((service, idx) => {
          const Icon = service.icon;
          const isEven = idx % 2 === 0;
          return (
            <div
              key={service.id}
              id={service.id}
              ref={(el) => {
                sectionRefs.current[service.id] = el;
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  isEven ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                {/* ── IMAGE SIDE WITH SMOOTH HOVER EFFECTS ── */}
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="relative overflow-hidden rounded-lg aspect-[4/3] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)]">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <Image
                        src={service.heroImage}
                        alt={service.label}
                        fill
                        className="object-cover transition-all duration-500 ease-out"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        quality={85}
                      />
                    </motion.div>
                  </div>

                  {/* Decorative gold corner accent with hover animation */}
                  <motion.div
                    className={`absolute -top-3 ${isEven ? "-left-3" : "-right-3"} w-12 h-12 border-t-2 border-l-2 ${isEven ? "" : "border-l-0 border-r-2"} border-[#D4AF37]/50 rounded-tl-sm pointer-events-none`}
                    whileHover={{ scale: 1.1, borderColor: "#D4AF37" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>

                {/* ── CONTENT SIDE ── */}
                <motion.div
                  className="flex flex-col gap-6"
                  initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {/* Service label */}
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon
                        size={18}
                        className="text-[#D4AF37]"
                        strokeWidth={1.4}
                      />
                    </motion.div>
                    <p className="text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] font-medium font-sans">
                      {service.label}
                    </p>
                  </div>

                  {/* Heading */}
                  <h2 className="gradient-heading text-2xl md:text-2xl">
                    {service.tagline}
                  </h2>

                  {/* Gold divider */}
                  <div className="w-12 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/30" />

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed font-sans">
                    {service.description}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed font-sans">
                    {service.longDescription}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2.5">
                    {service.features.map((f, fi) => (
                      <motion.li
                        key={fi}
                        className="flex items-start gap-3 text-sm text-white/80 font-sans"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + fi * 0.1 }}
                      >
                        <span className="mt-0.5 w-4 h-4 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0">
                          <Check
                            size={9}
                            className="text-[#D4AF37]"
                            strokeWidth={2.5}
                          />
                        </span>
                        {f}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>

              {/* ── GALLERY ROW (4 images with smooth animation and click to open lightbox) ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-16"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-5 h-[1px] bg-[#D4AF37]/50" />
                  <p className="text-[10px] tracking-[0.4em] uppercase text-white/50 font-sans">
                    Gallery
                  </p>
                  <div className="flex-1 h-[1px] bg-white/20" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  {service.gallery.map((img, gi) => (
                    <motion.div
                      key={gi}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.1, duration: 0.4 }}
                      className="relative overflow-hidden rounded-lg aspect-[4/3] group cursor-pointer"
                      onClick={() =>
                        openLightbox(
                          img,
                          `${service.label} ${gi + 1}`,
                          gi,
                          service.gallery,
                        )
                      }
                      whileHover={{ scale: 1.05 }}
                    >
                      <Image
                        src={img}
                        alt={`${service.label} gallery ${gi + 1}`}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, 25vw"
                        quality={80}
                      />
                      <div className="absolute inset-0 bg-[#051711]/0 group-hover:bg-[#051711]/50 transition-all duration-300 flex items-center justify-center">
                        <ArrowRight
                          size={24}
                          className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Divider between services */}
              {idx < serviceData.length - 1 && (
                <motion.div
                  className="mt-20 flex items-center gap-6"
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex-1 h-[1px] bg-white/20" />
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40"
                    whileHover={{ scale: 1.5, backgroundColor: "#D4AF37" }}
                  />
                  <div className="flex-1 h-[1px] bg-white/20" />
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── LIGHTBOX MODAL ── */}
      <AnimatePresence>
        {lightboxOpen && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 text-white/80 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>

            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-6 z-10 text-white/80 hover:text-white transition-colors bg-black/50 rounded-full p-2"
            >
              <ChevronLeft size={36} />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 z-10 text-white/80 hover:text-white transition-colors bg-black/50 rounded-full p-2"
            >
              <ChevronRight size={36} />
            </button>

            {/* Image container */}
            <div
              className="relative w-full max-w-6xl h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
                quality={95}
                priority
              />

              {/* Image counter */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-sans">
                {currentImage.index + 1} / {currentImage.gallery.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
