// Desarrollado por Jhoan Camilo

"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-40 border-t border-white/5"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="text-6xl font-black leading-tight mb-8">
          El futuro apenas comienza.
        </h2>

        <p className="text-zinc-400 text-xl leading-relaxed mb-12">
          Grupo Caishen continúa construyendo compañías, proyectos y activos
          con una visión enfocada en innovación, patrimonio y largo plazo.
        </p>

        <button className="px-10 py-5 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition-transform">
          Contactar Grupo Caishen
        </button>
      </motion.div>
    </section>
  );
}