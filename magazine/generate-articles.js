/**
 * self MAGAZINE - Weekly Article Generator
 *
 * Generates 3 new Markdown articles using Gemini API.
 * Each article follows the frontmatter schema and writing guidelines.
 * Run: node magazine/generate-articles.js [count]
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// Load .env
const envPath = path.join(ROOT, '.env');
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf-8').split('\n')) {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match) process.env[match[1].trim()] = match[2].trim();
  }
}

const POSTS_DIR = path.join(__dirname, 'posts');
const MANIFEST_PATH = path.join(__dirname, 'manifest.json');
const TOPIC_POOL_PATH = path.join(__dirname, 'topic-pool.json');
const API_KEY = process.env.GEMINI_API_KEY;
const COUNT = parseInt(process.argv[2] || '3', 10);

if (!API_KEY) {
  console.error('GEMINI_API_KEY not set');
  process.exit(1);
}

// ── Existing articles ──
function getExistingArticles() {
  const manifest = fs.existsSync(MANIFEST_PATH)
    ? JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf-8'))
    : {};
  return Object.values(manifest).map(a => ({
    slug: a.slug,
    title: a.title,
    category: a.category || '',
    keywords_main: a.keywords_main || '',
  }));
}

// ── Topic pool management ──
function loadTopicPool() {
  if (!fs.existsSync(TOPIC_POOL_PATH)) {
    return getDefaultTopics();
  }
  const pool = JSON.parse(fs.readFileSync(TOPIC_POOL_PATH, 'utf-8'));
  return pool.filter(t => !t.used);
}

function markTopicsUsed(slugs) {
  let pool = fs.existsSync(TOPIC_POOL_PATH)
    ? JSON.parse(fs.readFileSync(TOPIC_POOL_PATH, 'utf-8'))
    : getDefaultTopics();
  for (const t of pool) {
    if (slugs.includes(t.slug)) t.used = true;
  }
  fs.writeFileSync(TOPIC_POOL_PATH, JSON.stringify(pool, null, 2));
}

function getDefaultTopics() {
  return [
    { slug: "amino-acid-shampoo-benefits", keyword: "アミノ酸シャンプー 効果", category: "成分解説", used: false },
    { slug: "hair-damage-causes", keyword: "髪 ダメージ 原因", category: "ヘアケア", used: false },
    { slug: "scalp-care-basics", keyword: "頭皮ケア 方法", category: "ヘアケア", used: false },
    { slug: "color-treated-hair-shampoo", keyword: "カラー 色落ち シャンプー", category: "ヘアケア", used: false },
    { slug: "hair-drying-technique", keyword: "ドライヤー 正しい 使い方 髪", category: "ヘアケア", used: false },
    { slug: "elcalactone-heat-repair", keyword: "エルカラクトン 効果 シャンプー", category: "成分解説", used: false },
    { slug: "shampoo-for-dry-hair", keyword: "乾燥毛 シャンプー おすすめ", category: "ヘアケア", used: false },
    { slug: "silicone-shampoo-truth", keyword: "シリコン シャンプー 良い 悪い", category: "成分解説", used: false },
    { slug: "hair-treatment-home-care", keyword: "トリートメント 自宅 やり方", category: "ヘアケア", used: false },
    { slug: "aging-hair-care", keyword: "エイジング毛 ケア 方法", category: "ヘアケア", used: false },
    { slug: "sulfate-free-explained", keyword: "硫酸フリー 意味 シャンプー", category: "成分解説", used: false },
    { slug: "hair-porosity-guide", keyword: "髪 ポーラス 見分け方", category: "ヘアケア", used: false },
    { slug: "shampoo-frequency", keyword: "シャンプー 頻度 毎日", category: "ヘアケア", used: false },
    { slug: "keratin-treatment-aftercare", keyword: "ケラチントリートメント ホームケア", category: "ヘアケア", used: false },
    { slug: "hair-static-winter", keyword: "髪 静電気 冬 対策", category: "暮らしのケア", used: false },
    { slug: "humidity-hair-frizz", keyword: "湿気 髪 広がる 対策", category: "暮らしのケア", used: false },
    { slug: "postpartum-hair-loss", keyword: "産後 抜け毛 シャンプー", category: "ヘアケア", used: false },
    { slug: "gray-hair-care-shampoo", keyword: "白髪 ケア シャンプー", category: "ヘアケア", used: false },
    { slug: "hair-uv-damage-summer", keyword: "髪 紫外線 ダメージ 対策", category: "暮らしのケア", used: false },
    { slug: "nighttime-hair-routine", keyword: "夜 ヘアケア ルーティン", category: "暮らしのケア", used: false },
    { slug: "shampoo-ph-importance", keyword: "シャンプー pH 弱酸性", category: "成分解説", used: false },
    { slug: "hair-protein-treatment", keyword: "タンパク質 補修 トリートメント", category: "成分解説", used: false },
    { slug: "bleach-damage-recovery", keyword: "ブリーチ ダメージ ケア", category: "ヘアケア", used: false },
    { slug: "kids-shampoo-choice", keyword: "子供 シャンプー 選び方", category: "暮らしのケア", used: false },
  ];
}

// ── Generate topics if pool is empty ──
async function refreshTopicPool(existing) {
  console.log('🔄 Topic pool empty, generating new topics...');
  const existingKeywords = existing.map(a => a.keywords_main).join(', ');

  const prompt = `You are an SEO content strategist for a Japanese hair care brand "self" that sells amino acid shampoo, treatment, and hair oil.

Existing articles cover these keywords: ${existingKeywords}

Generate 20 NEW topic ideas. Each must:
- Target a specific Japanese search keyword (2-4 words)
- Be relevant to hair care, shampoo ingredients, or styling
- NOT overlap with existing keywords
- Have search intent that matches informational content

Return ONLY valid JSON array. No markdown, no code fences. Each item:
[{"slug": "english-slug", "keyword": "日本語 キーワード", "category": "成分解説|ヘアケア|暮らしのケア"}]`;

  const res = await callGemini(prompt);
  try {
    const topics = JSON.parse(res.replace(/```json?\n?/g, '').replace(/```/g, '').trim());
    const pool = topics.map(t => ({ ...t, used: false }));
    fs.writeFileSync(TOPIC_POOL_PATH, JSON.stringify(pool, null, 2));
    return pool;
  } catch (e) {
    console.error('Failed to parse topic generation response, using fallback');
    const fallback = getDefaultTopics();
    fs.writeFileSync(TOPIC_POOL_PATH, JSON.stringify(fallback, null, 2));
    return fallback;
  }
}

// ── Gemini API call (text only) ──
async function callGemini(prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;
  const body = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { temperature: 0.7, maxOutputTokens: 8192 },
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini API error ${res.status}: ${err}`);
  }

  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
}

// ── Generate a single article ──
async function generateArticle(topic, existing) {
  const today = new Date().toISOString().split('T')[0];
  const existingTitles = existing.map(a => `- ${a.title} (${a.slug})`).join('\n');

  const prompt = `あなたは「self」というヘアケアブランドのオウンドメディア「self MAGAZINE」の編集者です。
髪質改善専門の美容師「東 恵理子」が執筆する記事を、以下の仕様に従って1本作成してください。

## ターゲットキーワード
${topic.keyword}

## カテゴリ
${topic.category}

## 既存記事（内部リンク候補）
${existingTitles}

## 商品情報（CTAで使用）
- シャンプー（アミノ酸系洗浄成分、ペリセア配合）
- トリートメント（エルカラクトン配合、熱で補修）
- ヘアオイル（ペリセア・エルカラクトン配合）
- 公式サイト: https://self138.com

## 記事仕様

### Frontmatter（YAML）
- title: SEO対応の日本語タイトル（30〜40文字、キーワードを自然に含む）
- slug: "${topic.slug}"
- date: "${today}"
- category: ${topic.category}
- breadcrumb: 短いパンくず用テキスト
- author: "東 恵理子（髪質改善専門美容師）"
- keywords.main: "${topic.keyword}"
- keywords.related: 関連キーワード3つ
- description: 120文字以内のmeta description
- thumbnail_prompt: サムネイル画像の英語プロンプト（16:9、editorial beauty style）
- thumbnail_alt: サムネイルのalt（日本語）
- images: 本文中の挿入画像2〜4枚分（prompt + alt）
- related_articles: 既存記事のslugから関連するもの1〜3個
- cta_text: 記事の内容に合わせた自然なCTA文（selfの商品に繋げる）
- cta_url: "https://self138.com"
- cta_label: "self の商品を見てみる"
- competitors_summary: 検索上位記事の傾向と差別化ポイント

### 本文ルール
- 2000〜3000文字
- 冒頭は読者の悩みや疑問から自然に入る（「結論から言うと」「本記事では」などの前置きは禁止）
- 見出しは##で3〜5個
- 画像挿入位置は ![alt](::section-image-N::) のN番目で指定
- calloutブロック: <div class="callout">...</div>
- 同義語の連打や抽象語の空回りを避け、具体的に書く
- 短い文と長い文を混ぜてリズムをつける
- 最後に表やまとめの定型句は不要。読後に行動したくなる自然な締め

### 重要な制約
- 嘘・捏造は絶対にしない。根拠のない数字や事例は入れない
- 「まとめると」「いかがでしたか」「参考になれば幸いです」は使わない
- selfの商品を押しすぎない。あくまで情報として役立つ記事を書く

出力はfrontmatter付きのMarkdownをそのまま返してください。\`\`\`で囲まないでください。---で始まり、本文で終わること。`;

  const text = await callGemini(prompt);

  // Clean up: remove code fences if present
  let md = text.trim();
  if (md.startsWith('```')) {
    md = md.replace(/^```(?:markdown|yaml|md)?\n?/, '').replace(/\n?```$/, '');
  }

  // Validate frontmatter
  if (!md.startsWith('---')) {
    throw new Error(`Generated article for ${topic.slug} does not start with ---`);
  }

  return md;
}

// ── Main ──
async function main() {
  console.log(`📝 Generating ${COUNT} articles...\n`);

  const existing = getExistingArticles();
  let pool = loadTopicPool();

  // Filter out topics that already have articles
  const existingSlugs = new Set(existing.map(a => a.slug));
  pool = pool.filter(t => !existingSlugs.has(t.slug));

  if (pool.length < COUNT) {
    pool = await refreshTopicPool(existing);
    pool = pool.filter(t => !existingSlugs.has(t.slug));
  }

  const selected = pool.slice(0, COUNT);
  const generatedSlugs = [];

  for (const topic of selected) {
    console.log(`  ✏️  ${topic.keyword} (${topic.slug})`);
    try {
      const md = await generateArticle(topic, existing);
      const filePath = path.join(POSTS_DIR, `${topic.slug}.md`);
      fs.writeFileSync(filePath, md);
      generatedSlugs.push(topic.slug);
      // Add to existing for next article's internal linking
      existing.push({ slug: topic.slug, title: topic.keyword, category: topic.category, keywords_main: topic.keyword });
      console.log(`      → ${topic.slug}.md ✅`);
    } catch (e) {
      console.error(`      ❌ Failed: ${e.message}`);
    }
  }

  // Mark used
  markTopicsUsed(generatedSlugs);

  console.log(`\n✅ Generated ${generatedSlugs.length}/${COUNT} articles`);
  console.log('   Run "node magazine/build.js" to build HTML + images.');
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
