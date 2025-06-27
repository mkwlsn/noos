---
title: 'build?: string'
slug: manifest-build-string
source_file: plugin-api-manifest.html
source_url: 'https://www.figma.com/plugin-docs/api/manifest/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 6b9c1af646a491f4
token_count: 69
chunk_title: 'build?: string'
chunk_slug: manifest-build-string
chunk_index: 12
chunk_of_total: 17
parent_file: manifest.md
parent_slug: manifest
char_count: 240
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
  - manifest-permissions-pluginpermissiontype
  - manifest-capabilities-textreview-codegen-inspect-
  - manifest-codegenlanguages-codelanguage
  - manifest-codegenpreferences-codegenpreference
compiler: noos-figma
---

Experimental! A shell command to run before we load the file specified in `main` and `ui`. This can be used to call build commands such as compiling with Typescript, running Webpack, etc. The command is run in the directory of the manifest.
