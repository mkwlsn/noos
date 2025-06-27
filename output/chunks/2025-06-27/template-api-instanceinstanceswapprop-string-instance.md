---
title: >-
  `__instance__(instanceSwapProp: string): InstanceHandle | undefined` +
  `children(layerNames: string[]): ResultSection[]`
slug: template-api-instanceinstanceswapprop-string-instance
source_file: code-connect-template-api.html
source_url: 'https://www.figma.com/code-connect-docs/template-api/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 46cbd8a772ddc386
token_count: 1164
chunk_title: >-
  `__instance__(instanceSwapProp: string): InstanceHandle | undefined` +
  `children(layerNames: string[]): ResultSection[]`
chunk_slug: template-api-instanceinstanceswapprop-string-instance
chunk_index: 8
chunk_of_total: 9
parent_file: template-api.md
parent_slug: template-api
char_count: 4072
heading_level: h3
chunk_type: tutorial
merge_type: merged
tags: []
sibling_chunks:
  - template-api-introduction
  - template-api-figmacode
  - template-api-figmacurrentlayer-instancehandle
  - template-api-figmaproperties-properties
  - template-api-methods
  - template-api-booleanpropertyname-string-options-recor
  - template-api-enumpropertyname-string-options-record-n
  - template-api-stringpropertyname-string-string-instanc
merged_titles:
  - '`__instance__(instanceSwapProp: string): InstanceHandle | undefined`'
  - '`children(layerNames: string[]): ResultSection[]`'
compiler: noos-figma
---

This method returns the instance that is mapped to the instance-swap property of propertyName. Unlike the method above, this does not call render() .

This method gets any children with names in the layerNames, calls render() on them and returns this array.

## Example Usage

```
const figma = require('figma')const string = figma.currentLayer.__properties__.string('String Prop')const boolean = figma.currentLayer.__properties__.boolean('Boolean Prop')const instance = figma.currentLayer.__properties__.instance('Instance Prop')const children = figma.currentLayer.__properties__.children(["Logic Child","Child 1","Child 2"])export default figma.code``
```

## Using functions to encapsulate logic

To cover different types, you can include functions. Below is an example of what a complex parsed React Code Connect doc looks like.

```
function _fcc_renderProp(name, prop) { if (Array.isArray(prop)) { return figma.code` ${name}={<>${prop}}` } if (typeof prop === 'boolean') { return prop ? ` ${name}` : '' } // Replace any newlines or quotes in the string with escaped versions if (typeof prop === 'string') { const str = prop.replaceAll('\n', '\\n').replaceAll('"', '\\"') if (str === '') { return '' } return ` ${name}="${str}"` } if (typeof prop === 'number') { return ` ${name}={${prop}}` } if (prop === undefined) { return '' } return ''}function _fcc_renderChildren(prop) { if (Array.isArray(prop)) { return prop } if (typeof prop === 'string' || typeof prop === 'number' || typeof prop === 'boolean') { return prop } if (prop === undefined) { return '' }}const figma = require('figma')const string = figma.currentLayer.__properties__.string('String Prop')const boolean = figma.currentLayer.__properties__.boolean('Boolean Prop')const instance = figma.currentLayer.__properties__.instance('Instance Prop')const children = figma.currentLayer.__properties__.children(["Logic Child","Child 1","Child 2"])const enumProp = figma.currentLayer.__properties__.enum('Enum Prop', {"String": 'String',"Number": 3,"Boolean true": true,"Boolean false": false,"Undefined": undefined,"figma.string": figma.currentLayer.__properties__.string('String Prop'),"figma.boolean": figma.currentLayer.__properties__.boolean('Boolean Prop'),"figma.instance": figma.currentLayer.__properties__.instance('Instance Prop'),"figma.children": figma.currentLayer.__properties__.children(["Logic Child","Child 1","Child 2"])})export default figma.code` ${_fcc_renderChildren(string)} ${_fcc_renderChildren(boolean)} ${_fcc_renderChildren(instance)} ${_fcc_renderChildren(children)} ${_fcc_renderChildren(enumProp)} `"
```

## Object types

```
/** * Represents a section of code, which can be rendered verbatim */type CodeSection = { type: 'CODE' code: string}/** * Represents a child instance, which should be rendered as a pill or resolved * and evaluated by the UI */type InstanceSection = { type: 'INSTANCE' /** The guid of the instance layer */ guid: string /** The guid of the backing component */ symbolId: string}/** Represents an error that occurred during template execution */type ErrorSection = { type: 'ERROR' message: string errorObject?: ResultError}export type ResultSection = CodeSection | InstanceSection | ErrorSectionexport type SectionsResult = { result: 'SUCCESS' data: { type: 'SECTIONS' sections: ResultSection[] language: string metadata?: { __props: Record [key: string]: any } }}export type TemplateArgValueKind = | string | boolean | TemplateStringResult | ResultSection[] | undefinedexport type TemplateStringResult = SectionsResult['data']export type PropertyNotFoundErrorObject = { type: 'PROPERTY_NOT_FOUND' propertyName: string}export type ChildLayerNotFoundErrorObject = { type: 'CHILD_LAYER_NOT_FOUND' layerName: string}type PropertyTypeMismatchErrorObject = { type: 'PROPERTY_TYPE_MISMATCH' propertyName: string expectedType: string}type TemplateExecutionErrorObject = { type: 'TEMPLATE_EXECUTION_ERROR'}export type ResultError = | PropertyNotFoundErrorObject | PropertyTypeMismatchErrorObject | ChildLayerNotFoundErrorObject | TemplateExecutionErrorObject
```
