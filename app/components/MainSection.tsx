import NavBar from "@/app/components/NavBar";
import Image from "next/image";

export default function MainSection() {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-[#07142d] text-white"
    >
    

      <div className="mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-10 xl:px-14">
        
        {/* Hero principal */}
        <div className="grid min-h-[620px] lg:grid-cols-[1.05fr_0.95fr]">
          
          {/* Lado izquierdo */}
          <div className="relative flex items-center py-12 lg:pr-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.04),_transparent_60%)]" />

            <div className="relative z-10 max-w-[610px]">
              
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[#c99a4b] sm:text-sm">
                Liderazgo • Estrategia • Transformación
              </p>

              <h1 className="font-serif text-5xl leading-[1.03] sm:text-6xl lg:text-[4.6rem]">
                Ideas que
                <br />
                inspiran.
                <br />
                Estrategias que
                <br />

                <span className="italic text-[#c99a4b]">
                  transforman.
                </span>
              </h1>

              <p className="mt-8 max-w-[560px] text-base leading-8 text-white/75">
                Asesora, académica y líder comprometida con el desarrollo
                institucional, la formación de líderes y la transformación
                de nuestro país.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#sobre-mi"
                  className="inline-flex items-center justify-center gap-3 bg-[#c99a4b] px-8 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#d6aa5e]"
                >
                  Conoce más sobre mí
                  <span>→</span>
                </a>

                <a
                  href="#areas"
                  className="inline-flex items-center justify-center border border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:border-[#c99a4b] hover:text-[#c99a4b]"
                >
                  Ver áreas de trabajo
                </a>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative min-h-[520px] overflow-hidden lg:min-h-[620px]">
            <Image
              src="/banner.png"
              alt="Zoraima Cuello"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover object-[center_20%]"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#07142d]/25 via-transparent to-transparent" />
          </div>
        </div>

        {/* Roles al fondo */}
        <div className="grid border-t border-white/10 py-8 md:grid-cols-3">

          {/* Maestra */}
          <div className="flex gap-5 py-5 md:border-r md:border-white/10 md:pr-8">
            <div className="text-2xl text-[#c99a4b]">
              ♢
            </div>

            <div>
              <h3 className="text-xm font-bold uppercase tracking-[0.16em] text-[#c99a4b]">
                Maestra
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/60">
                Formación y educación para el liderazgo.
              </p>
            </div>
          </div>

          {/* Asesora */}
          <div className="flex gap-5 py-5 md:border-r md:border-white/10 md:px-8">
            <div className="text-2xl text-[#c99a4b]">
              ♙
            </div>

            <div>
              <h3 className="text-xm font-bold uppercase tracking-[0.16em] text-[#c99a4b]">
                Asesora
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/60">
                Estrategias para instituciones y organizaciones.
              </p>
            </div>
          </div>

          {/* Figura pública */}
          <div className="flex gap-5 py-5 md:pl-8">
            <div className="text-2xl text-[#c99a4b]">
              ◇
            </div>

            <div>
              <h3 className="text-xm font-bold uppercase tracking-[0.16em] text-[#c99a4b]">
                Figura pública
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/60">
                Voz activa en el ámbito político y social.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}