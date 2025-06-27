---
title: className
slug: html-classname
source_file: code-connect-html.html
source_url: 'https://www.figma.com/code-connect-docs/html/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 7ba3edb86ed1f320
token_count: 691
chunk_title: className
chunk_slug: html-classname
chunk_index: 9
chunk_of_total: 15
parent_file: html.md
parent_slug: html
char_count: 2418
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
  - html-web-components-example
  - html-angular-example
  - html-vue-example
  - html-lit-example
  - html-icons-as-strings
compiler: noos-figma
---

For mapping figma properties to a className string, you can use the `figma.className` helper. It takes an array of strings and returns the concatenated string. Any other helper that returns a string (or undefined) can be used in conjunction with this. Undefined values or empty strings are filtered out of the result.

```
figma.connect("https://...", { props: { className: figma.className([ 'btn-base', figma.enum("Size", { Large: 'btn-large' }), figma.boolean("Disabled", { true: 'btn-disabled', false: '' }), ]) }, example: ({ className }) => html``}
```In Dev Mode, this snippet appears as:

```

```

## Variant restrictions

Sometimes a component in Figma is represented by more than one component in code. For example you may have a single `Button` in your Figma design system with a `type` property to switch between primary, secondary, and danger variants. However, in code this may be represented by three different components, a ``, `` and ``.

To model this behaviour with Code Connect, use variant restrictions. Variant restrictions allow you to provide entirely different code samples for different variants of a single Figma component. The keys and values used should match the name of the variant (or property) in Figma and it's options respectively.

```
figma.connect('https://...', { variant: { Type: 'Primary' }, example: () => html``,})figma.connect('https://...', { variant: { Type: 'Secondary' }, example: () => html``,})figma.connect('https://...', { variant: { Type: 'Danger' }, example: () => html``,})
```This also works for Figma properties that aren't variants, such as boolean props.

```
figma.connect('https://...', { variant: { "Has Icon": true }, example: () => html``,})
```In some cases, you may also want to map a code component to a combination of variants in Figma.

```
figma.connect('https://...', { variant: { Type: 'Danger', Disabled: true }, example: () => html``,})
```

## Examples

Code Connect HTML supports any valid HTML markup, and so in addition to documenting plain HTML and Web Components, can also be used for documenting HTML-based frameworks such as Angular and Vue. Any JavaScript/TypeScript code accompanying the HTML code must be enclosed in a `` tag.

Angular and Vue projects will be auto-detected based on their presence in `package.json`, and the default label for your examples will be set appropriately (see [label](#label)
 docs for more information).
