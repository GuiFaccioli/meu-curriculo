# ATS Editorial — Rebrand e atualização do currículo

## Objetivo

Transformar o site do currículo de Guilherme Faccioli em uma experiência digital orientada à contratação, com conteúdo atualizado, estrutura rastreável por ATS e uma identidade editorial profissional. O site e o currículo HTML baixável devem compartilhar a mesma fonte de verdade textual.

## Público e prioridade

- Público principal: recrutadores de tecnologia.
- Objetivo: gerar contato e avançar em processos seletivos para posições júnior de desenvolvimento.
- Prioridade: clareza, escaneabilidade, palavras-chave técnicas e evidências de experiência.
- O site não deve se comportar como uma landing page de SaaS ou uma página de venda de serviços.

## Decisão de design

Adotar a direção **ATS Editorial**: uma composição de uma coluna, tipografia profissional, alto contraste, hierarquia explícita e personalidade visual controlada.

O design deve ser memorável por sua organização e qualidade tipográfica, não por efeitos, cards decorativos ou informações escondidas. A estética atual clara/editorial pode ser evoluída, mas o laranja deixa de ser o protagonista e passa a funcionar como acento pontual.

## Estrutura de conteúdo

### Ordem principal

1. Cabeçalho com nome, cargo-alvo, localização e contatos.
2. Resumo profissional.
3. Competências técnicas, agrupadas por domínio.
4. Experiência profissional.
5. Projetos relevantes.
6. Formação acadêmica.
7. Idiomas.
8. CTA final de contato e download.

### Conteúdo

- Substituir integralmente os dados antigos de `ImobCheck` e `FlowLogin` pelos projetos `Restaurante Comandas` e `TechZone Periféricos`.
- Atualizar o cargo-alvo para: `Desenvolvedor Full Stack Jr | TypeScript | React | Next.js | Node.js | PostgreSQL | Engenharia de Software com IA`.
- Atualizar formação, contatos, experiência no Einstein/Escala.app, competências e idiomas com o conteúdo fornecido pelo usuário.
- Manter resultados mensuráveis da experiência, especialmente redução de chamados em mais de 80% e satisfação superior a 90%.
- Manter “Engenharia de software assistida por IA” como diferencial técnico relevante, porém secundário à competência de desenvolvimento full stack.
- Remover certificações antigas do fluxo visual caso não façam parte do novo currículo fornecido; a implementação deve evitar inventar certificações ou experiências.

## Arquitetura de conteúdo

- `src/data/resume.ts` continua sendo a fonte tipada da página principal.
- Criar uma representação reutilizável ou uma composição equivalente para o currículo HTML em `public/curriculo-guilherme-faccioli.html`, evitando divergência textual entre a página e o download.
- Preservar os atributos `data-track`, `data-track-type`, `data-section` e `data-project-name` já usados pelo tracking.
- Não alterar a arquitetura de tracking GTM/GA4 sem necessidade.

## Sistema visual

### Layout

- Container centralizado com largura confortável para leitura.
- Uma coluna em desktop e mobile; projetos podem usar agrupamento visual, mas sem depender de uma grade para transmitir informação.
- Navegação superior simples, com links de seção e ações de GitHub, LinkedIn e download.
- Todas as seções ficam disponíveis no documento inicial; não usar accordion para conteúdo essencial.

### Tipografia

- Manter uma família sans-serif legível para texto e títulos, com pesos distintos para criar hierarquia.
- Usar `clamp()` com limites moderados para o nome, evitando overflow em telas pequenas.
- Aplicar `text-wrap: balance` em headings e limitar blocos de texto a aproximadamente 65–75 caracteres por linha quando aplicável.
- Reservar fonte monoespaçada para tecnologias ou metadados técnicos, sem transformar a página em terminal.

### Cor e superfície

- Fundo quase branco neutro com leve tonalidade coerente, texto principal escuro e texto secundário com contraste WCAG AA.
- Um único acento de marca, baseado no laranja existente, para links ativos, CTAs e pequenos marcadores.
- Superfícies com hairlines discretas; evitar sombras amplas, glassmorphism, gradientes em texto e cards repetitivos.
- Raio máximo de cards entre 12 e 16px; controles podem usar pill quando semanticamente apropriado.

### Estados e interação

- Links e botões com foco visível, hover discreto e alvos adequados para toque.
- Respeitar `prefers-reduced-motion`.
- Navegação com âncoras deve permanecer funcional em teclado e mobile.
- Download, LinkedIn, GitHub e e-mail devem ter rótulos claros e acessíveis.

## Componentes afetados

- `App.tsx`: reorganizar a ordem e remover o padrão de accordion para conteúdo essencial.
- `HeaderHero.tsx`: transformar em cabeçalho de currículo com cargo-alvo, contatos e ações.
- `ProjectCard.tsx`: adaptar para leitura rápida por recrutador, com contexto, stack, responsabilidades e links.
- `src/data/resume.ts`: substituir o conteúdo antigo pela versão atualizada.
- `App.css` e `index.css`: implementar tokens, layout, tipografia, responsividade e estados do novo sistema.
- Componentes de experiência, skills, formação, idiomas e links: ajustar apenas quando necessário para suportar a nova hierarquia.
- `public/curriculo-guilherme-faccioli.html`: sincronizar o conteúdo e a estrutura ATS do currículo baixável.

## Acessibilidade e qualidade

- Usar headings em ordem semântica e landmarks corretos.
- Garantir contraste mínimo de 4.5:1 para texto normal.
- Não comunicar informação somente por cor ou ícone.
- Validar teclado, foco, links externos e comportamento em 320px, 768px e desktop.
- Executar `npm run lint` e `npm run build` antes de considerar concluído.

## Fora de escopo

- Backend, autenticação, banco de dados ou SaaS.
- Alteração do tracking existente, salvo ajustes necessários para elementos removidos ou renomeados.
- Criação de novas certificações, métricas ou experiências não fornecidas pelo usuário.
- Transformar o currículo em uma página de venda de serviços.

## Critérios de aceite

- A página apresenta apenas o conteúdo profissional atualizado e não contém os projetos antigos.
- O currículo HTML baixável está alinhado ao conteúdo principal.
- Recrutadores conseguem localizar cargo-alvo, resumo, stack, experiência, projetos, formação e contato sem abrir accordions.
- O layout é legível em mobile e desktop, sem overflow horizontal.
- A página preserva o tracking existente e passa em lint/build.
