// scripts/generate-index.js
import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const packagesDir = path.resolve('packages');

const isDirectory = (p) => {
  try {
    return fs.statSync(p).isDirectory();
  } catch {
    return false;
  }
};

const safeReadText = (filePath) => {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch {
    return null;
  }
};

const safeReadJson = (filePath) => {
  const text = safeReadText(filePath);
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
};

const parseSlidevFrontmatter = (slidesMdText) => {
  if (!slidesMdText) return null;
  if (!slidesMdText.startsWith('---')) return null;

  const endIndex = slidesMdText.indexOf('\n---', 3);
  if (endIndex === -1) return null;

  const raw = slidesMdText.slice(3, endIndex).trim();
  const lines = raw.split('\n');
  const data = {};

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (trimmed.startsWith('#')) continue;
    const idx = trimmed.indexOf(':');
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    const value = trimmed.slice(idx + 1).trim();
    if (!key) continue;
    if (!value) continue;
    data[key] = value.replace(/^['"]|['"]$/g, '');
  }

  return data;
};

const findCoverImage = (publicDir) => {
  const preferred = ['cover.png', 'cover.jpg', 'cover.jpeg', 'cover.webp', 'cover.gif'];
  for (const file of preferred) {
    const fp = path.join(publicDir, file);
    if (fs.existsSync(fp)) return file;
  }

  if (!isDirectory(publicDir)) return null;

  const files = fs.readdirSync(publicDir);
  const image = files.find((f) => /\.(png|jpe?g|webp|gif)$/i.test(f));
  return image ?? null;
};

const formatDate = (ms) => {
  const d = new Date(ms);
  const yyyy = String(d.getFullYear());
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

const deckSlugs = fs
  .readdirSync(packagesDir)
  .filter((dir) => isDirectory(path.join(packagesDir, dir)))
  .filter((dir) => !dir.startsWith('.') && dir !== 'theme-shared');

const decks = deckSlugs
  .map((slug) => {
    const deckDir = path.join(packagesDir, slug);
    const slidesPath = path.join(deckDir, 'slides.md');
    const packageJsonPath = path.join(deckDir, 'package.json');
    const publicDir = path.join(deckDir, 'public');

    const pkg = safeReadJson(packageJsonPath);
    const slidesText = safeReadText(slidesPath);
    const fm = parseSlidevFrontmatter(slidesText);

    const title =
      fm?.title ??
      pkg?.name ??
      slug;

    const description =
      fm?.info ??
      fm?.description ??
      pkg?.description ??
      '';

    const cover = findCoverImage(publicDir);

    let updatedAtMs = 0;
    try {
      updatedAtMs = fs.statSync(slidesPath).mtimeMs;
    } catch {
      updatedAtMs = 0;
    }

    return {
      slug,
      title,
      description,
      cover,
      updatedAtMs,
      updatedAt: updatedAtMs ? formatDate(updatedAtMs) : '',
    };
  })
  .sort((a, b) => (b.updatedAtMs - a.updatedAtMs) || a.slug.localeCompare(b.slug));

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>RyanJoy's Slidev Collection</title>
  <style>
    :root {
      --bg0: #0b1020;
      --bg1: #0f172a;
      --card: rgba(255, 255, 255, 0.08);
      --card2: rgba(255, 255, 255, 0.12);
      --text: rgba(255, 255, 255, 0.92);
      --muted: rgba(255, 255, 255, 0.65);
      --link: #93c5fd;
      --border: rgba(255, 255, 255, 0.14);
      --shadow: 0 14px 50px rgba(0, 0, 0, 0.35);
    }

    @media (prefers-color-scheme: light) {
      :root {
        --bg0: #f8fafc;
        --bg1: #ffffff;
        --card: rgba(15, 23, 42, 0.04);
        --card2: rgba(15, 23, 42, 0.07);
        --text: rgba(15, 23, 42, 0.92);
        --muted: rgba(15, 23, 42, 0.66);
        --link: #1d4ed8;
        --border: rgba(15, 23, 42, 0.12);
        --shadow: 0 10px 40px rgba(15, 23, 42, 0.12);
      }
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      color: var(--text);
      font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
      background:
        radial-gradient(1200px 600px at 20% 0%, rgba(59, 130, 246, 0.25), transparent 55%),
        radial-gradient(900px 600px at 80% 10%, rgba(168, 85, 247, 0.20), transparent 55%),
        linear-gradient(180deg, var(--bg0), var(--bg1));
      min-height: 100vh;
    }

    .container {
      max-width: 1080px;
      padding: 44px 18px 64px;
      margin: 0 auto;
    }

    header {
      display: flex;
      flex-wrap: wrap;
      align-items: end;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 20px;
    }

    .title {
      display: grid;
      gap: 6px;
    }

    h1 {
      font-size: 28px;
      line-height: 1.15;
      margin: 0;
      letter-spacing: -0.02em;
    }

    .subtitle {
      margin: 0;
      color: var(--muted);
      font-size: 14px;
      line-height: 1.45;
    }

    .controls {
      display: grid;
      gap: 10px;
      min-width: min(420px, 100%);
    }

    .search {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 12px;
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 12px;
      box-shadow: var(--shadow);
      backdrop-filter: blur(10px);
    }

    .search input {
      width: 100%;
      border: none;
      outline: none;
      background: transparent;
      color: var(--text);
      font-size: 14px;
    }

    .search input::placeholder {
      color: var(--muted);
    }

    .stats {
      color: var(--muted);
      font-size: 13px;
      white-space: nowrap;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 24px;
      margin-top: 32px;
    }

    @media (max-width: 640px) {
      .grid { grid-template-columns: 1fr; }
      header { flex-direction: column; align-items: stretch; }
      .controls { min-width: 0; }
      .title h1 { font-size: 24px; }
    }

    .card {
      display: flex;
      flex-direction: column;
      gap: 0;
      padding: 0;
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 16px;
      box-shadow: var(--shadow);
      backdrop-filter: blur(10px);
      text-decoration: none;
      color: inherit;
      transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
      overflow: hidden;
      height: 100%;
    }

    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.4);
      border-color: rgba(255, 255, 255, 0.3);
      z-index: 1;
    }

    @media (prefers-color-scheme: light) {
      .card:hover { 
        border-color: rgba(15, 23, 42, 0.3); 
        box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15);
      }
    }

    .thumb {
      width: 100%;
      aspect-ratio: 16/9;
      background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(168,85,247,0.05));
      border-bottom: 1px solid var(--border);
      position: relative;
      overflow: hidden;
    }

    .thumb img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 500ms ease;
    }

    .card:hover .thumb img {
      transform: scale(1.03);
    }

    .thumb-placeholder {
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      color: var(--muted);
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }

    .meta {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 20px;
      gap: 12px;
    }

    .meta h2 {
      margin: 0;
      font-size: 18px;
      line-height: 1.3;
      font-weight: 600;
      letter-spacing: -0.01em;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .meta .desc {
      margin: 0;
      color: var(--muted);
      font-size: 14px;
      line-height: 1.6;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      flex: 1;
    }

    .meta .row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      align-items: center;
      margin-top: 8px;
      padding-top: 16px;
      border-top: 1px solid rgba(255,255,255,0.06);
    }
    
    @media (prefers-color-scheme: light) {
      .meta .row { border-top-color: rgba(0,0,0,0.06); }
    }

    .chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: var(--muted);
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid transparent;
    }

    @media (prefers-color-scheme: light) {
      .chip { background: rgba(15, 23, 42, 0.04); }
    }

    a.inline {
      color: var(--link);
      text-decoration: none;
    }

    a.inline:hover {
      text-decoration: underline;
    }

    footer {
      margin-top: 26px;
      color: var(--muted);
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="title">
        <h1>RyanJoy's Slidev Collection</h1>
        <p class="subtitle">A pnpm monorepo of Slidev decks. Built output lives in <code>dist/</code>.</p>
      </div>
      <div class="controls">
        <div class="search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M21 21l-4.3-4.3m1.8-5.2a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <input id="q" type="search" placeholder="Search by title / slug..." autocomplete="off" />
        </div>
        <div class="stats"><span id="count"></span></div>
      </div>
    </header>

    <div class="grid" id="grid">
      ${decks
        .map((deck) => {
          const href = `/${deck.slug}/`;
          const coverHtml = deck.cover
            ? `<img src="/${deck.slug}/${deck.cover}" alt="" loading="lazy" />`
            : `<div class="thumb-placeholder">No Cover</div>`;

          const titleEsc = String(deck.title).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
          const descEsc = String(deck.description).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
          const slugEsc = String(deck.slug).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
          const updatedEsc = String(deck.updatedAt).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

          const keywords = [deck.title, deck.description, deck.slug].filter(Boolean).join(' ').toLowerCase();

          return `
            <a class="card" href="${href}" data-q="${keywords.replaceAll('"', '&quot;')}">
              <div class="thumb">${coverHtml}</div>
              <div class="meta">
                <h2 title="${titleEsc}">${titleEsc}</h2>
                <p class="desc">${descEsc || 'No description provided.'}</p>
                <div class="row">
                  <span class="chip">${slugEsc}</span>
                  ${updatedEsc ? `<span class="chip">Updated ${updatedEsc}</span>` : ''}
                </div>
              </div>
            </a>
          `;
        })
        .join('')}
    </div>

    <footer>
      <span>Tip: add <code>title</code>/<code>info</code> in <code>slides.md</code> frontmatter, and put <code>public/cover.png</code> for a nice thumbnail.</span>
    </footer>
  </div>

  <script>
    const input = document.getElementById('q');
    const grid = document.getElementById('grid');
    const cards = Array.from(grid.querySelectorAll('.card'));
    const count = document.getElementById('count');

    const update = () => {
      const q = (input.value || '').trim().toLowerCase();
      let visible = 0;
      for (const el of cards) {
        const hay = el.getAttribute('data-q') || '';
        const ok = !q || hay.includes(q);
        el.style.display = ok ? '' : 'none';
        if (ok) visible += 1;
      }
      count.textContent = visible + ' / ' + cards.length + ' decks';
    };

    input.addEventListener('input', update);
    update();
  </script>
</body>
</html>
`;

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}
fs.writeFileSync(path.join(distDir, 'index.html'), htmlContent);
console.log('Generated dist/index.html for decks:', decks.map((d) => d.slug));
