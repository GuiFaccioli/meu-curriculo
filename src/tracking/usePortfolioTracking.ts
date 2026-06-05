import { useEffect } from 'react'
import {
  buildSafeClickUrl,
  getPagePath,
  getVisibilityState,
  isBrowser,
  isOutboundUrl,
  normalizeTrackableText,
  trackEngagementCheckpoint,
  trackPortfolioClick,
} from './events'

const CHECKPOINTS = [15, 30, 60, 120] as const

function buildPortfolioClickPayload(trackable: HTMLElement) {
  const trackName = trackable.dataset.track || 'unknown'
  const clickType = trackable.dataset.trackType || trackName
  const sectionName = trackable.dataset.section
  const projectName = trackable.dataset.projectName
  const clickName = clickType || 'unknown'
  const clickLocation = sectionName || 'unknown'
  const explicitLabel = normalizeTrackableText(trackable.getAttribute('aria-label'))
  const fallbackLabel = trackable.dataset.projectName ? trackable.dataset.projectName : undefined
  const clickText = normalizeTrackableText(
    explicitLabel || fallbackLabel || trackable.textContent,
  )
  const clickUrl = buildSafeClickUrl(trackable.getAttribute('href'))
  const outbound = isOutboundUrl(clickUrl)

  return {
    track_name: 'portfolio_click' as const,
    click_type: clickType,
    click_name: clickName,
    click_text: clickText,
    click_url: clickUrl,
    click_location: clickLocation,
    section_name: sectionName,
    project_name: projectName,
    outbound,
    page_path: getPagePath(),
  }
}

export function usePortfolioTracking(): void {
  useEffect(() => {
    if (!isBrowser()) {
      return
    }

    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) {
        return
      }

      const trackable = event.target.closest<HTMLElement>('[data-track]')

      if (!trackable) {
        return
      }

      if (trackable.dataset.track === 'section_toggle') {
        return
      }

      trackPortfolioClick(buildPortfolioClickPayload(trackable))
    }

    document.addEventListener('click', handleClick, true)

    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [])

  useEffect(() => {
    if (!isBrowser()) {
      return
    }

    const firedCheckpoints = new Set<number>()
    let visibleSeconds = 0

    const maybeTrackCheckpoint = () => {
      if (document.visibilityState !== 'visible') {
        return
      }

      visibleSeconds += 1

      CHECKPOINTS.forEach((checkpoint) => {
        if (visibleSeconds >= checkpoint && !firedCheckpoints.has(checkpoint)) {
          firedCheckpoints.add(checkpoint)
          trackEngagementCheckpoint({
            seconds_elapsed: visibleSeconds,
            checkpoint,
            page_path: getPagePath(),
            visibility_state: getVisibilityState(),
          })
        }
      })
    }

    const intervalId = window.setInterval(maybeTrackCheckpoint, 1000)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [])
}
