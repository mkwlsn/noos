# 🧠 noös

LLMs hallucinate. Docs go stale.

This repo builds structured symbolic context from messy documentation.

It processes raw HTML (e.g. doc pages for devs; github pages) into chunked `.md` files with clean frontmatter and validation logs.

Each chunk is an atomic memory unit: versioned, searchable, and designed for indexing, retrieval, or LLM use.

The result: a symbolic memory corpus that can be transformed into context windows, vector indexes, or downstream tooling.

## ⚙️ What it actually does

| Stage             | Result                                        |
| ----------------- | --------------------------------------------- |
| `scrape`          | Live pages → HTML snapshots                   |
| `clean`           | HTML → Markdown                               |
| `chunk`           | Markdown → symbolically delimited `.md` files |
| `prep`            | Add metadata, fix YAML, deduplicate, log      |
| `reduce`          | Promote valid memory, flag duplicates         |
| (optional) `diff` | Compare chunk runs                            |

Outputs are stored in versioned folders like:

```
output/
├── raw/               # Source material (gitignored)
├── clean/             # Versioned runs
│   └── 2025-06-26/    # Cleaned markdown
└── chunks/            # Versioned corpora
    └── 2025-06-26/    # Symbolic memory chunks
                         for indexing or retrieval
```

Each chunk includes:

- `title`, `chunk_type`, `content_hash`
- `status: draft | scrubbed`
- `sibling_chunks[]`, `source_url`, `token_count`

**Example:**

```yaml
---
title: figma.showUI
chunk_slug: figma-showUI
chunk_type: method
status: scrubbed
created: 2025-06-27T18:52:00Z
content_hash: 944cf3f01937e4d1
tokens: 173
sibling_chunks:
  - figma-on
  - figma-ui-html
---
This method displays the UI iframe. It must be called before any HTML...
```

## 🚀 Quick Start

```zsh
# Run the whole pipeline
npm run figdocs

# Run just healing / validation
npm run eidetic-prep
npm run eidetic-reduce
```

## 📄 What You'll Get

After one run (with the current compilers):

- ~2,800 symbolic memory chunks
- Token-aware, hallucination-resistant
- Logs: `eidetic-prep.log`, `chunk-errors.log`, `healing-summary.txt`

## 🛠 When things go wrong

| Symptom             | Check                                     |
| ------------------- | ----------------------------------------- |
| `scrape` fails      | Paths in `scrape-all.js` are likely wrong |
| `.md` files missing | Re-run `chunk-md-by-heading.js`           |
| YAML parse error    | Open file, check quotes/colons/indent     |
| Chunks seem weird   | Run `eidetic-prep` and check logs         |

## 👻 Why noös exists

noös began as a simple scraper to provide structured context for LLMs.

It evolved into a memory compiler that generates symbolic context and audit logs for use in downstream systems.

Originally scoped for ghostOS, the resulting memory format is optimized for indexing, retrieval, and RAG workflows.

noös is now decoupled and usable in any context where structured, LLM-ready memory is needed.

<!-- Originally scoped for ghostOS, noös is now decoupled and usable in any context where structured, LLM-ready memory is needed. -->

🔗 _Looking for the symbolic architecture doc? See [README.ghostOS.md](./README.ghostOS.md)_

## 📄 License

Copyright © 2024 Mike Wilson. All rights reserved.

This codebase is not open source and is not licensed for public use.

You may not use, copy, modify, or distribute any part of this repository without explicit written permission from the author.

For licensing inquiries, contact mkwlsn@github.com.
