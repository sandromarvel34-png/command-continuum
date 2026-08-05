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
  Sparkles,
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
          "Você já garantiu o livro Comandos Elétricos. Agora adicione o Curso Comandos Elétricos Expert ao seu pedido e transforme teoria em prática real.",
      },
      { property: "og:title", content: "Pedido confirmado — Continue sua jornada prática" },
      {
        property: "og:description",
        content:
          "Condição exclusiva desta etapa do pedido: adicione o Curso Comandos Elétricos Expert e aprenda a aplicar tudo na bancada.",
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
        <span className="block text-xl font-extrabold sm:text-2xl">SIM! Quero adicionar</span>
        <span className="block text-sm font-medium opacity-80">
          o Curso Comandos Elétricos Expert ao meu pedido
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
  { icon: PlayCircle, label: "Curso", note: "próximo passo" },
  { icon: Wrench, label: "Aplicação", note: "na bancada" },
  { icon: BadgeCheck, label: "Confiança", note: "sem hesitar" },
  { icon: GaugeCircle, label: "Domínio", note: "profissional" },
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
    title: "Interpretar comandos industriais em segundos",
    text: "Você bate o olho no diagrama e já enxerga a lógica antes de encostar em um fio.",
  },
  {
    icon: Wrench,
    title: "Montar circuitos passo a passo",
    text: "Partida direta, reversão, estrela-triângulo e sequenciamento — montados junto com você.",
  },
  {
    icon: Zap,
    title: "Diagnosticar defeitos com método",
    text: "Um roteiro claro para achar a falha sem tentativa e erro, mesmo sob pressão.",
  },
  {
    icon: Lightbulb,
    title: "Aplicar lógica de comandos",
    text: "Selo, intertravamento e temporização deixam de ser conceito e viram raciocínio automático.",
  },
  {
    icon: FileText,
    title: "Executar exercícios práticos",
    text: "Cada aula termina com uma tarefa que você reproduz na bancada ou no painel.",
  },
  {
    icon: GaugeCircle,
    title: "Desenvolver segurança técnica",
    text: "Você passa a energizar sabendo exatamente o que vai acontecer — e por quê.",
  },
];

const deliverables = [
  { icon: PlayCircle, title: "Videoaulas em alta definição", text: "Aulas objetivas, gravadas em bancada real, com foco em execução." },
  { icon: CircuitBoard, title: "Montagens comentadas", text: "Cada circuito montado do zero, componente por componente, ligação por ligação." },
  { icon: FileText, title: "Exercícios e desafios práticos", text: "Atividades guiadas para fixar a lógica e treinar a leitura de diagramas." },
  { icon: Download, title: "Materiais para download", text: "Diagramas, esquemas e apoio para consultar durante o serviço." },
  { icon: RefreshCw, title: "Atualizações incluídas", text: "Novos conteúdos adicionados ao curso ficam disponíveis para você." },
  { icon: Clock, title: "Acesso no seu ritmo", text: "Assista quando e quantas vezes quiser, do celular, tablet ou computador." },
  { icon: GraduationCap, title: "Certificado de conclusão", text: "Comprove a formação prática ao final da sua jornada no curso." },
  { icon: LifeBuoy, title: "Suporte às dúvidas", text: "Travou em uma montagem? Você tem canal direto para destravar." },
];

const testimonials = [
  {
    name: "Anderson M.",
    role: "Eletricista de manutenção",
    text: "Eu já entendia os diagramas, mas travava na hora de montar. Depois das aulas de partida direta e reversão eu montei o painel da empresa sozinho, sem consultar ninguém.",
  },
  {
    name: "Rafael S.",
    role: "Técnico industrial",
    text: "O que mudou foi a velocidade. Hoje eu leio um comando e já sei onde procurar a falha. Reduzi pela metade o tempo de diagnóstico nas paradas de máquina.",
  },
  {
    name: "Jocimar P.",
    role: "Autônomo",
    text: "Fiz o curso, refiz cada montagem em casa e comecei a aceitar serviço de painel. Foi o primeiro tipo de trabalho que passei a cobrar melhor.",
  },
  {
    name: "Diego A.",
    role: "Estudante de elétrica",
    text: "A sequência é muito bem pensada. Cada aula usa o que a anterior ensinou, então quando chega no intertravamento você já entende sem esforço.",
  },
];

