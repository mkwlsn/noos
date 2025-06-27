---
title: Introduction
slug: api-errors-introduction
source_file: plugin-api-api-errors.html
source_url: 'https://www.figma.com/plugin-docs/api/api-errors/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 60f6dd23618ee4cd
token_count: 222
chunk_title: Introduction
chunk_slug: api-errors-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: api-errors.md
parent_slug: api-errors
char_count: 774
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - api-errors-invalid-operations
compiler: noos-figma
---

# API Errors

Like any software, Figma enforces that any file you create is valid. For example, we make sure there's no way for a user to make "Frame A" the parent of "Frame B" and make "Frame B" the parent of "Frame A" at the same time. We enforce these restrictions by limiting the actions that you can take. Similarly, we make sure that plugins can't create invalid content in files by throwing errors or exceptions if an operation is invalid.

A key part of building a high quality plugin is getting familiar with these restrictions. That way, your plugin won't crash if a someone uses it in a way you didn't intend.

These restrictions are documented here, as well as in the pages of various properties and functions in the [reference](/plugin-docs/api/api-reference/).
