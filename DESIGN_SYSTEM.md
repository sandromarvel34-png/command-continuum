# DESIGN SYSTEM — Método Comandos Elétricos Expert

## Conceito visual

Manual técnico industrial premium: precisão, hierarquia e aplicação prática.
Marinho profundo nas áreas de decisão; branco e cinza técnico no conteúdo; grade de projeto muito sutil.
Azul pertence à identidade do produto e laranja é reservado ao CTA de compra.

## Cores

- Navy: #0B1F3A
- Navy 2: #102B50
- Blue brand: #0878C9
- CTA orange: #F28A00
- Background: #F7F9FC
- Surface: #FFFFFF
- Text: #14243A
- Muted text: #536174
- Border: #DCE3EB

## Tipografia

- Display/títulos: Barlow Condensed 700/800
- Corpo/UI: Sora 400/500/600/700
- Corpo mínimo: 17px
- Texto auxiliar mínimo recomendado: 15px

## Ritmo

- Desktop: 72–96px entre seções
- Mobile: 56–72px
- Alternância: navy > branco > cinza > branco > navy > cinza

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
- Hero: duas colunas alinhadas pelo topo; logo de 220px desktop / 190px mobile; primeira decisão integrada ao texto.
- Comparação: colunas equivalentes, sem um terceiro bloco repetindo o benefício.
- Metodologia: quatro etapas conectadas no desktop, duas no tablet e uma no celular. Sem cards para cada tópico.
- Fundos: marinho > branco > cinza > marinho > branco > marinho > cinza > marinho.
- Certificados reais com links para ampliação; cinco registros de alunos preservados por inteiro com object-fit: contain.
- Quatro depoimentos preservados: Bras Junior, Gilberto Oliveira, Igor e Reinaldo.
- FAQ reutiliza o Accordion existente. Compra reutiliza o Button existente, com no máximo dois CTAs.
- Garantia mantida em 30 dias; termos e canal de solicitação não devem ser inventados.
- Número 16.843 omitido da copy até comprovação da origem e do significado; credenciais do professor preservadas.
- Imagem de dispositivos é o ativo já existente no projeto: apresentação ilustrativa, sem afirmar que é captura real.
- Pendente: captura atual da plataforma e dos simuladores para substituir a apresentação ilustrativa.

- Fontes locais em public/fonts, com licenças preservadas; @theme static mantém os tokens mesmo sem classes utilitárias.
- Mobile: apresentação compacta do produto antes do texto de apoio; certificado e dispositivos dentro da primeira dobra.

## Método e programa

- Progressão real: Raio-X, IPO, MMDD e SIPAD; siglas com explicação, títulos alinhados e descrições sem promessas absolutas.
- Programa em sete grupos expansíveis usando o Accordion existente; títulos de 17px, números alinhados e lista com ícones Lucide.
- Método e programa compartilham a seção cinza para preservar o ritmo visual e manter a página de pós-compra compacta.
