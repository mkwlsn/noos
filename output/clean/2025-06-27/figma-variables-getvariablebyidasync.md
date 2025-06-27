---
title: getVariableByIdAsync
slug: figma-variables-getvariablebyidasync
source_file: plugin-api-figma-variables-getvariablebyidasync.html
source_url: https://www.figma.com/plugin-docs/api/figma-variables-getvariablebyidasync/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 4aa835742277de80
token_count: 75
---
# getVariableByIdAsync

Finds a variable by ID. If not found or the provided ID is invalid, returns a promise containing `null`.

## Signature

### getVariableByIdAsync(id: string): Promise

## Parameters

### id

The variable ID to search for, which represents a unique identifier for the variable.