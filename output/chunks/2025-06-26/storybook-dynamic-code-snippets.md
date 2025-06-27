---
title: Dynamic code snippets
slug: storybook-dynamic-code-snippets
source_file: code-connect-storybook.html
source_url: 'https://www.figma.com/code-connect-docs/storybook/'
doc_type: code-connect
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 3adfc818641bdb09
token_count: 860
chunk_title: Dynamic code snippets
chunk_slug: storybook-dynamic-code-snippets
chunk_index: 1
chunk_of_total: 2
parent_file: storybook.md
parent_slug: storybook
char_count: 3008
heading_level: h2
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - storybook-introduction
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
```## Variant restrictions

Sometimes a component in Figma is represented by more than one component in code. For example you may have a single `Button` in your Figma design system with a `type` property to switch between primary, secondary, and danger variants. However, in code this may be represented by three different components, such as `PrimaryButton`, `SecondaryButton` and `DangerButton`.

To model this behaviour with Code Connect, use variant restrictions. Variant restrictions allow you to provide entirely different code samples for variants of a single Figma component. The keys and values used should match the name of the variant (or property) in Figma and it's options respectively.

```
export default { component: Button, parameters: { design: { type: 'figma', url: 'https://...', examples: [ { example: PrimaryButtonStory, variant: { Type: 'Primary' } }, { example: SecondaryButtonStory, variant: { Type: 'Secondary' } }, { example: DangerButtonStory, variant: { Type: 'Danger' } }, ], }, },}export function PrimaryButtonStory() { return }export function SecondaryButtonStory() { return }export function DangerButtonStory() { return }
```
