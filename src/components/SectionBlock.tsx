import { useEffect, type ReactNode } from 'react'
import { getPagePath, trackSectionView } from '../tracking/events'

type SectionBlockProps = {
  id: string
  title: string
  children: ReactNode
  description?: string
  trackingSectionName?: string
}

export function SectionBlock({ id, title, description, trackingSectionName, children }: SectionBlockProps) {
  const sectionName = trackingSectionName ?? id

  useEffect(() => {
    trackSectionView({
      section_name: sectionName,
      section_title: title,
      page_path: getPagePath(),
    })
  }, [sectionName, title])

  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`} data-section={sectionName}>
      <div className="section-head">
        <h2 id={`${id}-title`} className="section-title">
          {title}
        </h2>
        {description ? <p className="section-description">{description}</p> : null}
      </div>
      <div className="section-content">{children}</div>
    </section>
  )
}
