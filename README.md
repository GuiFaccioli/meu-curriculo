# Currículo Online — Guilherme Faccioli

Portfólio/currículo online desenvolvido com React + TypeScript + Vite para apresentar perfil profissional, projetos, experiência, formação e competências de forma clara, responsiva e rastreável.

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
