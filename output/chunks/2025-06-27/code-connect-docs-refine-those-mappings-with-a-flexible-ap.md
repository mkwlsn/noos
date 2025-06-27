---
title: Refine those mappings with a flexible API
slug: code-connect-docs-refine-those-mappings-with-a-flexible-ap
source_file: code-connect-code-connect-docs.html
source_url: 'https://www.figma.com/code-connect-docs/code-connect-docs/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 06635a2af0d53db8
token_count: 184
chunk_title: Refine those mappings with a flexible API
chunk_slug: code-connect-docs-refine-those-mappings-with-a-flexible-ap
chunk_index: 2
chunk_of_total: 3
parent_file: code-connect-docs.md
parent_slug: code-connect-docs
char_count: 644
heading_level: h2
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - code-connect-docs-introduction
  - code-connect-docs-leverage-automation-to-connect-design-wi
compiler: noos-figma
---

Code Connect comes with support for different frameworks and languages. Our integration guides will walk you through the process of refining your components by mapping props and variants for:

- React (and React Native) →
- HTML (e.g. Web Components, Angular and Vue) →
- SwiftUI →
- Jetpack Compose →.

Button.figma.tsx```
import figma from '@figma/code-connect/react'figma.connect(Button, 'https://...', { props: { label: figma.string('Text Content'), disabled: figma.boolean('Disabled'), size: figma.enum('Size', { Large: 'large', Medium: 'medium', Small: 'small', }), }, example: ({ disabled, label, size }) => { return ( {label} ) },})
```
