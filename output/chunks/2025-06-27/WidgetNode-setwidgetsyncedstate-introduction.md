---
title: Introduction
slug: WidgetNode-setwidgetsyncedstate-introduction
source_file: plugin-api-WidgetNode-setwidgetsyncedstate.html
source_url: 'https://www.figma.com/plugin-docs/api/WidgetNode-setwidgetsyncedstate/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 51e4618e95d7d7d4
token_count: 88
chunk_title: Introduction
chunk_slug: WidgetNode-setwidgetsyncedstate-introduction
chunk_index: 0
chunk_of_total: 3
parent_file: WidgetNode-setwidgetsyncedstate.md
parent_slug: WidgetNode-setwidgetsyncedstate
char_count: 306
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - WidgetNode-setwidgetsyncedstate-signature-parameters
  - WidgetNode-setwidgetsyncedstate-remarks
compiler: noos-figma
---

# setWidgetSyncedState

Sets the entire synced state and synced map values for a widget. This function only sets the synced state for widgets with a matching `node.widgetId` (an instance of the same widget). This means that running this function only works inside of a widget.

 Supported on:

- WidgetNode
