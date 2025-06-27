---
title: Complete Section
slug: authentication-complete-section
source_file: rest-api-authentication.html
source_url: 'https://www.figma.com/developers/api#authentication'
doc_type: rest-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 7cbb014423ca7216
token_count: 3821
chunk_title: Complete Section
chunk_slug: authentication-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: authentication.md
parent_slug: authentication
char_count: 13372
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

AuthenticationBefore you can access an endpoint within Figma, you will need to provide valid authentication. You can authenticate your request to the Figma API in two ways:

1. Generate a personal access token through your user profile page. This gives you access to the Figma API as if you were a single user.
2. Recommended: register a callback via OAuth2 and collect a client secret. This allows you non-specific access to the Figma API, without having to act on behalf of a specific user.

Access tokensA personal access token gives the holder access to an account through the API as if they were the user who generated the token.Generate a personal access token

1. Login to your Figma account.
2. From the file browser, click the account menu in the top-left corner and select Settings.
3. Select the Security tab.
4. In the Personal access tokens section, click Generate new token to open the configuration modal.
5. Set the expiration and scopes for the token. The scopes will determine which endpoints the token has access to.
6. Click Generate token. This will be your only chance to copy the token, so make sure you keep a copy of this in a secure place.

From the Security tab of your account settings, you can hover over the name of an existing token to see what scopes it has. You can also see when the token was last used (give or take a few minutes). If you see any activity on a token that you did not initiate, revoke the token immediately. Revocations are instant and can be made at any time.

You can also generate an access token from this page to explore our endpoints. The token generated here will expire in 24 hours.

Use the personal access tokenYou can now use the token to make requests to the Figma API. You can do so by passing the token to the API in the X-Figma-Token header of your request. We’ve shown you an example of how this would look.

