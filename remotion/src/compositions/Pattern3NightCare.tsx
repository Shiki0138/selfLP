import { AbsoluteFill, Sequence } from "remotion";
import { KenBurnsImage } from "../components/KenBurnsImage";
import { TextOverlay } from "../components/TextOverlay";
import { FadeTransition } from "../components/FadeTransition";
import { GradientOverlay } from "../components/GradientOverlay";
import { BrandCTA } from "../components/BrandCTA";

// Pattern 3: 夜のご褒美ケア (Nighttime Reward Care)
// 15 seconds = 450 frames @ 30fps
// 6 cuts + brand CTA ending

const cuts = [
  {
    // Cut 1: 仕事終わりの帰宅
    image: "pattern3-night-care/01.jpg",
    text: "今日も\nお疲れさま。",
    direction: "zoom-out" as const,
    duration: 60, // ~2s
  },
  {
    // Cut 2: バスルームの準備
    image: "pattern3-night-care/02.jpg",
    text: "夜だけの、\nご褒美ケア。",
    direction: "pan-right" as const,
    duration: 65, // ~2.2s
  },
  {
    // Cut 3: シャンプー泡パック
    image: "pattern3-night-care/03.jpg",
    text: "泡で包んで、1分。",
    subText: "ペリセアが髪内部に浸透",
    direction: "zoom-in" as const,
    duration: 70, // ~2.3s
  },
  {
    // Cut 4: お風呂上がりのリラックス
    image: "pattern3-night-care/04.jpg",
    text: "お風呂上がりの\n特別な時間。",
    direction: "pan-left" as const,
    duration: 68, // ~2.3s
  },
  {
    // Cut 5: しっとりまとまる髪
    image: "pattern3-night-care/05.jpg",
    text: "翌朝、違う自分に\n出会える。",
    direction: "zoom-in" as const,
    duration: 68, // ~2.3s
  },
  {
    // Cut 6: 穏やかな笑顔
    image: "pattern3-night-care/06.jpg",
    text: "週に一度の\n贅沢。",
    subText: "¥8,460 で何度でも",
    direction: "zoom-out" as const,
    duration: 60, // ~2s
  },
];

const cutsTotalDuration = cuts.reduce((sum, c) => sum + c.duration, 0);
const ctaDuration = 450 - cutsTotalDuration; // ~59 frames (~2s)

export const Pattern3NightCare: React.FC = () => {
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
              <GradientOverlay
                opacity={i === 0 ? 0.5 : 0.4}
                direction={i === 0 ? "full" : "bottom"}
              />
              <TextOverlay
                text={cut.text}
                subText={cut.subText}
                position={i === 0 ? "center" : "bottom"}
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
