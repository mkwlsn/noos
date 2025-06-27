---
title: 'color: string [readonly] + sessionId: number [readonly]'
slug: ActiveUser-color-string-readonly-sessionid-number-r
source_file: plugin-api-ActiveUser.html
source_url: 'https://www.figma.com/plugin-docs/api/ActiveUser/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 39997af3b9cffa54
token_count: 83
chunk_title: 'color: string [readonly] + sessionId: number [readonly]'
chunk_slug: ActiveUser-color-string-readonly-sessionid-number-r
chunk_index: 2
chunk_of_total: 3
parent_file: ActiveUser.md
parent_slug: ActiveUser
char_count: 289
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - ActiveUser-introduction-id-string-null-readonly
  - ActiveUser-name-string-readonly-photourl-string-nul
merged_titles:
  - 'color: string [readonly]'
  - 'sessionId: number [readonly]'
compiler: noos-figma
---

The current user's multiplayer color. This will match the color of their dot stamps and cursor.

The user's session id. This is guaranteed to be unique among active users.
For example, if a user with the same `id` opens a file in different tabs,
each `User` will have a unique `sessionId`.
