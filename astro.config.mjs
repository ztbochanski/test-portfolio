import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/ remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://zbochanski.xyz/",
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://zbochanski.xyz/sitemap-index.xml",
        "https://zbochanski.xyz/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon()
  ],
  markdown: {
    shikiConfig: {
      theme: "nord",
    },
    remarkPlugins: [remarkReadingTime],
  },
  output: "server",
  adapter: netlify(),
});
