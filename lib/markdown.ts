import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "articles");

export type ArticleMeta = {
  title: string;
  date: string;
  category?: string;
  tags?: string[];
  slug?: string;
};

export type Article = {
  meta: ArticleMeta;
  content: string;
};

/**
 * Reads and parses a Markdown article by its slug (filename without .md).
 */
export function getArticleBySlug(slug: string): Article | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const date = data.date;
  const dateStr =
    date instanceof Date
      ? date.toISOString().slice(0, 10)
      : date != null
        ? String(date)
        : undefined;

  return {
    meta: {
      ...data,
      date: dateStr,
      slug,
    } as ArticleMeta,
    content,
  };
}

/**
 * Returns the list of article slugs (names of .md files in content/articles).
 */
export function getArticleSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  return fs
    .readdirSync(CONTENT_DIR)
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}
