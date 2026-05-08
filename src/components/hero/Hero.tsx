// Desarrollado por Jhoan Camilo

"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

      <div className="absolute w-[700px] h-[700px] rounded-full bg-white/5 blur-3xl top-[-200px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-40">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl"
        >
          <div className="mb-6 inline-flex items-center gap-3 border border-white/10 rounded-full px-5 py-2 text-sm text-zinc-400">
            <div className="w-2 h-2 rounded-full bg-white" />
            Holding Empresarial Colombiana
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.95] mb-10">
            Construimos
            <span className="block text-zinc-500">
              empresas, patrimonio y legado.
            </span>
          </h1>

          <p className="max-w-2xl text-xl text-zinc-400 leading-relaxed mb-12">
            Grupo Caishen es una holding enfocada en desarrollar compañías
            modernas con visión de largo plazo, innovación estratégica y
            creación de valor sostenible.
          </p>

          <div className="flex flex-wrap gap-5">
            <button className="px-8 py-4 bg-white text-black rounded-2xl font-semibold hover:scale-105 transition-transform">
              Explorar Ecosistema
            </button>

            <button className="px-8 py-4 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
              Nuestra Filosofía
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}