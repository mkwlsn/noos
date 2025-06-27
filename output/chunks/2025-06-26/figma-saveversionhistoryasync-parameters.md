---
title: Parameters
slug: figma-saveversionhistoryasync-parameters
source_file: plugin-api-figma-saveversionhistoryasync.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-saveversionhistoryasync/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: c473963f0bae0a71
token_count: 102
chunk_title: Parameters
chunk_slug: figma-saveversionhistoryasync-parameters
chunk_index: 1
chunk_of_total: 3
parent_file: figma-saveversionhistoryasync.md
parent_slug: figma-saveversionhistoryasync
char_count: 357
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-saveversionhistoryasync-introduction-signature
  - figma-saveversionhistoryasync-remarks
compiler: noos-figma
---

### title

The title of the version. This must be a non-empty string.

### description

An optional argument to describe the version.

Calling `saveVersionHistoryAsync` returns a promise that resolves to `null` or an instance of `VersionHistoryResult`:

```
interface VersionHistoryResult { id: string}
```- `id`: The version id of this newly saved version.
