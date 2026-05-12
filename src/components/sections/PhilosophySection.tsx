// Desarrollado por Jhoan Camilo

"use client";

import { useTranslations } from "next-intl";

import SlideUp from "@/components/animations/SlideUp";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";

export default function PhilosophySection() {
  const t = useTranslations("philosophy");

  return (
    <section
      id="philosophy"
      className="py-44 relative overflow-hidden"
    >
      {/* Luz vertical sutil */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/2 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <StaggerContainer>
          {/* Etiqueta */}
          <SlideUp>
            <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-8">
              {t("badge")}
            </p>
          </SlideUp>

          {/* Título */}
          <SlideUp>
            <h2 className="text-6xl md:text-7xl font-black leading-tight mb-10">
              {t("titleLine1")}
              <span className="block text-zinc-500">
                {t("titleLine2")}
              </span>
            </h2>
          </SlideUp>

          {/* Descripción */}
          <FadeIn>
            <p className="text-zinc-400 text-xl leading-relaxed max-w-3xl mx-auto">
              {t("description")}
            </p>
          </FadeIn>
        </StaggerContainer>
      </div>
    </section>
  );
}