# 画像生成プロンプト集
## シャンプーLP用 全59点

---

## 📋 使い方

このドキュメントには、LP制作に必要な全59点の画像生成プロンプトが記載されています。

### プロンプト使用方法
1. **英語プロンプト**をMidjourney/DALL-E/Stable Diffusion等にコピー
2. **補足指示**を参考に、必要に応じてパラメータ調整
3. 生成後、指定のファイル名で保存
4. 推奨サイズにリサイズ・最適化

### 画像形式ガイド
- **商品写真**: PNG（透過背景）
- **ライフスタイル写真**: WebP/JPG
- **アイコン**: SVG（ベクター）
- **ロゴ・バッジ**: SVG/PNG（透過）

---

## 🎨 カテゴリ別プロンプト

---

## 1. Hero（ヒーロー）セクション - 3点

### H01: hero-bg.jpg
**用途**: ファーストビュー背景画像
**サイズ**: 1920×1080px
**形式**: WebP/JPG

**プロンプト（英語）**:
```
Beautiful flowing brunette hair in gentle motion, silky smooth texture, caught in soft breeze, natural sunlight streaming through, clean cream beige background, cinematic hair care advertisement aesthetic, professional beauty photography, shallow depth of field, warm and elegant atmosphere, high-end cosmetic product visual, ultra high resolution, photorealistic --ar 16:9 --style raw --v 6
```

**補足指示（日本語）**:
- 髪の色: ブラウン〜ダークブラウン
- 動き: 風に自然になびく
- ライティング: ソフトな自然光
- 背景: クリーム/ベージュ系
- 質感: 艶やか、健康的
- 雰囲気: 高級感、エレガント

---

### H02: product-bottle-main.png
**用途**: メイン商品ボトル画像
**サイズ**: 1000×1500px
**形式**: PNG（透過背景）

**プロンプト（英語）**:
```
Premium botanical shampoo bottle, elegant amber glass bottle with transparent effect, luxurious gold metallic pump dispenser, minimalist white label with botanical leaf motif and gold text, product photography on pure white background, studio lighting with subtle soft shadows, 3/4 view angle, professional high-end cosmetic product shot, ultra detailed, 8K resolution, clean and sophisticated aesthetic --ar 2:3
```

**補足指示（日本語）**:
- ボトル素材: アンバー（琥珀色）ガラス
- ポンプ: ゴールドメタリック
- ラベル: ホワイト×ゴールド、ボタニカルモチーフ
- 背景: 完全白（透過PNG）
- 角度: 3/4ビュー（やや斜め）
- 影: 柔らかく自然な影
- 商品名表示: "BOTANICAL PURE"（後から追加でもOK）

---

### H03: scroll-down-icon.svg
**用途**: スクロール促進アイコン
**サイズ**: 64×64px
**形式**: SVG

**プロンプト（英語）**:
```
Simple minimalist scroll down icon, downward arrow with subtle animation indication, clean line art design, monochrome vector graphic, suitable for web UI, elegant and modern style, SVG format --style flat
```

**補足指示（日本語）**:
- スタイル: シンプルなラインアート
- 形状: 下向き矢印またはマウスアイコン
- 色: モノクロ（後でCSS調整可能）
- アニメーション前提: ふわふわ上下運動

**代替案**: FontAwesome/Material Iconsから選択も可

---

## 2. Problems（悩み）セクション - 6点

### P01: icon-problem-1.svg
**用途**: パサつき・広がりアイコン
**サイズ**: 128×128px
**形式**: SVG

**プロンプト（英語）**:
```
Icon illustration of frizzy dry hair, simple line art style, hair strands spreading outward chaotically, minimalist monochrome design, suitable for web UI, clean vector graphic, hair care problem visualization --style flat
```

**補足指示（日本語）**:
- 表現: パサついて広がった髪の毛
- スタイル: シンプルなラインアート
- 色: モノクロ（#2D5F3Fに後で変更）
- 雰囲気: 悩みを象徴するが深刻すぎない

---

### P02: icon-problem-2.svg
**用途**: 頭皮の乾燥・かゆみアイコン
**サイズ**: 128×128px
**形式**: SVG

**プロンプト（英語）**:
```
Icon illustration of dry itchy scalp, simple line art showing head silhouette with irritation marks, minimalist monochrome design, hair care concern visualization, clean vector graphic suitable for web UI --style flat
```

