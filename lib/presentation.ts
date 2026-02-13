import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PRESENTATION_PATH = path.join(process.cwd(), "content", "presentation.md");

export type Presentation = {
  title: string;
  content: string;
};

/**
 * Lit et parse la page de présentation (content/presentation.md).
 * Returns null if the file does not exist.
 */
export function getPresentation(): Presentation | null {
  if (!fs.existsSync(PRESENTATION_PATH)) return null;

  const raw = fs.readFileSync(PRESENTATION_PATH, "utf-8");
  const { data, content } = matter(raw);

  return {
    title: (data.title as string) ?? "About",
    content,
  };
}
