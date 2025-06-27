---
title: Remarks
slug: figma-createvector-remarks
source_file: plugin-api-figma-createvector.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-createvector/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 1dbdb9927db9d3a6
token_count: 120
chunk_title: Remarks
chunk_slug: figma-createvector-remarks
chunk_index: 0
chunk_of_total: 1
parent_file: figma-createvector.md
parent_slug: figma-createvector
char_count: 419
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

By default, parented under `figma.currentPage`. Without setting additional properties, the vector has a bounding box but doesn’t have any vertices. There are two ways to assign vertices to a vector node - [`vectorPaths`](/plugin-docs/api/VectorNode/#vectorpaths)
 and [`setVectorNetworkAsync`](/plugin-docs/api/VectorNode/#setvectornetworkasync)
. Please refer to the documentation of those properties for more details.
