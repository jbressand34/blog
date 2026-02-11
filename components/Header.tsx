import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        borderBottom: "1px solid #eee",
        padding: "1rem 2rem",
        marginBottom: "2rem",
      }}
    >
      <nav
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
        }}
      >
        <Link
          href="/"
          style={{ fontWeight: 700, fontSize: "1.25rem" }}
        >
          Blog
        </Link>
      </nav>
    </header>
  );
}
