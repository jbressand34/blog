import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <nav>
        <Link
          href="/"
          style={{ fontWeight: 700, fontSize: "1.25rem" }}
        >
          Blog
        </Link>
        <Link href="/presentation" className="text-muted">
          About
        </Link>
      </nav>
    </header>
  );
}
