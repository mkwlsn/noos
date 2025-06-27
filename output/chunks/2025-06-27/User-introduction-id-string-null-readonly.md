---
title: 'Introduction + id: string | null [readonly]'
slug: User-introduction-id-string-null-readonly
source_file: plugin-api-User.html
source_url: 'https://www.figma.com/plugin-docs/api/User/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: ebee03c82e0237d9
token_count: 80
chunk_title: 'Introduction + id: string | null [readonly]'
chunk_slug: User-introduction-id-string-null-readonly
chunk_index: 0
chunk_of_total: 3
parent_file: User.md
parent_slug: User
char_count: 279
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - User-name-string-readonly-photourl-string-nul
  - User-color-string-readonly-sessionid-number-r
merged_titles:
  - Introduction
  - 'id: string | null [readonly]'
compiler: noos-figma
---

# User

The `User` object contains details about a user.

The user's id. `id` will be automatically generated users in workshop mode.
`id` will also be automatically generated for the current user if they are not logged in.
For other non-logged in users, this value will be null.
