---
title: User
slug: User
source_file: plugin-api-User.html
source_url: https://www.figma.com/plugin-docs/api/User/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 07a18a28684efbb2
token_count: 263
---
# User

The `User` object contains details about a user.

### id: string | null [readonly]

The user's id. `id` will be automatically generated users in workshop mode.
`id` will also be automatically generated for the current user if they are not logged in.
For other non-logged in users, this value will be null.

### name: string [readonly]

The user's name. `name` will be 'Anonymous' for non-logged in users.

### photoUrl: string | null [readonly]

The user's photo URL. `photoUrl` will be automatically generated users in workshop mode.
`photoUrl` will also be automatically generated for the current user if they are not logged in.
For other non-logged in users, this value will be null.

### color: string [readonly]

The current user's multiplayer color. This will match the color of their dot stamps and cursor.

### sessionId: number [readonly]

The user's session id. This is guaranteed to be unique among active users.
For example, if a user with the same `id` opens a file in different tabs,
each `User` will have a unique `sessionId`.