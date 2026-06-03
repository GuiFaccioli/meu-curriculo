import type { Certification } from '../data/resume'

type CertificationCardProps = {
  certification: Certification
}

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <article className="certification-card motion-card">
      <h3>{certification.name}</h3>
      <p>{certification.issuer}</p>
      <span>Emitido em: {certification.issued}</span>
      {certification.credentialId ? (
        <small>Credential ID: {certification.credentialId}</small>
      ) : null}
      {certification.link ? (
        <a
          href={certification.link}
          target="_blank"
          rel="noreferrer"
          data-track="portfolio_click"
          data-track-type="certificate"
          data-section="formacao"
        >
          Abrir certificado
        </a>
      ) : null}
    </article>
  )
}
