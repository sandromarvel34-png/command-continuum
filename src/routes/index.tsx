import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpenCheck,
  Check,
  CircuitBoard,
  FileBadge2,
  GraduationCap,
  MonitorPlay,
  PlayCircle,
  ShieldCheck,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logoExpert from "@/assets/logo-comandos-expert.png";
import professor from "@/assets/professor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Método Comandos Elétricos Expert | Oferta Especial" },
      {
        name: "description",
        content:
          "Oferta especial do Método Comandos Elétricos Expert para clientes do Livro Comandos Elétricos.",
      },
    ],
  }),
  component: UpsellPage,
});

const CHECKOUT_URL = "#oferta";
const DECLINE_URL = "https://huggy-happy-times.lovable.app/";

const methodLevels = [
  {
    number: "01",
    title: "Fundamentos",
    text: "Construa a base para compreender a lógica dos comandos sem depender de memorização.",
    modules: ["A Base"],
  },
  {
    number: "02",
    title: "Equipamentos e componentes",
    text: "Entenda como os principais elementos trabalham antes de partir para os circuitos.",
    modules: ["Proteções Ativas", "Motores", "Transformadores", "Dispositivos"],
  },
  {
    number: "03",
    title: "Aplicação industrial",
    text: "Conecte os componentes aos circuitos, partidas e acionamentos usados na prática.",
    modules: ["Diagramas e Chaves de Partida", "Inversores de Frequência"],
  },
  {
    number: "04",
    title: "Nível Expert",
    text: "Integre o conhecimento para analisar circuitos, desenvolver projetos e diagnosticar falhas.",
    modules: ["Projetos e Diagnóstico"],
  },
];

const learnings = [
  {
    icon: CircuitBoard,
    title: "Ler e interpretar diagramas",
    text: "Entender a lógica dos circuitos de força e comando e acompanhar a sequência de funcionamento.",
  },
  {
    icon: Wrench,
    title: "Compreender e aplicar dispositivos",
    text: "Relacionar contatores, relés, botoeiras, temporizadores, sinalização e proteções às funções que exercem no circuito.",
  },
  {
    icon: Zap,
    title: "Entender motores e transformadores",
    text: "Estudar ligações, funcionamento e aplicações de motores e transformadores usados em comandos elétricos.",
  },
  {
    icon: PlayCircle,
    title: "Analisar chaves de partida",
    text: "Acompanhar a lógica de partida direta, reversão, estrela-triângulo, Dahlander, sequenciais, intertravamentos e freio magnético.",
  },
  {
    icon: MonitorPlay,
    title: "Trabalhar com inversores de frequência",
    text: "Compreender parametrização, rampas, torque e comandos aplicados aos inversores de frequência.",
  },
  {
    icon: ShieldCheck,
    title: "Estruturar projetos e diagnóstico",
    text: "Integrar os conteúdos para analisar circuitos, desenvolver projetos e investigar falhas de forma organizada.",
  },
];

const bonuses = [
  {
    icon: FileBadge2,
    title: "Certificação em LIDE – Comandos Elétricos",
    text: "Certificação complementar em LIDE – Comandos Elétricos com carga horária de 40 horas.",
  },
  {
    icon: GraduationCap,
    title: "Eletrotécnica Aplicada em Comandos Elétricos",
    text: "Curso complementar para reforçar os fundamentos de eletrotécnica diretamente ligados aos comandos elétricos.",
  },
  {
    icon: CircuitBoard,
    title: "Programas Simuladores de Circuitos",
    text: "Ferramentas para testar circuitos e visualizar o funcionamento dos comandos durante os estudos.",
  },
];

