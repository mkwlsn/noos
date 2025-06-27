---
title: '`textContent: string`'
slug: template-v2-api-textcontent-string
source_file: code-connect-template-v2-api.html
source_url: 'https://www.figma.com/code-connect-docs/template-v2-api/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 820863d0c89a1003
token_count: 976
chunk_title: '`textContent: string`'
chunk_slug: template-v2-api-textcontent-string
chunk_index: 3
chunk_of_total: 4
parent_file: template-v2-api.md
parent_slug: template-v2-api
char_count: 3415
heading_level: h4
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - template-v2-api-introduction
  - template-v2-api-findinstancelayername-string-opts-select
  - template-v2-api-findconnectedinstancesselectorfn-node-in
compiler: noos-figma
---

- The text content of the text layer.

## Object Types

The following types are provided by the `figma` package and are used throughout the API. You don't need to define these yourself - they're available when you `require('figma')`.

### Code Sections

These types define how code is represented in the Code Connect panel:

```
/** * Represents a section of code that will be rendered verbatim in the Code Connect panel */type CodeSection = { type: 'CODE' code: string}/** * Represents a child instance that will be rendered either inline or as a pill * depending on the nestable property */type InstanceSection = { type: 'INSTANCE' /** The guid of the instance layer */ guid: string /** The guid of the backing component */ symbolId: string}/** Represents an error that will be displayed in the Code Connect panel */type ErrorSection = { type: 'ERROR' message: string errorObject?: ResultError}/** The possible sections that can appear in the Code Connect panel */type ResultSection = CodeSection | InstanceSection | ErrorSection
```

### Template Results

These types define the structure of template execution results:

```
/** The result of executing a template, returned by executeTemplate() */type SectionsResult = { result: 'SUCCESS' data: { type: 'SECTIONS' sections: ResultSection[] language: string metadata?: { __props: Record [key: string]: any } }}/** The possible values that can be used in template strings */type TemplateArgValueKind = | string | boolean | TemplateStringResult | ResultSection[] | undefinedtype TemplateStringResult = SectionsResult['data']
```

### Metadata Interface

This interface defines how components are displayed in the Code Connect panel:

```
/** Metadata that can be included in template exports */interface Metadata { /** * Controls how nested instances are rendered in the Code Connect panel: * - true: The instance's code will be rendered inline within its parent * - false: The instance will be shown as a clickable pill that expands when clicked * * For example: * - Set to true for small components like icons that make sense inline * - Set to false for complex components that should be viewed separately */ nestable?: boolean /** Props which can be consumed in a parent instance */ props?: Record}
```

### Selector Options Interface

This interface provides additional control over layer finding methods:

```
/** Options for finding layers */interface SelectorOptions { /** List of parent layer names that matches the layer hierarchy */ path?: string[] /** Whether to search through nested instances */ traverseInstances?: boolean}
```

### Error Types

These types represent various errors that can occur during template execution:

```
/** Error when a property is not found */type PropertyNotFoundErrorObject = { type: 'PROPERTY_NOT_FOUND' propertyName: string}/** Error when a child layer is not found */type ChildLayerNotFoundErrorObject = { type: 'CHILD_LAYER_NOT_FOUND' layerName: string}/** Error when a property type doesn't match expected type */type PropertyTypeMismatchErrorObject = { type: 'PROPERTY_TYPE_MISMATCH' propertyName: string expectedType: string}/** Error during template execution */type TemplateExecutionErrorObject = { type: 'TEMPLATE_EXECUTION_ERROR'}/** All possible error types */type ResultError = | PropertyNotFoundErrorObject | PropertyTypeMismatchErrorObject | ChildLayerNotFoundErrorObject | TemplateExecutionErrorObject
```
