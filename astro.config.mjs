import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://alflionel.github.io",
  base: "/draw-a-perfect-star",

  vite: {
    plugins: [tailwindcss()],
  },
});