import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://ruiizy.github.io",
  base: "/elmi",
  integrations: [
    starlight({
      title: "Elmi components",
      description: "Elmi components documentation",
      sidebar: [
        {
          label: "Guías",
          items: [{ label: "Ejemplo", link: "/guides/example/" }],
        },
        {
          label: "Referencia",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
