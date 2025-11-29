# chenyangli-phd.github.io — Repository README (English)

## Overview

This repository contains a simple static personal website built with plain HTML, CSS and vanilla JavaScript. The site includes:

- A homepage (`index.html`) with information about Chenyang Li.
- A Markdown-driven blog stored in `Files/blogs/` and indexed by `Files/blogs/posts.json`.
- Static assets under `Files/` (images, PDF resume, etc.).
- Client-side Markdown rendering using `marked.js`.

## Purpose

The site is intended to be a lightweight personal website to present biography, research interests, portfolio and blog posts. Blog posts are written in Markdown and rendered in-browser.

## File structure (important parts)

- `index.html` — site entry (homepage).
- `Setup/css/style.css` — main stylesheet.
- `Setup/js/script.js` — main JS (navigation, blog loader, Markdown rendering).
- `Files/images/` — image assets.
- `Files/pdf/` — resume PDF and other PDFs.
- `Files/blogs/` — blog posts (Markdown) and `posts.json` manifest.

## How the blog works

1. Add a Markdown file `your-post.md` into `Files/blogs/`.
2. Update `Files/blogs/posts.json` with an entry: { "title": "Your Title", "file": "your-post.md" }.
3. The site fetches `Files/blogs/posts.json` and renders posts client-side using `marked.js`.

## Local preview

Run a simple static server from the repo root and open `http://localhost:8000/`:

```bash
python3 -m http.server 8000
```

## Notes & Tips

- Use `git mv` to move or rename files to preserve history.
- Filenames with spaces are supported but safer to use hyphens/underscores.
- If you want a canonical root index, keep `index.html` at the repository root (this repo does).

## Contact / Contribute

If you want me to help add features (search, syntax highlighting, slugify posts, CI deploy to GitHub Pages), open an issue or edit the repo and create a PR.
