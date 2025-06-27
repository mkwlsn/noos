---
title: 'codegenLanguages?: CodeLanguage[]'
slug: manifest-codegenlanguages-codelanguage
source_file: plugin-api-manifest.html
source_url: 'https://www.figma.com/plugin-docs/api/manifest/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 85c51dfa5c271bae
token_count: 93
chunk_title: 'codegenLanguages?: CodeLanguage[]'
chunk_slug: manifest-codegenlanguages-codelanguage
chunk_index: 15
chunk_of_total: 17
parent_file: manifest.md
parent_slug: manifest
char_count: 323
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - manifest-introduction
  - manifest-name-string-id-string
  - manifest-api-string
  - manifest-main-string-ui-string-key-string-string-
  - manifest-documentaccess-dynamic-page
  - manifest-networkaccess-networkaccess
  - manifest-parameters-parameter
  - manifest-parameteronly-boolean
  - manifest-editortype-figma-figjam-dev
  - manifest-menu-manifestmenuitem
  - manifest-relaunchbuttons-manifestrelaunchbutton
  - manifest-enableproposedapi-boolean-enableprivatep
  - manifest-build-string
  - manifest-permissions-pluginpermissiontype
  - manifest-capabilities-textreview-codegen-inspect-
  - manifest-codegenpreferences-codegenpreference
compiler: noos-figma
---

A list of code languages that your plugin supports. This is required for codegen plugins (plugins
where `editorType` is `dev`, and `capabilities` is `inspect`).

Example:

```
// Specify which languages the plugin supports."codegenLanguages": [ { label: "Tailwind", value: "tailwind" }, { label: "CSS", value: "css" },]
```
