// Desarrollado por Jhoan Camilo

"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "2025",
    label: "Fundación",
  },
  {
    value: "∞",
    label: "Visión",
  },
  {
    value: "COL",
    label: "Origen",
  },
  {
    value: "01",
    label: "Marca activa",
  },
];

export default function AboutSection() {
  return (
    <section className="py-40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-6">
            Sobre Nosotros
          </p>

          <h2 className="text-5xl font-bold leading-tight mb-8">
            Pensamos en décadas,
            <span className="block text-zinc-500">
              no en resultados inmediatos.
            </span>
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed">
            Grupo Caishen nace con una visión enfocada en construir activos,
            compañías y proyectos con impacto real, integrando tecnología,
            capital y estrategia empresarial bajo una filosofía de largo plazo.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-zinc-950 border border-white/5 rounded-3xl p-10"
            >
              <h3 className="text-5xl font-black mb-3">{stat.value}</h3>

              <p className="text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}