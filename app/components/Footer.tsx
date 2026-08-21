"use client";

import { Quote } from "lucide-react";

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100055376748361",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/zoraimacuello/?hl=es",
    path: "M12 2.2c2.67 0 2.99.01 4.04.06 1.05.05 1.77.22 2.4.46.65.25 1.2.6 1.75 1.15.55.55.9 1.1 1.15 1.75.24.63.41 1.35.46 2.4.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.05 1.05-.22 1.77-.46 2.4a4.9 4.9 0 0 1-1.15 1.75 4.9 4.9 0 0 1-1.75 1.15c-.63.24-1.35.41-2.4.46-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-1.05-.05-1.77-.22-2.4-.46a4.9 4.9 0 0 1-1.75-1.15 4.9 4.9 0 0 1-1.15-1.75c-.24-.63-.41-1.35-.46-2.4C2.21 14.99 2.2 14.67 2.2 12s.01-2.99.06-4.04c.05-1.05.22-1.77.46-2.4.25-.65.6-1.2 1.15-1.75a4.9 4.9 0 0 1 1.75-1.15c.63-.24 1.35-.41 2.4-.46C9.01 2.21 9.33 2.2 12 2.2Zm0 1.8c-2.63 0-2.92.01-3.95.06-.86.04-1.32.18-1.63.3-.41.16-.7.35-1.01.66-.31.31-.5.6-.66 1.01-.12.31-.26.77-.3 1.63-.05 1.03-.06 1.32-.06 3.95s.01 2.92.06 3.95c.04.86.18 1.32.3 1.63.16.41.35.7.66 1.01.31.31.6.5 1.01.66.31.12.77.26 1.63.3 1.03.05 1.32.06 3.95.06s2.92-.01 3.95-.06c.86-.04 1.32-.18 1.63-.3.41-.16.7-.35 1.01-.66.31-.31.5-.6.66-1.01.12-.31.26-.77.3-1.63.05-1.03.06-1.32.06-3.95s-.01-2.92-.06-3.95c-.04-.86-.18-1.32-.3-1.63a2.72 2.72 0 0 0-.66-1.01 2.72 2.72 0 0 0-1.01-.66c-.31-.12-.77-.26-1.63-.3-1.03-.05-1.32-.06-3.95-.06Zm0 3.06a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.13-2a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/zoraima-cuello-7a62ba93/",
    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.44v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z",
  },

  {
    name: "X",
    href: "https://x.com/ZoraimaCuello",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#07142d] text-white">
      <div className="mx-auto max-w-[1380px] px-6 py-16 sm:px-8 lg:px-10 xl:px-14">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr_0.7fr]">
          {/* Cita */}
          <div>
            <Quote size={28} strokeWidth={1.4} className="text-[#c99a4b]" />

            <p className="mt-4 font-serif text-2xl italic leading-snug text-white/90">
              El verdadero liderazgo se mide por la capacidad de servir,
              inspirar y dejar huellas que transformen generaciones.
            </p>

            <p className="mt-5 font-serif text-2xl italic text-[#c99a4b]">
              Zoraima Cuello
            </p>
          </div>

        

          {/* Redes */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c99a4b]">
              Sígueme
            </p>

            <div className="mt-6 flex gap-3">
              {socials.map(({ name, href, path }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition duration-300 hover:border-[#c99a4b] hover:text-[#c99a4b]"
                >
                  <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden="true">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Zoraima Cuello. Todos los derechos reservados.</p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-[#c99a4b]">
              Política de privacidad
            </a>
            <a href="#" className="transition hover:text-[#c99a4b]">
              Términos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
