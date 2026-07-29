import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const DIST = join(process.cwd(), 'dist');

function walk(dir, acc = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (f.endsWith('.html')) acc.push(p);
  }
  return acc;
}

const files = walk(DIST);
let brokenCount = 0;
const seen = new Set();

for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const hrefs = [...html.matchAll(/href="(\/[^"#]*)"/g)].map(m => m[1]);
  for (const href of hrefs) {
    if (href.startsWith('//') || href.includes('.')) {
      // could be an asset path (css/js) or a file with extension - check existence directly
      if (href.endsWith('/')) {
        // fallthrough
      } else {
        const assetPath = join(DIST, href);
        if (!existsSync(assetPath)) {
          console.log(`BROKEN ASSET: ${href}  (in ${file.replace(DIST,'')})`);
          brokenCount++;
        }
        continue;
      }
    }
    const key = href;
    if (seen.has(key)) continue;
    seen.add(key);
    const target = href.endsWith('/') ? join(DIST, href, 'index.html') : join(DIST, href + '/index.html');
    if (!existsSync(target)) {
      console.log(`BROKEN LINK: ${href}  (first seen in ${file.replace(DIST,'')})`);
      brokenCount++;
    }
  }
}
console.log(`\nChecked ${files.length} files, ${seen.size} unique internal links. Broken: ${brokenCount}`);
