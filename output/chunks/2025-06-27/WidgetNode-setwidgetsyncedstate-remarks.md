---
title: Remarks
slug: WidgetNode-setwidgetsyncedstate-remarks
source_file: plugin-api-WidgetNode-setwidgetsyncedstate.html
source_url: 'https://www.figma.com/plugin-docs/api/WidgetNode-setwidgetsyncedstate/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 64439ea159704dee
token_count: 296
chunk_title: Remarks
chunk_slug: WidgetNode-setwidgetsyncedstate-remarks
chunk_index: 2
chunk_of_total: 3
parent_file: WidgetNode-setwidgetsyncedstate.md
parent_slug: WidgetNode-setwidgetsyncedstate
char_count: 1034
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - WidgetNode-setwidgetsyncedstate-introduction
  - WidgetNode-setwidgetsyncedstate-signature-parameters
compiler: noos-figma
---

Prior to setting the synced state, the existing synced state is cleared. This means the synced state values will replace the existing synced state. This behaves differently than `node.cloneWidget()` which will only override the passed in synced state and synced map values and preserve the others. Callers should explicitly pass in entire synced state and synced map objects. You can use [node.widgetSyncedState](https://figma.com/widget-docs/managing-multiple-widgets/#widgetnodewidgetsyncedstate)
 to get the current synced state.

If you try to set the synced state for a widget with a different version of the same widget, that widget will automatically update to match the running widget's version. This ensures that the synced state values you set will always be compatible with the widget. A side effect of this is that a widget may get downgraded to a lower version.

To get a list of other widgets with the same `widgetId`, check out [findWidgetNodesByWidgetId](/plugin-docs/api/properties/nodes-findwidgetnodesbywidgetid/)
.
