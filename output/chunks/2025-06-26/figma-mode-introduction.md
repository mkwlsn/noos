---
title: Introduction
slug: figma-mode-introduction
source_file: plugin-api-figma-mode.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-mode/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 4d7aff0a1dc3ebda
token_count: 177
chunk_title: Introduction
chunk_slug: figma-mode-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: figma-mode.md
parent_slug: figma-mode
char_count: 619
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-mode-signature-remarks
compiler: noos-figma
---

# mode

Return the context the plugin is current running in.

- `default` - The plugin is running as a normal plugin.
- `textreview` - The plugin is running to provide text review functionality.
- `inspect` - The plugin is running in the Inspect panel in Dev Mode.
- `codegen` - The plugin is running in the Code section of the Inspect panel in Dev Mode.
- `linkpreview` - The plugin is generating a link preview for a Dev resource in Dev Mode.
- `auth` - The plugin is running to authenticate a user in Dev Mode.

##### caution

The `linkpreview` and `auth` modes are only available to partner and Figma-owned plugins.
