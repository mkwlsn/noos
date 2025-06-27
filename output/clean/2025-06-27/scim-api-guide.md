---
title: scim-api-guide
slug: scim-api-guide
source_file: rest-api-scim-api-guide.html
source_url: https://www.figma.com/developers/api#scim-api-guide
doc_type: rest-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 445582da9ac400c3
token_count: 9073
---
SCIM API ReferenceNote: Figma's SCIM API is distinct from the Figma REST API. The SCIM API uses a different base URL, provides a separate set of endpoints, and uses a different method of authentication.

SCIM is an API that Figma supports for managing the creation, updating, and deletion of user accounts. SCIM is not used for authentication, only for user lifecycle management. Read through Figma's [SSO guides](https://help.figma.com/hc/articles/360039957374-Get-started-with-organizations#saml-sso)
 for more information about authentication. Figma supports dedicated integrations with the following identity providers (IdP) who leverage the SCIM API:

- Microsoft Entra ID
- Okta
- OneLogin
- Google SSO
- Active Directory Federation Service (AD FS)

Customers with IdPs outside of those mentioned can still integrate with Figma for user lifecycle management by leveraging our SCIM endpoints.

Note: SCIM is not supported on the Starter or Professional Plan.

The SCIM API is a REST API that can be accessed over HTTP protocol using verbs. GET for retrieving information, POST for creating new objects, PUT for overwriting objects, PATCH for modifying objects, and DELETE to remove objects. 

SCIM PrerequisitesTo interact with Figma's SCIM API, two pieces of information are required to be generated from Figma Admin Settings by an Organization Administrator.

Generate an API Token1. In the Login and Provisioning section of Admin Settings, click SCIM Provisioning.
2. Click Generate Token.
3. Copy the API Token value. Note: This will only be shown once so record it somewhere safe for future reference.

Find Your Tenant ID1. In the Login and Provisioning section, click SAML SSO.
2. Copy the Tenant ID. Note: The Tenant ID is required to form the SCIM base URL.

Use your Tenant ID to construct the base URL for the SCIM API: https://www.figma.com/scim/v2/:tenantid

The API token must be included in an Authorization header using Bearer when calling any of the SCIM methods.

For POST or PUT write operations, provide a JSON request body and set the HTTP Content-type header to application/json.

Example

GET https://www.figma.com/scim/v2/:tenantid/Users
Authorization: "Bearer [Figma API Token]"SCIM API Base URLThe following sections list the endpoints that are available for the SCIM API. All of the endpoints use the same base URL.

SCIM baseURL: https://www.figma.com/scim/v2/:tenantid

For example:

GET https://www.figma.com/scim/v2/:tenantid/ServiceProviderConfigConfiguration EndpointsThe following endpoints are used to check your SCIM configuration.GET Service Provider ConfigGet Figma's configuration details for the SCIM API, including which operations are supported.

Endpoint

GET :baseURL/ServiceProviderConfigResponse

{
 "schemas": [
 "urn:ietf:params:scim:schemas:core:2.0:ServiceProviderConfig"
 ],
 "documentationUri": "https://help.figma.com/hc/en-us/articles/360048514653-Set-up-automatic-provisioning-via-SCIM",
 "patch": {
 "supported": true
 },
 "bulk": {
 "supported": false,
 "maxOperations": 0,
 "maxPayloadSize": 0
 },
 "filter": {
 "supported": true,
 "maxResults": 200
 },
 "changePassword": {
 "supported": false
 },
 "sort": {
 "supported": false
 },
 "etag": {
 "supported": false
 },
 "authenticationSchemes": [
 {
 "name": "OAuth Bearer Token",
 "description": "Authentication scheme using the OAuth Bearer Token Standard",
 "specUri": "http://www.rfc-editor.org/info/rfc6750",
 "documentationUri": "https://help.figma.com/hc/en-us/articles/360048514653-Set-up-automatic-provisioning-via-SCIM",
 "type": "oauthbearertoken",
 "primary": true
 }
 ],
 "meta": {
 "location": "https://www.figma.com/v2/ServiceProviderConfig",
 "resourceType": "ServiceProviderConfig",
 "created": "2020-09-01T04:56:22Z",
 "lastModified": "2020-09-01T04:56:22Z",
 "version": "1"
 }
}GET Tenant IDUsed to check if a tenant ID is valid. Returns 200 if the tenant ID is valid, returns 400 if the tenant ID is not valid.

