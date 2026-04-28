"use client"

import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const DiamondDivider = () => (
    <div className="flex items-center justify-center gap-3 my-3">
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#1B4D3E]/60" />
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <rect x="5" y="0.5" width="6.5" height="6.5" transform="rotate(45 5 0.5)" fill="#1B4D3E" fillOpacity="0.8" />
        </svg>
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#1B4D3E]/60" />
    </div>
)

export default function ContactPage() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    })
    const [loading, setLoading] = useState(false)
    const [sent, setSent] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(form),
        })
        setLoading(false)
        setSent(true)
        setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" })
        setTimeout(() => setSent(false), 4000)
    }

    return (
        <div className="min-h-screen bg-[#1B4D3E] font-sans">

            {/* ── HERO TEXT ── */}
            <section className="text-center pt-16 pb-8 px-6">
                <motion.p
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                    className="text-[10px] tracking-[0.55em] uppercase text-[#DCEFE8]/70 mb-3 font-medium"
                >
                    The Grandiose · Bangalore
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                    className="font-serif text-4xl md:text-5xl font-bold tracking-wider text-[#D4AF37]"
                    style={{ fontVariant: "small-caps", letterSpacing: "0.08em" }}
                >
                    Contact Us
                </motion.h1>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                    <DiamondDivider />
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                    className="font-serif italic text-[#DCEFE8] text-lg mt-1 mb-1"
                >
                    Let's Create Your Dream Home
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
                    className="text-white/40 text-sm max-w-md mx-auto leading-relaxed mt-2"
                >
                    Reach out to us for a personalized consultation. Our team is ready to
                    transform your space into a luxurious retreat.{" "}
                    <Link href="/work-process" className="text-[#DCEFE8]/60 underline underline-offset-2 hover:text-[#DCEFE8] transition-colors text-xs">
                        How it works
                    </Link>
                </motion.p>
            </section>

            {/* ── MAIN SPLIT: Image | Form ── */}
            <motion.section
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
                className="max-w-5xl mx-auto px-4 md:px-8 mb-12"
            >
                <div className="grid md:grid-cols-2 overflow-hidden rounded-sm border border-[##2A6A57]/40 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)]">

                    {/* Left: Image */}
                    <div className="relative min-h-[420px] md:min-h-0">
                        <Image
                            src="/contact/consultation.jpg"
                            alt="Consultation"
                            fill
                            className="object-cover object-center"
                            quality={90}
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/40" />
                        {/* Bottom fade */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1B4D3E]/60 via-transparent to-transparent" />
                    </div>

                    {/* Right: Form */}
                    <div className="bg-[#1B4D3E] border-l border-[#2A6A57]/30 px-7 py-8">
                        <div className="flex items-center gap-4 mb-5">
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#1B4D3E]/40" />
                            <p className="text-[10px] tracking-[0.4em] uppercase text-[#DCEFE8] font-medium whitespace-nowrap">
                                Get In Touch
                            </p>
                            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#1B4D3E]/40" />
                        </div>
                        <p className="text-white/40 text-xs leading-relaxed mb-6">
                            Fill out the form below to schedule a free consultation or ask any questions.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            {/* Name row */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <input
                                        name="firstName"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Name"
                                        className="w-full bg-[#225746] border border-[##2A6A57]/40 text-white/80 placeholder-white/25 text-sm px-4 py-3 rounded-sm focus:border-[#DCEFE8]focus:outline-none transition-colors duration-200"
                                    />
                                </div>
                                <div>
                                    <input
                                        name="lastName"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        placeholder="Last Name"
                                        className="w-full bg-[#225746] border border-[##2A6A57]/40 text-white/80 placeholder-white/25 text-sm px-4 py-3 rounded-sm focus:border-[#DCEFE8]focus:outline-none transition-colors duration-200"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="Email"
                                className="w-full bg-[#225746] border border-[##2A6A57]/40 text-white/80 placeholder-white/25 text-sm px-4 py-3 rounded-sm focus:border-[#DCEFE8]focus:outline-none transition-colors duration-200"
                            />

                            {/* Phone with flag */}
                            <div className="flex gap-2">
                                <div className="flex items-center gap-2 bg-[#225746] border border-[##2A6A57]/40 px-3 rounded-sm shrink-0">
                                    <span className="text-base leading-none">🇮🇳</span>
                                    <span className="text-white/50 text-sm">+91</span>
                                </div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="+971 ..."
                                    className="flex-1 bg-[#225746] border border-[##2A6A57]/40 text-white/80 placeholder-white/25 text-sm px-4 py-3 rounded-sm focus:border-[#DCEFE8]focus:outline-none transition-colors duration-200"
                                />
                            </div>

                            {/* Message */}
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Your Message"
                                className="w-full bg-[#225746] border border-[##2A6A57]/40 text-white/80 placeholder-white/25 text-sm px-4 py-3 rounded-sm focus:border-[#DCEFE8]focus:outline-none transition-colors duration-200 resize-none"
                            />

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 border border-[#1B4D3E]/50 bg-[#2A6A57]/30 text-[#DCEFE8] text-[11px] tracking-[0.35em] uppercase font-medium hover:bg-[#1B4D3E] hover:text-[#DCEFE8] transition-all duration-300 disabled:opacity-50"
                            >
                                {loading ? "Sending..." : sent ? "✓ Sent!" : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </motion.section>

            {/* ── BOTTOM DIVIDER ── */}
            <div className="max-w-5xl mx-auto px-8">
                <DiamondDivider />
            </div>

            {/* ── 3 INFO CARDS ── */}
            <motion.section
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto px-4 md:px-8 mt-8 grid grid-cols-1 md:grid-cols-3 gap-px bg-[#2A6A57]/30 border border-[#2A6A57]/30 rounded-sm overflow-hidden"
            >
                {/* Call */}
                <div className="bg-[#225746] px-6 py-7 text-center space-y-2 group hover:bg-[#163C31] transition-colors duration-300">
                    <div className="flex justify-center mb-3">
                        <div className="w-10 h-10 rounded-full border border-[#1B4D3E]/20 flex items-center justify-center">
                            <Phone size={15} className="text-[#DCEFE8]" strokeWidth={1.5} />
                        </div>
                    </div>
                    <p className="text-[10px] tracking-[0.35em] uppercase text-[#DCEFE8] font-medium">Call Us</p>
                    <a href="tel:+919113054788" className="block text-white/80 text-sm hover:text-[#DCEFE8] transition-colors">
                        +91 98765 43210
                    </a>
                    <p className="text-white/30 text-[11px]">Available 9 AM – 7 PM, Mon-Sat</p>
                </div>

                {/* Visit */}
                <div className="bg-[#225746] border-x border-[#2A6A57]/30 px-6 py-7 text-center space-y-2 group hover:bg-[#163C31] transition-colors duration-300">
                    <div className="flex justify-center mb-3">
                        <div className="w-10 h-10 rounded-full border border-[#1B4D3E]/20 flex items-center justify-center">
                            <MapPin size={15} className="text-[#DCEFE8]" strokeWidth={1.5} />
                        </div>
                    </div>
                    <p className="text-[10px] tracking-[0.35em] uppercase text-[#DCEFE8] font-medium">Visit Us</p>
                    <p className="text-white/80 text-sm">Bangalore, India</p>
                    <p className="text-white/30 text-[11px]">Schedule your visit to our office for a personalized consultation</p>
                </div>

                {/* Email */}
                <div className="bg-[#225746] px-6 py-7 text-center space-y-2 group hover:bg-[#163C31] transition-colors duration-300">
                    <div className="flex justify-center mb-3">
                        <div className="w-10 h-10 rounded-full border border-[#1B4D3E]/20 flex items-center justify-center">
                            <Mail size={15} className="text-[#DCEFE8]" strokeWidth={1.5} />
                        </div>
                    </div>
                    <p className="text-[10px] tracking-[0.35em] uppercase text-[#DCEFE8] font-medium">Email Us</p>
                    <a href="mailto:info@thegrandiose.in" className="block text-white/80 text-sm hover:text-[#DCEFE8] transition-colors break-all">
                        info@thegrandiose.in
                    </a>
                    <p className="text-white/30 text-[11px]">Reach out via email and we'll get back to you within 24 hours.</p>
                </div>
            </motion.section>

            {/* ── MAP ── */}
            <motion.section
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-5xl mx-auto px-4 md:px-8 mt-8 mb-16"
            >
                <div className="relative overflow-hidden rounded-sm border border-[##2A6A57]/40 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.426282!2d77.6267!3d12.9352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc3d8f7a2b5e4d8c3!2sThe%20Grandiose!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin&cid=14103308394291128579"
                        width="100%"
                        height="280"
                        style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.5)" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="block"
                    />

                    {/* Get Directions overlay button */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                        <a
                            href="https://www.google.com/maps?cid=14103308394291128579"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#163C31]/90 border border-[#1B4D3E]/40 text-[#DCEFE8] text-[11px] tracking-[0.3em] uppercase px-6 py-3 hover:bg-[#1B4D3E] hover:text-[#DCEFE8] transition-all duration-300 shadow-lg backdrop-blur-sm">
                            <MapPin size={13} />
                            Get Directions
                        </a>
                    </div>
                </div>
            </motion.section >

            {/* ── BOTTOM DIAMOND ── */}
            < div className="pb-10" >
                <DiamondDivider />
            </div >

        </div >
    )
}