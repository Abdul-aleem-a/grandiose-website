// lib/blogsData.ts

export type BlogImage = {
  src: string;
  alt: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: string;
  images: BlogImage[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "design-chronicles-exploring-interior-inspirations",
    title: "Design Chronicles: Exploring Interior Inspirations",
    date: "May 4, 2024",
    readTime: "8 min read",
    category: "Inspiration",
    excerpt: "Discover how thoughtful interior design transforms living spaces into masterpieces of elegance and functionality.",
    images: [
      { src: "/sofa.jpg", alt: "Luxury living room design" },
      { src: "/sofa.jpg", alt: "Modern interior design" },
      { src: "/sofa.jpg", alt: "Elegant home decor" },
    ],
    content: "",
  },
  {
    slug: "the-art-of-interiors-a-designers-journal",
    title: "The Art of Interiors: A Designer's Journal",
    date: "April 28, 2024",
    readTime: "6 min read",
    category: "Kitchen Design",
    excerpt: "Step into the world of premium kitchen design where functionality meets unparalleled elegance.",
    images: [
      { src: "/sofa.jpg", alt: "Premium kitchen design" },
      { src: "/sofa.jpg", alt: "Modern kitchen interior" },
      { src: "/sofa.jpg", alt: "Luxury kitchen setup" },
    ],
    content: "",
  },
  {
    slug: "innovative-spaces-insights-from-interior-experts",
    title: "Innovative Spaces: Insights from Interior Experts",
    date: "April 20, 2024",
    readTime: "5 min read",
    category: "Bedroom Design",
    excerpt: "Explore how bedroom design can transform your daily routine with comfort, style, and smart functionality.",
    images: [
      { src: "/sofa.jpg", alt: "Bedroom interior design" },
      { src: "/sofa.jpg", alt: "Modern bedroom setup" },
      { src: "/sofa.jpg", alt: "Luxury bedroom decor" },
    ],
    content: "",
  },
  {
    slug: "interior-designer-bangalore-complete-guide",
    title: "Interior Designer Bangalore: Complete Guide to Designing Your Dream Home",
    date: "April 15, 2024",
    readTime: "10 min read",
    category: "Guide",
    excerpt: "A comprehensive guide to choosing the right interior designer in Bangalore for your dream home project.",
    images: [
      { src: "/sofa.jpg", alt: "Interior design consultation" },
      { src: "/sofa.jpg", alt: "Home design planning" },
      { src: "/sofa.jpg", alt: "Dream home interior" },
    ],
    content: "",
  },
  {
    slug: "home-interior-design-bangalore-smart-ideas",
    title: "Home Interior Design in Bangalore | Smart Ideas for Modern Living",
    date: "April 10, 2024",
    readTime: "7 min read",
    category: "Modern Design",
    excerpt: "Discover smart, modern interior design ideas that are transforming Bangalore's lifestyle.",
    images: [
      { src: "/sofa.jpg", alt: "Modern home interior" },
      { src: "/sofa.jpg", alt: "Smart living space" },
      { src: "/sofa.jpg", alt: "Contemporary design" },
    ],
    content: "",
  },
  {
    slug: "modular-kitchen-design-bangalore-smart-solutions",
    title: "Modular Kitchen Design in Bangalore | Smart Solutions for Every Home",
    date: "April 5, 2024",
    readTime: "9 min read",
    category: "Kitchen Design",
    excerpt: "How modular kitchen design is revolutionizing Bangalore homes with smart solutions.",
    images: [
      { src: "/sofa.jpg", alt: "Modular kitchen design" },
      { src: "/sofa.jpg", alt: "Smart kitchen solutions" },
      { src: "/sofa.jpg", alt: "Modern modular kitchen" },
    ],
    content: "",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export const categories = ["All", ...Array.from(new Set(blogPosts.map(p => p.category)))];