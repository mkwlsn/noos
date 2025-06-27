---
title: saveVersionHistoryAsync
slug: figma-saveversionhistoryasync
source_file: plugin-api-figma-saveversionhistoryasync.html
source_url: https://www.figma.com/plugin-docs/api/figma-saveversionhistoryasync/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 587b65e649d8a62c
token_count: 390
---
# saveVersionHistoryAsync

Saves a new version of the file and adds it to the version history of the file. Returns the new version id.

## Signature

### saveVersionHistoryAsync(title: string, description?: string): Promise

## Parameters

### title

The title of the version. This must be a non-empty string.

### description

An optional argument to describe the version.

Calling `saveVersionHistoryAsync` returns a promise that resolves to `null` or an instance of `VersionHistoryResult`:

```
interface VersionHistoryResult { id: string}
```- `id`: The version id of this newly saved version.

## Remarks

It is not guaranteed that all changes made before this method is used will be saved to version history.
For example,

Changes may not all be saved```
async function example() { await figma.createRectangle(); await figma.saveVersionHistoryAsync('v1'); figma.closePlugin();}example().catch((e) => figma.closePluginWithFailure(e))
```The newly created rectangle may not be included in the v1 version. As a work around, you can wait before calling `saveVersionHistoryAsync()`. For example,

Wait to save```
async function example() { await figma.createRectangle(); await new Promise(r => setTimeout(r, 1000)); // wait for 1 second await figma.saveVersionHistoryAsync('v1'); figma.closePlugin();}
```Typically, manual changes that precede the execution of `saveVersionHistoryAsync()` will be included. If you want to use `saveVersionHistoryAsync()` before the plugin makes
additional changes, make sure to use the method with an async/await or a Promise.