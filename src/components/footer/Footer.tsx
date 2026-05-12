// Desarrollado por Jhoan Camilo

"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

import FadeIn from "@/components/animations/FadeIn";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="border-t border-white/5 py-10">
      <FadeIn>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Marca */}
          <div className="flex items-center gap-4">
            <Image
              src="/logos/caishen/Logo.png"
              alt="Grupo Caishen"
              width={36}
              height={36}
              className="object-contain"
            />

            <div>
              <h3 className="text-lg font-semibold tracking-[0.2em] uppercase">
                Grupo Caishen
              </h3>

              <p className="text-zinc-500 text-sm mt-2">
                {t("copyright")}
              </p>
            </div>
          </div>

          {/* Enlaces */}
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              {t("privacy")}
            </a>

            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              {t("terms")}
            </a>

            <a
              href={`/${locale}#contact`}
              className="hover:text-white transition-colors duration-300"
            >
              {t("contact")}
            </a>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}