Using the token to make requests$ curl -sH 'X-Figma-Token: 29-206...'
 'https://api.figma.com/v1/files/...'
 | python -m json.tool
{
 "components": {},
 "document": {
 "children": [
 {
 "backgroundColor": {
 "a": 1,
 "b": 0.8980392156862745,
 "g": 0.8980392156862745,
 "r": 0.8980392156862745
 },
 "children": [],
 "exportSettings": [],
 "id": "0:1",
 "name": "Page 1",
 "type": "CANVAS",
 }
 ],
 "id": "0:0",
 "name": "Document",
 "type": "DOCUMENT",
 },
 "schemaVersion": 0
}[Log in to generate an access token](/login?cont=/developers/docs)
[What's this?](#access-tokens)
Using the token to make requests$ curl -sH 'X-Figma-Token: 29-206...'
 'https://api.figma.com/v1/files/...'
 | python -m json.tool
{
 "components": {},
 "document": {
 "children": [
 {
 "backgroundColor": {
 "a": 1,
 "b": 0.8980392156862745,
 "g": 0.8980392156862745,
 "r": 0.8980392156862745
 },
 "children": [],
 "exportSettings": [],
 "id": "0:1",
 "name": "Page 1",
 "type": "CANVAS",
 }
 ],
 "id": "0:0",
 "name": "Document",
 "type": "DOCUMENT",
 },
 "schemaVersion": 0
}OAuth 2[OAuth 2](https://oauth.net/2/)
 is a web security protocol that allows 3rd party applications to establish a link between a user’s account and their access to a given API, on behalf of that user. We support OAuth 2 authentication in addition to personal access tokens. You would use OAuth 2 when you would like to access the Figma API, without having to identify yourself as a specific user.To get started with OAuth 2:

1. Register an application via your Figma account.
2. Authenticate any users.
3. Use the OAuth 2 Token.
4. Refresh an OAuth 2 Token.

Register an ApplicationRegistering an OAuth app lets you establish links between existing Figma user accounts and your application, which allows you to access data on the user's behalf with Figma's APIs.

To register an OAuth app:

1. Click My apps in the top toolbar, or go to figma.com/developers/apps.
2. In the upper-right corner of the page, click Create a new app.
3. Add the required details for your application:Enter the name and website for your app.Upload a logo for your application (users will be able to see this).
4. Enter the name and website for your app.
5. Upload a logo for your application (users will be able to see this).
6. Click Save to create the app.
7. You will be given your client ID and client secret. This will allow you to access the Figma API. The client secret will only be shown to you once! Copy it now and store it securely.
8. In the list of your apps, click the app you just created.
9. In the modal for your app, click OAuth 2.0, and then Add a redirect URL. Redirect URLs are callbacks that can be any endpoint or URL of your choosing. Only URLs appearing in this list are allowed to receive the access token.

You're now ready to authenticate users via your app!

Authenticate usersTo authenticate any users, ask them to visit the following URL: 

GET https://www.figma.com/oauth?
 client_id=:client_id&
 redirect_uri=:callback&
 scope=:scope&
 state=:state&
 response_type=codeImportant: this URL must be accessed via the user's browser and not an embedded webview inside your application. Webview access to the Figma OAuth flow is not supported and may stop working for some or all users without an API version update.

ParameterDescriptionclient_idThe client ID for your app.redirect_uriThis must be one of the redirect URLs you set as a callback for your OAuth app. The auth page will call this URI if the user allows access to your app.scopeA space-separated or comma-separated list of [scopes](#authentication-scopes)
 that you need for your application. Scopes determine which endpoints can be accessed. For example, if your application needs to read files and post comments, your scope value would be files:read,file_comments:write.stateThis is a value that you should randomly generate and store. When we call back to your callback endpoint, you should check that the state value we pass back to you matches the state value that you initially used in your request.response_typeCurrently we only support the authorization code flow for OAuth 2, so the only valid value here is code. We may support other values in the future.code_challengeOptional but highly recommended. If you are using PKCE (proof key for code exchange), you must provide a code challenge. Only the S256 method for generating the code challenge is supported.Once the user navigates to this address, they will see a screen like the following:

If the user rejects the request, no callback is triggered.

At this point, the client will be redirected to the callback that was passed as redirect_uri.

If the redirect URI that was provided is https://example.com/oauth/callback, then the expected callback request would look like: https://example.com/oauth/callback?code=:code&state=:state

- :code here refers to the authentication code that can be traded in for an access token.
- :state refers to the state variable that was in the initial url given to the user.

Please check that the state parameter passed back to you is the same as the one originally generated.

Exchanging the authentication code for an access tokenNow the code can be passed back to the OAuth API to get the user's access token. Make a POST request to https://api.figma.com/v1/oauth/token. Include the Content-Type: application/x-www-form-urlencoded header.

Use the HTTP Basic Authentication scheme to send your client_id and client_secret in the request. First, concatenate your client ID and client secret with a colon (i.e. client_id:client_secret). Then, Base64 encode the resulting string and include it in the Authorization header. The header should be formatted like:

Authorization: Basic <BASE64_ENCODED_CLIENT_ID_AND_SECRET>The request body should use the following format:

redirect_uri=:callback&code=:code&grant_type=authorization_codeMake sure to [URL-encode](https://en.wikipedia.org/wiki/Percent-encoding)
 the parameter values. The list of parameters is:

ParameterDescriptionredirect_uriThis must match the must match the redirect URI originally provided, and code must match the authentication code provided to your callback.codeThis is the code given to you in the callback request.grant_typeThis must be authorization_code.code_verifierIf you used the PKCE flow, you must provide the verifier that you used to generate the code challenge.If the parameters are valid, you will receive the user access token and token expiration (in seconds) in a JSON response with the following structure:

{
 "user_id_string": <USER ID for the user who authorized the app>,
 "access_token": <TOKEN>,
 "token_type": "bearer",
 "expires_in": <EXPIRATION (in seconds)>,
 "refresh_token": <REFRESH TOKEN>
}Note: this response may also contain a numeric user_id property. This property is deprecated; please use user_id_string instead. Figma user IDs appear to be numeric, but many cannot be represented in common number formats such as JavaScript numbers and Go's float64.

Using the OAuth 2 TokenOnce you have obtained the user access token, using it is very similar to the way you use [personal access tokens.](#access-tokens)

When you call the API, pass a Bearer authorization header like so:

$ curl -sH 'Authorization: Bearer <TOKEN>'
 'https://api.figma.com/v1/files/...'
 | python -m json.tool
{
 "components": {},
 "document": {
 "children": [
 {
 "backgroundColor": {
 "a": 1,
 "b": 0.8980392156862745,
 "g": 0.8980392156862745,
 "r": 0.8980392156862745
 },
 "children": [],
 "exportSettings": [],
 "id": "0:1",
 "name": "Page 1",
 "type": "CANVAS",
 }
 ],
 "id": "0:0",
 "name": "Document",
 "type": "DOCUMENT",
 },
 "schemaVersion": 0
}Refreshing OAuth tokensBy default OAuth tokens expire after 90 days so you will need to refresh your stored tokens if your integration is long-lived. You do this using a refresh token.

A refresh token can be reused as many times as necessary to retrieve a new access token. To do this, make a POST request to https://api.figma.com/v1/oauth/token. Include the Content-Type: application/x-www-form-urlencoded header.

Use the HTTP Basic Authentication scheme to send your client_id and client_secret in the request. First, concatenate your client ID and client secret with a colon (i.e. client_id:client_secret). Then, Base64 encode the resulting string and include it in the Authorization header. The header should be formatted like:

Authorization: Basic <BASE64_ENCODED_CLIENT_ID_AND_SECRET>The request body should use the following format:

refresh_token=:token&grant_type=refresh_tokenMake sure to [URL-encode](https://en.wikipedia.org/wiki/Percent-encoding)
 the parameter values and place them in the request body. The list of parameters is:

ParameterDescriptionrefresh_tokenThe refresh token you received during the initial authorization flow.grant_typeThis must be refresh_token.If the parameters are valid, you will receive the user access token and token expiration (in seconds) in a JSON response with the following structure:

{
 "access_token": <TOKEN>,
 "token_type": "bearer",
 "expires_in": <EXPIRATION (in seconds)>,
}ScopesScopes for [personal access tokens](#access-tokens)
 and [OAuth 2 tokens](#oauth2)
 determine which endpoints can be accessed.The following table lists the scopes that are available.

Important: Scopes do not supersede the permissions granted to you by an organization or the owner of a project, team, or file.For example, even if your token uses the files:read scope, you can only access files that you've created or that have been shared with you (whether shared directly, or because you belong to a corresponding project or team). Similarly, if you listed projects and teams, you'd only see the projects and teams that you can access in Figma's file browser.

ScopeDescriptioncurrent_user:readRead your name, email, and profile image.file_comments:readRead the comments for files.file_comments:writePost and delete comments and comment reactions in files.file_content:readRead the contents of files, such as nodes and the editor type.file_dev_resources:readRead dev resources in files.file_dev_resources:writeWrite dev resources to files.file_metadata:readRead metadata of files.file_variables:readRead variables in files. Note: Enterprise plan only.file_variables:writeWrite variables and collections in files. Note: Enterprise plan only.file_versions:readRead the version history for files you can access.files:readDeprecated. Read files, projects, users, versions, comments, components, styles, and webhooks. While this scope will continue to work, it's highly recommended you use the granular scopes Figma provides. Because files:read is extremely permissive, more limited scopes such as file_content:read and file_comments:read provide enhanced security and stability by reducing the surface of access to your files.library_analytics:readRead your design system analytics. Note: Enterprise plan only.library_assets:readRead data of individual published components and styles.library_content:readRead published components and styles of files.org:activity_log_readRead organization activity logs. Note: Enterprise plan only. [Must be an organization admin.](#activity_logs)
projects:readList projects and files in projects.team_library_content:readRead published components and styles of teams.webhooks:readRead metadata of webhooks.webhooks:writeCreate and manage webhooks.Note: the file_read scope is deprecated for OAuth 2 tokens. Please migrate your application to use the scopes above.
