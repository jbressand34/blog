import Link from "next/link";
import { getArticleSlugs, getArticleBySlug } from "@/lib/markdown";
import { getAllTags, getAllCategories } from "@/lib/taxonomy";

export default function Home() {
  const slugs = getArticleSlugs();
  const articles = slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is NonNullable<typeof a> => a !== null)
    .sort((a, b) => (b.meta.date || "").localeCompare(a.meta.date || ""));

  const tags = getAllTags();
  const categories = getAllCategories();

  return (
    <main style={{ padding: "0 2rem 2rem", maxWidth: "48rem", margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Articles</h1>
      <p style={{ color: "#666", marginBottom: "1rem" }}>
        Bienvenue. Parcourez les articles, les tags ou les catégories.
      </p>

      {(tags.length > 0 || categories.length > 0) && (
        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
            Parcourir par
          </h2>
          {tags.length > 0 && (
            <p style={{ marginBottom: "0.25rem" }}>
              Tags :{" "}
              {tags.map((tag, i) => (
                <span key={tag}>
                  <Link href={`/tags/${encodeURIComponent(tag)}`}>{tag}</Link>
                  {i < tags.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
          )}
          {categories.length > 0 && (
            <p>
              Catégories :{" "}
              {categories.map((cat, i) => (
                <span key={cat}>
                  <Link href={`/categories/${encodeURIComponent(cat)}`}>
                    {cat}
                  </Link>
                  {i < categories.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
          )}
        </section>
      )}

      <h2 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
        Tous les articles
      </h2>
      {articles.length === 0 ? (
        <p>Aucun article pour l’instant.</p>
      ) : (
        <ul style={{ listStyle: "none" }}>
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
