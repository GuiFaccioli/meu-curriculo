import type { ReactNode } from 'react'

type SectionBlockProps = {
  id: string
  title: string
  children: ReactNode
  eyebrow?: string
  description?: string
}

export function SectionBlock({ id, title, eyebrow, description, children }: SectionBlockProps) {
  const headingId = `${id}-title`

  return (
    <section id={id} className="section card" aria-labelledby={headingId} data-section={id}>
      <div className="section-head">
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        <h2 id={headingId}>{title}</h2>
        {description ? <p className="section-description">{description}</p> : null}
      </div>
      <div className="section-content">{children}</div>
    </section>
  )
}
