---
compiler: noos-figma
created: '2025-06-27T06:12:59.184Z'
version: 1.0.0
content_hash: 58561c85d1eeeafd
---
---
title: `imports`
slug: config-file-imports
source_file: code-connect-config-file.html
source_url: https://www.figma.com/code-connect-docs/config-file/
doc_type: code-connect
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 830b543ca95231fb
token_count: 329
chunk_title: `imports`
chunk_slug: config-file-imports
chunk_index: 3
chunk_of_total: 4
parent_file: config-file.md
parent_slug: config-file
char_count: 1151
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: ["config-file-introduction", "config-file-include-and-exclude", "config-file-interactivesetupfigmafileurl"]
---

You can override the generated import statements for a connected component by passing an array of `imports`. This might be useful if the automatic resolution does not work well for your use case.

```
figma.connect(Button, "https://...", { imports: ["import { Button } from '@lib'"]})
```## SwiftUI-specific project configuration

```
"codeConnect": { "include": [...], "exclude": [...], "xcodeprojPath": "MyProject.xcodeproj", "swiftPackagePath": "../path/to/my/Package.swift", "importMapping": { "packages/design-system/*": "DesignSystem" }}
```### `xcodeprojPath`

The `xcodeprojPath` configuration option allows you to specify the `.xcodeproj` file associated with your project. Alternatively, if using `Package.swift` file, you can also specify the `swiftPackagePath`. Code Connect requires this file (or `Package.swift`) in order to locate the Code Connect package and build the language support binary. Code Connect defaults to using the first `.xcodeproj` file it finds, which should work for most projects, but if you encounter errors and have more than one `.xcodeproj` file, you can use this option to point Code Connect to the correct one.