**補足指示（日本語）**:
- 表現: 頭部シルエット＋かゆみマーク
- スタイル: ラインアート
- 要素: 波線や点線で乾燥・かゆみを表現

---

### P03: icon-problem-3.svg
**用途**: カラーダメージアイコン
**サイズ**: 128×128px
**形式**: SVG

**プロンプト（英語）**:
```
Icon illustration of color-damaged hair, hair strands with split ends and rough texture, simple line art style, minimalist monochrome design, hair damage visualization, clean vector graphic --style flat
```

**補足指示（日本語）**:
- 表現: 傷んだ髪（枝毛、切れ毛）
- スタイル: ラインアート
- 細部: 毛先が分かれている様子

---

### P04: icon-problem-4.svg
**用途**: ボリューム不足アイコン
**サイズ**: 128×128px
**形式**: SVG

**プロンプト（英語）**:
```
Icon illustration of flat limp hair with no volume, hair pressed down, simple line art style, minimalist monochrome design, hair thinning concern visualization, clean vector graphic --style flat
```

**補足指示（日本語）**:
- 表現: ペタンコの髪
- スタイル: ラインアート
- 特徴: 髪が頭に張り付いている様子

---

### P05: icon-problem-5.svg
**用途**: スタイリングに時間がかかるアイコン
**サイズ**: 128×128px
**形式**: SVG

**プロンプト（英語）**:
```
Icon illustration of hair styling difficulty, clock with hair comb or dryer, time management concept, simple line art style, minimalist monochrome design, clean vector graphic --style flat
```

**補足指示（日本語）**:
- 表現: 時計＋ヘアツール
- スタイル: ラインアート
- 要素: 時計、ドライヤー、ブラシなど

---

### P06: arrow-down.svg
**用途**: 矢印アイコン
**サイズ**: 64×64px
**形式**: SVG

**プロンプト（英語）**:
```
Simple downward arrow icon, clean minimalist design, smooth curves, vector graphic, suitable for web UI --style flat
```

**補足指示（日本語）**:
- スタイル: シンプルな下向き矢印
- 色: 単色（ゴールド #D4AF37推奨）

---

## 3. Solution（解決策）セクション - 7点

### S01: flowchart-solution.svg
**用途**: Before→Process→Afterフローチャート
**サイズ**: 1200×400px
**形式**: SVG

**プロンプト（英語）**:
```
Infographic flowchart diagram showing hair transformation process, three stages with arrows: Before (damaged hair icon) → Process (shampoo bottle with botanical elements) → After (healthy glossy hair icon), clean modern design with icons and connecting arrows, botanical green and gold color scheme, professional cosmetic product explanation diagram, vector illustration --ar 3:1
```

**補足指示（日本語）**:
- 構成: 3ステップ（Before/Process/After）
- 要素: アイコン、矢印、テキストエリア
- カラー: グリーン＋ゴールド
- スタイル: モダンでわかりやすい

---

### S02: ingredient-argan.png
**用途**: アルガンオイルアイコン
**サイズ**: 200×200px
**形式**: PNG

**プロンプト（英語）**:
```
Illustration of argan nuts and golden oil drop, botanical ingredient icon for cosmetic product, natural organic style with soft watercolor effect, warm earth tones with golden accents, clean white background, high quality detailed illustration --ar 1:1
```

**補足指示（日本語）**:
- 対象: アルガンナッツ＋オイルドロップ
- スタイル: ボタニカル、水彩風
- カラー: ゴールド、アースカラー
- 背景: 白または透過

---

### S03: ingredient-camellia.png
**用途**: ツバキ種子油アイコン
**サイズ**: 200×200px
**形式**: PNG

**プロンプト（英語）**:
```
Illustration of camellia flower and seeds with oil drop, Japanese botanical ingredient icon, elegant watercolor style, soft pink and green tones, clean white background, cosmetic ingredient visualization --ar 1:1
```

**補足指示（日本語）**:
- 対象: ツバキの花＋種子＋オイルドロップ
- スタイル: 和風ボタニカル、水彩風
- カラー: ピンク、グリーン
- 特徴: 日本的な美しさ

---

### S04: ingredient-jojoba.png
**用途**: ホホバオイルアイコン
**サイズ**: 200×200px
**形式**: PNG

