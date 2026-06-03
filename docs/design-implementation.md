# Design implementation

## O que foi alterado

- O portfólio saiu de um visual azul genérico para uma linguagem editorial em canvas claro, com CTA laranja e cartões com bordas sutis.
- A home ganhou uma navegação superior com links para seções importantes e ações rápidas no topo.
- O hero passou a ter CTAs claros, resumo rápido em cards e uma área visual mais informativa.
- A seção de projetos foi redesenhada para expor problema, stack, destaques e ações por projeto.
- As áreas de experiência, competências, formação, certificações e contato foram reorganizadas para melhorar escaneabilidade.

## Componentes alterados

- `src/App.tsx`
- `src/App.css`
- `src/index.css`
- `src/data/resume.ts`
- `src/components/HeaderHero.tsx`
- `src/components/ProjectCard.tsx`
- `src/components/SectionBlock.tsx`
- `src/components/SocialLinks.tsx`

## Elementos clicáveis criados ou reforçados

- `Ver GitHub`
- `Ver LinkedIn`
- `Baixar currículo`
- `Entrar em contato`
- Navegação para `Projetos`, `Experiência`, `Competências` e `Contato`
- Ações dos projetos: `Abrir deploy` e `Ver repositório`
- Link de retorno ao topo no footer

## Pronto para tracking futuro

Foram adicionados atributos como:

- `data-track`
- `data-track-type`
- `data-section`
- `data-project-name`

Esses atributos já preparam a interface para eventos como:

- `portfolio_click`
- `project_click`
- `contact_click`
- `resume_click`
- `section_view`
- `engagement_time_checkpoint`

## Observações

- O tracking não foi implementado nesta etapa.
- O GTM continua preparado via `VITE_GTM_ID`.
- O currículo foi disponibilizado como arquivo estático em `public/` para suportar o CTA de download.
