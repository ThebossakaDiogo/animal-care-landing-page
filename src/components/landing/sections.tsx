import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, Check, ChefHat, Gift, Leaf, Quote, ShoppingBasket, Snowflake, Sparkles, Star, X } from "lucide-react";
import t1 from "@/assets/t-1.jpg";
import t2 from "@/assets/t-2.jpg";
import t3 from "@/assets/t-3.jpg";
import prep from "@/assets/prep.jpg";
import dogLeft from "@/assets/dog-left.jpg";
import catRight from "@/assets/cat-right.jpg";

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) {
        el.classList.add("is-visible");
        io.disconnect();
      }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [v, setV] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / 1400);
        setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

const eyebrow = "text-sm font-semibold uppercase tracking-widest text-accent";
const h2 = "mt-3 font-serif-display text-4xl leading-tight text-primary md:text-5xl";

export function Marquee() {
  const items = ["Frango", "Abóbora", "Salmão", "Cenoura", "Ovos", "Arroz integral", "Espinafre", "Batata-doce", "Brócolis", "Carne magra"];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-card py-4">
      <div className="flex w-max animate-marquee gap-10">
        {row.map((x, i) => (
          <span key={i} className="flex items-center gap-3 font-serif-display text-2xl text-primary">
            <Leaf className="h-5 w-5 text-accent" /> {x}
          </span>
        ))}
      </div>
    </div>
  );
}

const symptoms = [
  { before: "Vira a cara para o prato", after: "Espera ansioso pela refeição" },
  { before: "Pelo opaco e caindo", after: "Pelagem brilhante e macia" },
  { before: "Fezes pastosas e vômitos", after: "Digestão regular e tranquila" },
  { before: "Apatia, dorme o dia todo", after: "Energia para brincar de novo" },
];

