---
title: createVector
slug: figma-createvector
source_file: plugin-api-figma-createvector.html
source_url: https://www.figma.com/plugin-docs/api/figma-createvector/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 657e403aa4bcb03d
token_count: 137
---
# createVector

Creates a new, empty vector network with no vertices.

## Signature

### createVector(): VectorNode

## Remarks

By default, parented under `figma.currentPage`. Without setting additional properties, the vector has a bounding box but doesn’t have any vertices. There are two ways to assign vertices to a vector node - [`vectorPaths`](/plugin-docs/api/VectorNode/#vectorpaths) and [`setVectorNetworkAsync`](/plugin-docs/api/VectorNode/#setvectornetworkasync). Please refer to the documentation of those properties for more details.