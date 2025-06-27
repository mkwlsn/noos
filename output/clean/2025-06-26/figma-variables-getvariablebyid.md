---
title: getVariableById
slug: figma-variables-getvariablebyid
source_file: plugin-api-figma-variables-getvariablebyid.html
source_url: https://www.figma.com/plugin-docs/api/figma-variables-getvariablebyid/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 75879b62949a2e62
token_count: 125
---
# getVariableById

DEPRECATED: Use [`getVariableByIdAsync`](/plugin-docs/api/properties/figma-variables-getvariablebyidasync/) instead. This function will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

Finds a variable by ID. If not found or the provided ID is invalid, returns `null`.

## Signature

### getVariableById(id: string): Variable | null

## Parameters

### id

The variable ID to search for, which represents a unique identifier for the variable.