---
title: `"run"`
slug: figma-on-run
source_file: plugin-api-figma-on.html
source_url: https://www.figma.com/plugin-docs/api/figma-on/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 7370e4e8e1a361db
token_count: 215
chunk_title: `"run"`
chunk_slug: figma-on-run
chunk_index: 8
chunk_of_total: 11
parent_file: figma-on.md
parent_slug: figma-on
char_count: 752
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: ["figma-on-introduction", "figma-on-ontype-stylechange-callback-event-stylec", "figma-on-callback", "figma-on-currentpagechange-selectionchange", "figma-on-documentchange", "figma-on-textreview", "figma-on-drop", "figma-on-close", "figma-on-stylechange", "figma-on-timerstart"]
---

This event is triggered when a plugin is run. For plugins with parameters, this happens after all parameters have been enter by the user in the quick action UI. For all other plugins this happens immediately after launch.

The callback will be passed a `RunEvent` that looks like:

```
interface RunEvent { parameters?: ParameterValues command: string}
```- The `parameters` property is of type `ParameterValues`, and contains the value entered for each parameter.
- The `command` argument is the same as `figma.command`, but provided here again for convenience.

Handling the `run` event is only required for plugins with parameters. For all plugins it can still be a convenient spot to put your top level code, since it is called
on every plugin run.