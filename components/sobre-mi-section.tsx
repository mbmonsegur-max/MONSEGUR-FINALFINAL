import Image from "next/image"
import { Linkedin, Instagram } from "lucide-react"

export function SobreMiSection() {
  return (
    <section id="sobre-mi" className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            {/* Social Icons */}
            <div className="flex gap-4 mb-8">
              <a 
                href="https://www.linkedin.com/in/mariamonsegur/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0077B5] text-white rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/monseguro/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] text-white rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@mariamonseguro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              SOBRE MI:
            </h2>
            <div className="mb-6">
              <p className="text-lg font-semibold text-foreground">MAT. PAS 103.444</p>
              <p className="text-muted-foreground">TECNICA EN COMERCIALIZACION DE SEGUROS</p>
            </div>
            
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Después de muchos años trabajando en aseguradoras y brokers líderes, decidí crear Monseguro, un espacio donde las personas puedan entender qué están contratando, sentirse bien asesoradas y, sobre todo, bien cuidadas.
              </p>
              <p>
                Hoy, además de acompañar a clientes, también organizo y potencio carteras de otros productores, ayudándolos a crecer en conjunto con una gestión más simple y efectiva.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/maria-monsegur.png"
                  alt="María Monsegur - Productora de Seguros"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
