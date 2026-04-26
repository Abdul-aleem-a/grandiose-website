"use client"

import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaFacebookF, FaPinterestP, FaBehance, FaYoutube } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className="bg-[#F7F6F2] text-[#2B2B2B] pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">

                {/* Top Brand Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold tracking-wide">
                        The Grandiose
                    </h2>

                    <div className="w-16 h-[2px] bg-[#C9A24D] mx-auto my-4"></div>

                    <p className="text-[#8A8A8A] max-w-2xl mx-auto leading-relaxed">
                        Crafting luxurious and functional interiors in Bangalore.
                        Where timeless elegance meets thoughtful design and every space
                        tells a story.
                    </p>
                </div>

                {/* Footer Grid */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

                    {/* About Card */}
                    <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>

                        <p className="text-[#8A8A8A] text-sm leading-relaxed mb-4">
                            Every client receives personal attention from our team of expert
                            interior designers. From concept to completion, we craft interiors
                            that balance creativity, function, and elegance.
                        </p>

                        <button className="text-[#0F3D2E] font-medium hover:text-[#C9A24D] transition">
                            Read More →
                        </button>

                        {/* Social */}
                        <div className="flex gap-4 mt-6 text-lg">
                            <FaYoutube className="hover:text-[#C9A24D] cursor-pointer" />
                            <FaInstagram className="hover:text-[#C9A24D] cursor-pointer" />
                            <FaFacebookF className="hover:text-[#C9A24D] cursor-pointer" />
                            <FaPinterestP className="hover:text-[#C9A24D] cursor-pointer" />
                            <FaBehance className="hover:text-[#C9A24D] cursor-pointer" />
                        </div>
                    </div>


                    {/* Quick Links Card */}
                    <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>

                        <ul className="space-y-3 text-sm">
                            <li><span className="footer-link cursor-pointer">About Us</span></li>
                            <li><span className="footer-link cursor-pointer">Why Grandiose</span></li>
                            <li><span className="footer-link cursor-pointer">Gallery</span></li>
                            <li><Link href="/blogs"><span className="footer-link cursor-pointer">Blogs</span></Link></li>
                            <li><Link href="/contact-us"><span className="footer-link cursor-pointer">Contact Us</span></Link></li>
                        </ul>
                    </div>


                    {/* Services Card */}
                    <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                        <h3 className="text-lg font-semibold mb-6">Services</h3>

                        <ul className="space-y-3 text-sm text-[#8A8A8A]">
                            <li><Link href="/services/residential"><span className="footer-link cursor-pointer">Residential Interiors</span></Link></li>
                            <li><Link href="/services/commercial"><span className="footer-link cursor-pointer">Commercial Interiors</span></Link></li>
                            <li><Link href="/services/corporate"><span className="footer-link cursor-pointer">Corporate Interiors</span></Link></li>
                            <li><Link href="/services/modular-kitchen"><span className="footer-link cursor-pointer">Modular Kitchen</span></Link></li>
                            <li><Link href="/recent-projects"><span className="footer-link cursor-pointer">Recent Projects</span></Link></li>
                            <li><Link href="/products/sofas"><span className="footer-link cursor-pointer">Products</span></Link></li>
                        </ul>
                    </div>


                    {/* Instagram Card */}
                    <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                        <h3 className="text-lg font-semibold mb-6">Instagram</h3>

                        <div className="grid grid-cols-3 gap-2">
                            {[
                                "/insta.png",
                                "/sofa.jpg",
                                "/insta.png",
                                "/sofa.jpg",
                                "/insta.png",
                                "/sofa.jpg",
                                "/insta.png",
                                "/sofa.jpg",
                                "/insta.png",
                            ].map((img, i) => (
                                <div
                                    key={i}
                                    className="relative w-full h-20 rounded-lg overflow-hidden"
                                >
                                    <Image
                                        src={img}
                                        alt="instagram"
                                        fill
                                        className="object-cover hover:scale-110 transition duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Bottom Section */}
                <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-[#8A8A8A]">

                    <p>
                        © 2024 The Grandiose. All Rights Reserved.
                    </p>

                    <p>
                        Website Design & Development by{" "}
                        <span className="text-[#0F3D2E] font-medium">
                            Aleem
                        </span>
                    </p>

                </div>
            </div>
        </footer>
    )
}