import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      // includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "To Do List",
        short_name: "To Do",
        description: "simple To Do List app",
        theme_color: "#ca5f5f",
        background_color: "#ffffff",
        display: "standalone",
        // icons: [
        //   {
        //     src: "./1.png",
        //     sizes: "192x192",
        //     type: "image/png",
        //   },
        //   {
        //     src: "./2.png",
        //     sizes: "512x512",
        //     type: "image/png",
        //     purpose: "any maskable",
        //   },
        // ],
      },
    }),
  ],
  server: {
    proxy: {
      // Proxy /api requests to backend during development to avoid CORS
      "/api": {
        target: "https://todolistapi-2ao1.runasp.net",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, "/api"),
      },
    },
  },
});
