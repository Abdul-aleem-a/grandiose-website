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
            { src: "/images/design-gallery/Industrial-2.jpg", filter: "Luxury", alt: "Luxury Living Room 1" },
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
            phone: "9113054788",
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
            phone: "9113054788",
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
                { filter: "All", image: "/images/design-gallery/modern_wardrobe1.jpg" },
                { filter: "Modern", image: "/images/design-gallery/modern_wardrobe1.jpg" },
                { filter: "Industrial", image: "/images/design-gallery/industrial_wardrobe1.png" },
                { filter: "Luxury", image: "/images/design-gallery/luxury_wardrobe1.jpg" },
                { filter: "Compact Spaces", image: "/images/design-gallery/compact_wardrobe1.jpg" },
            ],
        },
        gallery: [
            { src: "/images/design-gallery/modern_wardrobe1.jpg", filter: "Modern", alt: "Modern Wardrobe 1" },
            { src: "/images/design-gallery/modern_wardrobe2.jpg", filter: "Modern", alt: "Modern Wardrobe 2" },
            { src: "/images/design-gallery/industrial_wardrobe1.png", filter: "Industrial", alt: "Industrial Wardrobe 1" },
            { src: "/images/design-gallery/industrial_wardrobe2.jpg", filter: "Industrial", alt: "Industrial Wardrobe 2" },
            { src: "/images/design-gallery/luxury_wardrobe1.jpg", filter: "Luxury", alt: "Luxury Wardrobe 1" },
            { src: "/images/design-gallery/luxury_wardrobe2.jpg", filter: "Luxury", alt: "Luxury Wardrobe 2" },
            { src: "/images/design-gallery/compact_wardrobe1.jpg", filter: "Compact Spaces", alt: "Compact Wardrobe 1" },
            { src: "/images/design-gallery/compact_wardrobe2.jpg", filter: "Compact Spaces", alt: "Compact Wardrobe 2" },
        ],
        materials: [
            { label: "Premium Wood", image: "/images/design-gallery/modern_wardrobe1.jpg" },
            { label: "Glass Panels", image: "/images/design-gallery/industrial_wardrobe1.png" },
            { label: "Brass & Metal", image: "/images/design-gallery/luxury_wardrobe1.jpg" },
            { label: "Lacquer Finish", image: "/images/design-gallery/compact_wardrobe1.jpg" },
        ],
        cta: {
            heading: "Ready to Design Your Dream Wardrobe?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "9113054788",
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
                { filter: "All", image: "/images/design-gallery/modern_bathroom1.jpg" },
                { filter: "Modern", image: "/images/design-gallery/modern_bathroom2.jpg" },
                { filter: "Industrial", image: "/images/design-gallery/industrial_bathroom1.png" },
                { filter: "Luxury", image: "/images/design-gallery/luxury_bathroom1.jpg" },
                { filter: "Compact Spaces", image: "/images/design-gallery/compact_bathroom1.jpg" },
            ],
        },
        gallery: [
            { src: "/images/design-gallery/modern_bathroom1.jpg", filter: "Modern", alt: "Modern Wardrobe 1" },
            { src: "/images/design-gallery/modern_bathroom2.jpg", filter: "Modern", alt: "Modern Wardrobe 2" },
            { src: "/images/design-gallery/industrial_bathroom1.png", filter: "Industrial", alt: "Industrial Wardrobe 1" },
            { src: "/images/design-gallery/modern_bathroom1.jpg", filter: "Industrial", alt: "Industrial Wardrobe 2" },
            { src: "/images/design-gallery/luxury_bathroom1.jpg", filter: "Luxury", alt: "Luxury Wardrobe 1" },
            { src: "/images/design-gallery/luxury_bathroom2.jpg", filter: "Luxury", alt: "Luxury Wardrobe 2" },
            { src: "/images/design-gallery/compact_bathroom1.jpg", filter: "Compact Spaces", alt: "Compact Wardrobe 1" },
            { src: "/images/design-gallery/compact_bathroom2.jpg", filter: "Compact Spaces", alt: "Compact Wardrobe 2" },
        ],
        materials: [
            { label: "Italian Marble", image: "/images/design-gallery/modern_bathroom1.jpg" },
            { label: "Porcelain Tiles", image: "/images/design-gallery/industrial_bathroom1.png" },
            { label: "Brass Fixtures", image: "/images/design-gallery/luxury_bathroom1.jpg" },
            { label: "Natural Stone", image: "/images/design-gallery/compact_bathroom1.jpg" },
        ],
        cta: {
            heading: "Ready to Elevate Your Bathroom?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "9113054788",
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
                { filter: "All", image: "/images/design-gallery/modern_kitchen1.jpg" },
                { filter: "Modern", image: "/images/design-gallery/modern_kitchen2.jpg" },
                { filter: "Industrial", image: "/images/design-gallery/industrial_kitchen1.jpg" },
                { filter: "Luxury", image: "/images/design-gallery/luxury_kitchen1.jpg" },
                { filter: "Compact Spaces", image: "/images/design-gallery/compact_kitchen1.jpg" },
            ],
        },
        gallery: [
            { src: "/images/design-gallery/modern_kitchen1.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/images/design-gallery/modern_kitchen2.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/images/design-gallery/industrial_kitchen1.jpg", filter: "Industrial", alt: "Industrial Bathroom 1" },
            { src: "/images/design-gallery/industrial_kitchen2.jpg", filter: "Industrial", alt: "Industrial Bathroom 2" },
            { src: "/images/design-gallery/luxury_kitchen1.jpg", filter: "Luxury", alt: "Luxury Bathroom 1" },
            { src: "/images/design-gallery/industrial_kitchen1.jpg", filter: "Luxury", alt: "Luxury Bathroom 2" },
            { src: "/images/design-gallery/compact_kitchen1.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 1" },
            { src: "/images/design-gallery/compact_kitchen2.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 2" },
        ],
        materials: [
            { label: "Italian Marble", image: "/images/design-gallery/modern_kitchen1.jpg" },
            { label: "Porcelain Tiles", image: "/images/design-gallery/industrial_kitchen1.jpg" },
            { label: "Brass Fixtures", image: "/images/design-gallery/luxury_kitchen1.jpg" },
            { label: "Natural Stone", image: "/images/design-gallery/compact_kitchen1.jpg" },
        ],
        cta: {
            heading: "Ready to Elevate Modular Kitchen?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "9113054788",
        },
    },
    {
        slug: "customize-kitchen",
        title: "Customize Kitchen",
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
                { filter: "All", image: "/images/design-gallery/modern_kitchen1.jpg" },
                { filter: "Modern", image: "/images/design-gallery/modern_kitchen3.jpg" },
                { filter: "Industrial", image: "/images/design-gallery/modern_kitchen4.jpg" },
                { filter: "Luxury", image: "/images/design-gallery/modern_kitchen5.jpg" },
                { filter: "Compact Spaces", image: "/images/design-gallery/modern_kitchen6.jpg" },
            ],
        },
        gallery: [
            { src: "/images/design-gallery/modern_kitchen3.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/images/design-gallery/modern_kitchen4.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/images/design-gallery/modern_kitchen5.jpg", filter: "Industrial", alt: "Industrial Bathroom 1" },
            { src: "/images/design-gallery/modern_kitchen6.jpg", filter: "Industrial", alt: "Industrial Bathroom 2" },
            { src: "/images/design-gallery/modern_kitchen3.jpg", filter: "Luxury", alt: "Luxury Bathroom 1" },
            { src: "/images/design-gallery/modern_kitchen4.jpg", filter: "Luxury", alt: "Luxury Bathroom 2" },
            { src: "/images/design-gallery/modern_kitchen5.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 1" },
            { src: "/images/design-gallery/modern_kitchen6.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 2" },
        ],
        materials: [
            { label: "Italian Marble", image: "/images/design-gallery/modern_kitchen3.jpg" },
            { label: "Porcelain Tiles", image: "/images/design-gallery/modern_kitchen4.jpg" },
            { label: "Brass Fixtures", image: "/images/design-gallery/modern_kitchen5.jpg" },
            { label: "Natural Stone", image: "/images/design-gallery/modern_kitchen6.jpg" },
        ],
        cta: {
            heading: "Ready to Elevate Your Kitchen?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "9113054788",
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
                { filter: "All", image: "/images/design-gallery/modern_office1.jpg" },
                { filter: "Modern", image: "/images/design-gallery/modern_office2.jpg" },
                { filter: "Industrial", image: "/images/design-gallery/modern_office1.jpg" },
                { filter: "Luxury", image: "/images/design-gallery/luxury_office1.jpg" },
                { filter: "Compact Spaces", image: "/images/design-gallery/compact_office1.jpg" },
            ],
        },
        gallery: [
            { src: "/images/design-gallery/modern_office1.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/images/design-gallery/modern_office2.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/images/design-gallery/modern_office1.jpg", filter: "Industrial", alt: "Industrial Bathroom 1" },
            { src: "/images/design-gallery/industrial_office2.jpg", filter: "Industrial", alt: "Industrial Bathroom 2" },
            { src: "/images/design-gallery/luxury_office1.jpg", filter: "Luxury", alt: "Luxury Bathroom 1" },
            { src: "/images/design-gallery/luxury_office2.jpg", filter: "Luxury", alt: "Luxury Bathroom 2" },
            { src: "/images/design-gallery/compact_office1.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 1" },
            { src: "/images/design-gallery/modern_office1.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 2" },
        ],
        materials: [
            { label: "Italian Marble", image: "/images/design-gallery/modern_office1.jpg" },
            { label: "Porcelain Tiles", image: "/images/design-gallery/modern_office1.jpg" },
            { label: "Brass Fixtures", image: "/images/design-gallery/luxury_office1.jpg" },
            { label: "Natural Stone", image: "/images/design-gallery/compact_office1.jpg" },
        ],
        cta: {
            heading: "Ready to Elevate Your Home Office?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "9113054788",
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
                { filter: "All", image: "/images/design-gallery/modern_space.jpg" },
                { filter: "Modern", image: "/images/design-gallery/modern_space2.jpg" },
                { filter: "Industrial", image: "/images/design-gallery/modern_space.jpg" },
                { filter: "Luxury", image: "/images/design-gallery/luxury_space2.jpg" },
                { filter: "Compact Spaces", image: "/images/design-gallery/luxury_space2.jpg" },
            ],
        },
        gallery: [
            { src: "/images/design-gallery/industrial_space1.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/images/design-gallery/modern_space2.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/images/design-gallery/modern_office1.jpg", filter: "Industrial", alt: "Industrial Bathroom 1" },
            { src: "/images/design-gallery/industrial_space1.jpg", filter: "Industrial", alt: "Industrial Bathroom 2" },
            { src: "/images/design-gallery/modern_space2.jpg", filter: "Luxury", alt: "Luxury Bathroom 1" },
            { src: "/images/design-gallery/luxury_space2.jpg", filter: "Luxury", alt: "Luxury Bathroom 2" },
            { src: "/images/design-gallery/industrial_space1.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 1" },
            { src: "/images/design-gallery/luxury_space2.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 2" },
        ],
        materials: [
            { label: "Italian Marble", image: "/images/design-gallery/industrial_space1.jpg" },
            { label: "Porcelain Tiles", image: "/images/design-gallery/modern_office1.jpg" },
            { label: "Brass Fixtures", image: "/images/design-gallery/modern_space2.jpg" },
            { label: "Natural Stone", image: "/images/design-gallery/industrial_space1.jpg" },
        ],
        cta: {
            heading: "Ready to Elevate Your Space?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "9113054788",
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
                { filter: "All", image: "/images/design-gallery/modern_dining1.jpg" },
                { filter: "Modern", image: "/images/design-gallery/modern_dining2.jpg" },
                { filter: "Industrial", image: "/images/design-gallery/industrial_dining1.jpg" },
                { filter: "Luxury", image: "/images/design-gallery/luxury_dining1.jpg" },
                { filter: "Compact Spaces", image: "/images/design-gallery/luxury_dining2.jpg" },
            ],
        },
        gallery: [
            { src: "/images/design-gallery/industrial_dining2.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/images/design-gallery/modern_dining2.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/images/design-gallery/industrial_dining1.jpg", filter: "Industrial", alt: "Industrial Bathroom 1" },
            { src: "/images/design-gallery/industrial_dining2.jpg", filter: "Industrial", alt: "Industrial Bathroom 2" },
            { src: "/images/design-gallery/luxury_dining1.jpg", filter: "Luxury", alt: "Luxury Bathroom 1" },
            { src: "/images/design-gallery/luxury_dining2.jpg", filter: "Luxury", alt: "Luxury Bathroom 2" },
            { src: "/images/design-gallery/industrial_dining1.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 1" },
            { src: "/images/design-gallery/industrial_dining2.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 2" },
        ],
        materials: [
            { label: "Italian Marble", image: "/images/design-gallery/industrial_dining2.jpg" },
            { label: "Porcelain Tiles", image: "/images/design-gallery/industrial_dining1.jpg" },
            { label: "Brass Fixtures", image: "/images/design-gallery/luxury_dining1.jpg" },
            { label: "Natural Stone", image: "/images/design-gallery/industrial_dining1.jpg" },
        ],
        cta: {
            heading: "Ready to Elevate Your Dinning Room?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "9113054788",
        },
    },
    {
        slug: "kids-bedroom",
        title: "Kids Bedroom",
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
                { filter: "All", image: "/images/design-gallery/modern_kids1.jpg" },
                { filter: "Modern", image: "/images/design-gallery/modern_kids2.jpg" },
                { filter: "Industrial", image: "/images/design-gallery/modern_kids1.jpg" },
                { filter: "Luxury", image: "/images/design-gallery/luxury_kids1.jpg" },
                { filter: "Compact Spaces", image: "/images/design-gallery/luxury_kids2.jpg" },
            ],
        },
        gallery: [
            { src: "/images/design-gallery/modern_kids1.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/images/design-gallery/modern_kids2.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/images/design-gallery/industrial_kids1.jpg", filter: "Industrial", alt: "Industrial Bathroom 1" },
            { src: "/images/design-gallery/industrial_kids2.jpg", filter: "Industrial", alt: "Industrial Bathroom 2" },
            { src: "/images/design-gallery/luxury_kids1.jpg", filter: "Luxury", alt: "Luxury Bathroom 1" },
            { src: "/images/design-gallery/luxury_kids2.jpg", filter: "Luxury", alt: "Luxury Bathroom 2" },
            { src: "/images/design-gallery/industrial_kids1.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 1" },
            { src: "/images/design-gallery/industrial_kids2.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 2" },
        ],
        materials: [
            { label: "Italian Marble", image: "/images/design-gallery/modern_kids1.jpg" },
            { label: "Porcelain Tiles", image: "/images/design-gallery/industrial_kids1.jpg" },
            { label: "Brass Fixtures", image: "/images/design-gallery/luxury_kids1.jpg" },
            { label: "Natural Stone", image: "/images/design-gallery/modern_kids2.jpg" },
        ],
        cta: {
            heading: "Ready to Elevate Your Kids Bedroom?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "9113054788",
        },
    },
    {
        slug: "1-bhk-interior-designs",
        title: "1 BHK Interior",
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
                { filter: "All", image: "/images/design-gallery/modern_1bhk.jpg" },
                { filter: "Modern", image: "/images/design-gallery/modern_1bhk.jpg" },
                { filter: "Industrial", image: "/images/design-gallery/modern_1bhk2.jpg" },
                { filter: "Luxury", image: "/images/design-gallery/luxury_1bhk.jpg" },
                { filter: "Compact Spaces", image: "/images/design-gallery/luxury_1bhk2.jpg" },
            ],
        },
        gallery: [
            { src: "/images/design-gallery/modern_1bhk.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/images/design-gallery/modern_1bhk2.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/images/design-gallery/industrial_1bhk.jpg", filter: "Industrial", alt: "Industrial Bathroom 1" },
            { src: "/images/design-gallery/industrial_1bhk2.jpg", filter: "Industrial", alt: "Industrial Bathroom 2" },
            { src: "/images/design-gallery/luxury_1bhk.jpg", filter: "Luxury", alt: "Luxury Bathroom 1" },
            { src: "/images/design-gallery/luxury_1bhk2.jpg", filter: "Luxury", alt: "Luxury Bathroom 2" },
            { src: "/images/design-gallery/industrial_1bhk.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 1" },
            { src: "/images/design-gallery/industrial_1bhk2.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 2" },
        ],
        materials: [
            { label: "Italian Marble", image: "/images/design-gallery/modern_1bhk.jpg" },
            { label: "Porcelain Tiles", image: "/images/design-gallery/industrial_1bhk.jpg" },
            { label: "Brass Fixtures", image: "/images/design-gallery/luxury_1bhk.jpg" },
            { label: "Natural Stone", image: "/images/design-gallery/luxury_1bhk2.jpg" },
        ],
        cta: {
            heading: "Ready to Elevate Your 1 BHK Interior?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "9113054788",
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
               { filter: "All", image: "/images/design-gallery/luxury_2bhk2.jpg" },
                { filter: "Modern", image: "/images/design-gallery/luxury_2bhk.jpg" },
                { filter: "Industrial", image: "/images/design-gallery/modern_2bhk2.jpg" },
                { filter: "Luxury", image: "/images/design-gallery/luxury_2bhk.jpg" },
                { filter: "Compact Spaces", image: "/images/design-gallery/luxury_2bhk2.jpg" },
            ],
        },
        gallery: [
            { src: "/images/design-gallery/modern_1bhk.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/images/design-gallery/modern_1bhk2.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/images/design-gallery/industrial_1bhk.jpg", filter: "Industrial", alt: "Industrial Bathroom 1" },
            { src: "/images/design-gallery/industrial_1bhk2.jpg", filter: "Industrial", alt: "Industrial Bathroom 2" },
            { src: "/images/design-gallery/luxury_2bhk.jpg", filter: "Luxury", alt: "Luxury Bathroom 1" },
            { src: "/images/design-gallery/luxury_2bhk2.jpg", filter: "Luxury", alt: "Luxury Bathroom 2" },
            { src: "/images/design-gallery/industrial_1bhk.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 1" },
            { src: "/images/design-gallery/industrial_1bhk2.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 2" },
        ],
        materials: [
            { label: "Italian Marble", image: "/images/design-gallery/modern_1bhk.jpg" },
            { label: "Porcelain Tiles", image: "/images/design-gallery/industrial_1bhk2.jpg" },
            { label: "Brass Fixtures", image: "/images/design-gallery/luxury_2bhk.jpg" },
            { label: "Natural Stone", image: "/images/design-gallery/industrial_1bhk.jpg" },
        ],
        cta: {
            heading: "Ready to Elevate Your 2 BHK Interior?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "9113054788",
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
                { filter: "All", image: "/images/design-gallery/luxury_2bhk2.jpg" },
                { filter: "Modern", image: "/images/design-gallery/luxury_2bhk.jpg" },
                { filter: "Industrial", image: "/images/design-gallery/modern_2bhk2.jpg" },
                { filter: "Luxury", image: "/images/design-gallery/luxury_2bhk.jpg" },
                { filter: "Compact Spaces", image: "/images/design-gallery/luxury_2bhk2.jpg" },
            ],
        },
        gallery: [
            { src: "/images/design-gallery/modern_1bhk.jpg", filter: "Modern", alt: "Modern Bathroom 1" },
            { src: "/images/design-gallery/modern_1bhk2.jpg", filter: "Modern", alt: "Modern Bathroom 2" },
            { src: "/images/design-gallery/industrial_1bhk.jpg", filter: "Industrial", alt: "Industrial Bathroom 1" },
            { src: "/images/design-gallery/industrial_1bhk2.jpg", filter: "Industrial", alt: "Industrial Bathroom 2" },
            { src: "/images/design-gallery/luxury_2bhk.jpg", filter: "Luxury", alt: "Luxury Bathroom 1" },
            { src: "/images/design-gallery/luxury_2bhk2.jpg", filter: "Luxury", alt: "Luxury Bathroom 2" },
            { src: "/images/design-gallery/industrial_1bhk.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 1" },
            { src: "/images/design-gallery/industrial_1bhk2.jpg", filter: "Compact Spaces", alt: "Compact Bathroom 2" },
        ],
        materials: [
            { label: "Italian Marble", image: "/images/design-gallery/modern_1bhk.jpg" },
            { label: "Porcelain Tiles", image: "/images/design-gallery/industrial_1bhk2.jpg" },
            { label: "Brass Fixtures", image: "/images/design-gallery/luxury_2bhk.jpg" },
            { label: "Natural Stone", image: "/images/design-gallery/industrial_1bhk.jpg" },
        ],
        cta: {
            heading: "Ready to Elevate Your 3 BHK Interior?",
            subheading: "Book a Free Consultation with Our Design Experts",
            phone: "9113054788",
        },
    }
];

export const getDesignCategoryBySlug = (slug: string): DesignCategory | undefined =>
    designCategories.find((c) => c.slug === slug);

export const GALLERY_FILTERS: GalleryFilter[] = ["All", "Modern", "Industrial", "Luxury", "Compact Spaces"];