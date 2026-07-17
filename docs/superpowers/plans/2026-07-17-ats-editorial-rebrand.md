# ATS Editorial Rebrand Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Atualizar o currículo digital e o HTML baixável para uma experiência ATS Editorial, orientada a recrutadores de tecnologia.

**Architecture:** `src/data/resume.ts` permanece como fonte tipada do conteúdo da aplicação. A página React será reorganizada em uma leitura linear, sem esconder conteúdo essencial, enquanto `public/curriculo-guilherme-faccioli.html` receberá a mesma hierarquia textual e os mesmos dados profissionais em formato imprimível.

**Tech Stack:** React 19, TypeScript 6, Vite 8, CSS puro, HTML semântico, ESLint.

## Global Constraints

- Público principal: recrutadores de tecnologia.
- Prioridade: clareza, escaneabilidade, palavras-chave técnicas e evidências de experiência.
- O site não deve se comportar como uma landing page de SaaS ou uma página de venda de serviços.
- Todas as seções ficam disponíveis no documento inicial; não usar accordion para conteúdo essencial.
- Manter resultados mensuráveis: redução de chamados em mais de 80% e satisfação superior a 90%.
- Preservar `data-track`, `data-track-type`, `data-section` e `data-project-name`.
- Não inventar certificações, métricas ou experiências.
- Garantir contraste mínimo de 4.5:1 para texto normal.
- Validar 320px, 768px e desktop sem overflow horizontal.
- Executar `npm run lint` e `npm run build` antes da conclusão.

---

### Task 1: Substituir a fonte de dados do currículo

**Files:**
- Modify: `src/data/resume.ts`

**Interfaces:**
- Produces: `resumeData` consumido pelos componentes existentes e pelos novos campos do cabeçalho/seções.

- [ ] **Step 1: Reescrever os tipos de conteúdo necessários**

Manter tipos explícitos e adicionar apenas campos necessários para o currículo atualizado, incluindo contatos, localização, resumo, categorias técnicas, projetos, experiência e formação. Não usar `any`.

- [ ] **Step 2: Substituir o conteúdo antigo**

Remover `ImobCheck`, `FlowLogin` e o projeto antigo de catálogo. Manter `Restaurante Comandas` com as tecnologias e responsabilidades fornecidas pelo usuário. Atualizar o título, resumo, experiência no Einstein/Escala.app, formação na Universidade Anhembi Morumbi e idiomas.

- [ ] **Step 3: Reorganizar palavras-chave por domínio**

Separar competências em Front-end, Back-end e arquitetura, Bancos de dados e ORMs, Testes e qualidade e Engenharia de software assistida por IA. Manter termos como TypeScript, React, Next.js, Node.js, PostgreSQL, Prisma, Drizzle, Vitest, Playwright, TDD e Git.

- [ ] **Step 4: Validar referências de conteúdo**

Executar `rg "ImobCheck|FlowLogin|MySQL" src/data/resume.ts` e confirmar que nenhum conteúdo antigo permaneceu, exceto se uma tecnologia fizer parte explicitamente do novo texto.

