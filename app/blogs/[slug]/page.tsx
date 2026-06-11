"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { getBlogPost } from "@/lib/blogsData";
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
      <div className="min-h-screen bg-[#051711] flex items-center justify-center">
        <div className="text-white text-center">
          <div className="inline-block w-12 h-12 border-4 border-golden border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-white/60">Loading...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#051711]">
      {/* Blog Header */}
      <section className="relative py-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#051711]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-golden/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border-golden/5" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-white/50 tracking-[0.4em] uppercase mb-4 font-sans text-xs">
              {post.category}
            </span>
            <h1 className="gradient-heading text-3xl md:text-3xl mb-5">
              {post.title}
            </h1>

            {/* Introduction - Dynamic from blogsData */}
            {post.introduction && (
              <div
                className="max-w-3xl mx-auto text-center mb-8 text-white/60 text-xs leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.introduction }}
              />
            )}

            <div className="flex items-center justify-center gap-4 text-[11px] tracking-[0.1em] text-white/60 font-sans">
              <span className="flex items-center gap-1.5">
                <Calendar size={12} /> {post.date}
              </span>
              <span className="text-golden/50">•</span>
              <span className="flex items-center gap-1.5">
                <Clock size={12} /> {post.readTime}
              </span>
            </div>
            <nav className="flex items-center justify-center gap-2 text-[11px] tracking-[0.15em] uppercase text-white/50 font-sans mt-6">
              <Link href="/" className="hover:text-golden transition-colors">
                Home
              </Link>
              <ChevronRight size={12} className="text-golden/50" />
              <Link
                href="/blogs"
                className="hover:text-golden transition-colors"
              >
                Blog
              </Link>
              <ChevronRight size={12} className="text-golden/50" />
              <span className="text-golden line-clamp-1 max-w-[200px]">
                {post.title}
              </span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="max-w-6xl mx-auto px-6 py-8">
        {/* Alternating Content & Images Sections */}
        {post.sections &&
          post.sections.map((section: any, index: number) => {
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
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div
                    className={`w-full md:w-1/2 ${isContentLeft ? "" : "md:order-2"}`}
                  >
                    <h2 className="gradient-heading text-2xl md:text-2xl mb-5">
                      {section.title}
                    </h2>
                    <div
                      className="blog-content"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </div>
                  <div
                    className={`w-full md:w-1/2 ${isContentLeft ? "" : "md:order-1"}`}
                  >
                    <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={
                          post.images[section.imageIndex % post.images.length]
                            .src
                        }
                        alt={section.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                {index < post.sections.length - 1 && (
                  <div className="mt-16 pt-8 border-t border-white/10" />
                )}
              </motion.div>
            );
          })}

        {/* Conclusion Section - Full Width, No Image */}
        {post.conclusion && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="blog-content mt-16"
            dangerouslySetInnerHTML={{ __html: post.conclusion }}
          />
        )}

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[10px] tracking-[0.15em] uppercase font-sans font-semibold text-white/50">
              Tags:
            </span>
            {[...new Set([post.category, "Interior Design", "Luxury"])].map(
              (tag, index) => (
                <span
                  key={`${tag}-${index}`}
                  className="px-3 py-1.5 bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] tracking-[0.1em] uppercase font-sans rounded-full border border-[#D4AF37]/40"
                >
                  {tag}
                </span>
              ),
            )}
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
          <span className="text-[#D4AF37] tracking-[0.4em] uppercase font-sans mb-4 block text-xs">
            Ready to Transform Your Space?
          </span>
          <h2 className="gradient-heading text-2xl md:text-2xl mb-5">
            Get in touch with our design experts
          </h2>
          <p className="text-white/60 text-sm mb-8 max-w-lg mx-auto">
            Book a free consultation and let us help you create the home of your
            dreams.
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

      <style jsx global>{`
        .blog-content p {
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.7;
          margin-bottom: 1.25rem;
          font-size: 1.05rem;
        }
        .blog-content ul {
          list-style-type: none;
          padding-left: 0;
          margin: 1.25rem 0;
        }
        .blog-content ul li {
          color: rgba(255, 255, 255, 0.9);
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 0.75rem;
          line-height: 1.6;
          list-style-type: none;
        }
        .blog-content strong {
          color: #d4af37;
          font-weight: 600;
        }
        .gradient-heading {
          background: linear-gradient(135deg, #d4af37 0%, #f3e5ab 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </div>
  );
}
