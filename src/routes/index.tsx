import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  BookOpenCheck,
  Check,
  CircuitBoard,
  LibraryBig,
  MessageCircle,
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
import { TestimonialVideo } from "@/components/testimonial-video";
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

const faqs: { q: string; a: string; items?: string[] }[] = [
  {
    q: "Quando começam as aulas?",
    a: "As aulas são liberadas imediatamente após a confirmação da matrícula. Você recebe por e-mail os dados de acesso ao nosso portal de ensino.",
  },
  {
    q: "Qual é o horário das aulas?",
    a: "As aulas são gravadas e o curso é totalmente online. Você pode acessar as aulas, os materiais, as apostilas e os exercícios no horário que preferir, 24 horas por dia, 7 dias por semana.",
  },
  {
    q: "O curso é reconhecido pelo MEC?",
    a: "O Comandos Elétricos Expert é um curso livre de qualificação profissional. Essa modalidade não exige autorização ou reconhecimento do MEC. O certificado é emitido pelo Instituto Brasileiro de Qualificação Profissional Ltda. – ME, CNPJ 10.984.548/0001-77, razão social da Academia do Eletricista.",
  },
  {
    q: "O curso oferece certificado?",
    a: "Sim. Ao concluir o Comandos Elétricos Expert, você recebe o certificado da formação principal, com carga horária de 100 horas. O documento comprova a conclusão do curso livre de qualificação profissional.",
  },
  {
    q: "Para quem esse curso é indicado?",
    a: "Para eletricistas, técnicos e engenheiros que precisam aprofundar seus conhecimentos de comandos elétricos, além de estudantes da área. É indicado para quem quer aplicar esse conhecimento em instalações e manutenção, trabalhar com acionamentos de motores e ampliar os serviços técnicos que oferece.",
  },
  {
    q: "Por quanto tempo terei acesso ao curso?",
    a: "Você terá acesso ao curso e aos bônus por 3 anos. Durante esse período, poderá estudar no seu ritmo, rever as aulas e consultar os materiais quantas vezes quiser.",
  },
  {
    q: "O que está incluso no curso?",
    a: "A matrícula inclui:",
    items: [
      "Curso completo Comandos Elétricos Expert, com aulas gravadas, apostilas e exercícios",
      "Biblioteca com mais de 100 livros e PDFs técnicos",
      "Programas simuladores de circuitos e aulas práticas de uso",
      "Certificação em Leitura e Interpretação de Diagramas de Comandos Elétricos (LIDE)",
      "Curso de Eletrotécnica Aplicada",
      "Certificado de conclusão da formação principal",
      "Área de membros exclusiva, com acesso ao curso e aos bônus pelo prazo informado nesta oferta",
      "Suporte especializado pelo WhatsApp pessoal do professor",
      "Garantia de satisfação, com reembolso conforme os termos apresentados nesta página",
    ],
  },
  {
    q: "O que vou aprender no curso?",
    a: "Você vai estudar e praticar como:",
    items: [
      "Ler e interpretar diagramas para entender o funcionamento dos circuitos",
      "Montar circuitos e painéis de comando a partir dos diagramas",
      "Desenvolver comandos a partir do funcionamento previsto para máquinas e motores",
      "Fazer ligações, dimensionamentos e regulagens de dispositivos, motores e transformadores",
      "Analisar circuitos, localizar causas de falhas e orientar a correção dos defeitos",
    ],
  },
  {
    q: "Quais são os pré-requisitos para fazer o curso?",
    a: "O curso é aberto a profissionais e estudantes da área de eletricidade. A escolaridade mínima é a 5ª série do ensino fundamental, com leitura e escrita. Você precisa de acesso à internet e disposição para estudar e praticar comandos elétricos.",
  },
  {
    q: "Como usar o livro junto com as aulas?",
    a: "Use o livro para consultar conceitos e diagramas enquanto acompanha as aulas. Depois, retome os exemplos e faça os exercícios para revisar o que aprendeu.",
  },
  {
    q: "Como funciona a garantia?",
    a: "Você tem 30 dias a partir da compra para avaliar a formação. Nesse período, solicite o cancelamento por e-mail ou WhatsApp para receber o reembolso integral do valor pago pelo treinamento.",
  },
];

