# figma-doc-scraper

This is a local-first scraping utility for harvesting 100% of Figma’s developer documentation, structured for LLM ingestion, plugin development, and deep tool integration.

## 📦 What it Scrapes

- **REST API** (`scrape-rest-api.js`)  
  Grabs all hydrated endpoint documentation from the REST API page.
- **Plugin Docs (Guides)** (`scrape-plugin-api-guide.js`)  
  Navigates tutorial-style documentation via pagination.

- **Plugin API Reference** (`scrape-plugin-api-reference.js`)  
  Visits every API method, type, and object listed in the Plugin API index.

Each script saves structured HTML chunks to the `out/` directory using consistent filenames.

---

## 🚀 Quick Start

Run any script individually:

```bash
node scrape-rest-api.js
node scrape-plugin-api-guide.js
node scrape-plugin-api-reference.js
```

Or run all three in sequence:

```bash
node scrape-all.js
```

All output lands in the `/out` directory.

---

## 🔍 Output

Each HTML file corresponds to a fully-hydrated section or method from the docs, named by slug:

- `rest-api-files.html`
- `plugin-api-figma.html`
- `plugin-api-createcomponent.html`
- etc.

---

## 🧱 Next Steps

You can convert the output into Markdown, JSON, or vector chunks for use in:

- LLM fine-tuning
- Retrieval-augmented generation (RAG)
- GhostOS ingestion
- Developer agent bootstrapping
