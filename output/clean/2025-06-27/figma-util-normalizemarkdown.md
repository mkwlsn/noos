---
title: normalizeMarkdown
slug: figma-util-normalizemarkdown
source_file: plugin-api-figma-util-normalizemarkdown.html
source_url: https://www.figma.com/plugin-docs/api/figma-util-normalizemarkdown/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: e2f4438475ea3b4e
token_count: 119
---
# normalizeMarkdown

Normalizes the markdown string to verify what markdown will render with Figma's rich-text editors.

Examples:

```
const md = "# Hello, world!\n\nThis is a **bold** text."const normalizedMd = figma.util.normalizeMarkdown(md);// Set an component description with descriptionMarkdowncomponent.descriptionMarkdown = normalizedMd;
```

## Signature

### normalizeMarkdown(markdown: string): string

## Parameters

### markdown

A markdown string to normalize.