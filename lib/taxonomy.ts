import { getArticleSlugs, getArticleBySlug, type Article } from "@/lib/markdown";

function getAllArticles(): Article[] {
  return getArticleSlugs()
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is Article => a !== null);
}

/**
 * Returns the list of unique tags (across all articles).
 */
export function getAllTags(): string[] {
  const articles = getAllArticles();
  const set = new Set<string>();
  for (const a of articles) {
    const tags = a.meta.tags;
    if (Array.isArray(tags)) {
      for (const t of tags) if (t != null && String(t).trim()) set.add(String(t).trim());
    }
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b, "en"));
}

/**
 * Returns the list of unique categories (across all articles).
 */
export function getAllCategories(): string[] {
  const articles = getAllArticles();
  const set = new Set<string>();
  for (const a of articles) {
    const cat = a.meta.category;
    if (cat != null && String(cat).trim()) set.add(String(cat).trim());
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b, "en"));
}

/**
 * Returns articles that have the given tag (case-insensitive comparison).
 */
export function getArticlesByTag(tag: string): Article[] {
  const articles = getAllArticles();
  const tagLower = tag.toLowerCase();
  return articles
    .filter((a) =>
      (a.meta.tags ?? []).some((t) => String(t).toLowerCase() === tagLower)
    )
    .sort((a, b) => (b.meta.date || "").localeCompare(a.meta.date || ""));
}

/**
 * Returns articles in the given category (case-insensitive comparison).
 */
export function getArticlesByCategory(category: string): Article[] {
  const articles = getAllArticles();
  const catLower = category.toLowerCase();
  return articles
    .filter((a) => (a.meta.category ?? "").toLowerCase() === catLower)
    .sort((a, b) => (b.meta.date || "").localeCompare(a.meta.date || ""));
}