Endpoint

GET :baseURL/Response

200Users EndpointsThe following endpoints are used to work with SCIM managed users.GET UsersReturns a list of currently SCIM provisioned users in the organization. This will 'bind' the user accounts to the SCIM table.

Endpoint

GET :baseURL/UsersExample paths

GET :baseURL/Users?filter&count&startIndex
GET :baseURL/Users?filter=userName eq "email@domain.com"
GET :baseURL/Users?filter=externalId eq "external-id-value"Headers

Authorization: Bearer [FIGMA API TOKEN]Parameters

Path ParameterDescriptionfilterString. Filters the users by the provided string. The string can be an email or an externalId.countNumber. The number of results to returnstartIndexNumber. When paginating through the results, this is the start index offset (where to start returning results)Example response

{
 "schemas": [
 "urn:ietf:params:scim:api:messages:2.0:ListResponse"
 ],
 "totalResults": 1,
 "Resources": [
 {
 "name": {
 "givenName": "Scim",
 "familyName": "User"
 },
 "roles": [
 {
 "type": "seatType",
 "value": "Dev"
 }
 ],
 "title": "Developer",
 "emails": {
 "type": "work",
 "value": "scimuser@example.com",
 "primary": "true"
 },
 "schemas": [
 "urn:ietf:params:scim:schemas:core:2.0:User",
 "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",
 "urn:ietf:params:scim:schemas:extension:figma:enterprise:2.0:User"
 ],
 "userName": "scimuser@example.com",
 "externalID": "123456789",
 "displayName": "Scim User",
 "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
 "costCenter": "323245",
 "department": "Mobile Engineering",
 "organization": "Product"
 },
 "urn:ietf:params:scim:schemas:extension:figma:enterprise:2.0:User": {
 "figmaAdmin": false
 },
 "id": "974343320676444348",
 "meta": {
 "resourceType": "User",
 "created": "2021-05-12T16:12:30Z",
 "lastModified": "2021-05-12T16:12:30Z",
 "version": "W/\"1620835950\"",
 "location": "https://www.figma.com/scim/v2/964615200748176016/Users/974343320676444348"
 }
 }
 ]
}POST UsersProvisions a new or existing user in Figma. For existing users, this will bind your identity provider with a username that was created within Figma. The parameters provided are applied to the Figma user whose email matches the userName parameter.

Endpoint

POST :baseURL/UsersHeaders

Authorization = "Bearer [FIGMA API TOKEN]"
Content-Type = application/jsonParameters

