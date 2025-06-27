---
title: ExportSettings
slug: ExportSettings
source_file: plugin-api-ExportSettings.html
source_url: https://www.figma.com/plugin-docs/api/ExportSettings/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: f9a186dc07a6d519
token_count: 1427
---
# ExportSettings

Figma has four types of exports: images, SVGs, PDFs, and REST API JSON.

```
type ExportSettings = | ExportSettingsImage | ExportSettingsSVG | ExportSettingsPDF | ExportSettingsREST
````ExportSettings` is used for the [`exportSettings`](/plugin-docs/api/node-properties/#exportsettings)
 property and the [`exportAsync`](/plugin-docs/api/properties/nodes-exportasync/)
 function.

## Common properties

### contentsOnly?: boolean [readonly]

Whether only the contents of the node are exported, or any overlapping layer in the same area. Defaults to `true`.

### useAbsoluteBounds?: boolean [readonly]

Use the full dimensions of the node regardless of whether or not it is cropped or the space around it is empty. Use this to export text nodes without cropping. Defaults to `false`.

### suffix?: string [readonly]

Suffix appended to the file name when exporting. Defaults to empty string.

### colorProfile?: 'DOCUMENT' | 'SRGB' | 'DISPLAY_P3_V4' [readonly]

Color profile of the export.

Defaults to `'DOCUMENT'`

- `"DOCUMENT"`: Use the color profile of `documentColorProfile`.
- `"SRGB"`: Use sRGB colors. This was the previous behavior of Figma before color management.
- `"DISPLAY_P3_V4"`: Use Display P3 colors.

## ExportSettingsImage

### format: 'JPG' | 'PNG' [readonly]

The string literal representing the export format.
When reading [`exportSettings`](/plugin-docs/api/node-properties/#exportsettings)
, always check the `format` before reading other properties.

### constraint?: ExportSettingsConstraints [readonly]

Constraint on the image size when exporting.

```
interface ExportSettingsConstraints { type: "SCALE" | "WIDTH" | "HEIGHT" value: number}
```Defaults to 100% of image size `{ type: "SCALE", value: 1 }`.

- `"SCALE"`: The size of the exported image is proportional to the size of the exported layer in Figma. A `value` of 1 means the export is 100% of the layer size.
- `"WIDTH"`: The exported image is scaled to have a fixed width of `value`.
- `"HEIGHT"`: The exported image is scaled to have a fixed height of `value`.

## SVG export

[`ExportSettingsSVG`](#exportsettingssvg)
 controls SVG export settings.
The [`exportAsync`](/plugin-docs/api/properties/nodes-exportasync/)
 function supports an additional [`ExportSettingsSVGString`](#exportsettingssvgstring)
 type for exporting a node to an SVG string.
Both types have the below common properties.

### Common SVG export properties

### svgOutlineText?: boolean [readonly]

Whether text elements are rendered as outlines (vector paths) or as `` elements in SVGs. Defaults to `true`.

Rendering text elements as outlines guarantees that the text looks exactly the same in the SVG as it does in the browser/inside Figma.

Exporting as `` allows text to be selectable inside SVGs and generally makes the SVG easier to read. However, this relies on the browser’s rendering engine which can vary between browsers and/or operating systems. As such, visual accuracy is not guaranteed as the result could look different than in Figma.

### svgIdAttribute?: boolean [readonly]

Whether to include layer names as ID attributes in the SVG. This can be useful as a way to reference particular elements, but increases the size of the SVG. SVG features that require IDs to function, such as masks and gradients, will always have IDs. Defaults to `false`.

### svgSimplifyStroke?: boolean [readonly]

Whether to export inside and outside strokes as an approximation of the original to simplify the output. Otherwise, it uses a more precise but more bloated masking technique. This is needed because SVGs only support center strokes. Defaults to `true`.

### ExportSettingsSVG

### format: 'SVG' [readonly]

The string literal "SVG" representing the export format.
When reading [`exportSettings`](/plugin-docs/api/node-properties/#exportsettings)
, always check the `format` before reading other properties.

### ExportSettingsSVGString

This is used only by [`exportAsync`](/plugin-docs/api/properties/nodes-exportasync/)
, and is the same as `ExportSettingsSVG` above, but exports the node as an `"..."` string rather than a Uint8Array.

### format: 'SVG_STRING' [readonly]

The string literal "SVG_STRING" representing the export format.

## ExportSettingsPDF

### format: 'PDF' [readonly]

The string literal "PDF" representing the export format.
When reading [`exportSettings`](/plugin-docs/api/node-properties/#exportsettings)
, always check the `format` before reading other properties.

## ExportSettingsREST

This returns a JSON object in the shape of the response of the [https://api.figma.com/v1/files](https://api.figma.com/v1/files)
 endpoint. For more information read about the API [here](https://www.figma.com/developers/api#get-files-endpoint)
.

### format: 'JSON_REST_V1' [readonly]

Returns the equivalent REST API response of hitting the endpoint `https://api.figma.com/v1/files/:file_key/nodes?ids=:id`.

This is useful if you have existing code that uses the REST API that you would like to have work inside a plugin as well. It can also be significantly more perfomant if you need to serialize large groups of nodes and their children.
Here is an example that logs the name of every child in a node using the REST API response:

Using the JSON_REST_V1 format```
function visitChildren(child: Object) { console.log(child.name); if (child.children) { child.children.forEach(visitChildren); }}const response = await figma.currentPage.selection[0].exportAsync({ format: "JSON_REST_V1",});visitChildren(response.document);
```For more information on the shape of the output of the 'JSON_REST_V1' format, see: [https://www.figma.com/developers/api#files](https://www.figma.com/developers/api#files)