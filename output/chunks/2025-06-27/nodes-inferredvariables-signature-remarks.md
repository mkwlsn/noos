---
title: Signature + Remarks
slug: nodes-inferredvariables-signature-remarks
source_file: plugin-api-nodes-inferredvariables.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-inferredvariables/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: be3e5c1e70e562f7
token_count: 351
chunk_title: Signature + Remarks
chunk_slug: nodes-inferredvariables-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-inferredvariables.md
parent_slug: nodes-inferredvariables
char_count: 1226
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-inferredvariables-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### inferredVariables?: { readonly [field in VariableBindableNodeField]?: VariableAlias[]} & { fills: VariableAlias[][]; strokes: VariableAlias[][] } [readonly]

Inferred variables are only returned for a field when it is not using a [bound variable](/plugin-docs/api/node-properties/#boundvariables)
.

Variables can be inferred from:

- The collections of variables used in the file
- Variables from subscribed libraries, provided the variable is used in the file

Variables can only be inferred when there is a single variable that matches the raw value used for the scope of the variable.

- i.e. For a property set to width: 100px, where there are two variables set to a value of 100 with the default scope, a value cannot be inferred as there are two matches.
- i.e. For a property set to width: 100px, where there is a variable set to 100 with a scope of "Width and height" and a variable set to 100 with a scope of "Corner radius", a value can be inferred as there is a single match for the given scope.

Inferred variables for fills and strokes return a list of results where the index matches that of node.fills and node.strokes.

- i.e. node.inferredVariables.fills[0] holds the inferred variables for node.fills[0]
