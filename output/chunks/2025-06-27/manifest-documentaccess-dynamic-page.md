---
title: 'documentAccess?: ''dynamic-page'''
slug: manifest-documentaccess-dynamic-page
source_file: plugin-api-manifest.html
source_url: 'https://www.figma.com/plugin-docs/api/manifest/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 26c61038a2fb67c4
token_count: 211
chunk_title: 'documentAccess?: ''dynamic-page'''
chunk_slug: manifest-documentaccess-dynamic-page
chunk_index: 4
chunk_of_total: 17
parent_file: manifest.md
parent_slug: manifest
char_count: 737
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - manifest-introduction
  - manifest-name-string-id-string
  - manifest-api-string
  - manifest-main-string-ui-string-key-string-string-
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
compiler: noos-figma
---

This field ensures the plugin supports dynamic page loading. The field is required for all new plugins and the value must be `dynamic-page`.

- If the manifest field is included, no additional page loads will occur when the plugin is run.
- If the manifest field is omitted, then running the plugin will trigger additional page loads in files with more than one page. The first time the plugin is run after a user opens a file, the entire file will load and Figma will show a "Loading n pages for plugin…" notification, where `n` is the number of pages being loaded.

If your existing plugin's manifest doesn't include this field, you should [migrate your plugin to use dynamic page loading](/plugin-docs/migrating-to-dynamic-loading/)
.
