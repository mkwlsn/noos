---
title: Introduction
slug: Video-introduction
source_file: plugin-api-Video.html
source_url: 'https://www.figma.com/plugin-docs/api/Video/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 24d4de4745e99b51
token_count: 231
chunk_title: Introduction
chunk_slug: Video-introduction
chunk_index: 0
chunk_of_total: 1
parent_file: Video.md
parent_slug: Video
char_count: 807
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# Video

This object is handle to a video stored in Figma.

Like images, instead of video layers, Figma has video fills [`VideoPaint`](/plugin-docs/api/Paint/)
. In fact, dragging a video into Figma creates a rectangle with an video fill. Creating a video on the canvas requires creating a rectangle (or other shape), following by adding a video fill to it.

New videos can be created via [`figma.createVideoAsync`](/plugin-docs/api/properties/figma-createvideoasync/)
 from a `Uint8Array` containing the bytes of the video file.

Figma supports MP4, MOV, and WebM files. Videos can be up to 100 MB in size. Video can only be added to files in a paid Education, Professional, and Organization team. Plugins running on files in free Starter teams can edit existing video in a file but not upload video to it.
