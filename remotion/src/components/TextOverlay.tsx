import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

interface TextOverlayProps {
  text: string;
  subText?: string;
  position?: "center" | "bottom" | "top";
  fontSize?: number;
  delay?: number;
}

export const TextOverlay: React.FC<TextOverlayProps> = ({
  text,
  subText,
  position = "center",
  fontSize = 52,
  delay = 5,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame: frame - delay,
    fps,
    config: { damping: 30, stiffness: 120 },
  });

  const opacity = interpolate(entrance, [0, 1], [0, 1]);
  const translateY = interpolate(entrance, [0, 1], [30, 0]);

  const positionStyle: React.CSSProperties =
    position === "bottom"
      ? { bottom: 200, left: 0, right: 0 }
      : position === "top"
        ? { top: 160, left: 0, right: 0 }
        : { top: "50%", left: 0, right: 0, transform: `translateY(-50%)` };

  return (
    <div
      style={{
        position: "absolute",
        ...positionStyle,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity,
        zIndex: 10,
      }}
    >
      <div
        style={{
          transform: `translateY(${translateY}px)`,
          textAlign: "center",
          padding: "0 60px",
        }}
      >
        <div
          style={{
            fontSize,
            fontWeight: 700,
            color: "#fff",
            textShadow: "0 2px 20px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.4)",
            lineHeight: 1.4,
            letterSpacing: "0.05em",
            fontFamily:
              '"Hiragino Mincho ProN", "Yu Mincho", "MS PMincho", serif',
          }}
        >
          {text}
        </div>
        {subText && (
          <div
            style={{
              fontSize: fontSize * 0.5,
              fontWeight: 400,
              color: "#fff",
              textShadow:
                "0 2px 12px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.3)",
              marginTop: 16,
              letterSpacing: "0.08em",
              fontFamily:
                '"Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif',
            }}
          >
            {subText}
          </div>
        )}
      </div>
    </div>
  );
};
