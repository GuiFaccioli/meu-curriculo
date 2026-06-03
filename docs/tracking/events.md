# Tracking events

Este projeto usa `window.dataLayer` via Google Tag Manager. O GA4 deve ser configurado
somente dentro do GTM, sem `gtag.js` direto no app.

Os eventos descritos aqui já foram validados no GA4 Realtime.

## Debug local

Para ver logs de debug no navegador durante o desenvolvimento:

1. Defina `VITE_TRACKING_DEBUG=true` no seu arquivo `.env.local` ou equivalente.
2. Inicie o app em modo de desenvolvimento.
3. Abra o console do navegador.

Quando o debug está ativo, cada evento enviado ao `dataLayer` aparece em um grupo
recolhido do console com:

- nome do evento
- payload enviado
- horário aproximado

Em produção, os logs não aparecem por padrão.

## Evento `portfolio_click`

Dispara quando o usuário clica em links e CTAs marcados com `data-track`.
No momento, os elementos de navegação e CTA são enviados como `portfolio_click`,
inclusive os cards e ações de projeto marcados internamente com `data-track="project_click"`.

### Quando dispara

- `Ver GitHub`
- `Ver LinkedIn`
- links do menu para seções da página
- links de projetos
- links de certificados
- cards e ações de projeto
- demais elementos clicáveis que preservem `data-track`

### Payload

```js
{
  event: "portfolio_click",
  track_name: "portfolio_click",
  click_type: "github" | "linkedin" | "section-nav" | "repository" | "certificate" | ...,
  click_text: "Ver GitHub",
  click_url: "https://github.com/...",
  section_name: "top-nav" | "projects" | "experience" | "skills" | "education" | "contact",
  project_name: "ImobCheck",
  outbound: true,
  page_path: "/"
}
```

### Decisão que ajuda a tomar

- quais CTAs geram mais interesse
- quais seções recebem mais navegação
- quais projetos e certificados recebem mais cliques

## Evento `section_toggle`

Dispara quando uma seção em accordion abre ou fecha por interação intencional.
Não é enviado por hover visual.

### Quando dispara

- abertura e fechamento de:
  - Projetos
  - Experiência
  - Competências
  - Formação e certificações
  - Contato

### O que não dispara esse evento

- hover que só abre visualmente a seção
- movimentos rápidos do mouse sobre o cabeçalho
- abertura visual sem clique ou teclado

### Payload

```js
{
  event: "section_toggle",
  section_name: "projects",
  section_title: "Projetos",
  toggle_state: "open" | "closed",
  interaction_type: "click" | "keyboard",
  page_path: "/"
}
```

### Decisão que ajuda a tomar

- quais seções atraem mais atenção
- se o usuário prefere abrir por hover, clique ou teclado
- quais blocos têm maior interesse

## Evento `section_view`

Dispara na primeira vez que uma seção é aberta nesta carga da página.
Serve para medir exposição real do conteúdo, independentemente de clique ou hover.

### Quando dispara

- a primeira abertura de cada seção após o carregamento da página
- apenas uma vez por seção por page load

### Payload

```js
{
  event: "section_view",
  section_name: "projects",
  section_title: "Projetos",
  page_path: "/"
}
```

### Como interpretar

- ajuda a distinguir "viu o conteúdo" de "apenas passou o mouse"
- melhora a leitura de alcance real das seções
- útil para entender quais blocos o visitante realmente expôs

## Evento `engagement_time_checkpoint`

Dispara em checkpoints de engajamento por tempo visível.

### Checkpoints

- 15 segundos
- 30 segundos
- 60 segundos
- 120 segundos

### Payload

```js
{
  event: "engagement_time_checkpoint",
  seconds_elapsed: 30,
  checkpoint: 30,
  page_path: "/",
  visibility_state: "visible"
}
```

### Decisão que ajuda a tomar

- nível de atenção real na página
- se o visitante está ficando tempo suficiente para avaliar o perfil
- qual conteúdo sustenta mais engajamento
