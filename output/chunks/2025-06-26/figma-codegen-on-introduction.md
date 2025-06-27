---
title: Introduction
slug: figma-codegen-on-introduction
source_file: plugin-api-figma-codegen-on.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-codegen-on/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 1906ad6bcdf4ec46
token_count: 114
chunk_title: Introduction
chunk_slug: figma-codegen-on-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: figma-codegen-on.md
parent_slug: figma-codegen-on
char_count: 398
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-codegen-on-callback
compiler: noos-figma
---

# on

A plugin for code generation needs to call `figma.codegen.on('generate')` to register a callback
that will be called when a user's selection changes in Dev Mode. This callback
should return an array of JSON objects that represent the sections in the
Inspect panel. The callback has a 15 second timeout and returns an error if it times out. For more
information, see the remarks.

## Signature
