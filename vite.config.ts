import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), legacy()],
  build: {
    minify: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (["vue"].some((name) => id.includes(name))) {
            return "manual-chunk";
          }
        },
        compact: true,
      },
    },
  },
});
