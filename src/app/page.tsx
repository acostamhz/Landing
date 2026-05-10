// Desarrollado por Jhoan Camilo

import { redirect } from "next/navigation";

export default function HomePage() {
  // Redirección automática al idioma por defecto (Español)
  redirect("/es");
}