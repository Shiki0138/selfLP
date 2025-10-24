# シャンプーLP 最終構成設計書
## 汎用テンプレート × 商品LP統合版

---

## 目次
1. [プロジェクト概要](#プロジェクト概要)
2. [全体構成（13セクション）](#全体構成)
3. [画像配置計画](#画像配置計画)
4. [画像生成プロンプト集](#画像生成プロンプト集)
5. [技術実装仕様](#技術実装仕様)
6. [ディレクトリ構造](#ディレクトリ構造)

---

## プロジェクト概要

**商品名**: プレミアムボタニカルシャンプー（仮）
**ターゲット**: 30〜50代女性、髪のダメージに悩む層
**目的**: EC購入（定期便誘導）
**コンセプト**: 画像重視 × スクロールアニメーション × 高級感

**キーメッセージ**:
「サロン級の仕上がりを、毎日自宅で。5つの植物成分が髪を内側から補修」

---

## 全体構成（13セクション詳細）

### セクション1: ファーストビュー（Hero Section）

**目的**: 訪問3秒で「何のサービスか」「誰のためか」を伝える

**構成要素**:
```
┌─────────────────────────────────────┐
│  [背景: 髪がなびく美しいビジュアル]    │
│                                     │
│   メインキャッチコピー                │
│  「サロン級の仕上がりを、             │
│   毎日自宅で。」                     │
│                                     │
│   サブコピー                         │
│  「5つの植物成分が髪を内側から補修」   │
│                                     │
│  [商品ボトル画像 - 3D回転表示]        │
│                                     │
│  [今すぐ試す CTA ボタン]              │
│                                     │
│  ↓ スクロール促進アイコン              │
└─────────────────────────────────────┘
```

**必要画像**:
- `hero-bg.jpg` - 背景ビジュアル
- `product-bottle.png` - 商品ボトル（透過PNG）
- `scroll-down.svg` - スクロール促進アイコン

**アニメーション**:
- テキスト: 文字単位でフェードイン（GSAP SplitText）
- ボトル: Y軸回転 + フェードイン（duration: 1.5s）
- 背景: パララックス効果（スクロール速度 × 0.5）
- スクロールアイコン: ふわふわ上下運動（yoyo: true）

**CTA配置**:
- メインCTA: 中央下部
- 固定ヘッダーCTA: 画面上部（スクロール時に表示）

---

### セクション2: 共感セクション（悩み提示）

**目的**: ターゲットの悩みを「自分ごと化」させる

**構成要素**:
```
┌─────────────────────────────────────┐
│  見出し:                             │
│  「こんな髪の悩み、ありませんか？」    │
│                                     │
│  ✓ パサつき・広がりが気になる         │
│    [悩みイラスト1]                   │
│                                     │
│  ✓ 頭皮の乾燥・かゆみがある           │
│    [悩みイラスト2]                   │
│                                     │
│  ✓ カラーダメージで髪が傷んでいる      │
│    [悩みイラスト3]                   │
│                                     │
│  ✓ ボリューム不足でペタンコ           │
│    [悩みイラスト4]                   │
│                                     │
│  ✓ 朝のスタイリングに時間がかかる      │
│    [悩みイラスト5]                   │
│                                     │
│  「そんなあなたに、〇〇が選ばれています」│
│  [矢印アイコン ↓]                    │
└─────────────────────────────────────┘
```

**必要画像**:
- `problem-icon-1.svg` - パサつき髪アイコン
- `problem-icon-2.svg` - 頭皮悩みアイコン
- `problem-icon-3.svg` - ダメージ髪アイコン
- `problem-icon-4.svg` - ボリューム不足アイコン
- `problem-icon-5.svg` - スタイリング悩みアイコン

**アニメーション**:
- 各項目: スクロール位置で順番にスライドイン（stagger: 0.2s）
- チェックマーク: ポップアップ（scale: 0 → 1）
- アイコン: 微細な揺れ（rotate: -3deg ↔ 3deg）

---

### セクション3: ソリューション紹介（解決策・成分）

**目的**: 「どうやって悩みを解決するのか」を図解で説明

**構成要素**:
```
┌─────────────────────────────────────┐
│  見出し:                             │
│  「5つの厳選植物成分が解決します」     │
│                                     │
│  [フローチャート図]                   │
│  Before → Process → After           │
│                                     │
│  [成分イラスト 5つ並び]               │
│  1. アルガンオイル  [アイコン]         │
│  2. ツバキ種子油    [アイコン]         │
│  3. ホホバオイル    [アイコン]         │
│  4. シアバター      [アイコン]         │
│  5. ローズマリー    [アイコン]         │
│                                     │
│  [泡立ちイメージ図]                   │
│  「微細な泡が髪1本1本を包み込む」      │
└─────────────────────────────────────┘
```

**必要画像**:
- `flowchart-solution.svg` - Before→Process→Afterフロー図
- `ingredient-argan.png` - アルガンオイルアイコン
- `ingredient-camellia.png` - ツバキ種子油アイコン
- `ingredient-jojoba.png` - ホホバオイルアイコン
- `ingredient-shea.png` - シアバターアイコン
- `ingredient-rosemary.png` - ローズマリーアイコン
- `foam-texture.png` - 泡立ちテクスチャ

**アニメーション**:
- フローチャート: 線が左から右に描画（drawSVG）
- 成分アイコン: 上から順に落下してバウンド
- 泡: ふわふわアニメーション + パーティクル効果

---

### セクション4: ビフォーアフター・成果紹介

**目的**: 視覚的に「変化」を見せる

**構成要素**:
```
┌─────────────────────────────────────┐
│  見出し:                             │
│  「たった1週間でここまで変わる！」     │
│                                     │
│  [比較スライダー1: くせ毛タイプ]       │
│  Before ←→ After                    │
│  30代女性 / 使用期間: 1週間           │
│                                     │
│  [比較スライダー2: 細毛タイプ]         │
│  Before ←→ After                    │
│  40代女性 / 使用期間: 2週間           │
│                                     │
│  [比較スライダー3: ダメージヘア]       │
│  Before ←→ After                    │
│  35代女性 / 使用期間: 1週間           │
│                                     │
│  ※効果には個人差があります            │
└─────────────────────────────────────┘
```

**必要画像**:
- `before-after-1-before.jpg` - くせ毛Before
- `before-after-1-after.jpg` - くせ毛After
- `before-after-2-before.jpg` - 細毛Before
- `before-after-2-after.jpg` - 細毛After
- `before-after-3-before.jpg` - ダメージヘアBefore
- `before-after-3-after.jpg` - ダメージヘアAfter

**アニメーション**:
- スライダー: マウス/タッチでドラッグ可能
- スクロール連動: 自動的に左右スワイプ
- 画像: ズームイン効果で登場（scale: 0.9 → 1）

---

### セクション5: 特徴・強み（差別化ポイント）

**目的**: 競合との差別化・信頼性を訴求

**構成要素**:
```
┌─────────────────────────────────────┐
│  見出し:                             │
│  「当商品が選ばれる3つの理由」         │
│                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐
│  │ 理由1     │  │ 理由2     │  │ 理由3     │
│  │[アイコン] │  │[アイコン] │  │[アイコン] │
│  │          │  │          │  │          │
│  │サロン品質  │  │無添加処方  │  │天然アロマ │
│  │の処方     │  │          │  │の香り     │
│  │          │  │パラベン    │  │          │
│  │プロ監修   │  │シリコン    │  │リラックス │
│  │業務用成分 │  │フリー      │  │効果       │
│  └──────────┘  └──────────┘  └──────────┘
│                                     │
│  [スタッフ/専門家の写真]              │
│  「開発者からのメッセージ」            │
└─────────────────────────────────────┘
```

**必要画像**:
- `feature-icon-1.svg` - サロン品質アイコン
- `feature-icon-2.svg` - 無添加アイコン
- `feature-icon-3.svg` - アロマアイコン
- `expert-photo.jpg` - 専門家/開発者写真
- `salon-quality-badge.png` - 品質バッジ

**アニメーション**:
- 3つのカード: 奥から手前に飛び出す（perspective: 1000px）
- ホバー時: 傾き効果（rotateY: 5deg）
- アイコン: 回転しながら表示（rotate: 360deg）

---

### セクション6: 使用方法・体験シーン

**目的**: 使い方を明確化し、イメージを持たせる

**構成要素**:
```
┌─────────────────────────────────────┐
│  見出し:                             │
│  「簡単4STEPで理想の髪へ」            │
│                                     │
│  STEP 1                             │
│  [画像: 髪を濡らすシーン]             │
│  髪をしっかり濡らす                   │
│                                     │
│  STEP 2                             │
│  [画像: 泡立てるシーン]               │
│  ポンプ2〜3プッシュを手に取り泡立てる  │
│                                     │
│  STEP 3                             │
│  [画像: マッサージシーン]             │
│  頭皮を優しくマッサージ（1〜2分）     │
│                                     │
│  STEP 4                             │
│  [画像: すすぐシーン]                 │
│  ぬめりがなくなるまでしっかりすすぐ    │
│                                     │
│  [ライフスタイル画像]                 │
│  「朝のスタイリングが楽になりました」  │
└─────────────────────────────────────┘
```

**必要画像**:
- `step-1-wet.jpg` - 髪を濡らすシーン
- `step-2-lather.jpg` - 泡立てるシーン
- `step-3-massage.jpg` - マッサージシーン
- `step-4-rinse.jpg` - すすぐシーン
- `lifestyle-morning.jpg` - 朝のスタイリングシーン
- `lifestyle-bathroom.jpg` - バスルームシーン

**アニメーション**:
- STEP番号: カウントアップ（CountUp.js または GSAP）
- 画像: ピンボード風にポップアップ（rotation: -5deg）
- タイムライン: 左から右へ順次表示

---

### セクション7: お客様の声・口コミ

**目的**: 第三者のリアルな感想で信頼を補強

**構成要素**:
```
┌─────────────────────────────────────┐
│  見出し:                             │
│  「実際に体験されたお客様の声」        │
│                                     │
│  ┌─────────────────┐               │
│  │ [顔写真]         │               │
│  │ ★★★★★         │               │
│  │ 30代女性 A.Kさん  │               │
│  │                 │               │
│  │ 「髪質が変わって驚きました！       │
│  │  朝のスタイリングが本当に楽に」    │
│  └─────────────────┘               │
│                                     │
│  ┌─────────────────┐               │
│  │ [顔写真]         │               │
│  │ ★★★★★         │               │
│  │ 40代女性 M.Tさん  │               │
│  │                 │               │
│  │ 「香りが良くてリラックスできます。  │
│  │  リピート決定です」               │
│  └─────────────────┘               │
│                                     │
│  ┌─────────────────┐               │
│  │ [顔写真]         │               │
│  │ ★★★★★         │               │
│  │ 35代女性 Y.Sさん  │               │
│  │                 │               │
│  │ 「パサつきが改善されました。        │
│  │  ずっと探していたシャンプーです」  │
│  └─────────────────┘               │
│                                     │
│  [Google/楽天レビューリンク]          │
└─────────────────────────────────────┘
```

**必要画像**:
- `customer-1.jpg` - お客様写真1（またはイラスト）
- `customer-2.jpg` - お客様写真2
- `customer-3.jpg` - お客様写真3
- `star-icon.svg` - 星評価アイコン
- `review-platform-logo.png` - レビューサイトロゴ

**アニメーション**:
- レビューカード: カルーセル（Swiper.js or 自作）
- 星: 1つずつキラキラ点灯（stagger: 0.1s）
- 吹き出し: フェードイン + スライドアップ

---

### セクション8: 成分詳細・こだわり

**目的**: 専門性をアピールし、安心感を与える

**構成要素**:
```
┌─────────────────────────────────────┐
│  見出し:                             │
│  「5つの厳選成分へのこだわり」         │
│                                     │
│  ┌─────────────────┐               │
│  │ 成分1: アルガンオイル              │
│  │ [分子構造イラスト]                 │
│  │                                   │
│  │ 効果: 保湿・ツヤ出し                │
│  │ 産地: モロッコ                      │
│  └─────────────────┘               │
│                                     │
│  ┌─────────────────┐               │
│  │ 成分2: ツバキ種子油                │
│  │ [分子構造イラスト]                 │
│  │                                   │
│  │ 効果: 髪の補修・保護                │
│  │ 産地: 日本                         │
│  └─────────────────┘               │
│                                     │
│  ... (同様に5つまで)                  │
│                                     │
│  [研究者の写真]                       │
│  「開発ストーリー: 3年かけた処方開発」  │
└─────────────────────────────────────┘
```

**必要画像**:
- `molecule-argan.svg` - アルガンオイル分子構造
- `molecule-camellia.svg` - ツバキ種子油分子構造
- `molecule-jojoba.svg` - ホホバオイル分子構造
- `molecule-shea.svg` - シアバター分子構造
- `molecule-rosemary.svg` - ローズマリー分子構造
- `researcher-photo.jpg` - 研究者/開発者写真
- `ingredient-origin-map.svg` - 成分産地マップ

**アニメーション**:
- 成分カード: めくれる効果（rotateY: 180deg）
- 分子構造: 線が描画される（drawSVG）
- グラフ: カウントアップ（数値データがある場合）

---

### セクション9: よくある質問（FAQ）

**目的**: 購入前の不安を解消

**構成要素**:
```
┌─────────────────────────────────────┐
│  見出し:                             │
│  「よくあるご質問」                   │
│                                     │
│  Q1: 香りはどんな感じですか？          │
│  ▼                                  │
│  A: ラベンダーとローズマリーの天然アロマ│
│     です。強すぎず優しい香りです。     │
│                                     │
│  Q2: どのくらいで効果が出ますか？      │
│  ▼                                  │
│  A: 多くの方が1週間で髪質の変化を      │
│     実感されています。                │
│                                     │
│  Q3: 詰め替え用はありますか？          │
│  ▼                                  │
│  A: はい、エコパック（詰め替え用）を    │
│     ご用意しています。                │
│                                     │
│  Q4: 価格はいくらですか？              │
│  ▼                                  │
│  A: 単品3,980円、定期便なら初回        │
│     2,980円（30%OFF）です。           │
│                                     │
│  Q5: 敏感肌でも使えますか？            │
│  ▼                                  │
│  A: パッチテスト済みですが、心配な方は  │
│     事前にテストをお勧めします。       │
│                                     │
│  Q6: 返品・返金保証はありますか？      │
│  ▼                                  │
│  A: 初回購入の方に限り、30日間の       │
│     返金保証があります。               │
└─────────────────────────────────────┘
```

**必要画像**:
- `faq-icon-q.svg` - Qアイコン
- `faq-icon-a.svg` - Aアイコン
- `accordion-arrow.svg` - アコーディオン矢印

**アニメーション**:
- アコーディオン: クリックで開閉（height: 0 → auto）
- Q/Aアイコン: 回転（rotate: 0deg → 180deg）
- 回答テキスト: フェードイン

---

### セクション10: 料金・比較表セクション

**目的**: 価格に透明性を持たせ、定期便への誘導

**構成要素**:
```
┌─────────────────────────────────────┐
│  見出し:                             │
│  「あなたにぴったりのプランを」        │
│                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐
│  │ 単品購入  │  │ 定期便    │  │ まとめ買い│
│  │          │  │ おすすめ！ │  │          │
│  ├──────────┤  ├──────────┤  ├──────────┤
│  │ 3,980円  │  │ 2,980円   │  │ 8,940円  │
│  │ (税込)   │  │ (税込)    │  │ (税込)   │
│  │          │  │ 初回30%OFF│  │ 3本セット │
│  │          │  │           │  │          │
│  │ 送料550円 │  │ 送料無料  │  │ 送料無料 │
│  │          │  │           │  │          │
│  │ 購入する  │  │ 購入する  │  │ 購入する │
│  └──────────┘  └──────────┘  └──────────┘
│                                     │
│  ✓ 30日間返金保証                    │
│  ✓ いつでも解約OK                    │
│  ✓ 次回以降も10%OFF                  │
└─────────────────────────────────────┘
```

**必要画像**:
- `plan-single.png` - 単品プランアイコン
- `plan-subscription.png` - 定期便アイコン
- `plan-bulk.png` - まとめ買いアイコン
- `badge-recommended.svg` - おすすめバッジ
- `icon-free-shipping.svg` - 送料無料アイコン
- `icon-money-back.svg` - 返金保証アイコン

**アニメーション**:
- プランカード: 左右からスライドイン
- 価格: パルス効果（scale: 1 → 1.05 → 1）
- おすすめバッジ: 揺れる（rotate: -5deg ↔ 5deg）

---

### セクション11: アクセス・購入導線（※ECの場合は配送情報）

**目的**: 購入ハードルを下げ、安心感を与える

**構成要素**:
```
┌─────────────────────────────────────┐
│  見出し:                             │
│  「ご購入・配送について」             │
│                                     │
│  [配送エリアマップ]                   │
│  全国配送対応                         │
│                                     │
│  配送方法:                           │
│  ヤマト運輸・佐川急便                 │
│  ※お届け先により選択                 │
│                                     │
│  お届け日数:                         │
│  ご注文から2〜5営業日                 │
│                                     │
│  支払い方法:                         │
│  ✓ クレジットカード                  │
│  ✓ Amazon Pay                       │
│  ✓ 代金引換                          │
│  ✓ 後払い（コンビニ・郵便局）         │
│                                     │
│  [お問い合わせ]                       │
│  カスタマーサポート: 0120-XXX-XXX    │
│  受付時間: 10:00〜18:00（平日）      │
│  メール: support@example.com        │
└─────────────────────────────────────┘
```

**必要画像**:
- `shipping-map-japan.svg` - 日本地図
- `payment-cards.png` - クレジットカードロゴ
- `payment-amazonpay.png` - Amazon Payロゴ
- `delivery-truck.svg` - 配送トラックアイコン
- `customer-support.svg` - サポートアイコン

**アニメーション**:
- 地図: 配送エリアがハイライト（fill opacity変化）
- アイコン: ホバーで拡大

---

### セクション12: SNS・インスタ連携

**目的**: 社会的証明を強化、UGC活用

**構成要素**:
```
┌─────────────────────────────────────┐
│  見出し:                             │
│  「#〇〇シャンプー で投稿しよう！」    │
│                                     │
│  [Instagram投稿グリッド 3×3]         │
│  ┌────┐┌────┐┌────┐              │
│  │投稿1││投稿2││投稿3│              │
│  └────┘└────┘└────┘              │
│  ┌────┐┌────┐┌────┐              │
│  │投稿4││投稿5││投稿6│              │
│  └────┘└────┘└────┘              │
│  ┌────┐┌────┐┌────┐              │
│  │投稿7││投稿8││投稿9│              │
│  └────┘└────┘└────┘              │
│                                     │
│  [インフルエンサー紹介]               │
│  「人気ヘアスタイリスト〇〇さんも愛用」│
│                                     │
│  [SNSフォローボタン]                  │
│  Instagram / Twitter / LINE         │
└─────────────────────────────────────┘
```

**必要画像**:
- `instagram-post-1.jpg` 〜 `instagram-post-9.jpg` - ユーザー投稿
- `influencer-1.jpg` - インフルエンサー写真
- `social-instagram.svg` - Instagramアイコン
- `social-twitter.svg` - Twitterアイコン
- `social-line.svg` - LINEアイコン

**アニメーション**:
- グリッド: ホバーで画像拡大（scale: 1.1）
- スクロール: 無限ループ（horizontal scroll）
- アイコン: ホバーでカラー変化

---

### セクション13: フッターCTA（最終行動促進）

**目的**: 最終的なアクションを明確にする

**構成要素**:
```
┌─────────────────────────────────────┐
│  見出し:                             │
│  「まずは1本から、理想の髪へ」         │
│                                     │
│  [商品ボトル画像]                     │
│                                     │
│  初回限定 30%OFF                     │
│  通常 3,980円 → 2,980円              │
│                                     │
│  [今すぐ購入 CTA ボタン（大）]        │
│  [電話で相談 ボタン]                  │
│                                     │
│  ✓ 30日間返金保証                    │
│  ✓ 送料無料                          │
│  ✓ いつでも解約OK                    │
│                                     │
│  ─────────────────────           │
│                                     │
│  [会社ロゴ]                          │
│  会社概要 | 特定商取引法 | プライバシー│
│  お問い合わせ | よくある質問           │
│                                     │
│  © 2024 Company Name. All Rights Reserved.
└─────────────────────────────────────┘
```

**必要画像**:
- `footer-product.png` - 商品画像（正面）
- `footer-guarantee-badge.svg` - 保証バッジ
- `company-logo.svg` - 会社ロゴ

**アニメーション**:
- CTAボタン: グラデーション光る（linear-gradient移動）
- ホバー: 拡大 + 影（scale: 1.05, box-shadow強化）
- クリック: 波紋エフェクト（ripple effect）

---

## 画像配置計画

### 画像カテゴリ別整理

#### A. 商品画像（6枚）
| ファイル名 | 用途 | 推奨サイズ | 形式 |
|----------|------|----------|------|
| product-bottle.png | ヒーロー・メイン | 1000×1500px | PNG（透過） |
| product-front.png | 詳細・レビュー | 800×1200px | PNG（透過） |
| product-back.png | 成分表示 | 800×1200px | PNG（透過） |
| product-set.png | セット商品 | 1200×800px | PNG（透過） |
| product-refill.png | 詰め替えパック | 800×1000px | PNG（透過） |
| footer-product.png | フッターCTA | 600×900px | PNG（透過） |

#### B. ヒーロー・背景画像（3枚）
| ファイル名 | 用途 | 推奨サイズ | 形式 |
|----------|------|----------|------|
| hero-bg.jpg | ファーストビュー背景 | 1920×1080px | WebP/JPG |
| hero-model.jpg | モデル画像 | 1200×1600px | WebP/JPG |
| parallax-bg.jpg | パララックス用 | 2400×1350px | WebP/JPG |

#### C. Before/After画像（6枚）
| ファイル名 | 用途 | 推奨サイズ | 形式 |
|----------|------|----------|------|
| before-after-1-before.jpg | くせ毛Before | 800×1000px | WebP/JPG |
| before-after-1-after.jpg | くせ毛After | 800×1000px | WebP/JPG |
| before-after-2-before.jpg | 細毛Before | 800×1000px | WebP/JPG |
| before-after-2-after.jpg | 細毛After | 800×1000px | WebP/JPG |
| before-after-3-before.jpg | ダメージBefore | 800×1000px | WebP/JPG |
| before-after-3-after.jpg | ダメージAfter | 800×1000px | WebP/JPG |

#### D. 使用シーン画像（6枚）
| ファイル名 | 用途 | 推奨サイズ | 形式 |
|----------|------|----------|------|
| step-1-wet.jpg | STEP1 濡らす | 600×400px | WebP/JPG |
| step-2-lather.jpg | STEP2 泡立て | 600×400px | WebP/JPG |
| step-3-massage.jpg | STEP3 マッサージ | 600×400px | WebP/JPG |
| step-4-rinse.jpg | STEP4 すすぐ | 600×400px | WebP/JPG |
| lifestyle-morning.jpg | 朝のスタイリング | 1000×667px | WebP/JPG |
| lifestyle-bathroom.jpg | バスルーム | 1000×667px | WebP/JPG |

#### E. お客様の声・人物画像（4枚）
| ファイル名 | 用途 | 推奨サイズ | 形式 |
|----------|------|----------|------|
| customer-1.jpg | レビュー1 | 300×300px | WebP/JPG |
| customer-2.jpg | レビュー2 | 300×300px | WebP/JPG |
| customer-3.jpg | レビュー3 | 300×300px | WebP/JPG |
| expert-photo.jpg | 専門家・開発者 | 500×500px | WebP/JPG |

#### F. アイコン・イラスト（25個 SVG）
| ファイル名 | 用途 |
|----------|------|
| scroll-down.svg | スクロール促進 |
| problem-icon-1.svg | 悩みアイコン（パサつき） |
| problem-icon-2.svg | 悩みアイコン（頭皮） |
| problem-icon-3.svg | 悩みアイコン（ダメージ） |
| problem-icon-4.svg | 悩みアイコン（ボリューム） |
| problem-icon-5.svg | 悩みアイコン（スタイリング） |
| ingredient-argan.png | 成分アイコン（アルガン） |
| ingredient-camellia.png | 成分アイコン（ツバキ） |
| ingredient-jojoba.png | 成分アイコン（ホホバ） |
| ingredient-shea.png | 成分アイコン（シアバター） |
| ingredient-rosemary.png | 成分アイコン（ローズマリー） |
| feature-icon-1.svg | 特徴アイコン1 |
| feature-icon-2.svg | 特徴アイコン2 |
| feature-icon-3.svg | 特徴アイコン3 |
| star-icon.svg | 星評価 |
| faq-icon-q.svg | FAQ Q |
| faq-icon-a.svg | FAQ A |
| accordion-arrow.svg | アコーディオン矢印 |
| badge-recommended.svg | おすすめバッジ |
| icon-free-shipping.svg | 送料無料 |
| icon-money-back.svg | 返金保証 |
| social-instagram.svg | Instagram |
| social-twitter.svg | Twitter |
| social-line.svg | LINE |
| company-logo.svg | 会社ロゴ |

#### G. Instagram投稿（9枚）
| ファイル名 | 用途 | 推奨サイズ | 形式 |
|----------|------|----------|------|
| instagram-post-1.jpg | SNS投稿1 | 600×600px | WebP/JPG |
| instagram-post-2.jpg | SNS投稿2 | 600×600px | WebP/JPG |
| ... | ... | ... | ... |
| instagram-post-9.jpg | SNS投稿9 | 600×600px | WebP/JPG |

---

## 画像生成プロンプト集

### A. 商品画像プロンプト

#### A-1: product-bottle.png
```
商品名: プレミアムボタニカルシャンプー

プロンプト:
"A premium botanical shampoo bottle, elegant design with transparent amber glass bottle, gold metallic pump dispenser, minimalist white label with botanical leaf motif, product photography on pure white background, studio lighting with soft shadows, 3/4 view angle, professional product shot, high resolution, clean and luxurious aesthetic"

追加指示:
- ボトルサイズ: 500ml想定
- カラー: アンバー（琥珀色）ガラス
- ラベル: ホワイト×ゴールド
- 背景: 完全白（透過PNG推奨）
```

#### A-2: product-front.png
```
プロンプト:
"Front view of premium botanical shampoo bottle, amber glass with gold pump, white minimalist label featuring botanical illustrations, product name 'BOTANICAL PURE', clean product photography, soft studio lighting, white background, high-end cosmetic style"

追加指示:
- 正面からの撮影
- ラベルデザイン明瞭
- 商品名・ロゴ視認可能
```

#### A-3: product-set.png
```
プロンプト:
"Product set photography of botanical shampoo and conditioner duo, matching amber glass bottles with gold pumps, arranged artistically with botanical elements like rosemary sprigs and eucalyptus leaves, soft natural lighting, clean white background, luxury cosmetic product shot"

追加指示:
- シャンプー＋コンディショナー
- ボタニカル素材（ローズマリー、ユーカリ）配置
- 高級感のある構図
```

---

### B. ヒーロー・背景画像プロンプト

#### B-1: hero-bg.jpg
```
プロンプト:
"Beautiful flowing hair in motion, silky smooth brunette hair caught in gentle breeze, soft natural sunlight, clean white or cream background, hair care advertisement aesthetic, cinematic lighting, shallow depth of field, professional beauty photography, warm and inviting atmosphere"

追加指示:
- 髪の質感: 艶やか、滑らか
- 色: ブラウン〜ダークブラウン
- 動き: 風になびく自然な動き
- 背景: クリーム/アイボリー/ホワイト
```

#### B-2: hero-model.jpg
```
プロンプト:
"Asian woman with beautiful glossy hair, touching her smooth healthy hair with satisfied expression, natural makeup, soft smile, white or cream background, professional beauty portrait, natural window lighting, hair care advertisement style, warm and elegant mood"

追加指示:
- モデル: 30〜40代アジア女性
- 表情: 満足感、笑顔
- 髪の状態: 健康的、ツヤあり
- ポーズ: 髪を触る、自然なポーズ
```

---

### C. Before/After画像プロンプト

#### C-1: before-after-1-before.jpg (くせ毛Before)
```
プロンプト:
"Before hair treatment photo, frizzy wavy hair with visible damage, dry texture, lack of shine, natural lighting, neutral background, documentary style photography for hair care comparison"

追加指示:
- 髪質: パサついたウェーブ、広がり
- 質感: 乾燥、ツヤなし
- 撮影条件: 自然光、同一条件
- 背景: ニュートラルグレーまたはベージュ
```

#### C-2: before-after-1-after.jpg (くせ毛After)
```
プロンプト:
"After hair treatment photo, smooth controlled wavy hair, healthy shine and gloss, improved texture, same lighting and angle as before photo, hair care transformation result, professional photography"

追加指示:
- 髪質: まとまったウェーブ、ツヤあり
- 質感: 潤い、健康的な光沢
- 撮影条件: Before写真と同一
- 変化: 明確に視認できる改善
```

#### C-3: before-after-2-before.jpg (細毛Before)
```
プロンプト:
"Before photo of thin fine hair, flat hair with no volume, visible scalp, limp texture, natural lighting, hair loss concern visualization, documentary photography style"

追加指示:
- 髪質: 細毛、ボリューム不足
- 見た目: ペタンコ、地肌見え
- トーン: 改善の余地がある状態
```

#### C-4: before-after-2-after.jpg (細毛After)
```
プロンプト:
"After photo of fine hair with improved volume, fuller appearance, bouncy texture, healthy scalp, same angle and lighting, visible improvement in hair density and body"

追加指示:
- 髪質: ボリュームアップ
- 見た目: ふんわり、立ち上がり
- 変化: 明確なボリューム増加
```

#### C-5: before-after-3-before.jpg (ダメージヘアBefore)
```
プロンプト:
"Before photo of color-damaged hair, split ends visible, rough dry texture, faded hair color, lack of moisture, hair damage documentation, natural lighting"

追加指示:
- ダメージ: カラーダメージ、枝毛
- 質感: ごわつき、乾燥
- 色: 退色した状態
```

#### C-6: before-after-3-after.jpg (ダメージヘアAfter)
```
プロンプト:
"After photo of repaired hair, smooth glossy texture, sealed cuticles, vibrant healthy appearance, same lighting conditions, visible repair and improvement"

追加指示:
- 改善: 枝毛減少、ツヤ回復
- 質感: 滑らか、潤い
- 色: 鮮やかさ回復
```

---

### D. 使用シーン画像プロンプト

#### D-1: step-1-wet.jpg
```
プロンプト:
"Woman wetting hair in shower, hands running through wet hair under water stream, bathroom scene, natural lighting, clean and fresh atmosphere, hair care routine photography, soft focus background"

追加指示:
- シーン: シャワー、髪を濡らす
- 手の位置: 髪を触っている
- 雰囲気: 清潔、爽やか
```

#### D-2: step-2-lather.jpg
```
プロンプト:
"Hands applying shampoo creating rich foam lather, close-up of foaming shampoo in hair, creamy white bubbles, hair care product application, soft lighting, clean aesthetic"

追加指示:
- 泡: リッチで細かい泡
- 手: シャンプーを泡立てる動作
- 質感: クリーミーな泡感
```

#### D-3: step-3-massage.jpg
```
プロンプト:
"Woman massaging scalp with shampoo, fingers gently massaging head, relaxed expression, eyes closed, self-care moment, bathroom setting, warm lighting, peaceful atmosphere"

追加指示:
- 動作: 頭皮マッサージ
- 表情: リラックス、目を閉じる
- 雰囲気: 癒し、セルフケア
```

#### D-4: step-4-rinse.jpg
```
プロンプト:
"Rinsing shampoo from hair under shower, water flowing through clean hair, fresh and clean feeling, bathroom scene, bright natural lighting, hair care routine final step"

追加指示:
- シーン: すすぎ、水が流れる
- 髪: きれいにすすがれている
- 雰囲気: すっきり、清潔感
```

#### D-5: lifestyle-morning.jpg
```
プロンプト:
"Woman styling hair in morning routine, looking in mirror with satisfied smile, beautiful smooth hair, bright morning sunlight, modern bathroom or bedroom, lifestyle photography, natural and fresh atmosphere"

追加指示:
- 時間帯: 朝、明るい自然光
- 動作: 髪をセット、鏡を見る
- 表情: 満足そうな笑顔
- 背景: 明るいバスルームまたは寝室
```

#### D-6: lifestyle-bathroom.jpg
```
プロンプト:
"Luxurious modern bathroom interior, botanical shampoo bottle on marble counter, plants and natural elements, soft towels, clean and minimal design, lifestyle product photography, warm natural lighting"

追加指示:
- インテリア: モダン、清潔
- 素材: 大理石、ナチュラル素材
- 小物: 植物、タオル、商品ボトル
- 雰囲気: 高級感、リラックス
```

---

### E. お客様の声・人物画像プロンプト

#### E-1: customer-1.jpg (30代女性)
```
プロンプト:
"Portrait of Asian woman in her 30s, natural smile, healthy shiny hair, clean background, professional headshot style, warm lighting, approachable and friendly expression, customer testimonial photo"

追加指示:
- 年代: 30代
- 表情: 自然な笑顔、親しみやすい
- 髪: 健康的、ツヤあり
- 背景: シンプル（白/ベージュ）
- 用途: レビュー用顔写真
```

#### E-2: customer-2.jpg (40代女性)
```
プロンプト:
"Portrait of Asian woman in her 40s, confident smile, well-maintained hair, professional appearance, neutral background, beauty customer review photo, natural daylight"

追加指示:
- 年代: 40代
- 表情: 自信のある笑顔
- 髪: 手入れされた状態
- 雰囲気: プロフェッショナル
```

#### E-3: customer-3.jpg (35代女性)
```
プロンプト:
"Portrait of Asian woman in her mid-30s, satisfied expression, touching her smooth hair, clean studio background, customer testimonial photography, soft natural lighting"

追加指示:
- 年代: 35歳前後
- 動作: 髪を触る
- 表情: 満足そう
- 用途: ビフォーアフター体験者
```

#### E-4: expert-photo.jpg (開発者/専門家)
```
プロンプト:
"Professional portrait of Asian female hair care expert or cosmetic scientist, white lab coat, confident and trustworthy expression, laboratory or professional setting background, expert credibility photo"

追加指示:
- 職業: 研究者/専門家
- 服装: 白衣またはプロフェッショナルな服装
- 表情: 信頼できる、知的
- 背景: ラボまたはオフィス
- 用途: 信頼性訴求
```

---

### F. アイコン・イラストプロンプト

#### F-1: problem-icon-1.svg (パサつき)
```
プロンプト:
"Simple line icon of frizzy dry hair, minimalist design, monochrome line art, suitable for web UI, hair problem illustration, clean vector style"

追加指示:
- スタイル: シンプルなラインアート
- 色: モノクロ（後で調整可能）
- 表現: パサついた髪の毛
- 形式: SVG、アウトライン化
```

#### F-2: ingredient-argan.png
```
プロンプト:
"Illustration of argan nuts and argan oil drop, botanical ingredient icon, natural and organic style, soft colors with gold accents, cosmetic ingredient illustration"

追加指示:
- 対象: アルガンナッツ＋オイルドロップ
- スタイル: ボタニカル、ナチュラル
- カラー: ゴールド系、アース系
- 用途: 成分アイコン
```

#### F-3: feature-icon-1.svg (サロン品質)
```
プロンプト:
"Icon of professional hair salon tools or quality badge, minimalist line design, professional and premium feeling, monochrome vector icon"

追加指示:
- モチーフ: サロンツール or 品質バッジ
- スタイル: ミニマル、プロフェッショナル
- 形式: SVGラインアート
```

#### F-4: star-icon.svg
```
プロンプト:
"Five-pointed star icon for rating, clean vector design, suitable for animation, filled or outline style"

追加指示:
- 形状: 5つ星（★）
- スタイル: 塗りつぶし/アウトライン
- 用途: レビュー評価
- アニメーション対応
```

#### F-5: social-instagram.svg
```
プロンプト:
"Instagram logo icon, official design, vector format, suitable for web use"

追加指示:
- 公式ロゴデザイン準拠
- カラー: グラデーション対応
- 形式: SVG
```

---

### G. その他特殊画像プロンプト

#### G-1: flowchart-solution.svg (フローチャート)
```
プロンプト:
"Infographic flowchart showing hair care transformation process, Before → Process → After, clean design with icons and arrows, modern vector illustration, cosmetic product explanation diagram"

追加指示:
- 構成: 3ステップ（Before/Process/After）
- 要素: アイコン、矢印、テキストエリア
- スタイル: モダン、わかりやすい
- 形式: SVG（編集可能）
```

#### G-2: molecule-argan.svg (分子構造)
```
プロンプト:
"Simplified molecular structure diagram of argan oil, scientific illustration style, clean line art, educational chemistry diagram, vector format"

追加指示:
- 対象: アルガンオイルの主成分構造
- スタイル: シンプル化した科学図解
- 色: モノクロまたは2色
- 用途: 成分説明
```

#### G-3: foam-texture.png
```
プロンプト:
"Close-up texture of creamy white shampoo foam bubbles, soft and delicate bubbles, clean white background, product texture photography, macro lens, high detail"

追加指示:
- 対象: シャンプーの泡
- 質感: クリーミー、微細な泡
- 撮影: マクロ、高解像度
- 背景: 白
```

#### G-4: shipping-map-japan.svg
```
プロンプト:
"Simplified map of Japan with prefectures, clean vector design, suitable for highlighting shipping areas, minimalist geographic illustration"

追加指示:
- 対象: 日本地図
- スタイル: シンプル、都道府県境界
- 用途: 配送エリア表示
- 形式: SVG（色変更可能）
```

---

## 技術実装仕様

### HTMLセマンティック構造
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>プレミアムボタニカルシャンプー | サロン級の仕上がりを自宅で</title>

  <!-- SEO -->
  <meta name="description" content="5つの厳選植物成分が髪を内側から補修。サロン級の仕上がりを毎日自宅で体感できるプレミアムシャンプー。">
  <meta name="keywords" content="シャンプー,ボタニカル,サロン品質,髪の悩み,ダメージケア">

  <!-- OGP -->
  <meta property="og:title" content="プレミアムボタニカルシャンプー">
  <meta property="og:description" content="サロン級の仕上がりを毎日自宅で">
  <meta property="og:image" content="/images/ogp.jpg">

  <!-- CSS -->
  <link rel="stylesheet" href="/css/reset.css">
  <link rel="stylesheet" href="/css/variables.css">
  <link rel="stylesheet" href="/css/layout.css">
  <link rel="stylesheet" href="/css/animations.css">
</head>
<body>
  <!-- ヘッダー（固定CTA） -->
  <header class="header-fixed">
    <nav>
      <a href="#" class="logo">BOTANICAL PURE</a>
      <button class="cta-button">今すぐ購入</button>
    </nav>
  </header>

  <main>
    <!-- セクション1: Hero -->
    <section id="hero" class="hero-section">...</section>

    <!-- セクション2: 共感 -->
    <section id="problems" class="problems-section">...</section>

    <!-- セクション3: ソリューション -->
    <section id="solution" class="solution-section">...</section>

    <!-- セクション4: Before/After -->
    <section id="results" class="results-section">...</section>

    <!-- セクション5: 特徴 -->
    <section id="features" class="features-section">...</section>

    <!-- セクション6: 使用方法 -->
    <section id="howto" class="howto-section">...</section>

    <!-- セクション7: レビュー -->
    <section id="reviews" class="reviews-section">...</section>

    <!-- セクション8: 成分詳細 -->
    <section id="ingredients" class="ingredients-section">...</section>

    <!-- セクション9: FAQ -->
    <section id="faq" class="faq-section">...</section>

    <!-- セクション10: 料金 -->
    <section id="pricing" class="pricing-section">...</section>

    <!-- セクション11: 配送情報 -->
    <section id="shipping" class="shipping-section">...</section>

    <!-- セクション12: SNS -->
    <section id="social" class="social-section">...</section>

    <!-- セクション13: Footer CTA -->
    <footer id="footer-cta" class="footer-cta-section">...</footer>
  </main>

  <!-- Scripts -->
  <script src="/lib/gsap/gsap.min.js"></script>
  <script src="/lib/gsap/ScrollTrigger.min.js"></script>
  <script src="/lib/lenis/lenis.min.js"></script>
  <script src="/js/main.js" type="module"></script>
</body>
</html>
```

### CSSカスタムプロパティ（variables.css）
```css
:root {
  /* カラーパレット */
  --color-primary: #2D5F3F;      /* 深いグリーン */
  --color-accent: #D4AF37;       /* ゴールド */
  --color-bg: #FAF7F2;           /* クリーム */
  --color-text: #3E2723;         /* ダークブラウン */
  --color-white: #FFFFFF;

  /* タイポグラフィ */
  --font-serif: 'Noto Serif JP', serif;
  --font-sans: 'Noto Sans JP', sans-serif;
  --font-size-h1: clamp(2rem, 5vw, 3.5rem);
  --font-size-h2: clamp(1.5rem, 4vw, 2.5rem);
  --font-size-body: clamp(1rem, 2vw, 1.125rem);

  /* スペーシング */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;
  --spacing-xl: 6rem;

  /* アニメーション */
  --ease-out-cubic: cubic-bezier(0.33, 1, 0.68, 1);
  --ease-in-out-cubic: cubic-bezier(0.65, 0, 0.35, 1);
  --duration-fast: 0.3s;
  --duration-normal: 0.6s;
  --duration-slow: 1.2s;
}
```

### JavaScript実装例（main.js）
```javascript
// Lenis スムーススクロール初期化
import Lenis from '@studio-freight/lenis';

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP ScrollTrigger登録
gsap.registerPlugin(ScrollTrigger);

// ヒーローアニメーション
gsap.from('.hero-title', {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: 'power3.out',
});

gsap.from('.product-bottle', {
  opacity: 0,
  rotationY: 90,
  duration: 1.5,
  ease: 'back.out(1.7)',
  delay: 0.5,
});

// スクロールトリガーアニメーション
gsap.utils.toArray('.fade-in-section').forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      end: 'top 20%',
      toggleActions: 'play none none reverse',
    },
  });
});

// Before/Afterスライダー
document.querySelectorAll('.comparison-slider').forEach((slider) => {
  const handle = slider.querySelector('.handle');
  const beforeImage = slider.querySelector('.before-image');

  let isDragging = false;

  handle.addEventListener('mousedown', () => isDragging = true);
  document.addEventListener('mouseup', () => isDragging = false);

  slider.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const rect = slider.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    beforeImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    handle.style.left = `${percentage}%`;
  });
});
```

---

## ディレクトリ構造

```
/selfLP
├── index.html                      # メインHTML
├── README.md                       # プロジェクト説明
├── LP_CONCEPT.md                   # コンセプトドキュメント
├── LP_STRUCTURE_FINAL.md           # この構成書
│
├── css/
│   ├── reset.css                  # CSSリセット
│   ├── variables.css              # CSS変数定義
│   ├── layout.css                 # レイアウトスタイル
│   ├── animations.css             # アニメーション定義
│   └── responsive.css             # レスポンシブ対応
│
├── js/
│   ├── main.js                    # メインスクリプト
│   ├── scroll.js                  # スクロール制御
│   ├── animations.js              # アニメーション処理
│   ├── slider.js                  # Before/Afterスライダー
│   └── utils.js                   # ユーティリティ関数
│
├── images/
│   ├── products/                  # 商品画像
│   │   ├── product-bottle.png
│   │   ├── product-front.png
│   │   ├── product-set.png
│   │   └── ...
│   │
│   ├── hero/                      # ヒーロー画像
│   │   ├── hero-bg.jpg
│   │   ├── hero-model.jpg
│   │   └── parallax-bg.jpg
│   │
│   ├── before-after/              # Before/After画像
│   │   ├── before-after-1-before.jpg
│   │   ├── before-after-1-after.jpg
│   │   └── ...
│   │
│   ├── lifestyle/                 # ライフスタイル画像
│   │   ├── step-1-wet.jpg
│   │   ├── step-2-lather.jpg
│   │   └── ...
│   │
│   ├── people/                    # 人物画像
│   │   ├── customer-1.jpg
│   │   ├── expert-photo.jpg
│   │   └── ...
│   │
│   ├── icons/                     # アイコン（SVG）
│   │   ├── scroll-down.svg
│   │   ├── problem-icon-1.svg
│   │   └── ...
│   │
│   ├── ingredients/               # 成分画像
│   │   ├── ingredient-argan.png
│   │   ├── molecule-argan.svg
│   │   └── ...
│   │
│   ├── social/                    # SNS画像
│   │   ├── instagram-post-1.jpg
│   │   └── ...
│   │
│   └── misc/                      # その他
│       ├── foam-texture.png
│       ├── shipping-map-japan.svg
│       └── ...
│
├── lib/                           # 外部ライブラリ
│   ├── gsap/
│   │   ├── gsap.min.js
│   │   └── ScrollTrigger.min.js
│   └── lenis/
│       └── lenis.min.js
│
└── assets/                        # その他アセット
    ├── fonts/                     # Webフォント
    └── videos/                    # 動画（あれば）
