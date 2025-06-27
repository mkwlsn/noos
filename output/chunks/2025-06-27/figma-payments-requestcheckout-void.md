---
title: 'requestCheckout(): void'
slug: figma-payments-requestcheckout-void
source_file: plugin-api-figma-payments.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-payments/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 88812ef6bd9a00bc
token_count: 155
chunk_title: 'requestCheckout(): void'
chunk_slug: figma-payments-requestcheckout-void
chunk_index: 5
chunk_of_total: 7
parent_file: figma-payments.md
parent_slug: figma-payments
char_count: 541
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
  - figma-payments-getpluginpaymenttokenasync-promise
compiler: noos-figma
---

This is useful for [text review plugins](/plugin-docs/textreview-plugins/)
. Since these
plugins can only run in query mode, they cannot call
`initiateCheckoutAsync` while a user is editing text as that will throw an
exception.

if you are building a text review plugin, call `requestCheckout` to
indicate that the user needs to checkout in order to continue using the
plugin. When the user exits text editing, they will be prompted to
checkout. If the user dismisses the checkout flow, the text review plugin
will automatically be disabled.
