// Zero-dependency local preview server for /dist.
// Usage: node build/serve.mjs [port]
import http from "http";
import { readFile, stat } from "fs/promises";
import { join, extname, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "dist");
const PORT = process.argv[2] || 8080;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
};

async function resolvePath(urlPath) {
  let p = decodeURIComponent(urlPath.split("?")[0]);
  if (p.endsWith("/")) p += "index.html";
  let full = join(ROOT, p);
  try {
    const s = await stat(full);
    if (s.isDirectory()) full = join(full, "index.html");
    return full;
  } catch {
    return null;
  }
}

const server = http.createServer(async (req, res) => {
  let full = await resolvePath(req.url);
  if (!full) {
    // fall back to 404.html like GitHub Pages does
    full = join(ROOT, "404.html");
    try {
      const body = await readFile(full);
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.end(body);
    } catch {
      res.writeHead(404);
      res.end("Not found");
    }
    return;
  }
  try {
    const body = await readFile(full);
    const type = TYPES[extname(full)] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": type });
    res.end(body);
  } catch {
    res.writeHead(500);
    res.end("Server error");
  }
});

server.listen(PORT, () => {
  console.log(`✔ Hackverge preview running at http://localhost:${PORT}`);
});
