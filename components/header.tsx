"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Mail, Phone } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Cotiza online", href: "#cotizador" },
    { label: "Sobre mi", href: "#sobre-mi" },
    { label: "Mision", href: "#mision" },
    { label: "Productos", href: "#productos" },
    { label: "Contacto", href: "#contacto" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      {/* Top Bar */}
      <div className="border-b border-border/50">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold tracking-wide text-foreground">MON</span>
              <span className="text-2xl font-bold tracking-wide text-primary">SEGURO</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="mailto:maria@monsegur.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-4 w-4" />
              maria@monsegur.com
            </a>
            <a href="https://wa.me/5491158635024" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
              <Phone className="h-4 w-4" />
              +54 11 5863-5024
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 mx-auto">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-4 block"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://monseguro.tiendup.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-4 block"
              >
                Curso para productores
              </a>
            </li>
          </ul>

          {/* Mobile placeholder for centering */}
          <div className="md:hidden w-10" />
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block py-2 px-4 text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://monseguro.tiendup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 px-4 text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Curso para productores
                </a>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-border px-4 flex flex-col gap-2">
              <a href="mailto:maria@monsegur.com" className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                maria@monsegur.com
              </a>
              <a href="https://wa.me/5491158635024" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary font-medium">
                <Phone className="h-4 w-4" />
                +54 11 5863-5024
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
