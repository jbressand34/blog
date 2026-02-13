import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <span>© {year}</span>
        <Link href="/presentation">About</Link>
      </div>
    </footer>
  );
}
