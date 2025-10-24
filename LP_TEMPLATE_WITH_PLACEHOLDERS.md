# シャンプーLP 構成設計書（HTMLプレースホルダー版）
## 汎用テンプレート準拠 × 画像配置明記版

---

## 🎯 プロジェクト概要

**商品**: プレミアムボタニカルシャンプー
**ターゲット**: 30〜50代女性、髪のダメージ・悩みを抱える層
**目的**: EC購入誘導（定期便契約）
**デザイン方針**: 画像重視 × スクロールアニメーション × 高級感

**LP構成**: 汎用テンプレート11セクション準拠

---

## 📐 全体構成（11セクション）

```
1. ファーストビュー（Hero Section）
2. 共感セクション（悩み提示）
3. ソリューション紹介（解決策・成分）
4. ビフォーアフター・成果紹介
5. 特徴・強み（差別化ポイント）
6. サービス詳細・プラン案内（商品プラン）
7. お客様の声・口コミ
8. よくある質問（FAQ）
9. 料金・比較表セクション
10. アクセス・店舗案内（→配送情報に変更）
11. フッターCTA（最終行動促進）
```

---

## 📄 セクション別詳細構成

---

### セクション1: ファーストビュー（Hero Section）

#### 目的
訪問直後3秒で「何の商品か」「誰のためか」「どう良くなるか」を伝える

#### 構成要素
- メインキャッチコピー
- サブコピー
- 商品ビジュアル（3D回転）
- CTAボタン（2箇所）
- スクロール促進アイコン

#### HTMLプレースホルダー
```html
<section id="hero" class="hero-section">
  <!-- 背景画像 -->
  <div class="hero-background">
    <!-- 📷 PLACEHOLDER: hero-bg.jpg -->
    <img src="./images/placeholders/hero-bg.jpg"
         alt="美しくなびく髪"
         class="hero-bg-image parallax">
  </div>

  <div class="hero-content">
    <!-- メインコピー -->
    <h1 class="hero-title">
      サロン級の仕上がりを、<br>
      毎日自宅で。
    </h1>

    <!-- サブコピー -->
    <p class="hero-subtitle">
      5つの厳選植物成分が、髪を内側から補修
    </p>

    <!-- 商品ビジュアル -->
    <div class="hero-product">
      <!-- 📷 PLACEHOLDER: product-bottle-main.png -->
      <img src="./images/placeholders/product-bottle-main.png"
           alt="プレミアムボタニカルシャンプー"
           class="product-bottle animate-rotate">
    </div>

    <!-- CTA -->
    <div class="hero-cta">
      <button class="btn btn-primary btn-large">
        今すぐ試す【初回30%OFF】
      </button>
      <p class="hero-note">※30日間返金保証付き</p>
    </div>

    <!-- スクロール促進 -->
    <div class="scroll-indicator">
      <!-- 📷 PLACEHOLDER: scroll-down-icon.svg -->
      <img src="./images/placeholders/scroll-down-icon.svg"
           alt="スクロール"
           class="scroll-icon bounce">
    </div>
  </div>

  <!-- 固定ヘッダーCTA -->
  <header class="header-fixed">
    <nav class="header-nav">
      <div class="header-logo">BOTANICAL PURE</div>
      <button class="btn btn-primary btn-small">購入する</button>
    </nav>
  </header>
</section>
```

#### 必要画像（3点）
| ID | ファイル名 | サイズ | 形式 | 用途 |
|----|-----------|--------|------|------|
| H01 | hero-bg.jpg | 1920×1080px | WebP/JPG | 背景ビジュアル |
| H02 | product-bottle-main.png | 1000×1500px | PNG（透過） | メイン商品画像 |
| H03 | scroll-down-icon.svg | 64×64px | SVG | スクロール促進 |

---

### セクション2: 共感セクション（悩み提示）

#### 目的
ターゲットの課題を明確化し「自分ごと化」させる

#### 構成要素
- セクション見出し
- 悩みリスト（5項目）
- アイコン付き箇条書き
- 対比ブロック

#### HTMLプレースホルダー
```html
<section id="problems" class="problems-section">
  <div class="container">
    <!-- 見出し -->
    <h2 class="section-title">
      こんな髪の悩み、ありませんか？
    </h2>

    <!-- 悩みリスト -->
    <ul class="problems-list">
      <li class="problem-item fade-in-up">
        <!-- 📷 PLACEHOLDER: icon-problem-1.svg -->
        <img src="./images/placeholders/icon-problem-1.svg"
             alt="パサつき"
             class="problem-icon">
        <span class="problem-text">
          パサつき・広がりが気になる
        </span>
      </li>

      <li class="problem-item fade-in-up">
        <!-- 📷 PLACEHOLDER: icon-problem-2.svg -->
        <img src="./images/placeholders/icon-problem-2.svg"
             alt="頭皮の悩み"
             class="problem-icon">
        <span class="problem-text">
          頭皮の乾燥・かゆみがある
        </span>
      </li>

      <li class="problem-item fade-in-up">
        <!-- 📷 PLACEHOLDER: icon-problem-3.svg -->
        <img src="./images/placeholders/icon-problem-3.svg"
             alt="カラーダメージ"
             class="problem-icon">
        <span class="problem-text">
          カラーダメージで髪が傷んでいる
        </span>
      </li>

      <li class="problem-item fade-in-up">
        <!-- 📷 PLACEHOLDER: icon-problem-4.svg -->
        <img src="./images/placeholders/icon-problem-4.svg"
             alt="ボリューム不足"
             class="problem-icon">
        <span class="problem-text">
          ボリューム不足でペタンコ
        </span>
      </li>

      <li class="problem-item fade-in-up">
        <!-- 📷 PLACEHOLDER: icon-problem-5.svg -->
        <img src="./images/placeholders/icon-problem-5.svg"
             alt="スタイリングに時間がかかる"
             class="problem-icon">
        <span class="problem-text">
          朝のスタイリングに時間がかかる
        </span>
      </li>
    </ul>

    <!-- 対比ブロック -->
    <div class="problems-solution">
      <p class="solution-text">
        そんなあなたに、<br>
        <strong>プレミアムボタニカルシャンプー</strong>が選ばれています
      </p>
      <!-- 📷 PLACEHOLDER: arrow-down.svg -->
      <img src="./images/placeholders/arrow-down.svg"
           alt="矢印"
           class="arrow-icon">
    </div>
  </div>
</section>
```

