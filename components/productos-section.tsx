import { Car, Home, Building2, Users, Heart, Shield, Briefcase, ShoppingCart, Truck, Ship, Scale } from "lucide-react"

const productos = [
  { icon: Car, name: "Seguro de Auto y Moto" },
  { icon: Home, name: "Hogar" },
  { icon: Building2, name: "Comercio" },
  { icon: Users, name: "Accidentes Personales" },
  { icon: Heart, name: "Vida y Retiro", subtitle: "(a través de colegas especializados)" },
  { icon: Shield, name: "Caución / ART / Accidentes Personales" },
  { icon: Briefcase, name: "Integral de Consorcio" },
  { icon: ShoppingCart, name: "Integral de Comercio" },
  { icon: Scale, name: "Todo Riesgo Operativo" },
  { icon: Truck, name: "Transporte" },
  { icon: Ship, name: "Responsabilidad Civil" },
]

export function ProductosSection() {
  return (
    <section id="productos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            PRODUCTOS:
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia gama de seguros para proteger lo que más te importa
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {productos.map((producto, index) => (
            <div
              key={index}
              className="group bg-muted/30 hover:bg-primary hover:text-primary-foreground rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <producto.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary-foreground transition-colors">
                    {producto.name}
                  </h3>
                  {producto.subtitle && (
                    <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                      {producto.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#cotizador"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            COTIZA UN SEGURO
          </a>
        </div>
      </div>
    </section>
  )
}
