"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CotizadorSection } from "@/components/cotizador-section"
import { SobreMiSection } from "@/components/sobre-mi-section"
import { MisionSection } from "@/components/mision-section"
import { ProductosSection } from "@/components/productos-section"
import { ContactoSection } from "@/components/contacto-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CotizadorSection />
      <SobreMiSection />
      <MisionSection />
      <ProductosSection />
      <ContactoSection />
      <Footer />
    </main>
  )
}
