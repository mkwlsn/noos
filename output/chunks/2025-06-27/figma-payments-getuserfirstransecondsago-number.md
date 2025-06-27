---
title: 'getUserFirstRanSecondsAgo(): number'
slug: figma-payments-getuserfirstransecondsago-number
source_file: plugin-api-figma-payments.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-payments/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 75f3003374a40572
token_count: 82
chunk_title: 'getUserFirstRanSecondsAgo(): number'
chunk_slug: figma-payments-getuserfirstransecondsago-number
chunk_index: 3
chunk_of_total: 7
parent_file: figma-payments.md
parent_slug: figma-payments
char_count: 287
heading_level: h3
chunk_type: method
merge_type: atomic
tags: []
sibling_chunks:
  - figma-payments-introduction
  - figma-payments-status-paymentstatus-readonly
  - figma-payments-setpaymentstatusindevelopmentstatus-paym
  - figma-payments-initiatecheckoutasyncoptions-interstitia
  - figma-payments-requestcheckout-void
  - figma-payments-getpluginpaymenttokenasync-promise
compiler: noos-figma
---

When the plugin was first run by the current user.

This is defined as the number of seconds since the current user ran the
plugin or widget for the first time. This will return 0 the very first time
a user runs your plugin, and will always return 0 when running a plugin in
development.
