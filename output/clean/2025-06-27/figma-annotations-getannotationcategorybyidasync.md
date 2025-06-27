---
title: getAnnotationCategoryByIdAsync
slug: figma-annotations-getannotationcategorybyidasync
source_file: plugin-api-figma-annotations-getannotationcategorybyidasync.html
source_url: https://www.figma.com/plugin-docs/api/figma-annotations-getannotationcategorybyidasync/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: f25f8ff2d10e0d69
token_count: 76
---
# getAnnotationCategoryByIdAsync

Returns an [`AnnotationCategory`](/plugin-docs/api/AnnotationCategory/)
 by its ID. If not found, returns a promise containing null.

## Signature

### getAnnotationCategoryByIdAsync(id: string): Promise

## Parameters

### id

The annotation category ID to search for.