// Desarrollado por Jhoan Camilo

"use client";

import { useTranslations } from "next-intl";

import SlideUp from "@/components/animations/SlideUp";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";

export default function VisionSection() {
  const t = useTranslations("vision");

  return (
    <section
      id="vision"
      className="py-44"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-[3rem] border border-white/10 bg-linear-to-br from-zinc-900 to-black p-16 md:p-24">
          <StaggerContainer>
            {/* Etiqueta */}
            <SlideUp>
              <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-8">
                {t("badge")}
              </p>
            </SlideUp>

            {/* Título */}
            <SlideUp>
              <h2 className="text-5xl md:text-7xl font-black leading-tight mb-10">
                {t("titleLine1")}
                <span className="block text-zinc-500">
                  {t("titleLine2")}
                </span>
              </h2>
            </SlideUp>

            {/* Descripción */}
            <FadeIn>
              <p className="text-zinc-400 text-xl max-w-3xl leading-relaxed">
                {t("description")}
              </p>
            </FadeIn>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}