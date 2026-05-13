// Desarrollado por Jhoan Camilo

import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // URL base del sitio para generar URLs absolutas
  metadataBase: new URL("https://caishen.com.co"),

  // Títulos dinámicos para SEO
  title: {
    default: "Grupo Caishen",
    template: "%s | Grupo Caishen",
  },

  // Descripción principal
  description:
    "Holding empresarial colombiana enfocada en construir compañías, patrimonio y legado con visión de largo plazo.",

  // Palabras clave SEO
  keywords: [
    "Grupo Caishen",
    "holding empresarial",
    "holding colombiana",
    "empresa de inversiones",
    "patrimonio",
    "legado",
    "Hobisu",
    "inversiones",
    "tecnología",
    "Colombia",
  ],

  // Autoría
  authors: [
    {
      name: "Jhoan Camilo",
    },
  ],

  creator: "Jhoan Camilo",
  publisher: "Grupo Caishen",

  // URL canónica
  alternates: {
    canonical: "/",
  },

  // Robots para SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Nombre de la aplicación
  applicationName: "Grupo Caishen",

  // Categoría del sitio
  category: "Business",

  // Favicon e íconos
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  // Open Graph (WhatsApp, LinkedIn, Facebook)
  openGraph: {
    title: "Grupo Caishen",
    description:
      "Holding empresarial colombiana enfocada en construir compañías, patrimonio y legado con visión de largo plazo.",
    url: "https://caishen.com.co",
    siteName: "Grupo Caishen",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/images/og/Metadata.png",
        width: 1200,
        height: 630,
        alt: "Grupo Caishen - Construimos empresas, patrimonio y legado",
      },
    ],
  },

  // Twitter / X Cards
  twitter: {
    card: "summary_large_image",
    title: "Grupo Caishen",
    description:
      "Holding empresarial colombiana enfocada en construir compañías, patrimonio y legado con visión de largo plazo.",
    images: ["/images/og/Metadata.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {/* Datos estructurados para SEO */}
        <StructuredData />

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics
            gaId={process.env.NEXT_PUBLIC_GA_ID}
          />
        )}

        {/* Contenido de la aplicación */}
        {children}
      </body>
    </html>
  );
}