import personaFooter from '../assets/persona2.png'

export function FooterVisual() {
  return (
    <footer className="footer-visual" aria-label="Rodape visual">
      <img
        src={personaFooter}
        alt="Ilustracao de desenvolvedor sentado com notebook ao lado de um cachorro"
        className="footer-persona"
      />
    </footer>
  )
}
