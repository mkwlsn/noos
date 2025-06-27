---
title: 'permissions?: PluginPermissionType[]'
slug: manifest-permissions-pluginpermissiontype
source_file: plugin-api-manifest.html
source_url: 'https://www.figma.com/plugin-docs/api/manifest/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 45d16c84157d6545
token_count: 158
chunk_title: 'permissions?: PluginPermissionType[]'
chunk_slug: manifest-permissions-pluginpermissiontype
chunk_index: 13
chunk_of_total: 17
parent_file: manifest.md
parent_slug: manifest
char_count: 550
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
  - manifest-capabilities-textreview-codegen-inspect-
  - manifest-codegenlanguages-codelanguage
  - manifest-codegenpreferences-codegenpreference
compiler: noos-figma
---

This allows you to specify what permissions your plugin wants access to.

The possible `PluginPermissionType` are:

```
type PluginPermissionType = "currentuser" | "activeusers" | "fileusers" | "payments" | "teamlibrary"
```

##### info

- `activeusers`: lets your plugin use the `figma.activeUsers` API.
- `currentuser`: lets your plugin use the `figma.currentUser` API.
- `fileusers`: lets you use the `StampNode.getAuthorAsync` method.
- `payments`: lets you use the `figma.payments` API.
- `teamlibrary`: lets you use the `figma.teamLibrary` API.
