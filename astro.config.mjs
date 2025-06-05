import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://ruiizy.github.io", // ← Tu usuario de GitHub
  base: "/elmi", // ← Nombre de tu repositorio
  integrations: [
    starlight({
      title: "Elmi components",
      description: "Elmi components documentation",
      social: {
        github: "https://github.com/ruiizy/elmi",
      },
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
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});
