import { AbsoluteFill, Sequence } from "remotion";
import { KenBurnsImage } from "../components/KenBurnsImage";
import { TextOverlay } from "../components/TextOverlay";
import { FadeTransition } from "../components/FadeTransition";
import { GradientOverlay } from "../components/GradientOverlay";
import { BrandCTA } from "../components/BrandCTA";

// Pattern 1: 大事な日の前日 (The Night Before a Special Day)
// 15 seconds = 450 frames @ 30fps
// 6 cuts + brand CTA ending

const cuts = [
  {
    // Cut 1: 鏡の前で髪に悩む女性
    image: "pattern1-special-day/01.jpg",
    text: "明日は、大切な日。",
    direction: "zoom-in" as const,
    duration: 68, // ~2.3s
  },
  {
    // Cut 2: 不安そうに髪を触る
    image: "pattern1-special-day/02.jpg",
    text: "この髪で、大丈夫かな。",
    direction: "pan-left" as const,
    duration: 60, // ~2s
  },
  {
    // Cut 3: シャワーシーン / シャンプー
    image: "pattern1-special-day/03.jpg",
    text: "美容液で、洗う。",
    subText: "アミノ酸系洗浄 × ペリセア配合",
    direction: "zoom-out" as const,
    duration: 68, // ~2.3s
  },
  {
    // Cut 4: 泡パック中のリラックス
    image: "pattern1-special-day/04.jpg",
    text: "1分間の、泡パック。",
    direction: "pan-right" as const,
    duration: 68, // ~2.3s
  },
  {
    // Cut 5: ドライヤー後のツヤ髪
    image: "pattern1-special-day/05.jpg",
    text: "熱が、味方になる。",
    subText: "エルカラクトン配合",
    direction: "zoom-in" as const,
    duration: 68, // ~2.3s
  },
  {
    // Cut 6: 翌朝の笑顔
    image: "pattern1-special-day/06.jpg",
    text: "朝、髪に\n自信がある。",
    direction: "zoom-out" as const,
    duration: 60, // ~2s
  },
];

// Brand CTA gets remaining frames
const cutsTotalDuration = cuts.reduce((sum, c) => sum + c.duration, 0);
const ctaDuration = 450 - cutsTotalDuration; // ~58 frames (~1.9s)

export const Pattern1SpecialDay: React.FC = () => {
  let currentFrame = 0;

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {cuts.map((cut, i) => {
        const from = currentFrame;
        currentFrame += cut.duration;
        return (
          <Sequence key={i} from={from} durationInFrames={cut.duration}>
            <FadeTransition durationInFrames={cut.duration}>
              <KenBurnsImage
                src={cut.image}
                direction={cut.direction}
                durationInFrames={cut.duration}
              />
              <GradientOverlay opacity={0.45} direction="bottom" />
              <TextOverlay
                text={cut.text}
                subText={cut.subText}
                position="bottom"
                fontSize={i === 0 || i === 5 ? 56 : 48}
              />
            </FadeTransition>
          </Sequence>
        );
      })}

      {/* Brand CTA ending */}
      <Sequence from={cutsTotalDuration} durationInFrames={ctaDuration}>
        <FadeTransition durationInFrames={ctaDuration} fadeOutDuration={0}>
          <BrandCTA durationInFrames={ctaDuration} />
        </FadeTransition>
      </Sequence>
    </AbsoluteFill>
  );
};
