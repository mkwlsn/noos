---
title: webhooks_v2
slug: webhooks_v2
source_file: rest-api-webhooks_v2.html
source_url: https://www.figma.com/developers/api#webhooks_v2
doc_type: rest-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 2bc7ae79d68d95f8
token_count: 7501
---
Webhooks V2Getting startedWebhooks allow you to observe when specific events happen in files. For example: a collaborator comments on a file, or you add a new version to a file's history.

Using these events as triggers, you can build integrations with other applications. This can help to improve workflows, or extend the functionality of your design system.

Webhooks are attached to a given context. Webhook contexts include teams, projects, and files. Admins on a team can create and manage webhooks for a given context, such as the team itself, or files and projects within the team. The individual who can create a webhook depends on the context:

- Team context: Team admins can create webhooks for a team
- Project context: Any user with Can edit permission on a project can create webhooks for that project
- File context: Any user with Can edit permission on a file can create webhooks for that file

The limits for how many webhooks you can attach depend on the type of context:

- Team: 20 webhooks per team
- Project: 5 webhooks per project
- File: 3 webhooks per file

For the file context specifically, the total number of file webhooks you can create depends on your plan:

- Professional: 150 webhooks
- Organization: 300 webhooks
- Enterprise: 600 webhooks

For the team context, webhooks will notify based on the availability of the team:

- Webhooks will notify for files that are available to everyone on the team, or are in view-only projects. 
- Webhooks will not notify for files in invite-only projects. 

Every payload (except for PING) will contain the file name, file key and information related to the event triggered. This allows you to see which file triggered the event. Figma does not currently have an interface for webhooks. At the moment, you must create, modify, and delete webhooks through the Webhooks API.

When you want to review what webhooks exist for a given context, or for all contexts that you have access to on your plan, you can use GET /v2/webhooks.

- For specific contexts, you'll specify the context and context_id to get all of the webhooks attached to that context.
- For all contexts in your plan, you'll specify plan_api_id. The response will include a list of the contexts with webhooks, and the webhooks attached to those contexts.Your plan_api_id is constructed by combining the type of plan you have with the id of your team or organization. You can get your organization or team id from a Figma URL. For example:Professional plan: The team id follows the /team/ part of the URL. For example, in https://www.figma.com/files/team/1170245155647481265/, the team id is 1170245155647481265.Organization plan: The organization id follows the /files/ part of the URL. For example, in https://www.figma.com/files/1055436674972719015, the organization id is 1055436674972719015.To construct your plan_api_id, append your team or organization id to team- or organization- (the type of plan you have). For example:team-1170245155647481265 for the Professional plan, or organization-1055436674972719015 for the Organization plan.

