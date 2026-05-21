"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";

// Import images with Next.js Image optimization
import galleryKitchen1 from "../../public/sofa.jpg";
import galleryKitchen2 from "../../public/sofa.jpg";
import galleryWardrobe1 from "../../public/sofa.jpg";
import galleryBedroom1 from "../../public/sofa.jpg";
import galleryKids1 from "../../public/sofa.jpg";
import galleryLiving1 from "../../public/sofa.jpg";
import galleryLiving2 from "../../public/sofa.jpg";
import galleryDining1 from "../../public/sofa.jpg";
import galleryOffice1 from "../../public/sofa.jpg";
import galleryBathroom1 from "../../public/sofa.jpg";
import gallerySpace1 from "../../public/sofa.jpg";
import gallery2bhk from "../../public/sofa.jpg";
import gallery3bhk from "../../public/sofa.jpg";
import gallery1bhk from "../../public/sofa.jpg";
import galleryCustomize from "../../public/sofa.jpg";

const categories = [
  "All",
  "Modular Kitchen",
  "Customize Your Kitchen",
  "Wardrobe Designs",
  "Bedroom Designs",
  "Living Room Designs",
  "Space Saving Designs",
  "Dining Room Designs",
  "Home Office Designs",
  "Kids Bedroom Designs",
  "Bathroom Designs",
  "1 BHK Interior",
  "2 BHK Interior",
  "3 BHK Interior",
];

