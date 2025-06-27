---
title: 'setSuggestions(suggestions: Array): void'
slug: figma-parameters-setsuggestionssuggestions-array-void
source_file: plugin-api-figma-parameters.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-parameters/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: f03c2ee59069013d
token_count: 474
chunk_title: 'setSuggestions(suggestions: Array): void'
chunk_slug: figma-parameters-setsuggestionssuggestions-array-void
chunk_index: 3
chunk_of_total: 6
parent_file: figma-parameters.md
parent_slug: figma-parameters
char_count: 1657
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - figma-parameters-introduction
  - figma-parameters-ontype-input-callback-event-parameterinp
  - figma-parameters-offtype-input-callback-event-parameterin
  - figma-parameters-seterrormessage-string-void
  - figma-parameters-setloadingmessagemessage-string-void
compiler: noos-figma
---

Sets the list of autocomplete suggestions to be displayed in the quick action UI.

If you only want to provide a string suggestion, and don't need metadata or icons, you can use
an array of simple string values. For example

Simple string suggestions```
figma.parameters.on('input', ({ query, result }) => { result.setSuggestions( ["Armadillo", "Baboon", "Cacatua", "Dolphin"] .filter(s => s.includes(query)))})
```However the API also allows providing more information with each suggestion:

- The text to display to the user
- An icon (optional)
- Hidden metadata which is passed back to the plugin if the user chooses this suggestion (optional)

Example

Suggestions with icons and data```
result.setSuggestions([ { name: node1.name, data: node1.id, icon: node1Preview }, { name: node2.name, data: node2.id, icon: node2Preview }, ...])
```The `name` property contains the text to display to the user in the autocomplete suggestions. This
property is required.

The `data` property allows associating hidden metadata with a given autocomplete suggestion.
This data is passed back to the plugin as the parameter's value if the user chooses this option.
If no `data` property is provided, it defaults to the value of the `name` property. I.e. the value
of the parameter will be the string that was displayed to the user.

An icon can be provided through a `icon` or `iconUrl` property. The `icon` property can contain
either a raster image in the form of a `Uint8Array`, or an SVG image in the form of a string. You
can alternatively use the `iconUrl` property to provide a URL to the image. Note that for this to
work the target server has to support CORS.