Body ParameterDescriptionSchemas (required)String[]. The supported schemas areurn:ietf:params:scim:schemas:core:2.0:User,urn:ietf:params:scim:schemas:extension:enterprise:2.0:User, and urn:ietf:params:scim:schemas:extension:figma:enterprise:2.0:User.userName (required)String. Core schema. The user's email and account identifier. Changing this attribute will change the user account's email in Figma. This value is limited to 100 characters or less.If the email address doesn't belong to the organization (for example, if the organization hasn't [added the domain in Figma](https://help.figma.com/hc/articles/360045953273-Manage-domain-capture-for-an-organization#h_01J3RESBMNAZX741MQD3BF49RM)
), then the operation to change the user's email may fail.active (required)Boolean. Core schema. Use this parameter to deactivate or reactivate users in Figma. Note: Deactivated users will also be removed from the Organization.rolesArray. Core schema. Enterprise plan only. Each item in the array is an object with two properties: "type": "seatType" and "value":, which must be one of Full, Dev, Collab, or View.For example: {"type": "seatType", "value": "Full"}externalIdString. Core schema. The IdP's external ID for the user. Figma stores but does not use this parameter. This value is limited to 255 characters or less.displayNameString. Core schema. Display name for the user profile in Figma. If this is not provided we will use the value for userName. This value is limited to 100 characters or less.titleString. Core schema. Job title of the user, displayed in the user profile.givenNameString. Core schema. First name of user.familyNameString. Core schema. Last name of user.employeeNumberNumber. Unique identifier of employee within your HR system.costCenterNumber. Enterprise schema. Cost center of employee. Figma allows for one extra metadata field to be present in Admin Console.organizationString. Enterprise schema. Organization of the employee. Figma allows for one extra metadata field to be present in Admin Console.divisionString Enterprise schema. Division of the employee. Figma allows for one extra metadata field to be present in Admin Console.departmentString. Enterprise schema. Department of the employee. Figma allows for one extra metadata field to be present in Admin Console.managerValueString. Enterprise schema. Username or email of the manager.managerDisplayNameString. Enterprise schema. User profile name of the manager.figmaAdminBoolean. Figma schema. Enterprise plan only. If true sets the user as a Figma organization administrator.This request also supports [custom parameters](#scim-api-custom-parameters)
.

Example request body

{
 "schemas": [
 "urn:ietf:params:scim:schemas:core:2.0:User",
 "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",
 "urn:ietf:params:scim:schemas:extension:figma:enterprise:2.0:User"
 ],
 "userName": "scimuser@example.com",
 "name": {
 "givenName": "Scim",
 "familyName": "User"
 },
 "roles" : [
 {
 "type": "seatType",
 "value": "Dev"
 }
 ],
 "emails": {
 "primary": "true",
 "value": "scimuser@example.com",
 "type": "work"
 },
 "title": "Developer",
 "displayName": "Scim User",
 "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
 "costCenter": "323245",
 "department": "Mobile Engineering",
 "organization": "Product"
 },
 "externalID": "123456789",
 "urn:ietf:params:scim:schemas:extension:figma:enterprise:2.0:User": {
 "figmaAdmin": false
 }
}Example response body

{
 "schemas": [
 "urn:ietf:params:scim:schemas:core:2.0:User",
 "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",
 "urn:ietf:params:scim:schemas:extension:figma:enterprise:2.0:User"
 ],
 "userName": "scimuser@example.com",
 "name": {
 "givenName": "Scim",
 "familyName": "User"
 },
 "roles": [
 {
 "type": "seatType",
 "value": "Dev"
 }
 ],
 "emails": {
 "primary": "true",
 "value": "scimuser@example.com",
 "type": "work"
 },
 "title": "Developer",
 "displayName": "Scim User",
 "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
 "costCenter": "323245",
 "department": "Mobile Engineering",
 "organization": "Product"
 },
 "externalID": "123456789",
 "urn:ietf:params:scim:schemas:extension:figma:enterprise:2.0:User": {
 "figmaAdmin": false
 },
 "id": "977321366678728562",
 "meta": {
 "resourceType": "User",
 "created": "2025-02-27T21:39:39Z",
 "lastModified": "2025-02-27T21:40:20Z",
 "version": "W/"1740692420"",
 "location": "https://www.figma.com/scim/v2/964615200748176016/Users/977321366678728562"
 }
}PUT UsersOverwrites the attributes for a user with the provided parameters in the request body. The parameters provided are applied to the Figma user whose email matches the userName parameter. In order to update attributes, you must know the Figma ID of the user and include the ID at the end of the Users path. Common use cases for this operation are changing emails, updating display names, and adding cost center values.

Endpoint

PUT :baseURL/Users/:figmaUserId:figmaUserId is a required path parameter, the Figma user ID of the operation's target user.

For example, a user ID returned from GET :baseURL/USERS: "id": "977321366678728562"

Headers

Authorization = "Bearer [FIGMA API TOKEN]"
Content-Type = application/jsonParameters

