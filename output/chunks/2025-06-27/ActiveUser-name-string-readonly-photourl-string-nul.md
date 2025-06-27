---
title: 'name: string [readonly] + photoUrl: string | null [readonly]'
slug: ActiveUser-name-string-readonly-photourl-string-nul
source_file: plugin-api-ActiveUser.html
source_url: 'https://www.figma.com/plugin-docs/api/ActiveUser/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: e12f9db44e984368
token_count: 89
chunk_title: 'name: string [readonly] + photoUrl: string | null [readonly]'
chunk_slug: ActiveUser-name-string-readonly-photourl-string-nul
chunk_index: 1
chunk_of_total: 3
parent_file: ActiveUser.md
parent_slug: ActiveUser
char_count: 310
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - ActiveUser-introduction-id-string-null-readonly
  - ActiveUser-color-string-readonly-sessionid-number-r
merged_titles:
  - 'name: string [readonly]'
  - 'photoUrl: string | null [readonly]'
compiler: noos-figma
---

The user's name. `name` will be 'Anonymous' for non-logged in users.

The user's photo URL. `photoUrl` will be automatically generated users in workshop mode.
`photoUrl` will also be automatically generated for the current user if they are not logged in.
For other non-logged in users, this value will be null.
