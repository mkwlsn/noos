const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

// Elite chunking configuration
const MIN_CHUNK_SIZE = 200;
const MAX_CHUNK_SIZE = 8000; // Prevent monster chunks
const HEADING_PATTERNS = {
  h1: /^# (.+)$/gm,
  h2: /^## (.+)$/gm,
  h3: /^### (.+)$/gm,
  h4: /^#### (.+)$/gm,
};

// Generate run timestamp
const runDate = new Date().toISOString().split("T")[0];
const cleanDir = `output/clean/${runDate}`;
const chunksDir = `output/chunks/${runDate}`;
const chunkManifestPath = `${chunksDir}/chunk-manifest.json`;
const errorLogPath = `${chunksDir}/chunk-errors.log`;

console.log("╔══════════════════════════════════════════════════════════════╗");
console.log("║                   FIGMA DOCS CHUNKER                        ║");
console.log("║            Atomic Concept Extraction Engine                 ║");
console.log("╚══════════════════════════════════════════════════════════════╝");
console.log("");

// Ensure chunks directory exists
if (!fs.existsSync(chunksDir)) {
  fs.mkdirSync(chunksDir, { recursive: true });
  console.log(`📁 Created chunks directory: ${chunksDir}/`);
}

// Initialize chunk manifest and error log
const chunkManifest = {
  run_date: runDate,
  run_timestamp: new Date().toISOString(),
  source_directory: cleanDir,
  total_source_files: 0,
  total_chunks: 0,
  chunks_created: 0,
  chunks_merged: 0,
  chunks_skipped: 0,
  avg_chunk_size: 0,
  files: [],
};

const errorLog = [];

function parseFrontmatter(content) {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!frontmatterMatch) return { frontmatter: {}, content: content };

  const frontmatterText = frontmatterMatch[1];
  const bodyContent = frontmatterMatch[2];

  // Parse YAML frontmatter
  const frontmatter = {};
  frontmatterText.split("\n").forEach((line) => {
    const match = line.match(/^(\w+):\s*(.+)$/);
    if (match) {
      frontmatter[match[1]] = match[2];
    }
  });

  return { frontmatter, content: bodyContent };
}

function detectPrimaryHeadingLevel(content) {
  const headingCounts = {};

  // Count frequency of each heading level
  Object.entries(HEADING_PATTERNS).forEach(([level, pattern]) => {
    const matches = content.match(pattern);
    headingCounts[level] = matches ? matches.length : 0;
  });

  // Find the most frequent heading level (excluding h1)
  const candidates = ["h2", "h3", "h4"];
  let primaryLevel = "h2"; // default
  let maxCount = 0;

  candidates.forEach((level) => {
    if (headingCounts[level] > maxCount) {
      maxCount = headingCounts[level];
      primaryLevel = level;
    }
  });

  console.log(
    `   📊 Heading analysis: ${Object.entries(headingCounts)
      .map(([k, v]) => `${k}:${v}`)
      .join(", ")} → Primary: ${primaryLevel}`
  );

  return primaryLevel;
}

function generateChunkSlug(title, parentSlug, index) {
  const cleanTitle = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .substring(0, 40);

  return `${parentSlug}-${cleanTitle}` || `${parentSlug}-chunk-${index}`;
}

function generateContentHash(content) {
  return crypto
    .createHash("sha256")
    .update(content)
    .digest("hex")
    .substring(0, 16);
}

function estimateTokenCount(text) {
  // More accurate token estimation: ~3.5 chars per token for technical content
  return Math.ceil(text.length / 3.5);
}

function inferChunkType(title, content) {
  // Smart heuristics for chunk classification
  if (title.includes("figma.") || title.includes("()")) return "method";
  if (title.toLowerCase().includes("error") || title.includes("HTTP"))
    return "error";
  if (content.includes("```") && content.includes("example")) return "tutorial";
  return "guide";
}

function splitByHeading(content, headingLevel) {
  const pattern = HEADING_PATTERNS[headingLevel];
  const sections = [];

  // Split content by heading pattern
  const parts = content.split(pattern);

  if (parts.length <= 1) {
    // No headings found, return entire content as single chunk
    return [
      {
        title: "Complete Section",
        content: content.trim(),
        heading_level: headingLevel,
      },
    ];
  }

  // First part might be content before any headings
  if (parts[0].trim()) {
    sections.push({
      title: "Introduction",
      content: parts[0].trim(),
      heading_level: headingLevel,
    });
  }

  // Process heading + content pairs
  for (let i = 1; i < parts.length; i += 2) {
    const title = parts[i];
    const content = parts[i + 1] || "";

    if (title && content.trim()) {
      sections.push({
        title: title.trim(),
        content: content.trim(),
        heading_level: headingLevel,
      });
    }
  }

  return sections;
}