interface GalleryItem {
  id: number;
  src: any;
  category: string;
  title: string;
  location: string;
  aspect: "landscape" | "portrait";
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: galleryKitchen1,
    category: "Modular Kitchen",
    title: "Dark Walnut Kitchen",
    location: "Whitefield, Bangalore",
    aspect: "landscape",
  },
  {
    id: 2,
    src: galleryKitchen2,
    category: "Modular Kitchen",
    title: "Marble White Kitchen",
    location: "Indiranagar, Bangalore",
    aspect: "portrait",
  },
  {
    id: 3,
    src: galleryCustomize,
    category: "Customize Your Kitchen",
    title: "Kitchen Transformation",
    location: "Koramangala, Bangalore",
    aspect: "portrait",
  },
  {
    id: 4,
    src: galleryWardrobe1,
    category: "Wardrobe Designs",
    title: "Glass Door Wardrobe",
    location: "HSR Layout, Bangalore",
    aspect: "landscape",
  },
  {
    id: 5,
    src: galleryBedroom1,
    category: "Bedroom Designs",
    title: "Master Suite",
    location: "Jayanagar, Bangalore",
    aspect: "landscape",
  },
  {
    id: 6,
    src: galleryLiving1,
    category: "Living Room Designs",
    title: "Grand Living Hall",
    location: "Sadashivanagar, Bangalore",
    aspect: "landscape",
  },
  {
    id: 7,
    src: galleryLiving2,
    category: "Living Room Designs",
    title: "Entertainment Unit",
    location: "Marathahalli, Bangalore",
    aspect: "portrait",
  },
  {
    id: 8,
    src: galleryDining1,
    category: "Dining Room Designs",
    title: "Formal Dining Room",
    location: "Hebbal, Bangalore",
    aspect: "landscape",
  },
  {
    id: 9,
    src: galleryOffice1,
    category: "Home Office Designs",
    title: "Executive Study",
    location: "Bannerghatta Road",
    aspect: "portrait",
  },
  {
    id: 10,
    src: galleryKids1,
    category: "Kids Bedroom Designs",
    title: "Kids Bunk Room",
    location: "Electronic City",
    aspect: "portrait",
  },
  {
    id: 11,
    src: galleryBathroom1,
    category: "Bathroom Designs",
    title: "Marble Bathroom",
    location: "JP Nagar, Bangalore",
    aspect: "landscape",
  },
  {
    id: 12,
    src: gallerySpace1,
    category: "Space Saving Designs",
    title: "Compact Bedroom",
    location: "BTM Layout, Bangalore",
    aspect: "landscape",
  },
  {
    id: 13,
    src: gallery1bhk,
    category: "1 BHK Interior",
    title: "Smart 1BHK Living",
    location: "Yelahanka, Bangalore",
    aspect: "landscape",
  },
  {
    id: 14,
    src: gallery2bhk,
    category: "2 BHK Interior",
    title: "Modern 2BHK Home",
    location: "Sarjapur Road",
    aspect: "landscape",
  },
  {
    id: 15,
    src: gallery3bhk,
    category: "3 BHK Interior",
    title: "Luxury 3BHK Penthouse",
    location: "MG Road, Bangalore",
    aspect: "portrait",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        lightboxIndex === 0 ? filtered.length - 1 : lightboxIndex - 1,
      );
    }
  };
  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        lightboxIndex === filtered.length - 1 ? 0 : lightboxIndex + 1,
      );
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
      {/* Hero Section with Royal Green */}
      <section className="relative bg-[#051711] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border border-[#D4AF37]/30 rounded-full" />
          <div className="absolute bottom-10 right-10 w-64 h-64 border border-[#D4AF37]/20 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#D4AF37]/10 rounded-full" />
        </div>
        <div className="relative z-10 text-center px-6">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-[11px] tracking-[0.2em] uppercase text-white/50 font-sans mb-8">
            <Link
              href="/"
              className="hover:text-[#D4AF37] transition-colors duration-300"
            >
              Home
            </Link>
            <span className="text-[#D4AF37]">/</span>
            <span className="text-[#D4AF37]">Our Gallery</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#D4AF37] font-sans block mb-4">
              Interior Design Portfolio
            </span>
            <h1 className="gradient-heading text-5xl md:text-5xl mb-5">
              Our Gallery
            </h1>
            <p className="text-white/60 font-palegoldenrod text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Explore our curated collection of premium interior designs — from
              modular kitchens to luxury living spaces, crafted for Bangalore's
              finest homes.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 md:gap-16 mt-10">
            {[
              { num: "500+", label: "Projects" },
              { num: "15+", label: "Categories" },
              { num: "98%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="font-serif text-2xl md:text-3xl text-[#D4AF37] font-bold">
                  {stat.num}
                </span>
                <span className="block text-[10px] tracking-[0.15em] uppercase text-white/40 font-sans mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter Buttons - Original Scroll Type (Horizontal Scroll) */}
      <div className="border-b border-[#D4AF37]/20 bg-[#051711]/50">
        <div
          ref={scrollRef}
          className="flex items-center gap-2 px-4 md:px-8 py-4 overflow-x-auto scrollbar-none max-w-7xl mx-auto"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative whitespace-nowrap px-5 py-2.5 rounded-full text-[11px] tracking-[0.1em] uppercase font-sans font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#D4AF37] text-[#051711] shadow-lg"
                  : "bg-white/10 text-white/70 hover:bg-[#D4AF37]/20 hover:text-[#D4AF37]"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="gallery-tab"
                  className="absolute inset-0 bg-[#D4AF37] rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid — Pinterest-style masonry */}
      <section className="px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="break-inside-avoid mb-4 md:mb-5"
              >
                <div
                  onClick={() => openLightbox(idx)}
                  className="group relative rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-500"
                >
                  <div className="relative w-full overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.title}
                      className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                        item.aspect === "portrait"
                          ? "aspect-[3/4]"
                          : "aspect-[4/3]"
                      }`}
                      width={600}
                      height={item.aspect === "portrait" ? 800 : 450}
                      quality={85}
                    />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051711]/90 via-[#051711]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                    <span className="text-[9px] tracking-[0.3em] uppercase text-[#D4AF37] font-sans mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-palegoldenrod text-lg text-white font-semibold">
                      {item.title}
                    </h3>
                    <span className="text-[11px] text-white/50 font-sans mt-1">
                      {item.location}
                    </span>

                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#D4AF37]/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Eye size={16} className="text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-serif text-2xl text-white/40">
              No designs found in this category
            </p>
            <p className="text-sm text-white/30 mt-2 font-sans">
              Try selecting a different category above
            </p>
          </div>
        )}
      </section>

      {/* CTA Band */}
      <section className="bg-[#051711] py-16 md:py-20 border-t border-[#D4AF37]/20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#D4AF37] font-sans block mb-4">
            Ready to Transform Your Space?
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-4">
            Let's Create Your{" "}
            <span className="text-[#D4AF37]">Dream Interior</span>
          </h2>
          <p className="text-white/50 font-sans text-sm mb-8 max-w-md mx-auto">
            Get a free consultation with our design experts and bring your
            vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#D4AF37] text-[#051711] rounded-lg text-[12px] tracking-[0.15em] uppercase font-sans font-medium shadow-lg"
              whileHover={{ scale: 1.05, backgroundColor: "#C5A028" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Get Free Quote
            </motion.a>

            <motion.a
              href="tel:+919876543210"
              className="px-8 py-3.5 border border-white/30 text-white rounded-lg text-[12px] tracking-[0.15em] uppercase font-sans font-medium"
              whileHover={{
                scale: 1.05,
                borderColor: "#D4AF37",
                color: "#D4AF37",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Call Us Now
            </motion.a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            >
              <X size={28} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-10 bg-black/50 rounded-full p-2"
            >
              <ChevronLeft size={36} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-10 bg-black/50 rounded-full p-2"
            >
              <ChevronRight size={36} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[85vh] px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[75vh]">
                <Image
                  src={filtered[lightboxIndex].src}
                  alt={filtered[lightboxIndex].title}
                  fill
                  className="object-contain rounded-lg"
                  sizes="100vw"
                  quality={95}
                  priority
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="font-serif text-xl text-white">
                  {filtered[lightboxIndex].title}
                </h3>
                <p className="text-white/40 text-xs tracking-[0.15em] uppercase font-sans mt-1">
                  {filtered[lightboxIndex].category} ·{" "}
                  {filtered[lightboxIndex].location}
                </p>
                <p className="text-white/30 text-xs font-sans mt-2">
                  {lightboxIndex + 1} / {filtered.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
