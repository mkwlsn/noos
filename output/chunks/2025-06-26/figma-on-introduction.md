---
title: Introduction
slug: figma-on-introduction
source_file: plugin-api-figma-on.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-on/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 1bff2eb27b9fcffd
token_count: 145
chunk_title: Introduction
chunk_slug: figma-on-introduction
chunk_index: 0
chunk_of_total: 10
parent_file: figma-on.md
parent_slug: figma-on
char_count: 505
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-on-ontype-stylechange-callback-event-stylec
  - figma-on-currentpagechange-selectionchange
  - figma-on-documentchange
  - figma-on-textreview
  - figma-on-drop
  - figma-on-close
  - figma-on-run
  - figma-on-stylechange
  - figma-on-timerresume-timeradjust
compiler: noos-figma
---

# on

Registers an callback that will be called when an event happens in the editor. Current supported events are:

- The selection on the current page changed.
- The current page changed.
- The document has changed.
- An object from outside Figma is dropped onto the canvas
- The plugin has started running.
- The plugin closed.
- The plugin has started running.
- The timer has started running.
- The timer has paused.
- The timer has stopped.
- The timer is done.
- The timer has resumed.

## Signature
