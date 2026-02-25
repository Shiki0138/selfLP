import { AbsoluteFill, Sequence } from "remotion";
import { KenBurnsImage } from "../components/KenBurnsImage";
import { TextOverlay } from "../components/TextOverlay";
import { FadeTransition } from "../components/FadeTransition";
import { GradientOverlay } from "../components/GradientOverlay";
import { BrandCTA } from "../components/BrandCTA";

// Pattern 2: 触りたくなる髪 (Hair You Want to Touch)
// 15 seconds = 450 frames @ 30fps
// 5 cuts + brand CTA ending

const cuts = [
  {
    // Cut 1: 風になびく髪のスロー
    image: "pattern2-touch-hair/01.jpg",
    text: "ずっと、\n触っていたい。",
    direction: "pan-right" as const,
    duration: 82, // ~2.7s
  },
  {
    // Cut 2: 手で髪を触るクローズアップ
    image: "pattern2-touch-hair/02.jpg",
    text: "指が、すっと通る。",
    direction: "zoom-in" as const,
    duration: 75, // ~2.5s
  },
  {
    // Cut 3: シャンプーのテクスチャー
    image: "pattern2-touch-hair/03.jpg",
    text: "美容液発想のシャンプー",
    subText: "ヒアルロン酸・加水分解ケラチン配合",
    direction: "zoom-out" as const,
    duration: 75, // ~2.5s
  },
  {
    // Cut 4: ツヤツヤの髪アップ
    image: "pattern2-touch-hair/04.jpg",
    text: "サロン帰りの\nツヤ、毎日。",
    direction: "pan-left" as const,
    duration: 82, // ~2.7s
  },
  {
    // Cut 5: 笑顔で髪を揺らす
    image: "pattern2-touch-hair/05.jpg",
    text: "全国100店舗以上の\n美容室が選んだ。",
    subText: "リピート率 91%",
    direction: "zoom-in" as const,
    duration: 75, // ~2.5s
  },
];

const cutsTotalDuration = cuts.reduce((sum, c) => sum + c.duration, 0);
const ctaDuration = 450 - cutsTotalDuration; // ~61 frames (~2s)

export const Pattern2TouchHair: React.FC = () => {
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
              <GradientOverlay opacity={0.4} direction="bottom" />
              <TextOverlay
                text={cut.text}
                subText={cut.subText}
                position="bottom"
                fontSize={i === 0 ? 56 : 48}
              />
            </FadeTransition>
          </Sequence>
        );
      })}

      <Sequence from={cutsTotalDuration} durationInFrames={ctaDuration}>
        <FadeTransition durationInFrames={ctaDuration} fadeOutDuration={0}>
          <BrandCTA durationInFrames={ctaDuration} />
        </FadeTransition>
      </Sequence>
    </AbsoluteFill>
  );
};