Body ParameterDescriptionSchemas (required)String[]. The supported schemas areurn:ietf:params:scim:schemas:core:2.0:User,urn:ietf:params:scim:schemas:extension:enterprise:2.0:User, and urn:ietf:params:scim:schemas:extension:figma:enterprise:2.0:User.userName (required)String. Core schema. The user's email and account identifier. Changing this attribute will change the user account's email in Figma. This value is limited to 100 characters or less.If the email address doesn't belong to the organization (for example, if the organization hasn't [added the domain in Figma](https://help.figma.com/hc/articles/360045953273-Manage-domain-capture-for-an-organization#h_01J3RESBMNAZX741MQD3BF49RM)
), then the operation to change the user's email may fail.active (required)Boolean. Core schema. Use this parameter to deactivate or reactivate users in Figma. Note: Deactivated users will also be removed from the Organization.rolesArray. Core schema. Enterprise plan only. Each item in the array is an object with two properties: "type": "seatType" and "value":, which must be one of Full, Dev, Collab, or View.For example: {"type": "seatType", "value": "Full"}externalIdString. Core schema. The IdP's external ID for the user. Figma stores but does not use this parameter. This value is limited to 255 characters or less.displayNameString. Core schema. Display name for the user profile in Figma. If this is not provided we will use the value for userName. This value is limited to 100 characters or less.titleString. Core schema. Job title of the user, displayed in the user profile.givenNameString. Core schema. First name of user.familyNameString. Core schema. Last name of user.employeeNumberNumber. Unique identifier of employee within your HR system.costCenterNumber. Enterprise schema. Cost center of employee. Figma allows for one extra metadata field to be present in Admin Console.organizationString. Enterprise schema. Organization of the employee. Figma allows for one extra metadata field to be present in Admin Console.divisionString Enterprise schema. Division of the employee. Figma allows for one extra metadata field to be present in Admin Console.departmentString. Enterprise schema. Department of the employee. Figma allows for one extra metadata field to be present in Admin Console.managerValueString. Enterprise schema. Username or email of the manager.managerDisplayNameString. Enterprise schema. User profile name of the manager.figmaAdminBoolean. Figma schema. Enterprise plan only. If true sets the user as a Figma organization administrator.This request also supports [custom parameters](#scim-api-custom-parameters)
.

Example request body

{
 "schemas": [
 "urn:ietf:params:scim:schemas:core:2.0:User",
 "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",
 "urn:ietf:params:scim:schemas:extension:figma:enterprise:2.0:User"
 ],
 "userName": "scimuser@example.com",
 "name": {
 "givenName": "Scim",
 "familyName": "User"
 },
 "roles" : [
 {
 "type": "seatType",
 "value": "Full"
 }
 ],
 "emails": {
 "primary": "true",
 "value": "scimuser@example.com",
 "type": "work"
 },
 "title": "Developer",
 "displayName": "Scim User",
 "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
 "costCenter": "323245",
 "department": "Mobile Engineering",
 "organization": "Product"
 },
 "externalID": "123456789",
 "urn:ietf:params:scim:schemas:extension:figma:enterprise:2.0:User": {
 "figmaAdmin": false
 }
}Example response body

{
 "schemas": [
 "urn:ietf:params:scim:schemas:core:2.0:User",
 "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",
 "urn:ietf:params:scim:schemas:extension:figma:enterprise:2.0:User"
 ],
 "userName": "scimuser@example.com",
 "name": {
 "givenName": "Scim",
 "familyName": "User"
 },
 "roles": [
 {
 "type": "seatType",
 "value": "Full"
 }
 ],
 "emails": {
 "primary": "true",
 "value": "scimuser@example.com",
 "type": "work"
 },
 "title": "Developer",
 "displayName": "Scim User",
 "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
 "costCenter": "323245",
 "department": "Mobile Engineering",
 "organization": "Product"
 },
 "externalID": "123456789",
 "urn:ietf:params:scim:schemas:extension:figma:enterprise:2.0:User": {
 "figmaAdmin": false
 },
 "id": "977321366678728562",
 "meta": {
 "resourceType": "User",
 "created": "2025-02-27T21:39:39Z",
 "lastModified": "2025-02-27T23:38:04Z",
 "version": "W/"1740699484"",
 "location": "https://www.figma.com/scim/v2/964615200748176016/Users/977321366678728562"
 }
}PATCH UsersUpdates a targeted user attribute based on the request body. The parameters provided are applied to the Figma user whose email matches the userName parameter. In order to update attributes, you must know the Figma user ID of the user and populate this at the end of the Users path. Common use cases for this operation are changed emails, updated display names and adding cost center values.

