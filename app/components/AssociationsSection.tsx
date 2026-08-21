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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {associations.map(({ logo, name, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar el sitio web de ${name}`}
              className="group relative overflow-hidden border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-1 hover:border-[#c99a4b]/80 hover:shadow-[0_22px_55px_rgba(0,0,0,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c99a4b]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-white">
                <Image
                  src={logo}
                  alt={name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-8 transition duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07142d]/45 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <span className="absolute right-5 top-5 grid h-11 w-11 translate-y-2 place-items-center rounded-full bg-[#c99a4b] text-[#07142d] opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <ArrowUpRight size={19} aria-hidden="true" />
                </span>
              </div>

              <div className="flex items-end justify-between gap-5 p-6">
                <p className="max-w-[18rem] text-base font-semibold leading-6 text-white/90 transition group-hover:text-white">
                  {name}
                </p>

                <span className="shrink-0 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#c99a4b]">
                  Ver sitio
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
