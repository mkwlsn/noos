const { execSync } = require("child_process");

const scripts = [
  "scrape-rest-api.js",
  "scrape-plugin-api-guide.js",
  "scrape-plugin-api-reference.js",
];

console.log("🚀 Starting full Figma docs scrape...\n");

for (const script of scripts) {
  try {
    console.log(`▶️  Running ${script}`);
    execSync(`node ${script}`, { stdio: "inherit" });
    console.log(`✅ Finished ${script}\n`);
  } catch (err) {
    console.error(`❌ Error in ${script}:`, err.message);
  }
}

console.log("🎉 All scraping scripts completed.");
