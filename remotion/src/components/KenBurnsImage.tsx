import { Img, interpolate, staticFile, useCurrentFrame } from "remotion";

type KenBurnsDirection = "zoom-in" | "zoom-out" | "pan-left" | "pan-right";

interface KenBurnsImageProps {
  src: string;
  direction?: KenBurnsDirection;
  startScale?: number;
  endScale?: number;
  durationInFrames: number;
}

export const KenBurnsImage: React.FC<KenBurnsImageProps> = ({
  src,
  direction = "zoom-in",
  startScale,
  endScale,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();

  const defaultStart = direction === "zoom-out" ? 1.15 : 1.0;
  const defaultEnd = direction === "zoom-out" ? 1.0 : 1.15;
  const sStart = startScale ?? defaultStart;
  const sEnd = endScale ?? defaultEnd;

  const scale = interpolate(frame, [0, durationInFrames], [sStart, sEnd], {
    extrapolateRight: "clamp",
  });

  let translateX = 0;
  let translateY = 0;

  if (direction === "pan-left") {
    translateX = interpolate(frame, [0, durationInFrames], [3, -3], {
      extrapolateRight: "clamp",
    });
  } else if (direction === "pan-right") {
    translateX = interpolate(frame, [0, durationInFrames], [-3, 3], {
      extrapolateRight: "clamp",
    });
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <Img
        src={staticFile(src)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `scale(${scale}) translate(${translateX}%, ${translateY}%)`,
        }}
      />
    </div>
  );
};
