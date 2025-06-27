---
title: users
slug: users
source_file: rest-api-users.html
source_url: https://www.figma.com/developers/api#users
doc_type: rest-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 007488bd67f08a81
token_count: 340
---
UsersA user is a Figma account of an individual that has signed up for Figma and created an account.TypesEvery user will have recorded―and can be identified by―the following four properties:TypePropertiesUserA description of a useridString Unique stable id of the userhandleString Name of the userimg_urlString URL link to the user's profile imageemailString Email associated with the user's account. This will only be present on the /v1/me endpointEndpointsYou can use the users endpoint to access information regarding the currently authenticated user. When using OAuth 2, the user in question must be authenticated through the Figma API to access their information. GET meIf you are using OAuth for authentication, this endpoint can be used to get user information for the authenticated user.

HTTP EndpointGET/v1/me

Return value[User](#user-type)Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/me'Log in to execute requestReturn value[User](#user-type)Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/me'Log in to execute request