function BuyButton() {
  return (
    <Button asChild className="sales-buy">
      <a href={CHECKOUT_URL}>Sim, quero adicionar o curso</a>
    </Button>
  );
}
function DeclineLink() {
  return (
    <a href={DECLINE_URL} className="sales-decline">
      Continuar sem adicionar o curso
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
              <span className="sales-intro">Parabéns, seu livro já está garantido!</span> Agora avance com uma
              formação prática e passo a passo,{" "}
              <span className="sales-highlight">do diagrama ao diagnóstico de falhas.</span>
            </h1>
            <p className="sales-lead">
              Acompanhe a análise e a montagem dos circuitos em vídeo. Pratique com os exercícios do
              Comandos Elétricos Expert.
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
        </div>
        <div className="sales-proof-strip">
          <img
            src="/images/aluno-certificado-1.webp"
            alt="Aluno exibindo seu certificado"
            width={507}
            height={675}
          />
          <p>
            Conheça a experiência dos alunos.
            <span>Relatos em vídeo e registros de conclusão do curso.</span>
          </p>
          <a href="#depoimentos">Ver os depoimentos</a>
        </div>
      </SalesSection>

      <SalesSection tone="light">
        <SectionHeading
          label="Do estudo à aplicação"
          title="Do estudo no livro à aplicação nas aulas"
          description="O livro fica ao seu lado para consultar. Nas aulas, você acompanha o raciocínio e a execução dos comandos."
        />
        <div className="sales-comparison">
          <article>
            <BookOpenCheck aria-hidden="true" />
            <h3>Consulte no livro</h3>
            <p>
              Reveja conceitos, confira componentes e consulte os diagramas durante seus estudos.
            </p>
            <p className="sales-comparison-end">Tenha a referência sempre à mão.</p>
          </article>
          <article>
            <CircuitBoard aria-hidden="true" />
            <h3>Acompanhe nas aulas</h3>
            <p>
              Veja como o circuito é analisado e montado. Acompanhe a explicação do professor e
              exercite o que aprendeu.
            </p>
            <p className="sales-comparison-end">Entenda o raciocínio por trás da execução.</p>
          </article>
        </div>
      </SalesSection>

      <SalesSection tone="muted">
        <SectionHeading
          label="Como você vai aprender"
          title="Da função dos componentes à investigação das falhas"
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
            title="O conteúdo completo da sua formação"
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
        <div className="sales-certification">
          <div>
            <Eyebrow>Certificado da formação principal</Eyebrow>
            <h2>Certificado de conclusão do Comandos Elétricos Expert.</h2>
            <p>
              Ao concluir o curso, receba o certificado que documenta sua formação. Clique na imagem
              para ver o modelo em tamanho maior.
            </p>
          </div>
          <a
            href="/images/certificado-expert.webp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ampliar modelo do certificado principal do Comandos Elétricos Expert"
          >
            <img
              src="/images/certificado-expert.webp"
              alt="Modelo do certificado principal de conclusão do Comandos Elétricos Expert"
              width={1100}
              height={778}
              loading="lazy"
            />
          </a>
        </div>
      </SalesSection>

      <SalesSection tone="dark">
        <SectionHeading
          label="Bônus incluídos"
          title="Amplie seus estudos com os bônus incluídos"
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
            <div className="sales-bonus-copy">
              <span className="sales-small-label">Bônus 01</span>
              <h3>Certificação em LIDE</h3>
              <p>
                Documente seu aprendizado em Leitura e Interpretação de Diagramas de Comandos
                Elétricos com a certificação complementar de 40 horas.
              </p>
            </div>
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
            <div className="sales-bonus-copy">
              <span className="sales-small-label">Bônus 02</span>
              <h3>Eletrotécnica Aplicada</h3>
              <p>
                Reforce os fundamentos com Lei de Ohm e associação de resistores. Inclui certificado
                de 30 horas ao concluir o curso complementar.
              </p>
            </div>
          </article>
          <article>
            <div className="sales-bonus-visual sales-simulator-visual">
              <LibraryBig aria-hidden="true" />
            </div>
            <div className="sales-bonus-copy">
              <span className="sales-small-label">Bônus 03</span>
              <h3>Biblioteca técnica em PDF</h3>
              <p>
                Coleção com mais de 100 apostilas e e-books sobre eletricidade, automação,
                eletrônica, instalações e manutenção industrial para baixar e consultar.
              </p>
            </div>
          </article>
          <article>
            <div className="sales-bonus-visual sales-simulator-visual">
              <CircuitBoard aria-hidden="true" />
            </div>
            <div className="sales-bonus-copy">
              <span className="sales-small-label">Bônus 04</span>
              <h3>Simuladores de circuitos</h3>
              <p>
                Pratique os exercícios e desenvolva seus próprios diagramas com os programas
                simuladores. Inclui aulas práticas usando essas ferramentas.
              </p>
            </div>
          </article>
        </div>
        <div className="sales-bonus-support">
          <MessageCircle aria-hidden="true" />
          <div>
            <h3>Suporte direto com o professor</h3>
            <p>
              Tire suas dúvidas pelo WhatsApp pessoal do professor Sandro, com atendimento
              especializado e humanizado.
            </p>
          </div>
        </div>
      </SalesSection>

      <SalesSection tone="light" id="professor">
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
            <h2>Aprenda com Sandro Zander</h2>
            <p>
              Sandro Zander é engenheiro eletricista e professor há mais de 26 anos, autor do Livro
              Comandos Elétricos e fundador da Academia do Eletricista, com atuação em instituições
              como SENAI e FAETEC.
            </p>
          </div>
        </div>
        <div id="depoimentos" className="sales-testimonials">
          <SectionHeading
            label="Depoimentos de alunos"
            title="Depoimentos de quem já fez o curso"
            description="Assista aos relatos e veja os registros de alunos com seus certificados."
          />
          <div className="sales-videos">
            {testimonials.map((video) => (
              <TestimonialVideo key={video.id} name={video.name} id={video.id} />
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
        </div>
      </SalesSection>

      <SalesSection tone="dark" id="oferta">
        <div className="sales-offer-grid">
          <div>
            <SectionHeading
              label="Condição especial pós-compra"
              title="Adicione o curso completo ao seu pedido"
              description="Esta condição é oferecida a quem adquiriu o livro. Inclua o Comandos Elétricos Expert e acompanhe a aplicação nas aulas."
            />
            <ul className="sales-offer-list">
              {[
                "Aulas gravadas para estudar no seu ritmo",
                "Material didático e exercícios",
                "Certificado da formação principal",
                "Bônus incluídos na formação",
                "Suporte direto pelo WhatsApp",
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
                  Assista às aulas e avalie a formação. Se decidir não continuar, peça o
                  cancelamento por e-mail ou WhatsApp dentro desse prazo e receba o valor pago de
                  volta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SalesSection>

      <SalesSection tone="muted" id="faq" className="sales-faq">
        <SectionHeading label="Dúvidas frequentes" title="Respostas sobre a formação" />
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.q} value={`faq-${index}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>
                <p>{faq.a}</p>
                {faq.items && (
                  <ul className="sales-topic-list mt-4 !p-0">
                    {faq.items.map((item) => (
                      <li key={item}>
                        <Check aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </AccordionContent>
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
