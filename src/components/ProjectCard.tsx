import type { Project } from '../data/resume'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const fallbackMailTo = `mailto:guifacciolic@gmail.com?subject=${encodeURIComponent(
    `Quero saber mais sobre ${project.name}`,
  )}`
  const hasPrimaryAction = Boolean(project.deployUrl || project.repoUrl)

  return (
    <article
      className="project-card motion-card"
      data-track="project_click"
      data-track-type="project-card"
      data-project-name={project.name}
    >
      <div className="project-card-head">
        <div>
          <p className="project-kicker">Projeto relevante</p>
          <h3>{project.name}</h3>
        </div>
      </div>

      <p className="project-description">{project.description}</p>
      <p className="project-problem">
        <strong>Contexto:</strong> {project.problem}
      </p>

      <div className="project-tech-list" aria-label={`Tecnologias de ${project.name}`}>
        {project.technologies.map((tech) => (
          <span key={tech} className="project-tech-item">
            {tech}
          </span>
        ))}
      </div>

      <ul className="project-highlights">
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <div className="project-card-actions" aria-label={`Ações do projeto ${project.name}`}>
        {project.deployUrl ? (
          <a
            className="button button-primary"
            href={project.deployUrl}
            target="_blank"
            rel="noreferrer"
            data-track="project_click"
            data-track-type="deploy"
            data-project-name={project.name}
          >
            Abrir projeto
          </a>
        ) : null}

        {project.repoUrl ? (
          <a
            className="button button-secondary"
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            data-track="project_click"
            data-track-type="repository"
            data-project-name={project.name}
          >
            Ver repositório
          </a>
        ) : null}

        {!hasPrimaryAction ? (
          <a
            className="button button-secondary"
            href={fallbackMailTo}
            data-track="project_click"
            data-track-type="project-contact"
            data-project-name={project.name}
          >
            Solicitar acesso
          </a>
        ) : null}
      </div>
    </article>
  )
}
