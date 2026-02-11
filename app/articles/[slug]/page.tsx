import { notFound } from "next/navigation";
import Link from "next/link";
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

  return (
    <main style={{ padding: "2rem", maxWidth: "48rem", margin: "0 auto" }}>
      <p style={{ marginBottom: "1rem" }}>
        <Link href="/">← Retour au blog</Link>
      </p>
      <article>
        <h1>{article.meta.title}</h1>
        {article.meta.date && (
          <p style={{ color: "#666", marginBottom: "1.5rem" }}>
            {article.meta.date}
          </p>
        )}
        <div className="prose">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
