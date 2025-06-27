---
title: >-
  once(type: 'preferenceschange', callback: (event: CodegenPreferencesEvent) =>
  Promise): void + off(type: 'preferenceschange', callback: (event:
  CodegenPreferencesEvent) => Promise): void
slug: figma-codegen-oncetype-preferenceschange-callback-even
source_file: plugin-api-figma-codegen.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-codegen/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 9fba59f60ee87c76
token_count: 84
chunk_title: >-
  once(type: 'preferenceschange', callback: (event: CodegenPreferencesEvent) =>
  Promise): void + off(type: 'preferenceschange', callback: (event:
  CodegenPreferencesEvent) => Promise): void
chunk_slug: figma-codegen-oncetype-preferenceschange-callback-even
chunk_index: 2
chunk_of_total: 5
parent_file: figma-codegen.md
parent_slug: figma-codegen
char_count: 291
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - figma-codegen-introduction
  - figma-codegen-ontype-preferenceschange-callback-event-
  - figma-codegen-preferences-codegenpreferences-readonly
  - figma-codegen-refresh-void
merged_titles:
  - >-
    once(type: 'preferenceschange', callback: (event: CodegenPreferencesEvent)
    => Promise): void
  - >-
    off(type: 'preferenceschange', callback: (event: CodegenPreferencesEvent) =>
    Promise): void
compiler: noos-figma
---

Same as [`figma.codegen.on`](/plugin-docs/api/properties/figma-codegen-on/)
, but the callback only gets called the first time.

Removes a callback added by [`figma.codegen.on`](/plugin-docs/api/properties/figma-codegen-on/)
 or [`figma.codegen.once`](/plugin-docs/api/figma-codegen/#once)
.
