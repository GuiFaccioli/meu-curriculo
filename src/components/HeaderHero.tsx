import type { ResumeLink } from '../data/resume'
import { SocialLinks } from './SocialLinks'

type HeaderHeroProps = {
  name: string
  title: string
  subtitle: string
  intro: string
  links: ResumeLink[]
}

export function HeaderHero({ name, title, subtitle, intro, links }: HeaderHeroProps) {
  const hasSubtitle = subtitle.trim().length > 0
  const hasIntro = intro.trim().length > 0

  return (
    <header className="hero-band">
      <div className="hero-layout hero-layout--compact">
        <div className="hero-content">
          <h1>{name}</h1>
          <p className="hero-title">{title}</p>
          {hasSubtitle ? <p className="hero-description">{subtitle}</p> : null}
          {hasIntro ? <p className="hero-intro">{intro}</p> : null}

          <SocialLinks links={links} />
        </div>
      </div>
    </header>
  )
}
