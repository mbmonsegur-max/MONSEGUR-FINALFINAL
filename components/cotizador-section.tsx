import { Calculator } from "lucide-react"
import Script from "next/script"

export function CotizadorSection() {
  return (
    <section id="cotizador" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calculator className="h-4 w-4" />
            Multicotizador Online
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cotiza tu seguro en minutos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compará precios de las mejores aseguradoras del mercado y elegí la cobertura que mejor se adapte a tus necesidades.
          </p>
        </div>
        
        {/* Cotizador - Código exacto proporcionado */}
        <div id="woker-cotizador"></div>
        <Script
          src="https://sistema.woker.ar/embed-auto-moto/mariamonsegur/"
          data-woker-embed="true"
          data-container="woker-cotizador"
          async
        />
      </div>
    </section>
  )
}
