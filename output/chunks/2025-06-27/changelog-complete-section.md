---
title: Complete Section
slug: changelog-complete-section
source_file: rest-api-changelog.html
source_url: 'https://www.figma.com/developers/api#changelog'
doc_type: rest-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: f6107a0d455240f1
token_count: 4827
chunk_title: Complete Section
chunk_slug: changelog-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: changelog.md
parent_slug: changelog
char_count: 16892
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

ChangelogMay 28, 2025We've introduced some changes to how Webhooks V2 works that enable additional ways you can utilize webhooks.

The improvements include:

- In addition to teams, you can now attach webhooks to specific files and projects. When you create a webhook, you now specify a context (team, file, or project) and the id of the context you want to attach the webhook to. This allows you to receive events related to a specific file or project, in addition to team-level events.
- We've introduced a new GET /v2/webhooks endpoint, along with the plan_api_id property. The endpoint can be used to get all webhooks for a given context, or, using plan_api_id, all existing webhooks that you have access to across all contexts.
- We've added a new DEV_MODE_STATUS_UPDATE event type. The DEV_MODE_STATUS_UPDATE event is triggered when the Dev Mode status of a layer changes. This can be used to track when layers are marked Ready for Dev, Completed, or a Dev Status is cleared in Figma Design, and includes information like a change message if one was provided when the status changed.

Because we are introducing context-based webhooks, we're deprecating the old GET /v2/teams/:team_id/webhooks endpoint.

For now, the old endpoint will continue to work, but we recommend you migrate to the new GET /v2/webhooks endpoint and use the team context: GET v2/webhooks?context=team&context_id=:team_id

