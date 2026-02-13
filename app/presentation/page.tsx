import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getPresentation } from "@/lib/presentation";

export default function PresentationPage() {
  const presentation = getPresentation();

  if (!presentation) {
    return (
      <main style={{ padding: "0 2rem 2rem", maxWidth: "48rem", margin: "0 auto" }}>
        <p style={{ marginBottom: "1rem" }}>
          <Link href="/">← Retour au blog</Link>
        </p>
        <h1>Présentation</h1>
        <p>La page de présentation n’est pas encore configurée. Ajoutez <code>content/presentation.md</code>.</p>
      </main>
    );
  }

  return (
    <main style={{ padding: "0 2rem 2rem", maxWidth: "48rem", margin: "0 auto" }}>
      <p style={{ marginBottom: "1rem" }}>
        <Link href="/">← Retour au blog</Link>
      </p>
      <article>
        <h1>{presentation.title}</h1>
        <div className="prose">
          <ReactMarkdown>{presentation.content}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
