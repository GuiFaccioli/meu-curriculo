type HeaderHeroProps = {
  name: string
  title: string
  location: string
  phone: string
  email: string
}

export function HeaderHero({ name, title, location, phone, email }: HeaderHeroProps) {
  return (
    <header className="hero-band">
      <div className="hero-layout">
        <div className="hero-content">
          <p className="hero-kicker">Currículo profissional</p>
          <h1>{name}</h1>
          <p className="hero-title">{title}</p>

          <address className="hero-contact">
            <span>{location}</span>
            <a href={`tel:${phone.replace(/\D/g, '')}`}>{phone}</a>
            <span>{email}</span>
          </address>

        </div>
      </div>
    </header>
  )
}
