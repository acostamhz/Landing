// Desarrollado por Jhoan Camilo

import type { Metadata } from "next";
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
  // URL base del sitio para generar URLs absolutas en Open Graph
  metadataBase: new URL("https://caishen.com.co"),

  // Información principal del sitio
  title: "Grupo Caishen",
  description:
    "Holding empresarial colombiana enfocada en construir compañías, patrimonio y legado con visión de largo plazo.",

  // Nombre de la aplicación
  applicationName: "Grupo Caishen",

  // Configuración del favicon
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  // Open Graph (WhatsApp, LinkedIn, Facebook, etc.)
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

  // Robots para SEO
  robots: {
    index: true,
    follow: true,
  },

  // Categoría del sitio
  category: "Business",
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
        {children}
      </body>
    </html>
  );
}