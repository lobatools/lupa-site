import Link from 'next/link'
import { Header } from '@/components/Header'

export default function NotFound() {
  return (
    <div className="page">
      <Header />
      <main className="hero">
        <div className="copy">
          <p className="terminal">
            <span className="prompt">❯</span> 404
          </p>
          <h1 className="title">This page doesn&apos;t exist</h1>
          <Link className="releases" href="/">
            Back to LUPA →
          </Link>
        </div>
      </main>
    </div>
  )
}
