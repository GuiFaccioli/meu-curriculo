import { CertificationCard } from './components/CertificationCard'
import { EducationCard } from './components/EducationCard'
import { ExperienceCard } from './components/ExperienceCard'
import { HeaderHero } from './components/HeaderHero'
import { LanguageList } from './components/LanguageList'
import { ProjectCard } from './components/ProjectCard'
import { SectionBlock } from './components/SectionBlock'
import { SkillCategory } from './components/SkillCategory'
import { resumeData } from './data/resume'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="top-nav">
        <nav className="top-nav-links" aria-label="Seções do portfólio">
          {resumeData.sections.map((section) => (
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

        <div className="top-nav-actions">
          {resumeData.links.slice(0, 2).map((link) => (
            <a
              key={link.label}
              className={`top-nav-action top-nav-action--${link.variant}`}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              download={link.download}
              aria-label={link.ariaLabel}
              data-track="portfolio_click"
              data-track-type={link.trackType}
              data-section="top-nav"
            >
              {link.label}
            </a>
          ))}
        </div>
      </header>

      <main id="top">
        <HeaderHero
          name={resumeData.name}
          title={resumeData.title}
          subtitle={resumeData.subtitle}
          intro={resumeData.heroIntro}
          links={resumeData.links.slice(0, 2)}
        />

        <SectionBlock
          id="projetos"
          title="Projetos"
          eyebrow="Casos práticos"
          description="Cada card foi desenhado para ter ação clara, contexto suficiente e um caminho natural para tracking futuro."
        >
          <div className="projects-grid">
            {resumeData.projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          id="experiencia"
          title="Experiência"
          eyebrow="Trajetória profissional"
          description="A experiência em suporte técnico e operação reforça minha leitura de fluxo, atenção a detalhes e capacidade de diagnóstico."
        >
          <div className="stack">
            {resumeData.experiences.map((experience) => (
              <ExperienceCard key={`${experience.company}-${experience.period}`} item={experience} />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          id="competencias"
          title="Competências"
          eyebrow="Base técnica"
          description="Organizei as habilidades em blocos para facilitar leitura, comparação e futura instrumentação de engajamento."
        >
          <div className="stack vertical-list">
            {resumeData.skills.map((group) => (
              <SkillCategory key={group.title} title={group.title} items={group.items} />
            ))}

            <div className="languages-panel">
              <h3>Idiomas</h3>
              <LanguageList items={resumeData.languages} />
            </div>
          </div>
        </SectionBlock>

        <SectionBlock
          id="formacao"
          title="Formação e certificações"
          eyebrow="Credenciais"
          description="Formação acadêmica e certificações que reforçam consistência técnica e capacidade de aprendizado contínuo."
        >
          <div className="stack vertical-list">
            {resumeData.education.map((education) => (
              <EducationCard key={`${education.course}-${education.period}`} education={education} />
            ))}

            {resumeData.certifications.map((certification) => (
              <CertificationCard
                key={`${certification.name}-${certification.issued}`}
                certification={certification}
              />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          id="contato"
          title="Contato"
        >
          <div className="contact-band card">
            <address className="contact-details">
              <p>Contato: (11) 952695934</p>
              <p>Email: guifacciolic@gmail.com</p>
            </address>
          </div>
        </SectionBlock>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Guilherme Faccioli</p>
        <a href="#top" data-track="portfolio_click" data-track-type="back-to-top">
          Voltar ao topo
        </a>
      </footer>
    </div>
  )
}

export default App
