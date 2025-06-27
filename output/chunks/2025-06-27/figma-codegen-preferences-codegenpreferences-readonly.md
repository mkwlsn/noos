---
title: 'preferences: CodegenPreferences [readonly]'
slug: figma-codegen-preferences-codegenpreferences-readonly
source_file: plugin-api-figma-codegen.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-codegen/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: fd69663ddedbe4b2
token_count: 98
chunk_title: 'preferences: CodegenPreferences [readonly]'
chunk_slug: figma-codegen-preferences-codegenpreferences-readonly
chunk_index: 3
chunk_of_total: 5
parent_file: figma-codegen.md
parent_slug: figma-codegen
char_count: 342
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-codegen-introduction
  - figma-codegen-ontype-preferenceschange-callback-event-
  - figma-codegen-oncetype-preferenceschange-callback-even
  - figma-codegen-refresh-void
compiler: noos-figma
---

Read the current preferences as specified by the user.

```
type CodegenPreferences = { readonly unit: 'PIXEL' | 'SCALED' readonly scaleFactor?: number // An object for every "select" item and their currently // selected values. The format of this is "select" item // propertyName => selectedOption.value. readonly customSettings: Record}
```
