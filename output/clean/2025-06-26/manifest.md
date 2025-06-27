---
title: Plugin Manifest
slug: manifest
source_file: plugin-api-manifest.html
source_url: https://www.figma.com/plugin-docs/api/manifest/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 97d915e888160d17
token_count: 3993
---
# Plugin Manifest

Each plugin must define a `manifest.json` file that describes the plugin. If you use the "Create new plugin" dialog, Figma will automatically create a simple manifest for you. You can extend this generated manifest to take advantage of additional features, for example, to declare a submenu for your plugin.

Example:

manifest.json```
{ "name": "MyPlugin", "id": "737805260747778092", "api": "1.0.0", "editorType": ["figma", "figjam"], "main": "code.js", "ui": "ui.html", "documentAccess": "dynamic-page", "networkAccess": { "allowedDomains": ["none"] }}
```### name: string

The name of the plugin, as it will appear in the menu.

### id: string

The plugin ID to publish updates to. This ID will be assigned to you by Figma and is typically obtained using the "Create new Plugin" feature, which will generate a manifest file with a new `id`. You can also get a new plugin ID at the time of publishing your plugin.

### api: string

The version of the Figma API used by the plugin. We recommend updating to the latest version whenever possible to get the latest features, bug fixes, and documentation. However, we don't auto-upgrade the api version of plugins to give you the chance to test your plugin against the new version.

### main: string

The relative file path to the Javascript code of your plugin.

### ui?: string | { [key: string]: string }

Used to specify HTML file/files that can be used in the iframe modal via [`figma.showUI`](/plugin-docs/api/properties/figma-showui/), if you choose to have one.

- If a single string is specified, this is the relative file path to the HTML file whose contents will be available as a string in the Javascript code via the constant `__html__`.
- If a map is specified, each entry of the map will be available at `__uiFiles__`

### documentAccess?: 'dynamic-page'

This field ensures the plugin supports dynamic page loading. The field is required for all new plugins and the value must be `dynamic-page`.

- If the manifest field is included, no additional page loads will occur when the plugin is run.
- If the manifest field is omitted, then running the plugin will trigger additional page loads in files with more than one page. The first time the plugin is run after a user opens a file, the entire file will load and Figma will show a "Loading n pages for plugin…" notification, where `n` is the number of pages being loaded.

If your existing plugin's manifest doesn't include this field, you should [migrate your plugin to use dynamic page loading](/plugin-docs/migrating-to-dynamic-loading/).

### networkAccess?: NetworkAccess

Used to specify the list of domains that your plugin is permitted to access. When `networkAccess` is used:

