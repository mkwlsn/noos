---
title: mixed
slug: figma-mixed
source_file: plugin-api-figma-mixed.html
source_url: https://www.figma.com/plugin-docs/api/figma-mixed/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 6db7e0e0108b1aff
token_count: 310
---
# mixed

This a constant value that some node properties return when they are a mix of multiple values. An example might be font size: a single text node can use multiple different font sizes for different character ranges. For those properties, you should always compare against `figma.mixed`.

## Signature

### mixed: unique symbol [readonly]

## Remarks

Example:

Check if property is a mix of multiple values```
if (node.type === 'RECTANGLE') { if (node.cornerRadius !== figma.mixed) { console.log(`Single corner radius: ${node.cornerRadius}`) } else { console.log(`Mixed corner radius: ${node.topLeftRadius}, ${node.topRightRadius}, ${node.bottomLeftRadius}, ${node.bottomRightRadius}`) }}
```

##### info

Your plugin never needs to know what the actual value of `figma.mixed` is, only that it is a unique, constant value that can be compared against. That being said, this value returns an object of type `symbol` which is a more advanced feature of Javascript. [Read more about symbols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
. It works in TypeScript via the `unique symbol` [subtype](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#unique-symbol)
.