---
title: getVariableCollectionById
slug: figma-variables-getvariablecollectionbyid
source_file: plugin-api-figma-variables-getvariablecollectionbyid.html
source_url: https://www.figma.com/plugin-docs/api/figma-variables-getvariablecollectionbyid/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 33e54549343ec12e
token_count: 146
---
# getVariableCollectionById

DEPRECATED: Use [`getVariableCollectionByIdAsync`](/plugin-docs/api/properties/figma-variables-getvariablecollectionbyidasync/) instead. This function will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

Finds a variable collection by ID. If not found or the provided ID is invalid, returns `null`.

## Signature

### getVariableCollectionById(id: string): VariableCollection | null

## Parameters

### id

The variable collection ID to search for, which represents a unique identifier for the variable collection.