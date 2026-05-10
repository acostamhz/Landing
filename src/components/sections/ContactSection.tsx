// Desarrollado por Jhoan Camilo

"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xpqboere", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
        className="max-w-4xl mx-auto px-6"
      >
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
            El futuro apenas comienza.
          </h2>

          <p className="text-zinc-400 text-xl leading-relaxed max-w-3xl mx-auto">
            Grupo Caishen continúa construyendo compañías, proyectos y activos
            con una visión enfocada en innovación, patrimonio y largo plazo.
          </p>
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Nombre */}
          <div>
            <label className="block text-sm text-zinc-400 mb-2">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full rounded-2xl bg-zinc-950 border border-white/10 px-6 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/30 transition-colors"
              placeholder="Tu nombre"
            />
          </div>

          {/* Correo */}
          <div>
            <label className="block text-sm text-zinc-400 mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-2xl bg-zinc-950 border border-white/10 px-6 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/30 transition-colors"
              placeholder="tu@correo.com"
            />
          </div>

          {/* Asunto */}
          <div>
            <label className="block text-sm text-zinc-400 mb-2">
              Asunto
            </label>
            <input
              type="text"
              name="subject"
              required
              className="w-full rounded-2xl bg-zinc-950 border border-white/10 px-6 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/30 transition-colors"
              placeholder="Motivo del mensaje"
            />
          </div>

          {/* Mensaje */}
          <div>
            <label className="block text-sm text-zinc-400 mb-2">
              Mensaje
            </label>
            <textarea
              name="message"
              required
              rows={6}
              className="w-full rounded-2xl bg-zinc-950 border border-white/10 px-6 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/30 transition-colors resize-none"
              placeholder="Escribe tu mensaje..."
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full md:w-auto px-10 py-5 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending"
              ? "Enviando..."
              : "Contactar Grupo Caishen"}
          </button>

          {/* Mensajes de estado */}
          {status === "success" && (
            <p className="text-green-400 mt-4">
              Mensaje enviado correctamente.
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 mt-4">
              Ocurrió un error al enviar el mensaje.
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}