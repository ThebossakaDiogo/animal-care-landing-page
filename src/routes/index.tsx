import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  HeartPulse,
  Leaf,
  PawPrint,
  Plus,
  ShieldCheck,
  Star,
  Wallet,
  X,
} from "lucide-react";
import dogLeft from "@/assets/dog-left.jpg";
import petsCenter from "@/assets/pets-center.jpg";
import catRight from "@/assets/cat-right.jpg";
import recipes from "@/assets/recipes.jpg";
import { Marquee, Transformation, HowItWorks, Calculator, Testimonials, Compare, Bonus } from "@/components/landing/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CozyPaws Natural — Recetas caseras para la longevidad de tu mascota" },
      {
        name: "description",
        content:
          "Cambia el pienso ultraprocesado por recetas naturales simples y seguras. Más vitalidad, apetito y años de vida para tu perro o gato.",
      },
      { property: "og:title", content: "CozyPaws Natural — Alimentación natural para tu mascota" },
      {
        property: "og:description",
        content: "Recetas caseras terapéuticas, listas en minutos, para devolver la vitalidad a tu mascota.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const btnAccent =
  "inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover";
const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover";

function Header() {
  return (
    <header className="relative z-30 flex shrink-0 items-center justify-between px-5 py-4 md:px-12 animate-fade-up">
      <a href="#" className="flex items-center gap-2 text-primary">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
          <PawPrint className="h-5 w-5" />
        </span>
        <span className="font-serif-display text-2xl">CozyPaws</span>
      </a>
      <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
        <a href="#problema" className="text-foreground">El problema</a>
        <a href="#solucao">La solución</a>
        <a href="#depoimentos">Testimonios</a>
        <a href="#planos">Planes</a>
        <a href="#faq">Preguntas</a>
      </nav>
      <a href="#planos" className={btnAccent}>Quiero empezar</a>
    </header>
  );
}

function Hero() {
  const words = [["Comida", "de", "verdad"], ["para", "vivir", "más"]];
  let i = 0;
  return (
    <section className="relative flex flex-col overflow-hidden lg:h-[calc(100svh-76px)] lg:min-h-[560px]">
      <div className="relative z-[5] shrink-0 px-5 pt-6 text-center md:px-12 lg:px-[clamp(200px,17vw,280px)] lg:pt-[clamp(12px,3vh,40px)]">
        <h1 className="font-serif-display text-[clamp(44px,min(6.2vw,10.5vh),96px)] leading-[0.95] tracking-tight text-primary">
          {words.map((line, li) => (
            <span key={li} className="block">
              {line.map((w) => {
                const d = 200 + i++ * 90;
                return (
                  <span key={w} className="mr-[0.22em] inline-block animate-word-pop" style={{ animationDelay: `${d}ms` }}>
                    {w}
                  </span>
                );
              })}
            </span>
          ))}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground animate-fade-up" style={{ animationDelay: "700ms" }}>
          El pienso ultraprocesado desgasta a tu mascota en silencio. Recetas caseras simples le devuelven la vitalidad.
        </p>
        <a href="#planos" className={`${btnAccent} mt-5 lg:hidden`}>Ver recetas <ArrowRight className="h-4 w-4" /></a>
      </div>

      <div className="absolute left-12 top-[clamp(12px,3vh,40px)] z-20 hidden w-[clamp(130px,11vw,190px)] animate-slide-in-left lg:block" style={{ animationDelay: "600ms" }}>
        <div className="relative aspect-square overflow-hidden rounded-2xl shadow-soft animate-float">
          <img src={recipes} alt="Táperes de comida natural para perros" className="h-full w-full object-cover" width={1024} height={1024} />
          <a href="#planos" className="absolute bottom-2 right-2 grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">+120 recetas caseras</p>
        <p className="text-sm font-bold text-primary">desde US$ 27</p>
      </div>
      <div className="absolute right-12 top-[clamp(12px,3vh,40px)] z-20 hidden w-[clamp(150px,12vw,200px)] animate-slide-in-right rounded-2xl bg-card p-4 text-left shadow-soft lg:block" style={{ animationDelay: "700ms" }}>
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">Listas en</p>
        <p className="font-serif-display text-4xl text-primary">15 min</p>
        <p className="mt-1 text-xs text-muted-foreground">Sin planillas, sin horas en la cocina.</p>
      </div>

      <div className="relative z-10 mt-8 flex h-[60vh] min-h-0 items-end gap-2 px-2 lg:mt-[clamp(16px,4vh,48px)] lg:h-auto lg:flex-1 lg:gap-0 lg:px-0">
        <div className="relative h-[80%] flex-1 overflow-hidden rounded-t-3xl animate-photo-reveal lg:rounded-none lg:rounded-tl-[3rem]" style={{ animationDelay: "750ms" }}>
          <img src={dogLeft} alt="Golden retriever feliz con un plato de comida natural" className="h-full w-full object-cover object-top animate-kenburns" width={768} height={1024} />
          <div className="absolute bottom-[clamp(12px,3vh,40px)] left-[clamp(12px,2vw,32px)] hidden items-center gap-3 rounded-full bg-card/90 px-4 py-2 backdrop-blur md:flex">
            <span className="font-serif-display text-3xl text-primary">32K+</span>
            <span className="text-xs leading-tight text-muted-foreground">dueños<br />felices</span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground"><Plus className="h-4 w-4" /></span>
          </div>
        </div>
        <div className="relative h-full flex-[1.265] overflow-hidden rounded-t-3xl animate-photo-reveal lg:rounded-t-[3rem]" style={{ animationDelay: "600ms" }}>
          <img src={petsCenter} alt="Perro y gato con ingredientes naturales" className="h-full w-full object-cover object-top" width={896} height={1152} />
          <div className="absolute inset-x-0 bottom-0 hidden h-1/2 bg-gradient-to-t from-primary/80 to-transparent md:block" />
          <div className="absolute inset-x-0 bottom-[clamp(12px,3vh,40px)] hidden flex-col items-center gap-3 text-center md:flex">
            <p className="font-serif-display text-[clamp(20px,min(2.2vw,4vh),38px)] leading-tight text-primary-foreground">Nutrición que sana,<br />en el plato de casa</p>
            <a href="#planos" className={`${btnAccent} animate-pulse-ring`}>Elegir mi plan <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
        <div className="relative h-[80%] flex-1 overflow-hidden rounded-t-3xl animate-photo-reveal lg:rounded-none lg:rounded-tr-[3rem]" style={{ animationDelay: "900ms" }}>
          <img src={catRight} alt="Gato sano frente a un plato de pescado y verduras" className="h-full w-full object-cover object-top animate-kenburns" width={768} height={1024} />
          <div className="absolute bottom-[clamp(12px,3vh,40px)] right-[clamp(12px,2vw,32px)] hidden items-center gap-2 rounded-full bg-card/90 px-4 py-2 backdrop-blur md:flex">
            <Star className="h-5 w-5 fill-accent text-accent" />
            <span className="font-serif-display text-3xl text-primary">4.9</span>
            <span className="text-xs text-muted-foreground">valoración</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const pains = [
  { icon: HeartPulse, t: "Culpa silenciosa", d: "Pagas caro por la “mejor marca” y descubres que llevabas años sirviendo comida ultraprocesada." },
  { icon: X, t: "Plato rechazado", d: "Falta de apetito, heces blandas, vómitos, pelo opaco que se cae, apatía todos los días." },
  { icon: Wallet, t: "Dinero sin retorno", d: "Pienso especial caro + análisis, clínicas y urgencias que nunca terminan." },
  { icon: Clock, t: "Miedo a equivocarte", d: "Temor a que falten vitaminas, usar algo tóxico o pasar horas en la cocina." },
];

function Problem() {
  return (
    <section id="problema" className="bg-primary px-5 py-24 text-primary-foreground md:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">El enemigo oculto</p>
        <h2 className="mt-3 max-w-3xl font-serif-display text-4xl leading-tight md:text-6xl">
          El pienso desgasta poco a poco los órganos de tu mascota — incluso el “premium”.
        </h2>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-primary-foreground/15 p-6">
              <Icon className="h-7 w-7 text-accent" />
              <h3 className="mt-5 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-primary-foreground/70">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const items = [
    "Recetas caseras que actúan como nutrición terapéutica",
    "Ingredientes del supermercado, nada exótico ni caro",
    "Lista clara de lo que es tóxico y nunca debe ir al plato",
    "Porciones por peso y edad, sin cálculos complicados",
  ];
  return (
    <section id="solucao" className="px-5 py-24 md:px-12">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <img src={recipes} alt="Preparación de comida natural para mascotas" loading="lazy" width={1024} height={1024} className="rounded-[2.5rem] shadow-soft" />
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">La solución sin complicaciones</p>
          <h2 className="mt-3 font-serif-display text-4xl leading-tight text-primary md:text-5xl">
            Vitalidad de vuelta en pocas semanas, desde tu propia cocina.
          </h2>
          <ul className="mt-8 space-y-4">
            {items.map((x) => (
              <li key={x} className="flex gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-secondary text-primary"><Check className="h-4 w-4" /></span>
                <span>{x}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {[["15 min", "por preparación"], ["1x", "por semana"], ["-40%", "gasto en pienso"]].map(([a, b]) => (
              <div key={b}>
                <p className="font-serif-display text-3xl text-primary">{a}</p>
                <p className="text-xs text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const plans = [
  {
    name: "Basic",
    price: "27",
    desc: "Para empezar la transición con seguridad.",
    features: ["60 recetas para perros y gatos", "Guía de transición del pienso en 7 días", "Lista de alimentos prohibidos", "Tabla de porciones por peso"],
    cta: "Quiero el Basic",
    pro: false,
  },
  {
    name: "Pro",
    price: "67",
    desc: "Nutrición terapéutica completa y acompañada.",
    features: [
      "Todo lo del Basic",
      "+120 recetas, incluidas mascotas mayores",
      "Menús para riñones, hígado, piel y digestión",
      "App CozyPaws con planificador semanal",
      "Guía de suplementación natural",
      "Grupo de apoyo con nutricionista",
    ],
    cta: "Quiero el Pro",
    pro: true,
  },
];

function Plans() {
  return (
    <section id="planos" className="bg-secondary px-5 py-24 md:px-12">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Planes</p>
        <h2 className="mt-3 font-serif-display text-4xl text-primary md:text-6xl">Elige cómo cuidar</h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">Pago único, acceso de por vida y garantía de 7 días.</p>
        <div className="mt-14 grid gap-6 text-left md:grid-cols-2">
          {plans.map((p) => (
            <div key={p.name} className={`relative flex flex-col rounded-[2rem] p-8 shadow-soft ${p.pro ? "bg-primary text-primary-foreground" : "bg-card"}`}>
              {p.pro && <span className="absolute -top-3 right-8 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">Más elegido</span>}
              <h3 className="font-serif-display text-3xl">{p.name}</h3>
              <p className={`mt-1 text-sm ${p.pro ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{p.desc}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-lg">US$</span>
                <span className="font-serif-display text-6xl">{p.price}</span>
                <span className={`text-sm ${p.pro ? "text-primary-foreground/70" : "text-muted-foreground"}`}>pago único</span>
              </p>
              <ul className="mt-8 flex-1 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-accent" />{f}</li>
                ))}
              </ul>
              <a href="#" className={`${p.pro ? btnAccent : btnPrimary} mt-8 justify-center py-4`}>{p.cta} <ArrowRight className="h-4 w-4" /></a>
            </div>
          ))}
        </div>
        <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground"><ShieldCheck className="h-4 w-4 text-primary" /> Garantía incondicional de 7 días</p>
      </div>
    </section>
  );
}

const faqs = [
  ["¿Y si falta algún nutriente?", "Todas las recetas están balanceadas e indican cuándo y cómo complementar, sin adivinar."],
  ["¿Voy a pasar horas cocinando?", "No. Preparas los táperes de la semana en una sola sesión y los congelas."],
  ["¿Sirve también para gatos?", "Sí, hay recetas específicas para gatos, que tienen necesidades distintas a las de los perros."],
  ["¿Sale más caro que el pienso?", "En la mayoría de los casos sale más barato que el pienso premium — y reduce las visitas a la clínica."],
];

function Faq() {
  return (
    <section id="faq" className="px-5 py-24 md:px-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-serif-display text-4xl text-primary md:text-5xl">Preguntas frecuentes</h2>
        <div className="mt-12 divide-y divide-border">
          {faqs.map(([q, a]) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-primary">
                {q}<Plus className="h-5 w-5 transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-3 text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-5 pb-16 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-[2.5rem] bg-primary px-6 py-16 text-center text-primary-foreground">
        <Leaf className="h-8 w-8 text-accent" />
        <h2 className="max-w-2xl font-serif-display text-4xl md:text-5xl">Cada comida puede ser un año más a su lado.</h2>
        <a href="#planos" className={btnAccent}>Empezar hoy <ArrowRight className="h-4 w-4" /></a>
      </div>
      <p className="mt-10 text-center text-xs text-muted-foreground">© 2026 CozyPaws Natural. Consulta siempre a un veterinario.</p>
    </section>
  );
}

function Index() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <Marquee />
      <Problem />
      <Transformation />
      <Solution />
      <HowItWorks />
      <Calculator />
      <Testimonials />
      <Compare />
      <Bonus />
      <Plans />
      <Faq />
      <FinalCta />
    </main>
  );
}
