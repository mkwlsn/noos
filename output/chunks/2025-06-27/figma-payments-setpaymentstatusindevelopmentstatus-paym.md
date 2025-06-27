---
title: 'setPaymentStatusInDevelopment(status: PaymentStatus): void'
slug: figma-payments-setpaymentstatusindevelopmentstatus-paym
source_file: plugin-api-figma-payments.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-payments/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: b1f14e949eda5f0d
token_count: 74
chunk_title: 'setPaymentStatusInDevelopment(status: PaymentStatus): void'
chunk_slug: figma-payments-setpaymentstatusindevelopmentstatus-paym
chunk_index: 2
chunk_of_total: 7
parent_file: figma-payments.md
parent_slug: figma-payments
char_count: 257
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-payments-introduction
  - figma-payments-status-paymentstatus-readonly
  - figma-payments-getuserfirstransecondsago-number
  - figma-payments-initiatecheckoutasyncoptions-interstitia
  - figma-payments-requestcheckout-void
  - figma-payments-getpluginpaymenttokenasync-promise
compiler: noos-figma
---

##### warning

This method can only be used in development.

This sets your payment status to the value of the `status` argument in this
method. This is a global setting that will impact your payment status for
all plugins or widgets you run in development.
