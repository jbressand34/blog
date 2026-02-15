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
    <main className="reading-width page-home">
      <h1>Articles</h1>
      <p className="text-muted page-home-intro">
        Welcome. Browse articles, tags, or categories.
      </p>

      {(tags.length > 0 || categories.length > 0) && (
        <section className="page-home-section">
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
        <div className="article-cards">
          {articles.map((article) => (
            <Link
              key={article.meta.slug}
              href={`/articles/${article.meta.slug}`}
              className="article-card"
            >
              <h3 className="article-card-title">{article.meta.title}</h3>
              <div className="article-card-meta">
                {article.meta.date && (
                  <span className="article-card-date">{article.meta.date}</span>
                )}
                {article.meta.category && (
                  <span className="article-card-category">{article.meta.category}</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
