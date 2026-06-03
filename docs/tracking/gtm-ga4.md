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

## Como configurar o GA4

Crie e publique a tag do **Google Analytics 4** dentro do **Google Tag Manager**.

Evite instalar GA4 diretamente no app e também dentro do GTM ao mesmo tempo.

## Como evitar duplicidade de GA4

Use apenas uma destas abordagens:

1. **Recomendado neste projeto:** GTM no app + GA4 configurado somente dentro do GTM.
2. GA4 direto no app sem GTM.

Se você ativar GA4 nos dois lugares, o mesmo page view pode ser registrado duas vezes.

## Como validar

### 1. GTM Preview

1. Abra o container no Google Tag Manager.
2. Clique em **Preview**.
3. Acesse o site local ou publicado.
4. Verifique se o container conecta e se as tags disparam como esperado.

### 2. GA4 DebugView

1. No GA4, abra **Admin > DebugView**.
2. Navegue pelo site em modo de pré-visualização.
3. Confirme se os eventos chegam ao GA4 sem duplicidade.

## Observações

- O projeto não dispara eventos personalizados de analytics ainda.
- Se forem adicionadas rotas client-side no futuro, será preciso revisar o tracking de page view no GTM.
