// scripts/generate-sitemap.js
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// __dirname workaround for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const routes = [
    "/",
    "/about",
    "/courses",
    "/contact"
    // add dynamic pages here
  ];

  const sitemap = new SitemapStream({ hostname: "https://conceptutorials.com" });
  const writeStream = createWriteStream(path.resolve(__dirname, "../public/sitemap.xml"));

  sitemap.pipe(writeStream);
  routes.forEach((url) => sitemap.write({ url, changefreq: "weekly", priority: 0.8 }));
  sitemap.end();

  await streamToPromise(sitemap);
  console.log("✅ Sitemap generated at public/sitemap.xml");
})();
