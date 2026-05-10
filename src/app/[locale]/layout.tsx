// Desarrollado por Jhoan Camilo

import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { hasLocale } from "next-intl";

import { locales } from "@/i18n/config";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Obtener el idioma de la URL (/es o /en)
  const { locale } = await params;

  // Validar que el idioma sea soportado
  if (!hasLocale(locales, locale)) {
    notFound();
  }

  // Cargar directamente el archivo de traducciones
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}