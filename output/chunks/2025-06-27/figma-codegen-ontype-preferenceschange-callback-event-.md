---
title: >-
  on(type: 'preferenceschange', callback: (event: CodegenPreferencesEvent) =>
  Promise): void
slug: figma-codegen-ontype-preferenceschange-callback-event-
source_file: plugin-api-figma-codegen.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-codegen/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: eeabeb7fbc100f07
token_count: 126
chunk_title: >-
  on(type: 'preferenceschange', callback: (event: CodegenPreferencesEvent) =>
  Promise): void
chunk_slug: figma-codegen-ontype-preferenceschange-callback-event-
chunk_index: 1
chunk_of_total: 5
parent_file: figma-codegen.md
parent_slug: figma-codegen
char_count: 440
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-codegen-introduction
  - figma-codegen-oncetype-preferenceschange-callback-even
  - figma-codegen-preferences-codegenpreferences-readonly
  - figma-codegen-refresh-void
compiler: noos-figma
---

A plugin for code generation needs to call `figma.codegen.on('generate')` to register a callback
that will be called when a user's selection changes in Dev Mode. This callback
should return an array of JSON objects that represent the sections in the
Inspect panel. The callback has a 15 second timeout and returns an error if it times out. For more
information, see the remarks.

[View more →](/plugin-docs/api/properties/figma-codegen-on/)
