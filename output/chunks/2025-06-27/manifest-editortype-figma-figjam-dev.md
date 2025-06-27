---
title: 'editorType: (''figma'' | ''figjam'' | ''dev'')[]'
slug: manifest-editortype-figma-figjam-dev
source_file: plugin-api-manifest.html
source_url: 'https://www.figma.com/plugin-docs/api/manifest/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: b3733b088949b0d0
token_count: 83
chunk_title: 'editorType: (''figma'' | ''figjam'' | ''dev'')[]'
chunk_slug: manifest-editortype-figma-figjam-dev
chunk_index: 8
chunk_of_total: 17
parent_file: manifest.md
parent_slug: manifest
char_count: 289
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
  - manifest-menu-manifestmenuitem
  - manifest-relaunchbuttons-manifestrelaunchbutton
  - manifest-enableproposedapi-boolean-enableprivatep
  - manifest-build-string
  - manifest-permissions-pluginpermissiontype
  - manifest-capabilities-textreview-codegen-inspect-
  - manifest-codegenlanguages-codelanguage
  - manifest-codegenpreferences-codegenpreference
compiler: noos-figma
---

This allows you to specify the editor(s) that your plugin is intended for and will impact which editor your plugin appears in.

editorTypedescription`"figma"`Figma design mode`"figjam"`FigJam`"dev"`Figma Dev Mode The following value is unsupported:

```
"editorType":
  - "figjam"
  - "dev"
```
