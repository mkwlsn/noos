---
title: `imports`
slug: config-file-imports
source_file: code-connect-config-file.html
source_url: https://www.figma.com/code-connect-docs/config-file/
doc_type: code-connect
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 97938653cd42ea6c
token_count: 157
chunk_title: `imports`
chunk_slug: config-file-imports
chunk_index: 8
chunk_of_total: 10
parent_file: config-file.md
parent_slug: config-file
char_count: 549
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: ["config-file-introduction", "config-file-include-and-exclude", "config-file-parser", "config-file-label", "config-file-interactivesetupfigmafileurl", "config-file-documenturlsubstitutions", "config-file-importpaths", "config-file-paths", "config-file-xcodeprojpath"]
---

You can override the generated import statements for a connected component by passing an array of `imports`. This might be useful if the automatic resolution does not work well for your use case.

```
figma.connect(Button, "https://...", { imports: ["import { Button } from '@lib'"]})
```

## SwiftUI-specific project configuration

```
"codeConnect": { "include": [...], "exclude": [...], "xcodeprojPath": "MyProject.xcodeproj", "swiftPackagePath": "../path/to/my/Package.swift", "importMapping": { "packages/design-system/*": "DesignSystem" }}
```