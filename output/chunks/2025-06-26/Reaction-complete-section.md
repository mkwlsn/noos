---
title: Complete Section
slug: Reaction-complete-section
source_file: plugin-api-Reaction.html
source_url: 'https://www.figma.com/plugin-docs/api/Reaction/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: e852b564ec8e3f73
token_count: 168
chunk_title: Complete Section
chunk_slug: Reaction-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: Reaction.md
parent_slug: Reaction
char_count: 588
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# Reaction

```
type Reaction = { action?: Action, actions?: Action[], trigger: Trigger | null }
```A prototyping `Reaction` describes interactivity in prototypes. It contains a list of [`Action`](/plugin-docs/api/Action/) objects ("what happens?") and a [`Trigger`](/plugin-docs/api/Trigger/) ("how do you make it happen?").

Note: The `action` field is now deprecated and replaced by the `actions` field in order to allow for multiple `Actions` on a `Reaction`.

##### info

When setting reactions, each `Reaction` must contain both a `Trigger` and a non-empty list of `Action` objects.
