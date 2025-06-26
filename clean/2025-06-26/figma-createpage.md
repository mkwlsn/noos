---
title: createPage
slug: figma-createpage
source_file: plugin-api-figma-createpage.html
source_url: https://www.figma.com/plugin-docs/api/figma-createpage/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 4dea950dc6da5828
token_count: 142
---
# createPage

##### info

This API is only available in Figma Design

Creates a new page, appended to the document's list of children.

## Signature

### createPage(): PageNode

## Remarks

A page node can be the parent of all types of nodes except for the document node and other page nodes.

Files in a Starter team are limited to three pages. When a plugin tries to create more than three pages in a Starter team file, it triggers the following error:

Page limit error```
The Starter plan only comes with 3 pages. Upgrade toProfessional for unlimited pages.
```