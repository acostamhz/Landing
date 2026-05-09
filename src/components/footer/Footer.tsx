// Desarrollado por Jhoan Camilo

"use client";

import FadeIn from "@/components/animations/FadeIn";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <FadeIn>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Marca */}
          <div>
            <h3 className="text-lg font-semibold tracking-[0.2em] uppercase">
              Grupo Caishen
            </h3>

            <p className="text-zinc-500 text-sm mt-2">
              © 2026 — Todos los derechos reservados.
            </p>
          </div>

          {/* Enlaces */}
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Privacidad
            </a>

            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Términos
            </a>

            <a
              href="#contact"
              className="hover:text-white transition-colors duration-300"
            >
              Contacto
            </a>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}