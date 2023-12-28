
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                medium: "Open Sans Medium",
                bold: "Open Sans Bold",
                semibold: "Open Sans SemiBold",
                light: "Open Sans Light",
                regular: "Open Sans",
                rugsnatcher: ['rugsnatcher']
            },
            keyframes: {
                wave: {
                    '0%': { transform: 'rotate(0.0deg)' },
                    '15%': { transform: 'rotate(14.0deg)' },
                    '30%': { transform: 'rotate(-8.0deg)' },
                    '40%': { transform: 'rotate(14.0deg)' },
                    '50%': { transform: 'rotate(-4.0deg)' },
                    '60%': { transform: 'rotate(10.0deg)' },
                    '70%': { transform: 'rotate(4.0deg)' },
                    '100%': { transform: 'rotate(0.0deg)' },
                },
                spotlight: {
                    "0%": {
                        opacity: 0,
                        transform: "translate(-72%, -62%) scale(0.5)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate(-50%,-40%) scale(1)",
                    },
                },
            },
            animation: {
                wave: 'wave 1s  infinite',
                spotlight: "spotlight 2s ease .75s 1 forwards",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}