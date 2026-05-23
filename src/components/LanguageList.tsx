import type { Language } from '../data/resume'

type LanguageListProps = {
  items: Language[]
}

export function LanguageList({ items }: LanguageListProps) {
  return (
    <ul className="language-list">
      {items.map((language) => (
        <li key={language.name}>
          <strong>{language.name}</strong>
          <span>{language.level}</span>
        </li>
      ))}
    </ul>
  )
}
