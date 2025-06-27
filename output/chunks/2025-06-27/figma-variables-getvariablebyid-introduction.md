---
title: Introduction
slug: figma-variables-getvariablebyid-introduction
source_file: plugin-api-figma-variables-getvariablebyid.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-variables-getvariablebyid/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 625ae067e3a3c4bb
token_count: 94
chunk_title: Introduction
chunk_slug: figma-variables-getvariablebyid-introduction
chunk_index: 0
chunk_of_total: 1
parent_file: figma-variables-getvariablebyid.md
parent_slug: figma-variables-getvariablebyid
char_count: 327
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# getVariableById

DEPRECATED: Use [`getVariableByIdAsync`](/plugin-docs/api/properties/figma-variables-getvariablebyidasync/)
 instead. This function will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

Finds a variable by ID. If not found or the provided ID is invalid, returns `null`.
