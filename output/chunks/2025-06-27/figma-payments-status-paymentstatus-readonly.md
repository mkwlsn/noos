---
title: 'status: PaymentStatus [readonly]'
slug: figma-payments-status-paymentstatus-readonly
source_file: plugin-api-figma-payments.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-payments/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 8b4ea09e02221a49
token_count: 324
chunk_title: 'status: PaymentStatus [readonly]'
chunk_slug: figma-payments-status-paymentstatus-readonly
chunk_index: 1
chunk_of_total: 7
parent_file: figma-payments.md
parent_slug: figma-payments
char_count: 1131
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-payments-introduction
  - figma-payments-setpaymentstatusindevelopmentstatus-paym
  - figma-payments-getuserfirstransecondsago-number
  - figma-payments-initiatecheckoutasyncoptions-interstitia
  - figma-payments-requestcheckout-void
  - figma-payments-getpluginpaymenttokenasync-promise
compiler: noos-figma
---

An object describing the user’s payment status. Right now, the only
attribute on this object is whether the user has paid. In the future, we
might add more attributes here to provide more information.

```
type PaymentStatus = { type: "UNPAID" | "PAID" | "NOT_SUPPORTED"}
```A status type of `NOT_SUPPORTED` indicates that an internal error has occurred
and the user's payment status could not be determined at that time. Plugins
should treat `NOT_SUPPORTED` as an error and not grant access to paid features.

In development, you’ll be able to test out the entire checkout flow without
having to input any actual payment information. Doing so will update your
payment status accordingly. Any changes to payment status in development is
local and not persisted, and will be reset when restarting your client or
using a different machine.

##### info

To test out your plugin or widget with payment statuses other than `UNPAID`
while developing, use the [`setPaymentStatusInDevelopment`](/plugin-docs/api/figma-payments/#setpaymentstatusindevelopment)

function.

For published resources, this always returns `PAID` for the creator.
