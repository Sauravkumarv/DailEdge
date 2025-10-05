import React, { useState, useEffect, useRef } from "react";
import {
  Clock,
  ArrowRight,
  Bookmark,
  Share2,
  Eye,
  Calendar,
} from "lucide-react";
import Pagination from "./Pagination";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FeaturedArticles = ({ loading, articles = [], theme }) => {

  const [visibleImages, setVisibleImages] = useState(new Set());
  const [page, setPage] = useState(1);
  const imageRefs = useRef([]);
  const sectionRef = useRef(null);
  const [direction, setDirection] = useState(0); // 1 = next, -1 = prev
  const navigate=useNavigate();

  const articlesPerPage = 9;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const startIndex = (page - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const paginatedArticles = articles.slice(startIndex, endIndex);

  useEffect(() => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [page]);

  const SkeletonCard = () => (
    <div
      style={{
        backgroundColor: theme.cardBg,
        border: `1px solid ${theme.border}`,
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "280px",
          backgroundColor: theme.neutral + "30",
          animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        }}
      />
      <div style={{ padding: "1.75rem" }}>
        <div
          style={{
            height: "16px",
            borderRadius: "4px",
            backgroundColor: theme.neutral + "30",
            width: "60%",
            marginBottom: "1rem",
            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        />
        <div
          style={{
            height: "24px",
            borderRadius: "4px",
            backgroundColor: theme.neutral + "30",
            width: "90%",
            marginBottom: "0.5rem",
            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        />
      </div>
    </div>
  );

  const ArticleCard = ({ article, isVisible, imageRef }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [ripples, setRipples] = useState([]);

    const handleCardClick = (e) => {
      
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newRipple = { x, y, id: Date.now() };
      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600);

navigate("/Articles")
    };

    const handleBookmark = (e) => {
      e.stopPropagation();
      setIsBookmarked(!isBookmarked);
    };

    const handleShare = (e) => {
      e.stopPropagation();
    };

    return (
      <div
        ref={imageRef}
        onClick={handleCardClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: "relative",
          backgroundColor: theme.bg,
          borderRadius: "20px",
          overflow: "hidden",
          border: `2px solid ${isHovered ? theme.accent : theme.border}`,
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          cursor: "pointer",
          transform: isHovered
            ? "translateY(-12px) scale(1.02)"
            : "translateY(0) scale(1)",
          boxShadow: isHovered
            ? `0 25px 50px -12px ${theme.accent}30, 0 0 0 1px ${theme.accent}10`
            : `0 4px 6px -1px ${theme.neutral}10`,
        }}
      >
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            style={{
              position: "absolute",
              left: ripple.x,
              top: ripple.y,
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: `${theme.accent}40`,
              transform: "translate(-50%, -50%) scale(0)",
              animation: "ripple 0.6s ease-out",
              pointerEvents: "none",
              zIndex: 10,
            }}
          />
        ))}

        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={article.image}
            alt={article.title}
            style={{
              width: "100%",
              height: "280px",
              objectFit: "cover",
              transition:
                "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), filter 0.4s ease",
              transform: isHovered ? "scale(1.1)" : "scale(1)",
              filter: isHovered
                ? "brightness(0.85) saturate(1.2)"
                : "brightness(1) saturate(1)",
            }}
            loading="lazy"
          />

          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "50%",
              background: `linear-gradient(to top, ${theme.bg}dd 0%, transparent 100%)`,
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              display: "flex",
              gap: "8px",
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "translateY(0)" : "translateY(-10px)",
              transition: "all 0.3s ease",
            }}
          >
            <button
              onClick={handleBookmark}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "none",
                background: `${theme.bg}f0`,
                backdropFilter: "blur(10px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: `0 4px 12px ${theme.neutral}30`,
              }}
            >
              <Bookmark
                size={18}
                color={theme.accent}
                fill={isBookmarked ? theme.accent : "none"}
                style={{ transition: "all 0.3s ease" }}
              />
            </button>
            <button
              onClick={handleShare}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "none",
                background: `${theme.bg}f0`,
                backdropFilter: "blur(10px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: `0 4px 12px ${theme.neutral}30`,
              }}
            >
              <Share2 size={18} color={theme.accent} />
            </button>
          </div>

          <div
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
              padding: "6px 14px",
              borderRadius: "20px",
              fontSize: "0.75rem",
              fontWeight: "700",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              background: `linear-gradient(135deg, ${theme.primary}e0 0%, ${theme.accent}e0 100%)`,
              color: "#fff",
              boxShadow: `0 4px 12px ${theme.accent}40`,
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          >
            {article.category}
          </div>
        </div>

        <div style={{ padding: "1.75rem" }}>
          <h3
            style={{
              fontSize: "1.4rem",
              fontWeight: "800",
              marginBottom: "1rem",
              lineHeight: "1.3",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              color: theme.text,
              transition: "color 0.3s ease",
              background: isHovered
                ? `linear-gradient(135deg, ${theme.text} 0%, ${theme.accent} 100%)`
                : "none",
              backgroundClip: isHovered ? "text" : "unset",
              WebkitBackgroundClip: isHovered ? "text" : "unset",
              WebkitTextFillColor: isHovered ? "transparent" : theme.text,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {article.title}
          </h3>

          <p
            style={{
              color: theme.textSecondary,
              fontSize: "0.95rem",
              lineHeight: "1.7",
              marginBottom: "1.25rem",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {article.excerpt}
          </p>

          <div
            style={{
              width: "100%",
              height: "1px",
              background: `linear-gradient(to right, transparent, ${theme.border}, transparent)`,
              marginBottom: "1.25rem",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: theme.neutral,
                  fontSize: "0.85rem",
                  fontWeight: "500",
                }}
              >
                <Clock size={16} />
                <span>{article.readTime}</span>
              </div>
              <div
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  backgroundColor: theme.border,
                }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: theme.neutral,
                  fontSize: "0.85rem",
                  fontWeight: "500",
                }}
              >
                <Calendar size={16} />
                <span>{article.date}</span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: theme.accent,
                fontWeight: "700",
                fontSize: "0.9rem",
                transform: isHovered ? "translateX(5px)" : "translateX(0)",
                transition: "transform 0.3s ease",
                whiteSpace: "nowrap",
              }}
            >
              <span>Read Article</span>
              <ArrowRight
                size={20}
                style={{
                  transition: "transform 0.3s ease",
                  transform: isHovered ? "translateX(4px)" : "translateX(0)",
                }}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: `linear-gradient(to right, ${theme.primary}, ${theme.accent})`,
            transform: isHovered ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 0.4s ease",
          }}
        />

        <style>{`
          @keyframes ripple {
            to {
              transform: translate(-50%, -50%) scale(20);
              opacity: 0;
            }
          }
          
          @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
        `}</style>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{ padding: "4rem 0", backgroundColor: theme.cardBg }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "3rem",
            fontFamily: "Georgia, serif",
            textAlign: "center",
            color: theme.text,
          }}
        >
          What You'll Get Every Morning
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <SkeletonCard key={`skeleton-${page}-${i}`} />
              ))
            : paginatedArticles.map((article, index) => (
                <ArticleCard
                  key={`article-${page}-${index}-${article.id}`}
                  article={article}
                  isVisible={visibleImages.has(startIndex + index)}
                  imageRef={(el) => (imageRefs.current[index] = el)} // Use current page index, not global!
                />
              ))}
        </div>
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={(num) => {
            setDirection(num > page ? 1 : -1);
            setPage(num);
          }}
          theme={theme}
        />
      </div>
    </section>
  );
};

export default FeaturedArticles;
