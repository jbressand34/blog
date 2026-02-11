import Link from "next/link";
import { getArticleSlugs, getArticleBySlug } from "@/lib/markdown";

export default function Home() {
  const slugs = getArticleSlugs();
  const articles = slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is NonNullable<typeof a> => a !== null)
    .sort((a, b) => (b.meta.date || "").localeCompare(a.meta.date || ""));

  return (
    <main style={{ padding: "0 2rem 2rem", maxWidth: "48rem", margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Articles</h1>
      <p style={{ color: "#666", marginBottom: "1rem" }}>Bienvenue. Articles disponibles :</p>
      {articles.length === 0 ? (
        <p>Aucun article pour l’instant.</p>
      ) : (
        <ul style={{ marginTop: "1rem", listStyle: "none" }}>
          {articles.map((article) => (
            <li key={article.meta.slug} style={{ marginBottom: "0.5rem" }}>
              <Link href={`/articles/${article.meta.slug}`}>
                {article.meta.title}
              </Link>
              {article.meta.date && (
                <span style={{ color: "#666", marginLeft: "0.5rem" }}>
                  — {article.meta.date}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
