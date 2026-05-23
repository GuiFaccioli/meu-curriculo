import type { ReactNode } from 'react'

type SectionBlockProps = {
  title: string
  children: ReactNode
}

export function SectionBlock({ title, children }: SectionBlockProps) {
  return (
    <section className="section card">
      <div className="section-head">
        <h2>{title}</h2>
      </div>
      <div className="section-content">{children}</div>
    </section>
  )
}
