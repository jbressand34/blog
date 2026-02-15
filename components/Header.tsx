import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <nav>
        <Link href="/" className="header-name">
          Jérémy Bressand
        </Link>
        <div className="header-links">
          <Link href="/">Blog</Link>
          <Link href="/presentation">About</Link>
        </div>
      </nav>
    </header>
  );
}
