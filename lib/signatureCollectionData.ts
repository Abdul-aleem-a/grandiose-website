export type Category = "ALL" | "ACCENT CHAIRS" | "COFFEE TABLES" | "CONSOLE UNITS" | "DESIGNER LIGHTING" | "BEDS";

export interface CustomizationOption {
    label: string;
    color: string; // hex or tailwind-compatible
    image: string;
}

export interface ProductDimension {
    label: string;
    value: string;
}

export interface SignatureProduct {
    id: number;
    slug: string;
    name: string;
    tagline: string;
    category: Exclude<Category, "ALL">;
    price: string;
    rating: number;
    reviewCount: number;
    heroImage: string;
    galleryImages: string[];
    descriptionImage: string;
    description: string;
    keyFeatures: string[];
    dimensions: ProductDimension[];
    customizationOptions: CustomizationOption[];
}

export const signatureProducts: SignatureProduct[] = [
    {
        id: 1,
        slug: "elegant-velvet-armchair",
        name: "Elegant Velvet Armchair",
        tagline: "Refined Comfort for Sophisticated Spaces",
        category: "ACCENT CHAIRS",
        price: "₹ 85,000",
        rating: 4.5,
        reviewCount: 22,
        heroImage: "/products/armchair/hero.jpg",
        galleryImages: [
            "/sofa.jpg",
            "/sofa.jpg",
            "/sofa.jpg",
            "/sofa.jpg",
        ],
        descriptionImage: "/sofa.jpg",
        description:
            "The Elegant Velvet Armchair is a statement piece that blends classical form with contemporary luxury. Upholstered in premium velvet with brass-tipped legs, it brings a refined grandeur to any living space. Part of The Grandiose Signature Collection, each piece is handcrafted for enduring comfort and aesthetic distinction.",
        keyFeatures: [
            "Premium deep-pile velvet upholstery",
            "Solid hardwood frame with brass-tipped legs",
            "High-density foam cushioning for lasting comfort",
            "Available in multiple bespoke colorways",
        ],
        dimensions: [
            { label: "Seat Height", value: '18"' },
            { label: "Width", value: '32"' },
            { label: "Depth", value: '30"' },
        ],
        customizationOptions: [
            { label: "Emerald Green", color: "#1B4D3E", image: "/sofa.jpg" },
            { label: "Royal Navy", color: "#1a2744", image: "/sofa.jpg" },
            { label: "Champagne Beige", color: "#c8a97e", image: "/sofa.jpg" },
        ],
    },
    {
        id: 2,
        slug: "marble-brass-coffee-table",
        name: "Marble & Brass Coffee Table",
        tagline: "A Statement Centrepiece for the Living Room",
        category: "COFFEE TABLES",
        price: "₹ 1,20,000",
        rating: 5,
        reviewCount: 18,
        heroImage: "/sofa.jpg",
        galleryImages: [
            "/sofa.jpg",
            "/sofa.jpg",
            "/sofa.jpg",
            "/sofa.jpg",
        ],
        descriptionImage: "/sofa.jpg",
        description:
            "Crafted with a book-matched Calacatta marble top resting on a hand-polished solid brass drum base, this coffee table is a conversation piece in itself. Its weight and presence command attention while its clean proportions allow it to complement any interior palette.",
        keyFeatures: [
            "Book-matched Calacatta marble top",
            "Hand-polished solid brass cylindrical base",
            "Scratch-resistant surface treatment",
            "Expertly weighted for stability",
        ],
        dimensions: [
            { label: "Diameter", value: '48"' },
            { label: "Height", value: '16"' },
        ],
        customizationOptions: [
            { label: "White Marble", color: "#e8e0d0", image: "/sofa.jpg" },
            { label: "Black Marble", color: "#2a2a2a", image: "/sofa.jpg" },
        ],
    },
    {
        id: 3,
        slug: "luxury-console-unit",
        name: "Luxury Console Unit",
        tagline: "Functional Elegance for Entryways & Living Spaces",
        category: "CONSOLE UNITS",
        price: "₹ 1,45,000",
        rating: 4,
        reviewCount: 11,
        heroImage: "/sofa.jpg",
        galleryImages: [
            "/sofa.jpg",
            "/sofa.jpg",
            "/sofa.jpg",
            "/sofa.jpg",
        ],
        descriptionImage: "/sofa.jpg",
        description:
            "The Luxury Console Unit combines rich dark wood paneling with a brushed brass frame and a light travertine top. Ideal for entryways or as a feature wall unit, it offers refined storage with an understated opulence that defines The Grandiose aesthetic.",
        keyFeatures: [
            "Smoked oak veneer paneling with brass inlay",
            "Travertine stone top with honed finish",
            "Soft-close concealed compartments",
            "Custom brass hardware throughout",
        ],
        dimensions: [
            { label: "Height", value: '34"' },
            { label: "Width", value: '72"' },
            { label: "Depth", value: '16"' },
        ],
        customizationOptions: [
            { label: "Dark Walnut", color: "#3b2314", image: "/sofa.jpg", },
            { label: "Light Oak", color: "#c49a6c", image: "/sofa.jpg" },
            { label: "Ebony", color: "#1a1a1a", image: "/sofa.jpg" },
        ],
    },
    {
        id: 4,
        slug: "crystal-chandelier",
        name: "Crystal Chandelier",
        tagline: "Illuminate Your Space with Timeless Drama",
        category: "DESIGNER LIGHTING",
        price: "₹ 2,50,000",
        rating: 5,
        reviewCount: 30,
        heroImage: "/sofa.jpg",
        galleryImages: [
            "/sofa.jpg", "/sofa.jpg", "/sofa.jpg", "/sofa.jpg",
        ],
        descriptionImage: "/sofa.jpg",
        description:
            "A cascading tiered crystal chandelier that transforms any ceiling into a luminous spectacle. Hand-assembled with precision-cut crystal prisms, each piece refracts light into a warm golden cascade. Engineered for grand living rooms, double-height spaces, and luxury hotel lobbies.",
        keyFeatures: [
            "Precision-cut K9 crystal prisms",
            "Tiered brass-frame architecture",
            "Compatible with dimmable LED systems",
            "Custom sizing available on request",
        ],
        dimensions: [
            { label: "Diameter", value: '36"' },
            { label: "Height", value: '48"' },
            { label: "Weight", value: "18 kg" },
        ],
        customizationOptions: [
            { label: "Gold Frame", color: "#D4AF37", image: "/sofa.jpg", },
            { label: "Chrome Frame", color: "#c0c0c0", image: "/sofa.jpg" },
            { label: "Black Frame", color: "#1a1a1a", image: "/sofa.jpg" },
        ],
    },
    {
        id: 5,
        slug: "verona-bed",
        name: "Verona Bed",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "BEDS",
        price: "₹ 1,75,000",
        rating: 4.5,
        reviewCount: 15,
        heroImage: "/sofa.jpg",
        galleryImages: [
            "/sofa.jpg",
            "/sofa.jpg",
            "/sofa.jpg",
            "/sofa.jpg"
        ],
        descriptionImage: "/sofa.jpg",
        description:
            "The Verona Bed offers refined elegance with its plush upholstered headboard, designed to bring sophisticated comfort to your bedroom. Part of our Signature Collection, this bed is a perfect seed of contemporary design and timeless luxury.",
        keyFeatures: [
            "Upholstered headboard with textured fabric",
            "Luxurious blend of velvet and satin accents",
            "Elegant two-tone bedding set (sold separately)",
            "Expertly crafted for enduring comfort",
        ],
        dimensions: [
            { label: "Headboard", value: '60" H' },
            { label: "Width", value: '78"' },
            { label: "Length", value: '84"' },
        ],
        customizationOptions: [
            { label: "White", color: "#f0ece4", image: "/sofa.jpg" },
            { label: "Beige", color: "#c8a97e", image: "/sofa.jpg" },
        ],
    },
];

export const getProductBySlug = (slug: string): SignatureProduct | undefined =>
    signatureProducts.find((p) => p.slug === slug);

export const CATEGORIES: Category[] = [
    "ALL",
    "ACCENT CHAIRS",
    "COFFEE TABLES",
    "CONSOLE UNITS",
    "DESIGNER LIGHTING",
    "BEDS",
];