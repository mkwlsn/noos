---
title: figma.variables
slug: figma-variables
source_file: plugin-api-figma-variables.html
source_url: https://www.figma.com/plugin-docs/api/figma-variables/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 4336783b910edb1a
token_count: 1226
---
# figma.variables

These are all defined on `figma.variables`. Please see the [Working with Variables](/plugin-docs/working-with-variables/) guide for how to use these functions to interact with variables in Figma.

### getVariableByIdAsync(id: string): Promise

Finds a variable by ID. If not found or the provided ID is invalid, returns a promise containing `null`.

[View more →](/plugin-docs/api/properties/figma-variables-getvariablebyidasync/)### getVariableById(id: string): Variable | null

DEPRECATED: Use [`getVariableByIdAsync`](/plugin-docs/api/properties/figma-variables-getvariablebyidasync/) instead. This function will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

Finds a variable by ID. If not found or the provided ID is invalid, returns `null`.

[View more →](/plugin-docs/api/properties/figma-variables-getvariablebyid/)### getVariableCollectionByIdAsync(id: string): Promise

Finds a variable collection by ID. If not found or the provided ID is invalid, returns a promise containing `null`.

[View more →](/plugin-docs/api/properties/figma-variables-getvariablecollectionbyidasync/)### getVariableCollectionById(id: string): VariableCollection | null

DEPRECATED: Use [`getVariableCollectionByIdAsync`](/plugin-docs/api/properties/figma-variables-getvariablecollectionbyidasync/) instead. This function will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

Finds a variable collection by ID. If not found or the provided ID is invalid, returns `null`.

[View more →](/plugin-docs/api/properties/figma-variables-getvariablecollectionbyid/)### getLocalVariablesAsync(type?: VariableResolvedDataType): Promise

Returns all local variables in the current file, optionally filtering by resolved type.

[View more →](/plugin-docs/api/properties/figma-variables-getlocalvariablesasync/)### getLocalVariables(type?: VariableResolvedDataType): Variable[]

DEPRECATED: Use [`getLocalVariablesAsync`](/plugin-docs/api/properties/figma-variables-getlocalvariablesasync/) instead. This function will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

Returns all local variables in the current file, optionally filtering by resolved type.

[View more →](/plugin-docs/api/properties/figma-variables-getlocalvariables/)### getLocalVariableCollectionsAsync(): Promise

Returns all local variable collections in the current file.

### getLocalVariableCollections(): VariableCollection[]

DEPRECATED: Use [`getLocalVariableCollectionsAsync`](/plugin-docs/api/figma-variables/#getlocalvariablecollectionsasync) instead. This function will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

Returns all local variable collections in the current file.

### createVariable(name: string, collection: VariableCollection, resolvedType: VariableResolvedDataType): Variable

Creates a variable with a given name and resolved type inside a collection.

[View more →](/plugin-docs/api/properties/figma-variables-createvariable/)### createVariableCollection(name: string): VariableCollection

Creates a new variable collection with the given name.

[View more →](/plugin-docs/api/properties/figma-variables-createvariablecollection/)### createVariableAlias(variable: Variable): VariableAlias

Helper function to create a variable alias.

This should be used with functions such as `node.setProperties()` to
assign component properties to variables.

### createVariableAliasByIdAsync(variableId: string): Promise

Helper function to create a variable alias.

This should be used with functions such as `node.setProperties()` to
assign component properties to variables.

### setBoundVariableForPaint(paint: SolidPaint, field: VariableBindablePaintField, variable: Variable | null): SolidPaint

Helper function to bind a variable to a [`SolidPaint`](/plugin-docs/api/Paint/).

If `null` is provided as the `variable`, the given `field` will be unbound from any variables.

### setBoundVariableForEffect(effect: Effect, field: VariableBindableEffectField, variable: Variable | null): Effect

Helper function to bind a variable to an [`Effect`](/plugin-docs/api/Effect/).

If `null` is provided as the `variable`, the given `field` will be unbound from any variables.

### setBoundVariableForLayoutGrid(layoutGrid: LayoutGrid, field: VariableBindableLayoutGridField, variable: Variable | null): LayoutGrid

Helper function to bind a variable to a [`LayoutGrid`](/plugin-docs/api/LayoutGrid/).

If `null` is provided as the `variable`, the given `field` will be unbound from any variables.

### importVariableByKeyAsync(key: string): Promise

Loads a variable from the team library. Promise is rejected if there is
no published variable with that key or if the request fails.

[View more →](/plugin-docs/api/properties/figma-variables-importvariablebykeyasync/)