Endpoint

PATCH :baseURL/Users/:figmaUserId:figmaUserId is a required path parameter, the Figma user ID of the operation's target user.

For example, a user ID returned from GET :baseURL/USERS: "id": "977321366678728562"

Headers

Authorization = "Bearer [FIGMA API TOKEN]"
Content-Type = application/jsonParameters

Body ParameterDescriptionSchemas (required)String[]. The supported schemas areurn:ietf:params:scim:schemas:core:2.0:User,urn:ietf:params:scim:schemas:extension:enterprise:2.0:User, and urn:ietf:params:scim:schemas:extension:figma:enterprise:2.0:User.userName (required)String. Core schema. The user's email and account identifier. Changing this attribute will change the user account's email in Figma. This value is limited to 100 characters or less.active (required)Boolean. Core schema. Use this parameter to deactivate or reactivate users in Figma. Note: Deactivated users will also be removed from the Organization.rolesArray. Core schema. Enterprise plan only. Each item in the array is an object with two properties: "type": "seatType" and "value":, which must be one of Full, Dev, Collab, or View.For example: {"type": "seatType", "value": "Full"}externalIdString. Core schema. The IdP's external ID for the user. Figma stores but does not use this parameter. This value is limited to 255 characters or less.displayNameString. Core schema. Display name for the user profile in Figma. If this is not provided we will use the value for userName. This value is limited to 100 characters or less.titleString. Core schema. Job title of the user, displayed in the user profile.givenNameString. Core schema. First name of user.familyNameString. Core schema. Last name of user.employeeNumberNumber. Unique identifier of employee within your HR system.costCenterNumber. Enterprise schema. Cost center of employee. Figma allows for one extra metadata field to be present in Admin Console.organizationString. Enterprise schema. Organization of the employee. Figma allows for one extra metadata field to be present in Admin Console.divisionString Enterprise schema. Division of the employee. Figma allows for one extra metadata field to be present in Admin Console.departmentString. Enterprise schema. Department of the employee. Figma allows for one extra metadata field to be present in Admin Console.managerValueString. Enterprise schema. Username or email of the manager.managerDisplayNameString. Enterprise schema. User profile name of the manager.figmaAdminBoolean. Figma schema. Enterprise plan only. If true sets the user as a Figma organization administrator.This request also supports [custom parameters](#scim-api-custom-parameters)
.

Example request body

This example request gives an existing user a Dev seat.

{
 "schemas": ["urn:ietf:params:scim:api:messages:2.0:PatchOp"],
 "Operations": [
 {
 "op": "replace",
 "path": "roles",
 "value": [
 {
 "type": "seatType",
 "value": "Dev"
 }
 ]
 }
 ]
 }Example response body

