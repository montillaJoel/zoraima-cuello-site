import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const associations = [
  {
    logo: "/pld.jpg",
    name: "Partido de la Liberación Dominicana (PLD)",
    href: "https://pld.org.do/",
  },
  {
    logo: "/aiitec.jpg",
    name: "Academia Internacional de Innovación y Tecnología",
    href: "https://www.aiiytec.org/",
  },
  {
    logo: "/aqui-entre-nos-logo.png",
    name: "Aquí Entre Nos",
    href: "https://puravidafm.net/aqui-entre-nos/",
  },
  {
    logo: "/luxor.jpg",
    name: "Luxor Consulting, LLC",
    href: "https://www.luxorconsult.com/es",
  },
  {
    logo: "/club-lectoras.jpg",
    name: "Club de Lectoras Creciendo Juntas Mujer",
    href: "https://www.clubdelectorasrd.com/",
  },
];

export default function AssociationsSection() {
  return (
    <section id="asociaciones" className="bg-[#07142d] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-10 xl:px-14">
        <div className="text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#c99a4b]">
            Asociaciones
          </p>

          <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
            Organizaciones a las que
            <br />
            <span className="italic text-[#c99a4b]">pertenezco.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {associations.map(({ logo, name, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-[#c99a4b] hover:bg-white/[0.06]"
            >
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white p-2">
                <Image
                  src={logo}
                  alt={name}
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>

              <p className="mt-6 text-sm font-semibold leading-6 text-white/85">
                {name}
              </p>

              <span className="mt-5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#c99a4b] opacity-0 transition group-hover:opacity-100">
                Visitar sitio
                <ArrowUpRight size={14} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
