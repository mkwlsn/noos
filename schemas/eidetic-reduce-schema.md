# eidetic-reduce Schema

**Memory validation ritual** for removing duplication, drift, and noise from noos chunks.

## 🧼 Validation Process

```
noos chunks → eidetic-reduce → validated memory → ghostvault
```

**eidetic-reduce** operates on noos chunks to ensure high-quality symbolic memory for ghostOS rituals.

## 📋 Input Requirements

### Chunk Validation
- **Required fields**: All noos-chunk-schema.md required fields present
- **Content quality**: Minimum 50 tokens, maximum 2000 tokens
- **Hash integrity**: Valid SHA256 content hash
- **Format compliance**: Valid YAML frontmatter + markdown

### Duplication Detection
- **Content hashing**: Identify identical content across sources
- **Semantic similarity**: Detect near-duplicate concepts
- **Cross-compiler**: Find duplicates across different noos compilers
- **Version conflicts**: Resolve multiple versions of same concept

## 🎯 Validation Operations

### 1. Deduplication
```yaml
# Before eidetic-reduce
chunks:
  - slug: create-component-v1
    content_hash: abc123
  - slug: create-component-v2  
    content_hash: abc123      # Duplicate content

# After eidetic-reduce
chunks:
  - slug: create-component
    content_hash: abc123
    merge_type: merged
    supersedes: [create-component-v1, create-component-v2]
```

### 2. Drift Correction
```yaml
# Before: Inconsistent classification
chunk_type: concept          # Should be 'method'
title: createComponent()     # Function signature indicates method

# After: Corrected classification  
chunk_type: method
title: createComponent
```

### 3. Noise Removal
- **Empty chunks**: Remove chunks with insufficient content
- **Broken links**: Fix or remove invalid `sibling_chunks` references
- **Invalid metadata**: Correct malformed frontmatter
- **Orphaned content**: Handle chunks without proper source links

### 4. Semantic Enhancement
```yaml
# Before eidetic-reduce
tags: []                     # Empty tags array

# After semantic analysis
tags: [component, creation, figma-api, node-manipulation]
concepts: [ui-component, dom-tree, plugin-development]
```

## 📊 Quality Metrics

### Validation Results
```json
{
  "total_chunks_processed": 308,
  "duplicates_found": 12,
  "duplicates_merged": 8,
  "drift_corrections": 23,
  "noise_removed": 5,
  "tags_added": 247,
  "validation_errors": 2,
  "final_chunk_count": 291
}
```

### Quality Thresholds
- **Duplicate threshold**: >95% content similarity
- **Token range**: 50-2000 tokens per chunk
- **Tagging coverage**: >80% of chunks should have tags
- **Error rate**: <5% validation failures acceptable

## 🔄 Output Schema

### Enhanced Chunk Format
```yaml
---
# Original noos fields preserved
title: createComponent
chunk_type: method

# eidetic-reduce enhancements
tags: [component, creation, figma-api]      # Added semantic tags
concepts: [ui-component, dom-tree]          # Extracted concepts
quality_score: 0.92                        # Content quality metric
validation_passed: true                    # Validation status
supersedes: []                              # If chunk replaced others
dedupe_group: null                          # Deduplication group ID

# Validation metadata
validated_by: eidetic-reduce
validated_at: 2025-06-26T11:00:00Z
validation_version: 1.0.0
---
```

## 🎯 Ritual Integration

### Pre-eidetic State
- **Raw noos chunks** with basic frontmatter
- **Potential duplicates** and inconsistencies
- **Empty tag arrays** awaiting semantic analysis
- **Quality variations** across different compilers

### Post-eidetic State
- **Validated symbolic memory** ready for ghostvault
- **Semantic tags** for precise ritual queries
- **Deduplicated content** with provenance tracking
- **Quality-assured chunks** meeting ghostOS standards

### mneme Compatibility
- **Enhanced search**: Query by semantic tags and concepts
- **Quality filtering**: Filter by validation status and quality score
- **Relationship mapping**: Navigate dedupe groups and superseded chunks
- **Provenance tracking**: Maintain full validation history

## 🚀 Future Enhancements

### Advanced Validation
- **Cross-source linking**: Connect related concepts across compilers
- **Concept hierarchies**: Build semantic relationship trees
- **Quality prediction**: ML-based quality scoring
- **Automated tagging**: LLM-powered semantic analysis

### Integration Depth
- **Real-time validation**: Validate chunks as they're created
- **Continuous monitoring**: Detect drift in live memory
- **Quality dashboards**: Monitor memory health over time
- **Ritual feedback**: Learn from how rituals use validated memory

Built to ensure **symbolic coherence** and **high-quality memory** for the ghostOS cognition system.