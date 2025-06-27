---
title: Dynamic code snippets
slug: storybook-dynamic-code-snippets
source_file: code-connect-storybook.html
source_url: 'https://www.figma.com/code-connect-docs/storybook/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 5c9e94f5b39d8ac4
token_count: 530
chunk_title: Dynamic code snippets
chunk_slug: storybook-dynamic-code-snippets
chunk_index: 1
chunk_of_total: 3
parent_file: storybook.md
parent_slug: storybook
char_count: 1853
heading_level: h2
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - storybook-introduction
  - storybook-variant-restrictions
compiler: noos-figma
---

With the basic setup as described above, you should have a connected code snippet visible in Dev Mode when inspecting instances of that component. However, the code snippet doesn't yet reflect the entirety of the design.

Here is a simple example for a button with a `label`, `disabled`, and `type` property.

```
import figma from "@figma/code-connect"export default { component: Button, parameters: { design: { type: 'figma', url: 'https://...', examples: [ButtonExample], props: { label: figma.string('Text Content'), disabled: figma.boolean('Disabled'), type: figma.enum('Type', { Primary: ButtonType.Primary, Secondary: ButtonType.Secondary }, }, }, argTypes: { label: { control: 'string' }, disabled: { control: 'boolean' }, type: { control: { type: 'select', options: [ButtonType.Primary, ButtonType.Secondary] } } }, args: { label: 'Hello world', disabled: false, type: ButtonType.Primary } }}export function ButtonExample({ label, disabled, type }) { return { label }}
```It is also possibe to have different examples using different property names, specifying those in the `examples` array.

```
export default { component: Button, parameters: { design: { type: 'figma', url: 'https://...', examples: [ { example: Button1 }, { example: Button2, props: { text: figma.string('Text Content') } // overrides the default props (`props: { label... }`) }, ], props: { label: figma.string('Text Content'), }, }, },}export function Button1({ label }) { return { label }}export function Button2({ text }) { return { text }}
```You can use the `imports` field to specify the import statement(s) required to use the component.

```
export default { component: Button, parameters: { design: { type: 'figma', url: 'https://...', imports: ['import { Button } from "./Button"'], examples: [ ButtonExample ] }, },}export function ButtonExample() { return }
```
