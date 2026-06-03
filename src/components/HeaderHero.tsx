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
          <p className="hero-kicker">Desenvolvedor web • interfaces • APIs • dados</p>
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
          <div className="hero-visual-head">
            <div className="hero-visual-image-wrap">
              <img
                src={personaDev}
                alt="Ilustração de desenvolvedor trabalhando com cachorro ao lado"
                className="hero-illustration"
              />
            </div>
            <div>
              <p className="hero-visual-label">Resumo técnico</p>
              <h2 className="hero-visual-title">Tecnologia com foco prático</h2>
              <p className="hero-visual-text">
                Interfaces responsivas, consumo de APIs, organização de dados e projetos prontos
                para evolução contínua.
              </p>
            </div>
          </div>

          <div className="hero-visual-grid">
            <div className="hero-visual-block">
              <strong>Front-end</strong>
              <p>React, TypeScript, CSS</p>
            </div>
            <div className="hero-visual-block">
              <strong>Back-end</strong>
              <p>Node.js, Express, MySQL</p>
            </div>
            <div className="hero-visual-block">
              <strong>Prática</strong>
              <p>APIs, CRUDs, dashboards e integração de dados</p>
            </div>
            <div className="hero-visual-block">
              <strong>Diferencial</strong>
              <p>Olhar analítico para problemas e métricas</p>
            </div>
          </div>

          <ul className="hero-visual-pills" aria-label="Destaques do perfil">
            <li>Interfaces responsivas</li>
            <li>Consumo de APIs</li>
            <li>Organização de dados</li>
            <li>Projetos práticos com deploy</li>
          </ul>
        </aside>
      </div>
    </header>
  )
}
