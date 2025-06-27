---
title: createTable
slug: figma-createtable
source_file: plugin-api-figma-createtable.html
source_url: https://www.figma.com/plugin-docs/api/figma-createtable/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: b6fe8acb98b3b17f
token_count: 208
---
# createTable

##### info

This API is only available in FigJam

Creates a new table.

## Signature

### createTable(numRows?: number, numColumns?: number): TableNode

## Remarks

By default, a table has two rows and two columns, and is parented under `figma.currentPage`.

Create a table and add text to cells inside```
(async () => { // Create a table with 2 rows and 3 columns const table = figma.createTable(2, 3) // Load the font before setting characters await figma.loadFontAsync(table.cellAt(0, 0).text.fontName) // Sets characters for the table cells: // A B C // 1 2 3 table.cellAt(0, 0).text.characters = 'A' table.cellAt(0, 1).text.characters = 'B' table.cellAt(0, 2).text.characters = 'C' table.cellAt(1, 0).text.characters = '1' table.cellAt(1, 1).text.characters = '2' table.cellAt(1, 2).text.characters = '3'})()
```