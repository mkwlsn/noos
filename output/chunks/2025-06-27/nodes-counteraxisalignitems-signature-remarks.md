---
title: Signature + Remarks
slug: nodes-counteraxisalignitems-signature-remarks
source_file: plugin-api-nodes-counteraxisalignitems.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-counteraxisalignitems/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: d5aba1ff10d296f9
token_count: 642
chunk_title: Signature + Remarks
chunk_slug: nodes-counteraxisalignitems-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-counteraxisalignitems.md
parent_slug: nodes-counteraxisalignitems
char_count: 2246
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-counteraxisalignitems-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### counterAxisAlignItems: 'MIN' | 'MAX' | 'CENTER' | 'BASELINE'

Changing this property will cause all the children to update their `x` and `y` values.

- In horizontal auto-layout frames, `“MIN”` and `“MAX”` correspond to top and bottom respectively.
- In vertical auto-layout frames, `“MIN”` and `“MAX”` correspond to left and right respectively.
- `"BASELINE"` can only be set on horizontal auto-layout frames, and aligns all children along the text baseline.

The corresponding property for the primary axis direction is [`primaryAxisAlignItems`](/plugin-docs/api/properties/nodes-primaryaxisalignitems/)
.

Horizontal auto-layout frame with different counterAxisAlignItems values```
(async () => { const parentFrame = figma.createFrame() const text = figma.createText() await figma.loadFontAsync(text.fontName) text.characters = 'asdf' // Make the text taller so we can see how text baseline alignment works text.lineHeight = {unit: 'PERCENT', value: 300} // Auto-layout frame will have 2 children: a frame and a text node parentFrame.appendChild(figma.createFrame()) parentFrame.appendChild(text) parentFrame.layoutMode = 'HORIZONTAL' // Make the parent frame taller so we can see the effects of // the different counterAxisAlignItems values parentFrame.resize(200, 150) // Parent frame // +--------------------------+ // |+-----------++----+ | // || || | | // || Child 1 ||asdf| | // || || | | // |+-----------++----+ | // | | // | | // +--------------------------+ parentFrame.counterAxisAlignItems = 'MIN' // Parent frame // +--------------------------+ // | | // | | // |+-----------++----+ | // || || | | // || Child 1 ||asdf| | // || || | | // |+-----------++----+ | // +--------------------------+ parentFrame.counterAxisAlignItems = 'MAX' // Parent frame // +--------------------------+ // | | // |+-----------++----+ | // || || | | // || Child 1 ||asdf| | // || || | | // |+-----------++----+ | // | | // +--------------------------+ parentFrame.counterAxisAlignItems = 'CENTER' // Parent frame // +--------------------------+ // |+-----------+ | // || |+----+ | // || Child 1 || | | // || ||asdf| | // |+-----------+| | | // | +----+ | // | | // +--------------------------+ parentFrame.counterAxisAlignItems = 'BASELINE'})()
```
