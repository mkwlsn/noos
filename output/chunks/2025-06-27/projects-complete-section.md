---
title: Complete Section
slug: projects-complete-section
source_file: rest-api-projects.html
source_url: 'https://www.figma.com/developers/api#projects'
doc_type: rest-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 85c87e7e1274d1cc
token_count: 565
chunk_title: Complete Section
chunk_slug: projects-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: projects.md
parent_slug: projects
char_count: 1975
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

ProjectsProjects are collections of files that belong to a user or, more commonly, a team. They can be accessed by collaborators and can be made up of multiple files.

IMPORTANT: Figma does not permit companies to index or ingest Figma files that belong to other companies. Use these APIs only to access projects and files in your own Figma organization.TypesTypePropertiesProjectA Project can be identified by both the Project name, and the ProjectID.idNumber The ID of the projectnameString The name of the projectEndpointsSee information about your projects and files within a project.

Limited Access

The Projects endpoints are only available for selected use cases and are not available to all apps. If you'd like to use these endpoints, you can [request access](https://forms.gle/xoWgCx5K25iYci5L6)
.

GET team projects

You can use this endpoint to get a list of all the projects within the specified team. It returns only projects visible to the authenticated user or owner of the developer token.

It is not possible to programmatically obtain team IDs. To obtain a team ID, navigate to the team page in the Figma file browser. The team ID is present in the URL after the word team and before your team name.

HTTP EndpointGET/v1/teams/:team_id/projects

Path parametersDescriptionteam_idStringID of the team to list projects fromError codesDescription400Error with the request. The "message" param on the response will describe the error.403The developer / OAuth token is invalid or expiredGET project filesList the files in a given project.

HTTP EndpointGET/v1/projects/:project_id/files

Path parametersDescriptionproject_idStringID of the project to list files frombranch_dataBooleanoptionalReturns branch metadata in the response for each main file with a branch inside the project. Default: false.Error codesDescription400Error with the request. The "message" param on the response will describe the error.403The developer / OAuth token is invalid or expired
