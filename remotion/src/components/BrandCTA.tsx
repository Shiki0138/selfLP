import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

interface BrandCTAProps {
  durationInFrames: number;
}

export const BrandCTA: React.FC<BrandCTAProps> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoEntrance = spring({
    frame: frame - 5,
    fps,
    config: { damping: 20, stiffness: 80 },
  });

  const priceEntrance = spring({
    frame: frame - 15,
    fps,
    config: { damping: 20, stiffness: 80 },
  });

  const ctaEntrance = spring({
    frame: frame - 25,
    fps,
    config: { damping: 20, stiffness: 80 },
  });

  const fadeOut = interpolate(
    frame,
    [durationInFrames - 10, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #1a1a1a 0%, #2d2520 50%, #1a1a1a 100%)",
        opacity: fadeOut,
      }}
    >
      {/* Brand Name */}
      <div
        style={{
          opacity: logoEntrance,
          transform: `translateY(${interpolate(logoEntrance, [0, 1], [20, 0])}px)`,
          fontSize: 80,
          fontWeight: 300,
          color: "#d4a574",
          letterSpacing: "0.3em",
          fontFamily: '"Didot", "Bodoni MT", "Times New Roman", serif',
          marginBottom: 40,
        }}
      >
        self
      </div>

      {/* Product Name + Price */}
      <div
        style={{
          opacity: priceEntrance,
          transform: `translateY(${interpolate(priceEntrance, [0, 1], [20, 0])}px)`,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 32,
            color: "#ccc",
            letterSpacing: "0.1em",
            fontFamily:
              '"Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif',
            marginBottom: 12,
          }}
        >
          シャンプー＆トリートメント セット
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 600,
            color: "#d4a574",
            fontFamily: '"Didot", "Bodoni MT", serif',
          }}
        >
          ¥8,460
          <span
            style={{
              fontSize: 24,
              color: "#999",
              marginLeft: 8,
            }}
          >
            (税込)
          </span>
        </div>
      </div>

      {/* CTA */}
      <div
        style={{
          opacity: ctaEntrance,
          transform: `translateY(${interpolate(ctaEntrance, [0, 1], [20, 0])}px)`,
          marginTop: 50,
          padding: "20px 60px",
          border: "1px solid #d4a574",
          borderRadius: 4,
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#d4a574",
            letterSpacing: "0.15em",
            fontFamily:
              '"Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif',
          }}
        >
          詳しくはプロフィールリンクから
        </div>
      </div>

      {/* Tagline */}
      <div
        style={{
          marginTop: 40,
          opacity: ctaEntrance * 0.7,
          fontSize: 22,
          color: "#888",
          letterSpacing: "0.2em",
          fontFamily:
            '"Hiragino Mincho ProN", "Yu Mincho", serif',
        }}
      >
        サロン品質を、自宅で。
      </div>
    </div>
  );
};
