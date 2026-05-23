type SkillCategoryProps = {
  title: string
  items: string[]
}

export function SkillCategory({ title, items }: SkillCategoryProps) {
  const categoryClass =
    title === 'Frontend' || title === 'Backend'
      ? 'skill-category skill-category--technical motion-card'
      : 'skill-category skill-category--support motion-card'

  return (
    <article className={categoryClass}>
      <h3>{title}</h3>
      <div className="skill-text-list" aria-label={`Competencias de ${title}`}>
        {items.map((item) => (
          <span key={item} className="skill-text-item">
            {item}
          </span>
        ))}
      </div>
    </article>
  )
}
