---
title: Introduction
slug: figma-util-normalizemarkdown-introduction
source_file: plugin-api-figma-util-normalizemarkdown.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-util-normalizemarkdown/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: ae287ccd8a1b9e87
token_count: 101
chunk_title: Introduction
chunk_slug: figma-util-normalizemarkdown-introduction
chunk_index: 0
chunk_of_total: 1
parent_file: figma-util-normalizemarkdown.md
parent_slug: figma-util-normalizemarkdown
char_count: 351
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# normalizeMarkdown

Normalizes the markdown string to verify what markdown will render with Figma's rich-text editors.

Examples:

```
const md = "# Hello, world!\n\nThis is a **bold** text."const normalizedMd = figma.util.normalizeMarkdown(md);// Set an component description with descriptionMarkdowncomponent.descriptionMarkdown = normalizedMd;
```
