// Desarrollado por Jhoan Camilo

import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/sections/AboutSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import CompaniesSection from "@/components/sections/CompaniesSection";
import HobisuSection from "@/components/sections/HobisuSection";
import VisionSection from "@/components/sections/VisionSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/footer/Footer";
import StructuredData from "@/components/StructuredData";

export default function LocalePage() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <PhilosophySection />
        <CompaniesSection />
        <HobisuSection />
        <VisionSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}