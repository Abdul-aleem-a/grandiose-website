import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    // theme: {
    //     extend: {
    //         colors: {
    //             primary: '#3b82f6',
    //             secondary: '#8b5cf6',
    //             accent: '#ec4899',
    //         },
    //         animation: {
    //             blob: 'blob 7s infinite',
    //         },
    //         keyframes: {
    //             blob: {
    //                 '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
    //                 '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
    //                 '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
    //             },
    //         },
    //     },
    // },
    theme: {
        extend: {
            colors: {
                royal: "#0F3D2E",
                gold: "#C9A24D",
                ivory: "#F7F6F2",
                charcoal: "#2B2B2B"
            }
        }
    }
    // plugins: [],
};

export default config;
