---
title: 'parameters?: Parameter[]'
slug: manifest-parameters-parameter
source_file: plugin-api-manifest.html
source_url: 'https://www.figma.com/plugin-docs/api/manifest/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 353a937e78883016
token_count: 360
chunk_title: 'parameters?: Parameter[]'
chunk_slug: manifest-parameters-parameter
chunk_index: 6
chunk_of_total: 17
parent_file: manifest.md
parent_slug: manifest
char_count: 1260
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - manifest-introduction
  - manifest-name-string-id-string
  - manifest-api-string
  - manifest-main-string-ui-string-key-string-string-
  - manifest-documentaccess-dynamic-page
  - manifest-networkaccess-networkaccess
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

Used to specify the list of parameters that your plugin accepts as input. Can also be defined on [menu items](/plugin-docs/manifest/#menu)
. Here's an example:

```
"parameters":
  - "[object Object]"
  - "[object Object]"
  - "[object Object]"
```Each parameter has the following properties:

- A `name` property that specifies the name given to this parameter in the UI.
- A `key` property that is a unique id used to identify the value of this property in `ParameterValues`.
- An optional `description` property that gives a more detailed description that is displayed in the UI.
- An optional `allowFreeform` property that allows the user to enter any value for this parameter, not just those suggested by the plugin.
- An optional `optional` property that indicates the parameter can be skipped in the UI.

More formally,

```
interface Parameter { name: string key: string description?: string allowFreeform?: boolean optional?: boolean}
```
