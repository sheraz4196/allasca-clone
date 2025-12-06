import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { cartographer } from "@replit/vite-plugin-cartographer";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig(({ mode }) => {
  const isDevOnReplit = mode !== "production" && process.env.REPL_ID;

  return {
    root: path.resolve(__dirname, "client"), // point to client folder

    plugins: [
      react(),
      runtimeErrorOverlay(),
      ...(isDevOnReplit ? [cartographer()] : []),
      ViteImageOptimizer({
        webp: {
          quality: 75,
        },
      }),
    ],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client/src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },

    build: {
      outDir: path.resolve(__dirname, "dist"), // output directly to dist
      emptyOutDir: true,
    },
  };
});
