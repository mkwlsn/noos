---
ritual: eidetic-prep
status: draft
type: repair
used_by: assistant, engineer, daemon
invokes: chunks/*.md, healing-summary.txt, eidetic-prep.log
summary: Applies healing logic to chunk frontmatter. Will support targeted fixes via --fix yaml and --fix types.
---

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

// Parse flags
const flags = {};
args.forEach(arg => {
if (arg.startsWith('--')) {
const [key, value] = arg.split('=');
flags[key.replace('--', '')] = value === undefined ? true : value;
}
});

const CHUNK_ERRORS_LOG = path.join(**dirname, 'chunk-errors.log');
const FULL_ERRORS_LOG = path.join(**dirname, 'full-errors.log');
const CHUNKS_DIR = path.join(\_\_dirname, 'chunks');

function readLog(filePath) {
if (!fs.existsSync(filePath)) return [];
const content = fs.readFileSync(filePath, 'utf-8');
return content.trim().split('\n').map(line => {
try {
return JSON.parse(line);
} catch {
return null;
}
}).filter(Boolean);
}

function getChunkMetadata(chunkPath) {
if (!fs.existsSync(chunkPath)) return null;
const content = fs.readFileSync(chunkPath, 'utf-8');
const frontmatterMatch = content.match(/^---\n([\s\S]\*?)\n---/);
if (!frontmatterMatch) return null;
const frontmatter = frontmatterMatch[1];
const meta = {};
frontmatter.split('\n').forEach(line => {
const [key, ...rest] = line.split(':');
meta[key.trim()] = rest.join(':').trim();
});
return meta;
}

function applyFilters(logs) {
let filtered = logs;

if (flags.chunks) {
// Only chunk-related errors from chunk-errors.log
filtered = readLog(CHUNK_ERRORS_LOG);
}

if (flags.title) {
// Filter by chunk title or filename
filtered = filtered.filter(err => {
if (!err.chunk) return false;
const chunkFile = path.join(CHUNKS_DIR, err.chunk);
const meta = getChunkMetadata(chunkFile);
if (!meta) return false;
const title = meta.title || '';
return title === flags.title || err.chunk === flags.title;
});
}

if (flags.type) {
// Filter by chunk_type in frontmatter
filtered = filtered.filter(err => {
if (!err.chunk) return false;
const chunkFile = path.join(CHUNKS_DIR, err.chunk);
const meta = getChunkMetadata(chunkFile);
if (!meta) return false;
return meta.chunk_type === flags.type;
});
}

return filtered;
}

function generateSummary() {
let logs = readLog(FULL_ERRORS_LOG);

logs = applyFilters(logs);

if (logs.length === 0) {
console.log('No errors or warnings found for the specified filters.');
return;
}

logs.forEach(err => {
if (flags.trace) {
console.log(generateTraceOutput(err));
} else {
console.log(`[${err.level.toUpperCase()}] ${err.message} (chunk: ${err.chunk || 'N/A'})`);
}
});
}

// Placeholder for --fix-yaml
function fixYaml() {
console.log('fixYaml placeholder - no implementation yet.');
}

// Placeholder for --fix-types
function fixTypes() {
console.log('fixTypes placeholder - no implementation yet.');
}

function generateTraceOutput(err) {
const lines = [];
lines.push(`Level: ${err.level.toUpperCase()}`);
lines.push(`Message: ${err.message}`);
lines.push(`Chunk: ${err.chunk || 'N/A'}`);
if (err.timestamp) lines.push(`Timestamp: ${err.timestamp}`);
if (err.filePath) lines.push(`File: ${err.filePath}`);
if (err.stack) lines.push(`Stack Trace:\n${err.stack}`);
if (err.context) lines.push(`Context:\n${JSON.stringify(err.context, null, 2)}`);
return lines.join('\n');
}

if (flags['fix-yaml']) {
fixYaml();
} else if (flags['fix-types']) {
fixTypes();
} else {
generateSummary();
}
