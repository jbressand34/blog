import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getArticleBySlug, getArticleSlugs } from "@/lib/markdown";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default function ArticlePage({ params }: Props) {
  const { slug } = params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const { category, tags } = article.meta;

  return (
    <main style={{ padding: "0 2rem 2rem", maxWidth: "48rem", margin: "0 auto" }}>
      <article>
        <h1>{article.meta.title}</h1>
        <p style={{ color: "#666", marginBottom: "0.5rem" }}>
          {article.meta.date}
          {(category || (tags && tags.length > 0)) && (
            <span style={{ marginLeft: "1rem" }}>
              {category && (
                <>
                  Catégorie :{" "}
                  <Link href={`/categories/${encodeURIComponent(category)}`}>
                    {category}
                  </Link>
                </>
              )}
              {category && tags && tags.length > 0 && " · "}
              {tags && tags.length > 0 && (
                <>
                  Tags :{" "}
                  {tags.map((t, i) => (
                    <span key={t}>
                      <Link href={`/tags/${encodeURIComponent(t)}`}>{t}</Link>
                      {i < tags.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </>
              )}
            </span>
          )}
        </p>
        <div className="prose">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
