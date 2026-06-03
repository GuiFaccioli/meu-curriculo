import type { ResumeLink } from '../data/resume'

type FooterCTAProps = {
  text: string
  links: ResumeLink[]
}

export function FooterCTA({ text, links }: FooterCTAProps) {
  return (
    <footer className="footer-cta card">
      <p>{text}</p>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
