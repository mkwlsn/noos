---
title: 'normalizeMarkdown(markdown: string): string'
slug: figma-util-normalizemarkdownmarkdown-string-string
source_file: plugin-api-figma-util.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-util/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 247720e457bbdd83
token_count: 115
chunk_title: 'normalizeMarkdown(markdown: string): string'
chunk_slug: figma-util-normalizemarkdownmarkdown-string-string
chunk_index: 3
chunk_of_total: 4
parent_file: figma-util.md
parent_slug: figma-util
char_count: 402
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-util-introduction-rgbcolor-string-rgb-rgba-rg
  - figma-util-rgbacolor-string-rgb-rgba-rgba
  - figma-util-solidpaintcolor-string-rgb-rgba-override
compiler: noos-figma
---

Normalizes the markdown string to verify what markdown will render with Figma's rich-text editors.

Examples:

```
const md = "# Hello, world!\n\nThis is a **bold** text."const normalizedMd = figma.util.normalizeMarkdown(md);// Set an component description with descriptionMarkdowncomponent.descriptionMarkdown = normalizedMd;
```[View more →](/plugin-docs/api/properties/figma-util-normalizemarkdown/)
