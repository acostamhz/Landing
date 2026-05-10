// Desarrollado por Jhoan Camilo

import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";

import { locales, defaultLocale } from "./config";

export default getRequestConfig(async ({ requestLocale }) => {
  // Idioma solicitado en la URL (ej. /es o /en)
  const requested = await requestLocale;

  // Validar si el idioma existe; si no, usar el idioma por defecto
  const locale = hasLocale(locales, requested)
    ? requested
    : defaultLocale;

  // Cargar dinámicamente el archivo de traducciones correspondiente
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});