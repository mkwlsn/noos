const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");

const OUT_DIR = path.resolve(__dirname, "out");
const CLEAN_DIR = path.resolve(__dirname, "clean");

if (!fs.existsSync(CLEAN_DIR)) {
  fs.mkdirSync(CLEAN_DIR);
}

const files = fs.readdirSync(OUT_DIR).filter((f) => f.endsWith(".html"));

files.forEach((file) => {
  const fullPath = path.join(OUT_DIR, file);
  const html = fs.readFileSync(fullPath, "utf-8");
  const $ = cheerio.load(html);

  // Look for markdown content wrapper if present
  const content = $(".theme-doc-markdown.markdown").length
    ? $(".theme-doc-markdown.markdown").html()
    : $.root().html();

  const $content = cheerio.load(content);

  // Placeholder: collect h2s and paragraphs into markdown-style lines
  let output = `# ${file.replace(".html", "")}\n\n`;

  $content("h1,h2,h3,p,pre,code,ul,ol,li").each((i, el) => {
    const tag = el.tagName;
    const text = $content(el).text();

    if (tag.startsWith("h")) {
      const level = tag[1];
      output += `${"#".repeat(level)} ${text}\n\n`;
    } else if (tag === "pre") {
      output += "```\n" + text + "\n```\n\n";
    } else if (tag === "li") {
      output += `- ${text}\n`;
    } else {
      output += `${text}\n\n`;
    }
  });

  const outFile = path.join(CLEAN_DIR, file.replace(".html", ".md"));
  fs.writeFileSync(outFile, output);
  console.log(`✅ Cleaned: ${file}`);
});
