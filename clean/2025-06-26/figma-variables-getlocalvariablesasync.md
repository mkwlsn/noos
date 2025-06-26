---
title: getLocalVariablesAsync
slug: figma-variables-getlocalvariablesasync
source_file: plugin-api-figma-variables-getlocalvariablesasync.html
source_url: https://www.figma.com/plugin-docs/api/figma-variables-getlocalvariablesasync/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: d604c6887fa186bc
token_count: 74
---
# getLocalVariablesAsync

Returns all local variables in the current file, optionally filtering by resolved type.

## Signature

### getLocalVariablesAsync(type?: VariableResolvedDataType): Promise

## Parameters

### type

Filters the returned variables to only be of the given resolved type.