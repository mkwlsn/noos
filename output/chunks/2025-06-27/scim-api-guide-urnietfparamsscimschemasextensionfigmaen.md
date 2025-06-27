---
title:
  - 'urn:ietf:params:scim:schemas:extension:figma:enterprise:2.0:User'
slug: scim-api-guide-urnietfparamsscimschemasextensionfigmaen
source_file: rest-api-scim-api-guide.html
source_url: 'https://www.figma.com/developers/api#scim-api-guide'
doc_type: rest-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: fa152544fc0c9bbe
token_count: 1081
chunk_title:
  - 'urn:ietf:params:scim:schemas:extension:figma:enterprise:2.0:User'
chunk_slug: scim-api-guide-urnietfparamsscimschemasextensionfigmaen
chunk_index: 3
chunk_of_total: 4
parent_file: scim-api-guide.md
parent_slug: scim-api-guide
char_count: 3783
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - scim-api-guide-introduction
  - scim-api-guide-urnietfparamsscimschemascore20user
  - scim-api-guide-urnietfparamsscimschemasextensionenterpr
compiler: noos-figma
---

Parameter NameExampleDescriptionfigmaAdmintrueBoolean. Enterprise plan only. If true sets the user as a Figma organization administrator.ExamplesThis section provides examples of how the SCIM API endpoints can be used.PATCH groups: Add User to GroupAdds a user to an existing group in Figma using the SCIM API. This example demonstrates how to use the PATCH groups endpoint to update group membership. You must know the Figma group ID and the user ID of the member you want to add.

Endpoint

PATCH :baseURL/Groups/:figmaGroupId:figmaGroupId is a required path parameter, the Figma group ID of the target group.

For example, a group ID returned from GET :baseURL/Groups: "id": "1b5f9234-df40-4664-9767-334fdd7d51f6"

Headers

Authorization = "Bearer [FIGMA API TOKEN]"
Content-Type = application/jsonExample request body

{
 "schemas": [
 "urn:ietf:params:scim:api:messages:2.0:PatchOp"
 ],
 "Operations": [
 {
 "op": "add",
 "path": "members",
 "value": [
 {
 "value": "1360815874257948001",
 "display": "newscimuser@example.com"
 }
 ]
 }
 ]
}Example response body

{
 "schemas": [
 "urn:ietf:params:scim:schemas:core:2.0:Group"
 ],
 "id": "1b5f9234-df40-4664-9767-334fdd7d51f6",
 "members": [
 {
 "value": "1427545874257949557",
 "display": "existingscimuser@example.com"
 },
 {
 "value": "1360815874257948001",
 "display": "newscimuser@example.com"
 },
 ],
 "external_id": "123456789",
 "displayName": "Existing Group",
 "meta": {
 "resourceType": "Group",
 "created": "2024-10-17T02:22:22Z",
 "lastModified": "2024-10-17T04:03:06Z",
 "version": "W/"1729137786"",
 "location": "https://www.figma.com/scim/v2/1401286822445493852/Groups/1b5f9234-df40-4664-9767-334fdd7d51f6"
 }
}In this example, after adding the user to the group, a subsequent request to GET the group will show the updated membership list.

PUT users: Soft Delete UserDeletes a user in Figma but maintains SCIM provisioning of that user. This is an example of a specific usage of the PUT users endpoint. You can update the active attribute to false. This will delete the user from Figma, but maintain a record in the SCIM provisioning log of the user. This means the user will be listed if you were to leverage the GET users endpoint in bulk or by email filter.

Endpoint

PUT :baseURL/Users/:figmaUserId:figmaUserId is a required path parameter, the Figma user ID of the operation's target user.

For example, a user ID returned from GET :baseURL/USERS: "id": "977321366678728562"

Headers

Authorization = "Bearer [FIGMA API TOKEN]"
Content-Type = application/jsonExample request body

{
 "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User", "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User"],
 "userName": "scimuser@example.com",
 "name": {
 "givenName": "Scim",
 "familyName": "User"
 },
 "emails": {
 "primary": "true",
 "value": "scimuser@example.com",
 "type": "work"
 },
 "title": "Developer",
 "displayName": "Scim User",
 "active": false,
 "externalId": "123456789"
}Example response body

{
 "schemas": [
 "urn:ietf:params:scim:schemas:core:2.0:User",
 "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User"
 ],
 "userName": "scimuser@example.com",
 "name": {
 "givenName": "Scim",
 "familyName": "User"
 },
 "emails": {
 "primary": "true",
 "value": "scimuser@example.com",
 "type": "work"
 },
 "title": "Developer",
 "displayName": "Scim User",
 "active": false,
 "external_id": "123456789",
 "id": "974330387624283297",
 "meta": {
 "resourceType": "User",
 "created": "2021-05-12T15:21:06Z",
 "lastModified": "2021-05-13T00:11:04Z",
 "version": "W/\"1620864664\"",
 "location": "https://www.figma.com/scim/v2/964615200748176016/Users/974330387624283297"
 }
}In this example, when running a subsequent request to GET Users, the totalResults are 5, and the user is still listed.
