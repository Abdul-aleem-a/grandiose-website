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
        heroImage: "/images/recent-projects/metri/metri3bhk.webP",
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
        beforeImage: "/images/recent-projects/metri/metri3bhk3.webP",
        afterImage: "/images/recent-projects/metri/metri3bhk3.webP",
        executionSteps: [
            { label: "Structural modifications and false ceiling work", image: "/sofa.jpg" },
            { label: "Modular kitchen with quartz countertops and sleek cabinetry", image: "/sofa.jpg" },
            { label: "Bespoke wardrobes and full-wall paneling", image: "/sofa.jpg" },
        ],
        beforeAfterExecution: {
            before: "/images/recent-projects/metri/metri3bhk3.webP",
            after: "/images/recent-projects/metri/metri3bhk3.webP",
        },
        finalTransformation: {
            description:
                "The result is a refined, cohesive home where every corner reflects intentional design. Premium materials and bespoke furniture elevate the everyday living experience.",
            rooms: [
                { label: "Living Room", image: "/images/recent-projects/metri/metri3bhk5.webP" },
                { label: "Modular Kitchen", image: "/images/recent-projects/metri/metri3bhk7.webP" },
                { label: "Master Bedroom", image: "/images/recent-projects/metri/metri3bhk2.jpg" },
            ],
        },
        projectOverview: {
            clientBriefImage: "/images/recent-projects/metri/metri3bhk3.webP",
            executionImages: [
                { img: "/images/recent-projects/metri/metri3bhk4.webP", label: "Structural modifications and false ceiling work" },
                { img: "/images/recent-projects/metri/metri3bhk5.webP", label: "Modular kitchen installation with quartz countertops" },
                { img: "/images/recent-projects/metri/metri3bhk6.webP", label: "Bespoke wardrobes and paneling" },
                { img: "/images/recent-projects/metri/metri3bhk7.webP", label: "Custom furniture fit-out and decor styling" },
            ],
        },
    },
    {
        slug: "matri-webcity-2bhk",
        title: "Matri Webcity",
        subtitle: "2BHK Apartment Transformation",
        heroImage: "/images/recent-projects/metri2/metri2bhk.webP",
        stats: [
            { label: "Location", value: "Matri Webcity, Bangalore" },
            { label: "Property Type", value: "2BHK Apartment" },
            { label: "Project Size", value: "1,200 sq.ft." },
            { label: "Total Cost", value: "₹ 20 Lakh" },
            { label: "Duration", value: "2 months" },
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
        beforeImage: "/images/recent-projects/metri2/metri2bhk6.webP",
        afterImage: "/images/recent-projects/metri2/metri2bhk6.webP",
        executionSteps: [
            { label: "Structural modifications and false ceiling work", image: "/images/recent-projects/metri2/metri2bhk.webP" },
            { label: "Modular kitchen with quartz countertops and sleek cabinetry", image: "/sofa.jpg" },
            { label: "Bespoke wardrobes and full-wall paneling", image: "/sofa.jpg" },
        ],
        beforeAfterExecution: {
            before: "/images/recent-projects/metri2/metri2bhk3.webP",
            after: "/images/recent-projects/metri2/metri2bhk3.webP",
        },
        finalTransformation: {
            description:
                "The result is a refined, cohesive home where every corner reflects intentional design. Premium materials and bespoke furniture elevate the everyday living experience.",
            rooms: [
                { label: "Living Room", image: "/images/recent-projects/metri2/metri2bhk3.webP" },
                { label: "Modular Kitchen", image: "/images/recent-projects/metri2/metri2bhk2.webP" },
                { label: "Master Bedroom", image: "/images/recent-projects/metri2/metri2bhk7.webP" },
            ],
        },
        projectOverview: {
            clientBriefImage: "/images/recent-projects/metri2/metri2bhk3.webP",
            executionImages: [
                { img: "/images/recent-projects/metri2/metri2bhk3.webP", label: "Structural modifications and false ceiling work" },
                { img: "/images/recent-projects/metri2/metri2bhk4.webP", label: "Modular kitchen installation with quartz countertops" },
                { img: "/images/recent-projects/metri2/metri2bhk5.webP", label: "Bespoke wardrobes and paneling" },
                { img: "/images/recent-projects/metri2/metri2bhk6.webP", label: "Custom furniture fit-out and decor styling" },
            ],
        },
    },
    {
        slug: "prestige-falcon-city",
        title: "Prestige Falcon City",
        subtitle: "2BHK Apartment",
        heroImage: "/images/recent-projects/prestige/prestige.webP",
        stats: [
            { label: "Location", value: "Prestige Falcon City, Bangalore" },
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
        beforeImage: "/images/recent-projects/prestige/prestige6.webP",
        afterImage: "/images/recent-projects/prestige/prestige6.webP",
        executionSteps: [
            { label: "Structural modifications and false ceiling work", image: "/sofa.jpg" },
            { label: "Modular kitchen with quartz countertops and sleek cabinetry", image: "/sofa.jpg" },
            { label: "Bespoke wardrobes and full-wall paneling", image: "/sofa.jpg" },
        ],
        beforeAfterExecution: {
            before: "/images/recent-projects/prestige/prestige2.webP",
            after: "/images/recent-projects/prestige/prestige2.webP",
        },
        finalTransformation: {
            description:
                "The result is a refined, cohesive home where every corner reflects intentional design. Premium materials and bespoke furniture elevate the everyday living experience.",
            rooms: [
                { label: "Living Room", image: "/images/recent-projects/prestige/prestige2.webP" },
                { label: "Modular Kitchen", image: "/images/recent-projects/prestige/prestige8.webP" },
                { label: "Master Bedroom", image: "/images/recent-projects/prestige/prestige5.webP" },
            ],
        },
        projectOverview: {
            clientBriefImage: "/images/recent-projects/prestige/prestige4.webP",
            executionImages: [
                { img: "/images/recent-projects/prestige/prestige2.webP", label: "Structural modifications and false ceiling work" },
                { img: "/images/recent-projects/prestige/prestige3.webP", label: "Modular kitchen installation with quartz countertops" },
                { img: "/images/recent-projects/prestige/prestige6.webP", label: "Bespoke wardrobes and paneling" },
                { img: "/images/recent-projects/prestige/prestige7.webP", label: "Custom furniture fit-out and decor styling" },
            ],
        },
    },
    {
        slug: "birla-apple-spire",
        title: "Birla Apple Spire",
        subtitle: "2BHK Apartment",
        heroImage: "/images/recent-projects/birla/Birla.webP",
        stats: [
            { label: "Location", value: "Birla Apple Spire, Bangalore" },
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
        beforeImage: "/images/recent-projects/birla/Birla6.webP",
        afterImage: "/images/recent-projects/birla/Birla6.webP",
        executionSteps: [
            { label: "Structural modifications and false ceiling work", image: "/sofa.jpg" },
            { label: "Modular kitchen with quartz countertops and sleek cabinetry", image: "/sofa.jpg" },
            { label: "Bespoke wardrobes and full-wall paneling", image: "/sofa.jpg" },
        ],
        beforeAfterExecution: {
            before: "/images/recent-projects/birla/Birla2.webP",
            after: "/images/recent-projects/birla/Birla2.webP",
        },
        finalTransformation: {
            description:
                "The result is a refined, cohesive home where every corner reflects intentional design. Premium materials and bespoke furniture elevate the everyday living experience.",
            rooms: [
                { label: "Living Room", image: "/images/recent-projects/birla/Birla3.webP" },
                { label: "Modular Kitchen", image: "/images/recent-projects/birla/Birla8.webP" },
                { label: "Master Bedroom", image: "/images/recent-projects/birla/Birla9.webP" },
            ],
        },
        projectOverview: {
            clientBriefImage: "/images/recent-projects/birla/Birla2.webP",
            executionImages: [
                { img: "/images/recent-projects/birla/Birla4.webP", label: "Structural modifications and false ceiling work" },
                { img: "/images/recent-projects/birla/Birla5.webP", label: "Modular kitchen installation with quartz countertops" },
                { img: "/images/recent-projects/birla/Birla6.webP", label: "Bespoke wardrobes and paneling" },
                { img: "/images/recent-projects/birla/Birla7.webP", label: "Custom furniture fit-out and decor styling" },
            ],
        },
    },
    {
        slug: "vishnu-krishna-enclave",
        title: "Vishnu Krishna Enclave",
        subtitle: "2BHK Apartment",
        heroImage: "/images/recent-projects/vishnu/vishnu.webP",
        stats: [
            { label: "Location", value: "Vishnu Krishna Enclave, Bangalore" },
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
        beforeImage: "/images/recent-projects/vishnu/vishnu2.webP",
        afterImage: "/images/recent-projects/vishnu/vishnu2.webP",
        executionSteps: [
            { label: "Structural modifications and false ceiling work", image: "/sofa.jpg" },
            { label: "Modular kitchen with quartz countertops and sleek cabinetry", image: "/sofa.jpg" },
            { label: "Bespoke wardrobes and full-wall paneling", image: "/sofa.jpg" },
        ],
        beforeAfterExecution: {
            before: "/images/recent-projects/vishnu/vishnu3.webP",
            after: "/images/recent-projects/vishnu/vishnu3.webP",
        },
        finalTransformation: {
            description:        
                "The result is a refined, cohesive home where every corner reflects intentional design. Premium materials and bespoke furniture elevate the everyday living experience.",
            rooms: [
                { label: "Living Room", image: "/images/recent-projects/vishnu/vishnu3.webP" },
                { label: "Modular Kitchen", image: "/images/recent-projects/vishnu/vishnu5.webP" },
                { label: "Master Bedroom", image: "/images/recent-projects/vishnu/vishnu.webP" },
            ],
        },
        projectOverview: {
            clientBriefImage: "/images/recent-projects/vishnu/vishnu2.webP",
            executionImages: [
                { img: "/images/recent-projects/vishnu/vishnu.webP", label: "Structural modifications and false ceiling work" },
                { img: "/images/recent-projects/vishnu/vishnu3.webP", label: "Modular kitchen installation with quartz countertops" },
                { img: "/images/recent-projects/vishnu/vishnu4.webP", label: "Bespoke wardrobes and paneling" },
                { img: "/images/recent-projects/vishnu/vishnu7.webP", label: "Custom furniture fit-out and decor styling" },
            ],
        },
    },
    {
        slug: "oceanus-greendale",
        title: "Oceanus Greendale",
        subtitle: "2BHK Apartment",
        heroImage: "/images/recent-projects/oceanus/Oceanus.webP",
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
        beforeImage: "/images/recent-projects/oceanus/Oceanus7.webP",
        afterImage: "/images/recent-projects/oceanus/Oceanus7.webP",
        executionSteps: [
            { label: "Structural modifications and false ceiling work", image: "/sofa.jpg" },
            { label: "Modular kitchen with quartz countertops and sleek cabinetry", image: "/sofa.jpg" },
            { label: "Bespoke wardrobes and full-wall paneling", image: "/sofa.jpg" },
        ],
        beforeAfterExecution: {
            before: "/images/recent-projects/oceanus/Oceanus2.webP",
            after: "/images/recent-projects/oceanus/Oceanus2.webP",
        },
        finalTransformation: {
            description:
                "The result is a refined, cohesive home where every corner reflects intentional design. Premium materials and bespoke furniture elevate the everyday living experience.",
            rooms: [
                { label: "Living Room", image: "/images/recent-projects/oceanus/Oceanus4.webP" },
                { label: "Modular Kitchen", image: "/images/recent-projects/oceanus/Oceanus6.webP" },
                { label: "Master Bedroom", image: "/images/recent-projects/oceanus/Oceanus8.webP" },
            ],
        },
        projectOverview: {
            clientBriefImage: "/images/recent-projects/oceanus/Oceanus2.webP",
            executionImages: [
                { img: "/images/recent-projects/oceanus/Oceanus3.webP", label: "Structural modifications and false ceiling work" },
                { img: "/images/recent-projects/oceanus/Oceanus4.webP", label: "Modular kitchen installation with quartz countertops" },
                { img: "/images/recent-projects/oceanus/Oceanus5.webP", label: "Bespoke wardrobes and paneling" },
                { img: "/images/recent-projects/oceanus/Oceanus9.webP", label: "Custom furniture fit-out and decor styling" },
            ],
        },
    },
    {
        slug: "l-and-t-raintree-boulevard",
        title: "L & T Raintree Boulevard",
        subtitle: "Luxury Villa Interior Design",
        heroImage: "/images/recent-projects/l&t/l&t.webP",
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
        beforeImage: "/images/recent-projects/l&t/l&t4.webP",
        afterImage: "/images/recent-projects/l&t/l&t4.webP",
        executionSteps: [
            { label: "Double-height false ceiling with cove lighting and cornice work", image: "/sofa.jpg" },
            { label: "Italian marble flooring and premium wall cladding", image: "/sofa.jpg" },
            { label: "Custom solid wood wardrobes and joinery", image: "/sofa.jpg" },
        ],
        beforeAfterExecution: {
            before: "/images/recent-projects/l&t/l&t3.webP",
            after: "/images/recent-projects/l&t/l&t3.webP",
        },
        finalTransformation: {
            description:
                "A masterpiece of luxury interior design — every room in this villa tells a story of craftsmanship, elegance, and thoughtful design. The Grandiose's signature touch is visible in every corner.",
            rooms: [
                { label: "Grand Living Room", image: "/images/recent-projects/l&t/l&t2.webP" },
                { label: "Chef's Kitchen", image: "/images/recent-projects/l&t/l&t8.webP" },
                { label: "Master Suite", image: "/images/recent-projects/l&t/l&t6.webP" },
            ],
        },
        projectOverview: {
            clientBriefImage: "/images/recent-projects/l&t/l&t5.webP",
            executionImages: [
                { img: "/images/recent-projects/l&t/l&t.webP", label: "Double-height false ceiling and cove lighting" },
                { img: "/images/recent-projects/l&t/l&t4.webP", label: "Italian marble flooring and wall cladding" },
                { img: "/images/recent-projects/l&t/l&t7.webP", label: "Custom solid wood wardrobes and joinery" },
                { img: "/images/recent-projects/l&t/l&t9.webP", label: "Bespoke furniture and decor styling" },
            ],
        },
    },
];

export const getProjectBySlug = (slug: string): RecentProject | undefined =>
    recentProjects.find((p) => p.slug === slug);