```

---

## 次のステップ

### Phase 1: 基盤構築
1. ディレクトリ構造作成
2. HTML基本構造実装
3. CSS変数・リセット設定
4. ライブラリ導入（GSAP, Lenis）

### Phase 2: コンテンツ実装
1. 各セクションのHTML/CSSマークアップ
2. プレースホルダー画像配置
3. レスポンシブ対応

### Phase 3: アニメーション実装
1. スクロールアニメーション
2. インタラクション（ホバー、クリック）
3. パフォーマンス最適化

### Phase 4: 画像準備
1. 画像生成（AIまたは素材サイト）
2. 画像最適化（WebP変換、圧縮）
3. 遅延読み込み実装

### Phase 5: 仕上げ
1. クロスブラウザテスト
2. パフォーマンステスト
3. SEO最適化
4. A/Bテスト準備

---

## 付録: 重要な注意事項

### 薬機法（医薬品医療機器等法）対応
シャンプーは「化粧品」に分類されるため、以下の表現に注意：

**NG表現**:
- 「髪が生える」「育毛効果」
- 「フケが治る」「かゆみが治る」
- 「白髪が黒くなる」
- 医薬品的な効果効能

**OK表現**:
- 「髪を補修する」「ダメージケア」
- 「頭皮を清潔に保つ」
- 「髪にツヤを与える」
- 「使用感」「香り」の訴求

### 景品表示法対応
- Before/Afterに「個人差があります」明記
- 実際の効果以上の誇大表現禁止
- 初回価格の条件明示（定期縛りなど）

### 特定商取引法
フッターに必須記載事項：
- 販売業者名
- 代表者名
- 所在地
- 電話番号
- 返品・交換条件
- 配送料・手数料

---

**ファイル名**: `LP_STRUCTURE_FINAL.md`
**作成日**: 2024-10-24
**バージョン**: 1.0
**ステータス**: 実装準備完了
