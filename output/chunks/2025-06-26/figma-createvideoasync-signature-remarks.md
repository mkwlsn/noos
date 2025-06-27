---
title: Signature + Remarks
slug: figma-createvideoasync-signature-remarks
source_file: plugin-api-figma-createvideoasync.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-createvideoasync/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 534a8ef2298fcf7e
token_count: 111
chunk_title: Signature + Remarks
chunk_slug: figma-createvideoasync-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: figma-createvideoasync.md
parent_slug: figma-createvideoasync
char_count: 386
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - figma-createvideoasync-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### createVideoAsync(data: Uint8Array): Promise

The `data` passed in must be encoded as a .MP4, .MOV, or .WebM. Videos have a maximum size of 100MB. Invalid videos will throw an error.

Video can only be added to files in a paid Education, Professional, and Organization team. Plugins running on files in free Starter teams can edit existing video in a file but not upload video to it.
