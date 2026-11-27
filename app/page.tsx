import { Header } from '@/components/Header'
import { NeonIcon } from '@/components/Logo'

// Under-construction page, from the "SoonE" artboard on the brand canvas.
export default function Home() {
  return (
    <div className="page">
      <div className="pattern" aria-hidden="true" />
      <div className="glow" aria-hidden="true" />

      <Header />

      <main className="hero">
        <div className="copy">
          <p className="terminal">
            <span className="prompt">❯</span> lupa --version
            <br />
            <span className="muted">
              v0.1.0 · coming 2027 <span className="cursor" aria-hidden="true" />
            </span>
          </p>
          <h1 className="title">
            <span className="nowrap">Look closer.</span>
            <br />
            <span className="muted">Soon.</span>
          </h1>
          <p className="lead">
            LUPA is a desktop app where your coding agent does the work, and you never lose sight of the code.
          </p>
          <a className="releases" href="https://github.com/lobatools/lupa">
            Watch releases on GitHub →
          </a>
          <span className="note">almost there.</span>
        </div>
        <NeonIcon className="icon" />
      </main>

      <footer className="bar foot">
        <span>
          by <a href="https://lobatools.com">lobatools</a>
        </span>
        <span>
          © 2026 <a href="https://julobato.com">Julianne Lobato</a>
        </span>
      </footer>
    </div>
  )
}
