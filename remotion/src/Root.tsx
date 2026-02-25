import { Composition } from "remotion";
import { Pattern1SpecialDay } from "./compositions/Pattern1SpecialDay";
import { Pattern2TouchHair } from "./compositions/Pattern2TouchHair";
import { Pattern3NightCare } from "./compositions/Pattern3NightCare";

// Instagram Reels: 1080x1920 (9:16), 30fps, 15 seconds = 450 frames
const REEL_WIDTH = 1080;
const REEL_HEIGHT = 1920;
const FPS = 30;
const DURATION = 450; // 15 seconds

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Pattern1SpecialDay"
        component={Pattern1SpecialDay}
        durationInFrames={DURATION}
        fps={FPS}
        width={REEL_WIDTH}
        height={REEL_HEIGHT}
      />
      <Composition
        id="Pattern2TouchHair"
        component={Pattern2TouchHair}
        durationInFrames={DURATION}
        fps={FPS}
        width={REEL_WIDTH}
        height={REEL_HEIGHT}
      />
      <Composition
        id="Pattern3NightCare"
        component={Pattern3NightCare}
        durationInFrames={DURATION}
        fps={FPS}
        width={REEL_WIDTH}
        height={REEL_HEIGHT}
      />
    </>
  );
};
