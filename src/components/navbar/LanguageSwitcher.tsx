// Desarrollado por Jhoan Camilo

"use client";

import Link from "next/link";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const locale = useLocale();

  const languages = [
    { code: "es", label: "ES" },
    { code: "en", label: "EN" },
  ];

  return (
    <div className="flex items-center gap-2 text-sm font-medium">
      {languages.map((language, index) => {
        const isActive = locale === language.code;

        return (
          <div
            key={language.code}
            className="flex items-center gap-2"
          >
            <Link
              href={`/${language.code}`}
              className={`transition-colors duration-300 ${
                isActive
                  ? "text-white"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {language.label}
            </Link>

            {index < languages.length - 1 && (
              <span className="text-zinc-700">|</span>
            )}
          </div>
        );
      })}
    </div>
  );
}