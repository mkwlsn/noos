---
title: >-
  on(type: 'input', callback: (event: ParameterInputEvent) => void): void +
  once(type: 'input', callback: (event: ParameterInputEvent) => void): void
slug: figma-parameters-ontype-input-callback-event-parameterinp
source_file: plugin-api-figma-parameters.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-parameters/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 889b9e3150d954c7
token_count: 60
chunk_title: >-
  on(type: 'input', callback: (event: ParameterInputEvent) => void): void +
  once(type: 'input', callback: (event: ParameterInputEvent) => void): void
chunk_slug: figma-parameters-ontype-input-callback-event-parameterinp
chunk_index: 1
chunk_of_total: 6
parent_file: figma-parameters.md
parent_slug: figma-parameters
char_count: 207
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - figma-parameters-introduction
  - figma-parameters-offtype-input-callback-event-parameterin
  - figma-parameters-setsuggestionssuggestions-array-void
  - figma-parameters-seterrormessage-string-void
  - figma-parameters-setloadingmessagemessage-string-void
merged_titles:
  - 'on(type: ''input'', callback: (event: ParameterInputEvent) => void): void'
  - 'once(type: ''input'', callback: (event: ParameterInputEvent) => void): void'
compiler: noos-figma
---

Register a handler for user input events in the quick action UI.

Register a handler for user input events in the quick action UI. Same as `figma.parameters.on("input")`, but only gets called the first time.
