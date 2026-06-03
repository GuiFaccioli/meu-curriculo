import { useId, useState, type ReactNode } from 'react'

type SectionBlockProps = {
  id: string
  title: string
  children: ReactNode
  eyebrow?: string
  description?: string
  trackingSectionName?: string
  defaultOpen?: boolean
}

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
  const [isPinnedOpen, setIsPinnedOpen] = useState(defaultOpen)

  const openSection = () => setIsOpen(true)
  const closeSection = () => {
    if (!isPinnedOpen) {
      setIsOpen(false)
    }
  }
  const toggleSection = () => {
    setIsPinnedOpen((currentPinned) => {
      const nextPinned = !currentPinned
      setIsOpen(nextPinned)
      return nextPinned
    })
  }

  return (
    <section
      id={id}
      className={`section card ${isOpen ? 'section--open' : 'section--closed'}`}
      aria-labelledby={headingId}
      data-section={sectionName}
      onMouseEnter={openSection}
      onMouseLeave={closeSection}
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
            onClick={toggleSection}
            onFocus={openSection}
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
