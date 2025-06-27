---
title: Signature + Parameters
slug: nodes-findallwithcriteria-signature-parameters
source_file: plugin-api-nodes-findallwithcriteria.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-findallwithcriteria/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: f7aab48a8109ebb9
token_count: 124
chunk_title: Signature + Parameters
chunk_slug: nodes-findallwithcriteria-signature-parameters
chunk_index: 1
chunk_of_total: 4
parent_file: nodes-findallwithcriteria.md
parent_slug: nodes-findallwithcriteria
char_count: 433
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-findallwithcriteria-introduction
  - nodes-findallwithcriteria-remarks
  - nodes-findallwithcriteria-example-usages
merged_titles:
  - Signature
  - Parameters
compiler: noos-figma
---

### findAllWithCriteria(criteria: FindAllCriteria): Array<{ type: T[number] } & SceneNode>

### criteria

An object of type [`FindAllCriteria`](/plugin-docs/api/FindAllCriteria/) that specifies the search criteria. The following criterias are currently supported:

- Nodes with specific `types`
- Nodes with `SharedPluginData` by their namespace and keys.
- Nodes with `PluginData` by their keys.
- A combination of any of the above.