#### 必要画像（6点）
| ID | ファイル名 | サイズ | 形式 | 用途 |
|----|-----------|--------|------|------|
| P01 | icon-problem-1.svg | 128×128px | SVG | パサつきアイコン |
| P02 | icon-problem-2.svg | 128×128px | SVG | 頭皮悩みアイコン |
| P03 | icon-problem-3.svg | 128×128px | SVG | ダメージアイコン |
| P04 | icon-problem-4.svg | 128×128px | SVG | ボリュームアイコン |
| P05 | icon-problem-5.svg | 128×128px | SVG | スタイリングアイコン |
| P06 | arrow-down.svg | 64×64px | SVG | 矢印アイコン |

---

### セクション3: ソリューション紹介（解決策・成分）

#### 目的
「どうやって悩みを解決するのか」を図解で説明

#### 構成要素
- セクション見出し
- フローチャート（Before→Process→After）
- 5つの成分紹介
- 泡立ちイメージ

#### HTMLプレースホルダー
```html
<section id="solution" class="solution-section">
  <div class="container">
    <!-- 見出し -->
    <h2 class="section-title">
      5つの厳選植物成分が解決します
    </h2>

    <!-- フローチャート -->
    <div class="solution-flow">
      <!-- 📷 PLACEHOLDER: flowchart-solution.svg -->
      <img src="./images/placeholders/flowchart-solution.svg"
           alt="Before Process After フロー"
           class="flowchart">
    </div>

    <!-- 成分紹介 -->
    <div class="ingredients-grid">
      <!-- 成分1 -->
      <div class="ingredient-card">
        <!-- 📷 PLACEHOLDER: ingredient-argan.png -->
        <img src="./images/placeholders/ingredient-argan.png"
             alt="アルガンオイル"
             class="ingredient-icon">
        <h3 class="ingredient-name">アルガンオイル</h3>
        <p class="ingredient-effect">保湿・ツヤ出し</p>
      </div>

      <!-- 成分2 -->
      <div class="ingredient-card">
        <!-- 📷 PLACEHOLDER: ingredient-camellia.png -->
        <img src="./images/placeholders/ingredient-camellia.png"
             alt="ツバキ種子油"
             class="ingredient-icon">
        <h3 class="ingredient-name">ツバキ種子油</h3>
        <p class="ingredient-effect">髪の補修・保護</p>
      </div>

      <!-- 成分3 -->
      <div class="ingredient-card">
        <!-- 📷 PLACEHOLDER: ingredient-jojoba.png -->
        <img src="./images/placeholders/ingredient-jojoba.png"
             alt="ホホバオイル"
             class="ingredient-icon">
        <h3 class="ingredient-name">ホホバオイル</h3>
        <p class="ingredient-effect">頭皮ケア</p>
      </div>

      <!-- 成分4 -->
      <div class="ingredient-card">
        <!-- 📷 PLACEHOLDER: ingredient-shea.png -->
        <img src="./images/placeholders/ingredient-shea.png"
             alt="シアバター"
             class="ingredient-icon">
        <h3 class="ingredient-name">シアバター</h3>
        <p class="ingredient-effect">しっとり保湿</p>
      </div>

      <!-- 成分5 -->
      <div class="ingredient-card">
        <!-- 📷 PLACEHOLDER: ingredient-rosemary.png -->
        <img src="./images/placeholders/ingredient-rosemary.png"
             alt="ローズマリー"
             class="ingredient-icon">
        <h3 class="ingredient-name">ローズマリー</h3>
        <p class="ingredient-effect">頭皮環境を整える</p>
      </div>
    </div>

    <!-- 泡立ちイメージ -->
    <div class="foam-section">
      <h3 class="foam-title">微細な泡が髪1本1本を包み込む</h3>
      <!-- 📷 PLACEHOLDER: foam-texture.jpg -->
      <img src="./images/placeholders/foam-texture.jpg"
           alt="泡立ちイメージ"
           class="foam-image">
    </div>
  </div>
</section>
```

#### 必要画像（7点）
| ID | ファイル名 | サイズ | 形式 | 用途 |
|----|-----------|--------|------|------|
| S01 | flowchart-solution.svg | 1200×400px | SVG | フローチャート |
| S02 | ingredient-argan.png | 200×200px | PNG | アルガンアイコン |
| S03 | ingredient-camellia.png | 200×200px | PNG | ツバキアイコン |
| S04 | ingredient-jojoba.png | 200×200px | PNG | ホホバアイコン |
| S05 | ingredient-shea.png | 200×200px | PNG | シアバターアイコン |
| S06 | ingredient-rosemary.png | 200×200px | PNG | ローズマリーアイコン |
| S07 | foam-texture.jpg | 1000×600px | WebP/JPG | 泡テクスチャ |

---

### セクション4: ビフォーアフター・成果紹介

#### 目的
視覚的に「変化」を見せ、期待を現実的に感じさせる

