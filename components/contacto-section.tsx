import { Phone, Mail, Linkedin, Instagram } from "lucide-react"

export function ContactoSection() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            CONTACTO:
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12">
            <a 
              href="https://wa.me/5491158635024" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6" />
              </div>
              <span className="font-medium">+54 11 5863-5024</span>
            </a>
            
            <a 
              href="mailto:maria@monsegur.com"
              className="flex items-center gap-3 text-lg hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6" />
              </div>
              <span className="font-medium">maria@monsegur.com</span>
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">REDES SOCIALES:</h3>
            <div className="flex items-center justify-center gap-4">
              <a 
                href="https://linkedin.com/in/mariamonsegur/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white text-[#0077B5] rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com/monseguro/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:scale-110 transition-transform overflow-hidden"
              >
                <div className="w-full h-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center">
                  <Instagram className="h-6 w-6 text-white" />
                </div>
              </a>
              <a 
                href="https://tiktok.com/@mariamonseguro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white text-black rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
