import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllTags,
  getArticlesByTag,
} from "@/lib/taxonomy";

type Props = { params: { tag: string } };

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag }));
}

export default function TagPage({ params }: Props) {
  const tag = decodeURIComponent(params.tag);
  const articles = getArticlesByTag(tag);

  if (articles.length === 0) notFound();

  return (
    <main className="reading-width">
      <p style={{ marginBottom: "1rem" }}>
        <Link href="/">← Back to blog</Link>
      </p>
      <h1>Tag: {tag}</h1>
      <p className="text-muted" style={{ marginBottom: "1rem" }}>
        {articles.length} article{articles.length > 1 ? "s" : ""}.
      </p>
      <ul style={{ listStyle: "none" }}>
        {articles.map((article) => (
          <li key={article.meta.slug} style={{ marginBottom: "0.5rem" }}>
            <Link href={`/articles/${article.meta.slug}`}>
              {article.meta.title}
            </Link>
            {article.meta.date && (
              <span className="text-muted" style={{ marginLeft: "0.5rem" }}>
                — {article.meta.date}
              </span>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
