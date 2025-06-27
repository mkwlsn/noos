---
title: Complete Section
slug: library-analytics-complete-section
source_file: rest-api-library-analytics.html
source_url: 'https://www.figma.com/developers/api#library-analytics'
doc_type: rest-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: c143630cb0fb9457
token_count: 6719
chunk_title: Complete Section
chunk_slug: library-analytics-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: library-analytics.md
parent_slug: library-analytics
char_count: 23515
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

Library AnalyticsGetting startedWho can use the Library Analytics API

- The Library Analytics API is only available to organizations on the Enterprise plan.
- Any user with a seat in an Enterprise plan is able to query the Library Analytics API. The response includes only the data that the user making the request is permitted to access.

Figma's Library Analytics API lets you fetch analytics data about how your organization's design system libraries are being used. The API provides similar information to the in-product library analytics feature, but in a format that you can use to do more fine-grained, custom analysis.

To make requests to the Library Analytics API, your access token must include the library_analytics:read scope.

Types of data provided

Analytics data is provided at the library level. For each library, you can get access to action data and usage data. The information is further broken down by different dimensions based on the type of analysis you wish to do.

- Actions data contains time series data about what actions your users have performed with your library on a week-by-week basis. You can use this to identify trends. Action data can be broken down by used component, style, or variable, or using team.
- Usages data contains summary information about how many instances of a library's components exist across all files. You can think of this as a snapshot, or census, of where your library and its components are being used. Usage data can be broken down by used component, style, or variable, or using file/team.

Permissions and obfuscation

The Library Analytics API honors the permissions of the user requesting analytics data. Analytics data for files and teams that the user does not have access to will still be included in responses, but their names will be obfuscated. These will appear as rows with names like Team not visible and File not visible. We also exclude all information of component usages, insertions, or detachments outside of your org.

Data freshness

Data is recalculated daily at 00:00 UTC time.

Paging

API responses are paged with a maximum number of 1,000 rows per page. If the total number of rows is greater than this limit, the response will contain a cursor and "next_page": true in the response. This cursor may be used as a query parameter in subsequent requests to fetch the next page of data.

EndpointsThere are six methods provided by the Library Analytics REST API. Components, styles, and variables each have an actions endpoint and a usages endpoint.

GET component actions: Get time series data about what actions your users have performed with your library's components on a week-by-week basis.

GET component usages: Get summary information about how many instances of a library's components exist across all files.

GET style actions: Get time series data about what actions your users have performed with your library's styles on a week-by-week basis.

GET style usages: Get summary information about how many instances of a library's styles exist across all files.

GET variable actions: Get time series data about what actions your users have performed with your library's variables on a week-by-week basis.

GET variable usages: Get summary information about how many instances of a library's variables exist across all files.

GET component actions

The /v1/analytics/libraries/:library_file_key/component/actions endpoint provides historical time series data regarding how a design system library is used. The data is returned in descending order, from most recent to least recent. Action data can be returned broken down in different ways using the requiredgroup_by query parameter. Data is available for up to one year.

Types of events

We track two types of events:

- insertions: Tracks how many times a component in the library was inserted into a document. This can happen in many ways, including: duplicating an existing instance, copy pasting the instance from another document, or inserting the component from the asset panel.
- detachments: Tracks how many times a component in the library was detached.

Data sparseness

Only weeks containing data are returned. Teams and components only appear when there are associated actions.

HTTP EndpointGET/v1/analytics/libraries/:library_file_key/component/actions

Return valueActions grouped by component{  "cursor": String,  "next_page": Boolean,  "rows": [    {      "component_key": String,      "week": String,      "detachments": Number,      "insertions": Number,      "component_name": String,      "component_set_key": String,      "component_set_name": String    },    ...  ]}Actions grouped by team{  "cursor": String,  "next_page": Boolean,  "rows": [    {      "week": String,      "detachments": Number,      "insertions": Number,      "team_name": String,      "workspace_name": String    },    ...  ]}Path parametersDescriptionlibrary_file_keyStringRequired. File to get library usage analytics for.Query parametersDescriptiongroup_byStringRequired. Controls how action data is organized in the response. Accepts:- component returns actions broken down by each component within the library.
- team returns actions broken down by the team using the library.

