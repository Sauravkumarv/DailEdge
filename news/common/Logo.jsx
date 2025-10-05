import React, { memo } from "react";
import { Zap } from "lucide-react";
import { COLORS } from "../../news/src/data/Articles";

const Logo = memo(({ size = "default", darkMode = false, smoothScrollTo }) => {
  const theme = darkMode ? COLORS.dark : COLORS.light;

  const sizes = {
    small: { container: 32, icon: 18, fontSize: "1.25rem" },
    default: { container: 40, icon: 24, fontSize: "1.5rem" },
  };

  const { container, icon, fontSize } = sizes[size];

  return (
    <a
      href="#"
      onClick={(e) => smoothScrollTo && smoothScrollTo(e, "home")}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        cursor: "pointer",
        transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        textDecoration: "none",
      }}
      
    >
      <div
        style={{
          width: `${container}px`,
          height: `${container}px`,
          background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%)`,
          borderRadius: size === "small" ? "6px" : "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 4px 12px ${
            darkMode ? "rgba(245, 158, 11, 0.3)" : "rgba(245, 158, 11, 0.25)"
          }`,
          position: "relative",
          overflow: "hidden",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200%",
            background:
              "linear-gradient(45deg, transparent, rgba(255,255,255,0.15), transparent)",
            animation: "shimmer 3s infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2), transparent)",
            opacity: 0.6,
          }}
        />
        <Zap size={icon} color="#FFF" strokeWidth={2.5} style={{ position: "relative", zIndex: 1 }} />
      </div>
      <span
        style={{
          fontSize,
          fontWeight: "700",
          fontFamily: "Georgia, serif",
          color: theme.text,
          letterSpacing: "-0.5px",
          background: `linear-gradient(135deg, ${theme.text}, ${theme.primary})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        DailyEdge
      </span>
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
      `}</style>
    </a>
  );
});

export default Logo;
