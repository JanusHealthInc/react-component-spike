import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      name: "tailwind-implementation",
      entry: resolve(__dirname, "index.html"),
    },
    rollupOptions: {
      external: ["react"],
      globals: {
        react: "React'",
      },
    },
  },
});
