/* ========================================
   Main JavaScript - GSAP + Lenis Animations
======================================== */

// ========================================
// 1. Lenis スムーススクロール初期化
// ========================================
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  smoothTouch: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// ========================================
// 2. GSAP ScrollTrigger登録
// ========================================
gsap.registerPlugin(ScrollTrigger);

// Lenisとの連携
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// ========================================
// 3. Fixed Header表示制御
// ========================================
const header = document.getElementById('header-fixed');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 500) {
    header.classList.add('visible');
  } else {
    header.classList.remove('visible');
  }

  lastScroll = currentScroll;
});

// ========================================
// 4. ヒーローセクションアニメーション
// ========================================
window.addEventListener('DOMContentLoaded', () => {
  // タイトルの文字スプリット（簡易版）
  const heroTitleLines = document.querySelectorAll('.hero-title-line');

  gsap.from(heroTitleLines, {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out',
    delay: 0.3,
  });

  // サブタイトル
  gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.8,
    ease: 'power2.out',
  });

  // 商品ボトル（3D回転効果）
  gsap.from('.product-bottle-placeholder', {
    opacity: 0,
    rotationY: -90,
    duration: 1.5,
    delay: 1,
    ease: 'back.out(1.7)',
  });

  // CTAボタン
  gsap.from('.hero-cta', {
    opacity: 0,
    scale: 0.8,
    duration: 0.6,
    delay: 1.5,
    ease: 'back.out(1.7)',
  });
});

// ========================================
// 5. スクロールトリガー: Fade In Up
// ========================================
const fadeInUpElements = document.querySelectorAll('.fade-in-up');

fadeInUpElements.forEach((element) => {
  const delay = element.dataset.delay || 0;

  gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    delay: parseFloat(delay),
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 20%',
      toggleActions: 'play none none reverse',
    },
  });
});

// ========================================
// 6. Before/After 比較スライダー
// ========================================
const comparisonSliders = document.querySelectorAll('.comparison-slider');

comparisonSliders.forEach((slider) => {
  const handle = slider.querySelector('.comparison-handle');
  const afterImage = slider.querySelector('.comparison-image.after');
  let isDragging = false;

  // マウスイベント
  handle.addEventListener('mousedown', () => {
    isDragging = true;
    document.body.style.cursor = 'ew-resize';
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.cursor = 'default';
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const rect = slider.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    // 範囲制限
    const clampedPercentage = Math.max(0, Math.min(100, percentage));

    afterImage.style.clipPath = `inset(0 ${100 - clampedPercentage}% 0 0)`;
    handle.style.left = `${clampedPercentage}%`;
  });

  // タッチイベント
  handle.addEventListener('touchstart', (e) => {
    isDragging = true;
    e.preventDefault();
  });

  document.addEventListener('touchend', () => {
    isDragging = false;
  });

  slider.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    const touch = e.touches[0];
    const rect = slider.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    const clampedPercentage = Math.max(0, Math.min(100, percentage));

    afterImage.style.clipPath = `inset(0 ${100 - clampedPercentage}% 0 0)`;
    handle.style.left = `${clampedPercentage}%`;

    e.preventDefault();
  });
});

// ========================================
// 7. FAQ アコーディオン
// ========================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    // 他のアイテムを閉じる
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });

    // 現在のアイテムをトグル
    item.classList.toggle('active');
  });
});

// ========================================
// 8. スクロールトリガー: カード3D効果
// ========================================
const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach((card, index) => {
  gsap.from(card, {
    opacity: 0,
    rotationY: -45,
    scale: 0.9,
    duration: 0.8,
    delay: index * 0.15,
    ease: 'back.out(1.5)',
    scrollTrigger: {
      trigger: card,
      start: 'top 75%',
      toggleActions: 'play none none reverse',
    },
  });
});

// ========================================
// 9. スクロールトリガー: 成分カード
// ========================================
const ingredientCards = document.querySelectorAll('.ingredient-card');

ingredientCards.forEach((card, index) => {
  gsap.from(card, {
    opacity: 0,
    y: 60,
    rotation: -10,
    duration: 0.6,
    delay: index * 0.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: card,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });
});

// ========================================
// 10. プランカード: パルスアニメーション
// ========================================
gsap.to('.plan-recommended', {
  scale: 1.03,
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: 'power1.inOut',
});

// おすすめバッジの揺れ
gsap.to('.badge-recommended', {
  rotation: 3,
  duration: 0.5,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut',
});

// ========================================
// 11. レビュー星のキラキラアニメーション
// ========================================
const reviewCards = document.querySelectorAll('.review-card');

reviewCards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    const stars = card.querySelector('.review-stars');
    gsap.fromTo(
      stars,
      { scale: 1 },
      { scale: 1.2, duration: 0.3, yoyo: true, repeat: 1, ease: 'power1.inOut' }
    );
  });
});

// ========================================
// 12. Parallax効果（ヒーロー背景）
// ========================================
const heroBg = document.querySelector('.hero-bg-placeholder');

if (heroBg) {
  gsap.to(heroBg, {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });
}

// ========================================
// 13. CTAボタンへスクロール
// ========================================
function scrollToCTA() {
  const footerCTA = document.getElementById('footer-cta');
  if (footerCTA) {
    lenis.scrollTo(footerCTA, {
      offset: -80,
      duration: 1.5,
    });
  }
}

// グローバルに公開
window.scrollToCTA = scrollToCTA;

// ========================================
// 14. 数値カウントアップ（料金表示など）
// ========================================
function animateValue(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    element.textContent = value.toLocaleString();
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// 料金表示のカウントアップ（オプション）
const priceElements = document.querySelectorAll('.price-amount');
priceElements.forEach((element) => {
  ScrollTrigger.create({
    trigger: element,
    start: 'top 80%',
    once: true,
    onEnter: () => {
      const text = element.textContent.replace(/[^\d]/g, '');
      const value = parseInt(text, 10);
      if (!isNaN(value) && value > 0) {
        element.textContent = '0円';
        animateValue(element, 0, value, 1000);
      }
    },
  });
});

// ========================================
// 15. ページ内リンクのスムーススクロール
// ========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    e.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      lenis.scrollTo(target, {
        offset: -80,
        duration: 1.2,
      });
    }
  });
});

// ========================================
// 16. パフォーマンス最適化: Intersection Observer
// ========================================
// 画像遅延読み込み（プレースホルダー用）
const imageObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        imageObserver.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: '50px',
  }
);

document.querySelectorAll('[class*="-placeholder"]').forEach((img) => {
  imageObserver.observe(img);
});

// ========================================
// 17. デバッグ用: ScrollTrigger可視化（開発時）
// ========================================
// ScrollTrigger.create({
//   trigger: '.hero-section',
//   start: 'top top',
//   end: 'bottom top',
//   markers: true, // デバッグ用マーカー
// });

// ========================================
// 18. コンソールログ（初期化確認）
// ========================================
console.log('🚀 GSAP + Lenis initialized');
console.log('📱 Smooth scroll enabled');
console.log('✨ Animations ready');

// ========================================
// 19. リサイズ時の再計算
// ========================================
window.addEventListener('resize', () => {
  ScrollTrigger.refresh();
});

// ========================================
// 20. ローディング完了後の処理
// ========================================
window.addEventListener('load', () => {
  // ScrollTriggerの再計算
  ScrollTrigger.refresh();

  // ページトップへの自動スクロール防止
  if (window.location.hash) {
    setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target) {
        lenis.scrollTo(target, {
          offset: -80,
          duration: 0,
        });
      }
    }, 100);
  }
});
