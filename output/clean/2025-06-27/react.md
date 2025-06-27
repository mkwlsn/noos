---
title: Connecting React components
slug: react
source_file: code-connect-react.html
source_url: https://www.figma.com/code-connect-docs/react/
doc_type: code-connect
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 8a878f2a9affa8ca
token_count: 4175
---
# Connecting React components

This guide helps you connect your React (or React Native) components with Figma components using Code Connect. Code Connect for React works as both a standalone implementation and as an integration with existing [Storybook](/code-connect-docs/storybook/)
 files to enable easily maintaining both systems in parallel.

##### important

Important: Code Connect files are not executed. While they're written using real components from your codebase, the Figma CLI essentially treats code snippets as strings. This means you can, for example, use hooks without needing to mock data.

However, this also means that logical operators such as ternaries or conditionals will be output verbatim in your example code rather than executed to show the result. You aren't able to dynamically construct `figma.connect` calls in a for-loop, as another example.

If something you're trying to do is not possible because of this restriction in the API, we'd love to [hear your feedback](https://github.com/figma/code-connect/issues)
.

## Dynamic code snippets

If you completed [Getting Started with Code Connect](/code-connect-docs/quickstart-guide/)
, you should have a connected code snippet visible in Dev Mode when inspecting instances of that component. However, the code snippet doesn't yet reflect the entirety of the design.

To ensure the connected code snippet accurately reflects the design, you need to make use of property mappings. This enables you to link specific props in the design to props in code. In most cases, design and code props don't match 1:1, so it's necessary for us to configure this to ensure the correct code is shown in Dev Mode.

Here is a simple example for a button with a `label`, `disabled`, and `type` property.

```
import figma from '@figma/code-connect/react'figma.connect(Button, 'https://...', { props: { label: figma.string('Text Content'), disabled: figma.boolean('Disabled'), type: figma.enum('Type', { Primary: 'primary', Secondary: 'secondary', }), }, example: ({ disabled, label, type }) => { return ( {label} ) },})
```

## The `figma` import

The `figma` import contains helpers for mapping all sorts of properties from design to code. They work for simple mappings where only the naming differs between Figma and code, as well as more complex mappings where the type differs. See the following reference for all the Code Connect helpers that exist and the ways you can use them to connect Figma and code.

### `figma.connect`

`figma.connect()` has two signatures for connecting components.

```
// connect a component in code to a Figma componentfigma.connect(Button, "https://...")// connect a Figma component to a native elementfigma.connect("https://...")
```The second option is useful if you want to just render a HTML tag instead of a React component.

The first argument is used to determine where your component lives in code, in order to generate an import statement for the component. This isn't needed if you just want to render something like a `button` tag. For example:

```
figma.connect("https://...", { example: () => click me})
```

### Strings

Strings are the simplest value to map from Figma to code. Call `figma.string` with the Figma prop name you want to reference as a parameter. This is useful for things like button labels, header titles, tooltips, etc.

```
figma.string('Title')
```

### Booleans

Booleans work similar to strings. However Code Connect also provides helpers for mapping booleans in Figma to more complex types in code. For example you may want to map a Figma boolean to the existence of a specific sublayer in code. In addition to mapping boolean props, `figma.boolean` can be used to map boolean Variants in Figma. A boolean Variant is a Variant with only two options that are either "Yes"/"No", "True"/"False" or "On"/Off". For `figma.boolean` these values are normalized to `true` and `false`.

```
// simple mapping of boolean from figma to codefigma.boolean('Has Icon')// map a boolean value to one of two options of any typefigma.boolean('Has Icon', { true: , false: ,})
```In some cases, you only want to render a certain prop if it matches some value in Figma. You can do this either by passing a partial mapping object, or setting the value to `undefined`.

```
// Don't render the prop if 'Has label' in figma is `false`figma.boolean('Has label', { true: figma.string('Label'), false: undefined,})
```

### Enums

Variants (or enums) in Figma are commonly used to control the look and feel of components that require more complex options than a simple boolean toggle. Variant properties are always strings in Figma, but they can be mapped to any type in code. The first parameter is the name of the Variant in Figma, and the second parameter is a value mapping. The keys in this object should match the different options of that Variant in Figma, and the value is whatever you want to output instead.

```
// maps the 'Options' variant in Figma to enum values in codefigma.enum('Options', { 'Option 1': Option.first, 'Option 2': Option.second,})// maps the 'Options' variant in Figma to sub-component values in codefigma.enum('Options', { 'Option 1': , 'Option 2': ,})// result is true for disabled variants otherwise undefinedfigma.enum('Variant', { Disabled: true })// enums mappings can be used to show a component based on a Figma variantfigma.connect(Modal, 'https://...', { props: { cancelButton: figma.enum('Type', { Cancellable: , }), // ... }, example: ({ cancelButton }) => { return ( Title Some content {cancelButton} ) },})
```Mapping objects for `figma.enum` as well as `figma.boolean` allow nested references, which is useful if you want to conditionally render a [nested instance](#instances)
, for example.

```
// maps the 'Options' variant in Figma to enum values in codefigma.enum('Type', { WithIcon: figma.instance('Icon'), WithoutIcon: undefined,})
```In contrast to `figma.boolean`, values are not normalized for `figma.enum`. You always need to pass the exact literal values to the mapping object.

```
// These two are equivalent for a variant with the options "Yes" and "No"disabled: figma.enum("Boolean Variant", { Yes: // ... No: // ...})disabled: figma.boolean("Boolean Variant", { true: // ... false: // ...})
```

### Instances

"Instances" is Figma's term for nested component references. For example, in the case of a `Button` containing an `Icon` as a nested component, we would call the `Icon` an instance. In Figma, instances can be properties, such as inputs to the component (similar to render props in code). Similarly to how we can map booleans, enums, and strings from Figma to code, we can also map these to instance properties.

To ensure instance properties are as useful as possible with Code Connect, we recommend you implement Code Connect for all common components that you would expect to be used as values for a given property. Dev Mode automatically populates the referenced component's connected code snippet example with the instance code that matches the properties.

Consider the following example:

```
// maps an instance-swap property from Figmafigma.instance('PropName')
```The return value of `figma.instance` is a JSX component and can be used in your example like a typical JSX component prop would be in your codebase.

```
figma.connect(Button, 'https://...', { props: { icon: figma.instance('Icon'), }, example: ({ icon }) => { return Instance prop Example },})
```You should then have a separate `figma.connect` call that connects the Icon component with the nested Figma component. Make sure to connect the backing component of that instance, not the instance itself.

```
figma.connect(Icon32Add, 'https://...')
```

### Instance children

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
```

#### Wildcard match

`figma.children()` can be used with a single wildcard '*' character, to partially match names or to render any nested child. Wildcards cannot be used with the array argument. Matches are case sensitive.

```
// map any (all) child instancesfigma.children('*')// map any child instances that starts with "Icon"figma.children('Icon*')
```

### Nested properties

When you don't want to connect a child component, but instead want to map its properties on the parent level, you can use `figma.nestedProps()`. This helper takes the name of the layer as the first parameter, and a mapping object as the second parameter. These props can then be referenced in the `example` function. `nestedProps` will always select a single instance, and cannot be used to map multiple children.

```
// map the properties of a nested instance named "Button Shape"figma.connect(Button, "https://...", { props: { buttonShape: figma.nestedProps('Button Shape', { size: figma.enum({ ... }), }) }, example: ({ buttonShape }) => }
```A common pattern is to use `nestedProps` to access a conditionally hidden layer. This can be achieved by using `nestedProps` in conjunction with `boolean`, and passing a fallback object in the `false` case.

```
figma.connect(Button, "https://...", { props: { childProps: figma.boolean("showChild", { true: figma.nestedProps('Child', { label: figma.string("Label") }, false: { label: undefined } }) }, example: ({ childProps }) => }
```

### Text Content

A common pattern for design systems in Figma is to not use props for texts, but rather rely on instances overriding the text content. `figma.textContent()` allows you to select a child text layer and render its content. It takes a single parameter which is the name of the layer in the original component.

```
figma.connect(Button, "https://...", { props: { label: figma.textContent("Text Layer") }, example: ({ label }) => {label}}
```

### className

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

### Icons as JSX elements

If your icons are passed as JSX elements in code, you can use Code Connect in the same way you create components.

```
// iconfigma.connect("my-icon-url", { example: () => })// parentfigma.connect("my-button-url, { props: { icon: figma.instance("InstanceSwapPropName") }, example: ({ icon }) => {icon}})// renders in Dev Mode
```

### Icons as React Components

If your icons are passed as React components, you can return a React component instead of a JSX element in your icon's Code Connect file.

```
// iconfigma.connect("my-icon-url", { example: () => IconHeart})// parentfigma.connect("my-button-url, { props: { Icon: figma.instance("InstanceSwapPropName") }, example: ({ Icon }) => })// renders in Dev Mode
```

### Icons as strings

It's common to use IDs instead of passing around components for icons. In this case, you'll want your icon Code Connect files to just return that string. `figma.instance` takes a `type` parameter that's used to match what the nested template returns.

```
// iconfigma.connect("my-icon-url", { example: () => "icon-heart"})// parentfigma.connect("my-button-url, { props: { iconId: figma.instance("InstanceSwapPropName") }, example: ({ iconId }) => })// renders in Dev Mode
```

### Accessing icon props in parent component

If you have different ways of rendering icons depending on parent, or, if you want to use icon strings but still be able to map properties of the icon components, you'll want to use `getProps` or `render` which are exposed on the return value of `figma.instance()`. The `example` function of the icon itself determines how that icon renders when clicked in Figma, but can be "overriden" via these additional helpers.

`getProps` gives access to the props of the child (e.g. the icon) from the parent, so you can use those props in your parent component. Note the static prop `iconId: "my-icon"` - any custom/static props like this one will be included in the object returned from `getProps`.

```
// iconfigma.connect("my-icon-url", { props: { iconId: "my-icon", size: figma.enum("Size", { 'large': 'large', 'small': 'small' }) } example: ({ size }) => })// parentfigma.connect("icon-button-url", { props: { iconProps: figma.instance("InstanceSwapPropName").getProps<{iconId: string, size: "small" | "large"}>() }, example: ({ iconProps }) => })// renders in Dev Mode
````render` allows you to conditionally render nested connected components. The argument is passed the resolved props of the nested component.
This is useful if you need to dynamically render different JSX elements based on a boolean prop, for example.

```
// iconfigma.connect("my-icon-url", { props: { iconId: "my-icon", size: figma.enum("Size", { 'large': 'large', 'small': 'small' }) } example: ({ size }) => })// parentfigma.connect("icon-button-url", { props: { icon: figma.boolean("Show icon", { true: figma.instance("InstanceSwapPropName").render<{iconId: string, size: "small" | "large"}>(props => ), } }, example: ({ icon }) => })// renders in Dev Mode} />
```