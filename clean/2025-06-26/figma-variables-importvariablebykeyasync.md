---
title: importVariableByKeyAsync
slug: figma-variables-importvariablebykeyasync
source_file: plugin-api-figma-variables-importvariablebykeyasync.html
source_url: https://www.figma.com/plugin-docs/api/figma-variables-importvariablebykeyasync/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 2967431f1fa09668
token_count: 72
---
# importVariableByKeyAsync

Loads a variable from the team library. Promise is rejected if there is
no published variable with that key or if the request fails.

## Signature

### importVariableByKeyAsync(key: string): Promise

## Parameters

### key

the key of the variable to import.