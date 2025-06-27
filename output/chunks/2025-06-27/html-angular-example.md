---
title: Angular example
slug: html-angular-example
source_file: code-connect-html.html
source_url: 'https://www.figma.com/code-connect-docs/html/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 524bfece48e654c2
token_count: 120
chunk_title: Angular example
chunk_slug: html-angular-example
chunk_index: 11
chunk_of_total: 15
parent_file: html.md
parent_slug: html
char_count: 417
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - html-introduction
  - html-strings
  - html-booleans
  - html-enums
  - html-instances
  - html-instance-children
  - html-wildcard-match
  - html-nested-properties
  - html-text-content
  - html-classname
  - html-web-components-example
  - html-vue-example
  - html-lit-example
  - html-icons-as-strings
compiler: noos-figma
---

```
import figma, { html } from '@figma/code-connect/html';figma.connect('https://...', { props: { text: figma.string('Text'), disabled: figma.boolean('Disabled'), size: figma.enum('Size', { 'small': 'sm', 'large': 'lg' }) }, example: (props) => html`\ ${props.text} export class Example { public onClick() { alert("You clicked ${props.text}"); } }`, imports: ["import { DsButton } from '@ds-angular/button'"], })
```
