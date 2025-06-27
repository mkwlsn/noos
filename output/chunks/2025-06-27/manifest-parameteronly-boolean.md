---
title: 'parameterOnly?: boolean'
slug: manifest-parameteronly-boolean
source_file: plugin-api-manifest.html
source_url: 'https://www.figma.com/plugin-docs/api/manifest/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: ff79135ea1a4894d
token_count: 193
chunk_title: 'parameterOnly?: boolean'
chunk_slug: manifest-parameteronly-boolean
chunk_index: 7
chunk_of_total: 17
parent_file: manifest.md
parent_slug: manifest
char_count: 673
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

Allows you to specify that your plugin can only be launched with parameters. You must also specify a valid parameter list: [`parameters`](/plugin-docs/manifest/#parameters)
.
Can also be defined on [menu items](/plugin-docs/manifest/#menu)
 with parameters.

If `true`, users will always be prompted to enter parameters in the quick action UI before your plugin is run.
If `false`, users will only be asked to enter parameters if they launch the plugin through the Quick Actions UI and hit the `tab` key. If the user launches the plugin through
the context menu or the main menu, the plugin will be launched directly without displaying the parameter UI.

Defaults to `true`
