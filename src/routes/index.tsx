import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  Check,
  CircuitBoard,
  Clock3,
  FileText,
  Gift,
  GraduationCap,
  Layers3,
  LifeBuoy,
  PlayCircle,
  RefreshCw,
  ShieldCheck,
  TimerReset,
  Users,
  Zap,
} from "lucide-react";
import professor from "@/assets/professor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Método Comandos Elétricos Expert | Oferta Especial" },
      {
        name: "description",
        content:
          "Oferta especial do Método Comandos Elétricos Expert: formação online em comandos elétricos, 100 horas de certificação e 2 anos de acesso.",
      },
      { property: "og:title", content: "Método Comandos Elétricos Expert" },
      {
        property: "og:description",
        content:
          "Da base ao diagnóstico de falhas: formação completa em comandos elétricos com 100 horas de certificação e 2 anos de acesso.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: UpsellPage,
});

const CHECKOUT_URL = "#oferta";
const DECLINE_URL = "https://huggy-happy-times.lovable.app/";

function CtaPrimary({ className = "" }: { className?: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      className={`cta-primary group inline-flex w-full items-center justify-center gap-3 rounded-2xl px-7 py-5 text-left text-base font-semibold leading-tight sm:text-lg ${className}`}
    >
      <span>
        <span className="block text-xl font-extrabold sm:text-2xl">SIM! Quero completar minha formação</span>
        <span className="block text-sm font-medium opacity-85">Adicionar o Método por R$ 197</span>
      </span>
      <ArrowRight className="hidden size-6 shrink-0 transition-transform group-hover:translate-x-1 sm:block" />
    </a>
  );
}

function CtaSecondary() {
  return (
    <a
      href={DECLINE_URL}
      className="block text-center text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
    >
      NÃO — Quero apenas continuar
    </a>
  );
}

function CourseLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`select-none ${className}`} aria-label="Curso Comandos Elétricos Expert v5.0">
      <div className="flex items-end justify-center gap-5">
        <span className="text-2xl font-extrabold italic tracking-tight text-primary sm:text-3xl">Curso</span>
        <div className="flex items-center gap-1.5">
          <svg viewBox="0 0 44 44" className="size-10 sm:size-12" aria-hidden="true">
            <path d="M8 5h22L18 16h18L7 28h18L13 39" fill="none" stroke="#f28a00" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter" />
          </svg>
          <span className="text-3xl font-black tracking-[-0.08em] text-primary sm:text-4xl">AE</span>
        </div>
      </div>
      <p className="mt-2 text-center text-[clamp(1.45rem,4vw,3.35rem)] font-black leading-none tracking-[-0.045em] text-foreground">
        COMANDOS ELÉTRICOS
      </p>
      <p className="mt-1 text-center text-[clamp(2.4rem,7vw,5.9rem)] font-semibold italic leading-none tracking-[-0.055em]" style={{ color: "#f28a00" }}>
        Expert<span className="ml-1 text-[0.48em]">v5.0®</span>
      </p>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </span>
  );
}

const proofStats = [
  {
    icon: Award,
    value: "100h",
    label: "de certificação",
    note: "Carga horária do Comandos Elétricos Expert",
  },
  {
    icon: Clock3,
    value: "2 anos",
    label: "de acesso",
    note: "Tempo para estudar e revisar o conteúdo",
  },
  {
    icon: Layers3,
    value: "8 módulos",
    label: "em sequência",
    note: "Da base até projetos e diagnóstico",
  },
  {
    icon: Gift,
    value: "3 bônus",
    label: "incluídos",
    note: "Certificação LIDE, eletrotécnica e simuladores",
  },
];

const methodLevels = [
  {
    number: "01",
    title: "Fundamentos",
    description: "Primeiro você organiza a base técnica que sustenta todo o restante do método.",
    modules: ["Módulo I · A Base"],
  },
  {
    number: "02",
    title: "Equipamentos e Componentes",
    description: "Depois você entende o funcionamento, a aplicação e os critérios dos principais elementos do comando.",
    modules: [
      "Módulo II · Proteções Ativas",
      "Módulo III · Motores",
      "Módulo IV · Transformadores",
      "Módulo V · Dispositivos",
    ],
  },
  {
    number: "03",
    title: "Aplicação Industrial",
    description: "Na sequência, o conhecimento entra nos circuitos, chaves de partida e acionamentos industriais.",
    modules: [
      "Módulo VI · Diagramas e Chaves de Partida",
      "Módulo VII · Inversores de Frequência",
    ],
  },
  {
    number: "04",
    title: "Nível Expert",
    description: "Por fim, você integra o conteúdo para projetos, análise técnica e diagnóstico de falhas.",
    modules: ["Módulo VIII · Projetos e Diagnóstico"],
  },
];