To get started with webhooks:Setup your local webserver and expose the endpointFigma recommends using a tool similar to [ngrok](https://ngrok.com/) to expose a public URL for your local webserver.Configure your server to handle POST requests with a JSON payload Your server should return the status code 200 OK when it receives a webhook request. If it returns another status code, or takes too long, the Figma API will treat this as an error. Figma retries failed requests 3 times with an exponential backoff strategy.

- The first retry occurs 5 minutes after the first failure.
- The second retry occurs 30 minutes after the second failure.
- The final retry occurs 3 hours after the third failure.

Figma does not currently deactivate endpoints with frequent errors.Create your webhookUse the [POST Webhook](#webhooks-v2-post-endpoint) endpoint to attach a webhook to a context. If you are successful, you will receive a PING event. This means your webhook is working and will receive any updates.

If you are having problems with your webhook, you can query the [webhook requests endpoint](#webhooks-v2-requests-endpoint). This will list all requests and responses within the past seven days.

EventsEvent nameTrigger conditionPING Triggers when a webhook is created. Used for debugging. Cannot be subscribed to, all webhooks will receive PING events.FILE_UPDATE Triggers within 30 minutes of editing inactivity in a file.FILE_VERSION_UPDATE Triggers whenever a named version is created in the version history of a file.FILE_DELETE Triggers whenever a file has been deleted. If you subscribe to FILE_UPDATE, you automatically get these notifications. Note that this does not trigger on all files within a folder, if the folder is deleted.LIBRARY_PUBLISH Triggers whenever a library file is published.FILE_COMMENT Triggers when someone comments on a file.DEV_MODE_STATUS_UPDATE Triggers whenever the Dev Mode status for a layer in a file changes.PayloadsTypePropertiesPING Debug event triggered whenever a webhook is created. Use this to verify that your endpoint was setup correctly. 

event_typeString The type of event that triggered this webhook callpasscodeString The passcode specified when the webhook was created, should match what was initially providedtimestampString UTC ISO 8601 timestamp of when the event was triggered.webhook_idNumber The id of the webhook that caused the callback> Example{
 "event_type": "PING",
 "passcode": "secretpasscode",
 "timestamp": "2020-02-23T20:27:16Z",
 "webhook_id": "22"
 }FILE_UPDATETriggers within 30 minutes of editing inactivity in a file.

 This is useful when you want to stay up-to-date with the contents of a file. For example, you could generate a static website from your Figma document and keep it always up-to-date with this webhook.

event_typeString The type of event that triggered this webhook callfile_keyString The key of the file that was updatedfile_nameString The name of the file that was updatedpasscodeString The passcode specified when the webhook was created, should match what was initially providedtimestampString UTC ISO 8601 timestamp of when the event was triggered.webhook_idNumber The id of the webhook that caused the callback> Example{
 "event_type": "FILE_UPDATE",
 "file_key": "CL06nJNn5eZLQKDoARMND5",
 "file_name": "Developer page mockup demo",
 "passcode": "secretpasscode",
 "timestamp": "2020-02-23T20:27:16Z",
 "webhook_id": "22"
 }FILE_DELETE Triggers whenever a file is trashed. Note if a folder is deleted, this event will not trigger for files within the folder.

 This event will also be sent out to webhooks that subscribe to FILE_UPDATE.

event_typeString The type of event that triggered this webhook callfile_keyString The key of the file that was updatedfile_nameString The name of the file that was updatedpasscodeString The passcode specified when the webhook was created, should match what was initially providedtimestampString UTC ISO 8601 timestamp of when the event was triggered.triggered_by[User](#user-type) The user that deleted the file and triggered this eventwebhook_idNumber The id of the webhook that caused the callback> Example{
 "event_type": "FILE_DELETE",
 "file_key": "CL06nJNn5eZLQKDoARMND5",
 "file_name": "Developer page mockup demo",
 "passcode": "secretpasscode",
 "timestamp": "2020-02-23T20:27:16Z",
 "triggered_by": {
 "id": "813845097374535682",
 "handle": "Dylan Field"
 },
 "webhook_id": "22"
 }FILE_VERSION_UPDATE Triggers whenever a user creates a named version in the version history of a file. 

 This is useful for workflow integrations. For example, suppose you have a Figma document with icon assets. When the design for an asset is updated and ready to publish, you can have a member of the team tag that version in the version history and then use this webhook event to generate and deploy your new asset version. 

created_atString UTC ISO 8601 timestamp of when the version was createddescriptionString Description of the version in the version historyevent_typeString The type of event that triggered this webhook callfile_keyString The key of the file that was updatedfile_nameString The name of the file that was updatedlabelString Label of the version in the version historypasscodeString The passcode specified when the webhook was created, should match what was initially providedtimestampString UTC ISO 8601 timestamp of when the event was triggeredtriggered_by[User](#user-type) The user that created the named version and triggered this eventversion_idString ID of the published versionwebhook_idNumber The id of the webhook that caused the callback> Example{
 "created_at": "2020-02-23T20:27:16Z"",
 "description": "Wrote new documentation for webhooks v2",
 "event_type": "FILE_VERSION_UPDATE",
 'file_key': 'CL06nJNn5eZLQKDoARMND5',
 "file_name": "Developer page mockup demo",
 "label": "Added new documentation!",
 "passcode": "secretpasscode",
 "timestamp": "2020-02-23T20:27:16Z",
 "triggered_by": {
 "id": "813845097374535682",
 "handle": "Dylan Field"
 },
 "version_id": "443",
 "webhook_id": "22"
 }LIBRARY_PUBLISH Triggers whenever a user publishes a library file. 

This is useful for workflow integrations. This webhook could integrate with Slack, Asana or Jira, notifying designers to modify their assets when new components are published.

Note: depending on the type and number of assets that were published, a single publication may be delivered via multiple, separate LIBRARY_PUBLISH webhook events. There will be a separate LIBRARY_PUBLISH event for each type of published library asset (components, styles, and/or variables). Additionally, publications with a large number of assets (typically hundreds) will also be split into multiple separate events.

created_components[LibraryItemData](#libraryitemdata-type)[] Components that were created by the library publishcreated_styles[LibraryItemData](#libraryitemdata-type)[] Styles that were created by the library publishcreated_variables[LibraryItemData](#libraryitemdata-type)[] Variables that were created by the library publishmodified_components[LibraryItemData](#libraryitemdata-type)[] Components that were modified by the library publishmodified_styles[LibraryItemData](#libraryitemdata-type)[] Styles that were modified by the library publishmodified_variables[LibraryItemData](#libraryitemdata-type)[] Variables that were modified by the library publishdeleted_components[LibraryItemData](#libraryitemdata-type)[] Components that were deleted by the library publishdeleted_styles[LibraryItemData](#libraryitemdata-type)[] Styles that were deleted by the library publishdeleted_variables[LibraryItemData](#libraryitemdata-type)[] Variables that were deleted by the library publishdescriptionString Description of the library publishevent_typeString The type of event that triggered this webhook callfile_keyString The key of the file that was updatedfile_nameString The name of the file that was updatedpasscodeString The passcode specified when the webhook was created, should match what was initially providedtimestampString UTC ISO 8601 timestamp of when the event was triggeredtriggered_by[User](#user-type) The user that published the library and triggered this event> Example{
 "created_components": [
 {
 "key": "ed26a50a541c7e6828420a68707eb49812bda2d3",
 "name": "Simple button"
 }
 ],
 "created_styles": [
 {
 "key": "a68707eb49ed26828420812bda2d36a50a541c7e",
 "name": "Coral green"
 }
 ],
 "deleted_components": [
 {
 "key": "0a575f0b60f7238d9f7da3e8d57b99ab4451f28f",
 "name": "Slider"
 }
 ],
 "deleted_styles": [
 {
 "key": "0b60f0a577b99ab4451f25f7238d9f7da3e8d58d",
 "name": "Header text"
 }
 ],
 "description": "Adjusted colors to match guidelines",
 "event_type": "LIBRARY_PUBLISH",
 "file_key": "zH44k2FUM629Fa4EMShiHL",
 "file_name": "Mockup library",
 "modified_components": [
 {
 "key": "eacab7bc887f50d99d73ef0eaf6716d5dae0855f",
 "name": "Date picker"
 }
 ],
 "modified_styles": [
 {
 "key": "50d99d73ef0ab7bc887f716d5dae0855feaf6eac",
 "name": "Background fill"
 }
 ],
 "passcode": "secretpassword",
 "timestamp": "2020-02-23T20:27:16Z",
 "triggered_by": {
 "id": "813845097374535682",
 "handle": "Dylan Field"
 },
 "webhook_id": "22"
 }FILE_COMMENT Triggers whenever a user comments on a file. 

 This webhook could integrate with Asana or Jira and automatically create tasks whenever a user comments. It could also integrate with Slack and notify mentioned users.

 The contents of a comment is returned in an array of CommentFragment. A CommentFragment either contains a text of mention field. A text field contains raw comment text with formatting derivatives, newlines will be encoded as \n, etc.Text fields can also contain emojis, which are always encoded as a separate fragment and are surrounded by two : characters. Mention fields occur if a user types @OtherUser in their comment. A mention contains the userid of the mentioned user. All mentioned users are added to the mentioned array field, where additional user information is included.

comment[CommentFragment](#commentfragment-type)[] Contents of the comment itselfcomment_idNumber Unique identifier for commentcreated_atString The UTC ISO 8601 time at which the comment was leftevent_typeString The type of event that triggered this webhook callfile_keyString The key of the file that was updatedfile_nameString The name of the file that was updatedmentions[User](#user-type)[] Users that were mentioned in the commentorder_idNumber Only set for top level comments. The number displayed with the comment in the UIparent_idNumber If present, the id of the comment to which this is the replypasscodeString The passcode specified when the webhook was created, should match what was initially providedresolved_atString If set, the UTC ISO 8601 time the comment was resolvedtimestampString UTC ISO 8601 timestamp of when the event was triggeredtriggered_by[User](#user-type) The user that made the comment and triggered the event> Example{
 "comment": [
 {
 "text": "TODO: \n"
 },
 {
 "mention": "811724164054158337"
 },
 {
 "text": "Change selection colors"
 },
 ],
 "comment_id": "32",
 "created_at": "2020-02-23T20:27:16Z",
 "event_type": "FILE_COMMENT",
 "file_key": "zH44k2FUM629Fa4EMShiHL",
 "file_name": "Mockup library",
 "mentions": [
 {
 "id": "811724164054158337",
 "handle": "Evan Wallace"
 }
 ],
 "order_id": "23 ",
 "parent_id": "",
 "passcode": "secretpasscode",
 "resolved_at": "",
 "timestamp": "2020-02-23T20:27:16Z",
 "triggered_by": {
 "id": "813845097374535682",
 "handle": "Dylan Field"
 },
 "webhook_id": "22"
 }DEV_MODE_STATUS_UPDATETriggers whenever the Dev Mode status for a layer in a file.

 This event can be used to track changes to the Dev Mode status of layers in a file. For example, if you want to create an integration that tracks the status of designs that are being worked on in your organization.

 The event includes the Dev Mode status, the file key and node id of the layer where the status changed, and the user that made the change. It also includes any related links (Dev resources) that are applied to the layer in the file.

change_messageString If one was provided when the status was updated, a message describing the changeevent_typeString The type of event that triggered this webhook call. For this event, it is always DEV_MODE_STATUS_UPDATEfile_keyString The key of the file where the change occurrednode_idString The id of the node where the Dev Mode status changed. For example, "43:2"passcodeString The passcode specified when the webhook was created, should match what was initially providedrelated_links[DevResource](#devresource-type)[] An array of related links that have been applied to the layer in the filestatusString The Dev Mode status. Either "NONE", "READY_FOR_DEV", or "COMPLETED"timestampString UTC ISO 8601 timestamp of when the event was triggeredtriggered_by[User](#user-type) The user that made the status change and triggered the eventwebhook_idNumber The id of the webhook that caused the callback> Example{
 "event_type": "DEV_MODE_STATUS_UPDATE",
 "triggered_by": {
 "email": "devmodeuser@example.com",
 "id": "1157089008212550991",
 "handle": "dmuser"
 },
 "file_key": "ABzTs1A2aFSy960zBI3nMM",
 "node_id": "43:2",
 "status": "READY_FOR_DEV",
 "timestamp": "2025-05-14T23:28:40Z",
 "protocol_version": "2",
 "related_links": [
 {
 "id": 1118075899259441212,
 "name": "Issue BB-8",
 "url": "https://example.atlassian.net/jira/core/projects/BB/board?groupBy=status&selectedIssue=BB-8",
 "node_id": "43:2",
 "file_key": "ABzTs1A2aFSy960zBI3nMM"
 }
 ],
 "change_message": "New rectangle",
 "webhook_id": "434",
 "passcode": "secretpasscode"
}TypesNamePropertiesWebhookV2A description of an HTTP webhook (from Figma back to your application)idString The ID of the webhookevent_typeWebhookV2Event The event this webhook triggers oncontextString The type of context this webhook is attached to. The value will be "PROJECT", "TEAM", or "FILE"context_idString The ID of the context this webhook is attached toteam_idString The team id you are subscribed to for updates. If the webhook is subscribed to a file or project, this value is an empty stringplan_api_idString The plan API ID of the team or organization where this webhook was createdstatusWebhookV2Status The current status of the webhookclient_idString The client ID of the OAuth application that registered this webhook, if anypasscodeString The passcode that will be passed back to the webhook endpoint. For security, when using the GET endpoints, the value is an empty stringendpointString The endpoint that will be hit when the webhook is triggereddescriptionString Optional user-provided description or name for the webhook. This is provided to help make maintaining a number of webhooks more convenient. Max length 140 characters.WebhookV2RequestInformation regarding the most recent interactions sent to a webhook endpointwebhook_idString The ID of the webhook the requests were sent torequest_infoWebhookV2RequestInfo Information regarding the request sent to the webhook endpointresponse_infoWebhookV2ResponseInfo Information regarding the response sent back from the webhook endpoint. NULL if no response was received.error_msgString Error message for this request. NULL if no error occurred.WebhookV2RequestInfoInformation regarding the request sent to a webhook endpointendpointString The actual endpoint the request was sent topayload[Payload](#payload-type) The contents of the request that was sent to the endpointsent_atString UTC ISO 8601 timestamp of when the request was sentWebhookV2ResponseInfoInformation regarding the reply sent back from a webhook endpointstatusString HTTP status code of the responsereceived_atString The UTC ISO 8601 time when the response was receivedWebhookV2EventAn enum representing the possible events that a webhook can subscribe to A webhook can subscribe to all events listed in the events section except the PING event. 

WebhookV2StatusAn enum representing the possible statuses you can set a webhook toACTIVE: The webhook is healthy and receive all events

PAUSED: The webhook is paused and will not receive any events

LibraryItemDataAn object representing the library item information in the payload of the LIBRARY_PUBLISH eventkeyString Unique identifier of library itemnameString Name of library itemCommentFragmentAn object representing a fragment of a comment left by a user, used in the payload of the FILE_COMMENT event. Note only ONE of the fields below will be settextString Comment text that is set if a fragment is text basedmentionString User id that is set if a fragment refers to a user mentionEndpointsYou can use the following Webhooks via the Figma API:POST webhook

Create a new webhook which will call the specified endpoint when the event triggers. By default, this webhook will automatically send a PING event to the endpoint when it is created. If this behavior is not desired, you can create the webhook and set the status to PAUSED and reactivate it later.

HTTP EndpointPOST/v2/webhooks

Return valueThe WebhookV2 that was successfully postedBody parametersDescriptionevent_typeWebhookV2EventThe type of event that will trigger this webhook to fire.contextStringContext to create the webhook for. Must be "team", "project", or "file".context_idStringThe id of the context you want to receive updates about.endpointStringThe HTTP endpoint that will receive a POST request when the event triggers. Max length 2048 characters.passcodeStringString that will be passed back to your webhook endpoint to verify that it is being called by Figma. Max length 100 characters.statusWebhookV2StatusoptionalState of the webhook, including any error state it may be indescriptionStringoptionalUser provided description or name for the webhook. Max length 150 characters.Error codesDescription400Required parameter missing or invalid403The developer / OAuth token is invalid or expiredTry it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -X POST -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v2/webhooks'Log in to execute requestReturn valueThe WebhookV2 that was successfully postedTry it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -X POST -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v2/webhooks'Log in to execute requestGET webhook by id

Returns the WebhookV2 corresponding to the ID provided, if it exists.

HTTP EndpointGET/v2/webhooks/:webhook_id

Return valueThe WebhookV2 requestedPath parametersDescriptionwebhook_idStringThe id of the webhook you want to query forError codesDescription403The developer / OAuth token is invalid or expired404Webhook does not exist or you do not have permissions to access this webhookTry it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v2/webhooks/:webhook_id'Log in to execute requestReturn valueThe WebhookV2 requestedTry it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v2/webhooks/:webhook_id'Log in to execute requestGET webhooks

Returns a list of webhooks corresponding to the context or plan provided, if they exist. For plan, the webhooks for all contexts that you have access to will be returned, and the response is paginated.

HTTP EndpointGET/v2/webhooks

Return value{  "webhooks": WebhookV2[]  "pagination": {    "next_page": string (optional)    "prev_page": string (optional)  }}Query parametersDescriptioncontextStringContext to create the resource on. Should be "team", "project", or "file".context_idStringThe id of the context that you want to get attached webhooks for. If you're using context_id, you cannot use plan_api_id.plan_api_idStringThe id of your plan. Use this to get all webhooks for all contexts you have access to. If you're using plan_api_id, you cannot use context or context_id. When you use plan_api_id, the response is paginated.cursorStringIf you're using plan_api_id, this is the cursor to use for pagination. If you're using context or context_id, this parameter is ignored. Provide the next_page or prev_page value from the previous response to get the next or previous page of results.Error codesDescription403The developer / OAuth token is invalid or expired404Webhook does not exist or you do not have permissions to access this webhookTry it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v2/webhooks'Log in to execute requestReturn value{  "webhooks": WebhookV2[]  "pagination": {    "next_page": string (optional)    "prev_page": string (optional)  }}Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v2/webhooks'Log in to execute requestPUT webhook

Updates the webhook with the specified properties.

HTTP EndpointPUT/v2/webhooks/:webhook_id

Return valueThe WebhookV2 that was successfully updatedPath parametersDescriptionwebhook_idStringThe id of the webhook you want to updateBody parametersDescriptionevent_typeWebhookV2EventoptionalThe type of event that will trigger this webhook to fireendpointStringoptionalThe HTTP endpoint that will receive a POST request when the event triggerspasscodeStringoptionalString that will be passed back to your webhook endpoint to verify that it is being called by Figmastatus[WebhookStatus](#webhookstatus-type)optionalState to put the webhook in, either to make the webhook ACTIVE or PAUSED. The webhook cannot be put into an error state this way.descriptionStringoptionalUser provided description or name for the webhook. Max length 140 characters. Providing a description '' (empty string) will delete the description.Error codesDescription400Required parameter missing or invalid403The developer / OAuth token is invalid or expired404Webhook does not exist or you do not have permissions to access this webhookTry it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -X PUT -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v2/webhooks/:webhook_id'Log in to execute requestReturn valueThe WebhookV2 that was successfully updatedTry it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -X PUT -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v2/webhooks/:webhook_id'Log in to execute requestDELETE webhook

Deletes the specified webhook. This operation cannot be reversed.

HTTP EndpointDELETE/v2/webhooks/:webhook_id

Return valueThe WebhookV2 that was successfully deletedPath parametersDescriptionwebhook_idStringThe id of the webhook you want to deleteError codesDescription400Required parameter missing or invalid403The developer / OAuth token is invalid or expired404Webhook does not exist or you do not have permissions to access this webhookTry it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -X DELETE -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v2/webhooks/:webhook_id'Log in to execute requestReturn valueThe WebhookV2 that was successfully deletedTry it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -X DELETE -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v2/webhooks/:webhook_id'Log in to execute requestGET team webhooks

[DEPRECATED] Returns all webhooks registered under the specified team. This endpoing is being deprecated. Instead, use the GET /v2/webhooks endpoint with context set to 'team' and context_id set to the team id you want to query for. For example, requests to GET v2/webhooks/:team_id/webhook should be replaced with GET v2/webhooks?context=team&context_id=:team_id.

HTTP EndpointGET/v2/teams/:team_id/webhooks

Return value{  "webhooks": WebhookV2[]}Path parametersDescriptionteam_idStringThe team id you wish to query forTry it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v2/teams/:team_id/webhooks'Log in to execute requestReturn value{  "webhooks": WebhookV2[]}Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v2/teams/:team_id/webhooks'Log in to execute requestGET webhook requests

Returns all webhook requests sent within the last week. Useful for debugging.

HTTP EndpointGET/v2/webhooks/:webhook_id/requests

Return value{  "requests": WebhookV2Request[]}Path parametersDescriptionwebhook_idStringThe id of the webhook subscription you want to see events fromTry it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v2/webhooks/:webhook_id/requests'Log in to execute requestReturn value{  "requests": WebhookV2Request[]}Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v2/webhooks/:webhook_id/requests'Log in to execute requestSecurity## Securing your webhook

IMPORTANT: When creating a webhook you are required to pass in a passcode. The purpose of the passcode field is so that your application can verify that Figma is actually what is calling your endpoint (as opposed to some attacker trying to make you believe something about your users' Figma files).

For security purposes, when requesting webhooks using GET webhook by id or GET webhooks, the passcode is redacted and an empty string is returned. This is to ensure that passcode is only exposed by events that we send you.

We recommend comparing the passcode we pass back to you in events with the passcode originally provided when creating the endpoint to make sure they match before acting on the webhook trigger. If you receive a request with the wrong passcode, you should respond with a 400 Bad Request HTTP response which will immediately stop the webhook.