**プロンプト（英語）**:
```
Illustration of jojoba plant with seeds and golden oil drop, desert botanical ingredient icon, natural organic watercolor style, warm yellow and green tones, clean white background --ar 1:1
```

**補足指示（日本語）**:
- 対象: ホホバ植物＋種子＋オイル
- スタイル: ボタニカル、水彩風
- カラー: イエロー、グリーン
- 雰囲気: 砂漠の植物

---

### S05: ingredient-shea.png
**用途**: シアバターアイコン
**サイズ**: 200×200px
**形式**: PNG

**プロンプト（英語）**:
```
Illustration of shea nuts and creamy butter texture, African botanical ingredient icon, natural organic watercolor style, warm cream and brown tones, clean white background --ar 1:1
```

**補足指示（日本語）**:
- 対象: シアの実＋バター
- スタイル: ボタニカル、水彩風
- カラー: クリーム、ブラウン
- 質感: クリーミーな表現

---

### S06: ingredient-rosemary.png
**用途**: ローズマリーアイコン
**サイズ**: 200×200px
**形式**: PNG

**プロンプト（英語）**:
```
Illustration of fresh rosemary herb sprigs with essential oil drop, Mediterranean botanical ingredient icon, natural organic watercolor style, deep green tones, clean white background --ar 1:1
```

**補足指示（日本語）**:
- 対象: ローズマリーの枝＋オイルドロップ
- スタイル: ボタニカル、水彩風
- カラー: 深いグリーン
- 特徴: ハーブの爽やかさ

---

### S07: foam-texture.jpg
**用途**: 泡立ちテクスチャ画像
**サイズ**: 1000×600px
**形式**: WebP/JPG

**プロンプト（英語）**:
```
Close-up macro photography of creamy white shampoo foam bubbles, delicate fine bubbles texture, soft focus background, clean pure white tones, product texture shot, high detail macro lens, luxurious cosmetic foam visualization, professional beauty product photography --ar 5:3
```

**補足指示（日本語）**:
- 対象: シャンプーの泡
- 撮影: マクロレンズ、高解像度
- 質感: クリーミー、微細な泡
- 背景: 白
- ライティング: ソフト

---

## 4. Before/After（結果）セクション - 6点

### BA01: before-1.jpg
**用途**: くせ毛Before
**サイズ**: 800×1000px
**形式**: WebP/JPG

**プロンプト（英語）**:
```
Before hair treatment photo, Asian woman with frizzy wavy hair, visible dryness and lack of shine, natural indoor lighting, neutral beige background, documentary style photography for hair care comparison, shoulder-length hair, no makeup or natural makeup, frontal or side view --ar 4:5
```

**補足指示（日本語）**:
- モデル: アジア女性
- 髪質: パサついたウェーブ、広がり
- 質感: 乾燥、ツヤなし
- 背景: ニュートラルグレー/ベージュ
- ライティング: 自然光（統一条件）
- 注意: After写真と同一人物、同一角度で撮影

---

### BA02: after-1.jpg
**用途**: くせ毛After
**サイズ**: 800×1000px
**形式**: WebP/JPG

**プロンプト（英語）**:
```
After hair treatment photo, same Asian woman with smooth controlled wavy hair, healthy shine and gloss, improved manageable texture, same lighting and angle as before photo, visible improvement in hair quality, natural indoor lighting, neutral beige background --ar 4:5
```

**補足指示（日本語）**:
- 同一モデル（BA01と）
- 髪質: まとまったウェーブ、ツヤあり
- 質感: 潤い、健康的な光沢
- 撮影条件: BA01と完全同一
- 変化: 明確に改善が視認できる

---

### BA03: before-2.jpg
**用途**: 細毛Before
**サイズ**: 800×1000px
**形式**: WebP/JPG

**プロンプト（英語）**:
```
Before hair treatment photo, Asian woman with thin fine hair, flat hair with no volume, slightly visible scalp, limp lifeless texture, natural indoor lighting, neutral background, documentary style hair care comparison photography --ar 4:5
```

**補足指示（日本語）**:
- モデル: アジア女性（40代想定）
- 髪質: 細毛、ボリューム不足
- 見た目: ペタンコ、地肌やや見え
- 撮影: 頭頂部も映るアングル

---

