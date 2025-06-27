---
title: getVariableCollectionByIdAsync
slug: figma-variables-getvariablecollectionbyidasync
source_file: plugin-api-figma-variables-getvariablecollectionbyidasync.html
source_url: https://www.figma.com/plugin-docs/api/figma-variables-getvariablecollectionbyidasync/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 8f84e3c3e2ea72d7
token_count: 88
---
# getVariableCollectionByIdAsync

Finds a variable collection by ID. If not found or the provided ID is invalid, returns a promise containing `null`.

## Signature

### getVariableCollectionByIdAsync(id: string): Promise

## Parameters

### id

The variable collection ID to search for, which represents a unique identifier for the variable collection.