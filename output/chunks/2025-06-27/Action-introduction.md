---
title: Introduction
slug: Action-introduction
source_file: plugin-api-Action.html
source_url: 'https://www.figma.com/plugin-docs/api/Action/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: a833bedc9f8b5351
token_count: 428
chunk_title: Introduction
chunk_slug: Action-introduction
chunk_index: 0
chunk_of_total: 6
parent_file: Action.md
parent_slug: Action
char_count: 1497
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - Action-url-action-updatemediaruntime-action
  - Action-setvariable-action
  - Action-setvariablemode-action
  - Action-conditional-action
  - Action-node-action
compiler: noos-figma
---

# Action

```
type Action = { readonly type: "BACK" | "CLOSE" } | { readonly type: "URL", url: string } | { readonly type: "UPDATE_MEDIA_RUNTIME", readonly destinationId: string | null, readonly mediaAction: | "PLAY" | "PAUSE" | "TOGGLE_PLAY_PAUSE" | "MUTE" | "UNMUTE" | "TOGGLE_MUTE_UNMUTE" } | { readonly type: "UPDATE_MEDIA_RUNTIME", readonly destinationId?: string | null, readonly mediaAction: "SKIP_FORWARD" | "SKIP_BACKWARD" readonly amountToSkip: number } | { readonly type: "UPDATE_MEDIA_RUNTIME", readonly destinationId?: string | null, readonly mediaAction: "SKIP_TO" readonly newTimestamp: number } | { readonly type: 'SET_VARIABLE' readonly variableId: string | null readonly variableValue?: VariableData } | { readonly type: 'SET_VARIABLE_MODE' readonly variableCollectionId: string | null readonly variableModeId: string | null } | { readonly type: 'CONDITIONAL' readonly conditionalBlocks: ConditionalBlock[] } { readonly type: "NODE", readonly destinationId: string | null, readonly navigation: Navigation, readonly transition: Transition | null, readonly preserveScrollPosition?: boolean, readonly overlayRelativePosition?: Vector, readonly resetVideoPosition?: boolean, readonly resetScrollPosition?: boolean, readonly resetInteractiveComponents?: boolean, }type Navigation = "NAVIGATE" | "SWAP" | "OVERLAY" | "SCROLL_TO" | "CHANGE_TO"
```A prototyping `Action` describes interactivity in prototypes. Specifically, "what happens?" upon a [`Trigger`](/plugin-docs/api/Trigger/)
.
