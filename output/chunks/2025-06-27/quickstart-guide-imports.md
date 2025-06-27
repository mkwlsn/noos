---
title: Imports
slug: quickstart-guide-imports
source_file: code-connect-quickstart-guide.html
source_url: 'https://www.figma.com/code-connect-docs/quickstart-guide/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: edd2ec0c96b3abdf
token_count: 189
chunk_title: Imports
chunk_slug: quickstart-guide-imports
chunk_index: 8
chunk_of_total: 10
parent_file: quickstart-guide.md
parent_slug: quickstart-guide
char_count: 660
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - quickstart-guide-introduction
  - quickstart-guide-before-you-begin
  - quickstart-guide-set-up-dependencies-swiftui-jetpack-comp
  - quickstart-guide-install-the-code-connect-command-line-to
  - quickstart-guide-privacy-and-code-connect
  - quickstart-guide-use-the-interactive-setup
  - quickstart-guide-publish-code-connect-files
  - quickstart-guide-unpublish-code-connect-files
  - quickstart-guide-figmaconnect
compiler: noos-figma
---

At the top of the file is an `import` statement for Code Connect. The way Code Connect is imported in the file is based on the framework.

- React```
import figma from “@figma/code-connect”
```
- SwiftUI`import Figma`
- Jetpack Compose`import com.figma.code.connect.FigmaConnect`
- HTML/Web Components`import { html } from “@figma/code-connect/html”`

The `import` statement lets the Code Connect API be used in the rest of the file. You also will want to import any of the component code to use in your examples later on.

This section may also include other import statements that are needed for your framework, such as `import React from "react"` for React.
