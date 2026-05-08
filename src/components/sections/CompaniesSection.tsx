// Desarrollado por Jhoan Camilo

"use client";

import { motion } from "framer-motion";

const companies = [
  {
    name: "Hobisu",
    category: "Tecnología",
    description:
      "Marca enfocada en dispositivos Apple y tecnología premium.",
  },
  {
    name: "Future Ventures",
    category: "Próximamente",
    description:
      "Nuevos negocios y adquisiciones estratégicas en desarrollo.",
  },
];

export default function CompaniesSection() {
  return (
    <section
      id="companies"
      className="py-40 border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-6">
            Ecosistema
          </p>

          <h2 className="text-6xl font-black">
            Empresas &
            <span className="text-zinc-500"> proyectos</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-zinc-950 border border-white/5 rounded-[2rem] p-12 hover:border-white/20 transition-all"
            >
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-4xl font-bold">{company.name}</h3>

                <span className="text-sm px-4 py-2 rounded-full border border-white/10 text-zinc-400">
                  {company.category}
                </span>
              </div>

              <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                {company.description}
              </p>

              <button className="text-white font-medium group-hover:translate-x-2 transition-transform">
                Explorar →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}