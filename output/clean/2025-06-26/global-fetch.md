---
title: fetch
slug: global-fetch
source_file: plugin-api-global-fetch.html
source_url: https://www.figma.com/plugin-docs/api/global-fetch/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 2faaf8b35b904ae1
token_count: 629
---
# fetch

Fetch a resource from the network, and return a promise with the response.

## Signature

### fetch(url: string, init?: FetchOptions): Promise

## Parameters

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

## Remarks

This function has similar behavior to the standardized `fetch()` function, with some minor differences. See the [`FetchOptions`](/plugin-docs/api/properties/global-fetch/) and [`FetchResponse`](/plugin-docs/api/properties/global-fetch/) interfaces for more information.