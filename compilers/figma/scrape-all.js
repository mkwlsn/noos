const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const scripts = [
  { name: "scrape-rest-api.js", label: "REST API", emoji: "🌐" },
  { name: "scrape-plugin-api-guide.js", label: "Plugin Guides", emoji: "📚" },
  { name: "scrape-plugin-api-reference.js", label: "Plugin API Reference", emoji: "🔧" },
  { name: "scrape-code-connect.js", label: "Code Connect", emoji: "🔗" },
];

const startTime = Date.now();
const results = [];

console.log("╔══════════════════════════════════════════════════════════════╗");
console.log("║                    FIGMA DOCS SCRAPER                       ║");
console.log("║            Comprehensive Documentation Harvester            ║");
console.log("╚══════════════════════════════════════════════════════════════╝");
console.log("");

// Ensure output directory exists
const outDir = "output/raw";
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
  console.log(`📁 Created output directory: ${outDir}/`);
}

// Count existing files for before/after comparison
const getFileCount = () => {
  try {
    return fs.readdirSync(outDir).filter(f => f.endsWith('.html')).length;
  } catch (e) {
    return 0;
  }
};

const initialFileCount = getFileCount();

console.log(`🎯 Target: Complete Figma developer documentation`);
console.log(`📂 Output: ${path.resolve(outDir)}/`);
console.log(`⏰ Started: ${new Date().toLocaleTimeString()}`);
console.log("");

// Progress tracking
let completedScripts = 0;
const totalScripts = scripts.length;

for (const script of scripts) {
  const scriptStart = Date.now();
  
  // Progress bar
  const progress = Math.round((completedScripts / totalScripts) * 100);
  const progressBar = "█".repeat(Math.floor(progress / 5)) + "░".repeat(20 - Math.floor(progress / 5));
  
  console.log(`┌─────────────────────────────────────────────────────────────┐`);
  console.log(`│ ${script.emoji} ${script.label.padEnd(25)} [${progressBar}] ${progress}% │`);
  console.log(`└─────────────────────────────────────────────────────────────┘`);
  
  try {
    // Capture output but don't display it live to keep UX clean
    const output = execSync(`node ${script.name}`, { 
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe']
    });
    
    const scriptTime = ((Date.now() - scriptStart) / 1000).toFixed(1);
    
    // Parse key metrics from output
    const lines = output.split('\n');
    const savedMatch = lines.find(l => l.includes('Pages saved:') || l.includes('Sections saved:'));
    const savedCount = savedMatch ? savedMatch.match(/\d+/)?.[0] || '?' : '?';
    
    const coverageMatch = lines.find(l => l.includes('Coverage:') || l.includes('Success rate:'));
    const coverage = coverageMatch ? coverageMatch.match(/[\d.]+%/)?.[0] || '?' : '?';
    
    results.push({
      script: script.label,
      status: 'success',
      time: scriptTime,
      saved: savedCount,
      coverage: coverage
    });
    
    console.log(`   ✅ ${script.label} completed in ${scriptTime}s`);
    console.log(`   📄 Saved: ${savedCount} pages | Coverage: ${coverage}`);
    
  } catch (err) {
    const scriptTime = ((Date.now() - scriptStart) / 1000).toFixed(1);
    
    results.push({
      script: script.label,
      status: 'failed',
      time: scriptTime,
      error: err.message.split('\n')[0] // First line only
    });
    
    console.log(`   ❌ ${script.label} failed after ${scriptTime}s`);
    console.log(`   💥 Error: ${err.message.split('\n')[0]}`);
  }
  
  completedScripts++;
  console.log("");
}

// Final summary
const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
const finalFileCount = getFileCount();
const newFiles = finalFileCount - initialFileCount;
const successCount = results.filter(r => r.status === 'success').length;

console.log("╔══════════════════════════════════════════════════════════════╗");
console.log("║                        SCRAPE COMPLETE                      ║");
console.log("╚══════════════════════════════════════════════════════════════╝");
console.log("");

// Results table
console.log("📊 RESULTS SUMMARY");
console.log("┌─────────────────────┬─────────┬─────────┬───────────┬──────────┐");
console.log("│ Script              │ Status  │ Time    │ Pages     │ Coverage │");
console.log("├─────────────────────┼─────────┼─────────┼───────────┼──────────┤");

results.forEach(result => {
  const script = result.script.padEnd(19);
  const status = result.status === 'success' ? '✅ OK   ' : '❌ FAIL ';
  const time = `${result.time}s`.padEnd(7);
  const pages = result.status === 'success' ? result.saved.padEnd(9) : 'N/A'.padEnd(9);
  const coverage = result.status === 'success' ? result.coverage.padEnd(8) : 'N/A'.padEnd(8);
  
  console.log(`│ ${script} │ ${status} │ ${time} │ ${pages} │ ${coverage} │`);
});

console.log("└─────────────────────┴─────────┴─────────┴───────────┴──────────┘");
console.log("");

// Overall metrics
console.log("🎯 OVERALL METRICS");
console.log(`   ⏱️  Total time: ${totalTime}s`);
console.log(`   📁 Output files: ${finalFileCount} total (${newFiles > 0 ? '+' : ''}${newFiles} new)`);
console.log(`   ✅ Success rate: ${successCount}/${totalScripts} scripts (${Math.round(successCount/totalScripts*100)}%)`);
console.log(`   📂 Location: ${path.resolve(outDir)}/`);

if (successCount === totalScripts) {
  console.log("");
  console.log("🎉 Perfect run! All documentation successfully scraped.");
  console.log("🚀 Ready for LLM ingestion, RAG systems, or further processing.");
} else {
  console.log("");
  console.log("⚠️  Some scripts encountered issues. Check individual results above.");
  console.log("💡 Partial scrapes are often still valuable for most use cases.");
}

console.log("");
