---
title: Securing your webhook
slug: webhooks_v2-securing-your-webhook
source_file: rest-api-webhooks_v2.html
source_url: 'https://www.figma.com/developers/api#webhooks_v2'
doc_type: rest-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 6440b431580f387c
token_count: 247
chunk_title: Securing your webhook
chunk_slug: webhooks_v2-securing-your-webhook
chunk_index: 1
chunk_of_total: 2
parent_file: webhooks_v2.md
parent_slug: webhooks_v2
char_count: 863
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - webhooks_v2-introduction
compiler: noos-figma
---

IMPORTANT: When creating a webhook you are required to pass in a passcode. The purpose of the passcode field is so that your application can verify that Figma is actually what is calling your endpoint (as opposed to some attacker trying to make you believe something about your users' Figma files).

For security purposes, when requesting webhooks using GET webhook by id or GET webhooks, the passcode is redacted and an empty string is returned. This is to ensure that passcode is only exposed by events that we send you.

We recommend comparing the passcode we pass back to you in events with the passcode originally provided when creating the endpoint to make sure they match before acting on the webhook trigger. If you receive a request with the wrong passcode, you should respond with a 400 Bad Request HTTP response which will immediately stop the webhook.