#### 構成要素
- セクション見出し
- 比較スライダー（3例）
- 効果説明
- 注意書き

#### HTMLプレースホルダー
```html
<section id="results" class="results-section">
  <div class="container">
    <!-- 見出し -->
    <h2 class="section-title">
      たった1週間でここまで変わる！
    </h2>

    <!-- Before/After 1: くせ毛 -->
    <div class="comparison-slider">
      <div class="comparison-images">
        <!-- 📷 PLACEHOLDER: before-1.jpg -->
        <img src="./images/placeholders/before-1.jpg"
             alt="使用前: くせ毛"
             class="comparison-before">
        <!-- 📷 PLACEHOLDER: after-1.jpg -->
        <img src="./images/placeholders/after-1.jpg"
             alt="使用後: くせ毛"
             class="comparison-after">
      </div>
      <div class="comparison-handle">
        <div class="handle-bar"></div>
      </div>
      <div class="comparison-info">
        <p class="user-info">30代女性 / くせ毛タイプ</p>
        <p class="usage-period">使用期間: 1週間</p>
      </div>
    </div>

    <!-- Before/After 2: 細毛 -->
    <div class="comparison-slider">
      <div class="comparison-images">
        <!-- 📷 PLACEHOLDER: before-2.jpg -->
        <img src="./images/placeholders/before-2.jpg"
             alt="使用前: 細毛"
             class="comparison-before">
        <!-- 📷 PLACEHOLDER: after-2.jpg -->
        <img src="./images/placeholders/after-2.jpg"
             alt="使用後: 細毛"
             class="comparison-after">
      </div>
      <div class="comparison-handle">
        <div class="handle-bar"></div>
      </div>
      <div class="comparison-info">
        <p class="user-info">40代女性 / 細毛タイプ</p>
        <p class="usage-period">使用期間: 2週間</p>
      </div>
    </div>

    <!-- Before/After 3: ダメージヘア -->
    <div class="comparison-slider">
      <div class="comparison-images">
        <!-- 📷 PLACEHOLDER: before-3.jpg -->
        <img src="./images/placeholders/before-3.jpg"
             alt="使用前: ダメージヘア"
             class="comparison-before">
        <!-- 📷 PLACEHOLDER: after-3.jpg -->
        <img src="./images/placeholders/after-3.jpg"
             alt="使用後: ダメージヘア"
             class="comparison-after">
      </div>
      <div class="comparison-handle">
        <div class="handle-bar"></div>
      </div>
      <div class="comparison-info">
        <p class="user-info">35代女性 / カラーダメージ</p>
        <p class="usage-period">使用期間: 1週間</p>
      </div>
    </div>

    <!-- 注意書き -->
    <p class="disclaimer">※効果には個人差があります</p>
  </div>
</section>
```

#### 必要画像（6点）
| ID | ファイル名 | サイズ | 形式 | 用途 |
|----|-----------|--------|------|------|
| BA01 | before-1.jpg | 800×1000px | WebP/JPG | くせ毛Before |
| BA02 | after-1.jpg | 800×1000px | WebP/JPG | くせ毛After |
| BA03 | before-2.jpg | 800×1000px | WebP/JPG | 細毛Before |
| BA04 | after-2.jpg | 800×1000px | WebP/JPG | 細毛After |
| BA05 | before-3.jpg | 800×1000px | WebP/JPG | ダメージBefore |
| BA06 | after-3.jpg | 800×1000px | WebP/JPG | ダメージAfter |

---

### セクション5: 特徴・強み（差別化ポイント）

#### 目的
競合との差別化・信頼性・専門性を訴求

#### 構成要素
- セクション見出し
- 3つの理由カード
- 専門家写真
- 品質バッジ

#### HTMLプレースホルダー
```html
<section id="features" class="features-section">
  <div class="container">
    <!-- 見出し -->
    <h2 class="section-title">
      当商品が選ばれる3つの理由
    </h2>

    <!-- 3つの理由 -->
    <div class="features-grid">
      <!-- 理由1 -->
      <div class="feature-card">
        <!-- 📷 PLACEHOLDER: feature-icon-1.svg -->
        <img src="./images/placeholders/feature-icon-1.svg"
             alt="サロン品質"
             class="feature-icon">
        <h3 class="feature-title">サロン品質の処方</h3>
        <p class="feature-description">
          プロの美容師監修<br>
          業務用レベルの成分配合
        </p>
      </div>

      <!-- 理由2 -->
      <div class="feature-card">
        <!-- 📷 PLACEHOLDER: feature-icon-2.svg -->
        <img src="./images/placeholders/feature-icon-2.svg"
             alt="無添加処方"
             class="feature-icon">
        <h3 class="feature-title">無添加・安心処方</h3>
        <p class="feature-description">
          パラベンフリー<br>
          シリコンフリー
        </p>
      </div>

      <!-- 理由3 -->
      <div class="feature-card">
        <!-- 📷 PLACEHOLDER: feature-icon-3.svg -->
        <img src="./images/placeholders/feature-icon-3.svg"
             alt="天然アロマ"
             class="feature-icon">
        <h3 class="feature-title">天然アロマの香り</h3>
        <p class="feature-description">
          ラベンダー×ローズマリー<br>
          リラックス効果
        </p>
      </div>
    </div>

    <!-- 専門家からのメッセージ -->
    <div class="expert-message">
      <!-- 📷 PLACEHOLDER: expert-photo.jpg -->
      <img src="./images/placeholders/expert-photo.jpg"
           alt="開発者"
           class="expert-photo">
      <div class="expert-text">
        <p class="expert-title">開発者からのメッセージ</p>
        <p class="expert-description">
          「3年の歳月をかけて開発した、髪と頭皮に優しい処方です。」
        </p>
        <p class="expert-name">研究開発部 田中恵美</p>
      </div>
    </div>

    <!-- 品質バッジ -->
    <div class="quality-badges">
      <!-- 📷 PLACEHOLDER: badge-quality-1.png -->
      <img src="./images/placeholders/badge-quality-1.png"
           alt="品質保証"
           class="badge">
      <!-- 📷 PLACEHOLDER: badge-quality-2.png -->
      <img src="./images/placeholders/badge-quality-2.png"
           alt="無添加"
           class="badge">
    </div>
  </div>
</section>
```

