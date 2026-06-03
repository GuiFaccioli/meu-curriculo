# Design implementation

Este documento resume o estado atual da interface do portfólio e os principais
ajustes visuais e estruturais feitos para deixá-lo mais profissional, claro e fácil
de navegar.

## O que foi alterado

- O portfólio saiu de um visual genérico para uma linguagem editorial mais limpa, com
  cards sutis, foco em legibilidade e CTAs mais objetivos.
- A navegação superior ficou mais compacta e prioriza as ações mais úteis.
- O hero foi simplificado para comunicar nome, título, proposta profissional e ações
  diretas.
- As seções principais foram organizadas em accordion para reduzir ruído visual.
- A área de projetos passou a destacar problema, stack, links e ações úteis.
- Competências, formação/certificações e contato foram reorganizados para leitura
  vertical e escaneável.

## Componentes alterados

- `src/App.tsx`
- `src/App.css`
- `src/index.css`
- `src/data/resume.ts`
- `src/components/HeaderHero.tsx`
- `src/components/ProjectCard.tsx`
- `src/components/SectionBlock.tsx`
- `src/components/SocialLinks.tsx`
- `src/components/CertificationCard.tsx`

## Interações principais

- Links de navegação para seções importantes
- CTAs de GitHub e LinkedIn no topo
- Ações de projeto: `Abrir deploy` e `Ver repositório`
- Link de retorno ao topo no footer
- Accordions abrem e fecham por clique ou teclado

## Pronto para tracking

A interface já expõe atributos como:

- `data-track`
- `data-track-type`
- `data-section`
- `data-project-name`

Esses atributos suportam os eventos:

- `portfolio_click`
- `section_toggle`
- `section_view`
- `engagement_time_checkpoint`

## Tracking e validação

- O tracking está centralizado em `window.dataLayer`.
- O GTM continua preparado via `VITE_GTM_ID`.
- O GA4 é configurado dentro do GTM.
- Os eventos já foram validados no GA4 Realtime e no DebugView.

## Observações

- O comportamento de accordion por hover foi removido.
- O fluxo atual prioriza interações intencionais do usuário.
- O currículo de download foi disponibilizado como arquivo estático em `public/`
  para suportar o CTA correspondente.
