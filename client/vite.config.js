const { defineConfig } = require("vite");
const vue = require("@vitejs/plugin-vue");
const path = require("path");

// https://vitejs.dev/config/

module.exports = defineConfig({
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
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
