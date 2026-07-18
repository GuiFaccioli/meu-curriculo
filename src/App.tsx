import { useEffect, useState } from 'react'
import { EducationCard } from './components/EducationCard'
import { ExperienceCard } from './components/ExperienceCard'
import { HeaderHero } from './components/HeaderHero'
import { LanguageList } from './components/LanguageList'
import { ProjectCard } from './components/ProjectCard'
import { SectionBlock } from './components/SectionBlock'
import { SkillCategory } from './components/SkillCategory'
import { getLocalizedResumeData, interfaceCopy, localeOptions, type Locale } from './data/localization'
import { resumeData } from './data/resume'
import { usePortfolioTracking } from './tracking/usePortfolioTracking'
import './App.css'

function App() {
  usePortfolioTracking()

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light'

    const storedTheme = window.localStorage.getItem('resume-theme')
    if (storedTheme === 'dark' || storedTheme === 'light') return storedTheme

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === 'undefined') return 'pt'

    const storedLocale = window.localStorage.getItem('resume-locale')
    return storedLocale === 'en' || storedLocale === 'es' || storedLocale === 'pt' ? storedLocale : 'pt'
  })
  const socialLinks = resumeData.links.filter((link) => link.kind === 'github' || link.kind === 'linkedin')
  const content = getLocalizedResumeData(locale)
  const copy = interfaceCopy[locale]

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('resume-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : locale
    window.localStorage.setItem('resume-locale', locale)
  }, [locale])

  return (
    <div className="app-shell">
      <header className="top-nav">
        <a className="top-nav-mark" href="#top" aria-label={copy.home}>
          GF
        </a>

        <nav className="top-nav-links" aria-label={copy.sections}>
          {content.sections.map((section) => (
            <a
              key={section.href}
              href={section.href}
              className="top-nav-link"
              data-track="portfolio_click"
              data-track-type="section-nav"
              data-section={section.href.replace('#', '')}
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="locale-switcher" role="group" aria-label={copy.language}>
          {localeOptions.map((option) => (
            <button
              key={option.code}
              type="button"
              className={`locale-option ${locale === option.code ? 'locale-option--active' : ''}`}
              aria-label={option.label}
              aria-pressed={locale === option.code}
              onClick={() => setLocale(option.code)}
            >
              <img className="locale-flag" src={option.icon} alt="" aria-hidden="true" />
            </button>
          ))}
        </div>

        <button
          type="button"
          className="theme-toggle"
          aria-label={theme === 'dark' ? copy.lightMode : copy.darkMode}
          aria-pressed={theme === 'dark'}
          onClick={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
        >
          <span className={`theme-toggle-option ${theme === 'light' ? 'theme-toggle-option--active' : ''}`} aria-hidden="true">
            ☼
          </span>
          <span className={`theme-toggle-option ${theme === 'dark' ? 'theme-toggle-option--active' : ''}`} aria-hidden="true">
            ☾
          </span>
        </button>
      </header>

      <main id="top">
        <HeaderHero
          name={resumeData.name}
          title={content.title}
          location={content.location}
          links={socialLinks}
          linksAriaLabel={copy.professionalNetworks}
        />

        <SectionBlock
          id="resumo"
          title={copy.summary}
          trackingSectionName="summary"
        >
          <div className="summary-copy">
            <p>{content.summary}</p>
            <p>
              <strong>{locale === 'pt' ? 'Engenharia de software assistida por IA:' : locale === 'en' ? 'AI-assisted software engineering:' : 'Ingeniería de software asistida por IA:'}</strong>{' '}
              {content.aiSummary}
            </p>
          </div>
        </SectionBlock>

        <SectionBlock
          id="competencias"
          title={copy.skills}
          trackingSectionName="skills"
        >
          <div className="skills-grid">
            {content.skills.map((group) => (
              <SkillCategory key={group.title} title={group.title} items={group.items} />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          id="experiencia"
          title={copy.experience}
          trackingSectionName="experience"
        >
          <div className="stack">
            {content.experiences.map((experience) => (
              <ExperienceCard key={`${experience.company}-${experience.period}`} item={experience} />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          id="projetos"
          title={copy.projects}
          trackingSectionName="projects"
        >
          <div className="projects-grid">
            {content.projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          id="formacao"
          title={copy.education}
          trackingSectionName="education"
        >
          <div className="stack">
            {content.education.map((education) => (
              <EducationCard key={`${education.course}-${education.period}`} education={education} />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock id="idiomas" title={copy.languages} trackingSectionName="languages">
          <LanguageList items={content.languages} />
        </SectionBlock>

      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Guilherme Faccioli</p>
        <div className="site-footer-links">
          <a href="#top" data-track="portfolio_click" data-track-type="back-to-top">
            {copy.backToTop}
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
