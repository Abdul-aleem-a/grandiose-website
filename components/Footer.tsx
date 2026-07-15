"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaBehance,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#051711] text-white pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Brand Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="The Grandiose"
                width={280}
                height={180}
                priority
              />
            </Link>
          </div>

          <div className="w-16 h-[2px] bg-[#C9A24D] mx-auto my-4"></div>

          <p className="text-[#8A8A8A] max-w-2xl mx-auto leading-relaxed">
            Crafting luxurious and functional interiors in Bangalore. Where
            timeless elegance meets thoughtful design and every space tells a
            story.
          </p>
        </div>

        {/* Footer Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          {/* About Card */}
          <div className="bg-[#051711] rounded-xl shadow-sm p-8 border border-gray-100">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>

            <p className="text-[#8A8A8A] text-sm leading-relaxed mb-4">
              Every customer receives personal attention from our team of
              experts in home interior design. Based on the project value,
              location of the site, and client specifications, the company
              assigns a client to an interior designer.
            </p>

            <a href="/about-us">
              <button className="text-[#C9A24D] font-medium hover:text-[#C9A24D] transition">
                Read More →
              </button>
            </a>

            {/* Social */}
            <div className="flex gap-4 mt-6 text-lg">
              <a
                href="https://www.youtube.com/@thegrandiose"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-[#C9A24D] transition-colors"
              >
                <FaYoutube />
              </a>

              <a
                href="https://www.instagram.com/thegrandiosehomeinteriors/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#C9A24D] transition-colors"
              >
                <FaInstagram />
              </a>

              <a
                href="https://x.com/Thegrandiose7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#C9A24D] transition-colors"
              >
                <FaTwitter />
              </a>

              <a
                href="https://www.facebook.com/thegrandiosehomeinteriors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-[#C9A24D] transition-colors"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://in.pinterest.com/thegrandiosehomeinteriors/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="hover:text-[#C9A24D] transition-colors"
              >
                <FaPinterestP />
              </a>

              <a
                href="https://www.behance.net/thegrandiosedesigns"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
                className="hover:text-[#C9A24D] transition-colors"
              >
                <FaBehance />
              </a>
            </div>
          </div>

          {/* Quick Links Card */}
          <div className="bg-[#051711] rounded-xl shadow-sm p-8 border border-gray-100">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about-us">
                  <span className="footer-link cursor-pointer">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/design-gallery">
                  <span className="footer-link cursor-pointer">
                    Interior Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/work-process">
                  <span className="footer-link cursor-pointer">
                    Work Process
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/reviews">
                  <span className="footer-link cursor-pointer">Reviews</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <span className="footer-link cursor-pointer">Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/blogs">
                  <span className="footer-link cursor-pointer">Blogs</span>
                </Link>
              </li>
              <li>
                <Link href="/contact-us">
                  <span className="footer-link cursor-pointer">Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Card */}
          <div className="bg-[#051711] rounded-xl shadow-sm p-8 border border-gray-100">
            <h3 className="text-lg font-semibold mb-6">Services</h3>

            <ul className="space-y-3 text-sm text-[#8A8A8A]">
              <li>
                <Link href="/services">
                  <span className="footer-link cursor-pointer">
                    Residential Interiors
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="footer-link cursor-pointer">
                    Commercial Interiors
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="footer-link cursor-pointer">
                    Corporate Interiors
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="footer-link cursor-pointer">
                    Modular Kitchen
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="footer-link cursor-pointer">
                    Architectural Plan & Elevation
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/recent-projects">
                  <span className="footer-link cursor-pointer">
                    Recent Projects
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <span className="footer-link cursor-pointer">Products</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Instagram Card */}
          <div className="bg-[#051711] rounded-xl shadow-sm p-8 border border-gray-100">
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
          <p>© 2026 The Grandiose. All Rights Reserved.</p>

          <p>
            Website Design & Developed by{" "}
            <span className="text-[#ffffff] font-medium">Aleem</span>
          </p>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/9113054788?text=Hello The Grandiose Team. I am interested to know more about your home interior and renovation services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-15 right-6 z-50 group"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping"></span>

        <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-2xl transition-all duration-300 group-hover:scale-110">
          <FaWhatsapp size={34} className="text-white" />
        </div>
      </a>
    </footer>
  );
}
