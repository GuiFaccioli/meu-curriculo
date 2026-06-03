type SkillGroupProps = {
  title: string
  items: string[]
}

export function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <article className="skill-group">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}
