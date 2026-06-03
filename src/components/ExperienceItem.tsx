import type { Experience } from '../data/resume'

type ExperienceItemProps = {
  item: Experience
}

export function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <article className="experience-item">
      <h3>{item.role}</h3>
      <p className="experience-meta">
        {item.company} | {item.period}
      </p>
      <ul>
        {item.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  )
}
