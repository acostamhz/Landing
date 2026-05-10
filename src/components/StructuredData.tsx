// Desarrollado por Jhoan Camilo

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Grupo Caishen",
    url: "https://caishen.com.co",
    logo: "https://caishen.com.co/favicon.ico",
    description:
      "Holding empresarial colombiana enfocada en construir compañías, patrimonio y legado con visión de largo plazo.",
    foundingDate: "2025-08-22",
    founder: {
      "@type": "Person",
      name: "Jhoan Camilo",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "CO",
    },
    brand: [
      {
        "@type": "Brand",
        name: "Hobisu",
        url: "https://hobisu.com",
        description:
          "Marca de Grupo Caishen enfocada en la comercialización de dispositivos Apple y tecnología premium.",
      },
    ],
    sameAs: [
      "https://caishen.com.co",
      "https://hobisu.com",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}