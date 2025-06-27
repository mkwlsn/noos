---
title: 'main: string + ui?: string | { [key: string]: string }'
slug: manifest-main-string-ui-string-key-string-string-
source_file: plugin-api-manifest.html
source_url: 'https://www.figma.com/plugin-docs/api/manifest/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 2f02e2d049aa3ee9
token_count: 140
chunk_title: 'main: string + ui?: string | { [key: string]: string }'
chunk_slug: manifest-main-string-ui-string-key-string-string-
chunk_index: 3
chunk_of_total: 17
parent_file: manifest.md
parent_slug: manifest
char_count: 487
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - manifest-introduction
  - manifest-name-string-id-string
  - manifest-api-string
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
  - manifest-codegenpreferences-codegenpreference
merged_titles:
  - 'main: string'
  - 'ui?: string | { [key: string]: string }'
compiler: noos-figma
---

The relative file path to the Javascript code of your plugin.

Used to specify HTML file/files that can be used in the iframe modal via [`figma.showUI`](/plugin-docs/api/properties/figma-showui/)
, if you choose to have one.

- If a single string is specified, this is the relative file path to the HTML file whose contents will be available as a string in the Javascript code via the constant `__html__`.
- If a map is specified, each entry of the map will be available at `__uiFiles__`
