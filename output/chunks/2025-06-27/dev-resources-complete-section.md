---
title: Complete Section
slug: dev-resources-complete-section
source_file: rest-api-dev-resources.html
source_url: 'https://www.figma.com/developers/api#dev-resources'
doc_type: rest-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: bf8d3cbbd7bb4f37
token_count: 2338
chunk_title: Complete Section
chunk_slug: dev-resources-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: dev-resources.md
parent_slug: dev-resources
char_count: 8180
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

Dev ResourcesDev resources are developer-contributed urls that are attached to nodes in files and are shown in Figma Dev Mode.

Getting startedThe Dev Resources REST API lets you manage the dev resources available in Figma Dev Mode. Dev resources can be added to any node in a file.

Unlike variables, components, and styles, dev resources do not need to be published. Dev resources are available immediately when they are created or updated. For example, dev resources added or updated on published components are immediately available in other files where the components are used. The component does not need to be republished.

Use the Dev Resources REST API to integrate bi-directional linking between Figma and your products and workflows.

For a practical example of the Dev Resources API at work, check out [Figma's Jira integration](https://help.figma.com/hc/articles/360039827834-Jira-and-Figma)
. The [Figma plugin and app for Jira](https://help.figma.com/hc/articles/360039827834-Jira-and-Figma)
 use the Dev Resources API in the following ways:

- In Jira, when you link to a Figma file from a Jira issue, the Dev Resources API is used to automatically add a dev resource to the linked Figma file. The dev resource links back to the Jira issue.
- In Figma, when you add a dev resource that links to a Jira issue, the Dev Resources API is used to update the corresponding Jira issue with a link back to the Figma file.

The Dev Resources API can also be used to programmatically extract all of the resources that designers and contributors add to Figma files.

TypesNamePropertiesDevResourceA dev resource in a fileidString Unique identifier of the dev resourcenameString The name of the dev resource.urlString The URL of the dev resource.file_keyString The file key where the dev resource belongs.node_idString The target node to attach the dev resource to.DevResourceCreatePayload to create a dev resource in a filenameString The name of the dev resource.urlString The URL of the dev resource.file_keyString The file key where the dev resource belongs. This must be a main file key, not a branch key.node_idString The target node to attach the dev resource to.DevResourceUpdatePayload to update a dev resource in a fileidString Unique identifier of the dev resourcenameString The name of the dev resource.urlString The URL of the dev resource.EndpointsDev Resources endpoints allow you to create, read, update, and delete dev resources in Figma files.GET dev resources

Get dev resources in a file.

HTTP EndpointGET/v1/files/:file_key/dev_resources

Return value{  "dev_resources": [DevResource](#devresource-type)
[]}Path parametersDescriptionfile_keyStringThe file to get the dev resources from.
 This must be a main file key, not a branch key.Query parametersDescriptionnode_idsStringoptionalComma separated list of nodes that you care about in the document. If specified, only dev resources attached to these nodes will be returned. If not specified, all dev resources in the file will be returned.Error codesDescription400Invalid parameter. The "message" parameter on the response will describe the error.401Issue with authentication. The "message" parameter on the response will describe the error.Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)
[What's this?](#access-tokens)
Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/files/:file_key/dev_resources'Log in to execute requestReturn value{  "dev_resources": [DevResource](#devresource-type)
[]}Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)
[What's this?](#access-tokens)
Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/files/:file_key/dev_resources'Log in to execute requestPOST dev resources

Bulk create dev resources across multiple files.

Dev resources that are successfully created will show up in the links_created array in the response.

If there are any dev resources that cannot be created, you may still get a 200 response. These resources will show up in the errors array. Some reasons a dev resource cannot be created include:

- Resource points to a file_key that cannot be found.
- The node already has the maximum of 10 dev resources.
- Another dev resource for the node has the same url.

HTTP EndpointPOST/v1/dev_resources

Return value{  "links_created": [DevResource](#devresource-type)
[]  "errors": [    {      "file_key": String | null,      "node_id": String | null,      "error": String,    },    ...  ]}Body parametersDescriptiondev_resources[DevResourceCreate](#devresourcecreate-type)
[]A list of dev resources that you want to create.Error codesDescription400Invalid parameter. The "message" parameter on the response will describe the error.401Issue with authentication. The "message" parameter on the response will describe the error.Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)
[What's this?](#access-tokens)
Your cURL commandcurl -X POST -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/dev_resources'Log in to execute requestReturn value{  "links_created": [DevResource](#devresource-type)
[]  "errors": [    {      "file_key": String | null,      "node_id": String | null,      "error": String,    },    ...  ]}Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)
[What's this?](#access-tokens)
Your cURL commandcurl -X POST -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/dev_resources'Log in to execute requestPUT dev resources

Bulk update dev resources across multiple files.

Ids for dev resources that are successfully updated will show up in the links_updated array in the response.

If there are any dev resources that cannot be updated, you may still get a 200 response. These resources will show up in the errors array.

HTTP EndpointPUT/v1/dev_resources

Return value{  "links_updated": String[]  "errors": [    {      "id": String,      "error": String,    },    ...  ]}Body parametersDescriptiondev_resources[DevResourceUpdate](#devresourceupdate-type)
[]A list of dev resources that you want to update.Error codesDescription400Invalid parameter. The "message" parameter on the response will describe the error.401Issue with authentication. The "message" parameter on the response will describe the error.Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)
[What's this?](#access-tokens)
Your cURL commandcurl -X PUT -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/dev_resources'Log in to execute requestReturn value{  "links_updated": String[]  "errors": [    {      "id": String,      "error": String,    },    ...  ]}Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)
[What's this?](#access-tokens)
Your cURL commandcurl -X PUT -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/dev_resources'Log in to execute requestDELETE dev resources

Delete a dev resources from a file.

HTTP EndpointDELETE/v1/files/:file_key/dev_resources/:dev_resource_id

Return valueNothing is returned from this endpointPath parametersDescriptionfile_keyStringFile to delete dev resource fromdev_resource_idStringDev Resource id of dev resource to deleteError codesDescription401Issue with authentication. The "message" parameter on the response will describe the error.404The specified dev resource / file was not foundTry it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)
[What's this?](#access-tokens)
Your cURL commandcurl -X DELETE -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/files/:file_key/dev_resources/:dev_resource_id'Log in to execute requestReturn valueNothing is returned from this endpointTry it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)
[What's this?](#access-tokens)
Your cURL commandcurl -X DELETE -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/files/:file_key/dev_resources/:dev_resource_id'Log in to execute request
