import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Check,
  CircuitBoard,
  Clock,
  Download,
  FileText,
  GaugeCircle,
  GraduationCap,
  LifeBuoy,
  Lightbulb,
  PlayCircle,
  RefreshCw,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import mockupDevices from "@/assets/mockup-devices.jpg";
import professor from "@/assets/professor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pedido confirmado — Complete sua formação em Comandos Elétricos" },
      {
        name: "description",
        content:
          "Você já garantiu o livro Comandos Elétricos. Agora adicione o Método Comandos Elétricos Expert ao seu pedido e transforme teoria em prática real.",
      },
      { property: "og:title", content: "Pedido confirmado — Complete sua formação em Comandos Elétricos" },
      {
        property: "og:description",
        content:
          "Você já garantiu o livro Comandos Elétricos. Agora adicione o Método Comandos Elétricos Expert ao seu pedido e transforme teoria em prática real.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: UpsellPage,
});

const CHECKOUT_URL = "#oferta";

function CtaPrimary({ className = "" }: { className?: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      className={`cta-primary group inline-flex w-full items-center justify-center gap-3 rounded-2xl px-7 py-5 text-left text-base font-semibold leading-tight sm:text-lg ${className}`}
    >
      <span>
        <span className="block text-xl font-extrabold sm:text-2xl">SIM! Quero continuar</span>
        <span className="block text-sm font-medium opacity-80">
          e adicionar o Método Comandos Elétricos Expert ao meu pedido
        </span>
      </span>
      <ArrowRight className="hidden size-6 shrink-0 transition-transform group-hover:translate-x-1 sm:block" />
    </a>
  );
}

function CtaSecondary() {
  return (
    <a
      href="#faq"
      className="block text-center text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
    >
      Não, obrigado. Vou continuar apenas com o livro.
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </span>
  );
}

const journey = [
  { icon: BookOpen, label: "Livro", note: "você já tem" },
  { icon: Lightbulb, label: "Conhecimento", note: "base formada" },
  { icon: PlayCircle, label: "Método", note: "próximo passo" },
  { icon: Wrench, label: "Aplicação", note: "na bancada" },
  { icon: BadgeCheck, label: "Confiança", note: "mais repertório" },
  { icon: GaugeCircle, label: "Domínio", note: "técnico" },
];

function Journey({ highlight = 2 }: { highlight?: number }) {
  return (
    <ol className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {journey.map((step, i) => {
        const Icon = step.icon;
        const active = i <= highlight;
        return (
          <li
            key={step.label}
            className={`relative rounded-2xl border p-4 transition-colors ${
              i === highlight
                ? "border-primary/60 bg-primary/10"
                : active
                  ? "border-border bg-surface"
                  : "border-border/60 bg-transparent"
            }`}
          >
            <Icon
              className={`size-5 ${i === highlight ? "text-primary" : active ? "text-foreground" : "text-muted-foreground"}`}
            />
            <p className="mt-3 text-sm font-semibold">{step.label}</p>
            <p className="text-xs text-muted-foreground">{step.note}</p>
          </li>
        );
      })}
    </ol>
  );
}

const learnings = [
  {
    icon: CircuitBoard,
    title: "Ler diagramas com mais clareza",
    text: "Entenda a lógica do comando, a função de cada elemento e a sequência de operação antes de partir para a montagem.",
  },
  {
    icon: Wrench,
    title: "Acompanhar montagens passo a passo",
    text: "Veja aplicações de partida, reversão, estrela-triângulo, sequenciamento e outros circuitos estudados no método.",
  },
  {
    icon: Zap,
    title: "Estruturar o diagnóstico de falhas",
    text: "Aprenda a investigar o circuito por etapas, usando medições e raciocínio técnico em vez de depender de tentativa e erro.",
  },
  {
    icon: Lightbulb,
    title: "Conectar lógica, componentes e aplicação",
    text: "Relacione selo, intertravamento, temporização, proteção e acionamento com o comportamento real do circuito.",
  },
  {
    icon: FileText,
    title: "Reforçar o conteúdo com exercícios",
    text: "Use atividades e exemplos para revisar o raciocínio e consolidar os conceitos apresentados nas aulas.",
  },
  {
    icon: GaugeCircle,
    title: "Ganhar repertório técnico para a prática",
    text: "Amplie sua base para analisar montagens, parametrizações e falhas com mais critério técnico.",
  },
];

