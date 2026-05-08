// Desarrollado por Jhoan Camilo

"use client";

import { motion } from "framer-motion";

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="py-44 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/2 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto px-6 text-center"
      >
        <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-8">
          Filosofía
        </p>

        <h2 className="text-6xl md:text-7xl font-black leading-tight mb-10">
          Crear valor real
          <span className="block text-zinc-500">
            para generaciones futuras.
          </span>
        </h2>

        <p className="text-zinc-400 text-xl leading-relaxed max-w-3xl mx-auto">
          No perseguimos tendencias pasajeras. Construimos compañías y activos
          capaces de mantenerse sólidos con el paso del tiempo.
        </p>
      </motion.div>
    </section>
  );
}