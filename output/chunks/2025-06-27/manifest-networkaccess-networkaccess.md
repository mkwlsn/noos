---
title: 'networkAccess?: NetworkAccess'
slug: manifest-networkaccess-networkaccess
source_file: plugin-api-manifest.html
source_url: 'https://www.figma.com/plugin-docs/api/manifest/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: f61b30c255dd6014
token_count: 1221
chunk_title: 'networkAccess?: NetworkAccess'
chunk_slug: manifest-networkaccess-networkaccess
chunk_index: 5
chunk_of_total: 17
parent_file: manifest.md
parent_slug: manifest
char_count: 4272
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - manifest-introduction
  - manifest-name-string-id-string
  - manifest-api-string
  - manifest-main-string-ui-string-key-string-string-
  - manifest-documentaccess-dynamic-page
  - manifest-parameters-parameter
  - manifest-parameteronly-boolean
  - manifest-editortype-figma-figjam-dev
  - manifest-menu-manifestmenuitem
  - manifest-relaunchbuttons-manifestrelaunchbutton
  - manifest-enableproposedapi-boolean-enableprivatep
  - manifest-build-string
  - manifest-permissions-pluginpermissiontype
  - manifest-capabilities-textreview-codegen-inspect-
  - manifest-codegenlanguages-codelanguage
  - manifest-codegenpreferences-codegenpreference
compiler: noos-figma
---

Used to specify the list of domains that your plugin is permitted to access. When `networkAccess` is used:

- Your plugin can only access the domains that you specify. If your plugin attempts to access other domains, the plugin is prevented from doing so.

##### note

The enforcement of network access is limited only to requests made by the plugin, such as requests to a public API. In a situation such as a plugin rendering a website in a frame, network access limits only apply to the website's domain. Network access limits don’t affect the website’s resources.
- The list of domains that your plugin can access is displayed on your plugin's Community page.

`networkAccess` has the following properties:

- `allowedDomains` is a required list of strings. The strings are match patterns for domains that your plugin is permitted to access. If `networkAccess` is used, `allowedDomains` must include at least one pattern. Optionally, patterns can start with one of the permitted schemes: `http`, `https`, `ws`, or `wss`. The `*` character may be used as a wildcard for subdomains, or used to represent all domains.
- `reasoning` is a usually-optional string that describes why your plugin needs to access the allowed domains. `reasoning` is required if:Your `allowedDomains` list includes `"*"`Your `allowedDomains` list includes local or development servers. If you only need local or development servers for development, please use `devAllowedDomains` instead.
- Your `allowedDomains` list includes `"*"`
- Your `allowedDomains` list includes local or development servers. If you only need local or development servers for development, please use `devAllowedDomains` instead.
- `devAllowedDomains` is an optional list of strings. The strings are match patterns for domains that your plugin is permitted to access during development. You can use most of the same patterns in `devAllowedDomains` as you can in `allowedDomains`.

Valid patterns for `allowedDomains`:

- `["none"]`: The plugin cannot access any external network resources. Note that we preload the Inter font for use in plugins, so you don't need to include an Inter font source in your allowedDomains.

Valid patterns for `allowedDomains` and `devAllowedDomains`:

- `["*"]`: The plugin may access any external network resources. If this pattern is included in `allowedDomains`, the `reasoning` property is required.
- `["*.example.com"]`: The `*` character can be used to permit all subdomains of a given domain.
- `["http://example.com", "https://example.com", "ws://example.com", "wss://example.com"]`: `http`, `https`, `ws`, and `wss` are permitted schemes that can be used to prefix domains. Other schemes, such as `file`, cannot be used.
- `["api.example.com/rest/get", "www.example.com/images/", "http://s3.amazonaws.com/example_bucket/"]`: URLs to specific resources can be used.
- `["example.com", "figma.com"]`: Domains can be used without schemes, subdomains, or wildcards.
- `["http://localhost", "https://localhost", "http://localhost:3000", "http://localhost:8081"]`: During development, the plugin can access a local/development web server. If the server is running on a port other than port 80, the port number can be provided after the URL. If this pattern is included in `allowedDomains`, the `reasoning` property is required.

##### note

In the previous example, the trailing slash in `www.example.com/images/` identifies a path to multiple resources. For example, `www.example.com/images/` lets a plugin access images at `www.example.com/images/img1.png` and `www.example.com/images/img2.png`.

A pattern with no trailing slash blocks any deeper access to files on that path. For example, `api.example.com/rest/get` stops a plugin from accessing `api.example.com/rest/get/exampleresource.json`. This can be useful, for example, if your plugin uses a REST API endpoint and you want to restrict the plugin to that endpoint only.

For example:

```
"networkAccess": { "allowedDomains": [ "figma.com", "*.google.com", "https://my-app.cdn.com", "wss://socket.io", "example.com/api/", "exact-path.com/content" ], "devAllowedDomains": [ "http://localhost:3000" ]}
```More formally,

```
interface NetworkAccess { allowedDomains: string[] reasoning?: string devAllowedDomains: string[]}
```
