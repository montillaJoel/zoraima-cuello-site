"use client";

import { useEffect, useState, type MouseEvent as ReactMouseEvent } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

import Image from "next/image";

const links = [
  { name: "Inicio", href: "#inicio" },
  { name: "Sobre mí", href: "#sobre-mi" },
  { name: "Áreas de trabajo", href: "#areas" },
  { name: "Asociaciones", href: "#asociaciones" },
  { name: "Publicaciones", href: "#publicaciones" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [pressedSection, setPressedSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navigateToSection = (
    event: ReactMouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    const sectionId = href.slice(1);
    const section = document.getElementById(sectionId);
    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    setActiveSection(sectionId);
    setPressedSection(sectionId);
    setMenuOpen(false);
    window.setTimeout(() => setPressedSection(null), 450);

    section.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#07142d] shadow-lg shadow-black/10">
      <nav className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-6 lg:px-12">

        {/* Logo */}
     <a
       href="#inicio"
       onClick={(event) => navigateToSection(event, "#inicio")}
       className="flex items-center transition duration-300 active:scale-95"
     >
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
          {links.map((link) => {
            const isActive = activeSection === link.href.slice(1);

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(event) => navigateToSection(event, link.href)}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-3 text-[12px] font-semibold uppercase tracking-wide transition-all duration-300
                  ${
                    isActive
                      ? "text-[#d4a554] drop-shadow-[0_0_10px_rgba(212,165,84,0.35)]"
                      : "text-white/80 hover:text-[#d4a554]"
                  }
                  ${pressedSection === link.href.slice(1) ? "scale-90" : "scale-100"}
                `}
              >
                {link.name}

                <span
                  className={`absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[#d4a554] transition-transform duration-300 ease-out ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <a
          href="mailto:zoraima.cuello@luxorconsult.com?subject=Contacto%20desde%20el%20sitio%20web"
          className="hidden items-center gap-3 rounded-sm bg-[#c99a4b] px-7 py-4 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#daa953] hover:shadow-lg lg:flex"
        >
          Conversemos
          <ArrowRight size={16} />
        </a>

        {/* Mobile button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative flex h-7 w-7 items-center justify-center text-white lg:hidden"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <Menu
            size={28}
            className={`absolute transition-all duration-300 ease-in-out ${
              menuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
            }`}
          />
          <X
            size={28}
            className={`absolute transition-all duration-300 ease-in-out ${
              menuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#07142d] transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 px-6 pb-8 pt-4">
          {links.map((link) => {
            const isActive = activeSection === link.href.slice(1);

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(event) => navigateToSection(event, link.href)}
                aria-current={isActive ? "page" : undefined}
                className={`border-b py-4 pl-4 text-sm font-medium uppercase tracking-wide transition-all duration-300 ${
                  isActive
                    ? "border-[#d4a554]/60 bg-white/[0.04] text-[#d4a554]"
                    : "border-white/5 text-white/80 hover:pl-6 hover:text-[#d4a554]"
                } ${pressedSection === link.href.slice(1) ? "scale-[0.98]" : "scale-100"}`}
              >
                {link.name}
              </a>
            );
          })}

          <a
            href="mailto:zoraima.cuello@luxorconsult.com?subject=Contacto%20desde%20el%20sitio%20web"
            onClick={() => setMenuOpen(false)}
            className="mt-5 flex items-center justify-center gap-3 bg-[#c99a4b] px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#daa953]"
          >
            Conversemos
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