start_dateStringFilters the response to include time series data that occurs after the start date (inclusive). If unset, returns the prior year.Accepts an ISO 8601 date string (YYYY-MM-DD). For example: 2023-12-03. Dates are rounded back to the previous start of a week. For example, if you supply a Wednesday, you will get data starting on the preceding Sunday 00:00 UTC time.end_dateStringFilters the response to include time series data that that occurs before the end date (inclusive). If unset, returns up to the last full week.Accepts an ISO 8601 date string (YYYY-MM-DD). For example: 2023-12-03. Dates are rounded forward in time to the nearest end of a week.cursorStringCursor for pagination. Used to retrieve the next page of data. Obtained from the response of the previous call.Error codesDescription400Invalid parameter. The "message" parameter on the response will describe the error.401Issue with authentication. The "message" parameter on the response will describe the error.403API is not available. Possible error messages are "Limited by Figma plan," "Incorrect account type," or "Invalid scope". This could also indicate the developer / OAuth token is invalid or expired.Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/analytics/libraries/:library_file_key/component/actions?group_by=component'Log in to execute requestReturn valueActions grouped by component{  "cursor": String,  "next_page": Boolean,  "rows": [    {      "component_key": String,      "week": String,      "detachments": Number,      "insertions": Number,      "component_name": String,      "component_set_key": String,      "component_set_name": String    },    ...  ]}Actions grouped by team{  "cursor": String,  "next_page": Boolean,  "rows": [    {      "week": String,      "detachments": Number,      "insertions": Number,      "team_name": String,      "workspace_name": String    },    ...  ]}Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/analytics/libraries/:library_file_key/component/actions?group_by=component'Log in to execute requestGET component usages

The /v1/analytics/libraries/:library_file_key/component/usages endpoint provides data on how components are used across different files and teams. This data can be broken down by component or file.

Components and files

The endpoint can group usage by:

- component: Returns a list of all the components with usage in the library (unused components are excluded). The response includes the name of the component, the number of files and teams using the component, and the total number of existing instances of the component.
- file: Returns a list of all the files that use the library. The response includes the team name, the file name, and the total number of times that resources from the library are used. Files that you don't have access to are returned as File not visible. A total count of instances used in those files is also included in the response.

Data sparseness

Rows only include teams or components with data.

HTTP EndpointGET/v1/analytics/libraries/:library_file_key/component/usages

Return valueUsage grouped by component{  "cursor": String,  "next_page": Boolean,  "rows": [    {      "component_key": String,      "usages": Number      "teams_using": Number,      "files_using": Number,      "component_name": String,      "component_set_key": String,      "component_set_name": String    },    ...  ]}Usage grouped by file{  "cursor": String,  "next_page": Boolean,  "rows": [    {      "usages": Number,      "team_name": String,      "workspace_name": String,      "file_name": String    },    ...  ]}Path parametersDescriptionlibrary_file_keyStringRequired. File to get library usage analytics for.Query parametersDescriptiongroup_byStringRequired. Controls how usage data is organized in the response. Accepts:- component returns usages broken down by each component within the library.
- file returns usages broken down by each file and team that used the library.

cursorStringCursor for pagination. Used to retrieve the next page of data. Obtained from the response of the previous call.Error codesDescription400Invalid parameter. The "message" parameter on the response will describe the error.401Issue with authentication. The "message" parameter on the response will describe the error.403API is not available. Possible error messages are "Limited by Figma plan," "Incorrect account type," or "Invalid scope". This could also indicate the developer / OAuth token is invalid or expired.Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/analytics/libraries/:library_file_key/component/usages?group_by=component'Log in to execute requestReturn valueUsage grouped by component{  "cursor": String,  "next_page": Boolean,  "rows": [    {      "component_key": String,      "usages": Number      "teams_using": Number,      "files_using": Number,      "component_name": String,      "component_set_key": String,      "component_set_name": String    },    ...  ]}Usage grouped by file{  "cursor": String,  "next_page": Boolean,  "rows": [    {      "usages": Number,      "team_name": String,      "workspace_name": String,      "file_name": String    },    ...  ]}Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/analytics/libraries/:library_file_key/component/usages?group_by=component'Log in to execute requestGET styles actions

The /v1/analytics/libraries/:library_file_key/style/actions endpoint provides historical time series data regarding how design system styles were used. The data is returned in descending order, from most recent to least recent. Actions data can be returned organized in different ways using the required group_by query parameter.

Data Sparseness

Only weeks containing data are returned. Teams and styles only appear when there are associated actions.

HTTP EndpointGET/v1/analytics/libraries/:library_file_key/style/actions