#### 必要画像（7点）
| ID | ファイル名 | サイズ | 形式 | 用途 |
|----|-----------|--------|------|------|
| F01 | feature-icon-1.svg | 128×128px | SVG | サロン品質アイコン |
| F02 | feature-icon-2.svg | 128×128px | SVG | 無添加アイコン |
| F03 | feature-icon-3.svg | 128×128px | SVG | アロマアイコン |
| F04 | expert-photo.jpg | 500×500px | WebP/JPG | 専門家写真 |
| F05 | badge-quality-1.png | 150×150px | PNG | 品質バッジ1 |
| F06 | badge-quality-2.png | 150×150px | PNG | 品質バッジ2 |

---

### セクション6: サービス詳細・プラン案内（商品プラン）

#### 目的
「自分に合うプラン」を見つけやすくする

#### 構成要素
- セクション見出し
- プラン比較カード（3種）
- 各プランの説明
- CTAボタン

#### HTMLプレースホルダー
```html
<section id="plans" class="plans-section">
  <div class="container">
    <!-- 見出し -->
    <h2 class="section-title">
      あなたにぴったりのプランを
    </h2>

    <!-- プラン比較 -->
    <div class="plans-grid">
      <!-- 単品プラン -->
      <div class="plan-card">
        <div class="plan-header">
          <!-- 📷 PLACEHOLDER: plan-icon-single.svg -->
          <img src="./images/placeholders/plan-icon-single.svg"
               alt="単品購入"
               class="plan-icon">
          <h3 class="plan-name">単品購入</h3>
        </div>
        <div class="plan-price">
          <span class="price-amount">3,980円</span>
          <span class="price-tax">(税込)</span>
        </div>
        <ul class="plan-features">
          <li>1本（500ml）</li>
          <li>送料: 550円</li>
          <li>購入回数: 1回</li>
        </ul>
        <button class="btn btn-secondary">購入する</button>
      </div>

      <!-- 定期便プラン（おすすめ） -->
      <div class="plan-card plan-recommended">
        <!-- 📷 PLACEHOLDER: badge-recommended.svg -->
        <img src="./images/placeholders/badge-recommended.svg"
             alt="おすすめ"
             class="badge-recommended">
        <div class="plan-header">
          <!-- 📷 PLACEHOLDER: plan-icon-subscription.svg -->
          <img src="./images/placeholders/plan-icon-subscription.svg"
               alt="定期便"
               class="plan-icon">
          <h3 class="plan-name">定期便</h3>
        </div>
        <div class="plan-price">
          <span class="price-original">3,980円</span>
          <span class="price-amount">2,980円</span>
          <span class="price-discount">初回30%OFF</span>
        </div>
        <ul class="plan-features">
          <li>1本（500ml）毎月お届け</li>
          <li>送料: 無料</li>
          <li>次回以降も10%OFF</li>
          <li>いつでも解約OK</li>
        </ul>
        <button class="btn btn-primary">購入する</button>
      </div>

      <!-- まとめ買いプラン -->
      <div class="plan-card">
        <div class="plan-header">
          <!-- 📷 PLACEHOLDER: plan-icon-bulk.svg -->
          <img src="./images/placeholders/plan-icon-bulk.svg"
               alt="まとめ買い"
               class="plan-icon">
          <h3 class="plan-name">まとめ買い</h3>
        </div>
        <div class="plan-price">
          <span class="price-amount">8,940円</span>
          <span class="price-tax">(税込)</span>
        </div>
        <ul class="plan-features">
          <li>3本セット</li>
          <li>送料: 無料</li>
          <li>1本あたり2,980円</li>
        </ul>
        <button class="btn btn-secondary">購入する</button>
      </div>
    </div>

    <!-- 保証マーク -->
    <div class="guarantee-section">
      <!-- 📷 PLACEHOLDER: icon-guarantee.svg -->
      <img src="./images/placeholders/icon-guarantee.svg"
           alt="30日間返金保証"
           class="guarantee-icon">
      <p class="guarantee-text">30日間返金保証付き</p>
    </div>
  </div>
</section>
```

#### 必要画像（5点）
| ID | ファイル名 | サイズ | 形式 | 用途 |
|----|-----------|--------|------|------|
| PL01 | plan-icon-single.svg | 100×100px | SVG | 単品アイコン |
| PL02 | plan-icon-subscription.svg | 100×100px | SVG | 定期便アイコン |
| PL03 | plan-icon-bulk.svg | 100×100px | SVG | まとめ買いアイコン |
| PL04 | badge-recommended.svg | 120×40px | SVG | おすすめバッジ |
| PL05 | icon-guarantee.svg | 80×80px | SVG | 返金保証アイコン |

---

### セクション7: お客様の声・口コミ

#### 目的
第三者のリアルな感想で信頼を補強

#### 構成要素
- セクション見出し
- レビューカード（3〜5件）
- 星評価
- 顔写真・年代

