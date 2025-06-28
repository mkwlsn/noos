const fs = require("fs");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Set larger viewport for better content capture
  await page.setViewportSize({ width: 1920, height: 1080 });

  const baseUrl = "https://github.com/yuanqing/create-figma-plugin/tree/main/packages/ui/.storybook";
  console.log(`📡 Starting create-figma-plugin Storybook config scrape...`);
  console.log(`🎯 Base URL: ${baseUrl}`);

  const visited = new Set();
  const failedUrls = new Set();
  const outDir = "output/raw";
  
  // Ensure output directory exists
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  let pageCount = 0;
  const maxPages = 50;

  async function scrapePage(url) {
    if (visited.has(url) || pageCount >= maxPages) {
      return [];
    }

    try {
      console.log(`📄 [${pageCount + 1}] Scraping: ${url}`);
      
      await page.goto(url, { 
        waitUntil: "networkidle",
        timeout: 30000 
      });
      
      // Wait for content to load
      await page.waitForTimeout(2000);

      // Get page content
      const content = await page.content();
      
      // Extract meaningful filename from URL
      const urlObj = new URL(url);
      let filename = urlObj.pathname.replace(/\//g, '-');
      if (filename.startsWith('-')) filename = filename.substring(1);
      if (filename.endsWith('-')) filename = filename.slice(0, -1);
      if (!filename) filename = 'index';
      
      filename = `create-figma-plugin-storybook-${filename}.html`;
      
      // Save the page
      const filepath = `${outDir}/${filename}`;
      fs.writeFileSync(filepath, content);
      
      visited.add(url);
      pageCount++;
      
      console.log(`✅ Saved: ${filename}`);

      // Find GitHub directory/file links in the .storybook area
      const links = await page.evaluate(() => {
        const links = Array.from(document.querySelectorAll('a[href]'));
        return links
          .map(link => link.href)
          .filter(href => 
            href.includes('github.com/yuanqing/create-figma-plugin') &&
            (href.includes('/tree/main/packages/ui/.storybook') || 
             href.includes('/blob/main/packages/ui/.storybook') ||
             href.includes('/tree/main/packages/ui/src') ||
             href.includes('/blob/main/packages/ui/src')) &&
            !href.includes('#') // Skip anchor links
          );
      });

      return [...new Set(links)]; // Remove duplicates

    } catch (error) {
      console.log(`❌ Failed to scrape ${url}: ${error.message}`);
      failedUrls.add(url);
      return [];
    }
  }

  // Start with the .storybook directory and also try to get source files
  const startUrls = [
    baseUrl,
    "https://github.com/yuanqing/create-figma-plugin/tree/main/packages/ui/src"
  ];
  
  // Breadth-first crawling
  const urlQueue = [...startUrls];
  
  while (urlQueue.length > 0 && pageCount < maxPages) {
    const currentUrl = urlQueue.shift();
    
    if (!visited.has(currentUrl)) {
      const newLinks = await scrapePage(currentUrl);
      
      // Add new links to queue
      newLinks.forEach(link => {
        if (!visited.has(link) && !urlQueue.includes(link)) {
          urlQueue.push(link);
        }
      });
    }
  }

  // Summary report
  console.log(`\n📊 create-figma-plugin Storybook Config Scrape Complete`);
  console.log(`   Total pages scraped: ${pageCount}`);
  console.log(`   Failed URLs: ${failedUrls.size}`);
  console.log(`   Success rate: ${((pageCount / (pageCount + failedUrls.size)) * 100).toFixed(1)}%`);
  console.log(`   Output directory: ${outDir}/`);
  
  if (failedUrls.size > 0) {
    console.log(`   ⚠️  Failed URLs: ${Array.from(failedUrls).join(", ")}`);
  }

  await browser.close();
})();