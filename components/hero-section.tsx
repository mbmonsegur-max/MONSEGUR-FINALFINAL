import { Button } from "@/components/ui/button"
import { Car, Home, Heart, Plane, Shield, Building2 } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              <span className="block">SOY MARIA MONSEGUR,</span>
              <span className="block text-primary">TU PRODUCTORA DE SEGUROS</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-serif italic">
              Contratá tu seguro con confianza y sin dudas
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <a href="#cotizador">COTIZA UN SEGURO</a>
            </Button>
          </div>

          {/* Visual Elements - Insurance Icons Grid */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Car, label: "Auto" },
                { icon: Home, label: "Hogar" },
                { icon: Heart, label: "Vida" },
                { icon: Building2, label: "Comercio" },
                { icon: Shield, label: "Protección" },
                { icon: Plane, label: "Viaje" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="aspect-square bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center gap-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <item.icon className="h-10 w-10 text-primary" strokeWidth={1.5} />
                  <span className="text-sm font-medium text-foreground/70">{item.label}</span>
                </div>
              ))}
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/50 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
