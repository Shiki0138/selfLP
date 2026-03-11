/**
 * self MAGAZINE - Static Site Generator
 *
 * Reads Markdown posts from magazine/posts/,
 * generates images via Gemini API (Nano Banana),
 * converts to HTML, and updates index + manifest.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { marked } from 'marked';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// Load .env file
const envPath = path.join(ROOT, '.env');
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf-8').split('\n')) {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match) process.env[match[1].trim()] = match[2].trim();
  }
}

const POSTS_DIR = path.join(__dirname, 'posts');
const IMAGES_DIR = path.join(ROOT, 'assets', 'images', 'magazine');
const MANIFEST_PATH = path.join(__dirname, 'manifest.json');
const INDEX_PATH = path.join(__dirname, 'index.html');

const SKIP_IMAGES = process.env.SKIP_IMAGE_GEN === '1';
const GEMINI_KEY = process.env.GEMINI_API_KEY || '';

// ============================================================
// Cost Guardrails
// ============================================================

const COST_PER_IMAGE = 0.039; // Gemini 2.5 Flash Image (USD)
const MONTHLY_BUDGET_USD = 5.0; // Monthly cap
const PER_BUILD_LIMIT = 20; // Max images per single build run
const COST_LOG_PATH = path.join(__dirname, '.image-cost-log.json');

function loadCostLog() {
  if (!fs.existsSync(COST_LOG_PATH)) return { images: [] };
  try { return JSON.parse(fs.readFileSync(COST_LOG_PATH, 'utf-8')); }
  catch { return { images: [] }; }
}

function saveCostLog(log) {
  fs.writeFileSync(COST_LOG_PATH, JSON.stringify(log, null, 2));
}

function getMonthlySpend(log) {
  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
  return log.images
    .filter(e => e.date >= monthStart)
    .reduce((sum, e) => sum + e.cost, 0);
}

let buildImageCount = 0;

function checkBudget(log) {
  const spent = getMonthlySpend(log);
  const remaining = MONTHLY_BUDGET_USD - spent;

  if (remaining <= 0) {
    console.log(`  [budget] Monthly limit reached ($${spent.toFixed(3)} / $${MONTHLY_BUDGET_USD}). Skipping.`);
    return false;
  }
  if (buildImageCount >= PER_BUILD_LIMIT) {
    console.log(`  [limit] Per-build limit reached (${PER_BUILD_LIMIT} images). Skipping.`);
    return false;
  }
  return true;
}

function logImageCost(log, filename) {
  log.images.push({
    file: filename,
    cost: COST_PER_IMAGE,
    date: new Date().toISOString(),
  });
  buildImageCount++;
}

// ============================================================
// Gemini Image Generation
// ============================================================

const IMAGE_MODEL = 'gemini-2.5-flash-image';

async function generateImage(prompt, outputPath, costLog) {
  if (fs.existsSync(outputPath)) return; // skip if already generated
  if (SKIP_IMAGES) {
    console.log(`  [skip] ${path.basename(outputPath)}`);
    return;
  }
  if (!GEMINI_KEY) {
    console.log(`  [no key] ${path.basename(outputPath)} — set GEMINI_API_KEY`);
    return;
  }
  if (!checkBudget(costLog)) return;

  const { GoogleGenAI } = await import('@google/genai');
  const ai = new GoogleGenAI({ apiKey: GEMINI_KEY });

  try {
    const response = await ai.models.generateContent({
      model: IMAGE_MODEL,
      contents: prompt,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    const parts = response.candidates?.[0]?.content?.parts || [];
    for (const part of parts) {
      if (part.inlineData) {
        const buffer = Buffer.from(part.inlineData.data, 'base64');
        fs.mkdirSync(path.dirname(outputPath), { recursive: true });
        fs.writeFileSync(outputPath, buffer);
        logImageCost(costLog, path.basename(outputPath));
        console.log(`  [gen] ${path.basename(outputPath)} ($${COST_PER_IMAGE})`);
        return;
      }
    }
    console.log(`  [no image in response] ${path.basename(outputPath)}`);
  } catch (err) {
    console.error(`  [error] ${path.basename(outputPath)}: ${err.message}`);
  }
}

// ============================================================
// Markdown Processing
// ============================================================

function processMarkdown(content) {
  // Custom renderer for clean HTML
  const renderer = new marked.Renderer();

  // Add section image placeholders: ![alt](::section-image::)
  // These get replaced after image generation
  renderer.image = function ({ href, title, text }) {
    if (href.startsWith('::section-image-')) {
      const idx = href.replace('::section-image-', '').replace('::', '');
      return `<figure><img src="../assets/images/magazine/SECTION_IMG_${idx}" alt="${text}" width="720" height="405" loading="lazy"><figcaption>${text}</figcaption></figure>`;
    }
    return `<figure><img src="${href}" alt="${text}" loading="lazy">${title ? `<figcaption>${title}</figcaption>` : ''}</figure>`;
  };

  marked.setOptions({
    renderer,
    breaks: false,
    gfm: true,
  });

  return marked.parse(content);
}

// ============================================================
// HTML Template
// ============================================================

function articleHTML(meta, bodyHTML) {
  const dateFormatted = meta.date.replace(/-/g, '.');
  const relatedHTML = (meta.related_articles || [])
    .map(r => `
                    <a href="${r.slug}.html" class="mag-card">
                        <div class="mag-card-img"><img src="../assets/images/magazine/${r.slug}-thumb.webp" alt="${r.title}" loading="lazy"></div>
                        <div class="mag-card-body">
                            <div class="mag-card-tag">${r.category || ''}</div>
                            <div class="mag-card-title">${r.title}</div>
                        </div>
                    </a>`)
    .join('\n');

  return `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-W8X5RBK');</script>
    <!-- End Google Tag Manager -->
    <title>${meta.title} | self MAGAZINE</title>
    <meta name="description" content="${meta.description}">
    <meta property="og:title" content="${meta.title}">
    <meta property="og:description" content="${meta.description}">
    <meta property="og:url" content="https://self138.com/magazine/${meta.slug}.html">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="self MAGAZINE">
    <meta property="og:image" content="https://self138.com../assets/images/magazine/${meta.slug}-thumb.webp">
    <link rel="canonical" href="https://self138.com/magazine/${meta.slug}.html">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Shippori+Mincho:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="magazine.css">
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "${meta.title}",
        "author": {
            "@type": "Person",
            "name": "${meta.author || '東 恵理子'}",
            "jobTitle": "髪質改善専門美容師・self開発者"
        },
        "publisher": {
            "@type": "Organization",
            "name": "self"
        },
        "datePublished": "${meta.date}",
        "dateModified": "${meta.date}",
        "description": "${meta.description}",
        "image": "https://self138.com../assets/images/magazine/${meta.slug}-thumb.webp"
    }
    </script>
</head>
<body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W8X5RBK" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

    <header class="mag-header">
        <div class="mag-header-inner">
            <a href="index.html" class="mag-logo">
                self MAGAZINE
                <span>髪と暮らしのヘアケアメディア</span>
            </a>
            <nav class="mag-nav">
                <a href="index.html#ingredients">成分を知る</a>
                <a href="index.html#care">ケアを学ぶ</a>
                <a href="index.html#lifestyle">暮らしに活かす</a>
                <a href="../index.html">self 公式サイト</a>
            </nav>
        </div>
    </header>

    <main class="article-container">

        <nav class="breadcrumb">
            <a href="../index.html">self</a> &gt; <a href="index.html">MAGAZINE</a> &gt; ${meta.breadcrumb || meta.title}
        </nav>

        <article>
            <header class="article-header">
                <div class="article-tag">${meta.category}</div>
                <h1 class="article-title">${meta.title}</h1>
                <div class="article-meta">
                    <span class="article-author">${meta.author || '東 恵理子（髪質改善専門美容師）'}</span>
                    <time datetime="${meta.date}">${dateFormatted}</time>
                </div>
            </header>

            <div class="article-hero-img">
                <img src="../assets/images/magazine/${meta.slug}-thumb.webp" alt="${meta.thumbnail_alt || meta.title}" width="720" height="405">
            </div>

            <div class="article-body">
${bodyHTML}
            </div>

            <!-- CTA -->
            <div class="article-cta">
                <p>${meta.cta_text || 'selfのシャンプーは、アミノ酸系洗浄成分をベースに処方しています。成分表を見て、納得してから使ってほしい。それが私たちの考え方です。'}</p>
                <a href="${meta.cta_url || 'https://self138.com'}" class="cta-btn">${meta.cta_label || 'self の商品を見てみる'}</a>
            </div>

            ${relatedHTML ? `
            <section class="related-section">
                <h2>あわせて読みたい</h2>
                <div class="mag-grid">
                    ${relatedHTML}
                </div>
            </section>` : ''}

        </article>
    </main>

    <footer class="mag-footer">
        <div>
            <a href="../index.html">self 公式サイト</a>
            <a href="../privacy.html">プライバシーポリシー</a>
            <a href="../tokusho.html">特定商取引法</a>
        </div>
        <p style="margin-top:12px;">&copy; 2026 self. All rights reserved.</p>
    </footer>

    <!-- Microsoft Clarity -->
    <script type="text/javascript">
    (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window,document,"clarity","script","u3axekqtzs");
    </script>
</body>
</html>`;
}

// ============================================================
// Index Page Generation
// ============================================================

function indexHTML(articles) {
  // Group articles by category
  const categories = {};
  const categoryOrder = ['成分解説', 'ヘアケア', '暮らし', 'サロン', 'その他'];

  for (const a of articles) {
    const cat = a.category || 'その他';
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(a);
  }

  // Sort each category by date descending
  for (const cat of Object.keys(categories)) {
    categories[cat].sort((a, b) => b.date.localeCompare(a.date));
  }

  // Build category sections
  const categoryIds = {
    '成分解説': 'ingredients',
    'ヘアケア': 'care',
    '暮らし': 'lifestyle',
    'サロン': 'salon',
    'その他': 'other',
  };

  let sectionsHTML = '';
  for (const cat of categoryOrder) {
    if (!categories[cat] || categories[cat].length === 0) continue;
    const id = categoryIds[cat] || 'other';
    const cardsHTML = categories[cat]
      .map(a => `
            <a href="${a.slug}.html" class="mag-card">
                <div class="mag-card-img"><img src="../assets/images/magazine/${a.slug}-thumb.webp" alt="${a.title}" loading="lazy"></div>
                <div class="mag-card-body">
                    <div class="mag-card-tag">${a.category}</div>
                    <div class="mag-card-title">${a.title}</div>
                    <div class="mag-card-date">${a.date.replace(/-/g, '.')}</div>
                </div>
            </a>`)
      .join('\n');

    sectionsHTML += `
        <h2 class="mag-category-label" id="${id}">${cat}</h2>
        <div class="mag-grid">
            ${cardsHTML}
        </div>`;
  }

  // Also build "latest" section with all articles sorted by date
  const allByDate = [...articles].sort((a, b) => b.date.localeCompare(a.date));
  const latestHTML = allByDate.slice(0, 6).map(a => `
            <a href="${a.slug}.html" class="mag-card">
                <div class="mag-card-img"><img src="../assets/images/magazine/${a.slug}-thumb.webp" alt="${a.title}" loading="lazy"></div>
                <div class="mag-card-body">
                    <div class="mag-card-tag">${a.category}</div>
                    <div class="mag-card-title">${a.title}</div>
                    <div class="mag-card-date">${a.date.replace(/-/g, '.')}</div>
                </div>
            </a>`).join('\n');

  return `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-W8X5RBK');</script>
    <!-- End Google Tag Manager -->
    <title>self MAGAZINE | 髪と暮らしのヘアケアメディア</title>
    <meta name="description" content="美容師監修のヘアケア情報メディア。シャンプーの選び方、成分の読み方、髪質改善の方法まで、プロの知識をわかりやすくお届けします。">
    <meta property="og:title" content="self MAGAZINE | 髪と暮らしのヘアケアメディア">
    <meta property="og:description" content="美容師監修のヘアケア情報メディア。シャンプーの選び方から髪質改善まで。">
    <meta property="og:url" content="https://self138.com/magazine/">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="self">
    <link rel="canonical" href="https://self138.com/magazine/">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Shippori+Mincho:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="magazine.css">
</head>
<body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W8X5RBK" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

    <header class="mag-header">
        <div class="mag-header-inner">
            <a href="index.html" class="mag-logo">
                self MAGAZINE
                <span>髪と暮らしのヘアケアメディア</span>
            </a>
            <nav class="mag-nav">
                <a href="index.html#ingredients">成分を知る</a>
                <a href="index.html#care">ケアを学ぶ</a>
                <a href="index.html#lifestyle">暮らしに活かす</a>
                <a href="../index.html">self 公式サイト</a>
            </nav>
        </div>
    </header>

    <section class="mag-hero">
        <h1>self MAGAZINE</h1>
        <p>美容師が本音で書く、髪と成分の話。<br>知れば変わる、毎日のヘアケア。</p>
    </section>

    <main class="mag-grid-section">

        <h2 class="mag-category-label">新着記事</h2>
        <div class="mag-grid">
            ${latestHTML}
        </div>
${sectionsHTML}

    </main>

    <footer class="mag-footer">
        <div>
            <a href="../index.html">self 公式サイト</a>
            <a href="../privacy.html">プライバシーポリシー</a>
            <a href="../tokusho.html">特定商取引法</a>
        </div>
        <p style="margin-top:12px;">&copy; 2026 self. All rights reserved.</p>
    </footer>

    <!-- Microsoft Clarity -->
    <script type="text/javascript">
    (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window,document,"clarity","script","u3axekqtzs");
    </script>
</body>
</html>`;
}

// ============================================================
// Main Build
// ============================================================

async function build() {
  console.log('🔨 self MAGAZINE build started\n');

  // Ensure directories exist
  fs.mkdirSync(POSTS_DIR, { recursive: true });
  fs.mkdirSync(IMAGES_DIR, { recursive: true });

  // Load cost log
  const costLog = loadCostLog();
  const monthlyBefore = getMonthlySpend(costLog);
  console.log(`💰 Monthly spend so far: $${monthlyBefore.toFixed(3)} / $${MONTHLY_BUDGET_USD}`);
  console.log(`   Per-build limit: ${PER_BUILD_LIMIT} images\n`);

  // Load existing manifest
  let manifest = {};
  if (fs.existsSync(MANIFEST_PATH)) {
    manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf-8'));
  }

  // Read all markdown posts
  const mdFiles = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));

  if (mdFiles.length === 0) {
    console.log('No posts found in magazine/posts/. Nothing to build.');
    return;
  }

  const articles = [];

  for (const file of mdFiles) {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8');
    const { data: meta, content } = matter(raw);

    if (!meta.slug || !meta.title || !meta.date) {
      console.warn(`  [warn] Skipping ${file}: missing slug, title, or date`);
      continue;
    }

    console.log(`\n📝 ${meta.title}`);

    // --- Image generation ---
    // Thumbnail
    const thumbPath = path.join(IMAGES_DIR, `${meta.slug}-thumb.webp`);
    if (meta.thumbnail_prompt) {
      await generateImage(meta.thumbnail_prompt, thumbPath, costLog);
    }

    // Section images (h2 images)
    const sectionImages = meta.images || [];
    for (let i = 0; i < sectionImages.length; i++) {
      const img = sectionImages[i];
      const imgPath = path.join(IMAGES_DIR, `${meta.slug}-section-${i}.webp`);
      if (img.prompt) {
        await generateImage(img.prompt, imgPath, costLog);
      }
    }

    // --- Markdown → HTML ---
    let bodyHTML = processMarkdown(content);

    // Replace section image placeholders
    for (let i = 0; i < sectionImages.length; i++) {
      const alt = sectionImages[i].alt || '';
      const imgFile = `${meta.slug}-section-${i}.webp`;
      bodyHTML = bodyHTML.replace(
        `SECTION_IMG_${i}`,
        imgFile
      );
    }

    // --- Resolve related articles from manifest ---
    const relatedSlugs = meta.related_articles || [];
    const relatedArticles = relatedSlugs
      .map(slug => manifest[slug])
      .filter(Boolean)
      .map(a => ({ slug: a.slug, title: a.title, category: a.category }));

    meta.related_articles = relatedArticles;

    // --- Write article HTML ---
    const html = articleHTML(meta, bodyHTML);
    const outPath = path.join(__dirname, `${meta.slug}.html`);
    fs.writeFileSync(outPath, html);
    console.log(`  → ${meta.slug}.html`);

    // --- Update manifest ---
    manifest[meta.slug] = {
      slug: meta.slug,
      title: meta.title,
      date: meta.date,
      category: meta.category,
      keywords_main: meta.keywords?.main || '',
      keywords_related: meta.keywords?.related || [],
      description: meta.description,
      thumbnail_prompt: meta.thumbnail_prompt || '',
      images: sectionImages,
      internal_links_to: relatedSlugs,
      internal_links_from: manifest[meta.slug]?.internal_links_from || [],
      competitors_summary: meta.competitors_summary || '',
    };

    articles.push({
      slug: meta.slug,
      title: meta.title,
      date: meta.date,
      category: meta.category,
    });
  }

  // Update internal_links_from in manifest
  for (const slug of Object.keys(manifest)) {
    const entry = manifest[slug];
    for (const targetSlug of entry.internal_links_to || []) {
      if (manifest[targetSlug]) {
        const from = manifest[targetSlug].internal_links_from || [];
        if (!from.includes(slug)) {
          from.push(slug);
          manifest[targetSlug].internal_links_from = from;
        }
      }
    }
  }

  // --- Write manifest ---
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  console.log(`\n📋 manifest.json updated (${Object.keys(manifest).length} articles)`);

  // --- Write index.html ---
  // Include all articles from manifest (not just this build)
  const allArticles = Object.values(manifest).map(a => ({
    slug: a.slug,
    title: a.title,
    date: a.date,
    category: a.category,
  }));
  fs.writeFileSync(INDEX_PATH, indexHTML(allArticles));
  console.log(`📄 index.html updated\n`);

  // --- Save cost log & summary ---
  saveCostLog(costLog);
  const monthlyAfter = getMonthlySpend(costLog);
  const thisBuildCost = monthlyAfter - monthlyBefore;
  console.log(`💰 This build: ${buildImageCount} images, $${thisBuildCost.toFixed(3)}`);
  console.log(`   Monthly total: $${monthlyAfter.toFixed(3)} / $${MONTHLY_BUDGET_USD}`);
  console.log(`   Remaining: $${(MONTHLY_BUDGET_USD - monthlyAfter).toFixed(3)}\n`);

  console.log('✅ Build complete');
}

build().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});