Return valueActions grouped by style{  "cursor": String,  "next_page": Boolean,  "rows": [    {      "style_key": String,      "week": String,      "detachments": Number,      "insertions": Number,      "style_name": String,      "style_type": String    },    ...  ]}Actions grouped by team{  "cursor": String,  "next_page": Boolean,  "rows": [    {      "week": String,      "detachments": Number,      "insertions": Number,      "team_name": String,      "workspace_name": String    },    ...  ]}Path parametersDescriptionlibrary_file_keyStringRequired. File to get style usage analytics for.Query parametersDescriptiongroup_byStringRequired. Controls how action data is organized in the response. Accepts:- style returns actions broken down by each style.
- team returns actions broken down by the team using the library.

start_dateStringFilters the response to include data occurring after the start date (inclusive). Accepts an ISO 8601 date string (YYYY-MM-DD).end_dateStringFilters the response to include data occurring before the end date (inclusive). Accepts an ISO 8601 date string (YYYY-MM-DD).cursorStringCursor for pagination. Used to retrieve the next page of data. Obtained from the response of the previous call.Error codesDescription400Invalid parameter. The "message" parameter on the response will describe the error.401Issue with authentication. The "message" parameter on the response will describe the error.403API is not available. Possible error messages are "Limited by Figma plan," "Incorrect account type," or "Invalid scope". This could also indicate the developer / OAuth token is invalid or expired.Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/analytics/libraries/:library_file_key/style/actions?group_by=style'Log in to execute requestReturn valueActions grouped by style{  "cursor": String,  "next_page": Boolean,  "rows": [    {      "style_key": String,      "week": String,      "detachments": Number,      "insertions": Number,      "style_name": String,      "style_type": String    },    ...  ]}Actions grouped by team{  "cursor": String,  "next_page": Boolean,  "rows": [    {      "week": String,      "detachments": Number,      "insertions": Number,      "team_name": String,      "workspace_name": String    },    ...  ]}Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/analytics/libraries/:library_file_key/style/actions?group_by=style'Log in to execute requestGET styles usages

The /v1/analytics/libraries/:library_file_key/style/usages endpoint provides data on how styles are used across different files and teams. This data can be broken down by style or file.

Data sparseness

Rows only include teams or styles with data.

HTTP EndpointGET/v1/analytics/libraries/:library_file_key/style/usages

Return valueUsages grouped by style{  "cursor": String,  "next_page": Boolean,  "rows": [    {      "files_using": Number,      "teams_using": Number,      "usages": Number,      "style_key": String,      "style_name": String,      "style_type": String    },    ...  ]}Usages grouped by file{  "cursor": String,  "next_page": Boolean,  "rows": [    {      "usages": Number,      "team_name": String,      "file_name": String,      "workspace_name": String    },    ...  ]}Path parametersDescriptionlibrary_file_keyStringRequired. File to get style usage data for.Query parametersDescriptiongroup_byStringRequired. Controls how usage data is organized in the response. Accepts:- style returns usage data broken down by each style.
- file returns usage data broken down by each file.

cursorStringCursor for pagination. Used to retrieve the next page of data. Obtained from the response of the previous call.Error codesDescription400Invalid parameter. The "message" parameter on the response will describe the error.401Issue with authentication. The "message" parameter on the response will describe the error.403API is not available. Possible error messages are "Limited by Figma plan," "Incorrect account type," or "Invalid scope". This could also indicate the developer / OAuth token is invalid or expired.Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/analytics/libraries/:library_file_key/style/usages?group_by=style'Log in to execute requestReturn valueUsages grouped by style{  "cursor": String,  "next_page": Boolean,  "rows": [    {      "files_using": Number,      "teams_using": Number,      "usages": Number,      "style_key": String,      "style_name": String,      "style_type": String    },    ...  ]}Usages grouped by file{  "cursor": String,  "next_page": Boolean,  "rows": [    {      "usages": Number,      "team_name": String,      "file_name": String,      "workspace_name": String    },    ...  ]}Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/analytics/libraries/:library_file_key/style/usages?group_by=style'Log in to execute requestGET variables actions

The /v1/analytics/libraries/:library_file_key/variable/actions endpoint provides historical time series data regarding how variables within a design system were used. The data is returned in descending order, from most recent to least recent. The data can be grouped by variable or by team.

Data Sparseness

Only weeks containing data are returned. Teams and variables only appear when there are associated actions.

