---
title: Introduction
slug: figma-parameters-introduction
source_file: plugin-api-figma-parameters.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-parameters/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: c63b760c92359f80
token_count: 149
chunk_title: Introduction
chunk_slug: figma-parameters-introduction
chunk_index: 0
chunk_of_total: 6
parent_file: figma-parameters.md
parent_slug: figma-parameters
char_count: 521
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-parameters-ontype-input-callback-event-parameterinp
  - figma-parameters-offtype-input-callback-event-parameterin
  - figma-parameters-setsuggestionssuggestions-array-void
  - figma-parameters-seterrormessage-string-void
  - figma-parameters-setloadingmessagemessage-string-void
compiler: noos-figma
---

# figma.parameters

These are methods and properties available on the `figma.parameters` global object. See [Accepting Parameters as Input](/plugin-docs/plugin-parameters/)
 for more details.

```
type ParameterInputEvent = { query: string, key: string, parameters: Partial, result: SuggestionResults,}
```The `input` event is fired on every key press as the user is entering parameters for a plugin in quick actions. The expectation is that plugin will respond to these events by calling one of the APIs `result` object.
