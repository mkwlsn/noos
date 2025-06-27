---
title: 'Introduction + id: string | null [readonly]'
slug: BaseUser-introduction-id-string-null-readonly
source_file: plugin-api-BaseUser.html
source_url: 'https://www.figma.com/plugin-docs/api/BaseUser/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 9384a7da876995d0
token_count: 102
chunk_title: 'Introduction + id: string | null [readonly]'
chunk_slug: BaseUser-introduction-id-string-null-readonly
chunk_index: 0
chunk_of_total: 2
parent_file: BaseUser.md
parent_slug: BaseUser
char_count: 356
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - BaseUser-name-string-readonly-photourl-string-nul
merged_titles:
  - Introduction
  - 'id: string | null [readonly]'
compiler: noos-figma
---

# BaseUser

The `BaseUser` object contains details about a user that was in a file at some point. They may not be active in the file.

The user's id. `id` will be automatically generated users in workshop mode.
`id` will also be automatically generated for the current user if they are not logged in.
For other non-logged in users, this value will be null.
