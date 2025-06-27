---
title: Signature + Remarks
slug: figma-mode-signature-remarks
source_file: plugin-api-figma-mode.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-mode/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 1a733ba69a248156
token_count: 249
chunk_title: Signature + Remarks
chunk_slug: figma-mode-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: figma-mode.md
parent_slug: figma-mode
char_count: 871
heading_level: h2
chunk_type: tutorial
merge_type: merged
tags: []
sibling_chunks:
  - figma-mode-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### mode: 'default' | 'textreview' | 'inspect' | 'codegen' | 'linkpreview' | 'auth' [readonly]

Here’s a simplified example where you can create an if statement in a plugin that has one set of functionality when it is run in `Dev Mode`, and another set of functionality when run in Figma design:

Code sample to determine editorType and mode```
if (figma.editorType === "dev") { // Read the document and listen to API events if (figma.mode === "inspect") { // Running in inspect panel mode } else if (figma.mode === "codegen") { // Running in codegen mode }} else if (figma.editorType === "figma") { // If the plugin is run in Figma design, edit the document if (figma.mode === 'textreview') { // Running in text review mode }} else if (figma.editorType === "figjam") { // Do FigJam only operations if (figma.mode === 'textreview') { // Running in text review mode }}
```
