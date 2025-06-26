# noos Chunk Schema

**Universal symbolic memory chunk format** for ghostOS integration.

## 📋 Chunk Structure

```yaml
---
# Core Identity
title: insertCharacters              # Human-readable chunk title
slug: textnode-insertcharacters     # URL-safe unique identifier

# Symbolic Classification
chunk_type: method                   # method|guide|tutorial|error|concept
merge_type: split                    # single|split|merged
status: active                       # active|deprecated|draft

# Memory Navigation
sibling_chunks:                      # Related chunks from same source
  - textnode-deletecharacters
  - textnode-getstyledtextsegments
parent_file: textnode.md             # Source file this chunk came from

# Metadata
tags: []                             # Semantic tags (populated by eidetic-reduce)
token_count: 340                     # Content length for processing
content_hash: a1b2c3d4e5f6          # SHA256 first 16 chars for diff detection

# Provenance
source_url: https://example.com/api  # Original source URL
compiler: noos-figma                 # Which noos compiler generated this
created: 2025-06-26T10:30:00Z       # When chunk was created
version: 1.0.0                       # Chunk schema version
---

# Chunk Content

Markdown content of the chunk goes here...
```

## 🎯 Field Definitions

### Core Identity
- **`title`**: Human-readable name for the chunk
- **`slug`**: URL-safe unique identifier (kebab-case)

### Symbolic Classification
- **`chunk_type`**: Content classification for filtering
  - `method` - API methods, functions, procedures
  - `guide` - Step-by-step instructions
  - `tutorial` - Learning-focused content
  - `error` - Error messages and troubleshooting
  - `concept` - Conceptual explanations
- **`merge_type`**: How chunk was extracted
  - `single` - Complete standalone document
  - `split` - Split from larger document
  - `merged` - Merged from multiple sources
- **`status`**: Lifecycle state
  - `active` - Current and valid
  - `deprecated` - Old but maintained
  - `draft` - Work in progress

### Memory Navigation
- **`sibling_chunks`**: Array of related chunk slugs from same source
- **`parent_file`**: Original source file name

### Metadata
- **`tags`**: Array of semantic tags (populated by eidetic-reduce ritual)
- **`token_count`**: Approximate token count for LLM processing
- **`content_hash`**: SHA256 hash (first 16 chars) for change detection

### Provenance
- **`source_url`**: Original URL where content was found
- **`compiler`**: Which noos compiler generated this chunk
- **`created`**: ISO timestamp of chunk creation
- **`version`**: Schema version for compatibility

## 🔄 Integration Points

### eidetic-reduce Ritual
- Uses `chunk_type` for targeted validation
- Populates `tags` array with semantic tags
- Detects duplicates via `content_hash`
- Validates `status` lifecycle

### mneme Daemon
- Queries by `chunk_type`, `tags`, `status`
- Navigates via `sibling_chunks` relationships
- Filters by `compiler` for source-specific searches
- Uses `content_hash` for exact matching

### ghostvault Storage
- Organizes by `compiler` and `created` date
- Indexes by `slug` for fast retrieval
- Maintains provenance chain via `source_url`
- Supports versioning via `version` field

## 📊 Quality Standards

- **Required fields**: `title`, `slug`, `chunk_type`, `content_hash`, `compiler`, `created`, `version`
- **Slug format**: kebab-case, no special characters
- **Token count**: 50-2000 tokens optimal for embeddings
- **Content hash**: SHA256 first 16 characters
- **Timestamps**: ISO 8601 format with timezone

Built for **symbolic coherence** and **ritual compatibility** in the ghostOS memory stack.