---
title: 'relaunchButtons?: ManifestRelaunchButton[]'
slug: manifest-relaunchbuttons-manifestrelaunchbutton
source_file: plugin-api-manifest.html
source_url: 'https://www.figma.com/plugin-docs/api/manifest/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 45da729671a7dd8c
token_count: 480
chunk_title: 'relaunchButtons?: ManifestRelaunchButton[]'
chunk_slug: manifest-relaunchbuttons-manifestrelaunchbutton
chunk_index: 10
chunk_of_total: 17
parent_file: manifest.md
parent_slug: manifest
char_count: 1680
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
  - manifest-enableproposedapi-boolean-enableprivatep
  - manifest-build-string
  - manifest-permissions-pluginpermissiontype
  - manifest-capabilities-textreview-codegen-inspect-
  - manifest-codegenlanguages-codelanguage
  - manifest-codegenpreferences-codegenpreference
compiler: noos-figma
---

This configures the relaunch buttons that are set via the [`setRelaunchData`](/plugin-docs/api/properties/nodes-setrelaunchdata/)
 API call.

Example:

```
"relaunchButtons":
  - "[object Object]"
  - "[object Object]"
```Each relaunch button in the `relaunchButtons` array is an object with the following properties:

- A `command` property that specifies the `figma.command` that will be supplied when the plugin is run after the button is pressed. This command must match the command supplied in the `setRelaunchData` API call for the button to display.
- A `name` property that gets displayed as the text of the button.
- An optional `multipleSelection` property (defaulting to `false`) that enables the relaunch button and description to appear when multiple nodes are selected. Without `multipleSelection` set to `true` the relaunch buttons will only appear when a single node is selected. Even when `multipleSelection` is `true`, the relaunch buttons will only display if all of the selected nodes have relaunch data attached with the same `command`.

##### info

Note that if the name of a command in the manifest changes or is removed, then all buttons with that command will disappear. This behavior can be used to remove buttons when a particular action is no longer supported by the plugin.

If multiple relaunch buttons are shown for a given node or selection of nodes, the order of the buttons is determined by the order of the elements in the manifest's `relaunchButtons` array.

More formally,

```
type ManifestRelaunchButton = { command: string name: string multipleSelection?: boolean}
```
