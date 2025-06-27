---
compiler: noos-figma
created: '2025-06-27T06:12:59.167Z'
version: 1.0.0
content_hash: a5bfd31fd85d52c3
---
---
title: "URL" action + "UPDATE_MEDIA_RUNTIME" action
slug: Action-url-action-updatemediaruntime-action
source_file: plugin-api-Action.html
source_url: https://www.figma.com/plugin-docs/api/Action/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 81e8158a773be564
token_count: 283
chunk_title: "URL" action + "UPDATE_MEDIA_RUNTIME" action
chunk_slug: Action-url-action-updatemediaruntime-action
chunk_index: 1
chunk_of_total: 3
parent_file: Action.md
parent_slug: Action
char_count: 988
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks: ["Action-introduction", "Action-setvariable-action"]
merged_titles: [""URL" action", ""UPDATE_MEDIA_RUNTIME" action"]
---

This action opens an external URL specified in the `url: string` parameter. If `openInNewTab: boolean` is set, a new browser tab will be opened.

This action alters the playing status of all video fills on the destination node. If `destinationId` is not set, then it will update video fills on the current node.

`mediaAction: MediaAction` determines

- `"PLAY"`: Plays the video.
- `"PAUSE"`: Pauses the video.
- `"TOGGLE_PLAY_PAUSE"`: Plays the video if it is paused, and pauses the video if it is playing.
- `"MUTE"`: Mutes the video.
- `"UNMUTE"`: Unmutes the video.
- `"TOGGLE_MUTE_UNMUTE`"`: Mutes the video if it is unmuted, and unmutes the video if it is muted.
- `"SKIP_FORWARD"`: Jumps forward in time in the video. An `amountToSkip` must be provided (in seconds).
- `"SKIP_BACKWARD"`: Jumps backward in time in the video. An `amountToSkip` must be provided (in seconds).
- `"SKIP_TO"`: Jumps to a specific timestamp in the video. A `newTimestamp` must be provided (in seconds).
