# Google Tag Manager + GA4

Este projeto foi preparado para receber o Google Tag Manager usando a variável de ambiente `VITE_GTM_ID`.

## Onde configurar

Defina o ID do container em um arquivo de ambiente local ou na plataforma de deploy:

```bash
VITE_GTM_ID=GTM-XXXXXXX
```

Exemplos comuns:

- `.env.local` para desenvolvimento local
- variáveis de ambiente do Vercel, Netlify ou outro provedor de deploy

## O que está implementado

- O GTM é inicializado somente quando `VITE_GTM_ID` existe.
- O `noscript` do GTM é injetado no `body` durante a renderização do HTML pelo Vite.
- Não existe `gtag.js` instalado diretamente no app.
- Não existe configuração de GA4 no código do projeto.
- Os eventos são enviados via `window.dataLayer` com `portfolio_click`, `section_toggle`, `section_view` e `engagement_time_checkpoint`.
- Os cards de projeto usam `data-track="project_click"` na interface, mas são normalizados para o evento `portfolio_click` no tracker central.

## Como configurar o GA4

Crie e publique a tag do **Google Analytics 4** dentro do **Google Tag Manager**.

Evite instalar GA4 diretamente no app e também dentro do GTM ao mesmo tempo.

## Triggers Custom Event no GTM

Crie estes triggers do tipo **Custom Event**:

- `portfolio_click`
- `section_toggle`
- `section_view`
- `engagement_time_checkpoint`

## Variáveis de Data Layer recomendadas

Crie variáveis de Data Layer para:

- `track_name`
- `click_type`
- `click_text`
- `click_url`
- `section_name`
- `section_title`
- `toggle_state`
- `interaction_type`
- `project_name`
- `outbound`
- `seconds_elapsed`
- `checkpoint`
- `page_path`
- `visibility_state`

## Tags GA4 recomendadas

### `portfolio_click`

Parâmetros recomendados:

- `click_type`
- `click_text`
- `click_url`
- `section_name`
- `project_name`
- `outbound`
- `page_path`

### `section_toggle`

Parâmetros recomendados:

- `section_name`
- `section_title`
- `toggle_state`
- `interaction_type` (`click` ou `keyboard`)
- `page_path`

### `engagement_time_checkpoint`

Parâmetros recomendados:

- `seconds_elapsed`
- `checkpoint`
- `page_path`
- `visibility_state`

### `section_view`

Parâmetros recomendados:

- `section_name`
- `section_title`
- `page_path`

## Dimensões personalizadas recomendadas no GA4

Considere registrar dimensões personalizadas para:

- `click_type`
- `click_text`
- `section_name`
- `section_title`
- `toggle_state`
- `interaction_type`
- `project_name`
- `outbound`
- `checkpoint`
- `visibility_state`

## Como validar no GTM Preview

1. Abra o container no Google Tag Manager.
2. Clique em **Preview**.
3. Acesse o currículo local ou publicado.
4. Clique nos CTAs do topo e nos links dos projetos/certificados.
5. Abra e feche as seções em accordion.
6. Confirme os eventos no painel de debug do GTM.

## Como evitar duplicidade de GA4

Use apenas uma destas abordagens:

1. **Recomendado neste projeto:** GTM no app + GA4 configurado somente dentro do GTM.
2. GA4 direto no app sem GTM.

Se você ativar GA4 nos dois lugares, o mesmo page view pode ser registrado duas vezes.

## Como validar

### 1. GTM Preview

Verifique se os quatro eventos aparecem com o payload esperado:

- `portfolio_click`
- `section_toggle`
- `section_view`
- `engagement_time_checkpoint`

### 2. GA4 DebugView

1. No GA4, abra **Admin > DebugView**.
2. Navegue pelo site em modo de pré-visualização.
3. Confirme se os eventos chegam ao GA4 sem duplicidade.
4. Verifique se os parâmetros personalizados estão sendo enviados.

## Observações

- O projeto não envia `gtag.js` diretamente.
- O projeto não configura GA4 no código.
- Se forem adicionadas rotas client-side no futuro, será preciso revisar o tracking de page view no GTM.