#### HTMLプレースホルダー
```html
<section id="reviews" class="reviews-section">
  <div class="container">
    <!-- 見出し -->
    <h2 class="section-title">
      実際に体験されたお客様の声
    </h2>

    <!-- レビューカルーセル -->
    <div class="reviews-carousel">
      <!-- レビュー1 -->
      <div class="review-card">
        <!-- 📷 PLACEHOLDER: customer-1.jpg -->
        <img src="./images/placeholders/customer-1.jpg"
             alt="お客様の声1"
             class="customer-photo">
        <div class="review-stars">
          ★★★★★
        </div>
        <p class="review-text">
          「髪質が変わって驚きました！朝のスタイリングが本当に楽になりました。」
        </p>
        <p class="customer-info">30代女性 A.Kさん</p>
      </div>

      <!-- レビュー2 -->
      <div class="review-card">
        <!-- 📷 PLACEHOLDER: customer-2.jpg -->
        <img src="./images/placeholders/customer-2.jpg"
             alt="お客様の声2"
             class="customer-photo">
        <div class="review-stars">
          ★★★★★
        </div>
        <p class="review-text">
          「香りが良くてリラックスできます。家族全員で使っています。リピート決定です！」
        </p>
        <p class="customer-info">40代女性 M.Tさん</p>
      </div>

      <!-- レビュー3 -->
      <div class="review-card">
        <!-- 📷 PLACEHOLDER: customer-3.jpg -->
        <img src="./images/placeholders/customer-3.jpg"
             alt="お客様の声3"
             class="customer-photo">
        <div class="review-stars">
          ★★★★★
        </div>
        <p class="review-text">
          「パサつきが改善されました。ずっと探していたシャンプーです。」
        </p>
        <p class="customer-info">35代女性 Y.Sさん</p>
      </div>
    </div>

    <!-- レビューサイトリンク -->
    <div class="review-links">
      <p>その他のレビューを見る</p>
      <!-- 📷 PLACEHOLDER: logo-review-site.png -->
      <a href="#" class="review-link">
        <img src="./images/placeholders/logo-review-site.png"
             alt="レビューサイト"
             class="review-logo">
      </a>
    </div>
  </div>
</section>
```

#### 必要画像（4点）
| ID | ファイル名 | サイズ | 形式 | 用途 |
|----|-----------|--------|------|------|
| R01 | customer-1.jpg | 300×300px | WebP/JPG | お客様写真1 |
| R02 | customer-2.jpg | 300×300px | WebP/JPG | お客様写真2 |
| R03 | customer-3.jpg | 300×300px | WebP/JPG | お客様写真3 |
| R04 | logo-review-site.png | 200×60px | PNG | レビューサイトロゴ |

---

### セクション8: よくある質問（FAQ）

#### 目的
購入前の不安を解消

#### 構成要素
- セクション見出し
- Q&A形式（5〜7項目）
- アコーディオン

#### HTMLプレースホルダー
```html
<section id="faq" class="faq-section">
  <div class="container">
    <!-- 見出し -->
    <h2 class="section-title">
      よくあるご質問
    </h2>

    <!-- FAQ リスト -->
    <div class="faq-list">
      <!-- Q1 -->
      <div class="faq-item">
        <div class="faq-question">
          <!-- 📷 PLACEHOLDER: icon-q.svg -->
          <img src="./images/placeholders/icon-q.svg"
               alt="Q"
               class="faq-icon">
          <h3>香りはどんな感じですか？</h3>
          <span class="faq-toggle">▼</span>
        </div>
        <div class="faq-answer">
          <!-- 📷 PLACEHOLDER: icon-a.svg -->
          <img src="./images/placeholders/icon-a.svg"
               alt="A"
               class="faq-icon">
          <p>ラベンダーとローズマリーの天然アロマです。強すぎず優しい香りで、リラックス効果があります。</p>
        </div>
      </div>

      <!-- Q2 -->
      <div class="faq-item">
        <div class="faq-question">
          <img src="./images/placeholders/icon-q.svg" alt="Q" class="faq-icon">
          <h3>どのくらいで効果が出ますか？</h3>
          <span class="faq-toggle">▼</span>
        </div>
        <div class="faq-answer">
          <img src="./images/placeholders/icon-a.svg" alt="A" class="faq-icon">
          <p>多くの方が1週間で髪質の変化を実感されています。継続使用でさらに効果が高まります。</p>
        </div>
      </div>

      <!-- Q3 -->
      <div class="faq-item">
        <div class="faq-question">
          <img src="./images/placeholders/icon-q.svg" alt="Q" class="faq-icon">
          <h3>詰め替え用はありますか？</h3>
          <span class="faq-toggle">▼</span>
        </div>
        <div class="faq-answer">
          <img src="./images/placeholders/icon-a.svg" alt="A" class="faq-icon">
          <p>はい、エコパック（詰め替え用）をご用意しています。環境にも配慮しています。</p>
        </div>
      </div>

      <!-- Q4 -->
      <div class="faq-item">
        <div class="faq-question">
          <img src="./images/placeholders/icon-q.svg" alt="Q" class="faq-icon">
          <h3>定期便はいつでも解約できますか？</h3>
          <span class="faq-toggle">▼</span>
        </div>
        <div class="faq-answer">
          <img src="./images/placeholders/icon-a.svg" alt="A" class="faq-icon">
          <p>はい、いつでも解約可能です。回数縛りはありません。お電話またはマイページから簡単に手続きできます。</p>
        </div>
      </div>

      <!-- Q5 -->
      <div class="faq-item">
        <div class="faq-question">
          <img src="./images/placeholders/icon-q.svg" alt="Q" class="faq-icon">
          <h3>敏感肌でも使えますか？</h3>
          <span class="faq-toggle">▼</span>
        </div>
        <div class="faq-answer">
          <img src="./images/placeholders/icon-a.svg" alt="A" class="faq-icon">
          <p>パッチテスト済みですが、心配な方は事前にパッチテストをお勧めします。万が一肌に合わない場合は、30日間返金保証をご利用ください。</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

#### 必要画像（2点）
| ID | ファイル名 | サイズ | 形式 | 用途 |
|----|-----------|--------|------|------|
| FAQ01 | icon-q.svg | 48×48px | SVG | Qアイコン |
| FAQ02 | icon-a.svg | 48×48px | SVG | Aアイコン |

---

### セクション9: 料金・比較表セクション

#### 目的
価格に透明性を持たせ、安心感と納得感を与える

#### 構成要素
- セクション見出し
- 価格比較表
- 注意書き（税込・送料等）

#### HTMLプレースホルダー
```html
<section id="pricing" class="pricing-section">
  <div class="container">
    <!-- 見出し -->
    <h2 class="section-title">
      料金のご案内
    </h2>

    <!-- 価格テーブル -->
    <div class="pricing-table">
      <table>
        <thead>
          <tr>
            <th>プラン</th>
            <th>価格（税込）</th>
            <th>送料</th>
            <th>備考</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>単品購入</td>
            <td>3,980円</td>
            <td>550円</td>
            <td>-</td>
          </tr>
          <tr class="highlight">
            <td>定期便（初回）</td>
            <td><strong>2,980円</strong></td>
            <td><strong>無料</strong></td>
            <td>30%OFF</td>
          </tr>
          <tr>
            <td>定期便（2回目以降）</td>
            <td>3,580円</td>
            <td>無料</td>
            <td>10%OFF</td>
          </tr>
          <tr>
            <td>まとめ買い（3本）</td>
            <td>8,940円</td>
            <td>無料</td>
            <td>1本あたり2,980円</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 保証・特典アイコン -->
    <div class="pricing-benefits">
      <div class="benefit-item">
        <!-- 📷 PLACEHOLDER: icon-free-shipping.svg -->
        <img src="./images/placeholders/icon-free-shipping.svg"
             alt="送料無料"
             class="benefit-icon">
        <p>送料無料<br><small>（定期便・まとめ買い）</small></p>
      </div>

      <div class="benefit-item">
        <!-- 📷 PLACEHOLDER: icon-money-back.svg -->
        <img src="./images/placeholders/icon-money-back.svg"
             alt="返金保証"
             class="benefit-icon">
        <p>30日間<br>返金保証</p>
      </div>

      <div class="benefit-item">
        <!-- 📷 PLACEHOLDER: icon-cancel-anytime.svg -->
        <img src="./images/placeholders/icon-cancel-anytime.svg"
             alt="いつでも解約"
             class="benefit-icon">
        <p>いつでも<br>解約OK</p>
      </div>
    </div>
  </div>
