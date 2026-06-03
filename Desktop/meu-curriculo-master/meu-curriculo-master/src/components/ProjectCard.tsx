import type { Project } from '../data/resume'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardClassName =
    project.name === 'ImobCheck'
      ? 'project-card project-card-featured motion-card'
      : 'project-card motion-card'

  return (
    <article className={cardClassName}>
      <div className="project-card-head">
        <h3>{project.name}</h3>
        {project.link ? (
          <a href={project.link} target="_blank" rel="noreferrer">
            Ver repositorio
          </a>
        ) : null}
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-tech-list" aria-label={`Tecnologias de ${project.name}`}>
        {project.technologies.map((tech) => (
          <span key={tech} className="project-tech-item">
            {tech}
          </span>
        ))}
      </div>

      {project.highlights ? (
        <ul className="project-highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}
