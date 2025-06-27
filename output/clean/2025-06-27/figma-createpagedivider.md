---
title: createPageDivider
slug: figma-createpagedivider
source_file: plugin-api-figma-createpagedivider.html
source_url: https://www.figma.com/plugin-docs/api/figma-createpagedivider/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: ca8cec5fc4b47518
token_count: 189
---
# createPageDivider

Creates a new page divider, appended to the document's list of children. A page divider is a [`PageNode`](/plugin-docs/api/PageNode/)
 with `isPageDivider` true.

## Signature

### createPageDivider(dividerName?: string): PageNode

## Parameters

### dividerName

An optional argument to specify the name of the page divider node. It won't change how the page divider appears in the UI, but it specifies the name of the underlying node. The dividerName must be a page divider name (all asterisks, all en dashes, all em dashes, or all spaces). If no dividerName is specified, the default name for the created page divider node is "---".

## Remarks

A page divider is always the child of the document node and cannot have any children.