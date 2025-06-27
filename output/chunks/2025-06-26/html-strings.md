---
title: Strings
slug: html-strings
source_file: code-connect-html.html
source_url: 'https://www.figma.com/code-connect-docs/html/'
doc_type: code-connect
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 80db76774fb2ecc5
token_count: 2834
chunk_title: Strings
chunk_slug: html-strings
chunk_index: 1
chunk_of_total: 4
parent_file: html.md
parent_slug: html
char_count: 9916
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - html-introduction
  - html-web-components-example
  - html-icons-as-strings
compiler: noos-figma
---

Strings are the simplest value to map from Figma to code. Simply call `figma.string` with the Figma prop name you want to reference as a parameter. This is useful for things like button labels, header titles, tooltips.

```
figma.string('Title')
```### Booleans

Booleans work similar to strings. However, Code Connect also provides helpers for mapping booleans in Figma to more complex types in code. For example you may want to map a Figma boolean to the existence of a specific sublayer in code. In addition to mapping boolean props, `figma.boolean` can be used to map boolean Variants in Figma. A boolean Variant is a Variant with only two options that are either "Yes"/"No", "True"/"False" or "On"/Off". For `figma.boolean` these values are normalized to `true` and `false`.

```
// simple mapping of boolean from figma to codefigma.boolean('Has Icon')// map a boolean value to one of two options of any typefigma.boolean('Has Icon', { true: html``, false: html``,})
```In some cases, you only want to render a certain prop if it matches some value in Figma. You can do this either by passing a partial mapping object, or setting the value to `undefined`.

```
// Don't render the prop if 'Has label' in figma is `false`figma.boolean('Has label', { true: figma.string('Label'), false: undefined,})
```### Enums

Variants (or enums) in Figma are commonly used to control the look and feel of components that require more complex options than a simple boolean toggle. Variant properties are always strings in Figma, but they can be mapped to any type in code. The first parameter is the name of the Variant in Figma, and the second parameter is a value mapping. The keys in this object should match the different options of that Variant in Figma, and the value is whatever you want to output instead.

```
// maps the 'Options' variant in Figma to enum values in codefigma.enum('Options', { 'Option 1': Option.first, 'Option 2': Option.second,})// maps the 'Options' variant in Figma to sub-component values in codefigma.enum('Options', { 'Option 1': html``, 'Option 2': html``,})// result is true for disabled variants otherwise undefinedfigma.enum('Variant', { Disabled: true })// enums mappings can be used to show a component based on a Figma variantfigma.connect('https://...', { props: { cancelButton: figma.enum('Type', { Cancellable: html`` }), // ... }, example: ({ cancelButton }) => html`\ Title Some content ${cancelButton}` },})
```Mapping objects for `figma.enum` as well as `figma.boolean` allow nested references, which is useful if you want to conditionally render a [nested instance](#instances), for example.

```
// maps the 'Options' variant in Figma to enum values in codefigma.enum('Type', { WithIcon: figma.instance('Icon'), WithoutIcon: undefined,})
```In contrast to `figma.boolean`, values are not normalized for `figma.enum`. You always need to pass the exact literal values to the mapping object.

```
// These two are equivalent for a variant with the options "Yes" and "No"disabled: figma.enum("Boolean Variant", { Yes: // ... No: // ...})disabled: figma.boolean("Boolean Variant", { true: // ... false: // ...})
```### Instances

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
```### Instance children

It's common for components in Figma to have child instances that aren't bound to an instance-swap prop. Similarly to `figma.instance`, we can render the code snippets for these nested instances with `figma.children`. This helper takes the name of the instance layer within the parent component as its parameter, rather than a Figma prop name.

To illustrate this, consider the layer hierarchy in a component vs. an instance of that component:

```
Button (Component) Icon (Instance)
```In the previous example, "Icon" is the original name of the layer and the value you should pass to `figma.children()`.

```
Button (Instance) RenamedIcon (Instance)
```In the previous example, the instance layer was renamed. Renaming the layer won't break the mapping since, in this case, we're not using the layer's name.

##### note

Note: The nested instance also must be connected separately.

Layer names may differ between variants in a component set. To ensure the component (Button) can render a nested instance (Icon) for any of those variants, you must either use the wildcard option `figma.children("*")` or ensure that the layer name representing the instance (Icon) is the same across all variants of your component set (Button).

```
// map one child instance with the layer name "Tab"figma.children('Tab')// map multiple child instances by their layer names to a single propfigma.children(['Tab 1', 'Tab 2'])
```### Wildcard match

`figma.children()` can be used with a single wildcard '*' character, to partially match names or to render any nested child. Wildcards cannot be used with the array argument. Matches are case sensitive.

```
// map any (all) child instancesfigma.children('*')// map any child instances that starts with "Icon"figma.children('Icon*')
```### Nested properties

When you don't want to connect a child component, but instead want to map its properties on the parent level, you can use `figma.nestedProps()`. This helper takes the name of the layer as the first parameter, and a mapping object as the second parameter. These props can then be referenced in the `example` function. `nestedProps` will always select a single instance, and cannot be used to map multiple children.

```
// map the properties of a nested instance named "Button Shape"figma.connect("https://...", { props: { buttonShape: figma.nestedProps('Button Shape', { size: figma.enum({ ... }), }) }, example: ({ buttonShape }) => html``}
```### Text Content

A common pattern for design systems in Figma is to not use props for texts, but rather rely on instances overriding the text content. `figma.textContent()` allows you to select a child text layer and render its content. It takes a single parameter which is the name of the layer in the original component.

```
figma.connect("https://...", { props: { label: figma.textContent("Text Layer") }, example: ({ label }) => html`${label}`}
```### className

For mapping figma properties to a className string, you can use the `figma.className` helper. It takes an array of strings and returns the concatenated string. Any other helper that returns a string (or undefined) can be used in conjunction with this. Undefined values or empty strings are filtered out of the result.

```
figma.connect("https://...", { props: { className: figma.className([ 'btn-base', figma.enum("Size", { Large: 'btn-large' }), figma.boolean("Disabled", { true: 'btn-disabled', false: '' }), ]) }, example: ({ className }) => html``}
```In Dev Mode, this snippet appears as:

```

```## Variant restrictions

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
```## Examples

Code Connect HTML supports any valid HTML markup, and so in addition to documenting plain HTML and Web Components, can also be used for documenting HTML-based frameworks such as Angular and Vue. Any JavaScript/TypeScript code accompanying the HTML code must be enclosed in a `` tag.

Angular and Vue projects will be auto-detected based on their presence in `package.json`, and the default label for your examples will be set appropriately (see [label](#label) docs for more information).
