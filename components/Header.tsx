import Link from 'next/link'
import { Mark } from '@/components/Logo'

export function Header() {
  return (
    <header className="bar">
      <Link className="home" href="/">
        <Mark size={28} />
        <span className="wordmark">LUPA</span>
      </Link>
    </header>
  )
}
