---
title: Web Components example
slug: html-web-components-example
source_file: code-connect-html.html
source_url: 'https://www.figma.com/code-connect-docs/html/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 2d4c56243779d623
token_count: 115
chunk_title: Web Components example
chunk_slug: html-web-components-example
chunk_index: 10
chunk_of_total: 15
parent_file: html.md
parent_slug: html
char_count: 400
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
  - html-angular-example
  - html-vue-example
  - html-lit-example
  - html-icons-as-strings
compiler: noos-figma
---

```
import figma, { html } from '@figma/code-connect/html';figma.connect('https://...', { props: { text: figma.string('Text'), disabled: figma.boolean('Disabled'), size: figma.enum('Size', { 'small': 'sm', 'large': 'lg' }) }, example: (props) => html`\ ${props.text} document.querySelector('ds-button') .addEventListener('click', () => { alert("You clicked ${props.text}"); })`, imports: [''], })
```
