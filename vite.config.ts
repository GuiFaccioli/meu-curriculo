import { loadEnv, defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

function gtmNoscriptPlugin(gtmId: string): Plugin {
  return {
    name: 'inject-gtm-noscript',
    transformIndexHtml() {
      if (!gtmId) {
        return []
      }

      return [
        {
          tag: 'noscript',
          injectTo: 'body',
          children: `<iframe src="https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(gtmId)}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        },
      ]
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const gtmId = env.VITE_GTM_ID?.trim() ?? ''

  return {
    plugins: [react(), gtmNoscriptPlugin(gtmId)],
  }
})
