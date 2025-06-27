---
title: 'remaining: number [readonly] + total: number [readonly]'
slug: figma-timer-remaining-number-readonly-total-number-r
source_file: plugin-api-figma-timer.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-timer/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 6e5a661bc56690d1
token_count: 89
chunk_title: 'remaining: number [readonly] + total: number [readonly]'
chunk_slug: figma-timer-remaining-number-readonly-total-number-r
chunk_index: 1
chunk_of_total: 4
parent_file: figma-timer.md
parent_slug: figma-timer
char_count: 311
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - figma-timer-introduction
  - figma-timer-state-stopped-paused-running-readonly
  - figma-timer-start-seconds-number-void
merged_titles:
  - 'remaining: number [readonly]'
  - 'total: number [readonly]'
compiler: noos-figma
---

Time remaining on timer, in seconds. If the timer has not been started, returns 0.

Total time on timer, in seconds. If the timer has not been started, returns 0. The total time is defined as the time the timer was initially started at, plus or minus any time that may have been added or removed from the timer.