- Your plugin can only access the domains that you specify. If your plugin attempts to access other domains, the plugin is prevented from doing so.##### note

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
```### parameters?: Parameter[]

Used to specify the list of parameters that your plugin accepts as input. Can also be defined on [menu items](/plugin-docs/manifest/#menu). Here's an example:

```
"parameters": [ { "name": "Icon name", "key": "icon-name", "description": "Enter the name of the icon you want to insert." }, { "name": "Size", "key": "size", "description": "Enter the size of the icon you want to insert.", "allowFreeform": true }, { "name": "Color", "key": "color", "description": "Enter the color of the icon you want to insert.", "allowFreeform": true, "optional": true }]
```Each parameter has the following properties:

- A `name` property that specifies the name given to this parameter in the UI.
- A `key` property that is a unique id used to identify the value of this property in `ParameterValues`.
- An optional `description` property that gives a more detailed description that is displayed in the UI.
- An optional `allowFreeform` property that allows the user to enter any value for this parameter, not just those suggested by the plugin.
- An optional `optional` property that indicates the parameter can be skipped in the UI.

More formally,

```
interface Parameter { name: string key: string description?: string allowFreeform?: boolean optional?: boolean}
```### parameterOnly?: boolean

Allows you to specify that your plugin can only be launched with parameters. You must also specify a valid parameter list: [`parameters`](/plugin-docs/manifest/#parameters).
Can also be defined on [menu items](/plugin-docs/manifest/#menu) with parameters.

If `true`, users will always be prompted to enter parameters in the quick action UI before your plugin is run.
If `false`, users will only be asked to enter parameters if they launch the plugin through the Quick Actions UI and hit the `tab` key. If the user launches the plugin through
the context menu or the main menu, the plugin will be launched directly without displaying the parameter UI.

Defaults to `true`

### editorType: ('figma' | 'figjam' | 'dev')[]

This allows you to specify the editor(s) that your plugin is intended for and will impact which editor your plugin appears in.

editorTypedescription`"figma"`Figma design mode`"figjam"`FigJam`"dev"`Figma Dev Mode The following value is unsupported:

```
"editorType": ["figjam", "dev"]
```### menu?: ManifestMenuItem[]

This allows you to specify a submenu for your plugin, enabling the plugin to contain multiple commands. Use the [`figma.command`](/plugin-docs/api/figma/#command) property to determine which command the user selected.

The `menu` property contains a nested list of menu items, menu separators and submenus to be displayed. Here's an example:

```
"menu": [ {"name": "Create Text", "command": "text"}, {"name": "Create Frame", "command": "frame"}, {"separator": true}, {"name": "Create Shape", "menu": [ {"name": "Create Circle", "command": "circle"}, {"separator": true}, {"name": "Create Rectangle", "command": "rectangle"} ] }]
```Each item in the `menu` property must be one of the following three:

- A `name` and a `command` property. This creates a user-clickable submenu item. The `name` property is displayed to the user in the menu. The `command` property is never exposed to the user but is rather exposed to your plugin through the `figma.command` javascript property. You can choose any string value for `command`.
- A `separator` property with the value `true`. This creates a separator in the menu. A separator is not selectable by the user.
- A `name` and a `menu` property. This creates a nested submenu. The `name` property is displayed as name for the submenu. The `menu` property contains an array of menu items following the same format of the top-most `menu` manifest property. The submenu itself can not be selected by the user, but items inside the submenu can be. Submenus can be nested arbitrarily deep.

More formally,

```
type ManifestMenuItem = // Clickable menu item. { name: string, command: string, parameters?: ParameterList[], parameterOnly?: boolean } | // Separator { separator: true } | // Submenu { name: string, menu: ManifestMenuItem[] }
```### relaunchButtons?: ManifestRelaunchButton[]

This configures the relaunch buttons that are set via the [`setRelaunchData`](/plugin-docs/api/properties/nodes-setrelaunchdata/) API call.

Example:

```
"relaunchButtons": [ {"command": "edit", "name": "Edit shape"}, {"command": "open", "name": "Open Shaper", "multipleSelection": true}]
```Each relaunch button in the `relaunchButtons` array is an object with the following properties:

- A `command` property that specifies the `figma.command` that will be supplied when the plugin is run after the button is pressed. This command must match the command supplied in the `setRelaunchData` API call for the button to display.
- A `name` property that gets displayed as the text of the button.
- An optional `multipleSelection` property (defaulting to `false`) that enables the relaunch button and description to appear when multiple nodes are selected. Without `multipleSelection` set to `true` the relaunch buttons will only appear when a single node is selected. Even when `multipleSelection` is `true`, the relaunch buttons will only display if all of the selected nodes have relaunch data attached with the same `command`.

##### info

Note that if the name of a command in the manifest changes or is removed, then all buttons with that command will disappear. This behavior can be used to remove buttons when a particular action is no longer supported by the plugin.

If multiple relaunch buttons are shown for a given node or selection of nodes, the order of the buttons is determined by the order of the elements in the manifest's `relaunchButtons` array.

More formally,

```
type ManifestRelaunchButton = { command: string name: string multipleSelection?: boolean}
```### enableProposedApi?: boolean

See [Proposed API](/plugin-docs/proposed-api/).
Warning: This flag is only meant for development, and will not work in published plugins!

### enablePrivatePluginApi?: boolean

This enables API that's specific to private plugins.
Setting this will also enable local plugins to work with these APIs during development.

### build?: string

Experimental! A shell command to run before we load the file specified in `main` and `ui`. This can be used to call build commands such as compiling with Typescript, running Webpack, etc. The command is run in the directory of the manifest.

### permissions?: PluginPermissionType[]

This allows you to specify what permissions your plugin wants access to.

The possible `PluginPermissionType` are:

```
type PluginPermissionType = "currentuser" | "activeusers" | "fileusers" | "payments" | "teamlibrary"
```##### info

- `activeusers`: lets your plugin use the `figma.activeUsers` API.
- `currentuser`: lets your plugin use the `figma.currentUser` API.
- `fileusers`: lets you use the `StampNode.getAuthorAsync` method.
- `payments`: lets you use the `figma.payments` API.
- `teamlibrary`: lets you use the `figma.teamLibrary` API.

### capabilities?: ('textreview' | 'codegen' | 'inspect' | 'vscode')[]

This allows you to specify what capabilities your plugin has access to.

You can specify one or more of the following values:

- `textreview`
- `codegen`
- `inspect`

Use `textreview` for [text review plugins](/plugin-docs/textreview-plugins/).

Use `codegen` for [codegen plugins](/plugin-docs/working-in-dev-mode/#plugins-for-codegen).

Use `inspect` for [inspect panel plugins](/plugin-docs/working-in-dev-mode/#plugins-for-inspection).

Use `vscode` for [Dev Mode plugins in VS Code](/plugin-docs/working-in-dev-mode/#dev-mode-plugins-in-visual-studio-code).

### codegenLanguages?: CodeLanguage[]

A list of code languages that your plugin supports. This is required for codegen plugins (plugins
where `editorType` is `dev`, and `capabilities` is `inspect`).

Example:

```
// Specify which languages the plugin supports."codegenLanguages": [ { label: "Tailwind", value: "tailwind" }, { label: "CSS", value: "css" },]
```### codegenPreferences?: CodegenPreference[]

Used to specify a list of preferences for your codegen plugin, such as alternative units of measure.

Example:

```
"codegenPreferences": [ // Optional but a unit itemType can be used to specify that the plugin supports a custom scaled unit. By default, all plugins // support the pixel unit. { "itemType": "unit", "scaledUnit": "Rem", "defaultScaleFactor": 16, // Optional, if true the scaled unit is the default. "default": true, // Optional, if omitted, all languages are included. "includedLanguages": [] }, { "itemType": "select", "propertyName": "tabSize", "label": "Tab Size", "options": [ {"label": "2", "value": "2", isDefault: true }, {"label": "4", "value": "4"}, {"label": "8", "value": "8"} ], // Optional, if omitted, all languages are included. "includedLanguages": ["tailwind"] }, { "itemType": "action", "propertyName": "showMore", "label": "More settings..." // Optional, if omitted, all languages are included. "includedLanguages": ["tailwind"], },]
```