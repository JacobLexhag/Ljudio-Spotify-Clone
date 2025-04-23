import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/rest": {
        target: process.env.VITE_API_URL || "http://localhost:3001/",
        changeOrigin: true,
        ws: true,
      },
      "/api": {
        target: process.env.VITE_API_URL || "http://localhost:3001/",
        changeOrigin: true,
        ws: true,
      },
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
