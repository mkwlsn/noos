---
title: Introduction
slug: ComponentPropertiesMixin-componentpropertydefinitions-introduction
source_file: plugin-api-ComponentPropertiesMixin-componentpropertydefinitions.html
source_url: >-
  https://www.figma.com/plugin-docs/api/ComponentPropertiesMixin-componentpropertydefinitions/
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: e183cfde4225d6a3
token_count: 168
chunk_title: Introduction
chunk_slug: ComponentPropertiesMixin-componentpropertydefinitions-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: ComponentPropertiesMixin-componentpropertydefinitions.md
parent_slug: ComponentPropertiesMixin-componentpropertydefinitions
char_count: 585
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - ComponentPropertiesMixin-componentpropertydefinitions-signature-remarks
compiler: noos-figma
---

# componentPropertyDefinitions

All component properties and their default values that exist on this component set. `'VARIANT'` properties will also have a list of all variant options. `'BOOLEAN'`, `'TEXT'`, and `'INSTANCE_SWAP'` properties will have their names suffixed by a unique identifier starting with `'#'`, which is helpful for quickly distinguishing multiple component properties that have the same name in the Figma UI. The entire property name should be used for all Component property-related API methods and properties.

 Supported on:

- ComponentNode
- ComponentSetNode
