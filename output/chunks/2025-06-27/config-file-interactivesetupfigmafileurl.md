---
title: `interactiveSetupFigmaFileUrl`
slug: config-file-interactivesetupfigmafileurl
source_file: code-connect-config-file.html
source_url: https://www.figma.com/code-connect-docs/config-file/
doc_type: code-connect
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 8eab6fb24392aa5c
token_count: 148
chunk_title: `interactiveSetupFigmaFileUrl`
chunk_slug: config-file-interactivesetupfigmafileurl
chunk_index: 4
chunk_of_total: 10
parent_file: config-file.md
parent_slug: config-file
char_count: 516
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: ["config-file-introduction", "config-file-include-and-exclude", "config-file-parser", "config-file-label", "config-file-documenturlsubstitutions", "config-file-importpaths", "config-file-paths", "config-file-imports", "config-file-xcodeprojpath"]
---

`interactiveSetupFigmaFileUrl` allows you to specify the Figma file to use during the [interactive setup](/code-connect-docs/quickstart-guide/#use-the-interactive-setup)
. When present in your `figma.config.json` file, this URL will automatically be used as the Figma file URL for connecting components.

If you already have a `figma.config.json` file, you can add this option to the existing file.

```
{ "codeConnect": { "interactiveSetupFigmaFileUrl": "https://www.figma.com/design/abc123/my-design-system" }}
```