import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [
    sanity({
      projectId: "3poolcg1",
      dataset: "production",
      useCdn: false,
      apiVersion: "2024-07-24",
      studioBasePath: "/admin",
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
