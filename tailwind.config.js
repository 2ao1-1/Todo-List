/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: { screen: "100dvh" },
      colors: {
        main: "#f7f6f1",
        card: "#ffffff",
        accent: "#ca5f5f",
        primary: "#1a1a1a",
        secondary: "#aaaaaa",

        //
        //
        //Background: #F7F6F1 (soft off-white)
        // Pure White: #FFFFFF (for cards and content areas)
        // Vermilion Red: #CA5F5F (accent color for buttons and highlights)
        // Dark Text: #1A1A1A (for headers and primary text)
        // Light Gray: #AAAAAA (for secondary text and subtle elements)
      },
    },
  },
  plugins: [],
};
