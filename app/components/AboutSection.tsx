import Image from "next/image";
import { Heart, Target, UserRound } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="bg-[#07142d] py-20 text-white lg:py-28"
    >
      <div className="mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-10 xl:px-14">
        
        {/* Parte principal */}
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          
          {/* Imagen */}
          <div>
            <div className="relative h-[480px] overflow-hidden rounded-sm bg-white">
              <Image
                src="/images.png"
                alt="Zoraima Cuello"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
                className="object-cover object-[center_25%]"
              />
            </div>
          </div>

          {/* Contenido */}
          <div className="flex items-center">
            <div className="max-w-2xl">

              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#c99a4b]">
                Sobre mí
              </p>

              <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Comprometida con el servicio,
                <br />

                <span className="italic text-[#c99a4b]">
                  guiada por valores.
                </span>
              </h2>

              <p className="mt-7 text-base leading-8 text-white/75">
                Con una trayectoria vinculada al ámbito académico,
                institucional y público, he dedicado mi trabajo a impulsar
                ideas, fortalecer organizaciones y contribuir a la formación
                de líderes capaces de transformar su entorno.
              </p>

              <p className="mt-4 text-base leading-8 text-white/75">
                Mi experiencia combina docencia, asesoría estratégica,
                investigación, gestión de proyectos y participación activa
                en espacios de liderazgo y desarrollo.
              </p>

              <a
                href="#trayectoria"
                className="mt-8 inline-flex items-center gap-3 border border-white/40 px-7 py-4 text-xs font-bold uppercase tracking-wider text-white transition duration-300 hover:border-[#c99a4b] hover:bg-[#c99a4b]"
              >
                Conoce más
                <span>→</span>
              </a>

             

            </div>
          </div>
        </div>

        {/* Franja inferior */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <div className="grid gap-8 md:grid-cols-3">

            {/* Experiencia */}
            <div className="flex gap-5 md:border-r md:border-white/10 md:pr-8">
              <UserRound
                size={30}
                strokeWidth={1.4}
                className="shrink-0 text-[#c99a4b]"
              />

              <div>
                <h3 className="text-xm font-bold uppercase tracking-[0.16em] text-[#c99a4b]">
                  Experiencia
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  Más de 20 años de trayectoria en el servicio público,
                  la academia y la gestión institucional.
                </p>
              </div>
            </div>

            {/* Enfoque */}
            <div className="flex gap-5 md:border-r md:border-white/10 md:px-8">
              <Target
                size={30}
                strokeWidth={1.4}
                className="shrink-0 text-[#c99a4b]"
              />

              <div>
                <h3 className="text-xm font-bold uppercase tracking-[0.16em] text-[#c99a4b]">
                  Enfoque
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  Políticas públicas, liderazgo, educación, estrategia
                  institucional y desarrollo.
                </p>
              </div>
            </div>

            {/* Valores */}
            <div className="flex gap-5 md:pl-8">
              <Heart
                size={30}
                strokeWidth={1.4}
                className="shrink-0 text-[#c99a4b]"
              />

              <div>
                <h3 className="text-xm font-bold uppercase tracking-[0.16em] text-[#c99a4b]">
                  Valores
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  Ética, compromiso, transparencia y vocación de servicio.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* <div className="mt-10 align-center flex flex-col items-center gap-2 text-center">
            <p className="font-serif text-4xl italic text-white">
                Zoraima Cuello
            </p>

            <p className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-[#c99a4b]">
                Zoraima Cuello
            </p>
        </div> */}

      </div>
    </section>
  );
}