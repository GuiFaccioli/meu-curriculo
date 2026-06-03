import type { ResumeLink } from '../data/resume'

type SocialLinksProps = {
  links: ResumeLink[]
  section?: string
}

function LinkIcon({ kind }: { kind: ResumeLink['kind'] }) {
  if (kind === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.17-1.11-1.48-1.11-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.03 1.53 1.03.88 1.52 2.3 1.08 2.86.83.09-.65.35-1.08.63-1.33-2.22-.26-4.56-1.12-4.56-4.98 0-1.1.39-2 1.03-2.7-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.03A9.5 9.5 0 0 1 12 6.84a9.5 9.5 0 0 1 2.5.34c1.91-1.3 2.75-1.03 2.75-1.03.55 1.41.2 2.46.1 2.72.64.7 1.03 1.6 1.03 2.7 0 3.87-2.34 4.71-4.57 4.97.36.31.68.91.68 1.84l-.01 2.73c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"
        />
      </svg>
    )
  }

  if (kind === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.94 8.5a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12ZM5.6 18.4h2.68V9.76H5.6V18.4Zm4.28 0h2.57v-4.43c0-1.17.22-2.3 1.67-2.3 1.43 0 1.45 1.33 1.45 2.38v4.35h2.58v-4.88c0-2.4-.52-4.25-3.33-4.25-1.35 0-2.26.74-2.63 1.45h-.04V9.76H9.88c.04.72 0 8.64 0 8.64Z"
        />
      </svg>
    )
  }

  if (kind === 'resume') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7 3.75A2.75 2.75 0 0 1 9.75 1h4.5A2.75 2.75 0 0 1 17 3.75v16.5A2.75 2.75 0 0 1 14.25 23h-4.5A2.75 2.75 0 0 1 7 20.25V3.75Zm2 0v16.5c0 .41.34.75.75.75h4.5c.41 0 .75-.34.75-.75V3.75A.75.75 0 0 0 14.25 3h-4.5a.75.75 0 0 0-.75.75ZM10 6h4v2h-4V6Zm0 4h4v2h-4v-2Zm0 4h4v2h-4v-2Z"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.2-.25 6.8 5.05 6.8-5.05H5.2Zm13.3 2.75-5.78 4.3a1.25 1.25 0 0 1-1.44 0L5.5 9.25v8a.25.25 0 0 0 .25.25h12.5a.25.25 0 0 0 .25-.25v-8Z"
      />
    </svg>
  )
}

export function SocialLinks({ links, section = 'hero' }: SocialLinksProps) {
  return (
    <nav className="hero-links" aria-label="Ações principais">
      {links.map((link) => {
        const isExternal = link.external ?? link.href.startsWith('http')
        const className = `hero-link hero-link--${link.variant}`
        const rel = isExternal ? 'noreferrer' : undefined
        const target = isExternal ? '_blank' : undefined

        return (
          <a
            key={link.label}
            className={className}
            href={link.href}
            target={target}
            rel={rel}
            download={link.download}
            aria-label={link.ariaLabel}
            data-track="portfolio_click"
            data-track-type={link.trackType}
            data-section={link.section ?? section}
          >
            <LinkIcon kind={link.kind} />
            <span>{link.label}</span>
          </a>
        )
      })}
    </nav>
  )
}
