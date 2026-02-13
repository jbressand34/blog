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
    <main className="reading-width">
      <h1>Articles</h1>
      <p className="text-muted" style={{ marginBottom: "1rem" }}>
        Welcome. Browse articles, tags, or categories.
      </p>

      {(tags.length > 0 || categories.length > 0) && (
        <section style={{ marginBottom: "2rem" }}>
          <h2>Browse by</h2>
          {tags.length > 0 && (
            <>
              <span style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>Tags</span>
              <div className="pills">
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags/${encodeURIComponent(tag)}`}
                    className="pill"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </>
          )}
          {categories.length > 0 && (
            <>
              <span style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", display: "block", marginTop: tags.length > 0 ? "1rem" : 0 }}>Categories</span>
              <div className="pills">
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/categories/${encodeURIComponent(cat)}`}
                    className="pill"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </>
          )}
        </section>
      )}

      <h2>All articles</h2>
      {articles.length === 0 ? (
        <p>No articles yet.</p>
      ) : (
        <ul className="article-list">
          {articles.map((article) => (
            <li key={article.meta.slug}>
              <div className="article-list-item">
                <div className="title-block">
                  <Link href={`/articles/${article.meta.slug}`}>
                    {article.meta.title}
                  </Link>
                  {article.meta.category && (
                    <div className="category">{article.meta.category}</div>
                  )}
                </div>
                {article.meta.date && (
                  <span className="date">{article.meta.date}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
