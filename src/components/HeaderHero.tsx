import type { ResumeLink } from '../data/resume'
import personaDev from '../assets/persona-dev.png'
import { SocialLinks } from './SocialLinks'

type HeaderHeroProps = {
  name: string
  title: string
  subtitle: string
  intro: string
  links: ResumeLink[]
}

export function HeaderHero({ name, title, subtitle, intro, links }: HeaderHeroProps) {
  return (
    <header className="hero card">
      <div className="hero-content">
        <h1>{name}</h1>
        <p className="hero-title">{title}</p>
        <p className="hero-description">{subtitle}</p>
        <p className="hero-intro">{intro}</p>
        <SocialLinks links={links} />
      </div>

      <div className="hero-visual">
        <img
          src={personaDev}
          alt="Ilustração de desenvolvedor trabalhando com cachorro ao lado"
          className="hero-illustration"
        />
      </div>
    </header>
  )
}
