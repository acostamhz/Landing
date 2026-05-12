// Desarrollado por Jhoan Camilo

"use client";

import { useTranslations } from "next-intl";

import SlideUp from "@/components/animations/SlideUp";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";

export default function AboutSection() {
  const t = useTranslations("about");

  const stats = [
    {
      value: "2025",
      label: t("stats.foundation"),
    },
    {
      value: "∞",
      label: t("stats.vision"),
    },
    {
      value: "COL",
      label: t("stats.origin"),
    },
    {
      value: "01",
      label: t("stats.activeBrand"),
    },
  ];

  return (
    <section className="py-40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24">
        {/* Contenido textual */}
        <div>
          <SlideUp>
            <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-6">
              {t("badge")}
            </p>
          </SlideUp>

          <SlideUp>
            <h2 className="text-5xl font-bold leading-tight mb-8">
              {t("titleLine1")}
              <span className="block text-zinc-500">
                {t("titleLine2")}
              </span>
            </h2>
          </SlideUp>

          <FadeIn>
            <p className="text-zinc-400 text-lg leading-relaxed">
              {t("description")}
            </p>
          </FadeIn>
        </div>

        {/* Estadísticas */}
        <StaggerContainer className="grid grid-cols-2 gap-6">
          {stats.map((stat) => (
            <FadeIn key={stat.label}>
              <div className="bg-zinc-950 border border-white/5 rounded-3xl p-10 hover:border-white/10 transition-colors duration-300">
                <h3 className="text-5xl font-black mb-3">{stat.value}</h3>

                <p className="text-zinc-500">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}