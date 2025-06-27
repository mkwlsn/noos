---
title: Remarks
slug: figma-saveversionhistoryasync-remarks
source_file: plugin-api-figma-saveversionhistoryasync.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-saveversionhistoryasync/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 3644020083317560
token_count: 272
chunk_title: Remarks
chunk_slug: figma-saveversionhistoryasync-remarks
chunk_index: 2
chunk_of_total: 3
parent_file: figma-saveversionhistoryasync.md
parent_slug: figma-saveversionhistoryasync
char_count: 949
heading_level: h2
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - figma-saveversionhistoryasync-introduction-signature
  - figma-saveversionhistoryasync-parameters
compiler: noos-figma
---

It is not guaranteed that all changes made before this method is used will be saved to version history.
For example,

Changes may not all be saved```
async function example() { await figma.createRectangle(); await figma.saveVersionHistoryAsync('v1'); figma.closePlugin();}example().catch((e) => figma.closePluginWithFailure(e))
```The newly created rectangle may not be included in the v1 version. As a work around, you can wait before calling `saveVersionHistoryAsync()`. For example,

Wait to save```
async function example() { await figma.createRectangle(); await new Promise(r => setTimeout(r, 1000)); // wait for 1 second await figma.saveVersionHistoryAsync('v1'); figma.closePlugin();}
```Typically, manual changes that precede the execution of `saveVersionHistoryAsync()` will be included. If you want to use `saveVersionHistoryAsync()` before the plugin makes
additional changes, make sure to use the method with an async/await or a Promise.
