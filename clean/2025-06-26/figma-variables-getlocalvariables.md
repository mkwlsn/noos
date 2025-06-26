---
title: getLocalVariables
slug: figma-variables-getlocalvariables
source_file: plugin-api-figma-variables-getlocalvariables.html
source_url: https://www.figma.com/plugin-docs/api/figma-variables-getlocalvariables/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 4a260c7e79508ba7
token_count: 129
---
# getLocalVariables

DEPRECATED: Use [`getLocalVariablesAsync`](/plugin-docs/api/properties/figma-variables-getlocalvariablesasync/) instead. This function will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

Returns all local variables in the current file, optionally filtering by resolved type.

## Signature

### getLocalVariables(type?: VariableResolvedDataType): Variable[]

## Parameters

### type

Filters the returned variables to only be of the given resolved type.