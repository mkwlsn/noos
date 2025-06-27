---
title: 'setLoadingMessage(message: string): void'
slug: figma-parameters-setloadingmessagemessage-string-void
source_file: plugin-api-figma-parameters.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-parameters/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: bc763f9e0a537b2c
token_count: 305
chunk_title: 'setLoadingMessage(message: string): void'
chunk_slug: figma-parameters-setloadingmessagemessage-string-void
chunk_index: 5
chunk_of_total: 6
parent_file: figma-parameters.md
parent_slug: figma-parameters
char_count: 1065
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-parameters-introduction
  - figma-parameters-ontype-input-callback-event-parameterinp
  - figma-parameters-offtype-input-callback-event-parameterin
  - figma-parameters-setsuggestionssuggestions-array-void
  - figma-parameters-seterrormessage-string-void
compiler: noos-figma
---

Modify the default "Loading Suggestions..." message displayed until the plugin calls `setSuggestions`.
This can be useful if your plugin needs to load autocomplete messages from the network, or if you need
to perform lengthy calculations.

You can call `setLoadingMessage` multiple times in order to provide an updated message.

## ParameterValues

```
interface ParameterValues { [key: string]: any}
````ParameterValues` is the type used to pass values for parameters into plugins. It's a mapping from parameter keys, which come from the [manifest](/plugin-docs/manifest/#parameters)
, to the value that the user typed or chose in the autocomplete suggestions. Depending on how your plugin specified the suggestion when calling [`setSuggestions`](/plugin-docs/api/figma-parameters/#setsuggestions)
 the value will resolve to:

- Suggestion's `data` property if sepecified
- Suggestion's `name` property
- The suggestion itself if a string was passed as the suggestion.
- Query string for freeform parameters
- `undefined` for optional parameters that were skipped.
