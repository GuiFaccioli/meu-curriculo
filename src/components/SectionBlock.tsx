import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { getPagePath, trackSectionToggle, trackSectionView } from '../tracking/events'

type SectionBlockProps = {
  id: string
  title: string
  children: ReactNode
  eyebrow?: string
  description?: string
  trackingSectionName?: string
  defaultOpen?: boolean
}

type InteractionType = 'click' | 'hover' | 'keyboard' | 'unknown'

export function SectionBlock({
  id,
  title,
  eyebrow,
  description,
  trackingSectionName,
  defaultOpen = false,
  children,
}: SectionBlockProps) {
  const contentId = useId()
  const headingId = `${id}-title`
  const sectionName = trackingSectionName ?? id
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const lastInteractionRef = useRef<InteractionType>('unknown')
  const hasTrackedViewRef = useRef(defaultOpen)

  const emitToggle = (toggleState: 'open' | 'closed', interactionType: Exclude<InteractionType, 'unknown'>) => {
    trackSectionToggle({
      section_name: sectionName,
      section_title: title,
      toggle_state: toggleState,
      interaction_type: interactionType,
      page_path: getPagePath(),
    })
  }

  const emitView = () => {
    if (hasTrackedViewRef.current) {
      return
    }

    hasTrackedViewRef.current = true

    trackSectionView({
      section_name: sectionName,
      section_title: title,
      page_path: getPagePath(),
    })
  }

  useEffect(() => {
    if (!defaultOpen || hasTrackedViewRef.current) {
      return
    }

    hasTrackedViewRef.current = true

    trackSectionView({
      section_name: sectionName,
      section_title: title,
      page_path: getPagePath(),
    })
  }, [defaultOpen, sectionName, title])

  const openSection = (interactionType: InteractionType, shouldTrackToggle: boolean) => {
    if (isOpen) {
      return
    }

    setIsOpen(true)

    emitView()

    if (shouldTrackToggle && interactionType !== 'unknown') {
      emitToggle('open', interactionType)
    }
  }

  const closeSection = (interactionType: InteractionType) => {
    if (!isOpen) {
      return
    }

    setIsOpen(false)

    if (interactionType !== 'unknown') {
      emitToggle('closed', interactionType)
    }
  }

  const toggleSection = (interactionType: InteractionType) => {
    const nextOpen = !isOpen

    setIsOpen(nextOpen)

    if (nextOpen) {
      emitView()
    }

    if (interactionType !== 'unknown') {
      emitToggle(nextOpen ? 'open' : 'closed', interactionType)
    }
  }

  return (
    <section
      id={id}
      className={`section card ${isOpen ? 'section--open' : 'section--closed'}`}
      aria-labelledby={headingId}
      data-section={sectionName}
      onMouseEnter={() => openSection('hover', false)}
      onMouseLeave={() => closeSection('hover')}
    >
      <div className="section-head">
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}

        <h2 id={headingId} className="section-title">
          <button
            type="button"
            className="section-toggle"
            aria-expanded={isOpen}
            aria-controls={contentId}
            data-track="section_toggle"
            data-track-type="accordion"
            data-section={sectionName}
            onClick={(event) => {
              const interactionType = lastInteractionRef.current === 'keyboard' || event.detail === 0
                ? 'keyboard'
                : 'click'

              lastInteractionRef.current = 'unknown'
              toggleSection(interactionType)
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                lastInteractionRef.current = 'keyboard'
              }
            }}
          >
            <span className="section-toggle-label">{title}</span>
            <span className="section-toggle-indicator" aria-hidden="true">
              {isOpen ? '−' : '+'}
            </span>
          </button>
        </h2>

        {description ? <p className="section-description">{description}</p> : null}
      </div>

      <div
        id={contentId}
        className="section-content-wrap"
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="section-content">{children}</div>
      </div>
    </section>
  )
}
