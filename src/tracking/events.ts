declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
  }
}

export type PortfolioClickParams = {
  track_name: 'portfolio_click'
  click_type: string
  click_text: string
  click_url?: string
  section_name?: string
  project_name?: string
  outbound: boolean
  page_path: string
}

export type SectionToggleParams = {
  section_name: string
  section_title: string
  toggle_state: 'open' | 'closed'
  interaction_type: 'click' | 'hover' | 'keyboard' | 'unknown'
  page_path: string
}

export type SectionViewParams = {
  section_name: string
  section_title: string
  page_path: string
}

export type EngagementCheckpointParams = {
  seconds_elapsed: number
  checkpoint: number
  page_path: string
  visibility_state: DocumentVisibilityState
}

export function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}

export function getPagePath(): string {
  if (!isBrowser()) {
    return ''
  }

  return window.location.pathname
}

export function getVisibilityState(): DocumentVisibilityState {
  if (!isBrowser()) {
    return 'hidden'
  }

  return document.visibilityState
}

export function ensureDataLayer(): Array<Record<string, unknown>> {
  if (!isBrowser()) {
    return []
  }

  window.dataLayer = window.dataLayer ?? []
  return window.dataLayer
}

export function isTrackingDebugEnabled(): boolean {
  if (!isBrowser()) {
    return false
  }

  return import.meta.env.DEV || import.meta.env.VITE_TRACKING_DEBUG === 'true'
}

function logTrackingEvent(eventName: string, params: Record<string, unknown>): void {
  if (!isTrackingDebugEnabled() || typeof console === 'undefined') {
    return
  }

  const timestamp = new Date().toISOString()

  if (typeof console.groupCollapsed === 'function') {
    console.groupCollapsed(`[tracking] ${eventName} @ ${timestamp}`)
    console.log('event', eventName)
    console.log('payload', params)
    console.log('timestamp', timestamp)
    console.groupEnd()
    return
  }

  console.log(`[tracking] ${eventName} @ ${timestamp}`, params)
}

export function trackEvent(eventName: string, params: Record<string, unknown>): void {
  if (!isBrowser()) {
    return
  }

  const payload = {
    event: eventName,
    ...params,
  }

  ensureDataLayer().push(payload)
  logTrackingEvent(eventName, payload)
}

export function trackPortfolioClick(params: PortfolioClickParams): void {
  trackEvent('portfolio_click', params)
}

export function trackSectionToggle(params: SectionToggleParams): void {
  trackEvent('section_toggle', params)
}

export function trackSectionView(params: SectionViewParams): void {
  trackEvent('section_view', params)
}

export function trackEngagementCheckpoint(params: EngagementCheckpointParams): void {
  trackEvent('engagement_time_checkpoint', params)
}

export function normalizeTrackableText(text: string | null | undefined): string {
  return (text ?? '').replace(/\s+/g, ' ').trim()
}

export function buildSafeClickUrl(url: string | null | undefined): string | undefined {
  if (!isBrowser() || !url) {
    return undefined
  }

  const trimmedUrl = url.trim()

  if (!trimmedUrl || trimmedUrl.startsWith('mailto:') || trimmedUrl.startsWith('tel:')) {
    return undefined
  }

  try {
    const resolvedUrl = new URL(trimmedUrl, window.location.href)
    return resolvedUrl.toString()
  } catch {
    return undefined
  }
}

export function isOutboundUrl(url: string | undefined): boolean {
  if (!isBrowser() || !url) {
    return false
  }

  try {
    const resolvedUrl = new URL(url, window.location.href)
    return resolvedUrl.origin !== window.location.origin
  } catch {
    return false
  }
}
