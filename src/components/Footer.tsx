type FooterProps = {
  text: string
}

export function Footer({ text }: FooterProps) {
  return <footer className="footer">{text}</footer>
}
