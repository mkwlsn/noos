---
title: Methods
slug: template-api-methods
source_file: code-connect-template-api.html
source_url: 'https://www.figma.com/code-connect-docs/template-api/'
doc_type: code-connect
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: db3e6f2a9753ce8f
token_count: 301
chunk_title: Methods
chunk_slug: template-api-methods
chunk_index: 2
chunk_of_total: 6
parent_file: template-api.md
parent_slug: template-api
char_count: 1052
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - template-api-introduction
  - template-api-figmaproperties-properties
  - template-api-booleanpropertyname-string-options-recor
  - template-api-stringpropertyname-string-string-instanc
  - template-api-instanceinstanceswapprop-string-instance
compiler: noos-figma
---

#### `__find__(name): InstanceHandle | ErrorHandle | null`

- Finds a child or nested child instance by name.

#### `__findChildWithCriteria__({ type, name }: { type: 'INSTANCE' | 'TEXT'; name: string }): InstanceHandle | TextHandle | ErrorHandle | null`

- Finds a child matching the specified type and name

#### `__getPropertyValue__(name: string): string | boolean | ErrorHandle`

- Gets a property value by name.

#### `__render__(): ResultSection[]`

- Returns the render information for the node.
- If an instance doesn't have an associated template then the below format is returned

```
{ type: 'INSTANCE' as const, guid, symbolId,}
```#### `__getProps__(): Record | ErrorHandle | undefined`

- Returns the properties specified in the metadata field

#### `__renderWithFn__(renderFn: (props: Record) => TemplateStringResult): ResultSection[] | ErrorHandle | undefined`

- Renders with a provided function.

## properties or `__properties__`

The `properties` object provides several methods to interact with the properties of the current node.
