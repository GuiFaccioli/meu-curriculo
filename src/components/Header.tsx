import type { ResumeLink } from '../data/resume'

type HeaderProps = {
  name: string
  title: string
  subtitle: string
  links: ResumeLink[]
}

export function Header({ name, title, subtitle, links }: HeaderProps) {
  return (
    <header className="hero">
      
      <h1>{name}</h1>
      <h2>{title}</h2>
      <p className="hero-subtitle">{subtitle}</p>
      <nav aria-label="Contato">
        <ul className="links-list">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
