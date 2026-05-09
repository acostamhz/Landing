// Desarrollado por Jhoan Camilo

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";

export default function HobisuSection() {
  return (
    <section
      id="hobisu"
      className="py-44 border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="mb-16">
            <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-6">
              Empresa Destacada
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              Hobisu
              <span className="block text-zinc-500">
                tecnología premium.
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
              Hobisu es una marca de Grupo Caishen enfocada en la
              comercialización de dispositivos Apple y tecnología premium,
              diseñada para ofrecer productos auténticos con una experiencia de
              compra moderna, confiable y sofisticada.
            </p>

            {/* Datos */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="rounded-2xl border border-white/5 bg-zinc-950 p-6">
                <p className="text-zinc-500 text-sm mb-2">Fundación</p>
                <p className="text-2xl font-bold">2026</p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-zinc-950 p-6">
                <p className="text-zinc-500 text-sm mb-2">Estado</p>
                <p className="text-2xl font-bold">Activa</p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-zinc-950 p-6">
                <p className="text-zinc-500 text-sm mb-2">Categoría</p>
                <p className="text-lg font-bold">Tecnología</p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-zinc-950 p-6">
                <p className="text-zinc-500 text-sm mb-2">Sitio Web</p>
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
              Visitar Hobisu
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}