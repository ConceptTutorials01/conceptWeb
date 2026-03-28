// scripts/generate-sitemap.js
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// __dirname workaround for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  // Only list routes that actually exist in App.tsx.
  // /about, /courses, /contact are anchor-scroll sections (#hash), NOT real routes.
  // Adding phantom routes causes 75% of sitemap URLs to 404, harming crawl budget.
  const routes = [
    "/",
    // Add new routes here only after creating them in src/App.tsx
  ];

  const sitemap = new SitemapStream({ hostname: "https://conceptutorials.com" });
  const writeStream = createWriteStream(path.resolve(__dirname, "../public/sitemap.xml"));

  sitemap.pipe(writeStream);
  routes.forEach((url) => sitemap.write({ url, changefreq: "monthly", priority: 1.0 }));
  sitemap.end();

  await streamToPromise(sitemap);
  console.log("✅ Sitemap generated at public/sitemap.xml");
})();
