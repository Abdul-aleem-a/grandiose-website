// lib/blogsData.ts

export type BlogImage = {
  src: string;
  alt: string;
};

export type BlogSection = {
  type: "content-left" | "image-left";
  title: string;
  content: string;
  imageIndex: number;
  imageAlt: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: string;
  sections: BlogSection[]; // Add this
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
    sections: [
      {
        type: "content-left",
        title: "Inspiration Behind Every Design",
        content: "Inspiration is the foundation of every great design. At The Grandiose, our interior design experts in Bangalore draw inspiration from diverse sources — nature, culture, architecture, and modern art — to create unique spaces that tell a story. We believe that a truly beautiful interior is one that not only looks stunning but also feels harmonious.",
        imageIndex: 2,
        imageAlt: "Design inspiration"
      },
      {
        type: "image-left",
        title: "Modern Sophistication Meets Timeless Appeal",
        content: "Our signature style combines modern sophistication with timeless appeal. We focus on contemporary interiors in Bangalore that embrace simplicity, open layouts, and natural materials. Our designs feature neutral tones enhanced with accent elements, artistic lighting, and sleek finishes that bring warmth and character to any space.",
        imageIndex: 0,
        imageAlt: "Modern interior"
      },
      {
        type: "content-left",
        title: "Personalized Interiors, Tailored to You",
        content: "Every project we take on is highly personalized. We understand that no two clients are the same, and neither should their interiors be. Our approach to customized interiors in Bangalore focuses on your lifestyle, preferences, and requirements. From modular kitchen design and wardrobe customization to furniture layout and lighting solutions, every element is tailored to suit your vision.",
        imageIndex: 1,
        imageAlt: "Personalized design"
      }
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
    sections: [
      {
        type: "content-left",
        title: "The Heart of the Home: Modern Kitchen Design",
        content: "The kitchen is truly the heart of every home. In this article, we explore how premium kitchen design combines functionality with unparalleled elegance. From smart storage solutions to high-end appliances, discover what makes a kitchen both beautiful and practical for modern living in Bangalore homes.",
        imageIndex: 0,
        imageAlt: "Premium kitchen design"
      },
      {
        type: "image-left",
        title: "Choosing the Perfect Layout and Materials",
        content: "The layout of your kitchen determines its functionality. We discuss various kitchen layouts including L-shaped, U-shaped, and island configurations. Learn about selecting the right materials for countertops, cabinets, and backsplashes that balance durability with aesthetic appeal. Get expert insights on quartz, marble, granite, and modern composite materials.",
        imageIndex: 1,
        imageAlt: "Kitchen layout and materials"
      },
      {
        type: "content-left",
        title: "Lighting and Storage Innovations",
        content: "Smart lighting and innovative storage solutions can transform your kitchen experience. Discover layered lighting techniques including task, ambient, and accent lighting. Explore pull-out drawers, corner solutions, tall units, and organizational accessories that maximize every inch of your kitchen space while maintaining a clean, uncluttered look.",
        imageIndex: 2,
        imageAlt: "Kitchen lighting and storage"
      }
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
    sections: [
      {
        type: "content-left",
        title: "Creating Your Personal Sanctuary",
        content: "Your bedroom should be more than just a place to sleep—it's your personal sanctuary. We explore how thoughtful bedroom design can transform your daily routine with comfort, style, and smart functionality. From calming color palettes to strategic furniture placement, learn the secrets of creating a restful retreat.",
        imageIndex: 0,
        imageAlt: "Bedroom sanctuary"
      },
      {
        type: "image-left",
        title: "Smart Storage and Space Optimization",
        content: "Modern bedrooms need smart storage solutions that don't compromise on style. Discover built-in wardrobes, under-bed storage, multi-functional furniture, and clever organizational systems. Learn how to maximize every square foot of your bedroom while maintaining an airy, uncluttered atmosphere that promotes relaxation.",
        imageIndex: 1,
        imageAlt: "Bedroom storage"
      },
      {
        type: "content-left",
        title: "Textiles, Lighting, and Ambiance",
        content: "The right combination of textiles and lighting creates the perfect bedroom ambiance. Explore layering techniques with bedding, curtains, and rugs. Learn about dimmable lighting, bedside fixtures, and accent lights that set the mood. Discover how to choose materials that are both luxurious and comfortable for better sleep quality.",
        imageIndex: 2,
        imageAlt: "Bedroom ambiance"
      }
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
    sections: [
      {
        type: "content-left",
        title: "How to Choose the Right Interior Designer",
        content: "Selecting the perfect interior designer in Bangalore for your dream home is crucial. This comprehensive guide walks you through evaluating portfolios, understanding design styles, checking credentials, and conducting interviews. Learn the key questions to ask and red flags to watch for during your search.",
        imageIndex: 0,
        imageAlt: "Choosing a designer"
      },
      {
        type: "image-left",
        title: "Understanding the Design Process",
        content: "Navigate the interior design journey with confidence. From initial consultation and concept development to design presentation, execution, and final installation—understand each phase of the process. Learn about timelines, deliverables, and how to collaborate effectively with your designer for the best results.",
        imageIndex: 1,
        imageAlt: "Design process"
      },
      {
        type: "content-left",
        title: "Budgeting and Project Management Tips",
        content: "Smart budgeting is key to successful interior design. Learn how to allocate your budget effectively, where to splurge, and where to save. Discover project management strategies that keep your renovation on track, avoid common pitfalls, and ensure your dream home becomes a reality without financial stress.",
        imageIndex: 2,
        imageAlt: "Budget planning"
      }
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
    sections: [
      {
        type: "content-left",
        title: "Embracing Modern Design Principles",
        content: "Modern interior design is transforming Bangalore's lifestyle with smart, innovative ideas. Discover the key principles of contemporary design including clean lines, open spaces, and minimalism. Learn how to incorporate these elements into your home while maintaining warmth and personality.",
        imageIndex: 1,
        imageAlt: "Modern design principles"
      },
      {
        type: "image-left",
        title: "Smart Home Integration and Technology",
        content: "Make your home future-ready with smart technology integration. Explore automated lighting systems, smart climate control, security solutions, and entertainment setups that blend seamlessly with your interior design. Learn how technology can enhance both convenience and aesthetics in your living spaces.",
        imageIndex: 0,
        imageAlt: "Smart home technology"
      },
      {
        type: "content-left",
        title: "Sustainable and Eco-Friendly Choices",
        content: "Create a home that's both beautiful and environmentally responsible. Discover sustainable materials, energy-efficient solutions, and eco-friendly practices that reduce your carbon footprint. From recycled materials to natural finishes, learn how green design choices can elevate your interior aesthetics.",
        imageIndex: 2,
        imageAlt: "Sustainable design"
      }
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
    sections: [
      {
        type: "content-left",
        title: "Benefits of Modular Kitchen Design",
        content: "Modular kitchen design is revolutionizing Bangalore homes with smart, efficient solutions. Discover the benefits of factory-built precision, easy installation, customizable layouts, and future flexibility. Learn why modular kitchens are becoming the preferred choice for modern homeowners seeking both style and functionality.",
        imageIndex: 0,
        imageAlt: "Modular kitchen benefits"
      },
      {
        type: "image-left",
        title: "Choosing Components and Materials",
        content: "Understanding modular kitchen components is key to making informed decisions. From cabinet materials and finishes to hardware, countertops, and accessories—learn about quality indicators, durability factors, and style options. Get expert advice on selecting components that match your cooking habits and aesthetic preferences.",
        imageIndex: 1,
        imageAlt: "Kitchen components"
      },
      {
        type: "content-left",
        title: "Maintenance and Long-Term Care",
        content: "Keep your modular kitchen looking pristine with proper maintenance. Learn daily cleaning routines, material-specific care tips, and how to address common issues like scratches, stains, and hardware problems. Discover how regular maintenance extends the life of your investment and preserves its beauty for years to come.",
        imageIndex: 2,
        imageAlt: "Kitchen maintenance"
      }
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