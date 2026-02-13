import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getPresentation } from "@/lib/presentation";

export default function PresentationPage() {
  const presentation = getPresentation();

  if (!presentation) {
    return (
      <main className="reading-width">
        <p style={{ marginBottom: "1rem" }}>
          <Link href="/">← Back to blog</Link>
        </p>
        <h1>About</h1>
        <p>The about page is not configured yet. Add <code>content/presentation.md</code>.</p>
      </main>
    );
  }

  return (
    <main className="reading-width">
      <p style={{ marginBottom: "1rem" }}>
        <Link href="/">← Back to blog</Link>
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
