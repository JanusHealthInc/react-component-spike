import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      name: "material-ui-implementation",
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