### BA04: after-2.jpg
**用途**: 細毛After
**サイズ**: 800×1000px
**形式**: WebP/JPG

**プロンプト（英語）**:
```
After hair treatment photo, same Asian woman with visibly improved hair volume, fuller bouncy appearance, healthy scalp, lifted roots, same lighting and angle, clear improvement in hair density and body --ar 4:5
```

**補足指示（日本語）**:
- 同一モデル（BA03と）
- 髪質: ボリュームアップ
- 見た目: ふんわり、根元立ち上がり
- 変化: 明確なボリューム増加

---

### BA05: before-3.jpg
**用途**: ダメージヘアBefore
**サイズ**: 800×1000px
**形式**: WebP/JPG

**プロンプト（英語）**:
```
Before hair treatment photo, Asian woman with color-damaged hair, visible split ends and rough texture, faded hair color, lack of moisture, hair damage documentation, natural indoor lighting, neutral background --ar 4:5
```

**補足指示（日本語）**:
- モデル: アジア女性（30代想定）
- ダメージ: カラーダメージ、枝毛
- 質感: ごわつき、乾燥
- 色: 退色した状態
- アングル: 毛先が見えるように

---

### BA06: after-3.jpg
**用途**: ダメージヘアAfter
**サイズ**: 800×1000px
**形式**: WebP/JPG

**プロンプト（英語）**:
```
After hair treatment photo, same Asian woman with repaired hair, smooth glossy texture, sealed cuticles, vibrant healthy appearance, reduced split ends, same lighting and angle, visible repair and shine improvement --ar 4:5
```

**補足指示（日本語）**:
- 同一モデル（BA05と）
- 改善: 枝毛減少、ツヤ回復
- 質感: 滑らか、潤い
- 色: 鮮やかさ回復

---

## 5. Features（特徴）セクション - 6点

### F01: feature-icon-1.svg
**用途**: サロン品質アイコン
**サイズ**: 128×128px
**形式**: SVG

**プロンプト（英語）**:
```
Icon of professional hair salon quality badge, scissors and comb crossed symbol, minimalist line art design, premium and professional aesthetic, monochrome vector graphic suitable for web UI --style flat
```

**補足指示（日本語）**:
- モチーフ: サロンツール（ハサミ×コーム）または品質バッジ
- スタイル: ミニマル、プロフェッショナル
- 色: モノクロ（後で調整）

---

### F02: feature-icon-2.svg
**用途**: 無添加アイコン
**サイズ**: 128×128px
**形式**: SVG

**プロンプト（英語）**:
```
Icon of natural additive-free product, leaf with checkmark or shield symbol, clean minimalist line art, organic and safe product visualization, monochrome vector graphic --style flat
```

**補足指示（日本語）**:
- モチーフ: 葉っぱ＋チェックマーク、またはシールド
- スタイル: ナチュラル、安心感
- 意味: 無添加、安全性

---

### F03: feature-icon-3.svg
**用途**: 天然アロマアイコン
**サイズ**: 128×128px
**形式**: SVG

**プロンプト（英語）**:
```
Icon of natural aroma fragrance, essential oil bottle with botanical leaves, minimalist line art design, relaxation and wellness visualization, monochrome vector graphic --style flat
```

**補足指示（日本語）**:
- モチーフ: アロマボトル＋植物
- スタイル: ミニマル、癒し系
- 意味: 天然アロマ、リラックス

---

### F04: expert-photo.jpg
**用途**: 専門家/開発者写真
**サイズ**: 500×500px
**形式**: WebP/JPG

**プロンプト（英語）**:
```
Professional portrait of Asian female cosmetic scientist or hair care expert in her 40s, white lab coat, confident and trustworthy expression, arms crossed or holding product, clean laboratory or modern office background, professional headshot style, natural lighting, credibility and expertise visualization --ar 1:1
```

**補足指示（日本語）**:
- 人物: アジア女性、40代、研究者/専門家
- 服装: 白衣またはビジネスカジュアル
- 表情: 信頼できる、知的、親しみやすい
- 背景: ラボまたはオフィス
- 用途: 信頼性・専門性訴求

---

### F05: badge-quality-1.png
**用途**: 品質保証バッジ1
**サイズ**: 150×150px
**形式**: PNG（透過）

