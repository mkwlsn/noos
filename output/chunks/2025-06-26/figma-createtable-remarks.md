---
title: Remarks
slug: figma-createtable-remarks
source_file: plugin-api-figma-createtable.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-createtable/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: dfb64263630a38e1
token_count: 187
chunk_title: Remarks
chunk_slug: figma-createtable-remarks
chunk_index: 0
chunk_of_total: 1
parent_file: figma-createtable.md
parent_slug: figma-createtable
char_count: 652
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

By default, a table has two rows and two columns, and is parented under `figma.currentPage`.

Create a table and add text to cells inside```
(async () => { // Create a table with 2 rows and 3 columns const table = figma.createTable(2, 3) // Load the font before setting characters await figma.loadFontAsync(table.cellAt(0, 0).text.fontName) // Sets characters for the table cells: // A B C // 1 2 3 table.cellAt(0, 0).text.characters = 'A' table.cellAt(0, 1).text.characters = 'B' table.cellAt(0, 2).text.characters = 'C' table.cellAt(1, 0).text.characters = '1' table.cellAt(1, 1).text.characters = '2' table.cellAt(1, 2).text.characters = '3'})()
```
