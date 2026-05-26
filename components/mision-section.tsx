import { Phone, MessageCircle } from "lucide-react"

export function MisionSection() {
  return (
    <section id="mision" className="py-16 md:py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-muted/30 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <Phone className="h-10 w-10 text-primary" />
                </div>
                <p className="text-muted-foreground">Siempre disponible para ayudarte</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/50 rounded-xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/10 rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Productores que escuchan, explican y están.
            </h2>
            
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Sabemos que los seguros muchas veces suenan confusos. Por eso en Monseguro trabajamos con empatía, claridad y compromiso.
              </p>
              <p>
                Nos formamos para asesorarte bien, pero sobre todo, para acompañarte con cercanía en cada paso: desde elegir tu cobertura en las mejores aseguradoras del mercado, hasta ayudarte frente a un problema.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a 
                href="https://wa.me/5491158635024" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-medium hover:bg-[#20bd5a] transition-colors shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="h-5 w-5" />
                Consultanos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
