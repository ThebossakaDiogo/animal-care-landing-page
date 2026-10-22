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
      { title: "CozyPaws Natural — Receitas caseiras para a longevidade do seu pet" },
      {
        name: "description",
        content:
          "Troque a ração ultraprocessada por receitas naturais simples e seguras. Mais vitalidade, apetite e anos de vida para seu cão ou gato.",
      },
      { property: "og:title", content: "CozyPaws Natural — Alimentação natural para seu pet" },
      {
        property: "og:description",
        content: "Receitas caseiras terapêuticas, prontas em minutos, para devolver a vitalidade do seu pet.",
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
        <a href="#problema" className="text-foreground">O problema</a>
        <a href="#solucao">A solução</a>
        <a href="#depoimentos">Depoimentos</a>
        <a href="#planos">Planos</a>
        <a href="#faq">Dúvidas</a>
      </nav>
      <a href="#planos" className={btnAccent}>Quero começar</a>
    </header>
  );
}

function Hero() {
  const words = [["Comida", "de", "verdade"], ["para", "viver", "mais"]];
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
          A ração ultraprocessada desgasta seu pet em silêncio. Receitas caseiras simples devolvem a vitalidade.
        </p>
        <a href="#planos" className={`${btnAccent} mt-5 lg:hidden`}>Ver receitas <ArrowRight className="h-4 w-4" /></a>
      </div>

      <div className="absolute left-12 top-[clamp(12px,3vh,40px)] z-20 hidden w-[clamp(130px,11vw,190px)] animate-slide-in-left lg:block" style={{ animationDelay: "600ms" }}>
        <div className="relative aspect-square overflow-hidden rounded-2xl shadow-soft animate-float">
          <img src={recipes} alt="Marmitas de comida natural para cães" className="h-full w-full object-cover" width={1024} height={1024} />
          <a href="#planos" className="absolute bottom-2 right-2 grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">+120 receitas caseiras</p>
        <p className="text-sm font-bold text-primary">a partir de R$ 27</p>
      </div>
      <div className="absolute right-12 top-[clamp(12px,3vh,40px)] z-20 hidden w-[clamp(150px,12vw,200px)] animate-slide-in-right rounded-2xl bg-card p-4 text-left shadow-soft lg:block" style={{ animationDelay: "700ms" }}>
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">Prontas em</p>
        <p className="font-serif-display text-4xl text-primary">15 min</p>
        <p className="mt-1 text-xs text-muted-foreground">Sem planilhas, sem horas na cozinha.</p>
      </div>

      <div className="relative z-10 mt-8 flex h-[60vh] min-h-0 items-end gap-2 px-2 lg:mt-[clamp(16px,4vh,48px)] lg:h-auto lg:flex-1 lg:gap-0 lg:px-0">
        <div className="relative h-[80%] flex-1 overflow-hidden rounded-t-3xl animate-photo-reveal lg:rounded-none lg:rounded-tl-[3rem]" style={{ animationDelay: "750ms" }}>
          <img src={dogLeft} alt="Golden retriever feliz com tigela de comida natural" className="h-full w-full object-cover object-top animate-kenburns" width={768} height={1024} />
          <div className="absolute bottom-[clamp(12px,3vh,40px)] left-[clamp(12px,2vw,32px)] hidden items-center gap-3 rounded-full bg-card/90 px-4 py-2 backdrop-blur md:flex">
            <span className="font-serif-display text-3xl text-primary">32K+</span>
            <span className="text-xs leading-tight text-muted-foreground">tutores<br />transformados</span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground"><Plus className="h-4 w-4" /></span>
          </div>
        </div>
        <div className="relative h-full flex-[1.265] overflow-hidden rounded-t-3xl animate-photo-reveal lg:rounded-t-[3rem]" style={{ animationDelay: "600ms" }}>
          <img src={petsCenter} alt="Cão e gato com ingredientes naturais" className="h-full w-full object-cover object-top" width={896} height={1152} />
          <div className="absolute inset-x-0 bottom-0 hidden h-1/2 bg-gradient-to-t from-primary/80 to-transparent md:block" />
          <div className="absolute inset-x-0 bottom-[clamp(12px,3vh,40px)] hidden flex-col items-center gap-3 text-center md:flex">
            <p className="font-serif-display text-[clamp(20px,min(2.2vw,4vh),38px)] leading-tight text-primary-foreground">Nutrição que cura,<br />no prato de casa</p>
            <a href="#planos" className={`${btnAccent} animate-pulse-ring`}>Escolher meu plano <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
        <div className="relative h-[80%] flex-1 overflow-hidden rounded-t-3xl animate-photo-reveal lg:rounded-none lg:rounded-tr-[3rem]" style={{ animationDelay: "900ms" }}>
          <img src={catRight} alt="Gato saudável diante de tigela com peixe e legumes" className="h-full w-full object-cover object-top animate-kenburns" width={768} height={1024} />
          <div className="absolute bottom-[clamp(12px,3vh,40px)] right-[clamp(12px,2vw,32px)] hidden items-center gap-2 rounded-full bg-card/90 px-4 py-2 backdrop-blur md:flex">
            <Star className="h-5 w-5 fill-accent text-accent" />
            <span className="font-serif-display text-3xl text-primary">4.9</span>
            <span className="text-xs text-muted-foreground">avaliação</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const pains = [
  { icon: HeartPulse, t: "Culpa silenciosa", d: "Você paga caro na “melhor marca” e descobre que estava servindo comida ultraprocessada por anos." },
  { icon: X, t: "Prato rejeitado", d: "Falta de apetite, fezes pastosas, vômitos, pelo opaco e caindo, apatia todos os dias." },
  { icon: Wallet, t: "Dinheiro sem retorno", d: "Ração especial cara + exames, clínicas e emergências que nunca terminam." },
  { icon: Clock, t: "Medo de errar", d: "Receio de faltar vitaminas, usar algo tóxico ou passar horas na cozinha." },
];

function Problem() {
  return (
    <section id="problema" className="bg-primary px-5 py-24 text-primary-foreground md:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">O inimigo oculto</p>
        <h2 className="mt-3 max-w-3xl font-serif-display text-4xl leading-tight md:text-6xl">
          A ração desgasta os órgãos do seu pet aos poucos — mesmo a “premium”.
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
    "Receitas caseiras que agem como nutrição terapêutica",
    "Ingredientes de mercado, sem nada exótico ou caro",
    "Lista clara do que é tóxico e nunca deve ir ao prato",
    "Porções por peso e idade, sem cálculo complicado",
  ];
  return (
    <section id="solucao" className="px-5 py-24 md:px-12">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <img src={recipes} alt="Preparo de comida natural para pets" loading="lazy" width={1024} height={1024} className="rounded-[2.5rem] shadow-soft" />
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">A solução descomplicada</p>
          <h2 className="mt-3 font-serif-display text-4xl leading-tight text-primary md:text-5xl">
            Vitalidade de volta em poucas semanas, com a sua própria cozinha.
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
            {[["15 min", "por preparo"], ["1x", "por semana"], ["-40%", "gasto com ração"]].map(([a, b]) => (
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
    desc: "Para começar a transição com segurança.",
    features: ["60 receitas para cães e gatos", "Guia de transição da ração em 7 dias", "Lista de alimentos proibidos", "Tabela de porções por peso"],
    cta: "Quero o Basic",
    pro: false,
  },
  {
    name: "Pro",
    price: "67",
    desc: "Nutrição terapêutica completa e acompanhada.",
    features: [
      "Tudo do Basic",
      "+120 receitas, incluindo pets idosos",
      "Cardápios para rins, fígado, pele e digestão",
      "Planner semanal de marmitas (preparo 1x por semana)",
      "Guia de suplementação natural",
      "Grupo de suporte com nutricionista",
    ],
    cta: "Quero o Pro",
    pro: true,
  },
];

function Plans() {
  return (
    <section id="planos" className="bg-secondary px-5 py-24 md:px-12">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Planos</p>
        <h2 className="mt-3 font-serif-display text-4xl text-primary md:text-6xl">Escolha como cuidar</h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">Pagamento único, acesso vitalício e garantia de 7 dias.</p>
        <div className="mt-14 grid gap-6 text-left md:grid-cols-2">
          {plans.map((p) => (
            <div key={p.name} className={`relative flex flex-col rounded-[2rem] p-8 shadow-soft ${p.pro ? "bg-primary text-primary-foreground" : "bg-card"}`}>
              {p.pro && <span className="absolute -top-3 right-8 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">Mais escolhido</span>}
              <h3 className="font-serif-display text-3xl">{p.name}</h3>
              <p className={`mt-1 text-sm ${p.pro ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{p.desc}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-lg">R$</span>
                <span className="font-serif-display text-6xl">{p.price}</span>
                <span className={`text-sm ${p.pro ? "text-primary-foreground/70" : "text-muted-foreground"}`}>pagamento único</span>
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
        <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground"><ShieldCheck className="h-4 w-4 text-primary" /> Garantia incondicional de 7 dias</p>
      </div>
    </section>
  );
}

const faqs = [
  ["E se faltar algum nutriente?", "Todas as receitas são balanceadas e indicam quando e como complementar, sem adivinhação."],
  ["Vou passar horas cozinhando?", "Não. Você prepara as marmitas da semana em uma única sessão e congela."],
  ["Serve para gatos também?", "Sim, há receitas específicas para gatos, que têm necessidades diferentes dos cães."],
  ["Fica mais caro que ração?", "Na maioria dos casos sai mais barato que rações premium — e reduz idas à clínica."],
];

function Faq() {
  return (
    <section id="faq" className="px-5 py-24 md:px-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-serif-display text-4xl text-primary md:text-5xl">Dúvidas comuns</h2>
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
        <h2 className="max-w-2xl font-serif-display text-4xl md:text-5xl">Cada refeição pode ser um ano a mais ao lado dele.</h2>
        <a href="#planos" className={btnAccent}>Começar hoje <ArrowRight className="h-4 w-4" /></a>
      </div>
      <p className="mt-10 text-center text-xs text-muted-foreground">© 2026 CozyPaws Natural. Consulte sempre um médico-veterinário.</p>
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
