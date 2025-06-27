---
title: "NODE" action
slug: Action-node-action
source_file: plugin-api-Action.html
source_url: https://www.figma.com/plugin-docs/api/Action/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: d384da97c02f1345
token_count: 611
chunk_title: "NODE" action
chunk_slug: Action-node-action
chunk_index: 5
chunk_of_total: 6
parent_file: Action.md
parent_slug: Action
char_count: 2138
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: ["Action-introduction", "Action-url-action-updatemediaruntime-action", "Action-setvariable-action", "Action-setvariablemode-action", "Action-conditional-action"]
---

This action navigates to a new node.

`destinationId: string | null`: The ID of the destination node being navigated to. This may be null when invalid (e.g. points to a deleted node).

`navigation: Navigation`: The method of navigation. The possible values are:

- `"NAVIGATE"`: Replaces the current screen with the destination, also closing all overlays.
- `"OVERLAY"`: Opens the destination as an overlay on the current screen.
- `"SWAP"`: On an overlay, replaces the current (topmost) overlay with the destination. On a top-level frame, behaves the same as `"NAVIGATE"` except that no entry is added to the navigation history.
- `"SCROLL_TO"`: Scrolls to the destination on the current screen.
- `"CHANGE_TO"`: Changes the closest ancestor instance of source node to the specified variant.

`transition: Transition | null`: An animated transition when navigating, if any. See the [`Transition`](/plugin-docs/api/Transition/)
 object type.

`preserveScrollPosition?: boolean`: Whether the scroll offsets of any scrollable elements in the current screen or overlay are preserved when navigating to the destination. This is applicable only if the layout of both the current frame and its destination are the same.

`overlayRelativePosition?: Vector`: Applicable only when `navigation` is `"OVERLAY"` and the destination is a frame with `overlayPosition` equal to `"MANUAL"`. This value represents the offset by which the overlay is opened relative to this node.

`resetVideoPosition?: boolean`: When true, all videos within the destination frame will reset their memorized playback position to 00:00 before starting to play.

`resetScrollPosition?: boolean`: Whether the scroll offsets of any scrollable elements in the current screen or overlay are reset when navigating to the destination. This is applicable only if the layout of both the current frame and its destination are the same.

`resetInteractiveComponents?: boolean`: Whether the state of any interactive components in the current screen or overlay are reset when navigating to the destination. This is applicable if there are interactive components in the destination frame.