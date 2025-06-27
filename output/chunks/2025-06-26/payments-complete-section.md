---
title: Complete Section
slug: payments-complete-section
source_file: rest-api-payments.html
source_url: 'https://www.figma.com/developers/api#payments'
doc_type: rest-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 203711987286d814
token_count: 2092
chunk_title: Complete Section
chunk_slug: payments-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: payments.md
parent_slug: payments
char_count: 7321
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

PaymentsGetting startedThe Payments REST API allows you to securely validate purchases on the Figma platform from a server. This API builds off of the [Plugin Payments API](/plugin-docs/requiring-payment) and allows you to restrict parts of your website or service to just those who have purchased your plugin, widget, or Community file.

This unlocks a couple of use cases for creators:

1. Creators of plugins and widgets can protect potentially expensive endpoints behind payment verification. For example, you can only allow users who have paid for your plugin to use the part of a copy-assistance plugin that makes expensive requests to a generative AI model.
2. Creators are able to gate valuable parts of their website behind payment verification. For example, only allowing users that have purchased a Community file to access documentation and tutorials on your external website.

The Payments REST API does not support OAuth 2. In order to use the Payments REST API, you'll need to authenticate your requests using a personal access token. You can follow our [access token guide](/developers/api#access-tokens) to learn how to generate and use your own personal access token. Note that plugin payment tokens are not a replacement for personal access tokens.

TypesNamePropertiesPaymentInformationAn object describing a user's payment information for a plugin, widget, or Community file.user_idString The ID of the user whose payment information was queried. Can be used to verify the validity of a response.resource_idString The ID of the plugin, widget, or Community file that was queried. Can be used to verify the validity of a response.resource_typeStringThe type of the resource as a string enum that supports values PLUGIN, WIDGET, and COMMUNITY_FILE.payment_status[PaymentStatus](#paymentstatus-type) The user's payment status on the resource.date_of_purchaseStringThe UTC ISO 8601 timestamp indicating when the user purchased the resource. No value is given if the user has never purchased the resource.Note that a value will still be returned if the user had purchased the resource, but no longer has active access to it (e.g. purchase refunded, subscription ended).PaymentStatusAn object describing the user's payment status.typeStringThe current payment status of the user on the resource, as a string enumUNPAID: user has not paid for the resourcePAID: user has an active purchase on the resourceTRIAL: user is in the trial period for a subscription resourceNote that querying your own resource will return as "UNPAID". Additionally, the returned payment status does not update according to [setPaymentStatusInDevelopment](/plugin-docs/api/figma-payments#setpaymentstatusindevelopment) usage.EndpointsThere are two methods to query for a user's payment information on a plugin, widget, or Community file. The first method, using plugin payment tokens, is typically used when making queries from a plugin's or widget's code. The second method, providing a user ID and resource ID, is typically used when making queries from anywhere else.Note that you can only query for resources that you own. In most cases, this means that you can only query resources that you originally created.

GET payments via plugin payment tokenFetch the payment information of a user from your plugin or widget.

HTTP EndpointGET/v1/payments

Return valueThe [PaymentInformation](#paymentinformation-type) corresponding to the given plugin payment token.Query parametersDescriptionplugin_payment_tokenStringShort-lived token returned from "getPluginPaymentTokenAsync" in the plugin payments API and used to authenticate to this endpoint. Read more about generating this token through "Calling the Payments REST API from a plugin or widget" below.Error codesDescription400Invalid parameter. The "message" parameter on the response will describe the error.401Issue with authentication. The "message" parameter on the response will describe the error.Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/payments'Log in to execute requestReturn valueThe [PaymentInformation](#paymentinformation-type) corresponding to the given plugin payment token.Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/payments'Log in to execute request### Calling the Payments REST API from a plugin or widget

We offer a method in our plugin payments API that enables you to securely query for the payment status of a user of your plugin or widget. You should use this method if your plugin or widget makes a call to a server endpoint. Follow the [Getting Started](/plugin-docs/requiring-payment#getting-started) guide to set up the plugin payments API in your plugin or widget.

Once you have enabled the plugin payments API in your plugin's or widget's code, you can call the [getPluginPaymentTokenAsync](/plugin-docs/api/figma-payments#getpluginpaymenttokenasync) method to generate a secure plugin payment token to provide to this endpoint.

GET payments via user and resource IDFetch the payment information of a user on your resource using IDs.

HTTP EndpointGET/v1/payments

Return valueThe [PaymentInformation](#paymentinformation-type) corresponding to the given user and resource IDs.Query parametersDescriptionuser_idNumberThe ID of the user to query payment information about. You can get the user ID by having the user OAuth2 to the Figma REST API.community_file_idNumberThe ID of the Community file to query a user's payment information on. You can get the Community file ID from the file's Community page (look for the number after "file/" in the URL). Provide exactly one of "community_file_id", "plugin_id", or "widget_id".plugin_idNumberThe ID of the plugin to query a user's payment information on. You can get the plugin ID from the plugin's manifest, or from the plugin's Community page (look for the number after "plugin/" in the URL). Provide exactly one of "community_file_id", "plugin_id", or "widget_id".widget_idNumberThe ID of the widget to query a user's payment information on. You can get the widget ID from the widget's manifest, or from the widget's Community page (look for the number after "widget/" in the URL). Provide exactly one of "community_file_id", "plugin_id", or "widget_id".Error codesDescription400Invalid parameter. The "message" parameter on the response will describe the error.401Issue with authentication. The "message" parameter on the response will describe the error.Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/payments'Log in to execute requestReturn valueThe [PaymentInformation](#paymentinformation-type) corresponding to the given user and resource IDs.Try it out for yourself[Log in to generate an access token](/login?cont=/developers/docs)[What's this?](#access-tokens)Your cURL commandcurl -H 'X-FIGMA-TOKEN: <personal access token>' 'https://api.figma.com/v1/payments'Log in to execute request
