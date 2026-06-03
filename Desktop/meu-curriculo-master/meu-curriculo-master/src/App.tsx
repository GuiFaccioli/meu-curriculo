import persona2 from './assets/persona2.png'
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
    <div className="app">
      <HeaderHero
        name={resumeData.name}
        title={resumeData.title}
        subtitle={resumeData.subtitle}
        intro={resumeData.heroIntro}
        links={resumeData.links}
      />

      <main>
        <SectionBlock title="Projetos">
          <div className="projects-grid">
            {resumeData.projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </SectionBlock>

        <div className="education-certifications-cluster">
          <div className="education-section">
            <SectionBlock title="Formação">
              <div className="stack">
                {resumeData.education.map((education) => (
                  <EducationCard key={`${education.course}-${education.period}`} education={education} />
                ))}
              </div>
            </SectionBlock>
          </div>

          <img
            src={persona2}
            alt="Ilustração de desenvolvedor sentado com notebook ao lado de um cachorro"
            className="section-floating-persona"
          />

          <div className="certifications-section">
            <SectionBlock title="Certificações">
              <div className="stack">
                {resumeData.certifications.map((certification) => (
                  <CertificationCard
                    key={`${certification.name}-${certification.issued}`}
                    certification={certification}
                  />
                ))}
              </div>
            </SectionBlock>
          </div>
        </div>

        <SectionBlock title="Competências técnicas">
          <div className="skills-grid">
            {resumeData.skills.map((group) => (
              <SkillCategory key={group.title} title={group.title} items={group.items} />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock title="Idiomas">
          <LanguageList items={resumeData.languages} />
        </SectionBlock>

        <SectionBlock title="Experiência">
          <div className="stack">
            {resumeData.experiences.map((experience) => (
              <ExperienceCard key={`${experience.company}-${experience.period}`} item={experience} />
            ))}
          </div>
        </SectionBlock>
      </main>
    </div>
  )
}

export default App
