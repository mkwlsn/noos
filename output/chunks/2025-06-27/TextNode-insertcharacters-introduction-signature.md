---
title: Introduction + Signature
slug: TextNode-insertcharacters-introduction-signature
source_file: plugin-api-TextNode-insertcharacters.html
source_url: 'https://www.figma.com/plugin-docs/api/TextNode-insertcharacters/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 8f2fc05ac8c64425
token_count: 65
chunk_title: Introduction + Signature
chunk_slug: TextNode-insertcharacters-introduction-signature
chunk_index: 0
chunk_of_total: 2
parent_file: TextNode-insertcharacters.md
parent_slug: TextNode-insertcharacters
char_count: 225
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - TextNode-insertcharacters-remarks
merged_titles:
  - Introduction
  - Signature
compiler: noos-figma
---

# insertCharacters

Insert `characters` at index `start` in the text.

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

### insertCharacters(start: number, characters: string, useStyle?: 'BEFORE' | 'AFTER'): void
