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
  title: "Grupo Caishen",
  description:
    "Holding empresarial colombiana enfocada en construir compañías, patrimonio y legado con visión de largo plazo.",

  // Configuración del favicon
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  applicationName: "Grupo Caishen",

  openGraph: {
    title: "Grupo Caishen",
    description:
      "Holding empresarial colombiana enfocada en construir compañías, patrimonio y legado con visión de largo plazo.",
    siteName: "Grupo Caishen",
    locale: "es_CO",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Grupo Caishen",
    description:
      "Holding empresarial colombiana enfocada en construir compañías, patrimonio y legado con visión de largo plazo.",
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
        {children}
      </body>
    </html>
  );
}