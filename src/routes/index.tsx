import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  BookOpenCheck,
  Check,
  CircuitBoard,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SalesSection, SectionHeading, Eyebrow } from "@/components/sales-layout";
import logoExpert from "@/assets/logo-comandos-expert.png";
import professor from "@/assets/professor.jpg";
import devices from "@/assets/mockup-devices.jpg";

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
    title: "Raio-X",
    name: "Dos dispositivos e das máquinas",
    text: "Entenda como cada componente funciona e como testar, dimensionar, ajustar e instalar os elementos do circuito.",
  },
  {
    number: "02",
    title: "IPO",
    name: "Identificando os Padrões Ocultos dos Diagramas",
    text: "Reconheça os padrões que se repetem nos comandos para interpretar a lógica e entender a construção dos circuitos.",
  },
  {
    number: "03",
    title: "MMDD",
    name: "Mapa da Montagem e Desenvolvimento dos Diagramas",
    text: "Desenvolva circuitos, adapte diagramas existentes e acompanhe a montagem a partir do funcionamento da máquina.",
  },
  {
    number: "04",
    title: "SIPAD",
    name: "Sistema Prático de Análise de Defeitos",
    text: "Siga uma sequência de análise e testes para localizar a causa de falhas e orientar a correção nos comandos.",
  },
];

const curriculum = [
  {
    title: "Dispositivos: funcionamento, instalação e dimensionamento",
    topics: [
      "Fusíveis, disjuntores magnéticos e disjuntores motor",
      "Botoeiras simples e conjugadas; contatores principais e auxiliares",
      "Relés de sobrecarga, relés de tempo e temporizadores",
      "Relés de falta e sequência de fase; relés multifunção",
      "Chaves fim de curso e limites; controladores de nível; retificadores",
    ],
  },
  {
    title: "Motores: funcionamento, ligação e polarização",
    topics: [
      "Motores universais, de repulsão e de campo distorcido",
      "Motores monofásicos de fase auxiliar e polarização dos monofásicos",
      "Motores trifásicos de seis e doze terminais e sua polarização",
      "Motores de rotor bobinado e Dahlander",
      "Motores de corrente contínua: série, shunt e compound",
    ],
  },
  {
    title: "Transformadores: funcionamento, instalação e testes",
    topics: [
      "Transformadores abaixadores, elevadores e isoladores",
      "Transformadores de potencial (TP) e de corrente (TC)",
      "Autotransformadores trifásicos",
    ],
  },
  {
    title: "Diagramas e partidas: leitura, interpretação e montagem",
    topics: [
      "Partida direta de motores trifásicos",
      "Reversão de motores monofásicos; reversão trifásica semiautomática e automática",
      "Estrela-triângulo automática para motores de seis e doze terminais; estrela-triângulo com reversão",
      "Partida compensadora automática, com e sem reversão",
      "Partida sequencial de motores trifásicos e sequência automatizada",
      "Partida de motor de rotor bobinado com banco de resistores; partida Dahlander",
      "Freio magnético; comando automático e manual de motobombas trifásicas",
      "Outros diagramas trabalhados nas aulas",
    ],
  },
  {
    title: "Acionamentos eletrônicos: inversores e soft-starters",
    topics: [
      "Funcionamento do inversor de frequência e da soft-starter",
      "Escolha entre controle escalar e controle vetorial sensorless",
    ],
  },
  {
    title: "Inversores de frequência: parâmetros e recursos",
    topics: [
      "Rampas de aceleração e desaceleração; rampa linear e rampa S",
      "Multispeed e relação V/F ajustável",
      "Frenagem por injeção de corrente contínua e frenagem reostática",
      "Flying start e ciclo automático",
    ],
  },
  {
    title: "Aplicação prática: projetos, painéis e diagnóstico",
    topics: [
      "Leitura e interpretação integradas dos circuitos",
      "Montagem de painéis de comando e dimensionamento dos dispositivos",
      "Análise, testes e localização de defeitos",
      "Desenvolvimento de diagramas a partir do funcionamento da máquina",
    ],
  },
];

