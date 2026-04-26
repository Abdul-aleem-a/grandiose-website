"use client";

import { motion } from "framer-motion";
import { Star, Quote, ChevronRight } from "lucide-react";
import Link from "next/link";
import servicesBg from "../../public/sofa.jpg";
import Image from "next/image";

function page() {
  const testimonials = [
    {
      quote:
        "Overall, excellent work from The Grandiose. We sent all the designs we had in mind to Mr. Noor and he implemented them all upto the mark. He understood our requirements and delivered well. Will recommend Grandiose to everyone for interior work.",
      author: "Payel Das",
      rating: 5,
      reviewLink: "https://maps.app.goo.gl/example1", // Replace with actual Google review link
    },
    {
      quote:
        "Mr. Noor gave us plenty of options and designed our home as if it were his own. Transparent pricing and stunning results.",
      author: "Gafur Mohammed",
      rating: 5,
      reviewLink: "https://maps.app.goo.gl/example2", // Replace with actual Google review link
    },
    {
      quote:
        "Excellent execution and on-time completion. The 3D designs were exactly what we received.",
      author: "Ashutosh Mitra",
      rating: 5,
      reviewLink: "https://maps.app.goo.gl/example3", // Replace with actual Google review link
    },
    {
      quote:
        "Overall a wonderful experience. Really grateful for the services provided.",
      author: "Naveen Pareek",
      rating: 5,
      reviewLink: "https://maps.app.goo.gl/example4", // Replace with actual Google review link
    },
  ];

  return (
    <div>
      {/* TESTIMONIALS */}

      <section className="md: px-6 md:px-10 bg-[#1B4D3E]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}

          <section className="relative h-[52vh] min-h-[380px] overflow-hidden flex items-center justify-center">
            {/* Background image with Next.js Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={servicesBg}
                alt="Services hero"
                fill
                className="object-cover object-center scale-105 opacity-30 transition-transform duration-700 hover:scale-110"
                priority
                sizes="100vw"
                quality={90}
              />
            </div>
            {/* Layered overlays with royal green */}
            <div className="absolute inset-0 bg-[#1B4D3E]/90" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1B4D3E]/30 via-[#1B4D3E]/70 to-[#1B4D3E]" />

            {/* CENTER TEXT */}
            <div className="relative z-10 text-center px-6">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[10px] tracking-[0.55em] uppercase text-[#D4AF37] mb-4 font-sans font-medium"
              >
                The Grandiose · Bangalore
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, type: "spring", stiffness: 60 }}
                className="font-serif text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-5"
              >
                Our Clients{" "}
                <span className="italic font-normal text-[#D4AF37]">
                  Review
                </span>
              </motion.h1>

              {/* Breadcrumb */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
                className="flex items-center justify-center gap-2 mt-6 text-[11px] tracking-[0.15em] uppercase"
              >
                <Link
                  href="/"
                  className="text-white/40 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  Home
                </Link>
                <ChevronRight size={12} className="text-[#D4AF37]/50" />
                <span className="text-[#D4AF37]">Reviews</span>
              </motion.div>
            </div>
          </section>

          {/* Testimonials Grid */}

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 md:p-10 bg-[#0F3D2E] rounded-sm border border-golden/20 hover:border-golden/50 hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Gold top bar */}

                <div className="absolute top-0 left-0 h-[3px] w-0 bg-golden group-hover:w-full transition-all duration-500" />

                {/* Quote icon */}

                <Quote size={40} strokeWidth={0.8} className="text-[#D4AF37]" />

                <br />

                {/* Stars */}

                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star
                      key={j}
                      size={13}
                      className="fill-golden text-[#D4AF37]"
                    />
                  ))}
                </div>

                {/* Quote */}

                <p className="font-serif text-base md:text-lg italic text-white/80 leading-relaxed mb-8">
                  "{t.quote}"
                </p>

                {/* Author & Google Review Link */}

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-golden/20 flex items-center justify-center"></div>

                    <div>
                      <p className="text-[#D4AF37] text-lg md:text-xl font-semibold">
                        {t.author}
                      </p>
                    </div>
                  </div>

                  {/* Google Review Link Button */}
                  <a
                    href={t.reviewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-golden/30 rounded-lg transition-all duration-300 group/link"
                  >
                    {/* Google Icon */}
                    <svg
                      className="w-4 h-4 text-golden"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    <span className="text-[10px] tracking-wide text-white/70 group-hover/link:text-golden transition-colors">
                      View on Google
                    </span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;