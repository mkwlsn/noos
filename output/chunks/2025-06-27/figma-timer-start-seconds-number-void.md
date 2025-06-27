---
title: 'start: (seconds: number) => void'
slug: figma-timer-start-seconds-number-void
source_file: plugin-api-figma-timer.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-timer/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 645b247271357efe
token_count: 113
chunk_title: 'start: (seconds: number) => void'
chunk_slug: figma-timer-start-seconds-number-void
chunk_index: 3
chunk_of_total: 4
parent_file: figma-timer.md
parent_slug: figma-timer
char_count: 393
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-timer-introduction
  - figma-timer-remaining-number-readonly-total-number-r
  - figma-timer-state-stopped-paused-running-readonly
compiler: noos-figma
---

Start the timer with `seconds` seconds remaining. If the timer is not currently started, will start the timer with this total time. If the timer is currently started, will set the remaining time to this value, and increment or decrement the timer's total time based on how much time was added or removed from the remaining time. If the timer was previously paused, will also unpause the timer.