function mergeSmallChunks(chunks) {
  const merged = [];
  let i = 0;

  while (i < chunks.length) {
    const current = chunks[i];

    if (current.content.length < MIN_CHUNK_SIZE && i < chunks.length - 1) {
      // Merge with next chunk
      const next = chunks[i + 1];
      const mergedChunk = {
        title: `${current.title} + ${next.title}`,
        content: `${current.content}\n\n${next.content}`,
        heading_level: current.heading_level,
        merged: true,
        merged_titles: [current.title, next.title],
      };

      merged.push(mergedChunk);
      chunkManifest.chunks_merged++;
      i += 2; // Skip next chunk since we merged it
    } else if (current.content.length < MIN_CHUNK_SIZE) {
      // Last chunk and too small, skip it
      console.log(
        `   ⚠️ Skipping tiny final chunk: "${current.title}" (${current.content.length} chars)`
      );
      errorLog.push(
        `[WARN] Merge process: Skipped tiny final chunk "${current.title}" (${current.content.length} chars)`
      );
      chunkManifest.chunks_skipped++;
      i++;
    } else {
      merged.push(current);
      i++;
    }
  }

  return merged;
}

function createChunkFrontmatter(
  chunk,
  parentFrontmatter,
  parentSlug,
  index,
  totalChunks,
  allChunkSlugs
) {
  const chunkSlug = generateChunkSlug(chunk.title, parentSlug, index);
  const contentHash = generateContentHash(chunk.content);
  const tokenCount = estimateTokenCount(chunk.content);
  const chunkType = inferChunkType(chunk.title, chunk.content);

  // Create sibling chunks array (exclude self, preserve order)
  const siblingChunks = allChunkSlugs.filter((slug) => slug !== chunkSlug);

  return {
    ...parentFrontmatter, // Inherit all parent metadata
    title: chunk.title,
    slug: chunkSlug,
    chunk_title: chunk.title,
    chunk_slug: chunkSlug,
    chunk_index: index,
    chunk_of_total: totalChunks,
    parent_file: `${parentSlug}.md`,
    parent_slug: parentSlug,
    content_hash: contentHash,
    token_count: tokenCount,
    char_count: chunk.content.length,
    heading_level: chunk.heading_level,
    chunk_type: chunkType,
    merge_type: chunk.merged ? "merged" : "atomic",
    tags: [], // Future enrichment placeholder
    sibling_chunks: siblingChunks,
    created: runDate,
    updated: runDate,
    ...(chunk.merged && { merged_titles: chunk.merged_titles }),
  };
}

// Process all markdown files
console.log(`🔍 Scanning ${cleanDir}/ for markdown files...`);

if (!fs.existsSync(cleanDir)) {
  console.error(`❌ Clean directory not found: ${cleanDir}/`);
  console.error(
    `   Run clean-html.js first to generate cleaned markdown files`
  );
  process.exit(1);
}

const markdownFiles = fs
  .readdirSync(cleanDir)
  .filter((file) => file.endsWith(".md") && file !== "manifest.json")
  .sort();

console.log(`📋 Found ${markdownFiles.length} markdown files to chunk\n`);
chunkManifest.total_source_files = markdownFiles.length;

let totalTokens = 0;
let totalChars = 0;

