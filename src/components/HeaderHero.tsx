import personaDev from '../assets/persona-dev.png'
import type { HeroStat, ResumeLink } from '../data/resume'
import { SocialLinks } from './SocialLinks'

type HeaderHeroProps = {
  name: string
  title: string
  subtitle: string
  intro: string
  links: ResumeLink[]
  stats: HeroStat[]
}

export function HeaderHero({ name, title, subtitle, intro, links, stats }: HeaderHeroProps) {
  const hasSubtitle = subtitle.trim().length > 0
  const hasIntro = intro.trim().length > 0

  return (
    <header className="hero-band">
      <div className="hero-layout">
        <div className="hero-content">
          <p className="hero-kicker">Currículo online • design editorial • tracking-ready</p>
          <h1>{name}</h1>
          <p className="hero-title">{title}</p>
          {hasSubtitle ? <p className="hero-description">{subtitle}</p> : null}
          {hasIntro ? <p className="hero-intro">{intro}</p> : null}

          <SocialLinks links={links} />

          <ul className="hero-stats" aria-label="Resumo rápido do perfil">
            {stats.map((stat) => (
              <li key={stat.label} className="hero-stat card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
                <p>{stat.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <aside className="hero-visual card" aria-label="Vista rápida do portfólio">
          <div className="hero-visual-topbar" aria-hidden="true">
            <span />
            <span />
            <span />
            <p>Portfolio / overview</p>
          </div>

          <div className="hero-visual-grid">
            <div className="hero-visual-profile">
              <img
                src={personaDev}
                alt="Ilustração de desenvolvedor trabalhando com cachorro ao lado"
                className="hero-illustration"
              />
              <div>
                <strong>Foco em interface e clareza</strong>
                <p>React • TypeScript • Node.js • MySQL</p>
              </div>
            </div>

            <div className="hero-visual-code code-block">
              <code>
                {'portfolio.update({\n'}
                {'  goal: "CTAs claros, cards clicáveis e tracking futuro",\n'}
                {'  mode: "editorial",\n'}
                {'  status: "ready"\n'}
                {'})'}
              </code>
            </div>

            <ul className="hero-visual-pills" aria-label="Pontos fortes do portfólio">
              <li>Projetos com problema e solução</li>
              <li>Links diretos para ação</li>
              <li>Estrutura pronta para GTM</li>
            </ul>
          </div>
        </aside>
      </div>
    </header>
  )
}