const faqs = [
  {
    q: "Quanto tempo terei acesso ao Método?",
    a: "O período de acesso é o informado na oferta desta página.",
  },
  {
    q: "O treinamento possui certificado?",
    a: "Sim. O Método possui certificado de conclusão, disponibilizado conforme os critérios de conclusão do treinamento.",
  },
  {
    q: "Preciso já trabalhar com comandos elétricos?",
    a: "Não. A sequência começa pelos fundamentos e avança progressivamente até aplicações, projetos e diagnóstico de falhas.",
  },
  {
    q: "O Método substitui o livro?",
    a: "Não. O livro funciona como referência técnica de consulta. O Método acrescenta uma sequência guiada em vídeo, aplicações e exercícios para aprofundar o estudo.",
  },
];

function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={
        dark
          ? "inline-flex rounded-full border border-white/[0.15] bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/[0.75]"
          : "inline-flex rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary"
      }
    >
      {children}
    </span>
  );
}

function CourseLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center ${className}`}>
      <img
        src={logoExpert}
        alt="Curso Comandos Elétricos Expert v5.0"
        width={965}
        height={326}
        className="block h-auto w-full max-w-[560px] object-contain"
      />
    </div>
  );
}

function BuyButton() {
  return (
    <Button
      asChild
      className="h-auto w-full rounded-2xl bg-cta px-6 py-5 text-base font-extrabold text-navy shadow-lg hover:bg-cta/90 sm:text-lg"
    >
      <a href={CHECKOUT_URL}>
        SIM, QUERO ADICIONAR O MÉTODO
        <ArrowRight className="size-5" />
      </a>
    </Button>
  );
}

function DeclineLink() {
  return (
    <a
      href={DECLINE_URL}
      className="block text-center text-[15px] text-muted-foreground underline-offset-4 hover:underline"
    >
      Não, quero continuar sem o treinamento
    </a>
  );
}

function ProductMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="absolute -inset-8 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
      <div className="relative rounded-[28px] border border-white/[0.15] bg-[#09182e] p-3 shadow-2xl">
        <div className="overflow-hidden rounded-[20px] border border-white/10 bg-white">
          <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
            <span className="size-2 rounded-full bg-slate-300" />
            <span className="size-2 rounded-full bg-slate-300" />
            <span className="size-2 rounded-full bg-slate-300" />
            <span className="ml-2 text-xs font-semibold text-slate-500">Área de membros</span>
          </div>
          <div className="grid min-h-[310px] grid-cols-[110px_1fr] sm:grid-cols-[145px_1fr]">
            <div className="border-r border-slate-200 bg-[#0b1f3a] p-3">
              <div className="space-y-2">
                {["Base", "Motores", "Diagramas", "Inversores", "Diagnóstico"].map((item, index) => (
                  <div
                    key={item}
                    className={
                      index === 2
                        ? "rounded-lg bg-white/15 px-3 py-2 text-[11px] font-semibold text-white"
                        : "rounded-lg px-3 py-2 text-[11px] font-medium text-white/[0.55]"
                    }
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 sm:p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Trilha Expert</p>
              <p className="mt-2 font-display text-2xl font-extrabold leading-none text-slate-900 sm:text-3xl">
                Diagramas e Chaves de Partida
              </p>
              <div className="mt-4 flex aspect-video items-center justify-center rounded-xl bg-[#0b1f3a] technical-grid">
                <span className="flex size-14 items-center justify-center rounded-full bg-cta text-navy shadow-lg">
                  <PlayCircle className="size-7" />
                </span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {["Aula", "Exercício", "Aplicação"].map((item) => (
                  <div key={item} className="rounded-lg bg-slate-100 px-2 py-2 text-center text-[10px] font-semibold text-slate-600">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mt-5 ml-auto mr-3 w-[58%] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Award className="size-5" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">Certificação</p>
            <p className="font-display text-xl font-extrabold leading-none text-slate-900">Certificação</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoCard({
  name,
  title,
  embedUrl,
}: {
  name: string;
  title: string;
  embedUrl: string;
}) {
  return (
    <article className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
      <div className="aspect-video bg-slate-100">
        <iframe
          src={embedUrl}
          title={title}
          loading="lazy"
          className="h-full w-full"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          sandbox="allow-scripts allow-same-origin allow-presentation"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <div className="p-5">
        <p className="font-semibold text-foreground">{name}</p>
        <p className="mt-1 text-[15px] text-muted-foreground">{title}</p>
      </div>
    </article>
  );
}

function UpsellPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* HERO */}
      <section className="navy-panel technical-grid relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
            <div>
              <CourseLogo className="max-w-[470px]" />
              <div className="mt-7">
                <SectionLabel dark>Pedido do livro confirmado</SectionLabel>
              </div>

              <h1 className="mt-6 max-w-3xl font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-white sm:text-6xl">
                Aprenda a aplicar comandos elétricos passo a passo —
                <span className="block text-[#63b3ff]">da leitura do diagrama ao diagnóstico de falhas.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-white/[0.78]">
                Acrescente ao seu pedido uma formação em vídeo que organiza componentes, motores,
                chaves de partida, inversores, projetos e diagnóstico em uma sequência guiada.
              </p>

              <div className="mt-7 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-4 border-y border-white/[0.15] py-5 sm:grid-cols-4">
                <div>
                  <p className="font-display text-3xl font-extrabold text-white">100h</p>
                  <p className="text-[13px] text-white/60">certificação</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-extrabold text-white">36 meses</p>
                  <p className="text-[13px] text-white/60">de acesso</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-extrabold text-white">16.843</p>
                  <p className="text-[13px] text-white/60">alunos</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-extrabold text-white">30 dias</p>
                  <p className="text-[13px] text-white/60">de garantia</p>
                </div>
              </div>

              <div className="mt-8 max-w-xl">
                <div className="rounded-3xl border border-white/[0.15] bg-white/[0.08] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/60">
                    Condição especial desta etapa
                  </p>
                  <p className="mt-2 font-display text-5xl font-extrabold leading-none text-white">R$ 197</p>
                  <p className="mt-2 text-[15px] text-white/[0.65]">
                    disponível após a compra do livro
                  </p>
                </div>
                <div className="mt-4">
                  <BuyButton />
                  <div className="mt-4 [&_a]:text-white/[0.55]">
                    <DeclineLink />
                  </div>
                </div>
              </div>
            </div>

            <ProductMockup />
          </div>
        </div>
      </section>

      {/* TRANSFORMAÇÃO + PROVA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <SectionLabel>O que muda com o Método</SectionLabel>
              <h2 className="mt-5 font-display text-4xl font-extrabold leading-none sm:text-5xl">
                Do estudo solto para uma sequência que conecta teoria, circuito e diagnóstico
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl border border-border bg-slate-50 p-5">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">Sem uma sequência</p>
                  <p className="mt-2 text-[17px] leading-relaxed">
                    Você estuda componentes, diagramas e partidas separadamente e precisa montar sozinho a relação entre os assuntos.
                  </p>
                </div>
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">Com o Método</p>
                  <p className="mt-2 text-[17px] leading-relaxed">
                    Você acompanha uma progressão que parte da base, passa pela aplicação industrial e chega a projetos e diagnóstico de falhas.
                  </p>
                </div>
              </div>
            </div>

            <VideoCard
              name="Bras Junior"
              title="Aluno do Comandos Elétricos Expert"
              embedUrl="https://www.youtube-nocookie.com/embed/XFL2DMTHFvQ?rel=0&playsinline=1"
            />
          </div>
        </div>
      </section>

      {/* METODOLOGIA */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Metodologia do curso</SectionLabel>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-none sm:text-5xl">
              Do fundamento ao diagnóstico em uma progressão lógica
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground">
              O conteúdo não é apresentado como aulas isoladas. A metodologia organiza a formação em níveis,
              fazendo cada etapa preparar o aluno para a próxima.
            </p>
          </div>

          <div className="relative mt-14">
            <div
              className="absolute left-6 right-6 top-6 hidden h-px bg-primary/25 lg:block"
              aria-hidden="true"
            />
            <div className="grid gap-6 lg:grid-cols-4">
              {methodLevels.map((level, index) => (
                <article key={level.number} className="relative">
                  <div className="relative z-10 flex items-center gap-4 lg:flex-col lg:items-start">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-navy font-display text-xl font-extrabold text-white ring-8 ring-slate-50">
                      {level.number}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                      Nível {index + 1}
                    </span>
                  </div>

                  <div className="mt-5 border-l-2 border-primary/20 pl-6 lg:border-l-0 lg:pl-0">
                    <h3 className="font-display text-3xl font-extrabold leading-none">{level.title}</h3>
                    <p className="mt-3 text-[17px] leading-relaxed text-muted-foreground">{level.text}</p>

                    <div className="mt-5 space-y-2">
                      {level.modules.map((module) => (
                        <div
                          key={module}
                          className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 text-[15px] font-semibold shadow-sm"
                        >
                          <Check className="size-4 shrink-0 text-primary" />
                          <span>{module}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O QUE VAI APRENDER */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <div className="max-w-3xl">
            <SectionLabel>O que você vai aprender</SectionLabel>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-none sm:text-5xl">
              Competências que conectam o diagrama à aplicação prática
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground">
              Os módulos são o caminho. O resultado do estudo é conseguir compreender melhor os circuitos,
              os equipamentos e a lógica usada nas principais aplicações de comandos elétricos.
            </p>
          </div>

          <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {learnings.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="relative border-t border-border pt-6">
                <div className="flex items-start justify-between gap-5">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-6" />
                  </span>
                  <span className="font-display text-4xl font-extrabold text-slate-200">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-extrabold leading-none">{title}</h3>
                <p className="mt-3 text-[17px] leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <div className="max-w-3xl">
            <SectionLabel>Bônus</SectionLabel>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-none sm:text-5xl">
              Continue a formação com três recursos complementares
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {bonuses.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="border-t-4 border-primary bg-slate-50 p-7">
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-navy text-white">
                    <Icon className="size-6" />
                  </span>
                  <span className="font-display text-4xl font-extrabold text-slate-200">0{index + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-extrabold leading-none">{title}</h3>
                <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AUTORIDADE + PROVA */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr]">
            <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <img
                src={professor}
                alt="Sandro Zander, engenheiro eletricista e professor"
                loading="lazy"
                width={450}
                height={576}
                className="h-full min-h-[460px] w-full object-cover object-top"
              />
            </div>

            <div>
              <SectionLabel>Autoridade + prova</SectionLabel>
              <h2 className="mt-5 font-display text-4xl font-extrabold leading-none sm:text-5xl">
                Criado por quem ensina eletricidade industrial há mais de 26 anos
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground">
                Sandro Zander é engenheiro eletricista, autor do Livro Comandos Elétricos, fundador da Academia do Eletricista
                e criador do Método Comandos Elétricos Expert, com atuação em instituições como SENAI e FAETEC.
              </p>

              <div className="mt-7 flex items-center gap-5 border-y border-border py-5">
                <Users className="size-8 text-primary" />
                <div>
                  <p className="font-display text-4xl font-extrabold leading-none">16.843 alunos</p>
                  <p className="mt-1 text-[15px] text-muted-foreground">formados no Método</p>
                </div>
              </div>

              <div className="mt-8">
                <VideoCard
                  name="Gilberto Oliveira"
                  title="Aluno da Academia do Eletricista"
                  embedUrl="https://www.youtube-nocookie.com/embed/pCKulBnfJCQ?rel=0&playsinline=1"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
            <div className="rounded-3xl border border-border bg-white p-7 sm:p-9">
              <div className="flex items-start gap-5">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Award className="size-7" />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary">Certificação</p>
                  <h3 className="mt-2 font-display text-3xl font-extrabold leading-none">
                    Certificado de conclusão com 100 horas
                  </h3>
                  <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">
                    A certificação faz parte da formação e é disponibilizada conforme os critérios de conclusão do treinamento.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-navy p-7 text-white sm:p-9">
              <BookOpenCheck className="size-8 text-[#63b3ff]" />
              <p className="mt-6 font-display text-3xl font-extrabold leading-none">Formação para estudar e revisar</p>
              <p className="mt-4 text-[17px] leading-relaxed text-white/70">
                O período amplo de acesso permite avançar na sequência e retornar aos conteúdos ao longo da sua jornada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICAÇÃO + PROVA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Conclusão e certificação</SectionLabel>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-none sm:text-5xl">
              Uma formação com certificação e histórico real de alunos
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground">
              O Método reúne formação estruturada, certificação de conclusão e uma base consolidada de alunos.
            </p>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-2">
            <article className="rounded-3xl border border-border bg-slate-50 p-8 sm:p-10">
              <div className="flex items-start gap-5">
                <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Award className="size-8" />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-primary">
                    Certificação do Método
                  </p>
                  <p className="mt-2 font-display text-5xl font-extrabold leading-none text-navy">
                    100 horas
                  </p>
                  <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">
                    O certificado de conclusão é disponibilizado conforme os critérios de conclusão do treinamento.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-3xl bg-navy p-8 text-white sm:p-10">
              <Users className="size-9 text-[#63b3ff]" />
              <p className="mt-5 font-display text-5xl font-extrabold leading-none">16.843</p>
              <p className="mt-2 text-[17px] text-white/70">alunos do Método Comandos Elétricos Expert</p>
              <p className="mt-5 text-[16px] leading-relaxed text-white/65">
                Esse número entra como prova quantitativa da formação, sem substituir os depoimentos em vídeo.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
          <div className="grid items-center gap-8 rounded-3xl border border-border bg-slate-50 p-8 sm:grid-cols-[auto_1fr] sm:p-10">
            <div className="flex size-20 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ShieldCheck className="size-10" />
            </div>
            <div>
              <SectionLabel>Garantia</SectionLabel>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-none">
                Você tem 30 dias para conhecer o Método
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">
                Acesse a área de membros, conheça a metodologia e avalie a formação. Se decidir não continuar dentro desse período,
                basta solicitar o cancelamento conforme os termos da garantia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="navy-panel technical-grid scroll-mt-8">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel dark>Condição especial pós-compra</SectionLabel>
            <h2 className="mt-5 font-display text-5xl font-extrabold leading-none text-white">
              Complete sua formação com o Método Comandos Elétricos Expert
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-white/70">
              Como você acabou de adquirir o livro, esta condição é disponibilizada nesta etapa do seu pedido.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/[0.15] bg-white/[0.08] p-7 sm:p-10">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Formação completa em comandos elétricos",
                "Certificação de conclusão",
                "36 meses de acesso",
                "Certificação em LIDE – 40h",
                "Eletrotécnica Aplicada",
                "Programas Simuladores de Circuitos",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl bg-white/[0.08] px-4 py-3 text-[16px] text-white/90">
                  <Check className="mt-1 size-4 shrink-0 text-[#63b3ff]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/[0.15] pt-8 text-center">
              <p className="text-[16px] text-white/60">
                Valor normal <span className="line-through">R$ 497,00</span>
              </p>
              <p className="mt-2 font-display text-6xl font-extrabold leading-none text-white">R$ 197,00</p>
              <p className="mt-3 text-[15px] text-white/60">pagamento único nesta etapa do pedido</p>
            </div>

            <div className="mx-auto mt-7 max-w-xl">
              <BuyButton />
              <div className="mt-4 [&_a]:text-white/[0.55]">
                <DeclineLink />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:py-24">
          <div className="text-center">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-none sm:text-5xl">
              Dúvidas antes de continuar
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-2xl border border-border bg-white p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  <span className="text-[17px]">{faq.q}</span>
                  <span className="text-xl text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
