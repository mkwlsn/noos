---
title: Calling the Payments REST API from a plugin or widget
slug: payments-calling-the-payments-rest-api-from-a-plu
source_file: rest-api-payments.html
source_url: 'https://www.figma.com/developers/api#payments'
doc_type: rest-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 2eee6898dd0b35ef
token_count: 778
chunk_title: Calling the Payments REST API from a plugin or widget
chunk_slug: payments-calling-the-payments-rest-api-from-a-plu
chunk_index: 1
chunk_of_total: 2
parent_file: payments.md
parent_slug: payments
char_count: 2722
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - payments-introduction
compiler: noos-figma
---

We offer a method in our plugin payments API that enables you to securely query for the payment status of a user of your plugin or widget. You should use this method if your plugin or widget makes a call to a server endpoint. Follow the [Getting Started](/plugin-docs/requiring-payment#getting-started)
 guide to set up the plugin payments API in your plugin or widget.

Once you have enabled the plugin payments API in your plugin's or widget's code, you can call the [getPluginPaymentTokenAsync](/plugin-docs/api/figma-payments#getpluginpaymenttokenasync)
 method to generate a secure plugin payment token to provide to this endpoint.

GET payments via user and resource IDFetch the payment information of a user on your resource using IDs.

HTTP EndpointGET/v1/payments

Return valueThe [PaymentInformation](#paymentinformation-type)
 corresponding to the given user and resource IDs.Query parametersDescriptionuser_idNumberThe ID of the user to query payment information about. You can get the user ID by having the user OAuth2 to the Figma REST API.community_file_idNumberThe ID of the Community file to query a user's payment information on. You can get the Community file ID from the file's Community page (look for the number after "file/" in the URL). Provide exactly one of "community_file_id", "plugin_id", or "widget_id".plugin_idNumberThe ID of the plugin to query a user's payment information on. You can get the plugin ID from the plugin's manifest, or from the plugin's Community page (look for the number after "plugin/" in the URL). Provide exactly one of "community_file_id", "plugin_id", or "widget_id".widget_idNumberThe ID of the widget to query a user's payment information on. You can get the widget ID from the widget's manifest, or from the widget's Community page (look for the number after "widget/" in the URL). Provide exactly one of "community_file_id", "plugin_id", or "widget_id".Error codesDescription400Invalid parameter. The "message" parameter on the response will describe the error.401Issue with authentication. The "message" parameter on the response will describe the error.Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)
[What's this?](#access-tokens)
Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/payments'Log in to execute requestReturn valueThe [PaymentInformation](#paymentinformation-type)
 corresponding to the given user and resource IDs.Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)
[What's this?](#access-tokens)
Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/payments'Log in to execute request
