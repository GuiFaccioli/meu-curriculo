declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
  }
}

const GTM_SCRIPT_ID = 'gtm-script'

export function initializeGtm(): void {
  const gtmId = import.meta.env.VITE_GTM_ID?.trim()

  if (!gtmId || typeof document === 'undefined') {
    return
  }

  if (document.getElementById(GTM_SCRIPT_ID)) {
    return
  }

  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push({
    'gtm.start': Date.now(),
    event: 'gtm.js',
  })

  const script = document.createElement('script')
  script.id = GTM_SCRIPT_ID
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`

  const firstScript = document.getElementsByTagName('script')[0]

  if (firstScript?.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript)
    return
  }

  document.head.appendChild(script)
}
