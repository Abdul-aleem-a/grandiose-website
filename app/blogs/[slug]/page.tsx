// app/blogs/[slug]/page.tsx
"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { getBlogPost, getAllBlogPosts } from "@/lib/blogsData";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default function BlogPostPage({ params }: PageProps) {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const resolvedParams = await params;
      const { slug } = resolvedParams;
      const foundPost = getBlogPost(slug);
      setPost(foundPost || null);
      setLoading(false);
    };
    fetchPost();
  }, [params]);

  if (loading) {
    return (
        <div>
            {/* Hero */}
            <section className="luxury-green py-16 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-serif mb-3">
                    {post?.title}
                </h1>

                <p className="text-sm">
                    Home <span className="text-[#C9A24D] mx-2">/</span> Blogs
                </p>
                </section>
                </div>
  )}


  // Alternating sections - content on left, image on right, then image on left, content on right
  const alternatingSections = [
    {
      type: "content-left",
      content: `<h2 class="text-3xl font-serif font-semibold text-[#D4AF37] mb-4">Inspiration Behind Every Design</h2>
                <p class="text-white/80 leading-relaxed text-lg">Inspiration is the foundation of every great design. At The Grandiose, our interior design experts in Bangalore draw inspiration from diverse sources — nature, culture, architecture, and modern art — to create unique spaces that tell a story. We believe that a truly beautiful interior is one that not only looks stunning but also feels harmonious.</p>`,
      imageIndex: 2,
      imageAlt: "Design inspiration",
    },
    {
      type: "image-left",
      imageIndex: 0,
      imageAlt: "Modern interior",
      content: `<h2 class="text-3xl font-serif font-semibold text-[#D4AF37] mb-4">Modern Sophistication Meets Timeless Appeal</h2>
                <p class="text-white/80 leading-relaxed text-lg">Our signature style combines modern sophistication with timeless appeal. We focus on contemporary interiors in Bangalore that embrace simplicity, open layouts, and natural materials. Our designs feature neutral tones enhanced with accent elements, artistic lighting, and sleek finishes that bring warmth and character to any space.</p>`,
    },
    {
      type: "content-left",
      content: `<h2 class="text-3xl font-serif font-semibold text-[#D4AF37] mb-4">Personalized Interiors, Tailored to You</h2>
                <p class="text-white/80 leading-relaxed text-lg">Every project we take on is highly personalized. We understand that no two clients are the same, and neither should their interiors be. Our approach to customized interiors in Bangalore focuses on your lifestyle, preferences, and requirements. From modular kitchen design and wardrobe customization to furniture layout and lighting solutions, every element is tailored to suit your vision.</p>`,
      imageIndex: 1,
      imageAlt: "Personalized design",
    },
    {
      type: "image-left",
      imageIndex: 2,
      imageAlt: "Sustainable design",
      content: `<h2 class="text-3xl font-serif font-semibold text-[#D4AF37] mb-4">Sustainability at Heart</h2>
                <p class="text-white/80 leading-relaxed text-lg">Sustainability is at the heart of our design philosophy. As an eco-conscious interior design company in Bangalore, we believe that beautiful spaces can also be responsible. Our sustainable interior solutions include the use of recycled materials, renewable resources, energy-efficient lighting, and proper ventilation.</p>`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#1B4D3E]">
      {/* Blog Header */}
      <section className="relative py-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1B4D3E]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-golden/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border-golden/5" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] mb-4 font-sans">
              {post.category}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-[11px] tracking-[0.1em] text-white/60 font-sans">
              <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
              <span className="text-[#D4AF37]/50">•</span>
              <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
            </div>
            <nav className="flex items-center justify-center gap-2 text-[11px] tracking-[0.15em] uppercase text-white/50 font-sans mt-6">
              <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
              <ChevronRight size={12} className="text-[#D4AF37]/50" />
              <Link href="/blogs" className="hover:text-[#D4AF37] transition-colors">Blog</Link>
              <ChevronRight size={12} className="text-[#D4AF37]/50" />
              <span className="text-[#D4AF37] line-clamp-1 max-w-[200px]">{post.title}</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Alternating Content & Images - Side by Side */}
      <article className="max-w-6xl mx-auto px-6 py-8">
        {alternatingSections.map((section, index) => {
          const isContentLeft = section.type === "content-left";
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="my-16"
            >
              {/* Two column layout - side by side */}
              <div className="flex flex-col md:flex-row gap-12 items-center">
                {/* Content Column */}
                <div className={`w-full md:w-1/2 ${isContentLeft ? '' : 'md:order-2'}`}>
                  <div 
                    className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-[#D4AF37] prose-p:text-white/80 prose-strong:text-[#D4AF37]"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </div>
                
                {/* Image Column */}
                <div className={`w-full md:w-1/2 ${isContentLeft ? '' : 'md:order-1'}`}>
                  <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={post.images[section.imageIndex % post.images.length].src}
                      alt={section.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Divider between sections */}
              {index < alternatingSections.length - 1 && (
                <div className="mt-16 pt-8 border-t border-white/10" />
              )}
            </motion.div>
          );
        })}

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[10px] tracking-[0.15em] uppercase font-sans font-semibold text-white/50">Tags:</span>
            <span className="px-3 py-1.5 bg-golden/10 text-[#D4AF37] text-[10px] tracking-[0.1em] uppercase font-sans rounded-full border border-golden/20">
              {post.category}
            </span>
            <span className="px-3 py-1.5 bg-golden/10 text-[#D4AF37] text-[10px] tracking-[0.1em] uppercase font-sans rounded-full border border-golden/20">
              Interior Design
            </span>
            <span className="px-3 py-1.5 bg-golden/10 text-[#D4AF37] text-[10px] tracking-[0.1em] uppercase font-sans rounded-full border border-golden/20">
              Luxury
            </span>
          </div>
        </motion.div>
      </article>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-golden/10 py-20 border-t border-golden/20 mt-16"
      >
        <div className="max-w-3xl mx-auto text-center px-6">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] font-sans mb-4 block">Ready to Transform Your Space?</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Get in touch with our design experts
          </h2>
          <p className="text-white/60 font-sans text-sm mb-8 max-w-lg mx-auto">
            Book a free consultation and let us help you create the home of your dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-6 py-3.5 border border-golden/30 text-white text-[11px] tracking-[0.15em] uppercase font-sans font-semibold rounded-lg hover:bg-golden/85 transition-all duration-300 shadow-lg text-center"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:+919876543210"
              className="flex-1 px-6 py-3.5 border border-golden/30 text-white text-[11px] tracking-[0.15em] uppercase font-sans font-medium rounded-lg hover:bg-golden/10 transition-all duration-300 text-center"
            >
              Call Us
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}