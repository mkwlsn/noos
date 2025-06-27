---
title: LinkUnfurlData
slug: LinkUnfurlData
source_file: plugin-api-LinkUnfurlData.html
source_url: https://www.figma.com/plugin-docs/api/LinkUnfurlData/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 2ab4d7f20f5bc58d
token_count: 151
---
# LinkUnfurlData

The metadata for a LinkUnfurl node in FigJam

## LinkUnfurlData

### url: string

The URL of the link being unfurled

Example: [https://mynewssite.com/stories/abcdefg](https://mynewssite.com/stories/abcdefg)

### title: string | null

The title of the link being unfurled

Example: "Important News Headline"

### description: string | null

The description of the link being unfurled

Example: "An astonishing event happened today in a random part of the world...."

### provider: string | null

The provider name of the link being unfurled

Example: "CNN" | "The Onion" | "TechCrunch"