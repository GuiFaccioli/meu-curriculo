import type { Project } from '../data/resume'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasProjectActions = Boolean(project.deployUrl || project.repoUrl)

  return (
    <article
      className="project-card motion-card"
      data-track="project_click"
      data-track-type="project-card"
      data-project-name={project.name}
    >
      <div className="project-card-head">
        <div>
          <h3>{project.name}</h3>
        </div>
      </div>

      <p className="project-description">{project.description}</p>

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

      {hasProjectActions ? (
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
        </div>
      ) : null}
    </article>
  )
}
