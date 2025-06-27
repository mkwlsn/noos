---
title: `parser`
slug: config-file-parser
source_file: code-connect-config-file.html
source_url: https://www.figma.com/code-connect-docs/config-file/
doc_type: code-connect
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 262ee8ffada8e8fc
token_count: 207
chunk_title: `parser`
chunk_slug: config-file-parser
chunk_index: 2
chunk_of_total: 10
parent_file: config-file.md
parent_slug: config-file
char_count: 723
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: ["config-file-introduction", "config-file-include-and-exclude", "config-file-label", "config-file-interactivesetupfigmafileurl", "config-file-documenturlsubstitutions", "config-file-importpaths", "config-file-paths", "config-file-imports", "config-file-xcodeprojpath"]
---

Code Connect tries to determine your project type by looking at the root of your project directory:

- If a `package.json` containing `react` is found, your project is detected as React
- If a `package.json` is found and doesn't contain `react`, your project is detected as HTML
- If a file matching `Package.swift` or `*.xcodeproj` is found, your project is detected as Swift
- If a file matching `build.gradle.kts` is found, your project is detected as Jetpack Compose

If your project framework isn't detected correctly, you can override the project type by using the `parser` key in your `figma.config.json` file. Valid values are `react`, `html`, `swift` and `compose`.

```
{ "codeConnect": { "parser": "react" }}
```