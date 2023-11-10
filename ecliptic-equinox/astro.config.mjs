import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  colors: {
    text: "#fcfbfe",
    background: "#040109",
    primary: "#884ce1",
    secondary: "#1a0934",
    accent: "#732edc",
  },
});
