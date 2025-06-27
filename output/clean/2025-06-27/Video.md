---
title: Video
slug: Video
source_file: plugin-api-Video.html
source_url: https://www.figma.com/plugin-docs/api/Video/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 71959638c15da591
token_count: 224
---
# Video

This object is handle to a video stored in Figma.

Like images, instead of video layers, Figma has video fills [`VideoPaint`](/plugin-docs/api/Paint/)
. In fact, dragging a video into Figma creates a rectangle with an video fill. Creating a video on the canvas requires creating a rectangle (or other shape), following by adding a video fill to it.

New videos can be created via [`figma.createVideoAsync`](/plugin-docs/api/properties/figma-createvideoasync/)
 from a `Uint8Array` containing the bytes of the video file.

Figma supports MP4, MOV, and WebM files. Videos can be up to 100 MB in size. Video can only be added to files in a paid Education, Professional, and Organization team. Plugins running on files in free Starter teams can edit existing video in a file but not upload video to it.

## Video

### hash: string [readonly]

A unique hash of the contents of the video file.