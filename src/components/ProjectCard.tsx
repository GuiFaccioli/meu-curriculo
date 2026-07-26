import type { Project } from '../data/resume'

type ProjectCardProps = {
  project: Project
  labels: {
    overview: string
    stack: string
    differentiators: string
  }
}

export function ProjectCard({ project, labels }: ProjectCardProps) {
  const hasProjectActions = Boolean(project.deployUrl || project.repoUrl)
  const projectId =
    project.name
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'project'

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

      <section aria-labelledby={`${projectId}-overview`}>
        <h4 id={`${projectId}-overview`}>{labels.overview}</h4>
        <p className="project-description">{project.description}</p>
      </section>

      <section aria-labelledby={`${projectId}-stack`}>
        <h4 id={`${projectId}-stack`}>{labels.stack}</h4>
        {project.technologySummary ? (
          <p className="project-description">{project.technologySummary}</p>
        ) : (
          <div className="project-tech-list">
            {project.technologies.map((tech) => (
              <span key={tech} className="project-tech-item">
                {tech}
              </span>
            ))}
          </div>
        )}
      </section>

      <section aria-labelledby={`${projectId}-differentiators`}>
        <h4 id={`${projectId}-differentiators`}>{labels.differentiators}</h4>
        <ul className="project-highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

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
