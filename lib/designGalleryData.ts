export type GalleryFilter = "All" | "Modern" | "Classic" | "Luxury" | "Compact Spaces";

export interface GalleryImage {
    src: string;
    filter: Exclude<GalleryFilter, "All">;
    alt: string;
}

export interface ProjectOverviewStat {
    label: string;
    value: string;
}

export interface Material {
    label: string;
    image: string;
}

export interface DesignCategory {
    slug: string;
    title: string;
    tagline: string;
    subtitle: string;
    heroImage: string;
    thumbnailImage: string;
    stats: { value: string; label: string }[];
    projectOverview: {
        points: { label: string; value: string }[];
        moodboardImages: { filter: GalleryFilter; image: string }[];
    };
    gallery: GalleryImage[];
    materials: Material[];
    cta: {
        heading: string;
        subheading: string;
        phone: string;
    };
}

export const designCategories: DesignCategory[] = [
    {
        slug: "living-room-designs",
        title: "Living Room",
        tagline: "Timeless Elegance, Crafted to Perfection",
        subtitle: "Create a Luxurious & Inviting Living Space",
        heroImage: "/design-gallery/living-room/hero.jpg",
        thumbnailImage: "/design-gallery/living-room/thumb.jpg",
        stats: [
            { value: "250+", label: "Projects" },
            { value: "100%", label: "Custom Designs" },
            { value: "10-Year", label: "Warranty" },
        ],
        projectOverview: {
            points: [
                { label: "Space Type", value: "Apartments · Villas · Penthouse" },
                { label: "Design Style", value: "Modern · Classic · Contemporary" },
                { label: "Starting Price", value: "₹2.5 Lakhs" },
            ],
            moodboardImages: [
                { filter: "All", image: "/design-gallery/living-room/mood-all.jpg" },
                { filter: "Modern", image: "/design-gallery/living-room/mood-modern.jpg" },
                { filter: "Classic", image: "/design-gallery/living-room/mood-classic.jpg" },
                { filter: "Luxury", image: "/design-gallery/living-room/mood-luxury.jpg" },
                { filter: "Compact Spaces", image: "/design-gallery/living-room/mood-compact.jpg" },
            ],
        },
        gallery: [
            { src: "/design-gallery/living-room/g-modern-1.jpg", filter: "Modern", alt: "Modern Living Room 1" },
            { src: "/design-gallery/living-room/g-modern-2.jpg", filter: "Modern", alt: "Modern Living Room 2" },
            { src: "/design-gallery/living-room/g-classic-1.jpg", filter: "Classic", alt: "Classic Living Room 1" },
            { src: "/design-gallery/living-room/g-classic-2.jpg", filter: "Classic", alt: "Classic Living Room 2" },
            { src: "/design-gallery/living-room/g-luxury-1.jpg", filter: "Luxury", alt: "Luxury Living Room 1" },
            { src: "/design-gallery/living-room/g-luxury-2.jpg", filter: "Luxury", alt: "Luxury Living Room 2" },
            { src: "/design-gallery/living-room/g-compact-1.jpg", filter: "Compact Spaces", alt: "Compact Living 1" },
            { src: "/design-gallery/living-room/g-compact-2.jpg", filter: "Compact Spaces", alt: "Compact Living 2" },
        ],
        materials: [
            { label: "Italian Marble", image: "/design-gallery/materials/italian-marble.jpg" },
            { label: "Premium Wood", image: "/design-gallery/materials/premium-wood.jpg" },
            { label: "Brass & Metal", image: "/design-gallery/materials/brass-metal.jpg" },
            { label: "Fabric Options", image: "/design-gallery/materials/fabric.jpg" },
        ],
        cta: {
            heading: "Ready to Transform Your Living Room?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "+91 98765 43210",
        },
    },
    {
        slug: "bedroom-designs",
        title: "Bedroom",
        tagline: "Serene Luxury, Designed for Rest",
        subtitle: "Crafting Serene & Luxurious Bedrooms Nearby",
        heroImage: "/design-gallery/bedroom/hero.jpg",
        thumbnailImage: "/design-gallery/bedroom/thumb.jpg",
        stats: [
            { value: "180+", label: "Projects" },
            { value: "100%", label: "Custom Designs" },
            { value: "10-Year", label: "Warranty" },
        ],
        projectOverview: {
            points: [
                { label: "Space Type", value: "Master · Guest · Kids Room" },
                { label: "Design Style", value: "Modern · Classic · Minimalist" },
                { label: "Starting Price", value: "₹1.8 Lakhs" },
            ],
            moodboardImages: [
                { filter: "All", image: "/design-gallery/bedroom/mood-all.jpg" },
                { filter: "Modern", image: "/design-gallery/bedroom/mood-modern.jpg" },
                { filter: "Classic", image: "/design-gallery/bedroom/mood-classic.jpg" },
                { filter: "Luxury", image: "/design-gallery/bedroom/mood-luxury.jpg" },
                { filter: "Compact Spaces", image: "/design-gallery/bedroom/mood-compact.jpg" },
            ],
        },
        gallery: [
            { src: "/design-gallery/bedroom/g-modern-1.jpg", filter: "Modern", alt: "Modern Bedroom 1" },
            { src: "/design-gallery/bedroom/g-modern-2.jpg", filter: "Modern", alt: "Modern Bedroom 2" },
            { src: "/design-gallery/bedroom/g-classic-1.jpg", filter: "Classic", alt: "Classic Bedroom 1" },
            { src: "/design-gallery/bedroom/g-classic-2.jpg", filter: "Classic", alt: "Classic Bedroom 2" },
            { src: "/design-gallery/bedroom/g-luxury-1.jpg", filter: "Luxury", alt: "Luxury Bedroom 1" },
            { src: "/design-gallery/bedroom/g-luxury-2.jpg", filter: "Luxury", alt: "Luxury Bedroom 2" },
            { src: "/design-gallery/bedroom/g-compact-1.jpg", filter: "Compact Spaces", alt: "Compact Bedroom 1" },
            { src: "/design-gallery/bedroom/g-compact-2.jpg", filter: "Compact Spaces", alt: "Compact Bedroom 2" },
        ],
        materials: [
            { label: "Italian Marble", image: "/design-gallery/materials/italian-marble.jpg" },
            { label: "Premium Wood", image: "/design-gallery/materials/premium-wood.jpg" },
            { label: "Brass & Metal", image: "/design-gallery/materials/brass-metal.jpg" },
            { label: "Fabric Options", image: "/design-gallery/materials/fabric.jpg" },
        ],
        cta: {
            heading: "Ready to Transform Your Bedroom?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "+91 98765 43210",
        },
    },
    {
        slug: "wardrobe-designs",
        title: "Wardrobe",
        tagline: "Bespoke Storage, Impeccably Crafted",
        subtitle: "Custom Wardrobes & Storage Solutions Near You",
        heroImage: "/design-gallery/wardrobe/hero.jpg",
        thumbnailImage: "/design-gallery/wardrobe/thumb.jpg",
        stats: [
            { value: "300+", label: "Projects" },
            { value: "100%", label: "Custom Designs" },
            { value: "10-Year", label: "Warranty" },
        ],
        projectOverview: {
            points: [
                { label: "Space Type", value: "Walk-in · Sliding · Hinged" },
                { label: "Design Style", value: "Modern · Classic · Luxury" },
                { label: "Starting Price", value: "₹80,000" },
            ],
            moodboardImages: [
                { filter: "All", image: "/design-gallery/wardrobe/mood-all.jpg" },
                { filter: "Modern", image: "/design-gallery/wardrobe/mood-modern.jpg" },
                { filter: "Classic", image: "/design-gallery/wardrobe/mood-classic.jpg" },
                { filter: "Luxury", image: "/design-gallery/wardrobe/mood-luxury.jpg" },
                { filter: "Compact Spaces", image: "/design-gallery/wardrobe/mood-compact.jpg" },
            ],
        },
        gallery: [
            { src: "/design-gallery/wardrobe/g-modern-1.jpg", filter: "Modern", alt: "Modern Wardrobe 1" },
            { src: "/design-gallery/wardrobe/g-modern-2.jpg", filter: "Modern", alt: "Modern Wardrobe 2" },
            { src: "/design-gallery/wardrobe/g-classic-1.jpg", filter: "Classic", alt: "Classic Wardrobe 1" },
            { src: "/design-gallery/wardrobe/g-classic-2.jpg", filter: "Classic", alt: "Classic Wardrobe 2" },
            { src: "/design-gallery/wardrobe/g-luxury-1.jpg", filter: "Luxury", alt: "Luxury Wardrobe 1" },
            { src: "/design-gallery/wardrobe/g-luxury-2.jpg", filter: "Luxury", alt: "Luxury Wardrobe 2" },
            { src: "/design-gallery/wardrobe/g-compact-1.jpg", filter: "Compact Spaces", alt: "Compact Wardrobe 1" },
            { src: "/design-gallery/wardrobe/g-compact-2.jpg", filter: "Compact Spaces", alt: "Compact Wardrobe 2" },
        ],
        materials: [
            { label: "Premium Wood", image: "/design-gallery/materials/premium-wood.jpg" },
            { label: "Glass Panels", image: "/design-gallery/materials/glass.jpg" },
            { label: "Brass & Metal", image: "/design-gallery/materials/brass-metal.jpg" },
            { label: "Lacquer Finish", image: "/design-gallery/materials/lacquer.jpg" },
        ],
        cta: {
            heading: "Ready to Design Your Dream Wardrobe?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "+91 98765 43210",
        },
    },
    {
        slug: "bathroom-designs",
        title: "Bathroom",
        tagline: "Elegant and Luxurious Bathroom Interiors",
        subtitle: "Elegant and Luxurious Bathroom Interiors",
        heroImage: "/design-gallery/bathroom/hero.jpg",
        thumbnailImage: "/design-gallery/bathroom/thumb.jpg",
        stats: [
            { value: "120+", label: "Projects" },
            { value: "100%", label: "Custom Designs" },
            { value: "10-Year", label: "Warranty" },
        ],
        projectOverview: {
            points: [
                { label: "Space Type", value: "Master Bath · Ensuite · Guest Bath" },
                { label: "Design Style", value: "Modern · Spa · Luxury" },
                { label: "Starting Price", value: "₹1.2 Lakhs" },
            ],
            moodboardImages: [
                { filter: "All", image: "/design-gallery/bathroom/mood-all.jpg" },
                { filter: "Modern", image: "/design-gallery/bathroom/mood-modern.jpg" },
                { filter: "Classic", image: "/design-gallery/bathroom/mood-classic.jpg" },
                { filter: "Luxury", image: "/design-gallery/bathroom/mood-luxury.jpg" },
                { filter: "Compact Spaces", image: "/design-gallery/bathroom/mood-compact.jpg" },
            ],
        },
        gallery: [
            { src: "/design-gallery/bathroom/g-modern-1.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/design-gallery/bathroom/g-modern-2.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/design-gallery/bathroom/g-classic-1.jpg", filter: "Classic", alt: "Classic Bathroom 1" },
            { src: "/design-gallery/bathroom/g-classic-2.jpg", filter: "Classic", alt: "Classic Bathroom 2" },
            { src: "/design-gallery/bathroom/g-luxury-1.jpg", filter: "Luxury", alt: "Luxury Bathroom 1" },
            { src: "/design-gallery/bathroom/g-luxury-2.jpg", filter: "Luxury", alt: "Luxury Bathroom 2" },
            { src: "/design-gallery/bathroom/g-compact-1.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 1" },
            { src: "/design-gallery/bathroom/g-compact-2.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 2" },
        ],
        materials: [
            { label: "Italian Marble", image: "/design-gallery/materials/italian-marble.jpg" },
            { label: "Porcelain Tiles", image: "/design-gallery/materials/porcelain.jpg" },
            { label: "Brass Fixtures", image: "/design-gallery/materials/brass-metal.jpg" },
            { label: "Natural Stone", image: "/design-gallery/materials/stone.jpg" },
        ],
        cta: {
            heading: "Ready to Elevate Your Bathroom?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "+91 98765 43210",
        },
    },
    {
        slug: "modular-kitchen",
        title: "Modular Kitchen",
        tagline: "Elegant and Luxurious Modular Kitchen Interiors",
        subtitle: "Elegant and Luxurious Modular Kitchen Interiors",
        heroImage: "/design-gallery/kitchen/hero.jpg",
        thumbnailImage: "/design-gallery/kitchen/thumb.jpg",
        stats: [
            { value: "120+", label: "Projects" },
            { value: "100%", label: "Custom Designs" },
            { value: "10-Year", label: "Warranty" },
        ],
        projectOverview: {
            points: [
                { label: "Space Type", value: "Master Bath · Ensuite · Guest Bath" },
                { label: "Design Style", value: "Modern · Spa · Luxury" },
                { label: "Starting Price", value: "₹1.2 Lakhs" },
            ],
            moodboardImages: [
                { filter: "All", image: "/design-gallery/bathroom/mood-all.jpg" },
                { filter: "Modern", image: "/design-gallery/bathroom/mood-modern.jpg" },
                { filter: "Classic", image: "/design-gallery/bathroom/mood-classic.jpg" },
                { filter: "Luxury", image: "/design-gallery/bathroom/mood-luxury.jpg" },
                { filter: "Compact Spaces", image: "/design-gallery/bathroom/mood-compact.jpg" },
            ],
        },
        gallery: [
            { src: "/design-gallery/bathroom/g-modern-1.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/design-gallery/bathroom/g-modern-2.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/design-gallery/bathroom/g-classic-1.jpg", filter: "Classic", alt: "Classic Bathroom 1" },
            { src: "/design-gallery/bathroom/g-classic-2.jpg", filter: "Classic", alt: "Classic Bathroom 2" },
            { src: "/design-gallery/bathroom/g-luxury-1.jpg", filter: "Luxury", alt: "Luxury Bathroom 1" },
            { src: "/design-gallery/bathroom/g-luxury-2.jpg", filter: "Luxury", alt: "Luxury Bathroom 2" },
            { src: "/design-gallery/bathroom/g-compact-1.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 1" },
            { src: "/design-gallery/bathroom/g-compact-2.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 2" },
        ],
        materials: [
            { label: "Italian Marble", image: "/design-gallery/materials/italian-marble.jpg" },
            { label: "Porcelain Tiles", image: "/design-gallery/materials/porcelain.jpg" },
            { label: "Brass Fixtures", image: "/design-gallery/materials/brass-metal.jpg" },
            { label: "Natural Stone", image: "/design-gallery/materials/stone.jpg" },
        ],
        cta: {
            heading: "Ready to Elevate Your Bathroom?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "+91 98765 43210",
        },
    },
    {
        slug: "customize-your-kitchen",
        title: "Customize Your Kitchen",
        tagline: "Elegant and Luxurious Modular Kitchen Interiors",
        subtitle: "Elegant and Luxurious Modular Kitchen Interiors",
        heroImage: "/design-gallery/kitchen/hero.jpg",
        thumbnailImage: "/design-gallery/kitchen/thumb.jpg",
        stats: [
            { value: "120+", label: "Projects" },
            { value: "100%", label: "Custom Designs" },
            { value: "10-Year", label: "Warranty" },
        ],
        projectOverview: {
            points: [
                { label: "Space Type", value: "Master Bath · Ensuite · Guest Bath" },
                { label: "Design Style", value: "Modern · Spa · Luxury" },
                { label: "Starting Price", value: "₹1.2 Lakhs" },
            ],
            moodboardImages: [
                { filter: "All", image: "/design-gallery/bathroom/mood-all.jpg" },
                { filter: "Modern", image: "/design-gallery/bathroom/mood-modern.jpg" },
                { filter: "Classic", image: "/design-gallery/bathroom/mood-classic.jpg" },
                { filter: "Luxury", image: "/design-gallery/bathroom/mood-luxury.jpg" },
                { filter: "Compact Spaces", image: "/design-gallery/bathroom/mood-compact.jpg" },
            ],
        },
        gallery: [
            { src: "/design-gallery/bathroom/g-modern-1.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/design-gallery/bathroom/g-modern-2.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/design-gallery/bathroom/g-classic-1.jpg", filter: "Classic", alt: "Classic Bathroom 1" },
            { src: "/design-gallery/bathroom/g-classic-2.jpg", filter: "Classic", alt: "Classic Bathroom 2" },
            { src: "/design-gallery/bathroom/g-luxury-1.jpg", filter: "Luxury", alt: "Luxury Bathroom 1" },
            { src: "/design-gallery/bathroom/g-luxury-2.jpg", filter: "Luxury", alt: "Luxury Bathroom 2" },
            { src: "/design-gallery/bathroom/g-compact-1.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 1" },
            { src: "/design-gallery/bathroom/g-compact-2.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 2" },
        ],
        materials: [
            { label: "Italian Marble", image: "/design-gallery/materials/italian-marble.jpg" },
            { label: "Porcelain Tiles", image: "/design-gallery/materials/porcelain.jpg" },
            { label: "Brass Fixtures", image: "/design-gallery/materials/brass-metal.jpg" },
            { label: "Natural Stone", image: "/design-gallery/materials/stone.jpg" },
        ],
        cta: {
            heading: "Ready to Elevate Your Bathroom?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "+91 98765 43210",
        },
    },
    {
        slug: "home-office-designs",
        title: "Home Office",
        tagline: "Elegant and Luxurious Modular Kitchen Interiors",
        subtitle: "Elegant and Luxurious Modular Kitchen Interiors",
        heroImage: "/design-gallery/kitchen/hero.jpg",
        thumbnailImage: "/design-gallery/kitchen/thumb.jpg",
        stats: [
            { value: "120+", label: "Projects" },
            { value: "100%", label: "Custom Designs" },
            { value: "10-Year", label: "Warranty" },
        ],
        projectOverview: {
            points: [
                { label: "Space Type", value: "Master Bath · Ensuite · Guest Bath" },
                { label: "Design Style", value: "Modern · Spa · Luxury" },
                { label: "Starting Price", value: "₹1.2 Lakhs" },
            ],
            moodboardImages: [
                { filter: "All", image: "/design-gallery/bathroom/mood-all.jpg" },
                { filter: "Modern", image: "/design-gallery/bathroom/mood-modern.jpg" },
                { filter: "Classic", image: "/design-gallery/bathroom/mood-classic.jpg" },
                { filter: "Luxury", image: "/design-gallery/bathroom/mood-luxury.jpg" },
                { filter: "Compact Spaces", image: "/design-gallery/bathroom/mood-compact.jpg" },
            ],
        },
        gallery: [
            { src: "/design-gallery/bathroom/g-modern-1.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/design-gallery/bathroom/g-modern-2.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/design-gallery/bathroom/g-classic-1.jpg", filter: "Classic", alt: "Classic Bathroom 1" },
            { src: "/design-gallery/bathroom/g-classic-2.jpg", filter: "Classic", alt: "Classic Bathroom 2" },
            { src: "/design-gallery/bathroom/g-luxury-1.jpg", filter: "Luxury", alt: "Luxury Bathroom 1" },
            { src: "/design-gallery/bathroom/g-luxury-2.jpg", filter: "Luxury", alt: "Luxury Bathroom 2" },
            { src: "/design-gallery/bathroom/g-compact-1.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 1" },
            { src: "/design-gallery/bathroom/g-compact-2.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 2" },
        ],
        materials: [
            { label: "Italian Marble", image: "/design-gallery/materials/italian-marble.jpg" },
            { label: "Porcelain Tiles", image: "/design-gallery/materials/porcelain.jpg" },
            { label: "Brass Fixtures", image: "/design-gallery/materials/brass-metal.jpg" },
            { label: "Natural Stone", image: "/design-gallery/materials/stone.jpg" },
        ],
        cta: {
            heading: "Ready to Elevate Your Bathroom?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "+91 98765 43210",
        },
    },
    {
        slug: "space-saving-designs",
        title: "Space Saving",
        tagline: "Elegant and Luxurious Modular Kitchen Interiors",
        subtitle: "Elegant and Luxurious Modular Kitchen Interiors",
        heroImage: "/design-gallery/kitchen/hero.jpg",
        thumbnailImage: "/design-gallery/kitchen/thumb.jpg",
        stats: [
            { value: "120+", label: "Projects" },
            { value: "100%", label: "Custom Designs" },
            { value: "10-Year", label: "Warranty" },
        ],
        projectOverview: {
            points: [
                { label: "Space Type", value: "Master Bath · Ensuite · Guest Bath" },
                { label: "Design Style", value: "Modern · Spa · Luxury" },
                { label: "Starting Price", value: "₹1.2 Lakhs" },
            ],
            moodboardImages: [
                { filter: "All", image: "/design-gallery/bathroom/mood-all.jpg" },
                { filter: "Modern", image: "/design-gallery/bathroom/mood-modern.jpg" },
                { filter: "Classic", image: "/design-gallery/bathroom/mood-classic.jpg" },
                { filter: "Luxury", image: "/design-gallery/bathroom/mood-luxury.jpg" },
                { filter: "Compact Spaces", image: "/design-gallery/bathroom/mood-compact.jpg" },
            ],
        },
        gallery: [
            { src: "/design-gallery/bathroom/g-modern-1.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/design-gallery/bathroom/g-modern-2.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/design-gallery/bathroom/g-classic-1.jpg", filter: "Classic", alt: "Classic Bathroom 1" },
            { src: "/design-gallery/bathroom/g-classic-2.jpg", filter: "Classic", alt: "Classic Bathroom 2" },
            { src: "/design-gallery/bathroom/g-luxury-1.jpg", filter: "Luxury", alt: "Luxury Bathroom 1" },
            { src: "/design-gallery/bathroom/g-luxury-2.jpg", filter: "Luxury", alt: "Luxury Bathroom 2" },
            { src: "/design-gallery/bathroom/g-compact-1.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 1" },
            { src: "/design-gallery/bathroom/g-compact-2.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 2" },
        ],
        materials: [
            { label: "Italian Marble", image: "/design-gallery/materials/italian-marble.jpg" },
            { label: "Porcelain Tiles", image: "/design-gallery/materials/porcelain.jpg" },
            { label: "Brass Fixtures", image: "/design-gallery/materials/brass-metal.jpg" },
            { label: "Natural Stone", image: "/design-gallery/materials/stone.jpg" },
        ],
        cta: {
            heading: "Ready to Elevate Your Bathroom?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "+91 98765 43210",
        },
    },
    {
        slug: "dining-room-designs",
        title: "Dinning Room",
        tagline: "Elegant and Luxurious Modular Kitchen Interiors",
        subtitle: "Elegant and Luxurious Modular Kitchen Interiors",
        heroImage: "/design-gallery/kitchen/hero.jpg",
        thumbnailImage: "/design-gallery/kitchen/thumb.jpg",
        stats: [
            { value: "120+", label: "Projects" },
            { value: "100%", label: "Custom Designs" },
            { value: "10-Year", label: "Warranty" },
        ],
        projectOverview: {
            points: [
                { label: "Space Type", value: "Master Bath · Ensuite · Guest Bath" },
                { label: "Design Style", value: "Modern · Spa · Luxury" },
                { label: "Starting Price", value: "₹1.2 Lakhs" },
            ],
            moodboardImages: [
                { filter: "All", image: "/design-gallery/bathroom/mood-all.jpg" },
                { filter: "Modern", image: "/design-gallery/bathroom/mood-modern.jpg" },
                { filter: "Classic", image: "/design-gallery/bathroom/mood-classic.jpg" },
                { filter: "Luxury", image: "/design-gallery/bathroom/mood-luxury.jpg" },
                { filter: "Compact Spaces", image: "/design-gallery/bathroom/mood-compact.jpg" },
            ],
        },
        gallery: [
            { src: "/design-gallery/bathroom/g-modern-1.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/design-gallery/bathroom/g-modern-2.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/design-gallery/bathroom/g-classic-1.jpg", filter: "Classic", alt: "Classic Bathroom 1" },
            { src: "/design-gallery/bathroom/g-classic-2.jpg", filter: "Classic", alt: "Classic Bathroom 2" },
            { src: "/design-gallery/bathroom/g-luxury-1.jpg", filter: "Luxury", alt: "Luxury Bathroom 1" },
            { src: "/design-gallery/bathroom/g-luxury-2.jpg", filter: "Luxury", alt: "Luxury Bathroom 2" },
            { src: "/design-gallery/bathroom/g-compact-1.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 1" },
            { src: "/design-gallery/bathroom/g-compact-2.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 2" },
        ],
        materials: [
            { label: "Italian Marble", image: "/design-gallery/materials/italian-marble.jpg" },
            { label: "Porcelain Tiles", image: "/design-gallery/materials/porcelain.jpg" },
            { label: "Brass Fixtures", image: "/design-gallery/materials/brass-metal.jpg" },
            { label: "Natural Stone", image: "/design-gallery/materials/stone.jpg" },
        ],
        cta: {
            heading: "Ready to Elevate Your Bathroom?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "+91 98765 43210",
        },
    },
    {
        slug: "kids-bedroom",
        title: "Kids Bedroom designs",
        tagline: "Elegant and Luxurious Modular Kitchen Interiors",
        subtitle: "Elegant and Luxurious Modular Kitchen Interiors",
        heroImage: "/design-gallery/kitchen/hero.jpg",
        thumbnailImage: "/design-gallery/kitchen/thumb.jpg",
        stats: [
            { value: "120+", label: "Projects" },
            { value: "100%", label: "Custom Designs" },
            { value: "10-Year", label: "Warranty" },
        ],
        projectOverview: {
            points: [
                { label: "Space Type", value: "Master Bath · Ensuite · Guest Bath" },
                { label: "Design Style", value: "Modern · Spa · Luxury" },
                { label: "Starting Price", value: "₹1.2 Lakhs" },
            ],
            moodboardImages: [
                { filter: "All", image: "/design-gallery/bathroom/mood-all.jpg" },
                { filter: "Modern", image: "/design-gallery/bathroom/mood-modern.jpg" },
                { filter: "Classic", image: "/design-gallery/bathroom/mood-classic.jpg" },
                { filter: "Luxury", image: "/design-gallery/bathroom/mood-luxury.jpg" },
                { filter: "Compact Spaces", image: "/design-gallery/bathroom/mood-compact.jpg" },
            ],
        },
        gallery: [
            { src: "/design-gallery/bathroom/g-modern-1.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/design-gallery/bathroom/g-modern-2.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/design-gallery/bathroom/g-classic-1.jpg", filter: "Classic", alt: "Classic Bathroom 1" },
            { src: "/design-gallery/bathroom/g-classic-2.jpg", filter: "Classic", alt: "Classic Bathroom 2" },
            { src: "/design-gallery/bathroom/g-luxury-1.jpg", filter: "Luxury", alt: "Luxury Bathroom 1" },
            { src: "/design-gallery/bathroom/g-luxury-2.jpg", filter: "Luxury", alt: "Luxury Bathroom 2" },
            { src: "/design-gallery/bathroom/g-compact-1.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 1" },
            { src: "/design-gallery/bathroom/g-compact-2.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 2" },
        ],
        materials: [
            { label: "Italian Marble", image: "/design-gallery/materials/italian-marble.jpg" },
            { label: "Porcelain Tiles", image: "/design-gallery/materials/porcelain.jpg" },
            { label: "Brass Fixtures", image: "/design-gallery/materials/brass-metal.jpg" },
            { label: "Natural Stone", image: "/design-gallery/materials/stone.jpg" },
        ],
        cta: {
            heading: "Ready to Elevate Your Bathroom?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "+91 98765 43210",
        },
    },
    {
        slug: "1-bhk-interior-designs",
        title: "1 BHK Interior designs",
        tagline: "Elegant and Luxurious Modular Kitchen Interiors",
        subtitle: "Elegant and Luxurious Modular Kitchen Interiors",
        heroImage: "/design-gallery/kitchen/hero.jpg",
        thumbnailImage: "/design-gallery/kitchen/thumb.jpg",
        stats: [
            { value: "120+", label: "Projects" },
            { value: "100%", label: "Custom Designs" },
            { value: "10-Year", label: "Warranty" },
        ],
        projectOverview: {
            points: [
                { label: "Space Type", value: "Master Bath · Ensuite · Guest Bath" },
                { label: "Design Style", value: "Modern · Spa · Luxury" },
                { label: "Starting Price", value: "₹1.2 Lakhs" },
            ],
            moodboardImages: [
                { filter: "All", image: "/design-gallery/bathroom/mood-all.jpg" },
                { filter: "Modern", image: "/design-gallery/bathroom/mood-modern.jpg" },
                { filter: "Classic", image: "/design-gallery/bathroom/mood-classic.jpg" },
                { filter: "Luxury", image: "/design-gallery/bathroom/mood-luxury.jpg" },
                { filter: "Compact Spaces", image: "/design-gallery/bathroom/mood-compact.jpg" },
            ],
        },
        gallery: [
            { src: "/design-gallery/bathroom/g-modern-1.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/design-gallery/bathroom/g-modern-2.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/design-gallery/bathroom/g-classic-1.jpg", filter: "Classic", alt: "Classic Bathroom 1" },
            { src: "/design-gallery/bathroom/g-classic-2.jpg", filter: "Classic", alt: "Classic Bathroom 2" },
            { src: "/design-gallery/bathroom/g-luxury-1.jpg", filter: "Luxury", alt: "Luxury Bathroom 1" },
            { src: "/design-gallery/bathroom/g-luxury-2.jpg", filter: "Luxury", alt: "Luxury Bathroom 2" },
            { src: "/design-gallery/bathroom/g-compact-1.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 1" },
            { src: "/design-gallery/bathroom/g-compact-2.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 2" },
        ],
        materials: [
            { label: "Italian Marble", image: "/design-gallery/materials/italian-marble.jpg" },
            { label: "Porcelain Tiles", image: "/design-gallery/materials/porcelain.jpg" },
            { label: "Brass Fixtures", image: "/design-gallery/materials/brass-metal.jpg" },
            { label: "Natural Stone", image: "/design-gallery/materials/stone.jpg" },
        ],
        cta: {
            heading: "Ready to Elevate Your Bathroom?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "+91 98765 43210",
        },
    },
    {
        slug: "2-bhk-interior",
        title: "2 BHK Interior",
        tagline: "Elegant and Luxurious Modular Kitchen Interiors",
        subtitle: "Elegant and Luxurious Modular Kitchen Interiors",
        heroImage: "/design-gallery/kitchen/hero.jpg",
        thumbnailImage: "/design-gallery/kitchen/thumb.jpg",
        stats: [
            { value: "120+", label: "Projects" },
            { value: "100%", label: "Custom Designs" },
            { value: "10-Year", label: "Warranty" },
        ],
        projectOverview: {
            points: [
                { label: "Space Type", value: "Master Bath · Ensuite · Guest Bath" },
                { label: "Design Style", value: "Modern · Spa · Luxury" },
                { label: "Starting Price", value: "₹1.2 Lakhs" },
            ],
            moodboardImages: [
                { filter: "All", image: "/design-gallery/bathroom/mood-all.jpg" },
                { filter: "Modern", image: "/design-gallery/bathroom/mood-modern.jpg" },
                { filter: "Classic", image: "/design-gallery/bathroom/mood-classic.jpg" },
                { filter: "Luxury", image: "/design-gallery/bathroom/mood-luxury.jpg" },
                { filter: "Compact Spaces", image: "/design-gallery/bathroom/mood-compact.jpg" },
            ],
        },
        gallery: [
            { src: "/design-gallery/bathroom/g-modern-1.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/design-gallery/bathroom/g-modern-2.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/design-gallery/bathroom/g-classic-1.jpg", filter: "Classic", alt: "Classic Bathroom 1" },
            { src: "/design-gallery/bathroom/g-classic-2.jpg", filter: "Classic", alt: "Classic Bathroom 2" },
            { src: "/design-gallery/bathroom/g-luxury-1.jpg", filter: "Luxury", alt: "Luxury Bathroom 1" },
            { src: "/design-gallery/bathroom/g-luxury-2.jpg", filter: "Luxury", alt: "Luxury Bathroom 2" },
            { src: "/design-gallery/bathroom/g-compact-1.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 1" },
            { src: "/design-gallery/bathroom/g-compact-2.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 2" },
        ],
        materials: [
            { label: "Italian Marble", image: "/design-gallery/materials/italian-marble.jpg" },
            { label: "Porcelain Tiles", image: "/design-gallery/materials/porcelain.jpg" },
            { label: "Brass Fixtures", image: "/design-gallery/materials/brass-metal.jpg" },
            { label: "Natural Stone", image: "/design-gallery/materials/stone.jpg" },
        ],
        cta: {
            heading: "Ready to Elevate Your Bathroom?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "+91 98765 43210",
        },
    },
    {
        slug: "3-bhk-interior",
        title: "3 BHK Interior",
        tagline: "Elegant and Luxurious Modular Kitchen Interiors",
        subtitle: "Elegant and Luxurious Modular Kitchen Interiors",
        heroImage: "/design-gallery/kitchen/hero.jpg",
        thumbnailImage: "/design-gallery/kitchen/thumb.jpg",
        stats: [
            { value: "120+", label: "Projects" },
            { value: "100%", label: "Custom Designs" },
            { value: "10-Year", label: "Warranty" },
        ],
        projectOverview: {
            points: [
                { label: "Space Type", value: "Master Bath · Ensuite · Guest Bath" },
                { label: "Design Style", value: "Modern · Spa · Luxury" },
                { label: "Starting Price", value: "₹1.2 Lakhs" },
            ],
            moodboardImages: [
                { filter: "All", image: "/design-gallery/bathroom/mood-all.jpg" },
                { filter: "Modern", image: "/design-gallery/bathroom/mood-modern.jpg" },
                { filter: "Classic", image: "/design-gallery/bathroom/mood-classic.jpg" },
                { filter: "Luxury", image: "/design-gallery/bathroom/mood-luxury.jpg" },
                { filter: "Compact Spaces", image: "/design-gallery/bathroom/mood-compact.jpg" },
            ],
        },
        gallery: [
            { src: "/design-gallery/bathroom/g-modern-1.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/design-gallery/bathroom/g-modern-2.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/design-gallery/bathroom/g-classic-1.jpg", filter: "Classic", alt: "Classic Bathroom 1" },
            { src: "/design-gallery/bathroom/g-classic-2.jpg", filter: "Classic", alt: "Classic Bathroom 2" },
            { src: "/design-gallery/bathroom/g-luxury-1.jpg", filter: "Luxury", alt: "Luxury Bathroom 1" },
            { src: "/design-gallery/bathroom/g-luxury-2.jpg", filter: "Luxury", alt: "Luxury Bathroom 2" },
            { src: "/design-gallery/bathroom/g-compact-1.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 1" },
            { src: "/design-gallery/bathroom/g-compact-2.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 2" },
        ],
        materials: [
            { label: "Italian Marble", image: "/design-gallery/materials/italian-marble.jpg" },
            { label: "Porcelain Tiles", image: "/design-gallery/materials/porcelain.jpg" },
            { label: "Brass Fixtures", image: "/design-gallery/materials/brass-metal.jpg" },
            { label: "Natural Stone", image: "/design-gallery/materials/stone.jpg" },
        ],
        cta: {
            heading: "Ready to Elevate Your Bathroom?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "+91 98765 43210",
        },
    }
];

export const getDesignCategoryBySlug = (slug: string): DesignCategory | undefined =>
    designCategories.find((c) => c.slug === slug);

export const GALLERY_FILTERS: GalleryFilter[] = ["All", "Modern", "Classic", "Luxury", "Compact Spaces"];