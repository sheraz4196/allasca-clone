import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { cartographer } from "@replit/vite-plugin-cartographer";

export default defineConfig(({ mode }) => {
  const isDevOnReplit = mode !== "production" && process.env.REPL_ID;

  return {
    root: path.resolve(import.meta.dirname, "client"),

    plugins: [
      react(),
      runtimeErrorOverlay(),
      ...(isDevOnReplit ? [cartographer()] : []),
    ],

    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },

    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },

    // Dev-only — Vercel ignores this completely
    server: {
      allowedHosts: ["myological-lynwood-overpainfully.ngrok-free.dev"],
    },
  };
});
