---
title:
  - 'urn:ietf:params:scim:schemas:core:2.0:User'
slug: scim-api-guide-urnietfparamsscimschemascore20user
source_file: rest-api-scim-api-guide.html
source_url: 'https://www.figma.com/developers/api#scim-api-guide'
doc_type: rest-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 8cc841a27dc943f7
token_count: 239
chunk_title:
  - 'urn:ietf:params:scim:schemas:core:2.0:User'
chunk_slug: scim-api-guide-urnietfparamsscimschemascore20user
chunk_index: 1
chunk_of_total: 4
parent_file: scim-api-guide.md
parent_slug: scim-api-guide
char_count: 835
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - scim-api-guide-introduction
  - scim-api-guide-urnietfparamsscimschemasextensionenterpr
  - scim-api-guide-urnietfparamsscimschemasextensionfigmaen
compiler: noos-figma
---

Parameter NameExampleNotesroles"roles": [
 {
 "type": "seatType",
 "value": "Full"
 }
]Array. Enterprise plan only. Each item in the array is an object with two properties: "type": "seatType" and "value":, which must be one of Full, Dev, Collab, or View.givenNameJohnfamilyNameDoedisplayNameJohn DoeThis value is limited to 100 characters or less.titleDesign ManageruserNamejohndoe@example.comString. The user's email. Changing this attribute will change the user account's email in Figma. This value is limited to 100 characters or less.activetrueBoolean. Use this parameter to deactivate or reactivate users in Figma. Deactivated users are removed from the organization.externalIdaaaabbbbbbcccccString. The IdP's external ID for the user. Figma stores but does not use this parameter. This value is limited to 255 characters or less.
