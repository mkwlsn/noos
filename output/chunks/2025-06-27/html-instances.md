---
title: Instances
slug: html-instances
source_file: code-connect-html.html
source_url: 'https://www.figma.com/code-connect-docs/html/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 4f1d654e615a7832
token_count: 403
chunk_title: Instances
chunk_slug: html-instances
chunk_index: 4
chunk_of_total: 15
parent_file: html.md
parent_slug: html
char_count: 1409
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - html-introduction
  - html-strings
  - html-booleans
  - html-enums
  - html-instance-children
  - html-wildcard-match
  - html-nested-properties
  - html-text-content
  - html-classname
  - html-web-components-example
  - html-angular-example
  - html-vue-example
  - html-lit-example
  - html-icons-as-strings
compiler: noos-figma
---

"Instances" is Figma's term for nested component references. For example, in the case of a `Button` containing an `Icon` as a nested component, we would call the `Icon` an instance. In Figma, instances can be properties, such as inputs to the component (similar to render props in code). Similarly to how we can map booleans, enums, and strings from Figma to code, we can also map these to instance properties.

To ensure instance properties are as useful as possible with Code Connect, we recommend you implement Code Connect for all common components that you would expect to be used as values for a given property. Dev Mode automatically populates the referenced component's connected code snippet example with the instance code that matches the properties.

Consider the following example:

```
// maps an instance-swap property from Figmafigma.instance('PropName')
```The return value of `figma.instance` is an `html`-tagged template literal and can be used in your example as a child element.

```
figma.connect('https://...', { props: { icon: figma.instance('Icon'), }, example: ({ icon }) => html`${icon} Instance prop Example`})
```You should then have a separate `figma.connect` call that connects the Icon component with the nested Figma component. Make sure to connect the backing component of that instance, not the instance itself.

```
figma.connect('https://...', { example: () => html``})
```
