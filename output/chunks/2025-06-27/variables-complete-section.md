---
title: Complete Section
slug: variables-complete-section
source_file: rest-api-variables.html
source_url: 'https://www.figma.com/developers/api#variables'
doc_type: rest-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 7b5122c1d48f0842
token_count: 7293
chunk_title: Complete Section
chunk_slug: variables-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: variables.md
parent_slug: variables
char_count: 25523
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

VariablesGetting startedThe Variables REST API includes endpoints for querying, creating, updating, and deleting variables. Variables in Figma store reusable values that can be applied to all kinds of design properties and prototyping actions. With the Variables REST API, you can:

- Integrate Figma directly with continuous integration (CI) systems.
- Sync design system source of truth to and from Figma (see step-by-step instructions in this FigJam).

If you use the Variables REST API to update variables in a Figma file, you will need to [publish the variables](https://help.figma.com/hc/articles/360025508373-Publish-styles-and-components)
 before they can be used in other files.

The Variables REST API can be used with the [Plugin API](https://www.figma.com/plugin-docs/working-with-variables/)
 to support more use cases. For a broad overview, see the [Guide to variables in Figma](https://help.figma.com/hc/articles/15339657135383)
.

To use this API, you must have a Full seat in an Enterprise org; guests cannot use the API. The following table describes the requirements.

 GETPOSTPlanEnterpriseEnterpriseAccount typeAny organization memberFull seats, adminsFile permissionsView accessEdit accessToken scopesfile_variables:readfile_variables:writeTypesVariables in Figma have preset types (string, boolean, float, etc…), belong to a variable collection, and hold a different value for each mode in the collection. Certain node properties can bind to variables, enabling these properties to change dynamically when variables are updated or when the node is associated with a different mode.

The below types are returned by the [GET local variables](#get-local-variables-endpoint)
 and [GET published variables](#get-published-variables-endpoint)
 endpoints, with the published variables endpoint returning a subset of these properties. Please refer to the return values for each endpoint for more details.

VariableCollection

A grouping of related Variable objects each with the same modes.

idString The unique identifier of this variable collection.nameString The name of this variable collection.keyString The key of the variable collection.modes{ modeId: String, name: String }[] The list of modes defined for this variable collection.defaultModeIdString The id of the default mode.remoteBoolean Whether the variable collection is remote.hiddenFromPublishingBoolean Whether this variable collection is hidden when publishing the current file as a library.variableIdsString[] The ids of the variables in the collection. Note that the order of these variables is roughly the same as what is shown in Figma Design, however it does not account for groups. As a result, the order of these variables may not exactly reflect the exact ordering and grouping shown in the authoring UI.

Variable

A Variable is a single design token that defines values for each of the modes in its VariableCollection. These values can be applied to various kinds of design properties.

idString The unique identifier of this variable.nameString The name of this variable.keyString The key of the variable.variableCollectionIdString The id of the variable collection that contains this variable.resolvedType"BOOLEAN" | "FLOAT" | "STRING" | "COLOR" The resolved type of the variable.valuesByMode{ [modeId: String]: Boolean | Number | String | [Color](#color-type)
 | VariableAlias } The values for each mode of this variable.remoteBoolean Whether the variable is remote.descriptionString Description of this variable.hiddenFromPublishingBoolean Whether this variable is hidden when publishing the current file as a library.If the parent VariableCollection is marked as hiddenFromPublishing, then this variable will also be hidden from publishing via the UI. hiddenFromPublishing is independently toggled for a variable and collection. However, both must be true for a given variable to be publishable.scopes[VariableScope](#variablescope-type)
[] An array of scopes in the UI where this variable is shown. Setting this property will show/hide this variable in the variable picker UI for different fields.Setting scopes for a variable does not prevent that variable from being bound in other scopes (for example, via the Plugin API). This only limits the variables that are shown in pickers within the Figma UI.codeSyntax[VariableCodeSyntax](#variablecodesyntax-type)
 Code syntax definitions for this variable. Code syntax allows you to represent variables in code using platform-specific names, and will appear in [Dev Mode](https://help.figma.com/hc/articles/15023124644247)
's code snippets when inspecting elements using the variable.deletedButReferencedBoolean Indicates that the variable was deleted in the editor, but the document may still contain references to the variable. References to the variable may exist through bound values or variable aliases.

VariableAlias

An object that serves as an alias for a variable. All properties are required.

type"VARIABLE_ALIAS"idString The id of the variable that this alias points to. In the POST variables endpoint, you can use the temporary id of a variable.

VariableScope

Scopes allow a variable to be shown/hidden in the variable picker UI for various fields. This declutters the Figma UI if you have a large number of variables. Currently only supported on FLOAT and COLOR variables.

ALL_SCOPES is a special scope that means that the variable will be shown in the picker UI for all current and any future fields. If ALL_SCOPES is set, no additional scopes can be set.Likewise, ALL_FILLS is a special scope that means that the variable will be shown in the picker UI for all current and any future color fill fields. If ALL_FILLS is set, no additional fill scopes can be set.Valid scopes for FLOAT variables:ALL_SCOPESCORNER_RADIUSTEXT_CONTENTWIDTH_HEIGHTGAPSTROKE_FLOATOPACITYEFFECT_FLOATFONT_WEIGHTFONT_SIZELINE_HEIGHTLETTER_SPACINGPARAGRAPH_SPACINGPARAGRAPH_INDENTValid scopes for STRING variables:ALL_SCOPESTEXT_CONTENTFONT_FAMILYFONT_STYLEFONT_VARIATIONSValid scopes for COLOR variables:ALL_SCOPESALL_FILLSFRAME_FILLSHAPE_FILLTEXT_FILLSTROKE_COLOREFFECT_COLOR

VariableCodeSyntax

An object containing platform-specific code syntax definitions for a variable. All platforms are optional.

WEBStringANDROIDStringiOSString

EndpointsThere are three methods provided by the Variables REST API.

GET local variables: Fetch the local variables created in the file and remote variables used in the file.

GET published variables: Fetch the variables published from this file.

POST variables: Bulk create, update, and delete local variables and variable collections.

GET local variables

This API is available to full members of Enterprise orgs.

The GET /v1/files/:file_key/variables/local endpoint lets you enumerate local variables created in the file and remote variables used in the file. Remote variables are referenced by their subscribed_id.

As a part of the Variables related API additions, the GET /v1/files/:file_key endpoint now returns a boundVariables property, containing the variableId of the bound variable. The GET /v1/files/:file_key/variables/local endpoint can be used to get the full variable or variable collection object.

Note that GET /v1/files/:file_key/variables/published does not return modes. Instead, you will need to use the GET /v1/files/:file_key/variables/local endpoint, in the same file, to examine the mode values.

HTTP EndpointGET/v1/files/:file_key/variables/local

Return value{  "status": Number,  "error": Boolean,  "meta": {    "variables": {      [variableId: String]: {        "id": String,        "name": String,        "key": String,        "variableCollectionId": String,        "resolvedType": 'BOOLEAN' | 'FLOAT' | 'STRING' | 'COLOR'        "valuesByMode": {          [modeId: String]: Boolean | Number | String | Color | VariableAlias,        }        "remote": Boolean,        "description": String,        "hiddenFromPublishing": Boolean,        "scopes": VariableScope[],        "codeSyntax": VariableCodeSyntax,      }    },    "variableCollections": {      [variableCollectionId: String]: {        "id": String,        "name": String,        "key": String,        "modes": [          {            "modeId": String,            "name": String,          }        ],        "defaultModeId": String,        "remote": Boolean,        "hiddenFromPublishing": Boolean,        "variableIds": String[],        "deletedButReferenced": Boolean,        }      }    }  }}Path parametersDescriptionfile_keyStringFile to get variables from. This can be a file key or branch key. Use GET /v1/files/:key with the branch_data query param to get the branch key.Error codesDescription400Invalid parameter. The "message" parameter on the response will describe the error.401Issue with authentication. The "message" parameter on the response will describe the error.403API is not available. Possible error messages are "Limited by Figma plan," "Incorrect account type," or "Invalid scope". This could also indicate the developer / OAuth token is invalid or expired.Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)
[What's this?](#access-tokens)
Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/files/:file_key/variables/local'Log in to execute requestReturn value{  "status": Number,  "error": Boolean,  "meta": {    "variables": {      [variableId: String]: {        "id": String,        "name": String,        "key": String,        "variableCollectionId": String,        "resolvedType": 'BOOLEAN' | 'FLOAT' | 'STRING' | 'COLOR'        "valuesByMode": {          [modeId: String]: Boolean | Number | String | Color | VariableAlias,        }        "remote": Boolean,        "description": String,        "hiddenFromPublishing": Boolean,        "scopes": VariableScope[],        "codeSyntax": VariableCodeSyntax,      }    },    "variableCollections": {      [variableCollectionId: String]: {        "id": String,        "name": String,        "key": String,        "modes": [          {            "modeId": String,            "name": String,          }        ],        "defaultModeId": String,        "remote": Boolean,        "hiddenFromPublishing": Boolean,        "variableIds": String[],        "deletedButReferenced": Boolean,        }      }    }  }}Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)
[What's this?](#access-tokens)
Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/files/:file_key/variables/local'Log in to execute requestGET published variables

This API is available to full members of Enterprise orgs.

The GET /v1/files/:file_key/variables/published endpoint returns the variables that are published from the given file.

The response for this endpoint contains some key differences compared to the GET /v1/files/:file_key/variables/local endpoint:

- Each variable and variable collection contains a subscribed_id .
- Modes are omitted for published variable collections

Published variables have two ids: an id that is assigned in the file where it is created (id), and an id that is used by subscribing files (subscribed_id). The id and key are stable over the lifetime of the variable. The subscribed_id changes every time the variable is modified and published. The same is true for variable collections.

The updatedAt fields are ISO 8601 timestamps that indicate the last time that a change to a variable was published. For variable collections, this timestamp will change any time a variable in the collection is changed.

HTTP EndpointGET/v1/files/:file_key/variables/published

Return value{  "status": Number,  "error": Boolean,  "meta": {    "variables": {      [variableId: String]: {        "id": String,        "subscribed_id": String,        "name": String,        "key": String,        "variableCollectionId": String,        "resolvedType": 'BOOLEAN' | 'FLOAT' | 'STRING' | 'COLOR'        "updatedAt": String,      }    },    "variableCollections": {      [variableCollectionId: String]: {        "id": String,        "subscribed_id": String,        "name": String,        "key": String,        "updatedAt": String,      }    }  }}Path parametersDescriptionfile_keyStringFile to get variables from.
 This must be a main file key, not a branch key, as it is not possible to publish from branches.Error codesDescription400Invalid parameter. The "message" parameter on the response will describe the error.401Issue with authentication. The "message" parameter on the response will describe the error.403API is not available. Possible error messages are "Limited by Figma plan," "Incorrect account type," or "Invalid scope".Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)
[What's this?](#access-tokens)
Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/files/:file_key/variables/published'Log in to execute requestReturn value{  "status": Number,  "error": Boolean,  "meta": {    "variables": {      [variableId: String]: {        "id": String,        "subscribed_id": String,        "name": String,        "key": String,        "variableCollectionId": String,        "resolvedType": 'BOOLEAN' | 'FLOAT' | 'STRING' | 'COLOR'        "updatedAt": String,      }    },    "variableCollections": {      [variableCollectionId: String]: {        "id": String,        "subscribed_id": String,        "name": String,        "key": String,        "updatedAt": String,      }    }  }}Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)
[What's this?](#access-tokens)
Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/files/:file_key/variables/published'Log in to execute requestPOST variables

This API is available to full members of Enterprise orgs. To call this API on a file, you must have edit access to the file.

The POST /v1/files/:file_key/variables endpoint lets you bulk create, update, and delete variables and variable collections.

The request body supports the following 4 top-level arrays. Changes from these arrays will be applied in the below order, and within each array, by array order.

- variableCollections: For creating, updating, and deleting variable collections
- variableModes: For creating, updating, and deleting modes within variable collections
- Each collection can have a maximum of 40 modes
- Mode names cannot be longer than 40 characters
- variables: For creating, updating, and deleting variables
- Each collection can have a maximum of 5000 variables
- Variable names must be unique within a collection and cannot contain certain special characters such as .{}
- variableModeValues: For setting a variable value under a specific mode.
- When setting aliases, a variable cannot be aliased to itself or form an alias cycle

Temporary ids can be used to reference an object later in the same POST request body. They can be used at create time in the id property of variable collections, modes, variables, and in the initialModeId property of variable collections. They are scoped to a single request body, and must be unique within the body. The mapping of temporary ids to real ids is returned in the response.

This endpoint has the following key behaviors:

- The request body must be 4MB or less.
- Must include an action property for collections, modes, and variables to tell the API whether to create, update, or delete the object.
- When creating a collection, mode, or variable, you can include a temporary id that can be referenced in dependent objects in the same request. For example, you can create a new collection with the id "my_new_collection". You can then set variableCollectionId to "my_new_collection" in new modes or variables. Temporary ids must be unique in the request body.
- New collections always come with one mode. You can reference this mode by setting initialModeId to a temporary id in the request body. This is useful if you want to set values for variables in the mode in the variableModeValues array.
- The tempIdToRealId array returns a mapping of the temporary ids in the request, to the real ids of the newly created objects.
- When adding new modes or variables, default variable values will be applied, consistent with what happens in the UI.
- Everything to be created, updated, and deleted in the request body is treated as one atomic operation. If there is any validation failure, you will get a 400 status code response, and no changes will be persisted.
- You will not be able to update remote variables or variable collections. You can only update variables in the file where they were originally created.

WARNING

If a string variable is bound to a text node content in the same file, and the text node uses a [shared font in the organization](https://help.figma.com/hc/articles/360039956774)
, that variable cannot be updated and will result in a 400 response.

The below types are accepted in the request body for this endpoint:

VariableCollectionChange

An object that contains details about the desired VariableCollection change.

action"CREATE" | "UPDATE" | "DELETE" Set this depending on the action you want to perform. Always required.idString Required for UPDATE or DELETE, optional for CREATE. This is the id of the target Variable Collection. For CREATE, you can provide a temporary id.nameString Required for CREATE, optional for UPDATE. The name of the variable collection.initialModeIdString Optional for CREATE. The initial mode refers to the mode that is created by default. You can set a temporary id here, in order to reference this mode later in this request.hiddenFromPublishingBoolean default: false Whether this variable collection is hidden when publishing the current file as a library.

VariableModeChange

An object that contains details about the desired variable mode change.

action"CREATE" | "UPDATE" | "DELETE" Set this depending on the action you want to perform. Always required.idString Required for UPDATE or DELETE, optional for CREATE. This is the id of the target variable mode. For CREATE, you can provide a temporary id.nameString Required for CREATE, optional for UPDATE. The name of the mode.variableCollectionIdString Required. The variable collection that contains or will contain the mode. You can use the temporary id of a variable collection.

VariableChange

An object that represents the action you want to take with a variable.

action"CREATE" | "UPDATE" | "DELETE" Set this depending on the action you want to perform. Always required.idString Required for UPDATE or DELETE, optional for CREATE. This is the id of the target variable. For CREATE, you can provide a temporary id.nameString Required for CREATE, optional for UPDATE. The name of the variable.variableCollectionIdString Required for CREATE. The variable collection that contains or will contain the variable. You can use the temporary id of a variable collection.resolvedType"BOOLEAN" | "FLOAT" | "STRING" | "COLOR" Required for CREATE. The resolved type of the variable.descriptionString Description of this variable. Optional.hiddenFromPublishingBoolean default: false Whether this variable is hidden when publishing the current file as a library.If the parent VariableCollection is marked as hiddenFromPublishing, then this variable will also be hidden from publishing via the UI. hiddenFromPublishing is independently toggled for a variable and collection. However, both must be true for a given variable to be publishable.scopes[VariableScope](#variablescope-type)
[] An array of scopes in the UI where this variable is shown. Setting this property will show/hide this variable in the variable picker UI for different fields.Setting scopes for a variable does not prevent that variable from being bound in other scopes (for example, via the Plugin API). This only limits the variables that are shown in pickers within the Figma UI.codeSyntax[VariableCodeSyntax](#variablecodesyntax-type)
 Code syntax definitions for this variable. Code syntax allows you to represent variables in code using platform-specific names, and will appear in [Dev Mode](https://help.figma.com/hc/articles/15023124644247)
's code snippets when inspecting elements using the variable.

VariableModeValue

An object that represents a value for a given mode of a variable. All properties are required.

variableIdString The target variable. You can use the temporary id of a variable.modeIdString Must correspond to a mode in the variable collection that contains the target variable.valueBoolean | Number | String | [Color](#color-type)
 | [VariableAlias](#variablealias-type)
 The value for the variable. The value must match the variable's type. If setting to a variable alias, the alias must resolve to this type. 

HTTP EndpointPOST/v1/files/:file_key/variables

Return value{  "status": Number,  "error": Boolean,  "meta": {    "tempIdToRealId": {      [temporaryId: String]: String    }  }}Path parametersDescriptionfile_keyStringFile to modify variables in. This can be a file key or branch key. Use GET /v1/files/:key with the branch_data query param to get the branch key.Body parametersDescriptionvariableCollections[VariableCollectionChange](#variablecollectionchange-type)
[]optionalFor creating, updating, and deleting variable collections.variableModes[VariableModeChange](#variablemodechange-type)
[]optionalFor creating, updating, and deleting modes within variable collections.variables[VariableChange](#variablechange-type)
[]optionalFor creating, updating, and deleting variables.variableModeValues[VariableModeValue](#variablemodevalue-type)
[]optionalFor setting a specific value, given a variable and a mode.Error codesDescription400Invalid parameter, the "message" property will indicate which parameter is invalid403API is not available. Possible error messages are "Limited by Figma plan", "Incorrect account type", "Invalid scope", "Insufficient file permissions", or "API only available for design files". This could also indicate the developer / OAuth token is invalid or expired.404The specified file was not found413Request payload too large. The max allowed body size is 4MB.Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)
[What's this?](#access-tokens)
Your cURL commandcurl -X POST -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/files/:file_key/variables'Log in to execute requestReturn value{  "status": Number,  "error": Boolean,  "meta": {    "tempIdToRealId": {      [temporaryId: String]: String    }  }}Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)
[What's this?](#access-tokens)
Your cURL commandcurl -X POST -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/files/:file_key/variables'Log in to execute requestExamplesThe following examples are request bodies for the POST variables endpoint.

To create a new variable collection:

{
 "variableCollections": [
 {
 "action": "CREATE",
 "name": "Example variable collection"
 }
 ]
}To create a variable in an existing variable collection:

{
 "variables": [
 {
 "action": "CREATE",
 "name": "New Variable",
 "variableCollectionId": "VariableCollectionId:1:2",
 "resolvedType": "FLOAT"
 }
 ]
}To create a variable mode in an existing variable collection:

{
 "variableModes": [
 {
 "action": "CREATE",
 "name": "New Mode",
 "variableCollectionId": "VariableCollectionId:1:2"
 }
 ]
}To set a value for an existing variable:

{
 "variableModeValues": [
 {
 "variableId": "VariableID:2:3",
 "modeId": "1:0",
 "value": { "r": 1, "g": 0, "b": 0 }
 }
 ]
}To set a variable alias to an existing variable:

{
 "variableModeValues": [
 {
 "variableId": "VariableID:2:4",
 "modeId": "1:0",
 "value": { "type": "VARIABLE_ALIAS", "id": "VariableID:1:3"}
 }
 ]
}To rename an existing variable:

{
 "variables": [
 {
 "action": "UPDATE",
 "id": "VariableID:1:3",
 "name": "New Variable"
 }
 ]
}To set code syntax for a variable:

{
 "variables": [
 {
 "action": "UPDATE",
 "id": "VariableID:1:3",
 "codeSyntax": { "WEB":
 "variable-name",
 "ANDROID": "variableName",
 "iOS": "variableName"
 }
 }
 ]
}To rename an existing variable mode:

{
 "variableModes": [
 {
 "action": "UPDATE",
 "id": "1:0",
 "name": "New Mode Name",
 "variableCollectionId": "VariableCollectionId:1:2"
 }
 ]
}To create a new variable collection that contains a variable:

{
 "variableCollections": [
 {
 "action": "CREATE",
 "id": "my_variable_collection", // sets a temporary id for the variable collection
 "name": "New Variable Collection",
 "initialModeId": "my_mode" // sets a temporary id for the initial variable mode
 }
 ],
 "variableModes": [
 {
 "action": "UPDATE",
 "id": "my_mode",
 "name": "My Mode", // rename the initial variable mode
 "variableCollectionId": "my_variable_collection" // uses the temporary id of the variable collection
 }
 ],
 "variables": [
 {
 "action": "CREATE",
 "id": "my_variable",
 "name": "float variable",
 "resolvedType": "FLOAT",
 "variableCollectionId": "my_variable_collection" // uses the temporary id of the variable collection
 }
 ],
 "variableModeValues": [
 {
 "variableId": "my_variable", // uses the temporary id of the variable
 "modeId": "my_mode", // uses the temporary id of the variable mode
 "value": 100
 }
 ]
}To delete a variable mode:

{
 "variableModes": [
 {
 "action": "DELETE",
 "id": "2:0",
 "variableCollectionId": "VariableCollectionId:2:3"
 }
 ]
}
