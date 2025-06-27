---
title: className
slug: react-classname
source_file: code-connect-react.html
source_url: 'https://www.figma.com/code-connect-docs/react/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 2d8614aeb426fbb3
token_count: 737
chunk_title: className
chunk_slug: react-classname
chunk_index: 9
chunk_of_total: 14
parent_file: react.md
parent_slug: react
char_count: 2577
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - react-introduction
  - react-figmaconnect
  - react-strings
  - react-booleans
  - react-enums
  - react-instances
  - react-instance-children
  - react-nested-properties
  - react-text-content
  - react-icons-as-jsx-elements
  - react-icons-as-react-components
  - react-icons-as-strings
  - react-accessing-icon-props-in-parent-component
compiler: noos-figma
---

For mapping figma properties to a className string, you can use the `figma.className` helper. It takes an array of strings and returns the concatenated string. Any other helper that returns a string (or undefined) can be used in conjunction with this. Undefined values or empty strings are filtered out of the result.

```
figma.connect("https://...", { props: { className: figma.className([ 'btn-base', figma.enum("Size", { Large: 'btn-large' }), figma.boolean("Disabled", { true: 'btn-disabled', false: '' }), ]) }, example: ({ className }) => }
```In Dev Mode, this snippet appears as:

```

```

## Variant restrictions

Sometimes a component in Figma is represented by more than one component in code. For example you may have a single `Button` in your Figma design system with a `type` property to switch between primary, secondary, and danger variants. However, in code this may be represented by three different components, such as `PrimaryButton`, `SecondaryButton` and `DangerButton`.

To model this behaviour with Code Connect, use variant restrictions. Variant restrictions allow you to provide entirely different code samples for variants of a single Figma component. The keys and values used should match the name of the variant (or property) in Figma and it's options respectively.

```
figma.connect(PrimaryButton, 'https://...', { variant: { Type: 'Primary' }, example: () => ,})figma.connect(SecondaryButton, 'https://...', { variant: { Type: 'Secondary' }, example: () => ,})figma.connect(DangerButton, 'https://...', { variant: { Type: 'Danger' }, example: () => ,})
```This also works for Figma properties that aren't variants, such as boolean props.

```
figma.connect(IconButton, 'https://...', { variant: { "Has Icon": true }, example: () => ,})
```In some cases, you may also want to map a code component to a combination of variants in Figma.

```
figma.connect(DangerButton, 'https://...', { variant: { Type: 'Danger', Disabled: true }, example: () => ,})
```

## Connecting Icons

Icons can be configured in many different ways in Figma and code. We recommend using instance-swap props in Figma for icons so you're able to access the nested Code Connect icon using a stable instance-swap prop ID.

##### important

Important: Design Systems usually contain plenty of icons. It's possible to automate the generation of Code Connect documents using a script that adds them to a new file. For example, an `icons.figma.tsx` file. We provide an [example script](https://github.com/figma/code-connect/blob/main/cli/scripts/README.md)
 as a starting point.