**プロンプト（英語）**:
```
Quality assurance badge design, circular seal with ribbon, 'Professional Grade' or 'Salon Quality' text, gold and green color scheme, premium emblem style, transparent background --ar 1:1
```

**補足指示（日本語）**:
- 形状: 円形シール、リボン付き
- テキスト: "Professional Grade" / "サロン品質"
- カラー: ゴールド×グリーン
- 背景: 透過

---

### F06: badge-quality-2.png
**用途**: 品質保証バッジ2（無添加）
**サイズ**: 150×150px
**形式**: PNG（透過）

**プロンプト（英語）**:
```
Additive-free badge design, circular seal with botanical leaf motif, 'Paraben Free' or 'Silicone Free' text, natural green color scheme, organic product emblem style, transparent background --ar 1:1
```

**補足指示（日本語）**:
- 形状: 円形シール、葉モチーフ
- テキスト: "Paraben Free" / "無添加"
- カラー: ナチュラルグリーン
- 背景: 透過

---

## 6. Plans（プラン）セクション - 5点

### PL01: plan-icon-single.svg
**用途**: 単品購入アイコン
**サイズ**: 100×100px
**形式**: SVG

**プロンプト（英語）**:
```
Icon of single product purchase, one bottle silhouette, simple minimalist line art, e-commerce shopping visualization, monochrome vector graphic --style flat
```

**補足指示（日本語）**:
- モチーフ: ボトル1本のシルエット
- スタイル: シンプル、ミニマル
- 色: モノクロ

---

### PL02: plan-icon-subscription.svg
**用途**: 定期便アイコン
**サイズ**: 100×100px
**形式**: SVG

**プロンプト（英語）**:
```
Icon of subscription service, circular arrow with bottle or calendar symbol, recurring purchase visualization, minimalist line art, monochrome vector graphic --style flat
```

**補足指示（日本語）**:
- モチーフ: 循環矢印＋ボトル/カレンダー
- スタイル: ミニマル
- 意味: 定期的な配送

---

### PL03: plan-icon-bulk.svg
**用途**: まとめ買いアイコン
**サイズ**: 100×100px
**形式**: SVG

**プロンプト（英語）**:
```
Icon of bulk purchase, three bottles grouped together, minimalist line art design, wholesale shopping visualization, monochrome vector graphic --style flat
```

**補足指示（日本語）**:
- モチーフ: ボトル3本グループ
- スタイル: ミニマル
- 意味: まとめ買い、お得

---

### PL04: badge-recommended.svg
**用途**: おすすめバッジ
**サイズ**: 120×40px
**形式**: SVG

**プロンプト（英語）**:
```
Recommended badge ribbon design, 'Recommended' or 'Most Popular' text, bright accent color with star icon, eye-catching label style, vector graphic --ar 3:1
```

**補足指示（日本語）**:
- 形状: リボン型バッジ
- テキスト: "おすすめ" / "人気No.1"
- カラー: アクセントカラー（赤/ゴールド）
- 配置: プランカード上部に貼付

---

### PL05: icon-guarantee.svg
**用途**: 返金保証アイコン
**サイズ**: 80×80px
**形式**: SVG

**プロンプト（英語）**:
```
Icon of money-back guarantee, shield with checkmark or circular arrow, trust and safety symbol, minimalist line art, monochrome vector graphic --style flat
```

**補足指示（日本語）**:
- モチーフ: シールド＋チェックマーク
- スタイル: ミニマル
- 意味: 返金保証、安心

---

## 7. Reviews（レビュー）セクション - 4点

### R01: customer-1.jpg
**用途**: お客様写真1（30代女性）
**サイズ**: 300×300px
**形式**: WebP/JPG

**プロンプト（英語）**:
```
Professional headshot portrait of Asian woman in her 30s, natural genuine smile, healthy shiny hair, clean neutral background, customer testimonial photo style, warm natural lighting, approachable and friendly expression, beauty product reviewer visualization --ar 1:1
```

**補足指示（日本語）**:
- 年代: 30代
- 表情: 自然な笑顔、親しみやすい
- 髪: 健康的、ツヤあり
- 背景: シンプル（白/ベージュ）
- 用途: レビュー用顔写真

---

### R02: customer-2.jpg
**用途**: お客様写真2（40代女性）
**サイズ**: 300×300px
**形式**: WebP/JPG

