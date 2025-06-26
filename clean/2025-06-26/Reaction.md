---
title: Reaction
slug: Reaction
source_file: plugin-api-Reaction.html
source_url: https://www.figma.com/plugin-docs/api/Reaction/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: e852b564ec8e3f73
token_count: 147
---
# Reaction

```
type Reaction = { action?: Action, actions?: Action[], trigger: Trigger | null }
```A prototyping `Reaction` describes interactivity in prototypes. It contains a list of [`Action`](/plugin-docs/api/Action/) objects ("what happens?") and a [`Trigger`](/plugin-docs/api/Trigger/) ("how do you make it happen?").

Note: The `action` field is now deprecated and replaced by the `actions` field in order to allow for multiple `Actions` on a `Reaction`.

##### info

When setting reactions, each `Reaction` must contain both a `Trigger` and a non-empty list of `Action` objects.