const testimonials = [
  { name: "Bras Junior", id: "XFL2DMTHFvQ" },
  { name: "Gilberto Oliveira", id: "pCKulBnfJCQ" },
  { name: "Igor", id: "K7wdTm5wug4" },
  { name: "Reinaldo", id: "RBpx9aNAa2A" },
];

const faqs = [
  {
    q: "O treinamento possui certificado?",
    a: "Sim. O certificado de conclusão é disponibilizado conforme os critérios de conclusão do treinamento.",
  },
  {
    q: "Preciso já trabalhar com comandos elétricos?",
    a: "Não. O conteúdo começa pelos fundamentos e avança até aplicações industriais, projetos e diagnóstico de falhas.",
  },
  {
    q: "O Método substitui o livro?",
    a: "O livro continua sendo sua referência de consulta. O Método acrescenta aulas em vídeo, exercícios e exemplos para acompanhar a aplicação.",
  },
];

function BuyButton() {
  return (
    <Button asChild className="sales-buy">
      <a href={CHECKOUT_URL}>Sim, quero adicionar o Método</a>
    </Button>
  );
}
function DeclineLink() {
  return (
    <a href={DECLINE_URL} className="sales-decline">
      Não, quero continuar sem o treinamento
    </a>
  );
}

function UpsellPage() {
  return (
    <main className="sales-page">
      <SalesSection tone="dark" className="sales-hero">
        <div className="sales-header">
          <img
            src={logoExpert}
            alt="Curso Comandos Elétricos Expert v5.0"
            width={965}
            height={326}
            className="sales-logo"
          />
          <Eyebrow>Oferta para quem adquiriu o livro</Eyebrow>
        </div>
        <div className="sales-hero-grid">
          <div className="sales-hero-copy">
            <h1>
              <span className="sales-intro">Você já garantiu o Livro.</span> Agora avance com uma
              formação prática e passo a passo,{" "}
              <span className="sales-highlight">do diagrama ao diagnóstico de falhas.</span>
            </h1>
            <p className="sales-lead">
              Aprenda a interpretar diagramas, desenvolver circuitos, montar painéis e investigar
              falhas com aulas e exemplos de aplicação.
            </p>
            <dl className="sales-facts">
              <div>
                <dt>100h</dt>
                <dd>de formação</dd>
              </div>
              <div>
                <dt>36 meses</dt>
                <dd>de acesso</dd>
              </div>
            </dl>
            <div className="sales-hero-decision">
              <div className="sales-inline-price">
                <span>
                  De <s>R$ 497</s> por
                </span>
                <strong>R$ 197</strong>
              </div>
              <BuyButton />
              <DeclineLink />
            </div>
          </div>
          <figure className="sales-product">
            <div className="sales-product-screen">
              <img
                src={devices}
                alt="Apresentação do curso Comandos Elétricos Expert em computador, tablet e celular"
                width={1536}
                height={1024}
                fetchPriority="high"
              />
            </div>
            <figcaption>
              <GraduationCap aria-hidden="true" />
              <span>
                <strong>Método Comandos Elétricos Expert</strong>
                <span>Aulas em vídeo, exercícios e aplicações</span>
              </span>
            </figcaption>
            <div className="sales-product-certificate">
              <a
                href="/images/certificado-expert.webp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ampliar modelo do certificado de conclusão"
              >
                <img
                  src="/images/certificado-expert.webp"
                  alt="Modelo do certificado de conclusão do Comandos Elétricos Expert"
                  width={1100}
                  height={778}
                />
              </a>
              <p>
                <Award aria-hidden="true" />
                <span>
                  Certificado de conclusão<span>Conhecimento e formação documentados.</span>
                </span>
              </p>
            </div>
          </figure>
        </div>
        <div className="sales-proof-strip">
          <img
            src="/images/aluno-certificado-1.webp"
            alt="Aluno exibindo seu certificado"
            width={507}
            height={675}
          />
          <p>
            Alunos reais. Formação aplicada.
            <span>Veja os vídeos e os registros de conclusão abaixo.</span>
          </p>
          <a href="#depoimentos">Ver os depoimentos</a>
        </div>
      </SalesSection>

      <SalesSection tone="light">
        <SectionHeading
          label="Do estudo à aplicação"
          title="Entenda o circuito. Acompanhe a prática."
          description="O próximo passo é conectar o que você consulta no livro ao funcionamento dos comandos."
        />
        <div className="sales-comparison">
          <article>
            <BookOpenCheck aria-hidden="true" />
            <h3>Com o livro</h3>
            <p>
              Você consulta conceitos, componentes e diagramas quando precisa estudar ou revisar.
            </p>
            <p className="sales-comparison-end">Uma referência técnica para ter por perto.</p>
          </article>
          <article>
            <CircuitBoard aria-hidden="true" />
            <h3>Com o livro + Método</h3>
            <p>
              Você acrescenta aulas e exercícios para acompanhar a análise e a aplicação dos
              circuitos, passo a passo.
            </p>
            <p className="sales-comparison-end">Uma formação para ligar os assuntos à prática.</p>
          </article>
        </div>
      </SalesSection>

      <SalesSection tone="muted">
        <SectionHeading
          label="Como você vai aprender"
          title="Um método para entender, montar e diagnosticar."
          description="Quatro etapas conectam o funcionamento dos componentes à aplicação nos comandos elétricos."
        />
        <ol className="sales-method">
          {methodLevels.map((level) => (
            <li key={level.number}>
              <span className="sales-step-number">{level.number}</span>
              <div className="sales-step-body">
                <h3>{level.title}</h3>
                <p className="sales-method-name">{level.name}</p>
                <p>{level.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="sales-curriculum">
          <SectionHeading
            label="Programa do curso"
            title="Veja os assuntos que você vai dominar na prática."
            description="Abra cada grupo para consultar o conteúdo da formação."
          />
          <Accordion type="multiple" className="sales-curriculum-list">
            {curriculum.map((group, index) => (
              <AccordionItem value={`programa-${index}`} key={group.title}>
                <AccordionTrigger>
                  <span className="sales-curriculum-heading">
                    <span className="sales-curriculum-number" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{group.title}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="sales-topic-list">
                    {group.topics.map((topic) => (
                      <li key={topic}>
                        <Check aria-hidden="true" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SalesSection>

      <SalesSection tone="dark">
        <SectionHeading
          label="Incluídos na formação"
          title="Mais recursos para estudar e praticar."
        />
        <div className="sales-bonuses">
          <article>
            <div className="sales-bonus-visual">
              <a href="/images/certificado-lide.webp" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/certificado-lide.webp"
                  alt="Modelo do certificado de Leitura e Interpretação de Diagramas de Comandos Elétricos"
                  width={1100}
                  height={778}
                  loading="lazy"
                />
              </a>
            </div>
            <span className="sales-small-label">Bônus 01</span>
            <h3>Certificação em LIDE</h3>
            <p>
              Leitura e Interpretação de Diagramas de Comandos Elétricos, com carga horária de 40
              horas.
            </p>
          </article>
          <article>
            <div className="sales-bonus-visual">
              <a
                href="/images/certificado-eletrotecnica.webp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/certificado-eletrotecnica.webp"
                  alt="Modelo do certificado de Eletrotécnica Aplicada em Comandos Elétricos"
                  width={1100}
                  height={778}
                  loading="lazy"
                />
              </a>
            </div>
            <span className="sales-small-label">Bônus 02</span>
            <h3>Eletrotécnica Aplicada</h3>
            <p>
              Curso complementar para reforçar os fundamentos de eletrotécnica usados em comandos
              elétricos.
            </p>
          </article>
          <article>
            <div className="sales-bonus-visual sales-simulator-visual">
              <CircuitBoard aria-hidden="true" />
              <p>
                Monte.
                <br />
                Simule.
                <br />
                Observe.
              </p>
            </div>
            <span className="sales-small-label">Bônus 03</span>
            <h3>Simuladores de circuitos</h3>
            <p>
              Programas para testar circuitos e visualizar o funcionamento dos comandos durante os
              estudos.
            </p>
          </article>
        </div>
      </SalesSection>

      <SalesSection tone="light" id="depoimentos">
        <div className="sales-teacher">
          <img
            src={professor}
            alt="Sandro Zander, engenheiro eletricista e professor"
            width={450}
            height={576}
            loading="lazy"
          />
          <div>
            <Eyebrow>Seu professor</Eyebrow>
            <h2>Experiência de ensino que orienta cada etapa.</h2>
            <p>
              Sandro Zander é engenheiro eletricista e professor há mais de 26 anos, autor do Livro
              Comandos Elétricos e fundador da Academia do Eletricista, com atuação em instituições
              como SENAI e FAETEC.
            </p>
          </div>
        </div>
        <SectionHeading
          label="Depoimentos de alunos"
          title="Conheça a experiência de quem já estudou."
          description="Assista aos relatos e veja os registros de alunos com seus certificados."
        />
        <div className="sales-videos">
          {testimonials.map((video) => (
            <article key={video.id}>
              <div className="sales-video-frame">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&playsinline=1`}
                  title={`Depoimento de ${video.name}`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <p>
                {video.name}
                <span>Aluno — depoimento em vídeo</span>
              </p>
            </article>
          ))}
        </div>
        <div className="sales-gallery-label">
          <Award aria-hidden="true" />
          <p>Registros de conclusão enviados pelos alunos</p>
        </div>
        <div className="sales-photo-gallery">
          {[1, 2, 3, 4, 5].map((n) => (
            <a
              key={n}
              href={`/images/aluno-certificado-${n}.webp`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ampliar registro de conclusão ${n}`}
            >
              <img
                src={`/images/aluno-certificado-${n}.webp`}
                alt={
                  n <= 3
                    ? "Aluno mostrando seu certificado de Comandos Elétricos Expert"
                    : "Registro enviado por aluno com seus certificados de conclusão"
                }
                width={400}
                height={540}
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </SalesSection>

      <SalesSection tone="dark" id="oferta">
        <div className="sales-offer-grid">
          <div>
            <SectionHeading
              label="Condição especial pós-compra"
              title="Dê o próximo passo na sua formação."
              description="Como você adquiriu o livro, pode adicionar o Método nesta etapa do seu pedido."
            />
            <ul className="sales-offer-list">
              {[
                "Formação completa em comandos elétricos",
                "Aulas, exercícios e aplicações",
                "Certificado de conclusão",
                "Todos os bônus apresentados",
                "36 meses para estudar e revisar",
              ].map((item) => (
                <li key={item}>
                  <Check aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="sales-offer-decision">
            <p className="sales-old-price">
              Valor normal <s>R$ 497,00</s>
            </p>
            <p className="sales-price">R$ 197,00</p>
            <p className="sales-payment">Pagamento único</p>
            <BuyButton />
            <DeclineLink />
            <div className="sales-guarantee">
              <ShieldCheck aria-hidden="true" />
              <div>
                <h3>30 dias de garantia</h3>
                <p>
                  Acesse a formação e avalie o Método. Se decidir não continuar nesse período,
                  solicite o cancelamento conforme os termos da garantia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SalesSection>

      <SalesSection tone="muted" id="faq" className="sales-faq">
        <SectionHeading label="Dúvidas frequentes" title="Antes de continuar" />
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.q} value={`faq-${index}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SalesSection>
      <footer className="sales-footer">
        <div className="sales-container">
          <p>Academia do Eletricista</p>
          <p>
            Copyright © 2026 Academia do Eletricista – Instituto Brasileiro de Qualificação
            Profissional Ltda - ME – CNPJ: 10.984.548/0001-77
          </p>
        </div>
      </footer>
    </main>
  );
}
