---
title: 'refresh: () => void'
slug: figma-codegen-refresh-void
source_file: plugin-api-figma-codegen.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-codegen/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 59bc644cb63e4340
token_count: 60
chunk_title: 'refresh: () => void'
chunk_slug: figma-codegen-refresh-void
chunk_index: 4
chunk_of_total: 5
parent_file: figma-codegen.md
parent_slug: figma-codegen
char_count: 209
heading_level: h3
chunk_type: method
merge_type: atomic
tags: []
sibling_chunks:
  - figma-codegen-introduction
  - figma-codegen-ontype-preferenceschange-callback-event-
  - figma-codegen-oncetype-preferenceschange-callback-even
  - figma-codegen-preferences-codegenpreferences-readonly
compiler: noos-figma
---

Triggers the `figma.codegen.on("generate")` callback again.

This is is useful for plugins that need to refresh the codegen output. For example, if you’re using an iframe to provide more customization options.
