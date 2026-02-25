import { interpolate, useCurrentFrame } from "remotion";

interface FadeTransitionProps {
  durationInFrames: number;
  fadeInDuration?: number;
  fadeOutDuration?: number;
  children: React.ReactNode;
}

export const FadeTransition: React.FC<FadeTransitionProps> = ({
  durationInFrames,
  fadeInDuration = 8,
  fadeOutDuration = 8,
  children,
}) => {
  const frame = useCurrentFrame();

  let opacity: number;

  if (fadeOutDuration === 0) {
    // No fade out - just fade in
    opacity = interpolate(frame, [0, fadeInDuration], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
  } else if (fadeInDuration === 0) {
    // No fade in - just fade out
    opacity = interpolate(
      frame,
      [durationInFrames - fadeOutDuration, durationInFrames],
      [1, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );
  } else {
    opacity = interpolate(
      frame,
      [0, fadeInDuration, durationInFrames - fadeOutDuration, durationInFrames],
      [0, 1, 1, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        opacity,
      }}
    >
      {children}
    </div>
  );
};
