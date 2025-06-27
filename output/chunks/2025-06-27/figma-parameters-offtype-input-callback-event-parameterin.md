---
title: 'off(type: ''input'', callback: (event: ParameterInputEvent) => void): void'
slug: figma-parameters-offtype-input-callback-event-parameterin
source_file: plugin-api-figma-parameters.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-parameters/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: ab23fed5e1c6b835
token_count: 120
chunk_title: 'off(type: ''input'', callback: (event: ParameterInputEvent) => void): void'
chunk_slug: figma-parameters-offtype-input-callback-event-parameterin
chunk_index: 2
chunk_of_total: 6
parent_file: figma-parameters.md
parent_slug: figma-parameters
char_count: 420
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-parameters-introduction
  - figma-parameters-ontype-input-callback-event-parameterinp
  - figma-parameters-setsuggestionssuggestions-array-void
  - figma-parameters-seterrormessage-string-void
  - figma-parameters-setloadingmessagemessage-string-void
compiler: noos-figma
---

Removes a handler added via `figma.parameters.on`.

## SuggestionResults

The `result` object passed to the `'input'` event handler contains API for controlling the UI that the user sees while
entering parameter values. Most importantly it is able to provide the list of autocomplete suggestions that the user
can choose from as they type.

But the `result` object also enables showing error messages and loading states.
