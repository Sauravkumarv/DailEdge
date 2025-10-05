import { Zap } from "lucide-react";

const Loader = ({ theme }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: theme.bg,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2000,
        flexDirection: "column",
      }}
    >
      {/* Logo container */}
      <div
        style={{
          width: "100px",
          height: "100px",
          background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%)`,
          borderRadius: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          boxShadow: `0 10px 30px ${theme.primary}50`,
          animation: "pulseScale 2s ease-in-out infinite",
        }}
      >
        {/* Shimmer effect */}
        <div
          style={{
            position: "absolute",
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200%",
            background:
              "linear-gradient(45deg, transparent, rgba(255,255,255,0.15), transparent)",
            animation: "shimmer 2.5s infinite",
          }}
        />

        {/* Radial highlight */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), transparent)",
            opacity: 0.5,
          }}
        />

        {/* Zap Icon */}
        <Zap
          size={40}
          color="#FFF"
          strokeWidth={2.5}
          style={{
            zIndex: 1,
            animation: "iconRotateScale 2s ease-in-out infinite",
          }}
        />
      </div>

      {/* Site name */}
      <span
        style={{
          marginTop: "20px",
          fontSize: "1.5rem",
          fontWeight: "700",
          color: theme.text,
          fontFamily: "Georgia, serif",
          animation: "textFloatFade 2s ease-in-out infinite alternate",
        }}
      >
        DailyEdge
      </span>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        @keyframes pulseScale {
          0%, 100% { transform: scale(1); box-shadow: 0 10px 30px ${theme.primary}50; }
          50% { transform: scale(1.12); box-shadow: 0 15px 45px ${theme.primary}70; }
        }

        @keyframes iconRotateScale {
          0% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.15) rotate(10deg); }
          100% { transform: scale(1) rotate(0deg); }
        }

        @keyframes textFloatFade {
          0% { transform: translateY(0); opacity: 0.8; }
          50% { transform: translateY(-6px); opacity: 1; }
          100% { transform: translateY(0); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default Loader;
