---
title: ["urn:ietf:params:scim:schemas:extension:enterprise:2.0:User"] + urn:ietf:params:scim:schemas:core:2.0:Group
slug: scim-api-guide-urnietfparamsscimschemasextensionenterpr
source_file: rest-api-scim-api-guide.html
source_url: https://www.figma.com/developers/api#scim-api-guide
doc_type: rest-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 0bd0527e13b6c9f4
token_count: 316
chunk_title: ["urn:ietf:params:scim:schemas:extension:enterprise:2.0:User"] + urn:ietf:params:scim:schemas:core:2.0:Group
chunk_slug: scim-api-guide-urnietfparamsscimschemasextensionenterpr
chunk_index: 2
chunk_of_total: 4
parent_file: scim-api-guide.md
parent_slug: scim-api-guide
char_count: 1103
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks: ["scim-api-guide-introduction", "scim-api-guide-urnietfparamsscimschemascore20user", "scim-api-guide-urnietfparamsscimschemasextensionfigmaen"]
merged_titles: ["["urn:ietf:params:scim:schemas:extension:enterprise:2.0:User"]", "urn:ietf:params:scim:schemas:core:2.0:Group"]
---

Parameter NameExampleemployeeNumber70198422costCenter093923organizationProductdivisionMobiledepartmentDesignersmanagerValueexamplemanager@example.commanagerDisplayNameJohn Doe

Parameter NameExampleDescriptiondisplayNameexample_group_nameString. Sets the name of the SCIM group. This value is limited to 255 characters or less.members"members": [
 {
 "value": "1427545874257949557",
 "display": "scimuser@example.com"
 },
 {
 "value": "1360815874257948001",
 "display": "anotherscimuser@example.com"
 },
]Array. A list of members for the SCIM group.externalId123456789String. An ID that uniquely identifies the group in the IdP. This value is limited to 255 characters or less.Additionally, Figma provides [custom parameters](#scim-api-custom-parameters)
 using the urn:ietf:params:scim:schemas:extension:figma:enterprise:2.0:User schema.

Custom ParametersThe custom parameter provided by this schema is used to designate organization administrators.

Note: Previously, product seats were managed using custom parameters. Seats are now managed using the roles parameter, a part of the Core user schema.