for (const filename of markdownFiles) {
  const startTime = Date.now();
  const inputPath = path.join(cleanDir, filename);
  const parentSlug = filename.replace(".md", "");

  console.log(`🔄 Chunking: ${filename}`);

  try {
    // Read and parse file
    const rawContent = fs.readFileSync(inputPath, "utf8");
    const { frontmatter, content } = parseFrontmatter(rawContent);

    if (!content || content.trim().length < MIN_CHUNK_SIZE) {
      const error = `[ERROR] ${filename}: Insufficient content (${content.length} chars)`;
      console.log(
        `   ⚠️ Skipping: insufficient content (${content.length} chars)`
      );
      errorLog.push(error);
      continue;
    }

    // Detect optimal heading level for this file
    const primaryLevel = detectPrimaryHeadingLevel(content);

    // Split into sections
    let chunks = splitByHeading(content, primaryLevel);

    // Merge small chunks
    chunks = mergeSmallChunks(chunks);

    // Filter out still-too-small chunks
    const validChunks = chunks.filter((chunk) => {
      if (chunk.content.length < MIN_CHUNK_SIZE) {
        const error = `[WARN] ${filename}: Dropped small chunk "${chunk.title}" (${chunk.content.length} chars)`;
        console.log(
          `   ⚠️ Dropping small chunk: "${chunk.title}" (${chunk.content.length} chars)`
        );
        errorLog.push(error);
        chunkManifest.chunks_skipped++;
        return false;
      }
      if (chunk.content.length > MAX_CHUNK_SIZE) {
        const warning = `[WARN] ${filename}: Large chunk detected "${chunk.title}" (${chunk.content.length} chars)`;
        console.log(
          `   ⚠️ Large chunk detected: "${chunk.title}" (${chunk.content.length} chars)`
        );
        errorLog.push(warning);
      }
      return true;
    });

    if (validChunks.length === 0) {
      const error = `[ERROR] ${filename}: No valid chunks created after filtering`;
      console.log(`   ⚠️ No valid chunks created from ${filename}`);
      errorLog.push(error);
      continue;
    }

    // Pre-generate all chunk slugs for sibling references
    const allChunkSlugs = validChunks.map((chunk, index) =>
      generateChunkSlug(chunk.title, parentSlug, index)
    );

    // Create chunk files
    const fileChunks = [];

    validChunks.forEach((chunk, index) => {
      const chunkFrontmatter = createChunkFrontmatter(
        chunk,
        frontmatter,
        parentSlug,
        index,
        validChunks.length,
        allChunkSlugs
      );

      // Create final chunk content
      const frontmatterYaml = Object.entries(chunkFrontmatter)
        .map(([key, value]) => {
          // Handle arrays properly for YAML
          if (Array.isArray(value)) {
            return value.length === 0
              ? `${key}: []`
              : `${key}: [${value.map((v) => `"${v}"`).join(", ")}]`;
          }
          return `${key}: ${value}`;
        })
        .join("\n");

      const finalChunkContent = `---\n${frontmatterYaml}\n---\n\n${chunk.content}`;

      // Write chunk file
      const chunkFilename = `${chunkFrontmatter.chunk_slug}.md`;
      const chunkPath = path.join(chunksDir, chunkFilename);
      fs.writeFileSync(chunkPath, finalChunkContent);

      // Track metrics
      totalTokens += chunkFrontmatter.token_count;
      totalChars += chunkFrontmatter.char_count;

      fileChunks.push({
        filename: chunkFilename,
        slug: chunkFrontmatter.chunk_slug,
        title: chunkFrontmatter.chunk_title,
        token_count: chunkFrontmatter.token_count,
        char_count: chunkFrontmatter.char_count,
        content_hash: chunkFrontmatter.content_hash,
        chunk_type: chunkFrontmatter.chunk_type,
        merge_type: chunkFrontmatter.merge_type,
      });

      chunkManifest.chunks_created++;
    });

    const processingTime = Date.now() - startTime;

    console.log(
      `   ✅ Created ${validChunks.length} chunks (${processingTime}ms)`
    );
    console.log(
      `   📊 Tokens: ${fileChunks.reduce(
        (sum, c) => sum + c.token_count,
        0
      )}, Chars: ${fileChunks.reduce((sum, c) => sum + c.char_count, 0)}`
    );

    // Add to manifest
    chunkManifest.files.push({
      source_file: filename,
      parent_slug: parentSlug,
      primary_heading_level: primaryLevel,
      chunks_created: validChunks.length,
      total_tokens: fileChunks.reduce((sum, c) => sum + c.token_count, 0),
      total_chars: fileChunks.reduce((sum, c) => sum + c.char_count, 0),
      processing_time_ms: processingTime,
      chunks: fileChunks,
    });
  } catch (error) {
    console.log(`   ❌ Failed: ${error.message}`);
  }

  console.log("");
}

// Calculate final metrics
chunkManifest.total_chunks = chunkManifest.chunks_created;
chunkManifest.avg_chunk_size =
  chunkManifest.chunks_created > 0
    ? Math.round(totalChars / chunkManifest.chunks_created)
    : 0;
chunkManifest.total_tokens = totalTokens;
chunkManifest.total_chars = totalChars;

// Save manifest and error log
fs.writeFileSync(chunkManifestPath, JSON.stringify(chunkManifest, null, 2));

if (errorLog.length > 0) {
  const errorLogContent = [
    `# Chunk Processing Errors - ${runDate}`,
    `Generated: ${new Date().toISOString()}`,
    `Total errors/warnings: ${errorLog.length}`,
    "",
    ...errorLog.map((error, i) => `${i + 1}. ${error}`),
  ].join("\n");

  fs.writeFileSync(errorLogPath, errorLogContent);
  console.log(`⚠️ Error log saved: ${errorLog.length} issues logged`);
}

