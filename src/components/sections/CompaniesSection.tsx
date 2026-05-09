// Desarrollado por Jhoan Camilo

"use client";

import SlideUp from "@/components/animations/SlideUp";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";

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
        {/* Encabezado */}
        <div className="mb-20">
          <SlideUp>
            <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-6">
              Ecosistema
            </p>
          </SlideUp>

          <SlideUp>
            <h2 className="text-6xl font-black">
              Empresas &
              <span className="text-zinc-500"> proyectos</span>
            </h2>
          </SlideUp>
        </div>

        {/* Tarjetas */}
        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {companies.map((company) => (
            <FadeIn key={company.name}>
              <div className="group bg-zinc-950 border border-white/5 rounded-[2rem] p-12 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-4xl font-bold">{company.name}</h3>

                  <span className="text-sm px-4 py-2 rounded-full border border-white/10 text-zinc-400">
                    {company.category}
                  </span>
                </div>

                <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                  {company.description}
                </p>

                <button className="text-white font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Explorar →
                </button>
              </div>
            </FadeIn>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}