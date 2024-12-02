import { purgeCSSPlugin } from "@fullhuman/postcss-purgecss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

const IN_PRODUCTION = process.env.NODE_ENV === "production";
const bootstrap = "node_modules/bootstrap";

export default {
  plugins: [
    IN_PRODUCTION &&
      purgeCSSPlugin({
        content: [
          "./src/**/*.html",
          "./src/**/*.js",

          `${bootstrap}/js/dist/alert.js`,
          `${bootstrap}/js/dist/base-component.js`,
          `${bootstrap}/js/dist/button.js`,
          `${bootstrap}/js/dist/carousel.js`,
          `${bootstrap}/js/dist/collapse.js`,
          `${bootstrap}/js/dist/dropdown.js`,
          `${bootstrap}/js/dist/modal.js`,
          `${bootstrap}/js/dist/offcanvas.js`,
          `${bootstrap}/js/dist/popover.js`,
          `${bootstrap}/js/dist/scrollspy.js`,
          `${bootstrap}/js/dist/tab.js`,
          `${bootstrap}/js/dist/toast.js`,
          `${bootstrap}/js/dist/tooltip.js`,
        ],
        defaultExtractor(content) {
          const contentWithoutStyleBlocks = content.replace(
            /<style[^]+?<\/style>/gi,
            ""
          );
          return (
            contentWithoutStyleBlocks.match(
              /[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g
            ) || []
          );
        },
        keyframes: true,
        variables: true,
      }),

    IN_PRODUCTION && autoprefixer,

    IN_PRODUCTION &&
      cssnano({
        preset: ["default", { discardComments: { removeAll: true } }],
      }),
  ],
};