</section>
```

#### 必要画像（3点）
| ID | ファイル名 | サイズ | 形式 | 用途 |
|----|-----------|--------|------|------|
| PR01 | icon-free-shipping.svg | 80×80px | SVG | 送料無料アイコン |
| PR02 | icon-money-back.svg | 80×80px | SVG | 返金保証アイコン |
| PR03 | icon-cancel-anytime.svg | 80×80px | SVG | 解約自由アイコン |

---

### セクション10: アクセス・店舗案内（→配送情報）

#### 目的
配送に関する情報を明確にし、購入ハードルを下げる

#### 構成要素
- セクション見出し
- 配送エリアマップ
- 配送方法・お届け日数
- 支払い方法
- お問い合わせ情報

#### HTMLプレースホルダー
```html
<section id="shipping" class="shipping-section">
  <div class="container">
    <!-- 見出し -->
    <h2 class="section-title">
      ご購入・配送について
    </h2>

    <!-- 配送エリア -->
    <div class="shipping-area">
      <h3 class="subsection-title">配送エリア</h3>
      <!-- 📷 PLACEHOLDER: map-japan.svg -->
      <img src="./images/placeholders/map-japan.svg"
           alt="全国配送対応"
           class="shipping-map">
      <p class="shipping-note">全国配送対応</p>
    </div>

    <!-- 配送情報グリッド -->
    <div class="shipping-info-grid">
      <!-- 配送方法 -->
      <div class="shipping-info-item">
        <!-- 📷 PLACEHOLDER: icon-delivery-truck.svg -->
        <img src="./images/placeholders/icon-delivery-truck.svg"
             alt="配送方法"
             class="shipping-icon">
        <h4>配送方法</h4>
        <p>ヤマト運輸・佐川急便<br>※お届け先により選択</p>
      </div>

      <!-- お届け日数 -->
      <div class="shipping-info-item">
        <!-- 📷 PLACEHOLDER: icon-calendar.svg -->
        <img src="./images/placeholders/icon-calendar.svg"
             alt="お届け日数"
             class="shipping-icon">
        <h4>お届け日数</h4>
        <p>ご注文から<br>2〜5営業日</p>
      </div>

      <!-- 支払い方法 -->
      <div class="shipping-info-item">
        <!-- 📷 PLACEHOLDER: icon-payment.svg -->
        <img src="./images/placeholders/icon-payment.svg"
             alt="支払い方法"
             class="shipping-icon">
        <h4>支払い方法</h4>
        <div class="payment-methods">
          <!-- 📷 PLACEHOLDER: logo-credit-cards.png -->
          <img src="./images/placeholders/logo-credit-cards.png"
               alt="クレジットカード"
               class="payment-logo">
          <!-- 📷 PLACEHOLDER: logo-amazon-pay.png -->
          <img src="./images/placeholders/logo-amazon-pay.png"
               alt="Amazon Pay"
               class="payment-logo">
          <p>代金引換・後払いも可</p>
        </div>
      </div>
    </div>

    <!-- お問い合わせ -->
    <div class="contact-section">
      <h3 class="subsection-title">お問い合わせ</h3>
      <div class="contact-info">
        <!-- 📷 PLACEHOLDER: icon-phone.svg -->
        <img src="./images/placeholders/icon-phone.svg"
             alt="電話"
             class="contact-icon">
        <div class="contact-details">
          <p class="contact-phone">0120-XXX-XXX</p>
          <p class="contact-hours">受付時間: 10:00〜18:00（平日）</p>
          <p class="contact-email">メール: support@example.com</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

