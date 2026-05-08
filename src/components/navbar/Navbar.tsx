// Desarrollado por Jhoan Camilo

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { label: "Filosofía", href: "#philosophy" },
  { label: "Empresas", href: "#companies" },
  { label: "Visión", href: "#vision" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl tracking-[0.3em] uppercase font-semibold"
        >
          Grupo Caishen
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}