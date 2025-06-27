---
title: Introduction
slug: figma-payments-introduction
source_file: plugin-api-figma-payments.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-payments/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: cee3399b11a727a3
token_count: 98
chunk_title: Introduction
chunk_slug: figma-payments-introduction
chunk_index: 0
chunk_of_total: 7
parent_file: figma-payments.md
parent_slug: figma-payments
char_count: 343
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-payments-status-paymentstatus-readonly
  - figma-payments-setpaymentstatusindevelopmentstatus-paym
  - figma-payments-getuserfirstransecondsago-number
  - figma-payments-initiatecheckoutasyncoptions-interstitia
  - figma-payments-requestcheckout-void
  - figma-payments-getpluginpaymenttokenasync-promise
compiler: noos-figma
---

# figma.payments

These are all defined on `figma.payments`.

##### warning

`payments` must be specified in the permissions array in `manifest.json` to access this property.

```
{ "permissions": ["payments"]}
```If your manifest doesn't contain these fields, the payments API methods described below will throw errors if you try to use them.
