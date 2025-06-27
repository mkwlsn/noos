---
title: 'Introduction + id: string | null [readonly]'
slug: ActiveUser-introduction-id-string-null-readonly
source_file: plugin-api-ActiveUser.html
source_url: 'https://www.figma.com/plugin-docs/api/ActiveUser/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 52e93f70363397c6
token_count: 88
chunk_title: 'Introduction + id: string | null [readonly]'
chunk_slug: ActiveUser-introduction-id-string-null-readonly
chunk_index: 0
chunk_of_total: 3
parent_file: ActiveUser.md
parent_slug: ActiveUser
char_count: 307
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - ActiveUser-name-string-readonly-photourl-string-nul
  - ActiveUser-color-string-readonly-sessionid-number-r
merged_titles:
  - Introduction
  - 'id: string | null [readonly]'
compiler: noos-figma
---

# ActiveUser

The `ActiveUser` object contains details about a user in a Figma file.

The user's id. `id` will be automatically generated users in workshop mode.
`id` will also be automatically generated for the current user if they are not logged in.
For other non-logged in users, this value will be null.
