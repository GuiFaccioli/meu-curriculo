import type { ResumeLink } from '../data/resume'
import { SocialLinkIcon } from './SocialLinks'

type HeaderHeroProps = {
  name: string
  title: string
  location: string
  phone: string
  email: string
  links: ResumeLink[]
}

export function HeaderHero({ name, title, location, phone, email, links }: HeaderHeroProps) {
  return (
    <header className="hero-band">
      <div className="hero-layout">
        <div className="hero-content">
          <p className="hero-kicker">Currículo profissional</p>
          <h1>{name}</h1>
          <p className="hero-title">{title}</p>

          <address className="hero-contact">
            <span>{location}</span>
            <a href={`tel:${phone.replace(/\D/g, '')}`}>{phone}</a>
            <a href={`mailto:${email}`}>{email}</a>
          </address>

          <nav className="hero-links" aria-label="Links profissionais">
            {links.map((link) => (
              <a
                key={link.label}
                className={`hero-link hero-link--${link.variant}`}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                download={link.download}
                aria-label={link.ariaLabel}
                data-track="portfolio_click"
                data-track-type={link.trackType}
                data-section={link.section ?? 'header'}
              >
                <SocialLinkIcon kind={link.kind} />
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
