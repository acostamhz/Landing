// Desarrollado por Jhoan Camilo

// Idiomas soportados por el sitio
export const locales = ["es", "en"] as const;

// Idioma por defecto
export const defaultLocale = "es";

// Tipo TypeScript para mayor seguridad
export type Locale = (typeof locales)[number];