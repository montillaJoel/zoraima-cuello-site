import { Landmark, Users, FileText, Megaphone } from "lucide-react";

const areas = [
  {
    icon: Landmark,
    iconBg: "bg-[#07142d]",
    title: "Asesoría institucional",
    description:
      "Acompañamiento estratégico a instituciones públicas y privadas para fortalecer su gestión y generar impacto.",
  },
  {
    icon: Users,
    iconBg: "bg-[#c99a4b]",
    title: "Formación y Docencia",
    description:
      "Diseño e impartición de programas formativos para líderes y equipos comprometidos con la transformación.",
  },
  {
    icon: FileText,
    iconBg: "bg-[#07142d]",
    title: "Políticas Públicas",
    description:
      "Análisis, diseño e implementación de políticas públicas orientadas al bienestar social y al desarrollo sostenible.",
  },
  {
    icon: Megaphone,
    iconBg: "bg-[#c99a4b]",
    title: "Participación Pública",
    description:
      "Voz activa en espacios de discusión y decisión para promover una sociedad más justa, inclusiva y participativa.",
  },
];

export default function AreasSection() {
  return (
    <section id="areas" className="bg-[#f4f5f7] py-20 lg:py-28">
      <div className="mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-10 xl:px-14">
        <div className="text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#c99a4b]">
            Áreas de trabajo
          </p>

          <h2 className="font-serif text-4xl leading-tight text-[#07142d] sm:text-5xl">
            ¿Cómo puedo aportar?
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map(({ icon: Icon, iconBg, title, description }) => (
            <div
              key={title}
              className="flex flex-col bg-white p-8 shadow-sm transition duration-300 hover:shadow-md"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-full ${iconBg}`}
              >
                <Icon size={26} strokeWidth={1.6} className="text-white" />
              </div>

              <h3 className="mt-6 text-sm font-bold uppercase tracking-[0.1em] text-[#07142d]">
                {title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-6 text-[#07142d]/60">
                {description}
              </p>

              <a
                href="#contacto"
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c99a4b] transition hover:text-[#07142d]"
              >
                Saber más
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
