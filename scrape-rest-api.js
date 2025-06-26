const fs = require("fs");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const url = "https://www.figma.com/developers/api";
  await page.goto(url, { waitUntil: "domcontentloaded" });

  // Wait for hydration
  await page.waitForTimeout(5000);

  // Extract section blocks by id
  const sections = await page.evaluate(() => {
    const elements = Array.from(
      document.querySelectorAll(".developer_docs--section--FXtC8")
    );
    return elements
      .map((el) => ({
        id: el.id || null,
        html: el.outerHTML,
      }))
      .filter((s) => s.id);
  });

  // Ensure output dir exists
  const outDir = "out";
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  for (const { id, html } of sections) {
    const filename = `${outDir}/rest-api-${id}.html`;
    fs.writeFileSync(filename, html);
    console.log(`✅ Saved section: ${id}`);
  }

  const total = sections.length;
  console.log(`\n📊 Figma REST API Scrape Complete`);
  console.log(`   Sections saved: ${total}`);
  console.log(`   IDs: ${sections.map((s) => s.id).join(", ")}`);

  await browser.close();
})();