To learn more about the changes, see the [Webhooks V2 documentation](#webhooks_v2)
.

May 16, 2025To align with the OAuth 2.0 specification, Figma is migrating the endpoint for refreshing OAuth tokens.

Previously, you used the https://api.figma.com/v1/oauth/refresh endpoint to refresh existing OAuth tokens.

Now, when you refresh your OAuth tokens, you should use the https://api.figma.com/v1/oauth/token endpoint.

The legacy endpoint will continue to be supported for now, but we recommend you migrate to using the new endpoint. For specific instructions about how to refresh your OAuth tokens, see [Refreshing OAuth tokens](#refresh-oauth2)
.

May 7, 2025Added the following new node types and properties in beta:

- TEXT_PATH node type supporting TextPathTypeStyle properties.
- TRANSFORM_GROUP node type.
- TEXTURE and NOISE effect property types.
- PROGRESSIVE blur effect.
- PATTERN paint property type.

The node types and properties in beta can be used with Figma Design and Figma Draw.

April 29, 2025Added a [GET file metadata endpoint](#get-file-metadata-endpoint)
. This endpoint provides the same file metadata provided by the [GET file endpoint](#get-files-endpoint)
 but does not contain the file content. Requires the file_metadata:read scope.

April 28, 2025- We have updated the policy for generating Personal Access Tokens (PATs). Users can now create PATs with a maximum expiry of 90 days. Non-expiring PATs can no longer be created. Please update your token management practices accordingly to accommodate this change.
- Approval is now required to use the Projects endpoints. If you're building a new app and would like to use these endpoints, you can request access.

April 17, 2025Added new [scopes](#authentication-scopes)
 for the REST API. The files:read scope is no longer recommended and will be deprecated in the future. Instead of files:read, use a more specific scope likefile_content:read or file_comments:read. Using a more specific scope helps Figma customers understand what data your app is accessing.

April 15, 2025The POST /v1/oauth/token endpoint now returns user IDs in string format via the user_id_string property. The numeric user_id property is deprecated.

March 19, 2025Added containingComponentSet to [FrameInfo](#frameinfo-type)
, and deprecated containingStateGroup which retains the same data.

February 24, 2025The sunset date of the [OAuth security migration](#oauth_migration_guide)
 has been extended to February 26th, 2025.

February 13, 2025Added support for targetAspectRatio in the [GET files](#get-files-endpoint)
 endpoint. targetAspectRatio allows for proper proportional resizing on the canvas, unlike the legacy preserveRatio field. preserveRatio is kept for backwards-compatibility, but will now be powered by targetAspectRatio under the hood.

February 11, 2025The Library Analytics API is now available. Users on an Enterprise plan can leverage the API to fetch analytics data about how your organization's design system libraries are being used, including usage of components, styles, and variables.

For more information, see the [Library Analytics API documentation](#library-analytics)
.

January 23, 2025TypeStyle objects, which describe text formatting properties, now contain a fontStyle property that indicates whether text is bold, italicized, etc.

December 5, 2024In the [GET files](#get-files-endpoint)
 endpoint, we occasionally return the error message "Request timeout, try a smaller request". Moving forwards, we will return the error message "Request too large. If applicable, filter by query params". We recommend filtering by using the ids and depth query parameters to reduce the size of the request.

November 25, 2024Beginning December 9th, 2024, requests to http://api.figma.com will no longer be supported. This change enforces HTTPS-only communication for improved security. HTTP requests will fail with a 403 Forbidden status code instead of automatically redirecting to HTTPS.

To prepare for this change, please ensure all API request URLs use https://api.figma.com instead of http://api.figma.com

October 29, 2024- Introduced styles and variables to the beta Library Analytics API. Get action time series data and usage data for styles and variables.
- Added new endpoints for the Library Analytics APIGET styles actionsGET styles usagesGET variables actionsGET variables usagesGET component actionsGET component usages
- GET styles actions
- GET styles usages
- GET variables actions
- GET variables usages
- GET component actions
- GET component usages
- New component analytics endpoints cover the same data as the prior Library Analytics endpoints but have been updated for consistency with styles and variables. While the legacy beta endpoints will continue to work in the short-term, we recommend switching over to the new component endpoints. The new component endpoints have the following breaking changes:num_instances has been renamed to usagesnum_teams_using has been renamed to teams_usingnum_files_using has been renamed to files_usingBreakdowns by component now include a component_set_key and component_set_name for components that belong to a component set. The component set name is no longer appended to the front of the component_name.We no longer support the order query parameter
- num_instances has been renamed to usages
- num_teams_using has been renamed to teams_using
- num_files_using has been renamed to files_using
- Breakdowns by component now include a component_set_key and component_set_name for components that belong to a component set. The component set name is no longer appended to the front of the component_name.
- We no longer support the order query parameter
- Analytics data is now updated daily rather than weekly

October 28, 2024- Updated OAuth token exchange documentation to recommend sending client credentials in the Authorization header rather than in the request body.

October 25, 2024- The GET local variables endpoint has been updated to include variables that have been deleted in the editor, but may still be referenced by contents in the document. This can occur if you bind a property or variable alias to a variable, and then use the "Local variables" menu to delete the variable. Variables in this state will be annotated with a deletedButReferenced field set to true.

October 22, 2024- The response from the GET file versions endpoint has changed.PreviouslyVersions returned by the GET file versions endpoint were ordered by an internal identifier that was logically equivalent to when a version was created.NowVersions returned by the GET file versions endpoint are now ordered explicitly by when they were created. New calls to the GET API return updated next_page and prev_page URLs that use the new ordering. Old URLs that use the previous method of ordering will stop working on November 22, 2024.

October 8, 2024- Updated recommended endpoints for OAuth token exchange to https://api.figma.com.

September 24, 2024- Added the freeText property to the Measurement object. This is the displayed value of the measurement when it's manually overridden.

September 12, 2024- Added an interactions field to the TransitionSourceTrait attribute in the GET file endpoint. This field contains full data about prototyping interactions on the node, equivalent to the reactions field of the Plugin API.

August 15, 2024- Added several new properties to the TypeStyle object: isOverrideOverTextStyle, semanticWeight, and semanticItalic.

May 30, 2024- Added new VariableScope options for scoping variables to typography fields such as font family, font style and weight, font size, and other text fields.

April 29, 2024- Add new Enterprise beta endpoints for reading Library Analytics. Fetch action time series data and library usage grouped by different dimensions.

April 24, 2024- Add variable support to gradientStops in ColorStop. This affects Paints.
- Update ColorStop documentation to reflect the addition of the boundedVariables field.

February 14, 2024We are excited to announce the beta release of the OpenAPI specification and Typescript types for the Figma REST API in the open source [figma/rest-api-spec](https://github.com/figma/rest-api-spec)
 repository.

OpenAPI is a specification for describing HTTP APIs in a language-agnostic manner. It has a large ecosystem of tools to let you generate API documentation, client SDKs, and more. We also provide custom Typescript types generated from the OpenAPI specification for those of you with Typescript codebases to make it easy to write type-safe code out of the box.

January 25, 2024- New annotations field containing an Annotation with notes and pinned properties of nodes in Dev Mode. Available in private beta; stay tuned for public release.
- New measurements field on CANVAS nodes containing an array of type Measurement, which display pinned distances between nodes in Dev Mode.

January 17, 2024- Fix bugs related to region_width and region_height in FrameOffsetRegion. This affects Comments Endpoints.

January 10, 2024- The as_md parameter in the GET comments endpoint now correctly respects false as a value.

December 6, 2023- Comment reactions are no longer limited to a subset of 7 emoji. Comment Reactions now support emoji up to version 14.0.
- Ability to get boundVariables on LayoutGrid and Effect properties.
- New VariableScope types for scoping variables to layer opacity, stroke weight, and effect fields.

November 29, 2023API changes- The absoluteRenderBounds node property in the GET file and GET file nodes endpoints is now nullable, which fixes a bug where it previously gave a Rectangle with null values inside in some cases. A node has null render bounds if it is not visible.

Documentation changes- Clarify the behavior of the ids query parameter in the GET file endpoint where we might include extra nodes if the desired node subtrees have dependencies
- Add API call examples for file endpoints
- Remove containing_page property for published components and component sets, since this property doesn't exist
- Add missing Path data type for fill/stroke geometries
- Add missing strokeCap enum values
- Fix properties for the team entity in activity log events

November 8, 2023- The GET image endpoint now supports a contents_only option, which can be set to false in order to render content that overlaps the requested nodes.

October 25, 2023- Add variableIds property to variable collections to expose the order of variables within a collection.

October 18, 2023- Add maskType property to all nodes that support isMask, and deprecate isMaskOutline (which now corresponds to maskType = 'VECTOR').
- Support variables in LIBRARY_PUBLISH webhook events, which are triggered when a library is published.

October 4, 2023- Add svg_outline_text as a query parameter for the GET image endpoint to control whether text elements are rendered as outlines (vector paths) or as elements in SVGs.

September 20, 2023- Add svg_include_node_id as a query parameter for the GET image endpoint. This adds node ids to svg elements as data-node-id.

August 31, 2023- Variable and collection objects returned by the published variables endpoint include an updatedAt timestamp that indicates the last time a change to the variable or collection was published.

August 17, 2023- Get and set codeSyntax for local variables in the variables endpoints
- Support for deleting dev resources.
- Support filtering dev resources for specific node_ids when fetching dev resources.

August 9, 2023- Support for reading layoutSizingHorizontal and layoutSizingVertical on auto-layout frames and their children.

August 2, 2023- Ability to get and set scopes, description, hiddenFromPublishing for local variables, and hiddenFromPublishing for local variable collections for the variables endpoints

July 26, 2023- Support space-separated scopes in addition to comma-separated scopes for OAuth authentication

July 10, 2023- Add cornerSmoothing property to all nodes that support cornerRadius.

June 21, 2023This update adds brand new endpoints for variables and dev resources, and introduces important changes to personal access and OAuth tokens.

- New endpoints for querying, creating, updating, and deleting variables. Variables in Figma Design store reusable values that can be applied to all kinds of design properties and prototyping actions.
- New endpoints for querying, creating, and updating dev resources. Dev resources are developer-contributed urls that are attached to nodes in files and are shown in Figma Dev Mode.

Authentication changes[Personal access tokens](#access-tokens)
 and [OAuth 2 tokens](#oauth2)
 now support [scopes](#authentication-scopes)
 that limit which endpoints the token has access to. For personal access tokens, there is a new flow for assigning scopes and expiration when generating a token. For OAuth 2, applications can ask for a new set of scopes when redirecting the user to allow access for the application.

Legacy tokens (personal access tokens with no scopes or OAuth tokens with the file_read scope) will continue to work as-is. However, the new endpoints above require additional scopes for your application to call them.

May 3, 2023- Introduce the Payments REST API and GET payments endpoint.

April 26, 2023- Add strokeDashes property to FRAME nodes.

March 22, 2023- Add as_md parameter to the GET /v1/files/:key/comments endpoint to return rich-text comments as markdown.

March 14, 2023- Add TABLE and TABLE_CELL node types.

February 6, 2023- Update componentPropertyReferences to also show up on applicable instance sublayers.

December 16, 2022Font metrics improvements- Node and style values for fontWeight will now be more accurate and reflect variable font settings and custom font style weights.
- Node and style values for lineHeight will now use the main node or text style font metadata for determining percent-based line height values. Previously, it used the maximum lineHeight of all fonts used in the node.

December 7, 2022Add support for overrides- Update INSTANCE nodes to include an overrides field. The overrides field is an array of all of the fields directly overridden on an instance.

November 9, 2022Add fill overrides- Update VECTOR nodes to have fillOverrideTable which shows overriden fills for different regions in the vector.

October 28, 2022Update component set fields- Update component set to include a documentationLinks field

September 28, 2022Add component properties fields- Update nodes to have component properties-related fields

July 20, 2022Increase Comments Functionalities- Update Comment type to support Region and FrameOffsetRegion types in client_meta
- Update Comment type to include Reactions
- Create Reaction, Region, and FrameOffsetRegion types
- Update POST comments endpoint to accept Region and FrameOffsetRegion types as client_meta
- Create GET comment reactions, POST comment reactions, and DELETE comment reactions endpoints

May 23, 2022New propertiesThe following properties have been added/updated:- layoutPositioning
- itemReverseZIndex
- strokesIncludedInLayout
- individualStrokeWeights
- counterAxisAlignItems can return BASELINE
- textAutoResize can return TRUNCATE

February 9, 2022Bug Fixes- Fix bug where the GET file endpoint did not include component sets from team libraries

December 8, 2021Bug Fixes- Fix bug where PNGs exported from the REST API were of lower quality (less anti-aliasing) than those exported from the Figma UI
