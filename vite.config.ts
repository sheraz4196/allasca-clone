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

function asyncCssPlugin(): Plugin {
  return {
    name: "async-css",
    transformIndexHtml(html: string, ctx?: IndexHtmlTransformContext) {
      if (!ctx?.bundle) return html;

      const cssFiles = Object.values(ctx.bundle).filter(
        (file: any) => file.type === "asset" && file.fileName.endsWith(".css")
      );

      if (!cssFiles.length) return html;

      const links = cssFiles
        .map(
          (file: any) => `
<link rel="preload" href="/${file.fileName}" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="/${file.fileName}"></noscript>`
        )
        .join("\n");

      return html.replace("</head>", `${links}\n</head>`);
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
        webp: {
          quality: 75,
        },
      }),
      asyncCssPlugin(),
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

      cssCodeSplit: true,
      minify: "esbuild",
    },
  };
});
