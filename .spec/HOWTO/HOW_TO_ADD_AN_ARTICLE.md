# How to add an article

Add a new blog post. Articles are Markdown files in the repo; no code change is required.

## Where to put it

- **Directory:** `content/articles/`
- **File name:** any valid filename ending in `.md` (e.g. `my-new-post.md`)
- **URL:** the article will be available at `/articles/<slug>`, where `<slug>` is the filename without `.md` (e.g. `my-new-post`)

## Front matter (required)

At the top of the file, add a YAML block between `---` lines:

```yaml
---
title: Your article title
date: 2025-02-06
category: general
tags:
  - tag1
  - tag2
---
```

- **title** — displayed as the article heading.
- **date** — ISO date (YYYY-MM-DD). Used for ordering on the home page (newest first).
- **category** — optional; one category per article. Shows in “Browse by” and on the article page.
- **tags** — optional; list of tags. Same behaviour as category for navigation.

## Body

After the closing `---`, write your content in **Markdown**. Headings, lists, **bold**, *italic*, and links are supported.

## Example

See `content/articles/premier-article.md` for a full example.

## After adding

- **Local:** run `npm run dev` and open `/articles/your-slug`.
- **Build:** `npm run build` will pick up the new file; no restart or config change needed.