**プロンプト（英語）**:
```
Professional headshot portrait of Asian woman in her 40s, confident warm smile, well-maintained hair, clean neutral background, customer testimonial photo style, natural lighting, trustworthy and satisfied expression --ar 1:1
```

**補足指示（日本語）**:
- 年代: 40代
- 表情: 自信のある笑顔、満足感
- 髪: 手入れされた状態
- 雰囲気: 落ち着き、プロフェッショナル

---

### R03: customer-3.jpg
**用途**: お客様写真3（35代女性）
**サイズ**: 300×300px
**形式**: WebP/JPG

**プロンプト（英語）**:
```
Professional headshot portrait of Asian woman in her mid-30s, happy satisfied expression, touching her smooth glossy hair, clean neutral background, customer testimonial photo style, natural lighting, genuine happiness visualization --ar 1:1
```

**補足指示（日本語）**:
- 年代: 35歳前後
- 動作: 髪を触る（満足感表現）
- 表情: 嬉しそう、満足
- 用途: ビフォーアフター体験者

---

### R04: logo-review-site.png
**用途**: レビューサイトロゴ
**サイズ**: 200×60px
**形式**: PNG（透過）

**プロンプト（テキスト）**:
```
（実在のレビューサイトロゴを使用する場合は公式素材を入手）
例: 楽天レビュー、@cosme、Amazonレビュー等

または架空のレビューサイトロゴをデザイン
```

**補足指示（日本語）**:
- 実在サイト使用時: 公式ガイドライン遵守
- オリジナル作成時: "REVIEWS" "口コミサイト" 等のテキストロゴ

---

## 8. FAQ セクション - 2点

### FAQ01: icon-q.svg
**用途**: Qアイコン
**サイズ**: 48×48px
**形式**: SVG

**プロンプト（英語）**:
```
Simple letter Q icon in circle, clean minimalist design for FAQ section, monochrome vector graphic, suitable for web UI --style flat
```

**補足指示（日本語）**:
- 形状: 円の中に"Q"
- スタイル: シンプル、ミニマル
- 色: モノクロ（後で調整）

---

### FAQ02: icon-a.svg
**用途**: Aアイコン
**サイズ**: 48×48px
**形式**: SVG

**プロンプト（英語）**:
```
Simple letter A icon in circle, clean minimalist design for FAQ section, monochrome vector graphic, suitable for web UI --style flat
```

**補足指示（日本語）**:
- 形状: 円の中に"A"
- スタイル: シンプル、ミニマル
- 色: モノクロ（後で調整）

---

## 9. Pricing（料金）セクション - 3点

### PR01: icon-free-shipping.svg
**用途**: 送料無料アイコン
**サイズ**: 80×80px
**形式**: SVG

**プロンプト（英語）**:
```
Icon of free shipping, delivery truck with checkmark or 'FREE' text badge, e-commerce benefit symbol, minimalist line art, monochrome vector graphic --style flat
```

**補足指示（日本語）**:
- モチーフ: 配送トラック＋チェックマーク/FREEバッジ
- スタイル: ミニマル
- 意味: 送料無料

---

### PR02: icon-money-back.svg
**用途**: 返金保証アイコン
**サイズ**: 80×80px
**形式**: SVG

**プロンプト（英語）**:
```
Icon of 30-day money-back guarantee, circular arrow with currency symbol or shield with '30' number, trust symbol, minimalist line art, monochrome vector graphic --style flat
```

**補足指示（日本語）**:
- モチーフ: 循環矢印＋通貨記号、またはシールド＋30
- スタイル: ミニマル
- 意味: 30日間返金保証

---

### PR03: icon-cancel-anytime.svg
**用途**: いつでも解約OKアイコン
**サイズ**: 80×80px
**形式**: SVG

**プロンプト（英語）**:
```
Icon of cancel anytime flexibility, open lock or broken chain symbol, subscription freedom visualization, minimalist line art, monochrome vector graphic --style flat
```

**補足指示（日本語）**:
- モチーフ: 開いた鍵、または切れた鎖
- スタイル: ミニマル
- 意味: いつでも解約可能、縛りなし

---

## 10. Shipping（配送）セクション - 7点

### SH01: map-japan.svg
**用途**: 日本地図
**サイズ**: 800×600px
**形式**: SVG

