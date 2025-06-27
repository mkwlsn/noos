---
title: `xcodeprojPath`
slug: config-file-xcodeprojpath
source_file: code-connect-config-file.html
source_url: https://www.figma.com/code-connect-docs/config-file/
doc_type: code-connect
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: fbb9739a5d3d0278
token_count: 167
chunk_title: `xcodeprojPath`
chunk_slug: config-file-xcodeprojpath
chunk_index: 9
chunk_of_total: 10
parent_file: config-file.md
parent_slug: config-file
char_count: 583
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: ["config-file-introduction", "config-file-include-and-exclude", "config-file-parser", "config-file-label", "config-file-interactivesetupfigmafileurl", "config-file-documenturlsubstitutions", "config-file-importpaths", "config-file-paths", "config-file-imports"]
---

The `xcodeprojPath` configuration option allows you to specify the `.xcodeproj` file associated with your project. Alternatively, if using `Package.swift` file, you can also specify the `swiftPackagePath`. Code Connect requires this file (or `Package.swift`) in order to locate the Code Connect package and build the language support binary. Code Connect defaults to using the first `.xcodeproj` file it finds, which should work for most projects, but if you encounter errors and have more than one `.xcodeproj` file, you can use this option to point Code Connect to the correct one.