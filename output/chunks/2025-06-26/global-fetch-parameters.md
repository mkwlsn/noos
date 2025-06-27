---
title: Parameters
slug: global-fetch-parameters
source_file: plugin-api-global-fetch.html
source_url: 'https://www.figma.com/plugin-docs/api/global-fetch/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 8e6be62df4177f3f
token_count: 590
chunk_title: Parameters
chunk_slug: global-fetch-parameters
chunk_index: 0
chunk_of_total: 2
parent_file: global-fetch.md
parent_slug: global-fetch
char_count: 2062
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - global-fetch-remarks
compiler: noos-figma
---

### url

The URL of the requested resource. Unlike standardized `fetch`, this must be a `string`.

### init

An optional argument with the following optional parameters:

```
interface FetchOptions { method?: string headers?: {[name: string]: string} body?: Uint8Array | string credentials?: string cache?: string redirect?: string referrer?: string integrity?: string}
```- `method`: The request method, e.g. `GET`, `POST`, etc.
- `headers`: The headers to add to the request. Note that unlike the standardized `fetch`, this can only be a plain javascript object.
- `body`: The body to add to this request, if any. This can be either a string or a Uint8Array.
- `cache`: The cache mode to use for this request. See https://developer.mozilla.org/en-US/docs/Web/API/Request/cache for available values.
- `redirect`: The redirect mode to use for this request: `follow` or `error`.
- `referrer`: The referrer for this request.
- `integrity`: The subresource integrity value of the request. See https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity for more information.

Calling fetch returns a `FetchResponse` object:

```
interface FetchResponse { headersObject: {[name: string]: string} ok: boolean redirected: boolean status: number statusText: string type: string url: string arrayBuffer(): Promise text(): Promise json(): Promise}
```- `headersObject`: The headers associated with the response. Note that unlike the standardized `fetch`, this is a plain object.
- `ok`: Whether the result was successful.
- `redirected`: Whether the response is the result of a redirect.
- `status`: The status code of the response.
- `statusText`: The status text corresponding to this status code.
- `type`: The type of response.
- `url`: The URL of the response.
- `arrayBuffer()`: Returns a promise with the contents of the response body as a `ArrayBuffer`.
- `text()`: Returns a promise with the contents of the response body as a string, decoded as `utf-8`.
- `json()`: Returns a promise with the contents of the response body as Javascript object.
