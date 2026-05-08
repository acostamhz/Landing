// Desarrollado por Jhoan Camilo

"use client";

import { motion } from "framer-motion";

export default function VisionSection() {
  return (
    <section
      id="vision"
      className="py-44"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6"
      >
        <div className="rounded-[3rem] border border-white/10 bg-linear-to-br from-zinc-900 to-black p-16 md:p-24">
          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-8">
            Visión
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-10">
            Convertirnos en una holding
            <span className="block text-zinc-500">
              reconocida por su visión y permanencia.
            </span>
          </h2>

          <p className="text-zinc-400 text-xl max-w-3xl leading-relaxed">
            Aspiramos a construir un ecosistema empresarial sólido, moderno y
            diversificado, capaz de generar valor sostenible durante décadas.
          </p>
        </div>
      </motion.div>
    </section>
  );
}