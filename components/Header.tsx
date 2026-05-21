"use client";

import { useState } from "react";
import { Menu, X, ShoppingCart, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useCart } from "./CartProvider";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart } = useCart();

  // Main nav links
  const navLinks = [
    { label: "Interior Services", href: "/design-gallery" },
    { label: "Recent Projects", href: "/recent-projects" },
    { label: "Signature Collections", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Work Process", href: "/work-process" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  // More dropdown links
  const moreLinks = [
    { label: "Gallery", href: "/gallery" },
    { label: "Blogs", href: "/blogs" },
    { label: "About Us", href: "/about-us" },
    // { label: "Why Us", href: "/why-us" },
    { label: "FAQs", href: "/faq" },
  ];

  return (
    <header className="w-full bg-[#051711] shadow-sm sticky top-0 z-50">
      {/* TOP HEADER */}
      <div className="luxury-green py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="text-[#C9A24D] text-3xl font-bold">G</div>
            <div>
              <p className="text-[#C9A24D] text-lg font-semibold tracking-wide">
                THE GRANDIOSE
              </p>
              <p className="text-xs text-[#C9A24D] tracking-widest">
                Crafting Grandeur
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          {/* DESKTOP NAV */}
          <nav className="hidden text-white lg:flex items-center gap-1 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg hover:text-[#D4AF37] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}

            {/* MORE DROPDOWN */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/10 hover:text-[#D4AF37] transition-colors duration-300">
                More <ChevronDown size={14} />
              </button>

              <div className="absolute hidden group-hover:block top-full left-0 bg-[#051711] text-white shadow-xl rounded-lg mt-1 w-44 py-2">
                {moreLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-[#ffffff] hover:text-[#D4AF37]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-4">
            {/* CART */}
            <Link
              href="/cart"
              className="relative flex items-center justify-center"
            >
              <ShoppingCart size={22} className="text-white" />

              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#051711] z-50 overflow-y-auto">
          <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
            <p className="font-semibold text-white">Menu</p>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X size={24} className="text-white" />
            </button>
          </div>

          <nav className="px-6 py-4 pb-20 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-white hover:text-[#D4AF37] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-3 border-t border-white/10 pt-3">
              <p className="px-4 py-2 text-sm font-semibold text-white/50">
                More
              </p>

              {moreLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-white hover:text-[#D4AF37] transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}

      {/* MOBILE BOTTOM NAV — visible only on mobile */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#051711] border-t border-[#D4AF37]/20 shadow-[0_-4px_20px_rgba(0,0,0,0.4)]">
        <div className="flex items-center justify-around px-2 py-2">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex flex-col items-center gap-1 px-3 py-1 group"
          >
            <div className="w-9 h-9 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <span className="text-[9px] tracking-[0.1em] uppercase text-[#D4AF37]/70 group-hover:text-[#D4AF37]">
              Home
            </span>
          </Link>

          <Link
            href="/recent-projects"
            onClick={() => setMobileMenuOpen(false)}
            className="flex flex-col items-center gap-1 px-3 py-1 group"
          >
            <div className="w-9 h-9 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
            </div>
            <span className="text-[9px] tracking-[0.1em] uppercase text-[#D4AF37]/70 group-hover:text-[#D4AF37]">
              Projects
            </span>
          </Link>

          <Link
            href="/products"
            onClick={() => setMobileMenuOpen(false)}
            className="flex flex-col items-center gap-1 px-3 py-1 group"
          >
            <div className="w-9 h-9 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
            <span className="text-[9px] tracking-[0.1em] uppercase text-[#D4AF37]/70 group-hover:text-[#D4AF37]">
              Products
            </span>
          </Link>

          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="flex flex-col items-center gap-1 px-3 py-1 group"
          >
            <div className="w-9 h-9 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
              </svg>
            </div>
            <span className="text-[9px] tracking-[0.1em] uppercase text-[#D4AF37]/70 group-hover:text-[#D4AF37]">
              Services
            </span>
          </Link>

          <Link
            href="/contact-us"
            onClick={() => setMobileMenuOpen(false)}
            className="flex flex-col items-center gap-1 px-3 py-1 group"
          >
            <div className="w-9 h-9 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <span className="text-[9px] tracking-[0.1em] uppercase text-[#D4AF37]/70 group-hover:text-[#D4AF37]">
              Contact
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
