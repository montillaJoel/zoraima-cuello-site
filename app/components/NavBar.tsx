"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Áreas de trabajo", href: "#areas" },
    { name: "Formación", href: "#formacion" },
    { name: "Publicaciones", href: "#publicaciones" },
    { name: "Agenda", href: "#agenda" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="relative z-50 w-full bg-[#07142d]">
      <nav className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-6 lg:px-12">

        {/* Logo */}
     <a href="#inicio" className="flex items-center">
  <Image
    src="/logo-zoraima.jpg"
    alt="Zoraima Cuello"
    width={360}
    height={100}
    priority
    className="h-auto w-[220px] object-contain sm:w-[250px] lg:w-[280px]"
  />
</a>

        {/* Desktop menu */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative py-3 text-[12px] font-semibold uppercase tracking-wide transition-colors duration-300
                ${
                  index === 0
                    ? "text-[#d4a554]"
                    : "text-white/80 hover:text-[#d4a554]"
                }
              `}
            >
              {link.name}

              {index === 0 && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#d4a554]" />
              )}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contacto"
          className="hidden items-center gap-3 rounded-sm bg-[#c99a4b] px-7 py-4 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#daa953] hover:shadow-lg lg:flex"
        >
          Conversemos
          <ArrowRight size={16} />
        </a>

        {/* Mobile button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white lg:hidden"
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#07142d] px-6 pb-8 pt-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/5 py-4 text-sm font-medium uppercase tracking-wide text-white/80 transition hover:text-[#d4a554]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contacto"
              className="mt-5 flex items-center justify-center gap-3 bg-[#c99a4b] px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white"
            >
              Conversemos
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}