export function Transformation() {
  const [after, setAfter] = useState(true);
  return (
    <section className="px-5 py-24 md:px-12">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className={eyebrow}>Antes e depois</p>
          <h2 className={h2}>Veja o que muda em 30 dias</h2>
          <div className="mt-8 inline-flex rounded-full bg-secondary p-1">
            {[false, true].map((v) => (
              <button
                key={String(v)}
                onClick={() => setAfter(v)}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${after === v ? "bg-primary text-primary-foreground shadow-soft" : "text-muted-foreground"}`}
              >
                {v ? "Com comida natural" : "Com ração"}
              </button>
            ))}
          </div>
          <ul className="mt-8 space-y-3">
            {symptoms.map((s, i) => (
              <li key={i} className="flex items-center gap-3 rounded-2xl bg-card p-4 shadow-soft transition-all" style={{ transitionDelay: `${i * 60}ms` }}>
                <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${after ? "bg-primary text-primary-foreground" : "bg-destructive/15 text-destructive"}`}>
                  {after ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                </span>
                <span key={String(after)} className="animate-fade-up">{after ? s.after : s.before}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={150} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-soft">
            <img src={dogLeft} alt="Cão saudável" loading="lazy" width={768} height={1024} className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${after ? "scale-100 grayscale-0" : "scale-105 grayscale brightness-75"}`} />
            <div className="absolute left-5 top-5 rounded-full bg-card/90 px-4 py-2 text-sm font-semibold text-primary backdrop-blur">
              {after ? "Dia 30 ✨" : "Dia 0"}
            </div>
          </div>
          <div className="absolute -bottom-6 -left-4 rounded-2xl bg-accent p-5 text-accent-foreground shadow-soft animate-float md:-left-8">
            <p className="font-serif-display text-4xl"><Counter to={87} suffix="%" /></p>
            <p className="text-xs">voltaram a comer com vontade<br />na 1ª semana</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const steps = [
  { icon: ShoppingBasket, t: "Compre no mercado", d: "Lista semanal pronta, com ingredientes comuns e baratos." },
  { icon: ChefHat, t: "Cozinhe 1x por semana", d: "Uma sessão de ~1h rende as marmitas de 7 dias." },
  { icon: Snowflake, t: "Porcione e congele", d: "Tabela de porções pelo peso e idade do seu pet." },
  { icon: Sparkles, t: "Sirva e acompanhe", d: "Diário de evolução para ver pele, pelo e energia mudarem." },
];

export function HowItWorks() {
  return (
    <section className="bg-primary px-5 py-24 text-primary-foreground md:px-12">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-[2.5rem]">
            <img src={prep} alt="Tutora servindo comida caseira ao cão" loading="lazy" width={1024} height={768} className="w-full animate-kenburns" />
          </div>
          <div className="pointer-events-none absolute left-[38%] top-[38%] flex gap-3">
            {[0, 1, 2].map((i) => (
              <span key={i} className="block h-12 w-3 rounded-full bg-primary-foreground/60 blur-sm animate-steam" style={{ animationDelay: `${i * 0.8}s` }} />
            ))}
          </div>
          <div className="absolute -bottom-5 right-6 flex items-center gap-2 rounded-full bg-card px-5 py-3 text-sm font-semibold text-primary shadow-soft">
            <span className="inline-block animate-wag">🐾</span> Pronto em 15 min
          </div>
        </Reveal>
        <div>
          <p className={eyebrow}>Como funciona</p>
          <h2 className="mt-3 font-serif-display text-4xl leading-tight md:text-5xl">4 passos, zero complicação</h2>
          <div className="mt-10 space-y-6">
            {steps.map(({ icon: Icon, t, d }, i) => (
              <Reveal key={t} delay={i * 120} className="group flex gap-5">
                <div className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary-foreground/10 transition-transform group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="h-6 w-6 text-accent" />
                  <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-accent text-xs font-bold text-accent-foreground">{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{t}</h3>
                  <p className="text-sm text-primary-foreground/70">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Calculator() {
  const [type, setType] = useState<"dog" | "cat">("dog");
  const [kg, setKg] = useState(12);
  const max = type === "dog" ? 50 : 10;
  const w = Math.min(kg, max);
  const grams = Math.round(w * (type === "dog" ? 25 : 40));
  const racao = Math.round(w * (type === "dog" ? 9 : 14) * 30 / 10) * 10 + 60;
  const natural = Math.round(racao * 0.62 / 10) * 10;
  return (
    <section className="px-5 py-24 md:px-12">
      <Reveal className="mx-auto max-w-5xl rounded-[2.5rem] bg-card p-8 shadow-soft md:p-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className={eyebrow}>Simulador</p>
            <h2 className={h2}>Quanto seu pet precisa?</h2>
            <div className="mt-8 flex gap-3">
              {(["dog", "cat"] as const).map((t) => (
                <button key={t} onClick={() => { setType(t); setKg(t === "dog" ? 12 : 4); }} className={`flex-1 rounded-2xl border-2 py-4 text-lg font-semibold transition-all ${type === t ? "border-accent bg-accent/10 text-primary" : "border-border text-muted-foreground"}`}>
                  {t === "dog" ? "🐶 Cão" : "🐱 Gato"}
                </button>
              ))}
            </div>
            <label className="mt-8 block text-sm font-medium text-muted-foreground">Peso: <span className="font-serif-display text-3xl text-primary">{w} kg</span></label>
            <input type="range" min={1} max={max} value={w} onChange={(e) => setKg(Number(e.target.value))} className="mt-3 w-full accent-[var(--accent)]" />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <div className="rounded-2xl bg-secondary p-6">
              <p className="text-sm text-muted-foreground">Comida natural por dia</p>
              <p className="font-serif-display text-5xl text-primary">{grams} g</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border p-5">
                <p className="text-xs text-muted-foreground">Ração premium/mês</p>
                <p className="font-serif-display text-2xl text-muted-foreground line-through">R$ {racao}</p>
              </div>
              <div className="rounded-2xl bg-primary p-5 text-primary-foreground">
                <p className="text-xs text-primary-foreground/70">Natural/mês (estimado)</p>
                <p className="font-serif-display text-2xl">R$ {natural}</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">Valores aproximados. Consulte seu veterinário.</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

const testimonials = [
  { img: t1, name: "Juliana Ramos", pet: "tutora do Thor, Golden, 9 anos", city: "Campinas, SP", text: "O Thor estava largando a ração havia meses e vivia com coceira. Em três semanas de receitas ele voltou a raspar o pote e a pele melhorou muito. A veterinária perguntou o que eu tinha mudado." },
  { img: t2, name: "Roberto Alencar", pet: "tutor da Mel, gata, 14 anos", city: "Belo Horizonte, MG", text: "A Mel já é idosa e os exames de rim preocupavam. Usei o cardápio específico do plano Pro e, no retorno, os valores estavam melhores. Ela está mais ativa do que há dois anos." },
  { img: t3, name: "Camila Duarte", pet: "tutora do Bento, Beagle, 4 anos", city: "Recife, PE", text: "Eu achava que não teria tempo. Cozinho no domingo, congelo e pronto. O Bento parou com as fezes moles e eu gasto menos do que com a ração especial que comprava." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);
  const t = testimonials[i]!;
  return (
    <section id="depoimentos" className="bg-secondary px-5 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className={eyebrow}>Depoimentos</p>
          <h2 className={h2}>Tutores que viram a diferença</h2>
          <div className="mt-4 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, k) => <Star key={k} className="h-5 w-5 fill-accent text-accent" />)}
            <span className="ml-2 text-sm text-muted-foreground">4.9 de média em <Counter to={2847} /> avaliações</span>
          </div>
        </div>
        <div key={i} className="mt-14 grid items-center gap-10 rounded-[2.5rem] bg-card p-6 shadow-soft animate-fade-up md:grid-cols-[1fr_1.4fr] md:p-10">
          <div className="overflow-hidden rounded-[2rem]">
            <img src={t.img} alt={`${t.name} com seu pet`} loading="lazy" width={816} height={816} className="aspect-square w-full object-cover" />
          </div>
          <div>
            <Quote className="h-10 w-10 text-accent" />
            <p className="mt-4 font-serif-display text-2xl leading-snug text-primary md:text-3xl">“{t.text}”</p>
            <p className="mt-6 font-semibold text-primary">{t.name}</p>
            <p className="text-sm text-muted-foreground">{t.pet} · {t.city}</p>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          {testimonials.map((x, k) => (
            <button key={x.name} onClick={() => setI(k)} aria-label={`Ver depoimento de ${x.name}`} className={`h-14 w-14 overflow-hidden rounded-full border-4 transition-all ${k === i ? "scale-110 border-accent" : "border-transparent opacity-60 hover:opacity-100"}`}>
              <img src={x.img} alt="" className="h-full w-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

const rows = [
  ["Ingredientes reconhecíveis", false, true],
  ["Sem conservantes e corantes", false, true],
  ["Alta palatabilidade", false, true],
  ["Ajustável a doenças específicas", false, true],
  ["Praticidade", true, true],
];

export function Compare() {
  return (
    <section className="px-5 py-24 md:px-12">
      <Reveal className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className={eyebrow}>Comparativo</p>
          <h2 className={h2}>Ração vs. CozyPaws</h2>
        </div>
        <div className="mt-12 overflow-hidden rounded-[2rem] bg-card shadow-soft">
          <div className="grid grid-cols-[1.6fr_1fr_1fr] bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground">
            <span />
            <span className="text-center">Ração</span>
            <span className="text-center">CozyPaws</span>
          </div>
          {rows.map(([label, a, b]) => (
            <div key={label as string} className="grid grid-cols-[1.6fr_1fr_1fr] items-center border-t border-border px-6 py-4 transition-colors hover:bg-secondary">
              <span className="text-sm font-medium">{label}</span>
              <span className="flex justify-center">{a ? <Check className="h-5 w-5 text-primary" /> : <X className="h-5 w-5 text-destructive" />}</span>
              <span className="flex justify-center">{b ? <Check className="h-5 w-5 text-accent" /> : <X className="h-5 w-5" />}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

const bonuses = [
  { t: "Guia de petiscos naturais", v: "R$ 37" },
  { t: "Lista de 50 alimentos tóxicos", v: "R$ 19" },
  { t: "Receitas para datas especiais", v: "R$ 27" },
];

export function Bonus() {
  return (
    <section className="px-5 pb-24 md:px-12">
      <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-[2.5rem] bg-accent p-8 text-accent-foreground md:grid-cols-[1fr_1.3fr] md:p-12">
        <div className="relative mx-auto w-full max-w-xs">
          <img src={catRight} alt="Gato saboreando refeição natural" loading="lazy" width={768} height={1024} className="aspect-square w-full rounded-[2rem] object-cover animate-float" />
          <span className="absolute -right-3 -top-3 grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground animate-pulse-ring"><Gift className="h-7 w-7" /></span>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest">Bônus exclusivos</p>
          <h2 className="mt-3 font-serif-display text-4xl leading-tight md:text-5xl">Garantindo hoje, você leva também</h2>
          <ul className="mt-8 space-y-3">
            {bonuses.map((b, i) => (
              <Reveal key={b.t} delay={i * 100} className="flex items-center justify-between rounded-2xl bg-accent-foreground/15 px-5 py-4">
                <span className="flex items-center gap-3 font-medium"><Gift className="h-5 w-5" />{b.t}</span>
                <span className="text-sm line-through opacity-80">{b.v}</span>
              </Reveal>
            ))}
          </ul>
          <a href="#planos" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover">
            Ver planos <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
