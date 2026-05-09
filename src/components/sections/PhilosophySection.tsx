// Desarrollado por Jhoan Camilo

"use client";

import SlideUp from "@/components/animations/SlideUp";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="py-44 relative overflow-hidden"
    >
      {/* Luz vertical sutil */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/2 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <StaggerContainer>
          {/* Etiqueta */}
          <SlideUp>
            <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-8">
              Filosofía
            </p>
          </SlideUp>

          {/* Título */}
          <SlideUp>
            <h2 className="text-6xl md:text-7xl font-black leading-tight mb-10">
              Crear valor real
              <span className="block text-zinc-500">
                para generaciones futuras.
              </span>
            </h2>
          </SlideUp>

          {/* Descripción */}
          <FadeIn>
            <p className="text-zinc-400 text-xl leading-relaxed max-w-3xl mx-auto">
              No perseguimos tendencias pasajeras. Construimos compañías y
              activos capaces de mantenerse sólidos con el paso del tiempo.
            </p>
          </FadeIn>
        </StaggerContainer>
      </div>
    </section>
  );
}