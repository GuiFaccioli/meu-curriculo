import type { Experience } from '../data/resume'

type ExperienceCardProps = {
  item: Experience
}

export function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <article className="experience-card motion-card">
      <div className="experience-top">
        <h3>{item.role}</h3>
        <span>{item.period}</span>
      </div>
      <p className="experience-company">{item.company}</p>
      <ul>
        {item.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  )
}