{
 "name": {
 "givenName": "Scim",
 "familyName": "User"
 },
 "roles": [
 {
 "type": "seatType",
 "value": "Dev"
 }
 ],
 "title": "Developer",
 "emails": {
 "type": "work",
 "value": "scimuser@example.com",
 "primary": "true"
 },
 "schemas": [
 "urn:ietf:params:scim:schemas:core:2.0:User",
 "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",
 "urn:ietf:params:scim:schemas:extension:figma:enterprise:2.0:User"
 ],
 "userName": "scimuser@example.com",
 "externalID": "123456789",
 "displayName": "Scim User",
 "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
 "costCenter": "323245",
 "department": "Mobile Engineering",
 "organization": "Product"
 },
 "urn:ietf:params:scim:schemas:extension:figma:enterprise:2.0:User": {
 "figmaAdmin": false
 },
 "id": "977321366678728562",
 "meta": {
 "resourceType": "User",
 "created": "2025-02-27T21:39:39Z",
 "lastModified": "2025-02-27T23:05:42Z",
 "version": "W/"1740697542"",
 "location": "https://www.figma.com/scim/v2/964615200748176016/Users/977321366678728562"
 }
}DELETE UsersPermanently deletes the user from Figma and the SCIM Provisioning log associated with Figma. A Figma user ID is required for this operation. You can retrieve a Figma user ID by leveraging the GET users endpoint with an email filter. Returns 204 if the user is successfully deleted.

Endpoint

DELETE :baseURL/Users/:figmaUserId:figmaUserId is a required path parameter, the Figma user ID of the operation's target user.

For example, a user ID returned from GET :baseURL/USERS: "id": "977321366678728562"

Headers

Authorization = "Bearer [FIGMA API TOKEN]"
Content-Type = application/jsonResponse

204Note: An easy way to validate deletion is to try to get the user with an email filter or review the get users list.

Groups EndpointsThe following endpoints are used to work with SCIM groups.GET GroupsReturns a list of SCIM managed groups in the organization.

Endpoint

GET :baseURL/GroupsExample paths

GET :baseURL/Groups?filter&count&startIndex
GET :baseURL/Groups?filter=displayName eq "ExampleWorkspaceName"
GET :baseURL/Groups?filter=externalId eq "external-id-value"Headers

Authorization: Bearer [FIGMA API TOKEN]Parameters

Path ParameterDescriptionfilterString. Filters groups by the provided string. The string can be the display name of the group, or an externalId.countNumber. The number of results to returnstartIndexNumber. When paginating through the results, this is the start index offset (where to start returning results)Example response body

{
 "schemas": [
 "urn:ietf:params:scim:api:messages:2.0:ListResponse"
 ],
 "totalResults": 1,
 "Resources": [
 {
 "schemas": [
 "urn:ietf:params:scim:schemas:core:2.0:Group"
 ],
 "id":"1b5f9234-df40-4664-9767-334fdd7d51f6",
 "members": [
 {
 "value":"1427545874257949557",
 "display":"scimuser@example.com"
 }
 ],
 "external_id": "32a50c8f-798b-4040-b2e3-daf6e71ffd88",
 "displayName": "bill_group1",
 "meta": {
 "resourceType":"Group",
 "created":"2024-10-17T02:22:22Z",
 "lastModified":"2024-10-17T02:22:23Z",
 "version":"W/"1729131743"",
 "location":"https://www.figma.com/scim/v2/TENANTID/Groups/1b5f9234-df40-4664-9767-334fdd7d51f6"
 }
 }
 ]
}POST GroupsCreates a SCIM group linked to an existing Figma workspace, or billing group, or both. The parameters define the SCIM group's name along with its corresponding members. Members of a SCIM group automatically inherit the workspace or billing group that matches the displayName parameter.

Endpoint

POST :baseURL/GroupsHeaders

Authorization = "Bearer [FIGMA API TOKEN]"
Content-Type = application/jsonParameters

Body ParameterDescriptionSchemas (required)String. The supported schemas is urn:ietf:params:scim:schemas:core:2.0:Group.displayName (required)String. Display name for the group. To link with a workspace or billing group in Figma, the display name must match the name of the workspace or billing group. The name is case sensitive. This value is limited to 255 characters or less.externalIdString. An ID that can uniquely identify the group in the IdP. This value is limited to 255 characters or less.membersString[]. A list of members that you want to include in the group. The list must use the following format:"members": [
 {
 "value": "1427545874257949557",
 "display": "scimuser@example.com"
 }
]Where value is the ID of the user, and displayName is the display name of the user.Example request body