// Elite summary report
console.log("╔══════════════════════════════════════════════════════════════╗");
console.log("║                      CHUNKING COMPLETE                      ║");
console.log("╚══════════════════════════════════════════════════════════════╝");
console.log("");
console.log("🏆 ELITE RESULTS SUMMARY");
console.log(`   📁 Chunks directory: ${chunksDir}/`);
console.log(`   📄 Source files: ${chunkManifest.total_source_files}`);
console.log(`   ⚡ Chunks created: ${chunkManifest.chunks_created}`);
console.log(`   🔗 Chunks merged: ${chunkManifest.chunks_merged}`);
console.log(`   ⚠️ Chunks skipped: ${chunkManifest.chunks_skipped}`);
console.log(`   📊 Avg chunk size: ${chunkManifest.avg_chunk_size} chars`);
console.log(`   🎯 Total tokens: ${totalTokens.toLocaleString()}`);
console.log(`   📋 Manifest: ${chunkManifestPath}`);
if (errorLog.length > 0) {
  console.log(`   ⚠️ Error log: ${errorLogPath} (${errorLog.length} issues)`);
}
console.log("");

// Quality metrics
const docTypeBreakdown = {};
chunkManifest.files.forEach((file) => {
  const docType = file.parent_slug.split("-")[0];
  if (!docTypeBreakdown[docType]) {
    docTypeBreakdown[docType] = { files: 0, chunks: 0, tokens: 0 };
  }
  docTypeBreakdown[docType].files++;
  docTypeBreakdown[docType].chunks += file.chunks_created;
  docTypeBreakdown[docType].tokens += file.total_tokens;
});

console.log("📂 BREAKDOWN BY DOCUMENT TYPE");
Object.entries(docTypeBreakdown).forEach(([type, stats]) => {
  console.log(
    `   ${type}: ${stats.files} files → ${
      stats.chunks
    } chunks (${stats.tokens.toLocaleString()} tokens)`
  );
});

console.log("");

// Chunk type breakdown
const chunkTypeBreakdown = {};
chunkManifest.files.forEach((file) => {
  file.chunks.forEach((chunk) => {
    if (!chunkTypeBreakdown[chunk.chunk_type]) {
      chunkTypeBreakdown[chunk.chunk_type] = 0;
    }
    chunkTypeBreakdown[chunk.chunk_type]++;
  });
});

console.log("🏷️ BREAKDOWN BY CHUNK TYPE");
Object.entries(chunkTypeBreakdown).forEach(([type, count]) => {
  const percentage = Math.round((count / chunkManifest.chunks_created) * 100);
  console.log(`   ${type}: ${count} chunks (${percentage}%)`);
});

console.log("");
console.log("🎯 CORPUS QUALITY METRICS");
const tokenDistribution = chunkManifest.files
  .flatMap((f) => f.chunks)
  .map((c) => c.token_count)
  .sort((a, b) => a - b);
const p50 = tokenDistribution[Math.floor(tokenDistribution.length * 0.5)];
const p90 = tokenDistribution[Math.floor(tokenDistribution.length * 0.9)];
const p99 = tokenDistribution[Math.floor(tokenDistribution.length * 0.99)];

console.log(`   📊 Token distribution: P50=${p50}, P90=${p90}, P99=${p99}`);
console.log(
  `   ⚡ Vector ready: ${chunkManifest.chunks_created} atomic concepts`
);
console.log(
  `   🧠 LLM optimized: ${Math.round(
    (tokenDistribution.filter((t) => t <= 2000).length /
      tokenDistribution.length) *
      100
  )}% chunks ≤ 2K tokens`
);
console.log(
  `   🔗 Sibling links: ${
    chunkManifest.chunks_created * (chunkManifest.chunks_created > 1 ? 1 : 0)
  } cross-references`
);
console.log(
  `   🏷️ Tags ready: ${chunkManifest.chunks_created} chunks prepared for enrichment`
);

console.log("");
console.log("🚀 NEXT STEPS");
console.log("   1. Review sample chunks in chunks/ directory");
console.log(
  "   2. Filter by chunk_type for targeted processing (method/guide/tutorial/error)"
);
console.log("   3. Use sibling_chunks for agent navigation between concepts");
console.log("   4. Enrich tags[] array via NLP or manual QA");
console.log("   5. Run vector embedding pipeline");
console.log("   6. Ingest into RAG system or LLM training");
if (errorLog.length > 0) {
  console.log(
    "   7. Review chunk-errors.log for quality issues (grep '[ERROR]' for critical)"
  );
}
console.log("");
