---
title: Introduction
slug: figma-variables-getvariablecollectionbyid-introduction
source_file: plugin-api-figma-variables-getvariablecollectionbyid.html
source_url: >-
  https://www.figma.com/plugin-docs/api/figma-variables-getvariablecollectionbyid/
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 11f0ad0cedda752f
token_count: 105
chunk_title: Introduction
chunk_slug: figma-variables-getvariablecollectionbyid-introduction
chunk_index: 0
chunk_of_total: 1
parent_file: figma-variables-getvariablecollectionbyid.md
parent_slug: figma-variables-getvariablecollectionbyid
char_count: 367
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# getVariableCollectionById

DEPRECATED: Use [`getVariableCollectionByIdAsync`](/plugin-docs/api/properties/figma-variables-getvariablecollectionbyidasync/) instead. This function will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

Finds a variable collection by ID. If not found or the provided ID is invalid, returns `null`.