const courseModules = [
  {
    step: "01",
    title: "A Base",
    text: "Fundamentos, grandezas, lógica e conceitos necessários para compreender comandos elétricos sem depender de memorização.",
  },
  {
    step: "02",
    title: "Proteções Ativas",
    text: "Fusíveis, disjuntores, proteção de motores e critérios de aplicação dos dispositivos de proteção.",
  },
  {
    step: "03",
    title: "Motores",
    text: "Motores monofásicos, trifásicos, duas velocidades, rotor bobinado e corrente contínua, com ligações e aplicações.",
  },
  {
    step: "04",
    title: "Transformadores",
    text: "Transformadores mono e trifásicos, autotransformadores, TC, TP, ligações e cálculos aplicados.",
  },
  {
    step: "05",
    title: "Dispositivos",
    text: "Contatores, relés, botoeiras, fins de curso, temporizadores, sinalização e lógica de funcionamento.",
  },
  {
    step: "06",
    title: "Diagramas e Chaves de Partida",
    text: "Partida direta, reversão, estrela-triângulo, Dahlander, sequenciais, intertravamentos, freio magnético e outras aplicações.",
  },
  {
    step: "07",
    title: "Inversores de Frequência",
    text: "Parametrização, rampas, torque, comandos e aplicação do inversor de frequência no ambiente industrial.",
  },
  {
    step: "08",
    title: "Projetos e Diagnóstico",
    text: "Integração do conhecimento para analisar circuitos, desenvolver projetos e estruturar o diagnóstico de falhas.",
  },
];

const bonuses = [
  {
    icon: Award,
    eyebrow: "Bônus 01",
    title: "Certificação em LIDE – Comandos Elétricos",
    text: "Certificação complementar em LIDE – Comandos Elétricos com carga horária de 40 horas.",
  },
  {
    icon: GraduationCap,
    eyebrow: "Bônus 02",
    title: "Curso de Eletrotécnica Aplicada em Comandos Elétricos",
    text: "Conteúdo complementar para reforçar fundamentos de eletrotécnica aplicados diretamente aos comandos elétricos.",
  },
  {
    icon: CircuitBoard,
    eyebrow: "Bônus 03",
    title: "Programas Simuladores de Circuitos",
    text: "Programas para simular circuitos e apoiar o estudo, os testes e a compreensão do funcionamento dos comandos elétricos.",
  },
];

const videoTestimonials = [
  {
    name: "Bras Junior",
    title: "Aluno do Comandos Elétricos Expert",
    embedUrl: "https://www.youtube-nocookie.com/embed/XFL2DMTHFvQ?rel=0&playsinline=1",
  },
  {
    name: "Gilberto Oliveira",
    title: "Aluno da Academia do Eletricista",
    embedUrl: "https://www.youtube-nocookie.com/embed/pCKulBnfJCQ?rel=0&playsinline=1",
  },
];

const faqs = [
  {
    q: "Quanto tempo terei acesso ao Método?",
    a: "O acesso informado para o treinamento é de 2 anos. Nesse período você pode estudar no seu ritmo e rever as aulas.",
  },
  {
    q: "Qual é a carga horária do certificado?",
    a: "O certificado do Comandos Elétricos Expert possui carga horária de 100 horas e é disponibilizado conforme os critérios de conclusão do treinamento.",
  },
  {
    q: "O Método substitui o livro?",
    a: "Não. O livro funciona como referência técnica de consulta. O Método acrescenta uma sequência de estudo em vídeo, aplicações e exercícios para aprofundar e conectar os assuntos à prática.",
  },
  {
    q: "Preciso ter experiência prévia?",
    a: "Não. O treinamento começa pela base e avança progressivamente até aplicações, projetos e diagnóstico de falhas.",
  },
  {
    q: "Quais bônus estão incluídos?",
    a: "Certificação em LIDE – Comandos Elétricos com 40 horas, Curso de Eletrotécnica Aplicada em Comandos Elétricos e Programas Simuladores de Circuitos.",
  },
];

function UpsellPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background pb-28 text-foreground">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[72vh] glow-top" aria-hidden="true" />

      {/* HERO */}
      <section className="relative mx-auto max-w-6xl px-5 pt-8 sm:pt-12">
        <div className="mx-auto max-w-5xl">
          <CourseLogo className="mx-auto max-w-[680px]" />

          <div className="mt-8 flex items-center justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
              <BadgeCheck className="size-4" />
              Seu pedido do livro foi confirmado
            </div>
          </div>

          <div className="mt-8 grid items-stretch gap-7 lg:grid-cols-[1.08fr_.92fr]">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-5xl lg:text-[3.55rem]">
                Antes de seguir:
                <span className="mt-2 block brand-gradient-text">
                  complete sua formação por R$ 197.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Você já garantiu o livro para consultar. Agora pode acrescentar o Método Comandos Elétricos Expert:
                uma formação em vídeo que organiza o estudo da base até motores, diagramas, inversores,
                projetos e diagnóstico de falhas.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {["100h de certificação", "2 anos de acesso", "3 bônus técnicos"].map((item) => (
                  <div key={item} className="rounded-2xl border border-border bg-surface px-4 py-3 text-center text-sm font-semibold">
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Livro e Método cumprem funções diferentes: o livro fica como referência técnica; o treinamento
                conduz a aplicação em uma sequência de estudo.
              </p>
            </div>

            <aside className="surface-card overflow-hidden border-primary/25">
              <div className="border-b border-primary/15 bg-primary/5 p-6 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Condição desta etapa</p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Valor normal <span className="line-through">R$ 497,00</span>
                </p>
                <p className="mt-1 text-6xl font-extrabold tracking-tight">R$ 197</p>
                <p className="mt-2 text-xs text-muted-foreground">pagamento único</p>
              </div>

              <div className="p-6">
                <div className="grid gap-3">
                  {[
                    "Método completo em 8 módulos",
                    "Certificação de 100 horas",
                    "2 anos de acesso",
                    "3 bônus técnicos incluídos",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-xl bg-surface-2 px-4 py-3 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-4">
                  <CtaPrimary />
                  <CtaSecondary />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* PROVA RÁPIDA */}
      <section className="mx-auto mt-16 max-w-6xl px-5">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofStats.map(({ icon: Icon, value, label, note }) => (
            <article key={value + label} className="surface-card p-6">
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <p className="mt-5 text-3xl font-extrabold tracking-tight">{value}</p>
              <p className="mt-1 text-sm font-semibold">{label}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{note}</p>
            </article>
          ))}
        </div>
      </section>

      {/* POSICIONAMENTO */}
      <section className="mx-auto mt-24 max-w-5xl px-5 text-center">
        <SectionLabel>Livro + Método</SectionLabel>
        <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
          O livro é a referência. O Método é a sequência guiada para acompanhar a aplicação.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          O livro continua como sua referência técnica. O Método acrescenta aulas em vídeo, sequência de estudo,
          aplicações, exercícios e diagnóstico. Você consulta no livro e acompanha a aplicação no treinamento —
          sem transformar um produto em substituto do outro.
        </p>
      </section>

      {/* METODOLOGIA */}
      <section className="mx-auto mt-24 max-w-6xl rounded-3xl bg-surface-2 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>A metodologia do curso</SectionLabel>
          <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
            Um caminho em 4 níveis para sair da base e chegar ao diagnóstico
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Em vez de uma coleção de aulas soltas, o conteúdo é organizado em uma progressão lógica.
            Cada nível prepara o próximo.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {methodLevels.map((level, index) => (
            <article key={level.number} className="surface-card relative p-6">
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-sm font-extrabold text-primary-foreground">
                  {level.number}
                </span>
                {index < methodLevels.length - 1 && (
                  <ArrowRight className="hidden size-5 text-primary/50 lg:block" />
                )}
              </div>
              <h3 className="mt-5 text-lg font-bold">{level.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{level.description}</p>
              <div className="mt-5 space-y-2">
                {level.modules.map((module) => (
                  <div key={module} className="rounded-xl border border-border bg-surface-2 px-3 py-2.5 text-xs font-semibold">
                    {module}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="max-w-3xl">
          <SectionLabel>O que você vai aprender</SectionLabel>
          <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
            Do funcionamento dos componentes às aplicações, projetos e falhas
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            A formação reúne os principais assuntos que um profissional precisa dominar para compreender
            comandos elétricos de forma organizada.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {courseModules.map((module) => (
            <article key={module.step} className="surface-card flex gap-5 p-6">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-extrabold text-primary">
                {module.step}
              </div>
              <div>
                <h3 className="text-lg font-bold">{module.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{module.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* COMO ESTUDA */}
      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="surface-card p-7 sm:p-9">
            <SectionLabel>Formação completa</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold leading-tight">
              Você não recebe apenas acesso às aulas
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: PlayCircle, title: "Aulas em vídeo", text: "Conteúdo organizado por módulos para acompanhar a explicação e a aplicação." },
                { icon: CircuitBoard, title: "Diagramas e aplicações", text: "Exemplos e circuitos para relacionar lógica, componentes e funcionamento." },
                { icon: FileText, title: "Materiais de apoio", text: "Arquivos complementares para acompanhar o estudo e revisar os conteúdos." },
                { icon: RefreshCw, title: "2 anos para estudar e revisar", text: "Tempo de acesso para avançar no seu ritmo e retornar aos módulos durante o período informado." },
                { icon: LifeBuoy, title: "Canais de atendimento", text: "A Academia do Eletricista mantém canais oficiais de atendimento ao aluno." },
                { icon: GraduationCap, title: "Certificação", text: "Processo de certificação com carga horária oficial de 100 horas." },
              ].map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-2xl border border-border bg-surface-2 p-5">
                  <Icon className="size-5 text-primary" />
                  <h3 className="mt-4 text-sm font-bold">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="surface-card overflow-hidden">
            <div className="border-b border-border bg-primary/5 p-7 sm:p-9">
              <Award className="size-8 text-primary" />
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Certificado de conclusão
              </p>
              <p className="mt-2 text-5xl font-extrabold tracking-tight">100 horas</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Ao cumprir o processo de certificação do treinamento, o aluno pode receber o certificado
                do Comandos Elétricos Expert com carga horária oficial de 100 horas.
              </p>
            </div>
            <div className="p-7 sm:p-9">
              <div className="grid gap-3">
                {[
                  "Curso livre com certificação",
                  "Carga horária oficial de 100h",
                  "Certificado de conclusão com carga horária de 100h",
                  "Formação construída da base ao diagnóstico",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-border px-4 py-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTORIDADE */}
      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="surface-card grid items-stretch overflow-hidden lg:grid-cols-[.78fr_1.22fr]">
          <div className="bg-surface-2">
            <img
              src={professor}
              alt="Sandro Zander, engenheiro eletricista, professor e criador do Método Comandos Elétricos Expert"
              loading="lazy"
              width={450}
              height={576}
              className="h-full min-h-[420px] w-full object-cover object-top"
            />
          </div>

          <div className="p-7 sm:p-10">
            <SectionLabel>Quem criou o Método</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
              Sandro Zander: mais de 26 anos ensinando eletricidade industrial
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Engenheiro eletricista, autor do Livro Comandos Elétricos, fundador da Academia do Eletricista
              e criador do Método Comandos Elétricos Expert.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Sua experiência reúne atuação profissional na indústria e décadas em sala de aula, incluindo
              SENAI e FAETEC. O Método organiza essa experiência em uma sequência que parte dos fundamentos
              e avança até aplicações, projetos e diagnóstico de falhas.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-border bg-surface-2 p-5 text-center">
                <p className="text-2xl font-extrabold text-primary">26+ anos</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">ensinando eletricidade industrial</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface-2 p-5 text-center">
                <p className="text-2xl font-extrabold text-primary">Centenas</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">de profissionais transformados pelo Método</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="mx-auto mt-24 max-w-6xl rounded-3xl bg-surface-2 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Bônus incluídos</SectionLabel>
          <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
            Além do Método, você recebe mais três recursos para ampliar a formação
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {bonuses.map(({ icon: Icon, eyebrow, title, text }) => (
            <article key={title} className="surface-card p-7">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-6" />
              </div>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-primary">{eyebrow}</p>
              <h3 className="mt-2 text-lg font-bold leading-snug">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Provas sociais reais</SectionLabel>
          <h2 className="mt-6 text-3xl font-bold sm:text-4xl">Quem já estudou conta como foi a experiência</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Depoimentos reais de alunos do ecossistema Academia do Eletricista.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {videoTestimonials.map((video) => (
            <article key={video.embedUrl} className="surface-card overflow-hidden">
              <div className="aspect-video bg-surface-2">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  loading="lazy"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  sandbox="allow-scripts allow-same-origin allow-presentation"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="border-t border-border p-5">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <PlayCircle className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{video.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{video.title}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="mx-auto mt-24 max-w-4xl scroll-mt-16 px-5">
        <div className="surface-card overflow-hidden border-primary/25">
          <div className="border-b border-primary/15 bg-primary/5 px-7 py-8 text-center sm:px-10">
            <SectionLabel>Oferta especial desta etapa</SectionLabel>
            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              Adicione a formação completa ao pedido por R$ 197
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Você já garantiu o livro. Agora pode adicionar o Método Comandos Elétricos Expert e os bônus
              desta oferta sem voltar ao início da jornada.
            </p>
          </div>

          <div className="px-7 py-8 sm:px-10">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Método completo em 8 módulos",
                "100 horas de certificação",
                "2 anos de acesso",
                "Canais oficiais de atendimento ao aluno",
                "Bônus: Certificação em LIDE – Comandos Elétricos (40h)",
                "Bônus: Eletrotécnica Aplicada em Comandos Elétricos",
                "Bônus: Programas Simuladores de Circuitos",
                "3 bônus técnicos incluídos",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-primary/25 bg-primary/5 p-7 text-center sm:p-9">
              <p className="text-sm text-muted-foreground">
                Valor normal do treinamento{" "}
                <span className="font-semibold text-foreground line-through decoration-muted-foreground/50">
                  R$ 497,00
                </span>
              </p>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Condição especial agora
              </p>
              <p className="mt-1 text-6xl font-extrabold tracking-tight">R$ 197,00</p>
              <p className="mt-3 text-sm text-muted-foreground">
                pagamento único nesta etapa do pedido
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <CtaPrimary />
              <CtaSecondary />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto mt-24 max-w-3xl scroll-mt-16 px-5">
        <div className="text-center">
          <SectionLabel>Antes de decidir</SectionLabel>
          <h2 className="mt-6 text-3xl font-bold sm:text-4xl">Perguntas frequentes</h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-2xl border border-border bg-surface p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold">
                {faq.q}
                <span className="text-primary transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto mt-24 max-w-5xl px-5">
        <div className="surface-card p-8 text-center sm:p-12">
          <Gift className="mx-auto size-8 text-primary" />
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Você já deu o primeiro passo com o livro. Agora pode acrescentar a formação em vídeo.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Se fizer sentido para a sua formação, aproveite esta condição para adicionar o Método Comandos Elétricos Expert ao pedido.
          </p>

          <div className="mx-auto mt-8 max-w-xl space-y-4">
            <div className="rounded-2xl border border-border bg-surface-2 p-5">
              <p className="text-sm text-muted-foreground">
                De <span className="line-through">R$ 497,00</span> por
              </p>
              <p className="text-4xl font-extrabold">R$ 197,00</p>
            </div>
            <CtaPrimary />
          </div>
        </div>
      </section>

      {/* STICKY CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-4 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center gap-4">
          <div className="hidden shrink-0 sm:block">
            <p className="text-xs text-muted-foreground">Oferta desta etapa</p>
            <p className="text-lg font-extrabold leading-tight">
              R$ 197,00 <span className="text-xs font-normal text-muted-foreground line-through">R$ 497</span>
            </p>
          </div>
          <a
            href={CHECKOUT_URL}
            className="cta-primary flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-extrabold sm:text-base"
          >
            Completar minha formação por R$ 197
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </main>
  );
}
