---
title: >-
  initiateCheckoutAsync(options?: { interstitial: 'PAID_FEATURE' | 'TRIAL_ENDED'
  | 'SKIP' }): Promise
slug: figma-payments-initiatecheckoutasyncoptions-interstitia
source_file: plugin-api-figma-payments.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-payments/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 18b555bf9f793923
token_count: 386
chunk_title: >-
  initiateCheckoutAsync(options?: { interstitial: 'PAID_FEATURE' | 'TRIAL_ENDED'
  | 'SKIP' }): Promise
chunk_slug: figma-payments-initiatecheckoutasyncoptions-interstitia
chunk_index: 4
chunk_of_total: 7
parent_file: figma-payments.md
parent_slug: figma-payments
char_count: 1350
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-payments-introduction
  - figma-payments-status-paymentstatus-readonly
  - figma-payments-setpaymentstatusindevelopmentstatus-paym
  - figma-payments-getuserfirstransecondsago-number
  - figma-payments-requestcheckout-void
  - figma-payments-getpluginpaymenttokenasync-promise
compiler: noos-figma
---

This triggers a checkout flow in the Figma UI for the user to purchase your
plugin or widget. The user will be prompted to enter their payment
information and purchase your resource. This function resolves either when
the user has completed the checkout flow, or they’ve dismissed it.

##### warning

This function will throw an exception in certain cases:

1. While in query mode and accepting plugin parameters.
2. During widget rendering. Instead, put calls to this function inside your widget event handlers.

See [our guide](/plugin-docs/requiring-payment/#when-to-call-initiatecheckoutasync)
 for more information.

This function takes an `options` argument that controls the behavior of the
checkout flow.

```
type CheckoutOptions = { // This option controls the behavior and copy of the // interstitial checkout modal. // // * PAID_FEATURE: This is the default. Use this option if // you're asking the user to pay for a // certain premium feature. // // * TRIAL_ENDED: Use this option if the user's free trial // has ended. // // * SKIP: Use this option if you want to skip the // interstitial entirely. This is useful if // you have your own upgrade CTA in your // plugin's UI. interstitial?: "PAID_FEATURE" | "TRIAL_ENDED" | "SKIP"}
```After `initiateCheckoutAsync` resolves, use `figma.payments.status` to check
the user’s payment status.
