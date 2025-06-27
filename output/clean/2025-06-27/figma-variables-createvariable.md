---
title: createVariable
slug: figma-variables-createvariable
source_file: plugin-api-figma-variables-createvariable.html
source_url: https://www.figma.com/plugin-docs/api/figma-variables-createvariable/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: ffa289cf113a2be7
token_count: 117
---
# createVariable

Creates a variable with a given name and resolved type inside a collection.

## Signature

### createVariable(name: string, collection: VariableCollection, resolvedType: VariableResolvedDataType): Variable

## Parameters

### name

the name of the newly created variable

### collection

A variable collection. Make sure to pass a collection object here; passing a collection ID is deprecated.

### resolvedType

the resolved type of this variable