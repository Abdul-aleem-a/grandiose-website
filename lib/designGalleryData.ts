export type GalleryFilter = "All" | "Modern" | "Industrial" | "Luxury" | "Compact Spaces";

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
        heroImage: "/images/design-gallery/design-gallery.jpg",
        thumbnailImage: "/images/design-gallery.jpg",
        stats: [
            { value: "250+", label: "Projects" },
            { value: "100%", label: "Custom Designs" },
            { value: "10-Year", label: "Warranty" },
        ],
        projectOverview: {
            points: [
                { label: "Space Type", value: "Apartments · Villas · Penthouse" },
                { label: "Design Style", value: "Modern · Industrial · Contemporary" },
                { label: "Starting Price", value: "₹2.5 Lakhs" },
            ],
            moodboardImages: [
                { filter: "All", image: "/images/design-gallery/g-modern-1.jpg" },
                { filter: "Modern", image: "/images/design-gallery/g-modern-1.jpg" },
                { filter: "Industrial", image: "/images/design-gallery/g-modern-1.jpg" },
                { filter: "Luxury", image: "/images/design-gallery/g-modern-1.jpg" },
                { filter: "Compact Spaces", image: "/images/design-gallery/g-modern-1.jpg" },
            ],
        },
        gallery: [
            { src: "/images/design-gallery/g-modern-1.jpg", filter: "Modern", alt: "Modern Living Room 1" },
            { src: "/images/design-gallery/g-modern-2.jpg", filter: "Modern", alt: "Modern Living Room 2" },
            { src: "/images/design-gallery/3bhk.jpg", filter: "Industrial", alt: "Industrial Living Room 2" },
            { src: "/images/design-gallery/industrial-2.jpg", filter: "Luxury", alt: "Luxury Living Room 1" },
            { src: "/images/design-gallery/g-modern-1.jpg", filter: "Luxury", alt: "Luxury Living Room 2" },
            { src: "/images/design-gallery/space-saving.jpg", filter: "Compact Spaces", alt: "Compact Living 1" },
            { src: "/images/design-gallery/2bhk.jpg", filter: "Compact Spaces", alt: "Compact Living 2" },
        ],
        materials: [
            { label: "Italian Marble", image: "/images/design-gallery/g-modern-1.jpg" },
            { label: "Premium Wood", image: "/images/design-gallery/g-modern-2.jpg" },
            { label: "Brass & Metal", image: "/images/design-gallery/industrial-2.jpg" },
            { label: "Brass & Metal", image: "/images/design-gallery/3bhk.jpg" },
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
        heroImage: "/images/design-gallery/bedroom.jpg",
        thumbnailImage: "/design-gallery/bedroom/thumb.jpg",
        stats: [
            { value: "180+", label: "Projects" },
            { value: "100%", label: "Custom Designs" },
            { value: "10-Year", label: "Warranty" },
        ],
        projectOverview: {
            points: [
                { label: "Space Type", value: "Master · Guest · Kids Room" },
                { label: "Design Style", value: "Modern · Industrial · Minimalist" },
                { label: "Starting Price", value: "₹1.8 Lakhs" },
            ],
            moodboardImages: [
                { filter: "All", image: "/images/design-gallery/modern_bedroom1.jpg" },
                { filter: "Modern", image: "/images/design-gallery/modern_bedroom1.jpg" },
                { filter: "Industrial", image: "/images/design-gallery/industrial_bedroom1.jpg" },
                { filter: "Luxury", image: "/images/design-gallery/luxury_bedroom1.jpg" },
                { filter: "Compact Spaces", image: "/images/design-gallery/compact_bedroom1.jpg" },
            ],
        },
        gallery: [
            { src: "/images/design-gallery/modern_bedroom1.jpg", filter: "Modern", alt: "Modern Bedroom 1" },
            { src: "/images/design-gallery/modern_bedroom2.jpg", filter: "Modern", alt: "Modern Bedroom 2" },
            { src: "/images/design-gallery/industrial_bedroom1.jpg", filter: "Industrial", alt: "Industrial Bedroom 1" },
            { src: "/images/design-gallery/industrial_bedroom2.jpg", filter: "Industrial", alt: "Industrial Bedroom 2" },
            { src: "/images/design-gallery/luxury_bedroom1.jpg", filter: "Luxury", alt: "Luxury Bedroom 1" },
            { src: "/images/design-gallery/luxury_bedroom2.jpg", filter: "Luxury", alt: "Luxury Bedroom 2" },
            { src: "/images/design-gallery/compact_bedroom1.jpg", filter: "Compact Spaces", alt: "Compact Bedroom 1" },
            { src: "/images/design-gallery/compact_bedroom2.jpg", filter: "Compact Spaces", alt: "Compact Bedroom 2" },
        ],
        materials: [
            { label: "Italian Marble", image: "/images/design-gallery/modern_bedroom1.jpg" },
            { label: "Premium Wood", image: "/images/design-gallery/industrial_bedroom1.jpg" },
            { label: "Brass & Metal", image: "/images/design-gallery/luxury_bedroom1.jpg" },
            { label: "Fabric Options", image: "/images/design-gallery/compact_bedroom1.jpg" },
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
        heroImage: "/images/design-gallery/bedroom-design.jpg",
        thumbnailImage: "/images/design-gallery/wardrobe-design.jpg",
        stats: [
            { value: "300+", label: "Projects" },
            { value: "100%", label: "Custom Designs" },
            { value: "10-Year", label: "Warranty" },
        ],
        projectOverview: {
            points: [
                { label: "Space Type", value: "Walk-in · Sliding · Hinged" },
                { label: "Design Style", value: "Modern · Industrial · Luxury" },
                { label: "Starting Price", value: "₹80,000" },
            ],
            moodboardImages: [
                { filter: "All", image: "/design-gallery/wardrobe/mood-all.jpg" },
                { filter: "Modern", image: "/design-gallery/wardrobe/mood-modern.jpg" },
                { filter: "Industrial", image: "/design-gallery/wardrobe/mood-Industrial.jpg" },
                { filter: "Luxury", image: "/design-gallery/wardrobe/mood-luxury.jpg" },
                { filter: "Compact Spaces", image: "/design-gallery/wardrobe/mood-compact.jpg" },
            ],
        },
        gallery: [
            { src: "/design-gallery/wardrobe/g-modern-1.jpg", filter: "Modern", alt: "Modern Wardrobe 1" },
            { src: "/design-gallery/wardrobe/g-modern-2.jpg", filter: "Modern", alt: "Modern Wardrobe 2" },
            { src: "/design-gallery/wardrobe/g-Industrial-1.jpg", filter: "Industrial", alt: "Industrial Wardrobe 1" },
            { src: "/design-gallery/wardrobe/g-Industrial-2.jpg", filter: "Industrial", alt: "Industrial Wardrobe 2" },
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
        heroImage: "/images/design-gallery/bathroom.jpg",
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
                { filter: "Industrial", image: "/design-gallery/bathroom/mood-Industrial.jpg" },
                { filter: "Luxury", image: "/design-gallery/bathroom/mood-luxury.jpg" },
                { filter: "Compact Spaces", image: "/design-gallery/bathroom/mood-compact.jpg" },
            ],
        },
        gallery: [
            { src: "/design-gallery/bathroom/g-modern-1.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/design-gallery/bathroom/g-modern-2.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/design-gallery/bathroom/g-Industrial-1.jpg", filter: "Industrial", alt: "Industrial Bathroom 1" },
            { src: "/design-gallery/bathroom/g-Industrial-2.jpg", filter: "Industrial", alt: "Industrial Bathroom 2" },
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
        heroImage: "/images/design-gallery/modular.jpg",
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
                { filter: "Industrial", image: "/design-gallery/bathroom/mood-Industrial.jpg" },
                { filter: "Luxury", image: "/design-gallery/bathroom/mood-luxury.jpg" },
                { filter: "Compact Spaces", image: "/design-gallery/bathroom/mood-compact.jpg" },
            ],
        },
        gallery: [
            { src: "/design-gallery/bathroom/g-modern-1.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/design-gallery/bathroom/g-modern-2.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/design-gallery/bathroom/g-Industrial-1.jpg", filter: "Industrial", alt: "Industrial Bathroom 1" },
            { src: "/design-gallery/bathroom/g-Industrial-2.jpg", filter: "Industrial", alt: "Industrial Bathroom 2" },
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
            heading: "Ready to Elevate Modular Kitchen?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "+91 98765 43210",
        },
    },
    {
        slug: "customize-your-kitchen",
        title: "Customize Your Kitchen",
        tagline: "Elegant and Luxurious Modular Kitchen Interiors",
        subtitle: "Elegant and Luxurious Modular Kitchen Interiors",
        heroImage: "/images/design-gallery/customize.jpg",
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
                { filter: "Industrial", image: "/design-gallery/bathroom/mood-Industrial.jpg" },
                { filter: "Luxury", image: "/design-gallery/bathroom/mood-luxury.jpg" },
                { filter: "Compact Spaces", image: "/design-gallery/bathroom/mood-compact.jpg" },
            ],
        },
        gallery: [
            { src: "/design-gallery/bathroom/g-modern-1.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/design-gallery/bathroom/g-modern-2.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/design-gallery/bathroom/g-Industrial-1.jpg", filter: "Industrial", alt: "Industrial Bathroom 1" },
            { src: "/design-gallery/bathroom/g-Industrial-2.jpg", filter: "Industrial", alt: "Industrial Bathroom 2" },
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
            heading: "Ready to Elevate Your Kitchen?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "+91 98765 43210",
        },
    },
    {
        slug: "home-office-designs",
        title: "Home Office",
        tagline: "Elegant and Luxurious Modular Kitchen Interiors",
        subtitle: "Elegant and Luxurious Modular Kitchen Interiors",
        heroImage: "/images/design-gallery/home-office.jpg",
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
                { filter: "Industrial", image: "/design-gallery/bathroom/mood-Industrial.jpg" },
                { filter: "Luxury", image: "/design-gallery/bathroom/mood-luxury.jpg" },
                { filter: "Compact Spaces", image: "/design-gallery/bathroom/mood-compact.jpg" },
            ],
        },
        gallery: [
            { src: "/design-gallery/bathroom/g-modern-1.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/design-gallery/bathroom/g-modern-2.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/design-gallery/bathroom/g-Industrial-1.jpg", filter: "Industrial", alt: "Industrial Bathroom 1" },
            { src: "/design-gallery/bathroom/g-Industrial-2.jpg", filter: "Industrial", alt: "Industrial Bathroom 2" },
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
            heading: "Ready to Elevate Your Home Office?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "+91 98765 43210",
        },
    },
    {
        slug: "space-saving-designs",
        title: "Space Saving",
        tagline: "Elegant and Luxurious Modular Kitchen Interiors",
        subtitle: "Elegant and Luxurious Modular Kitchen Interiors",
        heroImage: "/images/design-gallery/space-saving.jpg",
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
                { filter: "Industrial", image: "/design-gallery/bathroom/mood-Industrial.jpg" },
                { filter: "Luxury", image: "/design-gallery/bathroom/mood-luxury.jpg" },
                { filter: "Compact Spaces", image: "/design-gallery/bathroom/mood-compact.jpg" },
            ],
        },
        gallery: [
            { src: "/design-gallery/bathroom/g-modern-1.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/design-gallery/bathroom/g-modern-2.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/design-gallery/bathroom/g-Industrial-1.jpg", filter: "Industrial", alt: "Industrial Bathroom 1" },
            { src: "/design-gallery/bathroom/g-Industrial-2.jpg", filter: "Industrial", alt: "Industrial Bathroom 2" },
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
            heading: "Ready to Elevate Your Space?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "+91 98765 43210",
        },
    },
    {
        slug: "dining-room-designs",
        title: "Dinning Room",
        tagline: "Elegant and Luxurious Modular Kitchen Interiors",
        subtitle: "Elegant and Luxurious Modular Kitchen Interiors",
        heroImage: "/images/design-gallery/dining.jpg",
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
                { filter: "Industrial", image: "/design-gallery/bathroom/mood-Industrial.jpg" },
                { filter: "Luxury", image: "/design-gallery/bathroom/mood-luxury.jpg" },
                { filter: "Compact Spaces", image: "/design-gallery/bathroom/mood-compact.jpg" },
            ],
        },
        gallery: [
            { src: "/design-gallery/bathroom/g-modern-1.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/design-gallery/bathroom/g-modern-2.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/design-gallery/bathroom/g-Industrial-1.jpg", filter: "Industrial", alt: "Industrial Bathroom 1" },
            { src: "/design-gallery/bathroom/g-Industrial-2.jpg", filter: "Industrial", alt: "Industrial Bathroom 2" },
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
            heading: "Ready to Elevate Your Dinning Room?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "+91 98765 43210",
        },
    },
    {
        slug: "kids-bedroom",
        title: "Kids Bedroom designs",
        tagline: "Elegant and Luxurious Modular Kitchen Interiors",
        subtitle: "Elegant and Luxurious Modular Kitchen Interiors",
        heroImage: "/images/design-gallery/kids.jpg",
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
                { filter: "Industrial", image: "/design-gallery/bathroom/mood-Industrial.jpg" },
                { filter: "Luxury", image: "/design-gallery/bathroom/mood-luxury.jpg" },
                { filter: "Compact Spaces", image: "/design-gallery/bathroom/mood-compact.jpg" },
            ],
        },
        gallery: [
            { src: "/design-gallery/bathroom/g-modern-1.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/design-gallery/bathroom/g-modern-2.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/design-gallery/bathroom/g-Industrial-1.jpg", filter: "Industrial", alt: "Industrial Bathroom 1" },
            { src: "/design-gallery/bathroom/g-Industrial-2.jpg", filter: "Industrial", alt: "Industrial Bathroom 2" },
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
            heading: "Ready to Elevate Your Kids Bedroom?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "+91 98765 43210",
        },
    },
    {
        slug: "1-bhk-interior-designs",
        title: "1 BHK Interior designs",
        tagline: "Elegant and Luxurious Modular Kitchen Interiors",
        subtitle: "Elegant and Luxurious Modular Kitchen Interiors",
        heroImage: "/images/design-gallery/1bhk.jpg",
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
                { filter: "Industrial", image: "/design-gallery/bathroom/mood-Industrial.jpg" },
                { filter: "Luxury", image: "/design-gallery/bathroom/mood-luxury.jpg" },
                { filter: "Compact Spaces", image: "/design-gallery/bathroom/mood-compact.jpg" },
            ],
        },
        gallery: [
            { src: "/design-gallery/bathroom/g-modern-1.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/design-gallery/bathroom/g-modern-2.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/design-gallery/bathroom/g-Industrial-1.jpg", filter: "Industrial", alt: "Industrial Bathroom 1" },
            { src: "/design-gallery/bathroom/g-Industrial-2.jpg", filter: "Industrial", alt: "Industrial Bathroom 2" },
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
            heading: "Ready to Elevate Your 1 BHK Interior?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "+91 98765 43210",
        },
    },
    {
        slug: "2-bhk-interior",
        title: "2 BHK Interior",
        tagline: "Elegant and Luxurious Modular Kitchen Interiors",
        subtitle: "Elegant and Luxurious Modular Kitchen Interiors",
        heroImage: "/images/design-gallery/2bhk.jpg",
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
                { filter: "Industrial", image: "/design-gallery/bathroom/mood-Industrial.jpg" },
                { filter: "Luxury", image: "/design-gallery/bathroom/mood-luxury.jpg" },
                { filter: "Compact Spaces", image: "/design-gallery/bathroom/mood-compact.jpg" },
            ],
        },
        gallery: [
            { src: "/design-gallery/bathroom/g-modern-1.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/design-gallery/bathroom/g-modern-2.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/design-gallery/bathroom/g-Industrial-1.jpg", filter: "Industrial", alt: "Industrial Bathroom 1" },
            { src: "/design-gallery/bathroom/g-Industrial-2.jpg", filter: "Industrial", alt: "Industrial Bathroom 2" },
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
            heading: "Ready to Elevate Your 2 BHK Interior?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "+91 98765 43210",
        },
    },
    {
        slug: "3-bhk-interior",
        title: "3 BHK Interior",
        tagline: "Elegant and Luxurious Modular Kitchen Interiors",
        subtitle: "Elegant and Luxurious Modular Kitchen Interiors",
        heroImage: "/images/design-gallery/3bhk.jpg",
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
                { filter: "Industrial", image: "/design-gallery/bathroom/mood-Industrial.jpg" },
                { filter: "Luxury", image: "/design-gallery/bathroom/mood-luxury.jpg" },
                { filter: "Compact Spaces", image: "/design-gallery/bathroom/mood-compact.jpg" },
            ],
        },
        gallery: [
            { src: "/design-gallery/bathroom/g-modern-1.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/design-gallery/bathroom/g-modern-2.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/design-gallery/bathroom/g-Industrial-1.jpg", filter: "Industrial", alt: "Industrial Bathroom 1" },
            { src: "/design-gallery/bathroom/g-Industrial-2.jpg", filter: "Industrial", alt: "Industrial Bathroom 2" },
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
            heading: "Ready to Elevate Your 3 BHK Interior?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "+91 98765 43210",
        },
    }
];

export const getDesignCategoryBySlug = (slug: string): DesignCategory | undefined =>
    designCategories.find((c) => c.slug === slug);

export const GALLERY_FILTERS: GalleryFilter[] = ["All", "Modern", "Industrial", "Luxury", "Compact Spaces"];