#### 必要画像（8点）
| ID | ファイル名 | サイズ | 形式 | 用途 |
|----|-----------|--------|------|------|
| SH01 | map-japan.svg | 800×600px | SVG | 日本地図 |
| SH02 | icon-delivery-truck.svg | 80×80px | SVG | 配送トラック |
| SH03 | icon-calendar.svg | 80×80px | SVG | カレンダー |
| SH04 | icon-payment.svg | 80×80px | SVG | 支払いアイコン |
| SH05 | logo-credit-cards.png | 200×60px | PNG | クレジットカードロゴ |
| SH06 | logo-amazon-pay.png | 150×50px | PNG | Amazon Payロゴ |
| SH07 | icon-phone.svg | 64×64px | SVG | 電話アイコン |

---

### セクション11: フッターCTA（最終行動促進）

#### 目的
最終的なアクションを明確にし、購入を後押しする

#### 構成要素
- 最終メッセージ
- 商品画像
- 特典表示
- 大きなCTAボタン
- フッターリンク

#### HTMLプレースホルダー
```html
<section id="footer-cta" class="footer-cta-section">
  <div class="container">
    <!-- 最終メッセージ -->
    <h2 class="final-message">
      まずは1本から、理想の髪へ
    </h2>

    <!-- 商品画像 -->
    <div class="final-product">
      <!-- 📷 PLACEHOLDER: product-footer.png -->
      <img src="./images/placeholders/product-footer.png"
           alt="プレミアムボタニカルシャンプー"
           class="final-product-image">
    </div>

    <!-- 特典表示 -->
    <div class="final-offer">
      <p class="offer-label">初回限定 30%OFF</p>
      <p class="offer-price">
        <span class="price-original">通常 3,980円</span>
        <span class="price-special">→ 2,980円</span>
      </p>
    </div>

    <!-- CTAボタン -->
    <div class="final-cta">
      <button class="btn btn-primary btn-huge">
        今すぐ購入する
      </button>
      <button class="btn btn-secondary btn-large">
        電話で相談する（0120-XXX-XXX）
      </button>
    </div>

    <!-- 保証表示 -->
    <div class="final-guarantees">
      <div class="guarantee-item">
        <!-- 📷 PLACEHOLDER: icon-guarantee-footer.svg -->
        <img src="./images/placeholders/icon-guarantee-footer.svg"
             alt="保証"
             class="guarantee-icon-small">
        <p>30日間返金保証</p>
      </div>
      <div class="guarantee-item">
        <!-- 📷 PLACEHOLDER: icon-shipping-footer.svg -->
        <img src="./images/placeholders/icon-shipping-footer.svg"
             alt="送料無料"
             class="guarantee-icon-small">
        <p>送料無料</p>
      </div>
      <div class="guarantee-item">
        <!-- 📷 PLACEHOLDER: icon-cancel-footer.svg -->
        <img src="./images/placeholders/icon-cancel-footer.svg"
             alt="解約自由"
             class="guarantee-icon-small">
        <p>いつでも解約OK</p>
      </div>
    </div>
  </div>
</section>

<!-- フッター -->
<footer class="site-footer">
  <div class="container">
    <!-- 会社ロゴ -->
    <div class="footer-logo">
      <!-- 📷 PLACEHOLDER: logo-footer.svg -->
      <img src="./images/placeholders/logo-footer.svg"
           alt="BOTANICAL PURE"
           class="footer-logo-image">
    </div>

    <!-- フッターリンク -->
    <nav class="footer-nav">
      <a href="#">会社概要</a>
      <a href="#">特定商取引法</a>
      <a href="#">プライバシーポリシー</a>
      <a href="#">お問い合わせ</a>
      <a href="#">よくある質問</a>
    </nav>

    <!-- SNSリンク -->
    <div class="footer-social">
      <!-- 📷 PLACEHOLDER: icon-instagram.svg -->
      <a href="#">
        <img src="./images/placeholders/icon-instagram.svg"
             alt="Instagram"
             class="social-icon">
      </a>
      <!-- 📷 PLACEHOLDER: icon-twitter.svg -->
      <a href="#">
        <img src="./images/placeholders/icon-twitter.svg"
             alt="Twitter"
             class="social-icon">
      </a>
      <!-- 📷 PLACEHOLDER: icon-line.svg -->
      <a href="#">
        <img src="./images/placeholders/icon-line.svg"
             alt="LINE"
             class="social-icon">
      </a>
    </div>

    <!-- コピーライト -->
    <p class="copyright">
      © 2024 BOTANICAL PURE. All Rights Reserved.
    </p>
  </div>
</footer>
```