**プロンプト（英語）**:
```
Simplified vector map of Japan with prefectures outlined, clean minimalist geographic illustration, suitable for highlighting shipping areas, monochrome or two-tone color scheme, editable vector format --ar 4:3
```

**補足指示（日本語）**:
- 対象: 日本地図（都道府県境界線）
- スタイル: シンプル、わかりやすい
- 用途: 配送エリア表示
- 色: 単色またはグラデーション対応

---

### SH02: icon-delivery-truck.svg
**用途**: 配送トラックアイコン
**サイズ**: 80×80px
**形式**: SVG

**プロンプト（英語）**:
```
Icon of delivery truck, simple side view, minimalist line art design, logistics and shipping symbol, monochrome vector graphic --style flat
```

**補足指示（日本語）**:
- モチーフ: 配送トラック（横向き）
- スタイル: シンプルなラインアート
- 色: モノクロ

---

### SH03: icon-calendar.svg
**用途**: カレンダーアイコン
**サイズ**: 80×80px
**形式**: SVG

**プロンプト（英語）**:
```
Icon of calendar with clock or date marking, delivery time symbol, minimalist line art design, monochrome vector graphic --style flat
```

**補足指示（日本語）**:
- モチーフ: カレンダー＋時計
- スタイル: ミニマル
- 意味: お届け日数

---

### SH04: icon-payment.svg
**用途**: 支払い方法アイコン
**サイズ**: 80×80px
**形式**: SVG

**プロンプト（英語）**:
```
Icon of payment methods, credit card or wallet symbol, e-commerce payment visualization, minimalist line art design, monochrome vector graphic --style flat
```

**補足指示（日本語）**:
- モチーフ: クレジットカード/財布
- スタイル: ミニマル
- 意味: 支払い方法

---

### SH05: logo-credit-cards.png
**用途**: クレジットカードロゴ
**サイズ**: 200×60px
**形式**: PNG（透過）

**プロンプト（テキスト）**:
```
（実在のカードブランドロゴを使用する場合は公式素材を入手）
例: VISA、Mastercard、JCB、AMEX等

並べて表示: [VISA] [Mastercard] [JCB] [AMEX]
```

**補足指示（日本語）**:
- 実在ロゴ使用時: 公式ブランドガイドライン遵守
- 配置: 横並び表示

---

### SH06: logo-amazon-pay.png
**用途**: Amazon Payロゴ
**サイズ**: 150×50px
**形式**: PNG（透過）

**プロンプト（テキスト）**:
```
（公式Amazon Payロゴを使用）
https://pay.amazon.com/jp/merchant/marketing-central
```

**補足指示（日本語）**:
- 公式素材使用必須
- ブランドガイドライン遵守

---

### SH07: icon-phone.svg
**用途**: 電話アイコン
**サイズ**: 64×64px
**形式**: SVG

**プロンプト（英語）**:
```
Icon of phone or telephone handset, customer support symbol, minimalist line art design, monochrome vector graphic --style flat
```

**補足指示（日本語）**:
- モチーフ: 電話機/受話器
- スタイル: ミニマル
- 意味: お問い合わせ

---

## 11. Footer CTA セクション - 8点

### FT01: product-footer.png
**用途**: フッター商品画像
**サイズ**: 600×900px
**形式**: PNG（透過）

**プロンプト（英語）**:
```
Premium botanical shampoo bottle, front view, elegant amber glass with gold pump, product photography on pure white background, soft shadows, professional cosmetic product shot, clean and luxurious aesthetic --ar 2:3
```

**補足指示（日本語）**:
- アングル: 正面
- 用途: フッターCTAエリア
- 背景: 白または透過
- サイズ: H02より小さめでOK

---

### FT02: icon-guarantee-footer.svg
**用途**: 保証アイコン（小）
**サイズ**: 48×48px
**形式**: SVG

**プロンプト（英語）**:
```
Small icon of guarantee shield with checkmark, simplified minimalist design for footer use, monochrome vector graphic --style flat
```

**補足指示（日本語）**:
- サイズ: 小さめ
- スタイル: シンプル
- 用途: フッター保証表示

---

### FT03: icon-shipping-footer.svg
**用途**: 送料無料アイコン（小）
**サイズ**: 48×48px
**形式**: SVG

