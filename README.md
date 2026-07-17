# Currículo Online — Guilherme Faccioli

Portfólio/currículo online desenvolvido com React + TypeScript + Vite para apresentar perfil profissional, projetos, experiência, formação e competências de forma clara, responsiva e rastreável.

## Status atual do projeto

- Layout editorial responsivo com navegação por seções.
- Seções em accordion para medir interações reais do usuário.
- Projetos, certificados e CTAs com tracking centralizado.
- Favicon personalizado com ícone minimalista de prancheta/currículo.
- Integração preparada para GTM + GA4 via `dataLayer`, sem `gtag.js` direto no app.

## Deploy

- **Plataforma:** Vercel
- **URL de produção:** https://guilherme-faccioli-dev.vercel.app/
- **Branch principal:** `main`

## Ambiente

O projeto carrega o Google Tag Manager por variável de ambiente configurada localmente
ou na Vercel:

```env
VITE_GTM_ID=GTM-XXXXXXX
```

Notas importantes:

- `VITE_GTM_ID` é o ID do container do Google Tag Manager.
- O valor real deve ficar em `.env.local` ou nas variáveis de ambiente da Vercel.
- O Measurement ID do GA4 não fica no `.env` do projeto.
- O GA4 é configurado dentro do GTM.
- Não existe `gtag.js` direto no app.

## Analytics e Tracking

O tracking do portfólio é centralizado em `window.dataLayer` e validado no GTM/GA4.

Eventos principais:

- `portfolio_click`
- `section_toggle`
- `section_view`
- `engagement_time_checkpoint`

O evento `portfolio_click` envia os principais parâmetros de clique:

- `track_name`
- `click_type`
- `click_name`
- `click_text`
- `click_url`
- `click_location`
- `section_name`
- `project_name`
- `outbound`
- `page_path`

`click_name` espelha `click_type` e `click_location` espelha `section_name`, com fallback para `"unknown"` quando o valor base não existe.

Fluxo atual:

1. Usuário interage no portfólio.
2. O React dispara `dataLayer.push()`.
3. O GTM escuta o Custom Event.
4. A tag GA4 Event dispara.
5. O GA4 recebe o evento.
6. Realtime/DebugView mostram os dados.

Validação:

- GA4 Realtime
- GA4 DebugView
- Preview do GTM

Detalhes da implementação:

- [`docs/tracking/events.md`](docs/tracking/events.md)
- [`docs/tracking/gtm-ga4.md`](docs/tracking/gtm-ga4.md)
- [`docs/tracking/gtm-export-template.md`](docs/tracking/gtm-export-template.md)

## Design e interações

O portfólio foi simplificado com uma linguagem editorial mais limpa, CTAs claros e seções em accordion focadas em interação real.

Atualizações visuais recentes:

- Favicon substituído por uma prancheta minimalista para representar currículo.
- Navegação superior com links rastreáveis para GitHub e LinkedIn.
- Cards de projeto com ações rastreáveis para repositório, deploy ou contato.

Detalhes da implementação:

[`docs/design-implementation.md`](docs/design-implementation.md)

## Tecnologias

- React
- TypeScript
- Vite
- CSS

## Como rodar localmente

```bash
npm install
npm run dev
```

## Como gerar build

```bash
npm run build
```

## Links

- Portfólio online: https://guilherme-faccioli-dev.vercel.app/
- GitHub: https://github.com/GuiFaccioli
- LinkedIn: https://www.linkedin.com/in/guilherme-faccioli-b8a46611a/
