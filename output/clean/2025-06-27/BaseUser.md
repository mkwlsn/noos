---
title: BaseUser
slug: BaseUser
source_file: plugin-api-BaseUser.html
source_url: https://www.figma.com/plugin-docs/api/BaseUser/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 3d4b7340ac472759
token_count: 193
---
# BaseUser

The `BaseUser` object contains details about a user that was in a file at some point. They may not be active in the file.

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