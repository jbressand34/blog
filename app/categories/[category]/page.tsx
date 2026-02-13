import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllCategories,
  getArticlesByCategory,
} from "@/lib/taxonomy";

type Props = { params: { category: string } };

export function generateStaticParams() {
  return getAllCategories().map((category) => ({ category }));
}

export default function CategoryPage({ params }: Props) {
  const category = decodeURIComponent(params.category);
  const articles = getArticlesByCategory(category);

  if (articles.length === 0) notFound();

  return (
    <main style={{ padding: "0 2rem 2rem", maxWidth: "48rem", margin: "0 auto" }}>
      <p style={{ marginBottom: "1rem" }}>
        <Link href="/">← Retour au blog</Link>
      </p>
      <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
        Catégorie : {category}
      </h1>
      <p style={{ color: "#666", marginBottom: "1rem" }}>
        {articles.length} article{articles.length > 1 ? "s" : ""}.
      </p>
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
    </main>
  );
}
