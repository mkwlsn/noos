---
title: 'codegenPreferences?: CodegenPreference[]'
slug: manifest-codegenpreferences-codegenpreference
source_file: plugin-api-manifest.html
source_url: 'https://www.figma.com/plugin-docs/api/manifest/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: c5ad01cd63acfa36
token_count: 278
chunk_title: 'codegenPreferences?: CodegenPreference[]'
chunk_slug: manifest-codegenpreferences-codegenpreference
chunk_index: 16
chunk_of_total: 17
parent_file: manifest.md
parent_slug: manifest
char_count: 972
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
  - manifest-codegenlanguages-codelanguage
compiler: noos-figma
---

Used to specify a list of preferences for your codegen plugin, such as alternative units of measure.

Example:

```
"codegenPreferences": [ // Optional but a unit itemType can be used to specify that the plugin supports a custom scaled unit. By default, all plugins // support the pixel unit. { "itemType": "unit", "scaledUnit": "Rem", "defaultScaleFactor": 16, // Optional, if true the scaled unit is the default. "default": true, // Optional, if omitted, all languages are included. "includedLanguages": [] }, { "itemType": "select", "propertyName": "tabSize", "label": "Tab Size", "options": [ {"label": "2", "value": "2", isDefault: true }, {"label": "4", "value": "4"}, {"label": "8", "value": "8"} ], // Optional, if omitted, all languages are included. "includedLanguages": ["tailwind"] }, { "itemType": "action", "propertyName": "showMore", "label": "More settings..." // Optional, if omitted, all languages are included. "includedLanguages": ["tailwind"], },]
```
