---
title: Introduction
slug: manifest-introduction
source_file: plugin-api-manifest.html
source_url: 'https://www.figma.com/plugin-docs/api/manifest/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 7e2210d6c5165c47
token_count: 186
chunk_title: Introduction
chunk_slug: manifest-introduction
chunk_index: 0
chunk_of_total: 11
parent_file: manifest.md
parent_slug: manifest
char_count: 650
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - manifest-id-string
  - manifest-api-string
  - manifest-main-string-ui-string-key-string-string-
  - manifest-documentaccess-dynamic-page
  - manifest-networkaccess-networkaccess
  - manifest-editortype-figma-figjam-dev
  - manifest-enableprivatepluginapi-boolean-build-str
  - manifest-permissions-pluginpermissiontype
  - manifest-capabilities-textreview-codegen-inspect-
  - manifest-codegenlanguages-codelanguage
compiler: noos-figma
---

# Plugin Manifest

Each plugin must define a `manifest.json` file that describes the plugin. If you use the "Create new plugin" dialog, Figma will automatically create a simple manifest for you. You can extend this generated manifest to take advantage of additional features, for example, to declare a submenu for your plugin.

Example:

manifest.json```
{ "name": "MyPlugin", "id": "737805260747778092", "api": "1.0.0", "editorType": ["figma", "figjam"], "main": "code.js", "ui": "ui.html", "documentAccess": "dynamic-page", "networkAccess": { "allowedDomains": ["none"] }}
```### name: string

The name of the plugin, as it will appear in the menu.
