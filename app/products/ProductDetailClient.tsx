"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Star } from "lucide-react";
import type { SignatureProduct } from "@/lib/signatureCollectionData";
import { useCart } from "@/components/CartProvider"
const SectionLabel = ({ title }: { title: string }) => (
    <div className="flex items-center gap-3 mb-4">
        <span className="text-[11px] tracking-[0.35em] uppercase font-bold text-white">{title}</span>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />
    </div>
);

const StarRating = ({ rating, count }: { rating: number; count: number }) => (
    <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
                <Star
                    key={s}
                    size={13}
                    className={s <= Math.floor(rating) ? "text-[#D4AF37] fill-[#D4AF37]" : s - 0.5 === rating ? "text-[#D4AF37] fill-[#D4AF37]/50" : "text-white/20 fill-white/10"}
                    strokeWidth={1}
                />
            ))}
        </div>
        <span className="text-white/40 text-xs">· ({count} Reviews)</span>
    </div>
);

export default function ProductDetailClient({ product }: { product: SignatureProduct }) {
    const [activeImage, setActiveImage] = useState(product.heroImage);
    const [activeCustomization, setActiveCustomization] = useState(0);
    const handleCustomization = (index: number) => {
        setActiveCustomization(index);
        setActiveImage(product.customizationOptions[index].image);
    };
    const { cart, addToCart } = useCart()

    const isAdded = cart.includes(product.slug)
    return (
        <div className="min-h-screen bg-[#051711] font-sans">
            {/* Subtle dark texture overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.04] bg-[url('/noise.png')] z-0" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 py-16 space-y-20">

                {/* ── BREADCRUMB + COLLECTION LABEL ── */}
                <div className="space-y-3">
                    <motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="text-[10px] tracking-[0.45em] uppercase text-[#D4AF37]/70 text-center font-medium"
                    >
                        Signature Collection
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
                        className="flex items-center justify-center gap-2 text-[11px] tracking-[0.15em] uppercase"
                    >
                        <Link href="/" className="text-white/30 hover:text-[#D4AF37] transition-colors">Home</Link>
                        <ChevronRight size={11} className="text-[#D4AF37]/40" />
                        <Link href="/products" className="text-white/30 hover:text-[#D4AF37] transition-colors">Collection</Link>
                        <ChevronRight size={11} className="text-[#D4AF37]/40" />
                        <span className="text-[#D4AF37]/80">{product.name}</span>
                    </motion.div>
                </div>

                {/* ── TITLE ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
                    className="text-center space-y-2"
                >
                    <h1 className="gradient-heading text-3xl md:text-4xl">{product.name}</h1>
                    <p className="font-palegoldenrod text-white/60 text-base md:text-lg">{product.tagline}</p>
                </motion.div>

                {/* ── MAIN PRODUCT SECTION ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6 }}
                    className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start"
                >
                    {/* Left: Images */}
                    <div className="space-y-3">
                        {/* Hero Image */}
                        <div className="relative overflow-hidden rounded-sm aspect-[4/3] border border-[#D4AF37]/10 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)]">
                            <motion.div
                                key={activeImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={activeImage}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    priority
                                    quality={90}
                                />
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                        </div>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-4 gap-2">
                            {product.galleryImages.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveImage(img)}
                                    className={`relative overflow-hidden rounded-sm aspect-video border transition-all duration-200 ${activeImage === img ? "border-[#D4AF37]" : "border-[#D4AF37]/10 hover:border-[#D4AF37]/40"
                                        }`}
                                >
                                    <Image src={img} alt={`Gallery ${i + 1}`} fill className="object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div className="space-y-6 pt-2">
                        <StarRating rating={product.rating} count={product.reviewCount} />

                        <div>
                            <p className="font-serif text-3xl font-bold text-white tracking-wide">{product.price}</p>
                        </div>

                        {/* Key Features */}
                        <div>
                            <SectionLabel title="Key Features" />
                            <ul className="space-y-2.5">
                                {product.keyFeatures.map((f, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + i * 0.08 }}
                                        className="flex items-start gap-3 text-sm text-white/65"
                                    >
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                                        {f}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="flex gap-4 mt-4">

                            <button
                                onClick={() => !isAdded && addToCart(product.slug)}
                                disabled={isAdded}
                                className={`px-8 py-3.5 text-[11px] tracking-[0.35em] uppercase font-medium rounded-sm transition
      ${isAdded
                                        ? "bg-green-600 text-white cursor-not-allowed opacity-80"
                                        : "bg-[#D4AF37] text-[#1a1a18] hover:opacity-90"
                                    }`}
                            >
                                {isAdded ? "Added To Cart" : "Add To Cart"}
                            </button>

                            <Link
                                href="/cart"
                                className="px-8 py-3.5 border border-[#D4AF37]/60 text-[#D4AF37] text-[11px] tracking-[0.35em] uppercase font-medium rounded-sm"
                            >
                                View Cart
                            </Link>

                        </div>
                    </div>
                </motion.div>

                {/* ── DESCRIPTION + DIMENSIONS ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start"
                >
                    {/* Description Image */}
                    <div className="relative overflow-hidden rounded-sm aspect-[3/4] border border-[#D4AF37]/10 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)]">
                        <Image src={product.descriptionImage} alt="Product detail" fill className="object-cover" quality={85} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>

                    {/* Text content */}
                    <div className="space-y-8 pt-2">
                        {/* Description */}
                        <div>
                            <SectionLabel title="Description" />
                            <p className="text-white/55 text-sm leading-relaxed">{product.description}</p>
                        </div>

                        {/* Dimensions */}
                        <div>
                            <SectionLabel title="Dimensions" />
                            <div className="space-y-3">
                                {product.dimensions.map((dim, i) => (
                                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                                        <span className="text-white/50 text-sm">{dim.label}</span>
                                        <span className="text-white text-sm font-serif font-semibold">{dim.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Customization Options */}
                        <div>
                            <SectionLabel title="Customization Options" />
                            <div className="flex items-center gap-4 mt-2">
                                {product.customizationOptions.map((opt, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleCustomization(i)}
                                        className="group flex flex-col items-center gap-2"
                                    >
                                        <div
                                            className={`w-12 h-8 rounded-sm border-2 transition-all duration-200 ${activeCustomization === i
                                                ? "border-[#D4AF37] scale-110 shadow-[0_0_12px_rgba(212,175,55,0.4)]"
                                                : "border-white/10 hover:border-[#D4AF37]/50"
                                                }`}
                                            style={{ backgroundColor: opt.color }}
                                        />
                                        <span className={`text-[10px] tracking-wide transition-colors duration-200 ${activeCustomization === i ? "text-[#D4AF37]" : "text-white/40"
                                            }`}>
                                            {opt.label}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}