const courseModules = [
  { step: "01", title: "A Base", text: "Fundamentos e lógica necessários para avançar com segurança pelos comandos elétricos." },
  { step: "02", title: "Proteções Ativas", text: "Critérios e aplicações dos principais dispositivos de proteção usados nos circuitos." },
  { step: "03", title: "Por Dentro dos Motores", text: "Motores mono e trifásicos, duas velocidades, rotor bobinado e corrente contínua." },
  { step: "04", title: "Transformadores na Prática", text: "Transformadores mono e trifásicos, autotransformadores, TC, TP e cálculos aplicados." },
  { step: "05", title: "Dispositivos Aplicados", text: "Contatores, relés, botoeiras, fins de curso, temporizadores e sinalização." },
  { step: "06", title: "Diagramas e Chaves de Partida", text: "Partida direta, reversão, estrela-triângulo, Dahlander, sequenciais, intertravamentos e outras aplicações." },
  { step: "07", title: "Inversores de Frequência", text: "Parametrização, rampas, torque e aplicação do inversor em situações práticas." },
  { step: "08", title: "Projetos e Diagnóstico de Falhas", text: "Integração do conhecimento para analisar circuitos, projetos e defeitos de forma organizada." },
];

const deliverables = [
  { icon: PlayCircle, title: "Aulas em vídeo", text: "Conteúdo organizado para acompanhar a explicação e a aplicação dos conceitos." },
  { icon: CircuitBoard, title: "Aplicações comentadas", text: "Circuitos e dispositivos explicados relacionando diagrama, funcionamento e prática." },
  { icon: FileText, title: "Exercícios práticos", text: "Atividades para revisar conceitos e treinar a interpretação de comandos." },
  { icon: Download, title: "Materiais de apoio", text: "Diagramas, esquemas e arquivos complementares disponibilizados no treinamento." },
  { icon: RefreshCw, title: "Conteúdo organizado por etapas", text: "Uma sequência que parte da base e avança até projetos e diagnóstico." },
  { icon: Clock, title: "Estude no seu ritmo", text: "Acesse pelo celular, tablet ou computador dentro do período da sua oferta." },
  { icon: GraduationCap, title: "Certificado de conclusão", text: "Certificado disponível conforme os critérios de conclusão do treinamento." },
  { icon: LifeBuoy, title: "Canal de suporte", text: "Use o suporte disponibilizado ao aluno para dúvidas sobre acesso e conteúdo." },
];

const videoTestimonials = [
  {
    name: "Bras Junior",
    title: "Depoimento de aluno sobre o Comandos Elétricos Expert",
    embedUrl: "https://www.youtube-nocookie.com/embed/XFL2DMTHFvQ?rel=0&playsinline=1",
  },
  {
    name: "Gilberto Oliveira",
    title: "Depoimento de aluno da Academia do Eletricista",
    embedUrl: "https://www.youtube-nocookie.com/embed/pCKulBnfJCQ?rel=0&playsinline=1",
  },
];

const faqs = [
  {
    q: "O método substitui o livro?",
    a: "Não. O método complementa o livro. O livro consolida a base conceitual — o que cada componente faz e por que o circuito funciona. O treinamento em vídeo aprofunda a aplicação, a sequência de funcionamento e o diagnóstico. Foram pensados para serem usados juntos.",
  },
  {
    q: "Posso assistir quando quiser?",
    a: "Sim. As aulas ficam disponíveis na área de membros 24 horas por dia. Você assiste no seu horário, pausa, volta e repete quantas vezes precisar, pelo celular, tablet ou computador.",
  },
  {
    q: "Preciso ter experiência prévia?",
    a: "Não. O método começa pelos fundamentos da lógica de comandos e avança de forma progressiva. O livro funciona como apoio técnico durante essa jornada.",
  },
  {
    q: "Quanto tempo terei acesso?",
    a: "O acesso é liberado após a confirmação da compra e permanece disponível durante o período informado nas condições da sua oferta. Nesse período, você pode rever as aulas sempre que precisar.",
  },
  {
    q: "Existe certificado?",
    a: "Sim. Ao concluir as aulas você emite o certificado de conclusão para comprovar sua formação prática.",
  },
  {
    q: "Como o acesso é liberado?",
    a: "Ao adicionar o curso, ele entra no mesmo pedido que você acabou de finalizar. Não há novo cadastro nem novo checkout: os dados de acesso chegam no mesmo e-mail da sua compra.",
  },
];

function UpsellPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background pb-28 text-foreground">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] glow-top" aria-hidden="true" />

      {/* HERO */}
      <section className="relative mx-auto max-w-6xl px-5 pt-14 sm:pt-20">
        <div className="flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-sm font-medium text-primary sm:w-fit sm:mx-auto">
          <Check className="size-4" />
          Pagamento aprovado · Pedido confirmado
        </div>

        <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Seu livro já está garantido.
              <span className="mt-3 block brand-gradient-text">
                Agora veja o próximo passo da sua formação.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Inclua o Método Comandos Elétricos Expert no mesmo pedido e avance da leitura para
              aulas em vídeo, aplicações, diagramas, dispositivos, motores, inversores, projetos e
              diagnóstico de falhas.
            </p>

            <div className="mt-9 max-w-xl space-y-4">
              <CtaPrimary />
              <CtaSecondary />
              <p className="text-center text-xs text-muted-foreground">
                Condição exclusiva desta etapa do pedido · R$ 197,00 em pagamento único
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="surface-card overflow-hidden p-2">
              <img
                src={mockupDevices}
                alt="Área de membros do Método Comandos Elétricos Expert em notebook, tablet e celular"
                width={1600}
                height={1008}
                className="w-full rounded-xl"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              {["Acesso imediato", "Todos os dispositivos", "Certificado"].map((item) => (
                <div key={item} className="rounded-xl border border-border bg-surface px-2 py-3 text-xs font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRIMEIRO BLOCO */}
      <section className="mx-auto mt-20 max-w-5xl rounded-3xl bg-surface-2 px-6 py-14 text-center sm:px-10">
        <SectionLabel>Livro e método cumprem papéis diferentes</SectionLabel>
        <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
          O livro organiza o conhecimento. O método mostra como esse conhecimento se conecta à aplicação.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Você acabou de garantir uma referência técnica para estudar conceitos, ligações e diagramas.
          O próximo passo é acompanhar esses mesmos fundamentos em uma sequência guiada, relacionando
          <em> lógica</em>, <em>componentes</em>, <em>aplicação</em>, <em>medição</em> e <em>diagnóstico</em>.
          É exatamente esse o papel do Método Comandos Elétricos Expert.
        </p>
      </section>

      {/* JORNADA */}
      <section className="mx-auto mt-16 max-w-6xl px-5">
        <div className="surface-card p-6 sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Sua jornada, agora
          </p>
          <div className="mt-6">
            <Journey highlight={2} />
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Você já garantiu a base de consulta. Agora pode acrescentar a etapa prática e guiada à
            mesma jornada de formação.
          </p>
        </div>
      </section>

      {/* O QUE VOCÊ VAI APRENDER */}
      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="max-w-2xl">
          <SectionLabel>Da teoria para a aplicação</SectionLabel>
          <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
            O objetivo não é decorar circuitos. É entender o raciocínio por trás deles.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {learnings.map(({ icon: Icon, title, text }) => (
            <article key={title} className="surface-card p-6 transition-transform hover:-translate-y-1">
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold leading-snug">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CONTEÚDO DO MÉTODO */}
      <section className="mx-auto mt-24 max-w-6xl rounded-3xl bg-surface-2 px-5 py-16 sm:px-8">
        <div className="max-w-2xl">
          <SectionLabel>O caminho completo</SectionLabel>
          <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
            8 etapas para conectar fundamentos, componentes e diagnóstico
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            A sequência foi organizada para você avançar do fundamento até aplicações mais completas,
            sem transformar o treinamento em uma coleção solta de aulas.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {courseModules.map((module) => (
            <article key={module.step} className="surface-card flex gap-5 p-6">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-sm font-extrabold text-primary">
                {module.step}
              </div>
              <div>
                <h3 className="text-base font-semibold">{module.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{module.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* LIVRO x CURSO */}
      <section className="mx-auto mt-24 max-w-5xl px-5">
        <div className="text-center">
          <SectionLabel>Feitos para funcionar juntos</SectionLabel>
          <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
            O livro explica. O método demonstra.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-surface p-7">
            <BookOpen className="size-6 text-muted-foreground" />
            <h3 className="mt-4 text-xl font-bold">O livro que você já tem</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {["Explica o princípio de cada comando", "Ensina a lógica por trás do circuito", "Consolida o conhecimento técnico", "Fica com você como referência permanente"].map((i) => (
                <li key={i} className="flex gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-foreground" />
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-primary/50 bg-primary/8 p-7">
            <PlayCircle className="size-6 text-primary" />
            <h3 className="mt-4 text-xl font-bold">O método que leva à aplicação</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {["Mostra a montagem acontecendo na sua frente", "Demonstra a sequência correta de execução", "Relaciona conhecimento com aplicações práticas", "Apresenta uma lógica organizada para diagnóstico"].map((i) => (
                <li key={i} className="flex gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-surface-2 p-7 text-center">
          <h3 className="text-xl font-bold">Por que o método existe</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Conhecer o símbolo, o componente e o diagrama é essencial. Mas a aplicação fica mais clara
            quando você acompanha a sequência de funcionamento, observa as relações entre os elementos
            e entende onde medir quando surge uma falha. É para organizar esse raciocínio que o método existe.
          </p>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="max-w-2xl">
          <SectionLabel>Incluído no seu acesso</SectionLabel>
          <h2 className="mt-6 text-3xl font-bold sm:text-4xl">Tudo o que entra no seu pedido</h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {deliverables.map(({ icon: Icon, title, text }) => (
            <article key={title} className="surface-card h-full p-6">
              <Icon className="size-5 text-primary" />
              <h3 className="mt-4 text-base font-semibold leading-snug">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PROFESSOR */}
      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="surface-card grid gap-0 overflow-hidden md:grid-cols-[0.85fr_1.15fr]">
          <img
            src={professor}
            alt="Professor e autor do livro Comandos Elétricos em laboratório de comandos industriais"
            loading="lazy"
            width={1008}
            height={1200}
            className="h-full w-full object-cover"
          />
          <div className="p-7 sm:p-10">
            <SectionLabel>Quem conduz o curso</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold leading-tight">
              O mesmo autor do livro que você acabou de adquirir.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Engenheiro eletricista, autor do livro e professor de Eletricidade Industrial há mais de
              26 anos, com atuação em instituições como <strong className="text-foreground">SENAI</strong> e{" "}
              <strong className="text-foreground">FAETEC</strong>. O método nasceu da experiência de ensino:
              organizar primeiro o raciocínio técnico e depois avançar para a aplicação.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              O livro que você tem em mãos reúne a base técnica. O método organiza a continuação em
              vídeo, conectando explicação, aplicação e diagnóstico para você revisar durante o período
              de acesso da sua oferta.
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-4">
              {[
                ["Autor", "do livro Comandos Elétricos"],
                ["Instrutor", "formação técnica industrial"],
                ["Criador", "do método aplicado no curso"],
              ].map(([t, d]) => (
                <div key={t} className="rounded-xl border border-border bg-surface-2 p-4">
                  <dt className="text-sm font-bold text-primary">{t}</dt>
                  <dd className="mt-1 text-xs leading-snug text-muted-foreground">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="mx-auto mt-24 max-w-6xl rounded-3xl bg-surface-2 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Provas sociais em vídeo</SectionLabel>
          <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
            Assista aos depoimentos sem sair desta página
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Os relatos abaixo foram publicados pela Academia do Eletricista e ficam incorporados
            aqui para você assistir antes de decidir, sem abrir outra página ou interromper sua compra.
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

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
          Os players estão incorporados à página. Não há botão ou chamada levando o comprador para o canal do YouTube.
        </p>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="mx-auto mt-24 max-w-3xl scroll-mt-16 px-5">
        <div className="surface-card overflow-hidden border-primary/25">
          <div className="border-b border-primary/15 bg-primary/5 px-7 py-7 text-center sm:px-10">
            <SectionLabel>Condição desta etapa do pedido</SectionLabel>
            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              Adicione o Método Comandos Elétricos Expert
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Você já garantiu o livro. Nesta etapa, pode acrescentar o treinamento em vídeo por uma
              condição diferente da oferta principal, sem precisar recomeçar sua jornada de compra.
            </p>
          </div>

          <div className="px-7 py-8 sm:px-10">
            <ul className="space-y-3 text-sm">
              {[
                "Método completo em vídeo, organizado em 8 etapas",
                "Exercícios e aplicações para reforçar o conteúdo",
                "Materiais de apoio e diagramas disponibilizados no treinamento",
                "Conteúdo organizado da base ao diagnóstico de falhas",
                "Certificado de conclusão",
                "Canal de suporte disponibilizado ao aluno",
              ].map((i) => (
                <li key={i} className="flex gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {i}
                </li>
              ))}
            </ul>

            <div className="mt-9 rounded-2xl border border-primary/25 bg-primary/5 p-7 text-center">
              <p className="text-sm text-muted-foreground">
                Valor normal do treinamento:{" "}
                <span className="font-semibold text-foreground line-through decoration-muted-foreground/45">
                  R$ 497,00
                </span>
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Hoje, apenas
              </p>
              <p className="mt-1 text-6xl font-extrabold tracking-tight">R$ 197,00</p>
              <p className="mt-2 text-xs text-muted-foreground">
                Pagamento único, adicionado ao pedido que você acabou de concluir
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <CtaPrimary />
              <CtaSecondary />
            </div>

            <p className="mt-7 text-center text-sm leading-relaxed text-muted-foreground">
              Você já deu o primeiro passo. Agora aproveite esta oportunidade para concluir sua
              formação.
            </p>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="mx-auto mt-16 max-w-3xl px-5">
        <div className="surface-card flex flex-col items-center gap-6 p-8 text-center sm:flex-row sm:text-left">
          <div className="flex size-20 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
            <ShieldCheck className="size-9 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Risco zero para você</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Entre na área de membros, conheça o conteúdo e avalie o treinamento. Se decidir que não
              é para você, utilize a garantia dentro do prazo e das condições informadas na compra.
              Assim, sua decisão não precisa ser baseada apenas nesta página.
            </p>
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
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-border bg-surface p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold">
                {f.q}
                <span className="text-primary transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto mt-24 max-w-5xl px-5">
        <div className="surface-card p-8 text-center sm:p-12">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Você já começou pela base. Agora pode acrescentar a aplicação guiada.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Livro e método não competem entre si: um funciona como referência técnica; o outro organiza
            a demonstração, a aplicação e o diagnóstico em uma sequência de estudo.
          </p>

          <div className="mt-10">
            <Journey highlight={2} />
          </div>

          <div className="mx-auto mt-10 max-w-xl space-y-4">
            <div className="rounded-2xl border border-border bg-surface-2 p-5">
              <p className="text-sm text-muted-foreground">
                De <span className="line-through">R$ 497,00</span> por
              </p>
              <p className="text-4xl font-extrabold">R$ 197,00</p>
            </div>
            <CtaPrimary />
            <CtaSecondary />
          </div>
        </div>
      </section>

      {/* STICKY CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/95 px-4 py-3 shadow-[0_-10px_30px_-24px_rgba(15,23,42,0.35)] backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center gap-4">
          <div className="hidden shrink-0 sm:block">
            <p className="text-xs text-muted-foreground">Adicionar ao pedido</p>
            <p className="text-lg font-extrabold leading-tight">
              R$ 197,00 <span className="text-xs font-normal text-muted-foreground line-through">R$ 497</span>
            </p>
          </div>
          <a
            href={CHECKOUT_URL}
            className="cta-primary flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-extrabold sm:text-base"
          >
            SIM! Quero adicionar o método ao meu pedido
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </main>
  );
}
