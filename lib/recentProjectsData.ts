export interface ProjectRoom {
    label: string;
    image: string;
}

export interface ExecutionStep {
    label: string;
    image: string;
}

export interface ProjectStat {
    label: string;
    value: string;
}

export interface RecentProject {
    slug: string;
    title: string;
    subtitle: string;
    heroImage: string;
    stats: ProjectStat[];
    clientBrief: {
        summary: string;
        requirements: string[];
    };
    beforeImage: string;
    afterImage: string;
    executionSteps: ExecutionStep[];
    beforeAfterExecution: {
        before: string;
        after: string;
    };
    finalTransformation: {
        description: string;
        rooms: ProjectRoom[];
    };
    projectOverview: {
        clientBriefImage: string;
        executionImages: { img: string; label: string }[];
    };
}

export const recentProjects: RecentProject[] = [
    {
        slug: "matri-webcity-3bhk",
        title: "Matri Webcity",
        subtitle: "3BHK Apartment Transformation",
        heroImage: "/sofa.jpg",
        stats: [
            { label: "Location", value: "Matri Webcity, Bangalore" },
            { label: "Property Type", value: "3BHK Apartment" },
            { label: "Project Size", value: "1,650 sq.ft." },
            { label: "Total Cost", value: "₹ 28 Lakh" },
            { label: "Duration", value: "2.5 months" },
        ],
        clientBrief: {
            summary:
                "The family wanted a modern yet warm home that balanced luxury aesthetics with everyday functionality. Clean lines, premium finishes, and smart storage were key priorities.",
            requirements: [
                "Seamless open-plan living, dining, and kitchen layout.",
                "An elegant modular kitchen with premium quartz countertops.",
                "A serene master bedroom with full-wall panel work.",
                "Maximized storage without compromising on aesthetics.",
                "A dedicated study nook with rich wood accents.",
                "Warm ambient lighting throughout all rooms.",
                "Child-friendly yet sophisticated design approach.",
            ],
        },
        beforeImage: "/sofa.jpg",
        afterImage: "/sofa.jpg",
        executionSteps: [
            { label: "Structural modifications and false ceiling work", image: "/sofa.jpg" },
            { label: "Modular kitchen with quartz countertops and sleek cabinetry", image: "/sofa.jpg" },
            { label: "Bespoke wardrobes and full-wall paneling", image: "/sofa.jpg" },
        ],
        beforeAfterExecution: {
            before: "/sofa.jpg",
            after: "/sofa.jpg",
        },
        finalTransformation: {
            description:
                "The result is a refined, cohesive home where every corner reflects intentional design. Premium materials and bespoke furniture elevate the everyday living experience.",
            rooms: [
                { label: "Living Room", image: "/sofa.jpg" },
                { label: "Modular Kitchen", image: "/sofa.jpg" },
                { label: "Master Bedroom", image: "/sofa.jpg" },
            ],
        },
        projectOverview: {
            clientBriefImage: "/sofa.jpg",
            executionImages: [
                { img: "/sofa.jpg", label: "Structural modifications and false ceiling work" },
                { img: "/sofa.jpg", label: "Modular kitchen installation with quartz countertops" },
                { img: "/sofa.jpg", label: "Bespoke wardrobes and paneling" },
                { img: "/sofa.jpg", label: "Custom furniture fit-out and decor styling" },
            ],
        },
    },
    {
        slug: "oceanus-greendale",
        title: "Oceanus Greendale",
        subtitle: "2BHK Apartment",
        heroImage: "/sofa.jpg",
        stats: [
            { label: "Location", value: "Oceanus Greendale, Bangalore" },
            { label: "Property Type", value: "3BHK Apartment" },
            { label: "Project Size", value: "1,650 sq.ft." },
            { label: "Total Cost", value: "₹ 28 Lakh" },
            { label: "Duration", value: "2.5 months" },
        ],
        clientBrief: {
            summary:
                "The family wanted a modern yet warm home that balanced luxury aesthetics with everyday functionality. Clean lines, premium finishes, and smart storage were key priorities.",
            requirements: [
                "Seamless open-plan living, dining, and kitchen layout.",
                "An elegant modular kitchen with premium quartz countertops.",
                "A serene master bedroom with full-wall panel work.",
                "Maximized storage without compromising on aesthetics.",
                "A dedicated study nook with rich wood accents.",
                "Warm ambient lighting throughout all rooms.",
                "Child-friendly yet sophisticated design approach.",
            ],
        },
        beforeImage: "/sofa.jpg",
        afterImage: "/sofa.jpg",
        executionSteps: [
            { label: "Structural modifications and false ceiling work", image: "/sofa.jpg" },
            { label: "Modular kitchen with quartz countertops and sleek cabinetry", image: "/sofa.jpg" },
            { label: "Bespoke wardrobes and full-wall paneling", image: "/sofa.jpg" },
        ],
        beforeAfterExecution: {
            before: "/sofa.jpg",
            after: "/sofa.jpg",
        },
        finalTransformation: {
            description:
                "The result is a refined, cohesive home where every corner reflects intentional design. Premium materials and bespoke furniture elevate the everyday living experience.",
            rooms: [
                { label: "Living Room", image: "/sofa.jpg" },
                { label: "Modular Kitchen", image: "/sofa.jpg" },
                { label: "Master Bedroom", image: "/sofa.jpg" },
            ],
        },
        projectOverview: {
            clientBriefImage: "/sofa.jpg",
            executionImages: [
                { img: "/sofa.jpg", label: "Structural modifications and false ceiling work" },
                { img: "/sofa.jpg", label: "Modular kitchen installation with quartz countertops" },
                { img: "/sofa.jpg", label: "Bespoke wardrobes and paneling" },
                { img: "/sofa.jpg", label: "Custom furniture fit-out and decor styling" },
            ],
        },
    },
    {
        slug: "l-and-t-raintree-boulevard",
        title: "L & T Raintree Boulevard",
        subtitle: "Luxury Villa Interior Design",
        heroImage: "/sofa.jpg",
        stats: [
            { label: "Location", value: "Raintree Boulevard, Bangalore" },
            { label: "Property Type", value: "Luxury Villa" },
            { label: "Project Size", value: "3,200 sq.ft." },
            { label: "Total Cost", value: "₹ 65 Lakh" },
            { label: "Duration", value: "4 months" },
        ],
        clientBrief: {
            summary:
                "The clients envisioned a grand, timeless home that embodied old-world elegance fused with contemporary comfort. Every material was hand-selected to reflect their refined taste.",
            requirements: [
                "Grand entrance foyer with statement chandelier and marble flooring.",
                "Open-concept living and dining with double-height ceilings.",
                "A chef's modular kitchen with island counter and premium appliances.",
                "Master suite with walk-in wardrobe and luxury ensuite bathroom.",
                "Home theatre room with acoustic paneling and tiered seating.",
                "Landscaped courtyard visible from the living area.",
                "Smart home integration across lighting, curtains, and security.",
            ],
        },
        beforeImage: "/sofa.jpg",
        afterImage: "/sofa.jpg",
        executionSteps: [
            { label: "Double-height false ceiling with cove lighting and cornice work", image: "/sofa.jpg" },
            { label: "Italian marble flooring and premium wall cladding", image: "/sofa.jpg" },
            { label: "Custom solid wood wardrobes and joinery", image: "/sofa.jpg" },
        ],
        beforeAfterExecution: {
            before: "/sofa.jpg",
            after: "/sofa.jpg",
        },
        finalTransformation: {
            description:
                "A masterpiece of luxury interior design — every room in this villa tells a story of craftsmanship, elegance, and thoughtful design. The Grandiose's signature touch is visible in every corner.",
            rooms: [
                { label: "Grand Living Room", image: "/sofa.jpg" },
                { label: "Chef's Kitchen", image: "/sofa.jpg" },
                { label: "Master Suite", image: "/sofa.jpg" },
            ],
        },
        projectOverview: {
            clientBriefImage: "/sofa.jpg",
            executionImages: [
                { img: "/sofa.jpg", label: "Double-height false ceiling and cove lighting" },
                { img: "/sofa.jpg", label: "Italian marble flooring and wall cladding" },
                { img: "/sofa.jpg", label: "Custom solid wood wardrobes and joinery" },
                { img: "/sofa.jpg", label: "Bespoke furniture and decor styling" },
            ],
        },
    },
];

export const getProjectBySlug = (slug: string): RecentProject | undefined =>
    recentProjects.find((p) => p.slug === slug);