const faqs = [
  {
    q: "O curso substitui o livro?",
    a: "Não. O curso complementa o livro. O livro consolida a base conceitual — o que cada componente faz e por que o circuito funciona. O curso mostra a execução: montagem, sequência, ajustes e diagnóstico. Foram pensados para serem usados juntos.",
  },
  {
    q: "Posso assistir quando quiser?",
    a: "Sim. As aulas ficam disponíveis na área de membros 24 horas por dia. Você assiste no seu horário, pausa, volta e repete quantas vezes precisar, pelo celular, tablet ou computador.",
  },
  {
    q: "Preciso ter experiência prévia?",
    a: "Não. O curso começa pelos fundamentos da lógica de comandos e avança de forma progressiva. E como você já tem o livro, chega às aulas com uma base acima da média.",
  },
  {
    q: "Quanto tempo terei acesso?",
    a: "O acesso é liberado imediatamente após a confirmação e permanece disponível para consulta sempre que você precisar revisar uma montagem antes de um serviço.",
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
        <div className="flex items-center justify-center gap-2 rounded-full border border-success/30 bg-success/10 px-4 py-2 text-sm font-medium text-success sm:w-fit sm:mx-auto">
          <Check className="size-4" />
          Pagamento aprovado · Pedido confirmado
        </div>

        <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Parabéns! Seu pedido foi confirmado.
              <span className="mt-3 block brand-gradient-text">
                Agora transforme conhecimento em prática.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Você já possui a base. Agora aprenda exatamente como aplicar tudo isso em situações
              reais — montando, testando e diagnosticando com as próprias mãos.
            </p>

            <div className="mt-9 max-w-xl space-y-4">
              <CtaPrimary />
              <CtaSecondary />
              <p className="text-center text-xs text-muted-foreground">
                Adiciona ao pedido que você acabou de concluir · Sem novo cadastro
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="surface-card overflow-hidden p-2">
              <img
                src={mockupDevices}
                alt="Área de membros do Curso Comandos Elétricos Expert em notebook, tablet e celular"
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
      <section className="mx-auto mt-24 max-w-4xl px-5 text-center">
        <SectionLabel>A distância que ainda existe</SectionLabel>
        <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
          Existe uma enorme diferença entre entender um diagrama e montar um circuito com segurança.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          A teoria responde <em>o que</em> acontece. A bancada exige que você saiba <em>em que ordem</em>,{" "}
          <em>com qual componente</em> e <em>o que fazer quando não funciona de primeira</em>. O Curso
          Comandos Elétricos Expert foi criado justamente para diminuir essa distância — no menor
          tempo possível, agora que sua base já está formada.
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
            Você já concluiu as duas primeiras etapas há poucos minutos. O curso é simplesmente a
            etapa seguinte da mesma jornada.
          </p>
        </div>
      </section>

      {/* O QUE VOCÊ VAI APRENDER */}
      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="max-w-2xl">
          <SectionLabel>O que muda na sua prática</SectionLabel>
          <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
            Não são módulos. São capacidades que você passa a ter.
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

      {/* LIVRO x CURSO */}
      <section className="mx-auto mt-24 max-w-5xl px-5">
        <div className="text-center">
          <SectionLabel>Feitos para funcionar juntos</SectionLabel>
          <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
            O livro explica. O curso demonstra.
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
            <h3 className="mt-4 text-xl font-bold">O curso que completa</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {["Mostra a montagem acontecendo na sua frente", "Demonstra a sequência correta de execução", "Converte conhecimento em aplicação real", "Treina o diagnóstico quando algo não funciona"].map((i) => (
                <li key={i} className="flex gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-surface-2 p-7 text-center">
          <h3 className="text-xl font-bold">Por que este curso existe</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Muitos profissionais estudam a teoria a fundo e mesmo assim hesitam na hora de fechar um
            painel. Não é falta de conhecimento — é falta de repetição guiada. O curso existe para
            eliminar exatamente essa lacuna entre saber e executar.
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
              Décadas dentro de laboratórios de comandos elétricos formando profissionais em
              instituições técnicas de referência, como <strong className="text-foreground">SENAI</strong> e{" "}
              <strong className="text-foreground">FAETEC</strong>. Foi na sala de aula, corrigindo as
              mesmas dúvidas milhares de vezes, que nasceu o método: primeiro a lógica, depois a
              montagem, sempre na mesma ordem.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              O livro que você tem em mãos nasceu desse método. O curso é a versão em bancada dele —
              a aula prática que sempre acompanhou a teoria, agora disponível para você assistir
              quantas vezes precisar.
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
      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="max-w-2xl">
          <SectionLabel>Alunos na prática</SectionLabel>
          <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
            O que muda quando a teoria encontra a bancada
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="surface-card p-7">
              <Sparkles className="size-5 text-primary" />
              <blockquote className="mt-4 text-base leading-relaxed">“{t.text}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="mx-auto mt-24 max-w-3xl scroll-mt-16 px-5">
        <div className="surface-card overflow-hidden">
          <div className="border-b border-border bg-surface-2 px-7 py-6 text-center sm:px-10">
            <SectionLabel>Condição desta etapa do pedido</SectionLabel>
            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              Adicione o Curso Comandos Elétricos Expert
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Como esta oferta faz parte da compra realizada há poucos instantes, existe uma condição
              especial disponível somente nesta etapa do pedido.
            </p>
          </div>

          <div className="px-7 py-8 sm:px-10">
            <ul className="space-y-3 text-sm">
              {[
                "Curso completo em vídeo com montagens reais",
                "Exercícios práticos guiados aula por aula",
                "Materiais e diagramas para download",
                "Atualizações futuras incluídas",
                "Certificado de conclusão",
                "Suporte às suas dúvidas técnicas",
              ].map((i) => (
                <li key={i} className="flex gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-success" />
                  {i}
                </li>
              ))}
            </ul>

            <div className="mt-9 rounded-2xl border border-primary/40 bg-primary/8 p-7 text-center">
              <p className="text-sm text-muted-foreground">
                Valor normal do curso:{" "}
                <span className="font-semibold text-foreground line-through decoration-destructive/70">
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
              Assista às aulas, faça as montagens e avalie com calma. Se sentir que o curso não
              acrescentou à sua prática dentro do prazo de garantia, basta solicitar o reembolso e
              devolvemos o valor integral. Ambiente de compra seguro e criptografado — o risco é
              todo nosso.
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
            Já começou. Faz todo sentido concluir.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            O livro abriu o caminho. O curso é o trecho que leva do conhecimento ao domínio
            profissional.
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
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/90 px-4 py-3 backdrop-blur-md">
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
            SIM! Quero adicionar o curso ao meu pedido
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </main>
  );
}
