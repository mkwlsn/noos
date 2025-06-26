---
title: Template V2 API Reference
slug: template-v2-api
source_file: code-connect-template-v2-api.html
source_url: https://www.figma.com/code-connect-docs/template-v2-api/
doc_type: code-connect
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 01653f57c533fb5b
token_count: 2109
---
# Template V2 API Reference

The Template V2 API allows you to create custom Code Connect templates that control how your components are displayed in Figma's Code Connect panel. This API is primarily used in two ways:

1. Custom Parsers: When building a parser for a language or framework not supported by default. See the Custom Parsers documentation to get started with implementing your own parser.
2. Without a Parser: When you need direct control over how specific components are rendered, without writing a full parser. Check out the Documentation for a simpler way to customize component rendering.

This reference documents the complete API surface, from basic template structure to advanced features like property access and layer finding. If you're just getting started, we recommend first reading the Custom Parsers or Raw Templates guides above.

## `figma`

This is the core object that provides access to your Figma file's data. You can import it in your template file using:

```
const figma = require('figma')
```### Export Format

Templates should export an object with the following format:

```
export default { example: figma.code``, // The rendered code sections id?: string, // Your custom identifier (also known as a Code Connect ID) to connect this template with a Figma instance metadata?: { /** * Controls how nested components appear in the Code Connect panel: * - true: Component code is shown directly in its parent * Example: Small icons or labels within a button * - false: Component appears as a pill that expands on click * Example: Complex components like modals or forms */ nestable?: boolean, /** * Data that will be available to components that use this instance. * See the executeTemplate() method below for details on accessing these props. */ props?: Record, }}
```The `id` field lets you define a custom identifier, also known as a Code Connect ID, for this template. You can use any string value you choose - this ID is how other templates will find and reference this instance using methods like `findConnectedInstance(id)`. This is particularly useful when you need to:

The `metadata` field contains optional display settings:

- `nestable`: When `true`, shows nested component code inline with its parent; when `false`, shows nested components as expandable pills
- `props`: Makes data available to parent templates through `executeTemplate().metadata.props`

### `figma.selectedInstance: InstanceHandle`

The `selectedInstance` object represents the currently selected layer in the Figma document. This provides access to various properties and methods that allow you to interact with the selected layer.

## `InstanceHandle` Object

### Properties

#### `properties: Record`

- Object containing all properties of the instance.

### Methods

#### `getBoolean(propName: string, options?: Record): boolean | any`

- Gets a boolean property value.
- Optional mapping object can transform the boolean value to any other type.

#### `getString(propName: string): string`

- Gets a string property value.

#### `getEnum(propName: string, options: Record): any`

- Gets an enum property value with optional value mapping.
- The options object maps enum values to desired output values.

#### `getInstanceSwap(propName: string): InstanceHandle`

- Gets an instance property value.
- Returns the instance handle for the swapped instance.

#### `getPropertyValue(propName: string): string | boolean`

- Gets a raw property value.

#### `executeTemplate(): { example: ResultSection[], metadata: Metadata }`

- Renders the instance and returns both the rendered sections and metadata.

#### `hasCodeConnect(): boolean`

- Returns whether the instance has Code Connect.

#### `codeConnectId(): string | null`

- Returns the Code Connect ID of the instance, if it exists.

#### `findText(layerName: string, opts?: SelectorOptions): TextHandle | ErrorHandle`

- Finds a text layer by name.
- Optional selector options for path matching and traversal behavior.

#### `findInstance(layerName: string, opts?: SelectorOptions): InstanceHandle | ErrorHandle`

- Finds an child instance layer by name.
- Optional selector options for path matching and traversal behavior.

#### `findConnectedInstance(codeConnectId: string, opts?: SelectorOptions): InstanceHandle | ErrorHandle`

- Finds a child instance by its Code Connect ID.
- Optional selector options for path matching and traversal behavior.

#### `findConnectedInstances(selectorFn: (node: InstanceHandle) => boolean, opts?: SelectorOptions): InstanceHandle[]`

- Finds all child instances that match the selector function.
- Optional selector options for path matching and traversal behavior.

#### `findLayers(selectorFn: (node: InstanceHandle | TextHandle) => boolean, opts?: SelectorOptions): (InstanceHandle | TextHandle)[]`

- Finds all layers (instances or text) that match the selector function.
- Optional selector options for path matching and traversal behavior.

## `TextHandle` Object

### Properties

#### `textContent: string`

- The text content of the text layer.

## Object Types

The following types are provided by the `figma` package and are used throughout the API. You don't need to define these yourself - they're available when you `require('figma')`.

### Code Sections

These types define how code is represented in the Code Connect panel:

```
/** * Represents a section of code that will be rendered verbatim in the Code Connect panel */type CodeSection = { type: 'CODE' code: string}/** * Represents a child instance that will be rendered either inline or as a pill * depending on the nestable property */type InstanceSection = { type: 'INSTANCE' /** The guid of the instance layer */ guid: string /** The guid of the backing component */ symbolId: string}/** Represents an error that will be displayed in the Code Connect panel */type ErrorSection = { type: 'ERROR' message: string errorObject?: ResultError}/** The possible sections that can appear in the Code Connect panel */type ResultSection = CodeSection | InstanceSection | ErrorSection
```### Template Results

These types define the structure of template execution results:

```
/** The result of executing a template, returned by executeTemplate() */type SectionsResult = { result: 'SUCCESS' data: { type: 'SECTIONS' sections: ResultSection[] language: string metadata?: { __props: Record [key: string]: any } }}/** The possible values that can be used in template strings */type TemplateArgValueKind = | string | boolean | TemplateStringResult | ResultSection[] | undefinedtype TemplateStringResult = SectionsResult['data']
```### Metadata Interface

This interface defines how components are displayed in the Code Connect panel:

```
/** Metadata that can be included in template exports */interface Metadata { /** * Controls how nested instances are rendered in the Code Connect panel: * - true: The instance's code will be rendered inline within its parent * - false: The instance will be shown as a clickable pill that expands when clicked * * For example: * - Set to true for small components like icons that make sense inline * - Set to false for complex components that should be viewed separately */ nestable?: boolean /** Props which can be consumed in a parent instance */ props?: Record}
```### Selector Options Interface

This interface provides additional control over layer finding methods:

```
/** Options for finding layers */interface SelectorOptions { /** List of parent layer names that matches the layer hierarchy */ path?: string[] /** Whether to search through nested instances */ traverseInstances?: boolean}
```### Error Types

These types represent various errors that can occur during template execution:

```
/** Error when a property is not found */type PropertyNotFoundErrorObject = { type: 'PROPERTY_NOT_FOUND' propertyName: string}/** Error when a child layer is not found */type ChildLayerNotFoundErrorObject = { type: 'CHILD_LAYER_NOT_FOUND' layerName: string}/** Error when a property type doesn't match expected type */type PropertyTypeMismatchErrorObject = { type: 'PROPERTY_TYPE_MISMATCH' propertyName: string expectedType: string}/** Error during template execution */type TemplateExecutionErrorObject = { type: 'TEMPLATE_EXECUTION_ERROR'}/** All possible error types */type ResultError = | PropertyNotFoundErrorObject | PropertyTypeMismatchErrorObject | ChildLayerNotFoundErrorObject | TemplateExecutionErrorObject
```