{
 "schemas": [
 "urn:ietf:params:scim:schemas:core:2.0:Group"
 ],
 "displayName": "bill_group_1",
 "externalId": "123456789",
 "members": [
 {
 "value": "1427545874257949557",
 "display": "scimuser@example.com"
 }
 ],
}Example response body

{
 "schemas":[
 "urn:ietf:params:scim:schemas:core:2.0:Group"
 ],
 "id":"185607a2-cae4-46f5-9ab0-1d12dbd1af29",
 "members":[
 {
 "value":"1427545874257949557",
 "display":"scimuser@example.com"
 }
 ],
 "external_id":"123456789",
 "displayName":"bill_group_1",
 "meta": {
 "resourceType":"Group",
 "created":"2024-10-17T02:56:11Z",
 "lastModified":"2024-10-17T02:56:11Z",
 "version":"W/"1729133771"",
 "location":"https://www.figma.com/scim/v2/TENANTID/Groups/185607a2-cae4-46f5-9ab0-1d12dbd1af29"
 }
}PUT GroupsOverwrites the attributes of a group with the provided parameters in the request body. The parameters provided are applied to the SCIM group. In order to update attributes, you must know the Figma group ID of the group and populate this at the end of the groups path. Common use cases for this operation are updating membership and updating display names.

When you use this endpoint to add or remove members:

- New members inherit the Figma workspace or billing group that is linked to the SCIM group.
- Removed members no longer inherit the Figma workspace or billing group.

Endpoint

PUT :baseURL/Groups/:figmaGroupId:figmaGroupId is a required path parameter, the Figma group ID of the operation's target group.

For example, a group ID returned from GET :baseURL/Groups: "id": "1b5f9234-df40-4664-9767-334fdd7d51f6"

Headers

Authorization = "Bearer [FIGMA API TOKEN]"
Content-Type = application/jsonParameters

Body ParameterDescriptionSchemas (required)String. The supported schemas is urn:ietf:params:scim:schemas:core:2.0:Group.displayName (required)String. Display name for the group. When you update this value, the current link to a Figma workspace or billing group is preserved. This value is limited to 255 characters or less.externalIdString. An ID that can uniquely identify the group in the IdP. This value is limited to 255 characters or less.membersString[]. A list of members that you want to include in the group. If you exclude existing members of the group, because this operation overwrites the group attributes, those members are removed. The list must use the following format:"members": [
 {
 "value": "1427545874257949557",
 "display": "scimuser@example.com"
 }
]Where value is the ID of the user, and displayName is the display name of the user.Example request body

{
 "schemas": [
 "urn:ietf:params:scim:schemas:core:2.0:Group"
 ],
 "displayName": "bill_group_2",
 "externalId": "123456789",
 "members": [
 {
 "value": "1427545874257949557",
 "display": "scimuser@example.com"
 }
 ]
}Example response body

{
 "schemas": [
 "urn:ietf:params:scim:schemas:core:2.0:Group"
 ],
 "id":"1b5f9234-df40-4664-9767-334fdd7d51f6",
 "members": [
 {
 "value":"1427545874257949557",
 "display":"scimuser@example.com"
 }
 ],
 "external_id":"123456789",
 "displayName":"bill_group_2",
 "meta": {
 "resourceType":"Group",
 "created":"2024-10-17T02:22:22Z",
 "lastModified":"2024-10-17T03:51:36Z",
 "version":"W/"1729137096"",
 "location":"https://www.figma.com/scim/v2/TENANTID/Groups/1b5f9234-df40-4664-9767-334fdd7d51f6"
 }
}In this example, the lastModified field matches when the operation is successfully completed.

PATCH GroupsUpdates a targeted group attribute based on the request body. The parameters provided are applied to the SCIM group. In order to update attributes, you must know the Figma group ID of the group and populate this at the end of the groups path. Common use cases for this operation are updating membership and updating display names.

When you use this endpoint to add or remove members:

- New members inherit the Figma workspace or billing group that is linked to the SCIM group.
- Removed members no longer inherit the Figma workspace or billing group.

Endpoint

PATCH :baseURL/Groups/:figmaGroupId:figmaGroupId is a required path parameter, the Figma group ID of the operation's target group.

For example, a group ID returned from GET :baseURL/Groups: "id": "1b5f9234-df40-4664-9767-334fdd7d51f6"

Headers

Authorization = "Bearer [FIGMA API TOKEN]"
Content-Type = application/jsonParameters

Body ParameterDescriptionSchemas (required)String. The supported schemas is urn:ietf:params:scim:schemas:core:2.0:Group.For the PATCH operation, you must also include the PatchOp schema: urn:ietf:params:scim:api:messages:2.0:PatchOp.displayName (required)String. Display name for the group. When you update this value, the current link to a Figma workspace or billing group is preserved. This value is limited to 255 characters or less.externalIdString. An ID that can uniquely identify the group in the IdP. This value is limited to 255 characters or less.membersString[]. A list of members that you want to include in the group. The list must use the following format:"members": [
 {
 "value": "1427545874257949557",
 "display": "scimuser@example.com"
 }
]Where value is the ID of the user, and displayName is the display name of the user.Example request body

{
 "schemas": [
 "urn:ietf:params:scim:api:messages:2.0:PatchOp"
 ],
 "Operations": [
 {
 "op":"replace",
 "value":
 {
 "displayName": "updatedGroup"
 }
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
 "display": "scimuser@example.com"
 }
 ],
 "external_id": "123456789",
 "displayName": "updatedGroup",
 "meta": {
 "resourceType": "Group",
 "created": "2024-10-17T02:22:22Z",
 "lastModified": "2024-10-17T04:03:06Z",
 "version": "W/"1729137786"",
 "location": "https://www.figma.com/scim/v2/1401286822445493852/Groups/1b5f9234-df40-4664-9767-334fdd7d51f6"
 }
}DELETE GroupsPermanently deletes a group from Figma and the SCIM Provisioning log associated with Figma. Requires a Figma group ID. You can retrieve a Figma group ID using the GET groups endpoint. Returns 204 if the group is successfully deleted.

Endpoint

DELETE :baseURL/Groups/:figmaGroupId:figmaGroupId is a required path parameter, the Figma group ID of the operation's target group.

For example, a group ID returned from GET :baseURL/Groups: "id": "1b5f9234-df40-4664-9767-334fdd7d51f6"

Headers

Authorization = "Bearer [FIGMA API TOKEN]"
Content-Type = application/jsonResponse

204Supported SchemasThe SCIM API supports the following schemas.

## ["urn:ietf:params:scim:schemas:core:2.0:User"]

Parameter NameExampleNotesroles"roles": [
 {
 "type": "seatType",
 "value": "Full"
 }
]Array. Enterprise plan only. Each item in the array is an object with two properties: "type": "seatType" and "value":, which must be one of Full, Dev, Collab, or View.givenNameJohnfamilyNameDoedisplayNameJohn DoeThis value is limited to 100 characters or less.titleDesign ManageruserNamejohndoe@example.comString. The user's email. Changing this attribute will change the user account's email in Figma. This value is limited to 100 characters or less.activetrueBoolean. Use this parameter to deactivate or reactivate users in Figma. Deactivated users are removed from the organization.externalIdaaaabbbbbbcccccString. The IdP's external ID for the user. Figma stores but does not use this parameter. This value is limited to 255 characters or less.

## ["urn:ietf:params:scim:schemas:extension:enterprise:2.0:User"]

Parameter NameExampleemployeeNumber70198422costCenter093923organizationProductdivisionMobiledepartmentDesignersmanagerValueexamplemanager@example.commanagerDisplayNameJohn Doe

## urn:ietf:params:scim:schemas:core:2.0:Group

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

## ["urn:ietf:params:scim:schemas:extension:figma:enterprise:2.0:User"]

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