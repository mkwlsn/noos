---
title: Signature + Remarks
slug: figma-mixed-signature-remarks
source_file: plugin-api-figma-mixed.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-mixed/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: ce988ad6046504fe
token_count: 263
chunk_title: Signature + Remarks
chunk_slug: figma-mixed-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: figma-mixed.md
parent_slug: figma-mixed
char_count: 918
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - figma-mixed-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### mixed: unique symbol [readonly]

Example:

Check if property is a mix of multiple values```
if (node.type === 'RECTANGLE') { if (node.cornerRadius !== figma.mixed) { console.log(`Single corner radius: ${node.cornerRadius}`) } else { console.log(`Mixed corner radius: ${node.topLeftRadius}, ${node.topRightRadius}, ${node.bottomLeftRadius}, ${node.bottomRightRadius}`) }}
```

##### info

Your plugin never needs to know what the actual value of `figma.mixed` is, only that it is a unique, constant value that can be compared against. That being said, this value returns an object of type `symbol` which is a more advanced feature of Javascript. [Read more about symbols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
. It works in TypeScript via the `unique symbol` [subtype](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#unique-symbol)
.
