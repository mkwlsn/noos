---
title: EmbedData
slug: EmbedData
source_file: plugin-api-EmbedData.html
source_url: https://www.figma.com/plugin-docs/api/EmbedData/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: f1fa70c2d68f2f8c
token_count: 125
---
# EmbedData

The metadata for a Embed node in FigJam

## EmbedData

### srcUrl: string

The srcUrl of an embed is the URL that will be loaded in an iFrame when the embed is activated

### canonicalUrl: string | null

The canonicalUrl of an embed is the URL that will be navigated to when the embed is opened in an external tab

### title: string | null

The title of the embed, as displayed on the canvas

### provider: string | null

The name of the provider of an embed.

ex. 'Spotify', 'YouTube'