---
title: intro
slug: intro
source_file: rest-api-intro.html
source_url: https://www.figma.com/developers/api#intro
doc_type: rest-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 04b575bf5cf0111f
token_count: 807
---
IntroductionWelcome to Figma, the world's first collaborative interface design tool. Figma allows designers to create and prototype their digital experiences - together in real-time and in one place - helping them turn their ideas and visions into products, faster. Figma's mission is to make design accessible to everyone. The Figma API is one of the ways we aim to do that.

What can I do with the Figma API?The Figma API supports read access and interactions with Figma files. This gives you the ability to view and extract any objects or layers, and their properties, so you can render them as images outside of Figma. You can then present your designs, connect them to other applications, or use them to expand on your vision. Future versions of the API will unlock even greater functionality around Files.

How does it work?The Figma API is based on the [REST](https://en.wikipedia.org/wiki/Representational_state_transfer)
 structure. We support authentication via [access tokens](#access-tokens)
 and [OAuth2](#oauth2)
. Requests are made via HTTP endpoints with clear functions and appropriate response codes. Endpoints allow you to request [files](#files)
, [images](#get-images-endpoint)
, [file versions](#version-history)
, [users](#users)
, [comments](#comments)
, [team projects](#get-team-projects-endpoint)
 and [project files](#get-project-files-endpoint)
.

Once granted access, you can use the Figma API to inspect a JSON representation of the file. Every layer or object in a file will be represented within the file by a node (subtree). You will then be able to access and isolate the object and any properties associated with it. In addition to accessing files and layers, you will be able to GET and POST comments to files.

Getting startedIf you’re not already using Figma, the first step is to sign up and create an account [over here.](https://www.figma.com/signup)

Once you have a Figma account, the next step is to authenticate with the API. This can be done using either [OAuth2](#oauth2)
 or [access tokens](#access-tokens)
.

You can then browse our endpoints and start making queries against the Figma API. We recommend starting with the basics by learning about [Figma files](#files)
, before moving on to more advanced topics such as [comments](#comments)
, [users](#users)
, [version history](#version-history)
, and [projects](#projects)
.

If you plan on building a fully-fledged app, that others can share and use, then you can register your app by heading to [My apps](https://www.figma.com/developers/apps)
 in your Figma account.

OpenAPI specificationThe Figma REST API is fully described in an OpenAPI specification in the open source [figma/rest-api-spec](https://github.com/figma/rest-api-spec)
 repository.

OpenAPI is a specification for describing HTTP APIs in a language-agnostic manner. It has a large ecosystem of tools to let you generate API documentation, client SDKs, and more. We also provide custom Typescript types generated from the OpenAPI specification for those of you with Typescript codebases to make it easy to write type-safe code out of the box. For more information, see the [README](https://github.com/figma/rest-api-spec)
.

Base URLhttps://api.figma.com