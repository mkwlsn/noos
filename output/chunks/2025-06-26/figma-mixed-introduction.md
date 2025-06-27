---
title: Introduction
slug: figma-mixed-introduction
source_file: plugin-api-figma-mixed.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-mixed/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: bd696ded7d181226
token_count: 84
chunk_title: Introduction
chunk_slug: figma-mixed-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: figma-mixed.md
parent_slug: figma-mixed
char_count: 294
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-mixed-signature-remarks
compiler: noos-figma
---

# mixed

This a constant value that some node properties return when they are a mix of multiple values. An example might be font size: a single text node can use multiple different font sizes for different character ranges. For those properties, you should always compare against `figma.mixed`.