### Task 2: Reorganizar a página para leitura ATS

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/HeaderHero.tsx`
- Modify: `src/components/SectionBlock.tsx`
- Modify: `src/components/ExperienceCard.tsx`
- Modify: `src/components/ProjectCard.tsx`
- Modify: `src/components/SkillCategory.tsx`

**Interfaces:**
- Consumes: `resumeData` atualizado da Task 1.
- Produces: documento React linear com landmarks e headings rastreáveis.

- [ ] **Step 1: Tornar o cabeçalho completo**

Renderizar nome, cargo-alvo, localização, telefone, e-mail, LinkedIn, GitHub e ação de download em HTML semântico. O nome deve ser o único `h1` da página.

- [ ] **Step 2: Adicionar a seção de resumo profissional**

Renderizar o resumo completo como texto visível, sem depender de `subtitle` ou `intro` vazios.

- [ ] **Step 3: Remover o accordion de conteúdo essencial**

Alterar `SectionBlock` para manter o conteúdo aberto por padrão e remover a dependência de interação para revelar projetos, experiência, competências e formação. Preservar eventos de tracking de visualização e toggle somente se ainda fizerem sentido, sem esconder o conteúdo quando JavaScript falhar.

- [ ] **Step 4: Ajustar a ordem das seções**

Usar a ordem: Resumo, Competências técnicas, Experiência profissional, Projetos, Formação acadêmica, Idiomas e Contato. Garantir que cada seção possua `h2` e que subseções usem `h3`.

- [ ] **Step 5: Adaptar projetos para recrutadores**

Exibir em cada projeto: nome, tipo, descrição, problema/contexto, tecnologias, principais responsabilidades/entregas e links. Remover o rótulo artificial de “Destaque” quando ele não acrescentar informação profissional.

- [ ] **Step 6: Ajustar experiência e competências**

Usar listas semânticas e escaneáveis. Dar prioridade à experiência do Einstein/Escala.app e preservar os resultados quantitativos.

### Task 3: Implementar o novo sistema visual ATS Editorial

**Files:**
- Modify: `src/index.css`
- Modify: `src/App.css`

**Interfaces:**
- Consumes: estrutura semântica da Task 2 e tokens existentes.
- Produces: identidade visual responsiva, acessível e sem dependência de efeitos decorativos.

- [ ] **Step 1: Definir tokens do rebrand**

Usar fundo quase branco neutro, texto escuro, texto secundário com contraste AA, hairlines discretas e laranja apenas como acento. Manter raios entre 8px e 16px e eliminar sombras largas.

- [ ] **Step 2: Criar ritmo de leitura**

Substituir o excesso de cards por blocos editoriais, divisores e agrupamentos semânticos. Usar largura máxima de leitura confortável e espaçamento consistente entre seções.

- [ ] **Step 3: Atualizar tipografia**

Aplicar escala responsiva moderada ao nome e títulos, `text-wrap: balance` em headings, line-height confortável e peso suficiente para leitura rápida.

- [ ] **Step 4: Implementar responsividade**

Validar navegação, contatos, listas de tecnologias e projetos em 320px, 768px e desktop. Garantir quebra de URLs, títulos longos e ausência de overflow horizontal.

- [ ] **Step 5: Implementar estados acessíveis**

Garantir `:focus-visible`, hover discreto, áreas de toque adequadas e alternativa de movimento via `prefers-reduced-motion: reduce`.

### Task 4: Atualizar o currículo HTML baixável

**Files:**
- Modify: `public/curriculo-guilherme-faccioli.html`

**Interfaces:**
- Consumes: conteúdo validado da Task 1.
- Produces: currículo estático imprimível, semanticamente estruturado e alinhado à página principal.

- [ ] **Step 1: Reescrever o conteúdo textual**

Substituir integralmente o currículo antigo pelo nome, cargo-alvo, contatos, resumo, competências, experiência, projetos, formação e idiomas fornecidos pelo usuário.

- [ ] **Step 2: Aplicar estrutura semântica**

Usar `header`, `main`, `section`, `h1`, `h2`, `h3`, listas e links reais. Não usar tabelas para layout nem texto incorporado em imagens.

- [ ] **Step 3: Ajustar CSS de impressão**

Manter uma página limpa e legível para impressão/PDF, com cores econômicas, links visíveis e quebra de seção controlada.

- [ ] **Step 4: Conferir sincronização**

Comparar manualmente os títulos, stack, datas, métricas e contatos com `src/data/resume.ts` e corrigir qualquer divergência.

### Task 5: Verificar tracking, qualidade e entrega

**Files:**
- Modify: arquivos de tracking somente se a validação encontrar atributos quebrados.
- Modify: `README.md` somente se a documentação do projeto ficar desatualizada pelo rebrand.

**Interfaces:**
- Consumes: implementação das Tasks 1–4.
- Produces: build validado e checklist de qualidade.

- [ ] **Step 1: Verificar atributos de tracking**

Executar `rg "data-track|data-track-type|data-section|data-project-name" src` e confirmar que navegação, contatos e projetos continuam rastreáveis sem duplicação de listeners.

- [ ] **Step 2: Executar lint**

Rodar `npm run lint`. Resultado esperado: processo concluído sem erros.

- [ ] **Step 3: Executar build**

Rodar `npm run build`. Resultado esperado: TypeScript e Vite concluídos sem erros.

- [ ] **Step 4: Fazer inspeção visual**

Rodar o servidor Vite e verificar a página em 320px, 768px e desktop, conferindo overflow, ordem das seções, foco por teclado, links e download.

- [ ] **Step 5: Fazer revisão final de conteúdo**

Confirmar que o site e o currículo baixável não contêm os projetos antigos, não escondem conteúdo essencial e usam exatamente os dados fornecidos pelo usuário.

## Estratégia de commits

Não criar commits automaticamente porque o diretório atual não possui `.git`. Se o repositório for restaurado, separar em commits convencionais por unidade: `feat: update resume content`, `feat: apply ats editorial redesign`, `docs: sync downloadable resume`.

## Self-review

- Cobertura: conteúdo, estrutura ATS, sistema visual, currículo baixável, acessibilidade, tracking e validação estão cobertos nas cinco tarefas.
- Placeholders: não há `TODO`, `TBD` ou instruções vagas de implementação.
- Consistência: `resumeData` é a fonte tipada; componentes e HTML baixável consomem/espelham o mesmo conteúdo; as tarefas seguem a ordem de dependência.
