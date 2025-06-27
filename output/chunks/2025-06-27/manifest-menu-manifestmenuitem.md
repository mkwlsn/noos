---
title: 'menu?: ManifestMenuItem[]'
slug: manifest-menu-manifestmenuitem
source_file: plugin-api-manifest.html
source_url: 'https://www.figma.com/plugin-docs/api/manifest/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 8df5ec502a400374
token_count: 510
chunk_title: 'menu?: ManifestMenuItem[]'
chunk_slug: manifest-menu-manifestmenuitem
chunk_index: 9
chunk_of_total: 17
parent_file: manifest.md
parent_slug: manifest
char_count: 1782
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
  - manifest-parameters-parameter
  - manifest-parameteronly-boolean
  - manifest-editortype-figma-figjam-dev
  - manifest-relaunchbuttons-manifestrelaunchbutton
  - manifest-enableproposedapi-boolean-enableprivatep
  - manifest-build-string
  - manifest-permissions-pluginpermissiontype
  - manifest-capabilities-textreview-codegen-inspect-
  - manifest-codegenlanguages-codelanguage
  - manifest-codegenpreferences-codegenpreference
compiler: noos-figma
---

This allows you to specify a submenu for your plugin, enabling the plugin to contain multiple commands. Use the [`figma.command`](/plugin-docs/api/figma/#command)
 property to determine which command the user selected.

The `menu` property contains a nested list of menu items, menu separators and submenus to be displayed. Here's an example:

```
"menu":
  - "[object Object]"
  - "[object Object]"
  - "[object Object]"
  - "[object Object]"
```Each item in the `menu` property must be one of the following three:

- A `name` and a `command` property. This creates a user-clickable submenu item. The `name` property is displayed to the user in the menu. The `command` property is never exposed to the user but is rather exposed to your plugin through the `figma.command` javascript property. You can choose any string value for `command`.
- A `separator` property with the value `true`. This creates a separator in the menu. A separator is not selectable by the user.
- A `name` and a `menu` property. This creates a nested submenu. The `name` property is displayed as name for the submenu. The `menu` property contains an array of menu items following the same format of the top-most `menu` manifest property. The submenu itself can not be selected by the user, but items inside the submenu can be. Submenus can be nested arbitrarily deep.

More formally,

```
type ManifestMenuItem = // Clickable menu item. { name: string, command: string, parameters?: ParameterList[], parameterOnly?: boolean } | // Separator { separator: true } | // Submenu { name: string, menu: ManifestMenuItem[] }
```
