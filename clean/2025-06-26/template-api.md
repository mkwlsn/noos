---
title: Template API
slug: template-api
source_file: code-connect-template-api.html
source_url: https://www.figma.com/code-connect-docs/template-api/
doc_type: code-connect
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 634e7707e7776faf
token_count: 1883
---
# Template API

This reference describes the Code Connect Template API.

## `figma`

This the core object for retrieving data and can be accessed in your file with

```
const figma = require('figma')
```### `figma.code`

This function wraps the code to be rendered in the Code Connect Panel. Note the different format if you would like to pass prop data.

```
export default figma.code`${code}`// format used for passing metadata e.g. making instance prop data availableexport default { ...figma.code`${code}`, metadata: { __props } }\n`
```### `figma.currentLayer: InstanceHandle`

The `currentLayer` object represents the currently selected layer in the Figma document. This [InstanceHandle](#instancehandle-object) provides access to various properties and methods that allow you to interact with the selected layer.

### `figma.properties`

The `properties` object is a shorthand for `figma.currentLayer.__properties__`

## `InstanceHandle` Object

### Properties

#### `children`:

- List of direct children (instances or text).

#### `__properties__`

- returns a object of methods that give access to various properties on the figma node. See next section for available methods.

### Methods

#### `__find__(name): InstanceHandle | ErrorHandle | null`

- Finds a child or nested child instance by name.

#### `__findChildWithCriteria__({ type, name }: { type: 'INSTANCE' | 'TEXT'; name: string }): InstanceHandle | TextHandle | ErrorHandle | null`

- Finds a child matching the specified type and name

#### `__getPropertyValue__(name: string): string | boolean | ErrorHandle`

- Gets a property value by name.

#### `__render__(): ResultSection[]`

- Returns the render information for the node.
- If an instance doesn't have an associated template then the below format is returned

```
{ type: 'INSTANCE' as const, guid, symbolId,}
```#### `__getProps__(): Record | ErrorHandle | undefined`

- Returns the properties specified in the metadata field

#### `__renderWithFn__(renderFn: (props: Record) => TemplateStringResult): ResultSection[] | ErrorHandle | undefined`

- Renders with a provided function.

## properties or `__properties__`

The `properties` object provides several methods to interact with the properties of the current node.

### `boolean(propertyName: string, options?: Record ): boolean`

This method returns the boolean value of the specified property of the layer. You can specify options to provide a mapping from a value (true/false) to anything of TemplateArgValueKind.

An example is

```
const booleanProperty = figma.currentLayer.__properties__.boolean("propertyName", {"true": 'icon',"false": undefined });
```### `enum(propertyName: string, options: Record ): number`

This method returns the enum value of the specified property of the layer. The keys in this options object should match the different options of that Variant in Figma, and the value is whatever you want to output instead which is of type TemplateArgValueKind.

### `string(propertyName: string): string`

This method returns the string value of the specified property of the layer.

### `instance(propertyName: string): string | ResultSection[]`

This method returns the rendered instance that is mapped to the instance-swap property of propertyName. This method returns the rendered instance (i.e. render() is called on it)

### `__instance__(instanceSwapProp: string): InstanceHandle | undefined`

This method returns the instance that is mapped to the instance-swap property of propertyName. Unlike the method above, this does not call render() .

### `children(layerNames: string[]): ResultSection[]`

This method gets any children with names in the layerNames, calls render() on them and returns this array.

## Example Usage

```
const figma = require('figma')const string = figma.currentLayer.__properties__.string('String Prop')const boolean = figma.currentLayer.__properties__.boolean('Boolean Prop')const instance = figma.currentLayer.__properties__.instance('Instance Prop')const children = figma.currentLayer.__properties__.children(["Logic Child","Child 1","Child 2"])export default figma.code``
```## Using functions to encapsulate logic

To cover different types, you can include functions. Below is an example of what a complex parsed React Code Connect doc looks like.

```
function _fcc_renderProp(name, prop) { if (Array.isArray(prop)) { return figma.code` ${name}={<>${prop}}` } if (typeof prop === 'boolean') { return prop ? ` ${name}` : '' } // Replace any newlines or quotes in the string with escaped versions if (typeof prop === 'string') { const str = prop.replaceAll('\n', '\\n').replaceAll('"', '\\"') if (str === '') { return '' } return ` ${name}="${str}"` } if (typeof prop === 'number') { return ` ${name}={${prop}}` } if (prop === undefined) { return '' } return ''}function _fcc_renderChildren(prop) { if (Array.isArray(prop)) { return prop } if (typeof prop === 'string' || typeof prop === 'number' || typeof prop === 'boolean') { return prop } if (prop === undefined) { return '' }}const figma = require('figma')const string = figma.currentLayer.__properties__.string('String Prop')const boolean = figma.currentLayer.__properties__.boolean('Boolean Prop')const instance = figma.currentLayer.__properties__.instance('Instance Prop')const children = figma.currentLayer.__properties__.children(["Logic Child","Child 1","Child 2"])const enumProp = figma.currentLayer.__properties__.enum('Enum Prop', {"String": 'String',"Number": 3,"Boolean true": true,"Boolean false": false,"Undefined": undefined,"figma.string": figma.currentLayer.__properties__.string('String Prop'),"figma.boolean": figma.currentLayer.__properties__.boolean('Boolean Prop'),"figma.instance": figma.currentLayer.__properties__.instance('Instance Prop'),"figma.children": figma.currentLayer.__properties__.children(["Logic Child","Child 1","Child 2"])})export default figma.code` ${_fcc_renderChildren(string)} ${_fcc_renderChildren(boolean)} ${_fcc_renderChildren(instance)} ${_fcc_renderChildren(children)} ${_fcc_renderChildren(enumProp)} `"
```## Object types

```
/** * Represents a section of code, which can be rendered verbatim */type CodeSection = { type: 'CODE' code: string}/** * Represents a child instance, which should be rendered as a pill or resolved * and evaluated by the UI */type InstanceSection = { type: 'INSTANCE' /** The guid of the instance layer */ guid: string /** The guid of the backing component */ symbolId: string}/** Represents an error that occurred during template execution */type ErrorSection = { type: 'ERROR' message: string errorObject?: ResultError}export type ResultSection = CodeSection | InstanceSection | ErrorSectionexport type SectionsResult = { result: 'SUCCESS' data: { type: 'SECTIONS' sections: ResultSection[] language: string metadata?: { __props: Record [key: string]: any } }}export type TemplateArgValueKind = | string | boolean | TemplateStringResult | ResultSection[] | undefinedexport type TemplateStringResult = SectionsResult['data']export type PropertyNotFoundErrorObject = { type: 'PROPERTY_NOT_FOUND' propertyName: string}export type ChildLayerNotFoundErrorObject = { type: 'CHILD_LAYER_NOT_FOUND' layerName: string}type PropertyTypeMismatchErrorObject = { type: 'PROPERTY_TYPE_MISMATCH' propertyName: string expectedType: string}type TemplateExecutionErrorObject = { type: 'TEMPLATE_EXECUTION_ERROR'}export type ResultError = | PropertyNotFoundErrorObject | PropertyTypeMismatchErrorObject | ChildLayerNotFoundErrorObject | TemplateExecutionErrorObject
```