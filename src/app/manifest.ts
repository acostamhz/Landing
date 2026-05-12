// Desarrollado por Jhoan Camilo

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Grupo Caishen",
    short_name: "Caishen",
    description:
      "Holding empresarial colombiana enfocada en construir compañías, patrimonio y legado con visión de largo plazo.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    orientation: "portrait",
    lang: "es",
    scope: "/",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/images/og/Metadata.png",
        sizes: "1200x630",
        type: "image/png",
      },
    ],
  };
}