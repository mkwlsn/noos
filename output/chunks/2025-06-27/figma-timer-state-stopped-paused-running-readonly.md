---
title: 'state: ''STOPPED'' | ''PAUSED'' | ''RUNNING'' [readonly]'
slug: figma-timer-state-stopped-paused-running-readonly
source_file: plugin-api-figma-timer.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-timer/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: aa7e637818244509
token_count: 67
chunk_title: 'state: ''STOPPED'' | ''PAUSED'' | ''RUNNING'' [readonly]'
chunk_slug: figma-timer-state-stopped-paused-running-readonly
chunk_index: 2
chunk_of_total: 4
parent_file: figma-timer.md
parent_slug: figma-timer
char_count: 234
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-timer-introduction
  - figma-timer-remaining-number-readonly-total-number-r
  - figma-timer-start-seconds-number-void
compiler: noos-figma
---

The current state of the timer. If the timer is started and not paused, the state will be `"RUNNING"`. If the timer is not started or finished, the state is `"STOPPED"`. And if the timer is started but paused, the state is `"PAUSED"`.
