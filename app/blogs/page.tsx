// app/blogs/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowRight,
  ChevronRight,
  Search,
} from "lucide-react";
import { blogPosts, categories } from "@/lib/blogsData";

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = blogPosts.filter((post) => {
    const matchesCat =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#051711]">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#051711]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]  border-golden/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px]  border-golden/5" />
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[10px] tracking-[0.4em] uppercase text-white mb-4 font-sans">
              Insights & Inspiration
            </span>
            <h1 className="gradient-heading text-5xl md:text-5xl mb-5">
              Design Journal
            </h1>

            <div className="max-w-3xl mx-auto text-center mb-8">
              <p className="text-lg md:text-xl font-medium text-white mb-3">
                Luxury Interior Design Tips, Trends & Updates
              </p>

              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                Stay inspired with our insights and tips. Explore the latest
                trends in luxury interiors and learn how to elevate your living
                spaces with expert advice.
              </p>
            </div>

            <nav className="flex items-center justify-center gap-2 text-[11px] tracking-[0.15em] uppercase text-white/50 font-sans">
              <Link href="/" className="hover:text-golden transition-colors">
                Home
              </Link>
              <ChevronRight size={12} className="text-golden/50" />
              <span className="text-golden">Design Journal</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Search + Filter */}
      <section className="bg-[#051711]/90 py-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-6">
            {/* Search */}
            {/* Search */}
            <div className="flex flex-col md:flex-row gap-3 w-full">
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                />

                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-lg border border-[#D4AF37] bg-white/5 text-white text-sm font-sans placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 transition-all"
                />
              </div>

              <button className="px-8 py-3.5 rounded-lg bg-[#051711] text-[#D4AF37] border border-[#D4AF37] font-semibold tracking-[0.12em] uppercase text-sm transition-all duration-300">
                Search
              </button>
            </div>

            {/* Categories — horizontally scrollable on mobile */}
            <div className="w-full overflow-x-auto scrollbar-none -mx 6 px-6">
              <div className="flex items-center gap-2 w-max">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-[11px] tracking-[0.1em] uppercase font-sans font-medium whitespace-nowrap transition-all duration-300 ${
                      activeCategory === cat
                        ? "bg-[#D4AF37] text-[#051711] shadow-md"
                        : "bg-white/10 text-white/70 hover:bg-white/20 border border-white/10"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid - 3 Columns */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={`/blogs/${post.slug}`}
                  className="group block h-full"
                >
                  <article className="h-full bg-white/5 rounded-xl overflow-hidden border border-white/10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={post.images[0].src}
                        alt={post.images[0].alt}
                        width={800}
                        height={544}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="absolute top-3 left-3 px-3 py-1 bg-golden/90 backdrop-blur-sm text-[#051711] text-[9px] tracking-[0.15em] uppercase font-sans font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-[10px] tracking-[0.1em] text-white/50 font-sans mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={10} /> {post.date}
                        </span>
                        <span className="text-white/20">•</span>
                        <span className="flex items-center gap-1">
                          <Clock size={10} /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="gradient-heading text-1xl md:text-1xl mb-5">
                        {post.title}
                      </h3>
                      <p className="text-white/60 font-palegoldenrod text-[13px] leading-relaxed mb-4 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-yellow-500 text-[11px] tracking-[0.12em] uppercase font-sans font-semibold group-hover:gap-3 transition-all duration-300 mt-auto">
                        Read more <ArrowRight size={13} />
                      </span>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/60 font-sans text-lg">
              No articles found matching your criteria.
            </p>
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      {/* Newsletter CTA - Simple Version */}
      <section className="bg-golden/5 py-20 border-t border-golden/20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <span className="text-[10px] tracking-[0.4em] uppercase text-white font-sans mb-4 block">
            Stay Inspired
          </span>
          <h2 className="gradient-heading text-3xl md:text-3xl mb-5">
            Get Design Tips Delivered
          </h2>
          <p className="text-white/70 font-palegoldenrod text-sm mb-10 max-w-lg mx-auto">
            Join our community of design enthusiasts and receive expert interior
            design tips, project showcases, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20receive%20design%20updates"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[200px] px-6 py-4 border-2  text-yellow-500 text-[12px] tracking-[0.15em] uppercase font-sans font-bold rounded-lg hover:bg-golden/90 hover:shadow-lg transition-all duration-300 text-center"
            >
              Subscribe via WhatsApp
            </a>
            <a
              href="tel:+919876543210"
              className="min-w-[200px] px-6 py-4 border-2  text-yellow-500 text-[12px] tracking-[0.15em] uppercase font-sans font-bold rounded-lg hover:bg-golden/10 transition-all duration-300 text-center"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
