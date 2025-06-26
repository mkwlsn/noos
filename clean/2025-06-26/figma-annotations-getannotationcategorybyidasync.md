---
title: getAnnotationCategoryByIdAsync
slug: figma-annotations-getannotationcategorybyidasync
source_file: plugin-api-figma-annotations-getannotationcategorybyidasync.html
source_url: https://www.figma.com/plugin-docs/api/figma-annotations-getannotationcategorybyidasync/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 53fa36fada5b44f7
token_count: 76
---
# getAnnotationCategoryByIdAsync

Returns an [`AnnotationCategory`](/plugin-docs/api/AnnotationCategory/) by its ID. If not found, returns a promise containing null.

## Signature

### getAnnotationCategoryByIdAsync(id: string): Promise

## Parameters

### id

The annotation category ID to search for.