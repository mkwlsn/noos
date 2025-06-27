---
title: Parameters
slug: figma-ui-postmessage-parameters
source_file: plugin-api-figma-ui-postmessage.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-ui-postmessage/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 6c4a34d765bfe8f9
token_count: 277
chunk_title: Parameters
chunk_slug: figma-ui-postmessage-parameters
chunk_index: 0
chunk_of_total: 1
parent_file: figma-ui-postmessage.md
parent_slug: figma-ui-postmessage
char_count: 967
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

### pluginMessage

This can be almost any data type or plain object, as long as it's a serializable object.

This is similar to saying that it should be possible to send the object over a network if it were necessary. You can send objects, arrays, numbers, strings, booleans, null, undefined, Date objects and Uint8Array objects. However, functions and prototype chains of objects will not be sent.

These restrictions are the same as the browser's `postMessage`: [click here](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
 for more details.

### options

An object that may contain the following optional parameters:

- `origin`: An advanced option, mainly used for implementing OAuth. If the `origin` option is provided, the message will only be delivered to the iframe if the origin of the document inside the iframe matches the `origin`. This defaults to `'*'`, which allows the message to be passed to any document.
