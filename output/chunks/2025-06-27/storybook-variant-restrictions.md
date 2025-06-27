---
title: Variant restrictions
slug: storybook-variant-restrictions
source_file: code-connect-storybook.html
source_url: 'https://www.figma.com/code-connect-docs/storybook/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 73abd1b9ba06a851
token_count: 323
chunk_title: Variant restrictions
chunk_slug: storybook-variant-restrictions
chunk_index: 2
chunk_of_total: 3
parent_file: storybook.md
parent_slug: storybook
char_count: 1130
heading_level: h2
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - storybook-introduction
  - storybook-dynamic-code-snippets
compiler: noos-figma
---

Sometimes a component in Figma is represented by more than one component in code. For example you may have a single `Button` in your Figma design system with a `type` property to switch between primary, secondary, and danger variants. However, in code this may be represented by three different components, such as `PrimaryButton`, `SecondaryButton` and `DangerButton`.

To model this behaviour with Code Connect, use variant restrictions. Variant restrictions allow you to provide entirely different code samples for variants of a single Figma component. The keys and values used should match the name of the variant (or property) in Figma and it's options respectively.

```
export default { component: Button, parameters: { design: { type: 'figma', url: 'https://...', examples: [ { example: PrimaryButtonStory, variant: { Type: 'Primary' } }, { example: SecondaryButtonStory, variant: { Type: 'Secondary' } }, { example: DangerButtonStory, variant: { Type: 'Danger' } }, ], }, },}export function PrimaryButtonStory() { return }export function SecondaryButtonStory() { return }export function DangerButtonStory() { return }
```
