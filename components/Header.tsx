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
    { label: "Design Gallery", href: "/design-gallery" },
    { label: "Recent Projects", href: "/recent-projects" },
    { label: "Products", href: "/products" },
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
    { label: "Why Us", href: "/why-us" },
    { label: "FAQs", href: "/faq" },
  ];

  return (
    <header className="w-full bg-[#1B4D3E] shadow-sm sticky top-0 z-50">
      {/* TOP HEADER */}
      <div className="luxury-green py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="text-[#C9A24D] text-3xl font-bold">G</div>
            <div>
              <p className="text-white text-lg font-semibold tracking-wide">
                THE GRANDIOSE
              </p>
              <p className="text-xs text-white tracking-widest">
                Crafting Grandeur
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden text-white lg:flex items-center gap-1 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg hover:bg-white/10 transition"
              >
                {link.label}
              </Link>
            ))}

            {/* MORE DROPDOWN */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/10 transition">
                More <ChevronDown size={14} />
              </button>

              <div className="absolute hidden group-hover:block top-full left-0 bg-white shadow-xl rounded-lg mt-1 w-44 py-2">
                {moreLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-[#2B2B2B] hover:bg-[#F7F6F2] hover:text-[#0F3D2E]"
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
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#1B4D3E] z-50 overflow-y-auto">
          {/* HEADER (optional but better UX) */}
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <p className="font-semibold">Menu</p>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <nav className="px-6 py-4 pb-20 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-[#2B2B2B]"
              >
                {link.label}
              </Link>
            ))}

            {/* MORE */}
            <div className="mt-3 border-t pt-3">
              <p className="px-4 py-2 text-sm font-semibold text-gray-500">
                More
              </p>

              {moreLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-[#2B2B2B]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
