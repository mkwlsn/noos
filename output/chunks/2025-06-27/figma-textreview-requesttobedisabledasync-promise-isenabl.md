---
title: 'requestToBeDisabledAsync(): Promise + isEnabled: boolean [readonly]'
slug: figma-textreview-requesttobedisabledasync-promise-isenabl
source_file: plugin-api-figma-textreview.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-textreview/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 1243480ad1f2fc2c
token_count: 115
chunk_title: 'requestToBeDisabledAsync(): Promise + isEnabled: boolean [readonly]'
chunk_slug: figma-textreview-requesttobedisabledasync-promise-isenabl
chunk_index: 2
chunk_of_total: 3
parent_file: figma-textreview.md
parent_slug: figma-textreview
char_count: 402
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - figma-textreview-introduction
  - figma-textreview-requesttobeenabledasync-promise
merged_titles:
  - 'requestToBeDisabledAsync(): Promise'
  - 'isEnabled: boolean [readonly]'
compiler: noos-figma
---

This method will disable the plugin as a text review plugin if it is enabled. The promise will resolve if it has been successfully been disabled and reject if it wasn’t enabled in the first place.

This property is a readonly boolean that can be used to check if your plugin is enabled as a text review plugin for the user. It will be true if the plugin is enabled, and false if the plugin is disabled.
