import type { Education } from '../data/resume'

type EducationCardProps = {
  education: Education
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <article className="education-card">
      <h3>{education.course}</h3>
      <p>{education.institution}</p>
      <span>{education.period}</span>
    </article>
  )
}
