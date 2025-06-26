# Chunk Manifest Schema

This schema defines the expected structure of each chunk entry in the figma-doc-scraper pipeline.
It applies to both individual chunk files (via frontmatter) and the central `manifest.json`.

## Chunk Frontmatter Fields

```yaml
title: string # Top-level title (inherited from parent file)
slug: string # Canonical identifier for the parent document
chunk_title: string # Title of the chunk (usually the heading it was split from)
chunk_slug: string # Slugified identifier for this chunk
parent_file: string # Original cleaned filename (e.g. plugin-api-TextNode.md)
doc_type: string # One of: plugin-api, rest-api, code-connect, guide
source_url: string # Original URL the chunk was derived from
created: string # ISO timestamp of initial scrape
updated: string # ISO timestamp of chunking pass
version: string # Semantic version of the chunk structure (e.g. "1.0")
owner: string # Typically "figma" for scraped docs
chunk_index: number # Optional: index of this chunk within its parent file
content_hash: string # Short hash of the chunk body (e.g. SHA-256, 16 chars)
token_count: number # Estimated token size of chunk body
```

## Optional Fields (Enrichment Pass)

```yaml
sibling_chunks: string[] # Other chunk_slugs from the same parent file (excluding self)
related_chunks: string[] # Semantically related chunks across docs (e.g. figma-node-type-map)
tags: string[] # Keywords or concepts extracted during chunking or QA
```

## Manifest Structure (manifest.json)

Each entry is an object:

```json
{
  "file": "plugin-api-TextNode__insertCharacters.md",
  "chunk_slug": "insertCharacters",
  "chunk_title": "insertCharacters",
  "slug": "plugin-api-TextNode",
  "doc_type": "plugin-api",
  "source_url": "https://www.figma.com/plugin-docs/api/TextNode/",
  "token_count": 187,
  "content_hash": "6f32b93e4d1a2c87",
  "created": "2025-06-26T00:00:00.000Z",
  "updated": "2025-06-26T00:00:00.000Z"
}
```

This schema is designed to support:

- Durable vector indexing
- Semantic diffing
- Chunk lineage and QA
- GhostOS ingestion and retrieval
