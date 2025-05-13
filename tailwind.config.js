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
      },
      keyframes: {
        strike: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        checkmark1: {
          "0%": { width: "0", opacity: "1" },
          "100%": { width: "5px", opacity: "1" },
        },
        checkmark2: {
          "0%": { width: "0", opacity: "1" },
          "100%": { width: "10px", opacity: "1" },
        },
        firework: {
          "0%": {
            opacity: "1",
            boxShadow:
              "0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0",
          },
          "30%": { opacity: "1" },
          "100%": {
            opacity: "0",
            boxShadow:
              "0 -15px 0 0px #4f29f0, 14px -8px 0 0px #4f29f0, 14px 8px 0 0px #4f29f0, 0 15px 0 0px #4f29f0, -14px 8px 0 0px #4f29f0, -14px -8px 0 0px #4f29f0",
          },
        },
      },
      animation: {
        strike: "strike 0.3s linear forwards",
        checkmark1: "checkmark1 0.2s ease-in-out forwards",
        checkmark2: "checkmark2 0.3s ease-in-out forwards",
        firework: "firework 0.5s ease forwards 0.1s",
      },
    },
  },
  plugins: [],
};
