---
title: Introduction
slug: CodegenPreference-introduction
source_file: plugin-api-CodegenPreference.html
source_url: 'https://www.figma.com/plugin-docs/api/CodegenPreference/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: b3a29cafae5ec5d4
token_count: 214
chunk_title: Introduction
chunk_slug: CodegenPreference-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: CodegenPreference.md
parent_slug: CodegenPreference
char_count: 747
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - CodegenPreference-unit-preference-select-preference
compiler: noos-figma
---

# CodegenPreference

```
type CodegenPreference = | { itemType: 'unit' defaultScaleFactor: number scaledUnit: string default?: boolean // The languages that this preference applies to. // If omitted, will default to all languages. includedLanguages?: string[] } | { itemType: 'select' propertyName: string label: string options: { label: string; value: string; isDefault?: boolean }[] includedLanguages?: string[] } | { itemType: 'action' propertyName: string label: string includedLanguages?: string[] }
```Codegen preferences let you define custom commands for your plugin that show up in Figma's UI. These commands can run plugin code, including the ability to open an iframe, and they allow users of the plugin to customize the codegen output.
