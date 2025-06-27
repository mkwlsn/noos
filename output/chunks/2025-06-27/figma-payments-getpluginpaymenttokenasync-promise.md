---
title: 'getPluginPaymentTokenAsync(): Promise'
slug: figma-payments-getpluginpaymenttokenasync-promise
source_file: plugin-api-figma-payments.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-payments/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: f8892674ae67739f
token_count: 510
chunk_title: 'getPluginPaymentTokenAsync(): Promise'
chunk_slug: figma-payments-getpluginpaymenttokenasync-promise
chunk_index: 6
chunk_of_total: 7
parent_file: figma-payments.md
parent_slug: figma-payments
char_count: 1785
heading_level: h3
chunk_type: method
merge_type: atomic
tags: []
sibling_chunks:
  - figma-payments-introduction
  - figma-payments-status-paymentstatus-readonly
  - figma-payments-setpaymentstatusindevelopmentstatus-paym
  - figma-payments-getuserfirstransecondsago-number
  - figma-payments-initiatecheckoutasyncoptions-interstitia
  - figma-payments-requestcheckout-void
compiler: noos-figma
---

This method generates a token that can be used to securely communicate the
identity of the current user on the current plugin or widget. You can
provide its returned value as the `plugin_payment_token` query parameter to
the [payments REST API](https://www.figma.com/developers/api#payments)
 endpoint.

## Code Examples

Limiting free usage of the entire plugin to a number of days

```
const ONE_DAY_IN_SECONDS = 60 * 60 * 24;const secondsSinceFirstRun = figma.payments.getUserFirstRanSecondsAgo()const daysSinceFirstRun = secondsSinceFirstRun / ONE_DAY_IN_SECONDSasync function checkAndRunPluginFeatureCode() { if (figma.payments.status.type === "UNPAID" && daysSinceFirstRun > 3) { await figma.payments.initiateCheckoutAsync({ interstitial: "TRIAL_ENDED" }) if (figma.payments.status.type === "UNPAID") { figma.notify("Your free trial has expired, please upgrade to continue.") return } } // DO STUFF}
```Requiring payment for a feature of the plugin

```
async function checkAndRunPaidFeatureCode() { if (figma.payments.status.type === "UNPAID") { await figma.payments.initiateCheckoutAsync({ interstitial: "PAID_FEATURE" }) if (figma.payments.status.type === "UNPAID") { figma.notify("Please upgrade to use this feature.") return } } // DO STUFF}
```Limiting free usage to a number of runs

```
async function checkAndRunPluginFeatureCode() { if (figma.payments.status.type === "UNPAID") { const usageCount = await figma.clientStorage.getAsync('usage-count') || 0 if (usageCount >= 10) { await figma.payments.initiateCheckoutAsync({ interstitial: "TRIAL_ENDED" }) if (figma.payments.status.type === "UNPAID") { figma.notify("You have run out of free usages of this plugin.") return } } else { await figma.clientStorage.setAsync('usage-count', usageCount + 1) } } // DO STUFF}
```
