# DESIGN SYSTEM — Método Comandos Elétricos Expert

## Conceito visual

Manual técnico industrial premium: precisão, hierarquia e aplicação prática.
Marinho profundo nas áreas de decisão; branco e cinza técnico no conteúdo; grade de projeto muito sutil.
Azul pertence à identidade do produto e laranja é reservado ao CTA de compra.

## Cores

- Navy: `oklch(0.26 0.055 255)` (`--navy`)
- Navy 2: `oklch(0.32 0.07 255)` (`--navy-2`)
- Blue brand: `oklch(0.53 0.19 255)` (`--brand`)
- CTA orange: `oklch(0.72 0.18 55)` (`--cta`)
- Background: `oklch(0.985 0.004 255)` (`--background`)
- Surface: `oklch(1 0 0)` (`--surface`)
- Text: `oklch(0.22 0.035 255)` (`--foreground`)
- Muted text: `oklch(0.49 0.025 255)` (`--muted-foreground`)
- Border: `oklch(0.89 0.015 255)` (`--border`)

## Tipografia

- Display/títulos: Barlow Condensed 700/800
- Corpo/UI: Sora 400/500/600/700
- Corpo mínimo: 17px
- Texto auxiliar mínimo recomendado: 15px

## Ritmo

- Desktop: 72–96px entre seções
- Mobile: 56–72px
- Alternância: navy > branco > cinza > navy > branco > navy > cinza > navy

## Componentes

- CTA primário: laranja sólido, texto navy escuro/branco conforme contraste
- Cards apenas quando agruparem informação; evitar grade de cards repetitiva
- Metodologia: linha de progressão numerada
- Prova: vídeo/foto real antes de texto explicativo
- Oferta: bloco navy forte, sem elementos concorrentes
- Ícones: Lucide, traço simples

## Regras de conversão

- OTO curta
- Máximo 2 CTAs de compra
- Preço não é headline
- Prova social perto do topo
- Cada módulo descrito uma vez
- Números-chave no máximo duas vezes na página
- Sem depoimentos ou resultados inventados

## Revisão de composição — outubro de 2026

- Componentes compartilhados: `SalesSection`, `SectionHeading` e `Eyebrow` em src/components/sales-layout.tsx.
- Todos os estilos da página usam o prefixo sales- e os tokens de src/styles.css. Nenhuma biblioteca adicionada.
- Container: 1160px; margens mobile: 20px; seções: 80px desktop / 60px mobile.
- Hero: uma coluna de texto com largura máxima de 820px e decisão de 460px; logo de 220px desktop / 190px mobile.
- Comparação: colunas equivalentes, sem um terceiro bloco repetindo o benefício.
- Metodologia: quatro etapas conectadas no desktop, duas no tablet e uma no celular. Sem cards para cada tópico.
- Fundos: marinho > branco > cinza > marinho > branco > marinho > cinza > marinho.
- Certificados reais com links para ampliação; cinco registros de alunos preservados por inteiro com object-fit: contain.
- Quatro depoimentos preservados: Bras Junior, Gilberto Oliveira, Igor e Reinaldo.
- FAQ reutiliza o Accordion existente. Compra reutiliza o Button existente, com no máximo dois CTAs.
- Garantia mantida em 30 dias; termos e canal de solicitação não devem ser inventados.
- Número 16.843 omitido da copy até comprovação da origem e do significado; credenciais do professor preservadas.
- Pendente: capturas reais da plataforma e dos simuladores para futura inclusão; mockup genérico removido.

- Fontes locais em public/fonts, com licenças preservadas; @theme static mantém os tokens mesmo sem classes utilitárias.
- Primeira dobra concentra promessa, texto de apoio, dados da formação e decisão; sem mockup genérico e sem certificado.

## Método e programa

- Progressão real: Raio-X, IPO, MMDD e SIPAD; siglas com explicação, títulos alinhados e descrições sem promessas absolutas.
- Programa em sete grupos expansíveis usando o Accordion existente; títulos de 17px, números alinhados e lista com ícones Lucide.
- Método e programa compartilham a seção cinza para preservar o ritmo visual e manter a página de pós-compra compacta.

## Bônus da oferta

- Livro e aulas ao vivo (incluindo gravações desses encontros) excluídos da oferta pós-compra. Quatro bônus: LIDE, Eletrotécnica Aplicada, biblioteca técnica e simuladores.
- Bônus em duas colunas no desktop e tablet; uma coluna no celular. Certificados reais preservados; biblioteca e simuladores usam representação gráfica com ícones Lucide.
- Suporte pelo WhatsApp do professor em faixa própria, como recurso incluído; não numerar como bônus adicional.

## Hierarquia dos certificados

- Certificado principal em bloco próprio ao final do programa, antes dos bônus, com imagem ampla e link para ampliação.
- Certificados dos bônus compactos (260px desktop / 210px mobile), preservando a prioridade da formação principal.

## Revisão de copy e composição da oferta pós-compra

- Headline aprovada preservada. Texto de apoio apresenta o curso pelo nome e explica como estudar: observar a análise em vídeo e praticar nos exercícios.
- CTA explicita o curso; recusa discreta e neutra, sem repetir uma formulação negativa.
- Títulos de seção descrevem conteúdo e função, sem slogans genéricos.
- Bônus compactos: imagem ou ícone ao lado da descrição no desktop; título ao lado do ativo e corpo em largura inteira no celular. Certificado principal continua maior e separado.
- Preço inicial centralizado com o botão. Dados da formação limitados a 540px para manter unidade visual no hero.
- Garantia explica solicitação por e-mail ou WhatsApp e devolução do valor pago, conforme a oferta original do criador.
- Mantidos: quatro depoimentos, cinco fotos, sete grupos do programa, quatro bônus, cinco dúvidas, preço, links e rodapé. Não introduzir a pergunta excluída, livro como bônus, aulas ao vivo ou mockup genérico.

## Auditoria de apresentação e reprodução

- CSS de vendas consolidado em definições base e breakpoints ordenados; nenhuma fonte ou biblioteca adicionada.
- `TestimonialVideo`: prévia com miniatura real do YouTube, nome e botão acessível; fundo marinho e texto continuam visíveis se a imagem externa falhar. O player carrega somente após interação.
- Os quatro vídeos preservam seus IDs, política de referência e opção de assistir diretamente no YouTube. Reprodução externa depende da disponibilidade do serviço; contagem de players não comprova reprodução.
- Tablet estreito e celular usam certificado principal em largura total e bônus compactos em uma coluna.
- Títulos de seção diretos e sem ponto final; erros de navegação em pt-BR; metadados sem prévia obsoleta.
