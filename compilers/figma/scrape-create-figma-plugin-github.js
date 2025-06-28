const fs = require("fs");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Set larger viewport for better content capture
  await page.setViewportSize({ width: 1920, height: 1080 });

  const baseUrl = "https://github.com/yuanqing/create-figma-plugin/tree/main/packages/website/docs";
  console.log(`📡 Starting create-figma-plugin GitHub docs scrape...`);
  console.log(`🎯 Base URL: ${baseUrl}`);

  const visited = new Set();
  const failedUrls = new Set();
  const outDir = "output/raw";
  
  // Ensure output directory exists
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  let pageCount = 0;
  const maxPages = 50; // GitHub docs likely smaller

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
      
      // Add query params if they exist (for specific file views)
      if (urlObj.search) {
        filename += urlObj.search.replace(/[?&=]/g, '-');
      }
      
      filename = `create-figma-plugin-github-${filename}.html`;
      
      // Save the page
      const filepath = `${outDir}/${filename}`;
      fs.writeFileSync(filepath, content);
      
      visited.add(url);
      pageCount++;
      
      console.log(`✅ Saved: ${filename}`);

      // Find GitHub directory/file links
      const links = await page.evaluate(() => {
        const links = Array.from(document.querySelectorAll('a[href]'));
        return links
          .map(link => link.href)
          .filter(href => 
            href.includes('github.com/yuanqing/create-figma-plugin') &&
            (href.includes('/tree/main/packages/website/docs') || 
             href.includes('/blob/main/packages/website/docs')) &&
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

  // Start with the main docs directory
  const startUrls = [baseUrl];
  
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
  console.log(`\n📊 create-figma-plugin GitHub Docs Scrape Complete`);
  console.log(`   Total pages scraped: ${pageCount}`);
  console.log(`   Failed URLs: ${failedUrls.size}`);
  console.log(`   Success rate: ${((pageCount / (pageCount + failedUrls.size)) * 100).toFixed(1)}%`);
  console.log(`   Output directory: ${outDir}/`);
  
  if (failedUrls.size > 0) {
    console.log(`   ⚠️  Failed URLs: ${Array.from(failedUrls).join(", ")}`);
  }

  await browser.close();
})();