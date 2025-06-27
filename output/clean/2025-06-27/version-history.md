---
title: version-history
slug: version-history
source_file: rest-api-version-history.html
source_url: https://www.figma.com/developers/api#version-history
doc_type: rest-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 95157e1ea3f87126
token_count: 623
---
Version historyFigma allows you to distinguish different stages or Versions of a file, as the file evolves over time. This is all recorded in the Version history, which allows users to view, track and restore previous versions of a File.IMPORTANT: The order of versions returned by GET file versions has changed. Versions are now ordered explicitly by when they were created. As a part of this change, the URL format for next_page and prev_page has also changed.For more information, see the [changelog](#20241022-version-history-urls)
.TypesFigma will record some basic information about the file, like the who and when, as well as allow the user to determine a title and description for the version. These form the basis of the properties associated with version history.TypePropertiesVersionA version of a fileidString Unique identifier for versioncreated_atString The UTC ISO 8601 time at which the version was createdlabelString The label given to the version in the editordescriptionString The description of the version as entered in the editoruser[User](#user-type)
 The user that created the versionEndpointsThis endpoint fetches the version history of a file, allowing you to see the progression of a file over time. You can then use this information to render a specific version of the file, via another endpoint.GET file versionsA list of the versions of a file.

HTTP EndpointGET/v1/files/:key/versions

Return value{  "versions": [Version](#version-type)
[],  "pagination": {     "prev_page": String,     "next_page": String   }}Path parametersDescriptionkeyStringFile to get version history from. This can be a file key or branch key. Use GET /v1/files/:key with the branch_data query param to get the branch key.Error codesDescription403The developer / OAuth token is invalid or expired404The specified file was not foundTry it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)
[What's this?](#access-tokens)
Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/files/:file_key/versions'Log in to execute requestReturn value{  "versions": [Version](#version-type)
[],  "pagination": {     "prev_page": String,     "next_page": String   }}Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)
[What's this?](#access-tokens)
Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/files/:file_key/versions'Log in to execute request