#### 必要画像（8点）
| ID | ファイル名 | サイズ | 形式 | 用途 |
|----|-----------|--------|------|------|
| FT01 | product-footer.png | 600×900px | PNG（透過） | フッター商品画像 |
| FT02 | icon-guarantee-footer.svg | 48×48px | SVG | 保証アイコン小 |
| FT03 | icon-shipping-footer.svg | 48×48px | SVG | 送料無料小 |
| FT04 | icon-cancel-footer.svg | 48×48px | SVG | 解約自由小 |
| FT05 | logo-footer.svg | 200×60px | SVG | フッターロゴ |
| FT06 | icon-instagram.svg | 32×32px | SVG | Instagram |
| FT07 | icon-twitter.svg | 32×32px | SVG | Twitter |
| FT08 | icon-line.svg | 32×32px | SVG | LINE |

---

## 📊 画像一覧表（全59点）

### カテゴリ別サマリー

| カテゴリ | 画像点数 | 形式 |
|---------|---------|------|
| Hero（ヒーロー） | 3点 | JPG/PNG/SVG |
| Problems（悩み） | 6点 | SVG |
| Solution（解決策） | 7点 | PNG/JPG/SVG |
| Before/After | 6点 | JPG |
| Features（特徴） | 6点 | JPG/PNG/SVG |
| Plans（プラン） | 5点 | SVG/PNG |
| Reviews（レビュー） | 4点 | JPG/PNG |
| FAQ | 2点 | SVG |
| Pricing（料金） | 3点 | SVG |
| Shipping（配送） | 7点 | SVG/PNG |
| Footer CTA | 8点 | PNG/SVG |
| **合計** | **59点** | - |

---

## 📁 推奨ディレクトリ構造

```
/selfLP
├── index.html
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── layout.css
│   ├── sections.css
│   └── animations.css
├── js/
│   ├── main.js
│   ├── scroll-animations.js
│   ├── comparison-slider.js
│   └── accordion.js
├── images/
│   ├── placeholders/          # 開発用プレースホルダー
│   │   ├── hero-bg.jpg
│   │   ├── product-bottle-main.png
│   │   └── ...（全59点）
│   └── final/                 # 本番用最適化画像
│       ├── hero-bg.webp
│       ├── hero-bg-fallback.jpg
│       └── ...
├── lib/
│   ├── gsap/
│   │   ├── gsap.min.js
│   │   └── ScrollTrigger.min.js
│   └── lenis/
│       └── lenis.min.js
└── docs/
    ├── LP_TEMPLATE_WITH_PLACEHOLDERS.md  # このファイル
    └── IMAGE_GENERATION_PROMPTS.md       # 画像生成プロンプト集
```

---

## 🎨 デザインシステム

### カラーパレット
```css
:root {
  --color-primary: #2D5F3F;      /* 深いグリーン */
  --color-accent: #D4AF37;       /* ゴールド */
  --color-bg: #FAF7F2;           /* クリーム */
  --color-text: #3E2723;         /* ダークブラウン */
  --color-white: #FFFFFF;
  --color-gray-light: #F5F5F5;
  --color-gray: #CCCCCC;
}
```

### タイポグラフィ
```css
:root {
  --font-serif: 'Noto Serif JP', serif;
  --font-sans: 'Noto Sans JP', sans-serif;

  --font-size-h1: clamp(2rem, 5vw, 3.5rem);
  --font-size-h2: clamp(1.5rem, 4vw, 2.5rem);
  --font-size-h3: clamp(1.25rem, 3vw, 1.75rem);
  --font-size-body: clamp(1rem, 2vw, 1.125rem);
}
```

### スペーシング
```css
:root {
  --spacing-xs: 0.5rem;   /* 8px */
  --spacing-sm: 1rem;     /* 16px */
  --spacing-md: 2rem;     /* 32px */
  --spacing-lg: 4rem;     /* 64px */
  --spacing-xl: 6rem;     /* 96px */
}
```

---

## ⚙️ 技術実装メモ

### アニメーションライブラリ
- **GSAP 3.x**: メインアニメーションエンジン
- **ScrollTrigger**: スクロール連動
- **Lenis**: スムーススクロール

### 必須機能
1. **比較スライダー**: Before/After用（ドラッグ可能）
2. **アコーディオン**: FAQ用
3. **カルーセル**: レビュー用
4. **モーダル**: 画像拡大表示用（オプション）

### パフォーマンス対策
- 画像遅延読み込み（Intersection Observer）
- WebP形式 + JPEGフォールバック
- CSSアニメーションのGPU最適化
- スクロールイベントのthrottle/debounce

---

## 📝 次のステップ

### Phase 1: 準備
- [ ] ディレクトリ構造作成
- [ ] プレースホルダー画像配置（仮画像）
- [ ] HTML基本構造実装

### Phase 2: スタイリング
- [ ] CSS変数定義
- [ ] 各セクションのスタイル実装
- [ ] レスポンシブ対応

### Phase 3: インタラクション
- [ ] GSAPアニメーション実装
- [ ] 比較スライダー実装
- [ ] アコーディオン実装

### Phase 4: 画像準備
- [ ] 画像生成プロンプトで画像作成
- [ ] 画像最適化（WebP変換、圧縮）
- [ ] 本番画像差し替え

### Phase 5: 最終調整
- [ ] クロスブラウザテスト
- [ ] パフォーマンステスト
- [ ] SEO最適化

---

## ⚠️ 重要な注意事項

### 法規制対応
- **薬機法**: 効果効能表現に注意（「治る」「生える」等はNG）
- **景品表示法**: 誇大広告禁止、Before/After注意書き必須
- **特定商取引法**: 事業者情報、返品条件を明記

### 必須記載事項
- 販売業者名
- 代表者名
- 所在地・連絡先
- 返品・交換条件
- 配送料・手数料
- プライバシーポリシー

---

**ファイル名**: `LP_TEMPLATE_WITH_PLACEHOLDERS.md`
**作成日**: 2024-10-24
**バージョン**: 1.0
**ステータス**: HTML実装準備完了
