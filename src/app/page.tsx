// Desarrollado por Jhoan Camilo

import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/sections/AboutSection";
import VisionSection from "@/components/sections/VisionSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import CompaniesSection from "@/components/sections/CompaniesSection";

import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Navbar />

      <Hero />

      <AboutSection />

      <PhilosophySection />

      <CompaniesSection />

      <VisionSection />

      <ContactSection />

      <Footer />
    </main>
  );
}