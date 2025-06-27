---
title: Complete Section
slug: errors-complete-section
source_file: rest-api-errors.html
source_url: 'https://www.figma.com/developers/api#errors'
doc_type: rest-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 6bbc82ffbb4ce097
token_count: 368
chunk_title: Complete Section
chunk_slug: errors-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: errors.md
parent_slug: errors
char_count: 1288
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

ErrorsThis section outlines the common error codes and resolutions you may encounter while using the Figma API.

Error codeDescription400Bad request Parameters are invalid or malformed. Please check the input formats. This error can also happen if the requested resources are too large to complete the request, which results in a timeout. Please reduce the number and size of objects requested.403Forbidden The request was valid, but the server is refusing action. This can happen if the caller does not have the necessary permissions, or when making HTTP requests instead of HTTPS requests.404Not found The requested file or resource was not found.429Rate limit In some cases API requests may be throttled or rate limited. Please wait a while before attempting the request again (typically a minute). Rate limiting is calculated on a per-user basis. If the caller is using an OAuth token, the rate limit is calculated based on the user associated with the token.500Internal server error This most commonly occurs for very large image render requests, which may time out our server and return a 500. Please reduce the number and size of objects requested.The usage of our API is governed by our [Terms of Service](/tos). Figma reserves the right to deny access to the API per those terms.
