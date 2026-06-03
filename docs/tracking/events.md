# Tracking events

Este projeto usa `window.dataLayer` via Google Tag Manager. O GA4 deve ser configurado
somente dentro do GTM, sem `gtag.js` direto no app.

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

Dispara quando uma seção em accordion abre ou fecha.

### Quando dispara

- abertura e fechamento de:
  - Projetos
  - Experiência
  - Competências
  - Formação e certificações
  - Contato

### Payload

```js
{
  event: "section_toggle",
  section_name: "projects",
  section_title: "Projetos",
  toggle_state: "open" | "closed",
  interaction_type: "click" | "hover" | "keyboard" | "unknown",
  page_path: "/"
}
```

### Decisão que ajuda a tomar

- quais seções atraem mais atenção
- se o usuário prefere abrir por hover, clique ou teclado
- quais blocos têm maior interesse

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
