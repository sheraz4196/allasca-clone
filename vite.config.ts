import {
  defineConfig,
  type IndexHtmlTransformContext,
  type Plugin,
} from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { cartographer } from "@replit/vite-plugin-cartographer";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

function inlineCssPlugin(): Plugin {
  return {
    name: "inline-css",
    apply: "build",
    transformIndexHtml(html, ctx?: IndexHtmlTransformContext) {
      if (!ctx?.bundle) return html;

      let styles = "";

      for (const file of Object.values(ctx.bundle)) {
        if (file.type === "asset" && file.fileName.endsWith(".css")) {
          styles += `<style>${file.source}</style>`;
        }
      }

      return html.replace("</head>", `${styles}\n</head>`);
    },
  };
}

export default defineConfig(({ mode }) => {
  const isDevOnReplit =
    mode !== "production" && process.env.REPL_ID !== undefined;

  return {
    root: path.resolve(__dirname, "client"),

    plugins: [
      react(),
      runtimeErrorOverlay(),
      ...(isDevOnReplit ? [cartographer()] : []),
      ViteImageOptimizer({
        webp: { quality: 75 },
      }),
      inlineCssPlugin(),
    ],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client/src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },

    build: {
      outDir: path.resolve(__dirname, "dist"),
      emptyOutDir: true,
      cssCodeSplit: false,
      minify: "esbuild",
    },
  };
});
