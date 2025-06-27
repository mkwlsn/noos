---
title: 'setError(message: string): void'
slug: figma-parameters-seterrormessage-string-void
source_file: plugin-api-figma-parameters.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-parameters/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 737af3510be0b810
token_count: 428
chunk_title: 'setError(message: string): void'
chunk_slug: figma-parameters-seterrormessage-string-void
chunk_index: 4
chunk_of_total: 6
parent_file: figma-parameters.md
parent_slug: figma-parameters
char_count: 1495
heading_level: h3
chunk_type: error
merge_type: atomic
tags: []
sibling_chunks:
  - figma-parameters-introduction
  - figma-parameters-ontype-input-callback-event-parameterinp
  - figma-parameters-offtype-input-callback-event-parameterin
  - figma-parameters-setsuggestionssuggestions-array-void
  - figma-parameters-setloadingmessagemessage-string-void
compiler: noos-figma
---

Displays an error message to the user instead of a list of autocomplete suggestions. When this function
is called, the user is prevented from moving on to the next parameter without first changing the input
for the current parameter.

This is useful to signal to the user that they have entered an invalid value and provide them
instruction for how to correct the input.

You can also use this as a way to validate pre-conditions, like current selection, or some state of the
current document. To do this, in the 'input' event handler for the first parameter key, check the that
all pre-conditions are fulfilled and call `setError` with an appropriate error message if they are not,
unconditionally of what the current `query` value is.

This function is not available on parameters with `allowFreeform` set. The purpose of `allowFreeform`
is to allow users to enter arbitrary values and so Figma doesn't guarantee that the plugin gets an
opportunity to handle an input event and call `setError` before the user moves on to the next parameter.

If you want to generally allow freeform input, but still retain the ability to call `setError`, you can
remove `allowFreeform` and manually add a autocomplete entry containing the current `query` string. I.e.
make the first item in the array passed to `setSuggestions` simply be the string in `query`.

For a full example of what this can look like, see the [Resizer sample plugin](https://github.com/figma/plugin-samples/blob/master/resizer/code.ts)
