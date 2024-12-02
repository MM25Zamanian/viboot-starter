import { defineConfig } from "vite";
import { createMpaPlugin } from "vite-plugin-virtual-mpa";
import { resolve } from "node:path";

export default defineConfig({
  server: {
    port: 8080,
    hmr: true,
  },

  plugins: [
    createMpaPlugin({
      htmlMinify: false,

      template: "./src/template.html",

      pages: [
        {
          name: "index",
          entry: "/src/pages/index.html",
        },
        {
          name: "about",
          entry: "/src/pages/about.html",
        },
      ],
    }),
  ],
});
