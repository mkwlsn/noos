---
title: Web Components example
slug: html-web-components-example
source_file: code-connect-html.html
source_url: 'https://www.figma.com/code-connect-docs/html/'
doc_type: code-connect
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: c7272059f6d1c7b5
token_count: 660
chunk_title: Web Components example
chunk_slug: html-web-components-example
chunk_index: 2
chunk_of_total: 4
parent_file: html.md
parent_slug: html
char_count: 2309
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - html-introduction
  - html-strings
  - html-icons-as-strings
compiler: noos-figma
---

```
import figma, { html } from '@figma/code-connect/html';figma.connect('https://...', { props: { text: figma.string('Text'), disabled: figma.boolean('Disabled'), size: figma.enum('Size', { 'small': 'sm', 'large': 'lg' }) }, example: (props) => html`\ ${props.text} document.querySelector('ds-button') .addEventListener('click', () => { alert("You clicked ${props.text}"); })`, imports: [''], })
```### Angular example

```
import figma, { html } from '@figma/code-connect/html';figma.connect('https://...', { props: { text: figma.string('Text'), disabled: figma.boolean('Disabled'), size: figma.enum('Size', { 'small': 'sm', 'large': 'lg' }) }, example: (props) => html`\ ${props.text} export class Example { public onClick() { alert("You clicked ${props.text}"); } }`, imports: ["import { DsButton } from '@ds-angular/button'"], })
```### Vue example

```
import figma, { html } from '@figma/code-connect/html';figma.connect('https://...', { props: { text: figma.string('Text'), disabled: figma.boolean('Disabled'), size: figma.enum('Size', { 'small': 'sm', 'large': 'lg' }) }, example: (props) => html`\ function onClick() { alert('You clicked ${props.text}'); } ${props.text}`, imports: ["import { DsButton } from '@ds-vue/button'"], })
```### Lit example

As the example code is written in a template string, you need to escape any `$` symbols which you want to render verbatim in your example, otherwise they'll be interpreted as placeholders.

```
import figma, { html } from '@figma/code-connect/html';figma.connect('https://...', { props: { text: figma.string('Text'), disabled: figma.boolean('Disabled') }, example: (props) => html`\ ${props.text}`, imports: ["import '@ds-lit/button'"], })
```## Connecting Icons

Icons can be configured in many different ways in Figma and code. We recommend using instance-swap props in Figma for icons so you're able to access the nested Code Connect icon using a stable instance-swap prop ID.

##### important

Important: Design Systems usually contain plenty of icons. It's possible to automate the generation of Code Connect documents using a script that adds them to a new file. For example, an `icons.figma.ts` file. We provide an [example script](https://github.com/figma/code-connect/blob/main/cli/scripts/import-icons-as-strings.ts) as a starting point.
