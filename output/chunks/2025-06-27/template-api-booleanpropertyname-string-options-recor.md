---
title: '`boolean(propertyName: string, options?: Record ): boolean`'
slug: template-api-booleanpropertyname-string-options-recor
source_file: code-connect-template-api.html
source_url: 'https://www.figma.com/code-connect-docs/template-api/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 80a08431f1ca115b
token_count: 95
chunk_title: '`boolean(propertyName: string, options?: Record ): boolean`'
chunk_slug: template-api-booleanpropertyname-string-options-recor
chunk_index: 5
chunk_of_total: 9
parent_file: template-api.md
parent_slug: template-api
char_count: 330
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - template-api-introduction
  - template-api-figmacode
  - template-api-figmacurrentlayer-instancehandle
  - template-api-figmaproperties-properties
  - template-api-methods
  - template-api-enumpropertyname-string-options-record-n
  - template-api-stringpropertyname-string-string-instanc
  - template-api-instanceinstanceswapprop-string-instance
compiler: noos-figma
---

This method returns the boolean value of the specified property of the layer. You can specify options to provide a mapping from a value (true/false) to anything of TemplateArgValueKind.

An example is

```
const booleanProperty = figma.currentLayer.__properties__.boolean("propertyName", {"true": 'icon',"false": undefined });
```