HTTP EndpointGET/v1/analytics/libraries/:library_file_key/variable/actions

Return valueActions grouped by variable{  "cursor": String,  "next_page": Boolean,  "rows": [    {      "variable_key": String,      "week": String,      "detachments": Number,      "insertions": Number,      "variable_name": String,      "variable_type": String,      "collection_key": String,      "collection_name": String    },    ...  ]}Actions grouped by team{  "cursor": String,  "next_page": Boolean,  "rows": [    {      "week": String,      "detachments": Number,      "insertions": Number,      "team_name": String,      "workspace_name": String    },    ...  ]}Path parametersDescriptionlibrary_file_keyStringRequired. File to get variable usage analytics for.Query parametersDescriptiongroup_byStringRequired. Controls how action data is organized in the response. Accepts:- variable returns actions broken down by each variable.
- team returns actions broken down by the team using the library.

start_dateStringFilters the response to include data occurring after the start date (inclusive). Accepts an ISO 8601 date string (YYYY-MM-DD).end_dateStringFilters the response to include data occurring before the end date (inclusive). Accepts an ISO 8601 date string (YYYY-MM-DD).cursorStringCursor for pagination. Used to retrieve the next page of data. Obtained from the response of the previous call.Error codesDescription400Invalid parameter. The "message" parameter on the response will describe the error.401Issue with authentication. The "message" parameter on the response will describe the error.403API is not available. Possible error messages are "Limited by Figma plan," "Incorrect account type," or "Invalid scope". This could also indicate the developer / OAuth token is invalid or expired.Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/analytics/libraries/:library_file_key/variable/actions?group_by=variable'Log in to execute requestReturn valueActions grouped by variable{  "cursor": String,  "next_page": Boolean,  "rows": [    {      "variable_key": String,      "week": String,      "detachments": Number,      "insertions": Number,      "variable_name": String,      "variable_type": String,      "collection_key": String,      "collection_name": String    },    ...  ]}Actions grouped by team{  "cursor": String,  "next_page": Boolean,  "rows": [    {      "week": String,      "detachments": Number,      "insertions": Number,      "team_name": String,      "workspace_name": String    },    ...  ]}Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/analytics/libraries/:library_file_key/variable/actions?group_by=variable'Log in to execute requestGET variables usages

The /v1/analytics/libraries/:library_file_key/variable/usages endpoint provides data on how variables are used across different files and teams. This data can be grouped by variable or file.

Data sparseness

Rows only include teams or variables with data.

HTTP EndpointGET/v1/analytics/libraries/:library_file_key/variable/usages

Return valueUsages grouped by variable{  "cursor": String,  "next_page": Boolean,  "rows": [    {      "files_using": Number,      "teams_using": Number,      "usages": Number,      "variable_key": String,      "variable_name": String,      "variable_type": String,      "collection_key": String,      "collection_name": String    },    ...  ]}Usages grouped by file{  "cursor": String,  "next_page": Boolean,  "rows": [    {      "usages": Number,      "team_name": String,      "file_name": String,      "workspace_name": String    },    ...  ]}Path parametersDescriptionlibrary_file_keyStringRequired. File to get variable usage data for.Query parametersDescriptiongroup_byStringRequired. Controls how usage data is organized in the response. Accepts:- variable returns usage data broken down by each variable.
- file returns usage data broken down by each file.

cursorStringCursor for pagination. Used to retrieve the next page of data. Obtained from the response of the previous call.Error codesDescription400Invalid parameter. The "message" parameter on the response will describe the error.401Issue with authentication. The "message" parameter on the response will describe the error.403API is not available. Possible error messages are "Limited by Figma plan," "Incorrect account type," or "Invalid scope". This could also indicate the developer / OAuth token is invalid or expired.Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/analytics/libraries/:library_file_key/variable/usages?group_by=variable'Log in to execute requestReturn valueUsages grouped by variable{  "cursor": String,  "next_page": Boolean,  "rows": [    {      "files_using": Number,      "teams_using": Number,      "usages": Number,      "variable_key": String,      "variable_name": String,      "variable_type": String,      "collection_key": String,      "collection_name": String    },    ...  ]}Usages grouped by file{  "cursor": String,  "next_page": Boolean,  "rows": [    {      "usages": Number,      "team_name": String,      "file_name": String,      "workspace_name": String    },    ...  ]}Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/analytics/libraries/:library_file_key/variable/usages?group_by=variable'Log in to execute request
