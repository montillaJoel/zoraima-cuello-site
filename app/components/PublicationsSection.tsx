import Image from "next/image";
import { ShoppingCart } from "lucide-react";

export default function PublicationsSection() {
  return (
    <section id="publicaciones" className="bg-[#f4f5f7] py-20 lg:py-28">
      <div className="mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-10 xl:px-14">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          {/* Portada */}
          <div className="relative mx-auto aspect-[558/1000] w-full max-w-[320px] overflow-hidden shadow-xl">
            <Image
              src="/libro.jpg"
              alt="7 Riesgos de las Redes Sociales: Ser ciudadanos en un mundo tecnológico"
              fill
              sizes="(max-width: 1024px) 60vw, 320px"
              className="object-cover"
            />
          </div>

          {/* Contenido */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#c99a4b]">
              Publicaciones
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#07142d] sm:text-5xl">
              Mi obra
              <br />
              <span className="italic text-[#c99a4b]">publicada.</span>
            </h2>

            <p className="mt-7 text-base leading-8 text-[#07142d]/70">
              <span className="font-semibold text-[#07142d]">
                7 Riesgos de las Redes Sociales: Ser ciudadanos en un mundo
                tecnológico
              </span>{" "}
              es un análisis sobre los desafíos que enfrentamos como
              sociedad frente al uso masivo de las plataformas digitales, y
              una invitación a formar ciudadanos más conscientes y
              responsables en la era de la tecnología.
            </p>

            <a
              href="https://www.amazon.com/Riesgos-las-Redes-Sociales-tecnol%C3%B3gico/dp/B0C47YRYMS/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1700782981&sr=8-1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-[#c99a4b] px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition duration-300 hover:bg-[#d6aa5e]"
            >
              <ShoppingCart size={16} />
              Comprar en Amazon
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
