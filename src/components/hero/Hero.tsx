// Desarrollado por Jhoan Camilo

"use client";

import { useTranslations } from "next-intl";

import SlideUp from "@/components/animations/SlideUp";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Glow radial superior */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

      {/* Halo difuso */}
      <div className="absolute w-[700px] h-[700px] rounded-full bg-white/5 blur-3xl top-[-200px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-40">
        <StaggerContainer className="max-w-5xl">
          {/* Badge */}
          <SlideUp>
            <div className="mb-6 inline-flex items-center gap-3 border border-white/10 rounded-full px-5 py-2 text-sm text-zinc-400">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              {t("badge")}
            </div>
          </SlideUp>

          {/* Título principal */}
          <SlideUp>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.95] mb-10">
              {t("titleLine1")}
              <span className="block text-zinc-500">
                {t("titleLine2")}
              </span>
            </h1>
          </SlideUp>

          {/* Descripción */}
          <FadeIn>
            <p className="max-w-2xl text-xl text-zinc-400 leading-relaxed mb-12">
              {t("description")}
            </p>
          </FadeIn>

          {/* Botones */}
          <SlideUp>
            <div className="flex flex-wrap gap-5">
              <button className="px-8 py-4 bg-white text-black rounded-2xl font-semibold hover:scale-105 transition-transform duration-300">
                {t("primaryButton")}
              </button>

              <button className="px-8 py-4 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                {t("secondaryButton")}
              </button>
            </div>
          </SlideUp>
        </StaggerContainer>
      </div>
    </section>
  );
}