import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://elmi.github.io",
  base: "/elmi", // Cambia por el nombre de tu repositorio
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
      customCss: [
        // Opcional: añadir CSS personalizado
        "./src/styles/custom.css",
      ],
    }),
  ],
});
