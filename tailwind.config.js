/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#140012",
        accent: "#FF4B4B",
        secondary: "#151312",
        light: {
          100: "#f8d7d7",
          200: "#f1acac",
          300: "#f3b2b2",
        },
        dark: {
          100: "#653535",
          200: "#330606",
        },
      },
    },
  },
  plugins: [],
}