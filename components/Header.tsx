import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        borderBottom: "1px solid var(--color-border)",
        padding: "1rem 2rem",
        marginBottom: "2rem",
      }}
    >
      <nav
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          display: "flex",
          gap: "1.5rem",
          alignItems: "baseline",
        }}
      >
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
