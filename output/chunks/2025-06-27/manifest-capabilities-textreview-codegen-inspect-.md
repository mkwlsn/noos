---
title: 'capabilities?: (''textreview'' | ''codegen'' | ''inspect'' | ''vscode'')[]'
slug: manifest-capabilities-textreview-codegen-inspect-
source_file: plugin-api-manifest.html
source_url: 'https://www.figma.com/plugin-docs/api/manifest/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: f3f9131ca614b947
token_count: 162
chunk_title: 'capabilities?: (''textreview'' | ''codegen'' | ''inspect'' | ''vscode'')[]'
chunk_slug: manifest-capabilities-textreview-codegen-inspect-
chunk_index: 14
chunk_of_total: 17
parent_file: manifest.md
parent_slug: manifest
char_count: 566
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
  - manifest-codegenlanguages-codelanguage
  - manifest-codegenpreferences-codegenpreference
compiler: noos-figma
---

This allows you to specify what capabilities your plugin has access to.

You can specify one or more of the following values:

- `textreview`
- `codegen`
- `inspect`

Use `textreview` for [text review plugins](/plugin-docs/textreview-plugins/)
.

Use `codegen` for [codegen plugins](/plugin-docs/working-in-dev-mode/#plugins-for-codegen)
.

Use `inspect` for [inspect panel plugins](/plugin-docs/working-in-dev-mode/#plugins-for-inspection)
.

Use `vscode` for [Dev Mode plugins in VS Code](/plugin-docs/working-in-dev-mode/#dev-mode-plugins-in-visual-studio-code)
.
