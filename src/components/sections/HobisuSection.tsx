// Desarrollado por Jhoan Camilo

"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

import FadeIn from "@/components/animations/FadeIn";

export default function HobisuSection() {
  const t = useTranslations("hobisu");

  return (
    <section
      id="hobisu"
      className="py-44 border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="mb-16">
            <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-6">
              {t("badge")}
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              Hobisu
              <span className="block text-zinc-500">
                {t("titleLine2")}
              </span>
            </h2>
          </div>
        </FadeIn>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Logo */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 rounded-[3rem] bg-zinc-950 border border-white/5 flex items-center justify-center overflow-hidden">
              <Image
                src="/logos/hobisu/Logo.png"
                alt="Hobisu"
                width={240}
                height={240}
                className="object-contain -translate-x-4 -translate-y-2"
                priority
              />
            </div>
          </div>

          {/* Contenido */}
          <div>
            <p className="text-zinc-400 text-xl leading-relaxed mb-10">
              {t("description")}
            </p>

            {/* Datos */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="rounded-2xl border border-white/5 bg-zinc-950 p-6">
                <p className="text-zinc-500 text-sm mb-2">
                  {t("stats.foundation.label")}
                </p>
                <p className="text-2xl font-bold">
                  {t("stats.foundation.value")}
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-zinc-950 p-6">
                <p className="text-zinc-500 text-sm mb-2">
                  {t("stats.status.label")}
                </p>
                <p className="text-2xl font-bold">
                  {t("stats.status.value")}
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-zinc-950 p-6">
                <p className="text-zinc-500 text-sm mb-2">
                  {t("stats.category.label")}
                </p>
                <p className="text-lg font-bold">
                  {t("stats.category.value")}
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-zinc-950 p-6">
                <p className="text-zinc-500 text-sm mb-2">
                  {t("stats.website.label")}
                </p>
                <a
                  href="https://hobisu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold hover:text-zinc-300 transition-colors"
                >
                  www.hobisu.com
                </a>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://hobisu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-black rounded-2xl font-semibold hover:scale-105 transition-transform"
            >
              {t("cta")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}