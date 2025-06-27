---
title: `paths`
slug: config-file-paths
source_file: code-connect-config-file.html
source_url: https://www.figma.com/code-connect-docs/config-file/
doc_type: code-connect
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 6f28ffa16064f814
token_count: 82
chunk_title: `paths`
chunk_slug: config-file-paths
chunk_index: 7
chunk_of_total: 10
parent_file: config-file.md
parent_slug: config-file
char_count: 287
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: ["config-file-introduction", "config-file-include-and-exclude", "config-file-parser", "config-file-label", "config-file-interactivesetupfigmafileurl", "config-file-documenturlsubstitutions", "config-file-importpaths", "config-file-imports", "config-file-xcodeprojpath"]
---

If you're using path aliases in your TypeScript project configuration, you must set `paths` in `figma.config.json` so Code Connect knows how to resolve your imports. The `paths` object in your Code Connect config file should match the `paths` object used in your project's tsconfig.json.