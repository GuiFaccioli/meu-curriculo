import { SocialLinks } from './SocialLinks'
import type { ResumeLink } from '../data/resume'

type HeaderHeroProps = {
  name: string
  title: string
  location: string
  links: ResumeLink[]
  linksAriaLabel: string
}

export function HeaderHero({ name, title, location, links, linksAriaLabel }: HeaderHeroProps) {
  return (
    <header className="hero-band">
      <div className="hero-layout">
        <div className="hero-content">
          <h1>{name}</h1>
          <p className="hero-title">{title}</p>

          <address className="hero-contact">
            <span>{location}</span>
          </address>

          <SocialLinks links={links} ariaLabel={linksAriaLabel} />

        </div>
      </div>
    </header>
  )
}
