// Desarrollado por Jhoan Camilo

"use client";

import SlideUp from "@/components/animations/SlideUp";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-40 border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <StaggerContainer>
          {/* Título */}
          <SlideUp>
            <h2 className="text-6xl font-black leading-tight mb-8">
              El futuro apenas comienza.
            </h2>
          </SlideUp>

          {/* Descripción */}
          <FadeIn>
            <p className="text-zinc-400 text-xl leading-relaxed mb-12">
              Grupo Caishen continúa construyendo compañías, proyectos y activos
              con una visión enfocada en innovación, patrimonio y largo plazo.
            </p>
          </FadeIn>

          {/* Botón CTA */}
          <SlideUp>
            <button className="px-10 py-5 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition-transform duration-300">
              Contactar Grupo Caishen
            </button>
          </SlideUp>
        </StaggerContainer>
      </div>
    </section>
  );
}