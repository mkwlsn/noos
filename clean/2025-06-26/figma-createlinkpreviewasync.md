---
title: createLinkPreviewAsync
slug: figma-createlinkpreviewasync
source_file: plugin-api-figma-createlinkpreviewasync.html
source_url: https://www.figma.com/plugin-docs/api/figma-createlinkpreviewasync/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: fe8126c26f5b2a97
token_count: 249
---
# createLinkPreviewAsync

##### info

This API is only available in FigJam.

Resolves link metadata from a URL, and inserts either an embed or a unfurled preview of the link into the document
An embed will be inserted if the URL is a valid OEmbed provider (has a `` tag). The returned `` source will be converted into an EmbedNode.

Otherwise, the title, description, thumbnail, and favicon will be parsed from the HTML markup of the URL using standard `og` or `twitter` meta tags. This information will be converted into a LinkUnfurlNode.

## Signature

### createLinkPreviewAsync(url: string): Promise

## Parameters

### url

## Remarks

This API is only available in FigJam

Creating embeds and link unfurl nodes```
(async () => { // Creates an EmbedNode const youtubeEmbed = await figma.createLinkPreviewAsync('https://www.youtube.com/watch?v=4G9RHt2OyuY') // Creates a LinkUnfurlNode const unfurledLink = await figma.createLinkPreviewAsync('https://www.figma.com/community/plugins')})()
```