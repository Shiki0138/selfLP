interface GradientOverlayProps {
  opacity?: number;
  direction?: "bottom" | "top" | "full";
}

export const GradientOverlay: React.FC<GradientOverlayProps> = ({
  opacity = 0.4,
  direction = "bottom",
}) => {
  const gradient =
    direction === "bottom"
      ? `linear-gradient(to bottom, transparent 40%, rgba(0,0,0,${opacity}) 100%)`
      : direction === "top"
        ? `linear-gradient(to top, transparent 40%, rgba(0,0,0,${opacity}) 100%)`
        : `radial-gradient(ellipse at center, rgba(0,0,0,${opacity * 0.3}) 0%, rgba(0,0,0,${opacity}) 100%)`;

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: gradient,
        zIndex: 5,
      }}
    />
  );
};