**プロンプト（英語）**:
```
Small icon of free shipping truck, simplified minimalist design for footer use, monochrome vector graphic --style flat
```

**補足指示（日本語）**:
- サイズ: 小さめ
- スタイル: シンプル
- 用途: フッター特典表示

---

### FT04: icon-cancel-footer.svg
**用途**: 解約自由アイコン（小）
**サイズ**: 48×48px
**形式**: SVG

**プロンプト（英語）**:
```
Small icon of cancel anytime open lock, simplified minimalist design for footer use, monochrome vector graphic --style flat
```

**補足指示（日本語）**:
- サイズ: 小さめ
- スタイル: シンプル
- 用途: フッター特典表示

---

### FT05: logo-footer.svg
**用途**: フッターロゴ
**サイズ**: 200×60px
**形式**: SVG

**プロンプト（英語）**:
```
Logo design for 'BOTANICAL PURE' premium shampoo brand, elegant serif typography with botanical leaf element, natural green and gold color scheme, horizontal layout suitable for footer, clean and sophisticated branding --ar 10:3
```

**補足指示（日本語）**:
- ブランド名: "BOTANICAL PURE"
- スタイル: エレガント、セリフ体
- 要素: ボタニカルモチーフ（葉）
- カラー: グリーン×ゴールド
- レイアウト: 横長

---

### FT06: icon-instagram.svg
**用途**: Instagramアイコン
**サイズ**: 32×32px
**形式**: SVG

**プロンプト（テキスト）**:
```
（公式Instagramアイコンを使用）
または FontAwesome/Material Icons等から取得
```

**補足指示（日本語）**:
- 公式アイコン推奨
- カラー: モノクロまたはグラデーション

---

### FT07: icon-twitter.svg
**用途**: Twitterアイコン
**サイズ**: 32×32px
**形式**: SVG

**プロンプト（テキスト）**:
```
（公式Twitter/Xアイコンを使用）
または FontAwesome/Material Icons等から取得
```

**補足指示（日本語）**:
- 公式アイコン推奨
- カラー: モノクロ

---

### FT08: icon-line.svg
**用途**: LINEアイコン
**サイズ**: 32×32px
**形式**: SVG

**プロンプト（テキスト）**:
```
（公式LINEアイコンを使用）
https://line.me/ja/logo
```

**補足指示（日本語）**:
- 公式素材使用必須
- ブランドガイドライン遵守

---

## 📋 画像生成チェックリスト

### 優先度：高（必須）
- [ ] H01: hero-bg.jpg（ヒーロー背景）
- [ ] H02: product-bottle-main.png（メイン商品）
- [ ] BA01-BA06: Before/After画像6点
- [ ] R01-R03: お客様写真3点
- [ ] F04: expert-photo.jpg（専門家写真）

### 優先度：中（重要）
- [ ] S02-S06: 成分アイコン5点
- [ ] P01-P05: 悩みアイコン5点
- [ ] F01-F03: 特徴アイコン3点
- [ ] S07: foam-texture.jpg（泡テクスチャ）

### 優先度：低（補完）
- [ ] 各種SVGアイコン類
- [ ] ロゴ・バッジ類
- [ ] SNSアイコン

---

## 🛠️ 画像最適化ワークフロー

### 1. 生成
AI画像生成ツールでプロンプト実行

### 2. リサイズ
指定サイズにリサイズ（Photoshop/Figma/オンラインツール）

### 3. 最適化
- **JPG**: TinyJPG/ImageOptim（品質80-90%）
- **PNG**: TinyPNG/OptiPNG（圧縮レベル5-7）
- **WebP**: cwebp/Squoosh（品質85%）

### 4. WebP変換
```bash
# コマンド例
cwebp -q 85 input.jpg -o output.webp
```

### 5. 配置
```
/images/placeholders/  # 開発用
/images/final/         # 本番用（最適化済み）
```

---

## 📞 サポート

画像生成で困った場合：
1. プロンプトを調整（詳細度を上げる/下げる）
2. 生成AIツールを変更（Midjourney/DALL-E/Stable Diffusion）
3. ストックフォトサイトを検討（Unsplash/Pexels/Adobe Stock）

---

**ファイル名**: `IMAGE_GENERATION_PROMPTS.md`
**作成日**: 2024-10-24
**画像総数**: 59点
**バージョン**: 1.0
