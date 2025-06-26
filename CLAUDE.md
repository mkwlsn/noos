# CLAUDE.md - Project Context

## 🧠 noos: Universal Symbolic Memory Compiler for ghostOS

**noos** is the foundational memory compiler in the ghostOS symbolic memory stack:

```
🔍 Sources → 🧠 noos → 🧼 eidetic-reduce → 👻 mneme → 🏛️ ghostvault
```

## 🏗️ What We Built

**Universal symbolic memory compiler** with proven 3-stage pipeline:

```
📡 SCRAPE → 🧼 CLEAN → ⚛️ CHUNK
Raw HTML    Markdown    Atomic Concepts
```

### Stage 1: Source Compilers (compilers/)
- **`figma/scrape-rest-api.js`** - Handles React hydration with scroll-and-poll strategy
- **`figma/scrape-plugin-api-guide.js`** - Linear pagination following "Next" links
- **`figma/scrape-plugin-api-reference.js`** - Multi-entry-point link discovery with sidebar expansion
- **`figma/scrape-code-connect.js`** - Hard-coded root URLs with comprehensive link crawling
- **`figma/scrape-all.js`** - Elite UX orchestrator with progress bars and comprehensive reporting

### Stage 2: Universal Cleaning (core/)
- **`core/clean-html.js`** - Converts HTML to versioned markdown with rich metadata
- Versioned runs (`/clean/2025-06-26/`) for diff analysis
- Content hashing for change detection
- Source URL reconstruction and frontmatter generation

### Stage 3: Symbolic Chunking (core/)
- **`core/chunk-md-by-heading.js`** - Creates semantic atomic concepts for ghostOS
- Smart heading-level detection per document
- Sibling chunk references for `mneme` daemon navigation
- Content classification (method/guide/tutorial/error) for `eidetic-reduce`
- Production logging with severity levels

---

## 🧠 Key Technical Decisions

### React Hydration Challenges
- **Problem**: Figma docs use lazy loading and DOM virtualization
- **Solution**: Progressive scroll-and-poll with multiple detection strategies
- **Result**: 7.5/10 confidence in complete coverage

### Versioned Output Strategy
- **Pattern**: `/clean/YYYY-MM-DD/` for each run
- **Benefits**: Diff analysis, rollback capability, corpus evolution tracking
- **Files**: `manifest.json` for metadata, individual `.md` files per concept

### Content Hashing & Diffing
- **Purpose**: Detect changed content between runs  
- **Implementation**: SHA256 first 16 chars of cleaned content
- **Future**: Enable `diff-clean-passes.js` script for precise change analysis

### Semantic Navigation
- **Feature**: `sibling_chunks` array in each chunk's frontmatter
- **Purpose**: Agent exploration ("What other methods are on TextNode?")
- **Implementation**: Exclude self, preserve order within parent file

### Content Classification
- **Chunk types**: `method`, `guide`, `tutorial`, `error`
- **Heuristics**: Smart detection based on title patterns and content analysis
- **Benefits**: Targeted processing, corpus filtering, quality analytics

---

## 📁 File Structure

### Compiler Architecture
```
compilers/figma/            # Figma-specific source compiler
├── scrape-all.js          # Elite orchestrator with UX
├── scrape-rest-api.js     # React hydration handling
├── scrape-plugin-api-*.js # Specialized scrapers
└── scrape-code-connect.js # Comprehensive crawling

core/                      # Universal processing engine
├── clean-html.js          # HTML → versioned markdown
└── chunk-md-by-heading.js # Markdown → symbolic chunks

schemas/                   # ghostOS memory schemas
integrations/              # ghostvault deployment
```

### Output Structure
```
output/                     # noos compiler outputs
├── raw/                   # Source material (gitignored)
├── clean/                 # Cleaned markdown
│   └── 2025-06-26/       # Versioned runs
│       ├── manifest.json  # Run metadata
│       └── *.md          # Individual clean files
└── chunks/                # Symbolic memory chunks
    └── 2025-06-26/       # Ready for ghostOS rituals
        ├── chunk-manifest.json
        ├── chunk-errors.log
        └── *.md          # eidetic-reduce ready chunks
```

### Configuration
```
.gitignore                  # Excludes content, keeps tooling
package.json               # Cheerio + Playwright dependencies
README.md                  # Enterprise-grade documentation
```

---

## 🎯 Architecture Principles

### User-Focused Without Revealing Tactics
- README focuses on value and use cases
- No mention of specific scraping techniques
- Positions as "enterprise documentation corpus platform"

### Modular Pipeline Design
- Each stage can run independently
- Clear separation of concerns
- Comprehensive error handling at each stage

### Production-Grade Quality
- Severity-aware logging (`[ERROR]`, `[WARN]`)
- Content quality validation
- Token distribution analytics
- Comprehensive reporting and manifests

### Future-Compatibility
- `tags: []` stub for NLP enrichment
- Content hashing for diff pipelines
- Rich metadata for RAG systems
- Extensible chunk type classification

---

## 🚀 ghostOS Integration Notes

### noos Role in ghostOS Memory Stack
- **noos**: Universal memory compiler (source → symbolic chunks)
- **eidetic-reduce**: Memory validation ritual (removes duplication/drift/noise)
- **mneme**: Memory retrieval daemon (powers `ghost trace`, `ghost surf`)
- **ghostvault**: Symbolic memory storage destination

### Ghost + Claude Development
- **Ghost**: ghostOS architecture, ritual design, symbolic coherence
- **Claude**: Memory compiler implementation, chunking engine, production systems
- **Result**: Foundational memory infrastructure for cognition system

### Key Breakthroughs
1. **Scroll-and-poll strategy** for React hydration
2. **Versioned corpus approach** for enterprise traceability  
3. **Sibling chunk navigation** for semantic agent exploration
4. **Content classification** for targeted processing
5. **Elite UX design** for professional tooling experience

---

## 📋 Next Steps & Future Enhancements

### Immediate Opportunities
- `diff-clean-passes.js` - Compare corpus versions
- `validate-corpus.js` - Quality assurance automation
- NLP tag enrichment pipeline
- Vector embedding integration

### Advanced Features
- Cross-document concept linking
- Automated quality monitoring
- Corpus analytics dashboard
- Integration with RAG frameworks

### Scaling Considerations
- Multi-target documentation sources
- Distributed scraping for large corpora
- Real-time change detection and alerts
- Enterprise corpus management workflows

---

## 💡 Usage Patterns

### noos Development Workflow
```bash
# Full Figma compilation
npm run figdocs

# Individual stages
node compilers/figma/scrape-all.js
node core/clean-html.js
node core/chunk-md-by-heading.js

# ghostOS integration
npm run deploy-vault    # Sync to ghostvault
npm run eidetic-prep    # Prepare for validation
```

### Memory Quality Analysis
```bash
# Quality monitoring
grep "[ERROR]" output/chunks/*/chunk-errors.log
grep "chunk_type: method" output/chunks/*/chunk-manifest.json

# ghostOS ritual preparation
grep "eidetic-reduce" output/chunks/*/chunk-manifest.json
```

---

*This file serves as project memory for future Claude conversations. Reference this for full context of the **noos** universal memory compiler architecture and its role in the ghostOS symbolic memory stack.*