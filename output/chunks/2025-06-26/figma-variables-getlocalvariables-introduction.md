---
title: Introduction
slug: figma-variables-getlocalvariables-introduction
source_file: plugin-api-figma-variables-getlocalvariables.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-variables-getlocalvariables/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 2f8edc8662098fe9
token_count: 96
chunk_title: Introduction
chunk_slug: figma-variables-getlocalvariables-introduction
chunk_index: 0
chunk_of_total: 1
parent_file: figma-variables-getlocalvariables.md
parent_slug: figma-variables-getlocalvariables
char_count: 336
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# getLocalVariables

DEPRECATED: Use [`getLocalVariablesAsync`](/plugin-docs/api/properties/figma-variables-getlocalvariablesasync/) instead. This function will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

Returns all local variables in the current file, optionally filtering by resolved type.
