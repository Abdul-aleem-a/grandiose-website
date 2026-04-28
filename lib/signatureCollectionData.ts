export type Category = "ALL" | "Sofas" | "Dining Table" | "Dining Set" | "Dining Chair" | "Bed" | "Study Table" | "Wardrobes" | "Living Room" | "Accessories";

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
        slug: "L-shape-sofa",
        name: "L Shape Sofa",
        tagline: "Refined Comfort for Sophisticated Spaces",
        category: "Sofas",
        price: "₹ 85,000",
        rating: 4.5,
        reviewCount: 22,
        heroImage: "/products/sofa/hero.jpg",
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
        slug: "U-shape-sofa",
        name: "U shape sofa",
        tagline: "A Statement Centrepiece for the Living Room",
        category: "Sofas",
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
        slug: "chesterfield-sofa",
        name: "Chesterfield Sofa",
        tagline: "Timeless Elegance for Classic Interiors",
        category: "Sofas",
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
            "The Chesterfield Sofa combines traditional craftsmanship with modern comfort. Its distinctive rolled arms and tufted upholstery create a timeless appeal that complements any classic interior.",
        keyFeatures: [
            "Hand-stitched tufting with premium fabric",
            "Solid hardwood frame with brass nailhead trim",
            "High-density foam cushioning for lasting comfort",
            "Available in multiple bespoke colorways",
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
        slug: "lawson-sofa",
        name: "Lawson sofa",
        tagline: "Illuminate Your Space with Timeless Drama",
        category: "Sofas",
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
        slug: "cabriolet-sofa",
        name: "Cabriolet Sofa",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Sofas",
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
    {
        id: 6,
        slug: "mid-century-sofa",
        name: "Mid Century Modern Sofa",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Sofas",
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
    }, {
        id: 6,
        slug: "sofa-chaise",
        name: "Sofa Chaise",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Sofas",
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
    }, {
        id: 6,
        slug: "rectangular-dining-table",
        name: "Rectangular Dining Table",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Dining Table",
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
    }, {
        id: 6,
        slug: "square-dining-table",
        name: "Square Dining Table",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Dining Table",
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
    }, {
        id: 6,
        slug: "round-dining-table",
        name: "Round Dining Table",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Dining Table",
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
    }, {
        id: 6,
        slug: "oval-dining-table",
        name: "Oval Dining Table",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Dining Table",
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
    }, {
        id: 6,
        slug: "extendable-dining-table",
        name: "Extendable Dining Table",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Dining Table",
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
    }, {
        id: 6,
        slug: "drop-leaf-dining-table",
        name: "Drop Leaf Dining Table",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Dining Table",
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
    }, {
        id: 6,
        slug: "glass-top-dining-table",
        name: "Glass Top Dining Table",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Dining Table",
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
    }, {
        id: 6,
        slug: "traditional-dining-set",
        name: "Traditional Dining Set",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Dining Set",
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
    }, {
        id: 6,
        slug: "modern-dining-set",
        name: "Modern Dining Set",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Dining Set",
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
    }, {
        id: 6,
        slug: "rustic-dining-table",
        name: "Rustic Dining Table",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Dining Set",
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
    }, {
        id: 6,
        slug: "industrial-dining-table",
        name: "Industrial Dining Table",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Dining Set",
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
    }, {
        id: 6,
        slug: "contemporary-dining-table",
        name: "Contemporary Dining Table",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Dining Set",
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
    }, {
        id: 6,
        slug: "farm-house-dining-table",
        name: "Farm House Dining Table",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Dining Set",
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
    }, {
        id: 6,
        slug: "scandinavian-dining-table",
        name: "Scandinavian Dining Table",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Dining Set",
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
    }, {
        id: 6,
        slug: "wingback-dining-chair",
        name: "Wingback Dining Chair",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Dining Chair",
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
    }, {
        id: 6,
        slug: "slat-back-dining-chair",
        name: "Slat-Back Dining Chair",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Dining Chair",
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
    }, {
        id: 6,
        slug: "ladder-back-dining-chair",
        name: "Ladder Back Dining Chair",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Dining Chair",
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
    }, {
        id: 6,
        slug: "windsor-chair",
        name: "Windsor Chair",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Dining Chair",
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
    }, {
        id: 6,
        slug: "parsons-dining-chair",
        name: "Parsons Dining Chair",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Dining Chair",
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
    }, {
        id: 6,
        slug: "bentwood-dining-chair",
        name: "Bentwood Dining Chair",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Dining Chair",
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
    }, {
        id: 6,
        slug: "wishbone-dining-chair",
        name: "Wishbone Dining Chair",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Dining Chair",
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
    }, {
        id: 6,
        slug: "twin-bed",
        name: "Twin Bed",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Bed",
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
    }, {
        id: 6,
        slug: "double-bed",
        name: "Double Bed",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Bed",
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
    }, {
        id: 6,
        slug: "queen-bed",
        name: "Queen Bed",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Bed",
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
    }, {
        id: 6,
        slug: "king-bed",
        name: "King Bed",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Bed",
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
    }, {
        id: 6,
        slug: "california-king-bed",
        name: "California King Bed",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Bed",
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
    }, {
        id: 6,
        slug: "bunk-bed",
        name: "Bunk Bed",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Bed",
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
    }, {
        id: 6,
        slug: "murphy-bed",
        name: "Murphy Bed",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Bed",
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
    }, {
        id: 6,
        slug: "writing-desk",
        name: "Writing Desk",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Study Table",
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
    }, {
        id: 6,
        slug: "computer-desk",
        name: "Computer Desk",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Study Table",
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
    }, {
        id: 6,
        slug: "corner-desk",
        name: "Corner Desk",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Study Table",
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
    }, {
        id: 6,
        slug: "standing-desk",
        name: "Standing Desk",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Study Table",
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
    }, {
        id: 6,
        slug: "wall-mounted-desk",
        name: "Wall-Mounted Desk",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Study Table",
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
    }, {
        id: 6,
        slug: "l-shaped-desk",
        name: "L-Shaped Desk",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Study Table",
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
    }, {
        id: 6,
        slug: "foldable-desk",
        name: "Foldable Desk",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Study Table",
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
    }, {
        id: 6,
        slug: "hinged-door-wardrobe",
        name: "Hinged Door Wardrobe",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Wardrobes",
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
    }, {
        id: 6,
        slug: "sliding-door-wardrobe",
        name: "Sliding Door Wardrobe",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Wardrobes",
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
    }, {
        id: 6,
        slug: "l-shape-wardrobe",
        name: "L-Shaped Wardrobe",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Wardrobes",
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
    }, {
        id: 6,
        slug: "mirrored-wardrobe",
        name: "Mirrored Wardrobe",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Wardrobes",
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
    }, {
        id: 6,
        slug: "free-standing-wardrobe",
        name: "Free standing Wardrobe",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Wardrobes",
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
    }, {
        id: 6,
        slug: "single-door-wardrobe",
        name: "Single Door Wardrobe",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Wardrobes",
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
    }, {
        id: 6,
        slug: "Armories",
        name: " Armories",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Wardrobes",
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
    }, {
        id: 6,
        slug: "book-shelf",
        name: "Book Shelf",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Living Room",
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
    }, {
        id: 6,
        slug: "cabinet",
        name: "Cabinet",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Living Room",
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
    }, {
        id: 6,
        slug: "chest-of-drawers",
        name: "Chest of Drawers",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Living Room",
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
    }, {
        id: 6,
        slug: "coffee-table",
        name: "Coffee Table",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Living Room",
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
    }, {
        id: 6,
        slug: "sofa-set",
        name: "Sofa Set",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Living Room",
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
    }, {
        id: 6,
        slug: "side-table",
        name: "Side Table",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Living Room",
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
    }, {
        id: 6,
        slug: "tv-cabinet",
        name: "TV Cabinet",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Living Room",
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
    }, {
        id: 6,
        slug: "auto-pullout",
        name: "Auto Pullout Waste double Waste Bin",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Accessories",
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
    }, {
        id: 6,
        slug: "plastic-basket",
        name: "Plastic wicker Basket Soft Close",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Accessories",
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
    }, {
        id: 6,
        slug: "premium-wall-bed-system-",
        name: "Premium Wall Bed System",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Accessories",
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
    }, {
        id: 6,
        slug: "pullout-waste-bin",
        name: "Pullout Waste Bin 4 - 40 Ltr",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Accessories",
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
    }, {
        id: 6,
        slug: "kitchen-cutlery-tray-2",
        name: "Kitchen Cutlery Tray 2",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Accessories",
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
    }, {
        id: 6,
        slug: "detergent-caddie",
        name: "Detergent Caddie",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Accessories",
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
    }, {
        id: 6,
        slug: "pro-motion-drawer-system",
        name: "Pro Motion Drawer System 203-S3",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Accessories",
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
    }, {
        id: 6,
        slug: "pro-motion-drawer-system-120",
        name: "Pro Motion Drawer System 120-Slim 2",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Accessories",
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
    }, {
        id: 6,
        slug: "kitchen-drawer-rack",
        name: "Kitchen Drawer Rack - Thali",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Accessories",
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
    }, {
        id: 6,
        slug: "anti-skid-mat",
        name: "Anti-Skid Mat",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Accessories",
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
    }, {
        id: 6,
        slug: "lid-Holder",
        name: "Lid Holder For Pan Hanger",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Accessories",
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
    }, {
        id: 6,
        slug: "magic-corner-double-pullout-glass",
        name: "Magic Corner Double Pullout - Glass",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Accessories",
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
    }, {
        id: 6,
        slug: "wardrobe-rail-fittings",
        name: "Wardrobe Rail Fittings – Rectangular With Luminor 16",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Accessories",
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
    }, {
        id: 6,
        slug: "kitchen-drawer-rack-plate-ss304",
        name: "Kitchen Drawer Rack-Plate-SS304",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Accessories",
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
    }, {
        id: 6,
        slug: "cupboard-pullout-system-50",
        name: "Cupboard Pullout System - 50",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Accessories",
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
    }, {
        id: 6,
        slug: "mixer-lift-up-stand",
        name: "Mixer Lift Up Stand",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Accessories",
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
    }, {
        id: 6,
        slug: "swing-out-waste-bin-ss-14-ltr",
        name: "Swing Out Waste Bin - SS (14 Ltr)",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Accessories",
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
    }, {
        id: 6,
        slug: "pro-lift-bed-fittings",
        name: "Pro Lift Bed Fittings- Easy Fit- Extended Arm- 40 (w/o Gas Lifts)",
        tagline: "Elegant Comfort for Modern Bedrooms",
        category: "Accessories",
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
    "Sofas",
    "Dining Table",
    "Dining Set",
    "Dining Chair",
    "Bed", "Study Table",
    "Wardrobes",
    "Living Room",
    "Accessories"
];