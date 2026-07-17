import { EducationCard } from './components/EducationCard'
import { ExperienceCard } from './components/ExperienceCard'
import { HeaderHero } from './components/HeaderHero'
import { LanguageList } from './components/LanguageList'
import { ProjectCard } from './components/ProjectCard'
import { SectionBlock } from './components/SectionBlock'
import { SkillCategory } from './components/SkillCategory'
import { resumeData } from './data/resume'
import { usePortfolioTracking } from './tracking/usePortfolioTracking'
import './App.css'

function App() {
  usePortfolioTracking()

  const headerLinks = resumeData.links

  return (
    <div className="app-shell">
      <header className="top-nav">
        <a className="top-nav-mark" href="#top" aria-label="Voltar ao início">
          GF
        </a>

        <nav className="top-nav-links" aria-label="Seções do currículo">
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
      </header>

      <main id="top">
        <HeaderHero
          name={resumeData.name}
          title={resumeData.title}
          location={resumeData.location}
          phone={resumeData.phone}
          email={resumeData.email}
          links={headerLinks}
        />

        <SectionBlock
          id="resumo"
          title="Resumo profissional"
          description="Desenvolvimento full stack com foco em aplicações web funcionais, seguras, responsivas e orientadas às necessidades dos usuários."
          trackingSectionName="summary"
        >
          <div className="summary-copy">
            <p>{resumeData.summary}</p>
            <p>{resumeData.summaryDetails}</p>
            <p>
              <strong>Engenharia de software assistida por IA:</strong> {resumeData.aiSummary}
            </p>
          </div>
        </SectionBlock>

        <SectionBlock
          id="competencias"
          title="Competências técnicas"
          description="Tecnologias, práticas e conceitos aplicados em projetos full stack e na evolução de produtos digitais."
          trackingSectionName="skills"
        >
          <div className="skills-grid">
            {resumeData.skills.map((group) => (
              <SkillCategory key={group.title} title={group.title} items={group.items} />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          id="experiencia"
          title="Experiência profissional"
          description="Experiência em suporte técnico, análise de problemas, validação de produto e melhoria de fluxos operacionais."
          trackingSectionName="experience"
        >
          <div className="stack">
            {resumeData.experiences.map((experience) => (
              <ExperienceCard key={`${experience.company}-${experience.period}`} item={experience} />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          id="projetos"
          title="Projetos relevantes"
          description="Aplicações práticas que demonstram domínio de front-end, back-end, dados, regras de negócio e qualidade de software."
          trackingSectionName="projects"
        >
          <div className="projects-grid">
            {resumeData.projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          id="formacao"
          title="Formação acadêmica"
          description="Formação em andamento e desenvolvimento contínuo da base de engenharia de software."
          trackingSectionName="education"
        >
          <div className="stack">
            {resumeData.education.map((education) => (
              <EducationCard key={`${education.course}-${education.period}`} education={education} />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock id="idiomas" title="Idiomas" trackingSectionName="languages">
          <LanguageList items={resumeData.languages} />
        </SectionBlock>

        <SectionBlock id="contato" title="Contato" trackingSectionName="contact">
          <div className="contact-band">
            <p>Estou aberto a oportunidades como Desenvolvedor Full Stack Jr, Front-end Jr ou Web Jr.</p>
            <a
              className="button button-primary"
              href={`mailto:${resumeData.email}`}
              data-track="portfolio_click"
              data-track-type="contact"
              data-section="contact"
            >
              Entrar em contato
            </a>
          </div>
        </SectionBlock>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Guilherme Faccioli Crescencio</p>
        <a href="#top" data-track="portfolio_click" data-track-type="back-to-top">
          Voltar ao topo
        </a>
      </footer>
    </div>
  )
}

export default App
