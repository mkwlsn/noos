---
title: 'requestToBeEnabledAsync(): Promise'
slug: figma-textreview-requesttobeenabledasync-promise
source_file: plugin-api-figma-textreview.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-textreview/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: eabbb87a6f322099
token_count: 127
chunk_title: 'requestToBeEnabledAsync(): Promise'
chunk_slug: figma-textreview-requesttobeenabledasync-promise
chunk_index: 1
chunk_of_total: 3
parent_file: figma-textreview.md
parent_slug: figma-textreview
char_count: 442
heading_level: h3
chunk_type: method
merge_type: atomic
tags: []
sibling_chunks:
  - figma-textreview-introduction
  - figma-textreview-requesttobedisabledasync-promise-isenabl
compiler: noos-figma
---

This method will request your plugin to be enabled as a text review plugin for the user.
A modal will pop up that will ask the user if they want to enable the plugin for text review.
The promise returned by the function will be resolved if the user accepts in the dialog and will be rejected if the user cancels.
Note that to prevent spam the promise will be auto rejected if the user cancels the request multiple times in a given plugin run.
