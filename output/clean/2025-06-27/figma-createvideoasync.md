---
title: createVideoAsync
slug: figma-createvideoasync
source_file: plugin-api-figma-createvideoasync.html
source_url: https://www.figma.com/plugin-docs/api/figma-createvideoasync/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 311945363d1d295e
token_count: 206
---
# createVideoAsync

Creates a `Video` object from the raw bytes of a file content. Like `Image` objects, `Video` objects are not nodes. They are handles to images stored by Figma. Frame backgrounds, or fills of shapes (e.g. a rectangle) may contain videos.

## Signature

### createVideoAsync(data: Uint8Array): Promise

## Remarks

The `data` passed in must be encoded as a .MP4, .MOV, or .WebM. Videos have a maximum size of 100MB. Invalid videos will throw an error.

Video can only be added to files in a paid Education, Professional, and Organization team. Plugins running on files in free Starter teams can edit existing video in a file but not upload video to it.

## Possible error cases

`Uploading videos only works in files in paid Pro teams`

`Video file type must be MP4`

`Video file must be less than 100MB`