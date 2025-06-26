const fs = require("fs");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Set larger viewport to ensure all content can render
  await page.setViewportSize({ width: 1920, height: 1080 });

  const url = "https://www.figma.com/developers/api";
  console.log(`📡 Loading ${url}...`);
  await page.goto(url, { waitUntil: "networkidle" });

  // Expected sections based on Figma REST API structure
  const expectedSections = [
    "intro", "authentication", "errors", "files", "comments", 
    "users", "projects", "version-history", "library-items", 
    "library-analytics", "activity_logs", "payments", "variables",
    "webhooks_v2", "dev-resources", "changelog", "scim-api-guide"
  ];

  console.log(`🔄 Triggering hydration with scroll-and-poll strategy...`);
  
  // Progressive scroll and hydration detection
  const sections = await page.evaluate(async (expectedIds) => {
    const foundSections = new Map();
    const maxAttempts = 30;
    const scrollStep = 500;
    let attempts = 0;
    let lastFoundCount = 0;
    let stableCount = 0;

    const checkSections = () => {
      const elements = Array.from(
        document.querySelectorAll(".developer_docs--section--FXtC8")
      );
      
      elements.forEach(el => {
        if (el.id && !foundSections.has(el.id)) {
          foundSections.set(el.id, {
            id: el.id,
            html: el.outerHTML,
            timestamp: Date.now()
          });
        }
      });
      
      return foundSections.size;
    };

    // Initial check
    let currentCount = checkSections();
    console.log(`Initial sections found: ${currentCount}`);

    // Scroll-and-poll loop
    while (attempts < maxAttempts) {
      // Scroll progressively through the page
      const scrollY = Math.min(attempts * scrollStep, document.body.scrollHeight);
      window.scrollTo(0, scrollY);
      
      // Wait for potential hydration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check for new sections
      const newCount = checkSections();
      
      if (newCount > currentCount) {
        console.log(`Found ${newCount - currentCount} new sections (total: ${newCount})`);
        currentCount = newCount;
        lastFoundCount = newCount;
        stableCount = 0;
      } else if (newCount === lastFoundCount) {
        stableCount++;
      }
      
      // Stop if we've found all expected sections or if count has been stable
      if (expectedIds.every(id => foundSections.has(id)) || stableCount >= 5) {
        console.log(`Stopping: found all expected sections or count stable for 5 attempts`);
        break;
      }
      
      attempts++;
      
      // Scroll to bottom and back to trigger more lazy loading
      if (attempts % 10 === 0) {
        window.scrollTo(0, document.body.scrollHeight);
        await new Promise(resolve => setTimeout(resolve, 2000));
        window.scrollTo(0, 0);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    // Final scroll to ensure everything is loaded
    window.scrollTo(0, document.body.scrollHeight);
    await new Promise(resolve => setTimeout(resolve, 3000));
    checkSections();

    return Array.from(foundSections.values());
  }, expectedSections);

  // Validate results
  const foundIds = sections.map(s => s.id);
  const missingIds = expectedSections.filter(id => !foundIds.includes(id));
  
  if (missingIds.length > 0) {
    console.log(`⚠️  Missing expected sections: ${missingIds.join(", ")}`);
  }

  // Additional validation - check for sections with actual content
  const validSections = sections.filter(section => {
    // Simple content validation without jsdom dependency
    const textContent = section.html.replace(/<[^>]*>/g, '').trim();
    return textContent.length > 100; // Has substantial content
  });

  console.log(`📋 Found ${sections.length} sections, ${validSections.length} with substantial content`);

  // Ensure output dir exists
  const outDir = "out";
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  // Save all sections, including those with minimal content for completeness
  for (const { id, html } of sections) {
    const filename = `${outDir}/rest-api-${id}.html`;
    fs.writeFileSync(filename, html);
    console.log(`✅ Saved section: ${id}`);
  }

  // Summary report
  console.log(`\n📊 Figma REST API Scrape Complete`);
  console.log(`   Total sections found: ${sections.length}`);
  console.log(`   Sections with content: ${validSections.length}`);
  console.log(`   Expected sections: ${expectedSections.length}`);
  console.log(`   Coverage: ${((foundIds.filter(id => expectedSections.includes(id)).length / expectedSections.length) * 100).toFixed(1)}%`);
  console.log(`   Section IDs: ${foundIds.join(", ")}`);
  
  if (missingIds.length > 0) {
    console.log(`   ⚠️  Missing: ${missingIds.join(", ")}`);
  }

  await browser.close();
})();
