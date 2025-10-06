  import React, { useState, useEffect, useRef, memo, useCallback } from "react";
  import { Zap, Sun, Moon, Menu, X, ChevronRight,ChevronDown,LogIn,UserRound,LogOut } from "lucide-react";
 import { NavLink } from "react-router-dom";



  const Header = memo(
    ({ darkMode, onToggleDarkMode, isScrolled, theme, loading, user  }) => {
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      const [headerBg, setHeaderBg] = useState("transparent");
      const [activeSection, setActiveSection] = useState("home");
      const [isTransitioning, setIsTransitioning] = useState(false);
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      const [dropdownOpen, setDropdownOpen] = useState(false);


      const headerRef = useRef(null);


      useEffect(() => {
        setIsLoggedIn(!!user); // true if user exists
      }, [user]);

      useEffect(() => {
        if (isScrolled) {
          setHeaderBg(
          
          );
        } else {
          setHeaderBg("transparent");
        }
      }, [isScrolled, darkMode]);

      useEffect(() => {
        if (mobileMenuOpen) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "unset";
        }
        return () => {
          document.body.style.overflow = "unset";
        };
      }, [mobileMenuOpen]);

      useEffect(() => {
        const sections = ["home", "about", "issues", "subscribe"];
      
        const handleScroll = () => {
          const scrollPosition = window.scrollY + 81; // header height offset (slightly below header)
      
          if (
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 50
          ) {
            setActiveSection("subscribe");
            return;
          }
      
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            const element = document.getElementById(section);
            if (element) {
              const { offsetTop } = element;
              if (scrollPosition >= offsetTop) {
                setActiveSection(section);
                break;
              }
            }
          }
        };
      
        // Delay initial scroll check to allow DOM to fully render
        setTimeout(handleScroll, 50);
      
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
      }, [loading]);

      const smoothScrollTo = useCallback((e, targetId) => {
        e.preventDefault();
        setIsTransitioning(true);
        setMobileMenuOpen(false);

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
            
          });

          setTimeout(() => setIsTransitioning(false), 1000);
        }
      }, []);

      const Logo = memo(({ size = "default" }) => {
        const sizes = {
          small: { container: 32, icon: 18, fontSize: "1.25rem" },
          default: { container: 40, icon: 24, fontSize: "1.5rem" },
        };
        const { container, icon, fontSize } = sizes[size];

        return (
          <a
            href="#home"
            onClick={(e) => smoothScrollTo(e, "home")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              cursor: "pointer",
              transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
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
                  darkMode
                    ? "rgba(245, 158, 11, 0.3)"
                    : "rgba(245, 158, 11, 0.25)"
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
              <Zap
                size={icon}
                color="#FFF"
                strokeWidth={2.5}
                style={{ position: "relative", zIndex: 1 }}
              />
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
          </a>
        );
      });

      const ScrollLink = memo(({ href, children, isActive }) => {
        const [isHovered, setIsHovered] = useState(false);
        const sectionId = href.replace("#", "");

        return (
          <a
            href={href}
            onClick={(e) => {
              smoothScrollTo(e, sectionId);
              // setActiveSection(sectionId);
            }}
            style={{
              color: isActive
                ? undefined // We'll use gradient for active
                : isHovered
                ? theme.text
                : theme.textSecondary,
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: isActive ? "700" : "600",
              position: "relative",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              paddingBottom: "4px",
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
              padding: "0.5rem 0.75rem",
              borderRadius: "8px",
              background: isActive
                ? "linear-gradient(90deg, #FF6B6B, #FFD93D)" // replace with your gradient
                : "transparent",
              WebkitBackgroundClip: isActive ? "text" : "unset",
              WebkitTextFillColor: isActive ? "transparent" : undefined,
            }}
            
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {children}
            {isActive && (
              <ChevronRight
                size={14}
                style={{
                  animation: "slideRight 0.6s ease-in-out infinite",
                  color: theme.primary,
                }}
              />
            )}
            <div
              style={{
                position: "absolute",
                bottom: "0.25rem",
                left: "0.75rem",
                right: "0.75rem",
                width: isActive
                  ? "calc(100% - 1.5rem)"
                  : isHovered
                  ? "calc(100% - 1.5rem)"
                  : "0%",
                height: "2px",
                background: isActive
                  ? `linear-gradient(90deg, ${theme.primary}, ${theme.accent})`
                  : `linear-gradient(90deg, ${theme.primary}80, ${theme.accent}80)`,
                transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: isActive ? `0 0 8px ${theme.primary}60` : "none",
                borderRadius: "2px",
              }}
            />
          </a>
        );
      });

      const ThemeToggle = memo(() => {
        const [isAnimating, setIsAnimating] = useState(false);

        const handleClick = () => {
          setIsAnimating(true);
          onToggleDarkMode();
          setTimeout(() => setIsAnimating(false), 400);
        };

        return (
          <button
            onClick={handleClick}
            aria-label="Toggle theme"
            style={{
              padding: "0.5rem",
              borderRadius: "8px",
              border: `1px solid ${theme.border}`,
              backgroundColor: theme.cardBg,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              transform: isAnimating
                ? "rotate(360deg) scale(0.9)"
                : "rotate(0deg) scale(1)",
              boxShadow: isScrolled ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              if (!isAnimating) {
                e.currentTarget.style.transform = "scale(1.1) translateY(-2px)";
                e.currentTarget.style.borderColor = theme.primary;
                e.currentTarget.style.boxShadow = `0 4px 12px ${theme.primary}40`;
              }
            }}
            onMouseLeave={(e) => {
              if (!isAnimating) {
                e.currentTarget.style.transform = "scale(1) translateY(0)";
                e.currentTarget.style.borderColor = theme.border;
                e.currentTarget.style.boxShadow = isScrolled
                  ? "0 2px 8px rgba(0,0,0,0.1)"
                  : "none";
              }
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "-100%",
                background: `radial-gradient(circle, ${theme.primary}20, transparent)`,
                opacity: 0,
                transition: "opacity 0.3s ease",
              }}
              className="theme-toggle-glow"
            />
            {darkMode ? (
              <Sun
                size={20}
                color={theme.accent}
                strokeWidth={2.5}
                style={{
                  filter: "drop-shadow(0 0 4px rgba(245, 158, 11, 0.5))",
                  animation: isAnimating ? "sunRise 0.4s ease" : "none",
                }}
              />
            ) : (
              <Moon
                size={20}
                color={theme.primary}
                strokeWidth={2.5}
                style={{
                  filter: "drop-shadow(0 0 4px rgba(59, 130, 246, 0.5))",
                  animation: isAnimating ? "moonPhase 0.4s ease" : "none",
                }}
              />
            )}
          </button>
        );
      });

      return (
        <>
          <style>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
            100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
          }
          
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-20px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes slideRight {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(4px); }
          }

          @keyframes sunRise {
            0% { transform: translateY(10px) rotate(0deg); opacity: 0; }
            100% { transform: translateY(0) rotate(180deg); opacity: 1; }
          }

          @keyframes moonPhase {
            0% { transform: rotate(0deg) scale(0.8); opacity: 0; }
            100% { transform: rotate(-180deg) scale(1); opacity: 1; }
          }

          @keyframes progressPulse {
            0%, 100% { box-shadow: 0 0 10px currentColor; }
            50% { box-shadow: 0 0 20px currentColor; }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          button:hover .theme-toggle-glow {
            opacity: 1 !important;
          }

          @media (max-width: 768px) {
            .desktop-nav {
              display: none !important;
            }
            .mobile-menu-btn {
              display: flex !important;
            }
          }

          @media (min-width: 769px) {
            .mobile-menu-btn {
              display: none !important;
            }
            .desktop-nav {
              display: flex !important;
            }
          }

          @media (max-width: 480px) {
            .user-name-text {
              display: none !important;
            }
          }

          html {
            scroll-behavior: smooth;
          }
        `}</style>

                {/* Header */}
          <nav
            ref={headerRef}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1000,
              backgroundColor: headerBg,
              backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
              WebkitBackdropFilter: isScrolled
                ? "blur(20px) saturate(180%)"
                : "none",
              borderBottom: isScrolled ? `1px solid ${theme.border}` : "none",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              padding: isScrolled ? "0.75rem 0" : "1.5rem 0",
              boxShadow: isScrolled
                ? `0 4px 24px ${
                    darkMode ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.08)"
                  }`
                : "none",
            }}
          >
            <div
              style={{
                maxWidth: "1280px",
                margin: "0 auto",
                padding: "0 clamp(1rem, 5vw, 2rem)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Logo />

              {/* Desktop Navigation */}
              <div
                className="desktop-nav"
                style={{ display: "flex", alignItems: "center", gap: "2rem" }}
              >
                <div style={{ display: "flex", gap: "2rem" }}>
                  <ScrollLink href="#home" isActive={activeSection === "home"}>
                    Home
                  </ScrollLink>
                  <ScrollLink href="#about" isActive={activeSection === "about"}>
                    About
                  </ScrollLink>
                  <ScrollLink href="#issues" isActive={activeSection === "issues"}>
                    Past Issues
                  </ScrollLink>
                  <ScrollLink
                    href="#subscribe"
                    isActive={activeSection === "subscribe"}
                    
                  >
                    Subscribe
                  </ScrollLink>
                 {/* ✅ Auth section */}
{isLoggedIn ? (
  <div style={{ position: "relative" }}>
    <button
      onClick={() => setDropdownOpen((prev) => !prev)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        color: theme.text,
      }}
    >
      {/* Avatar */}
      <div
  style={{
    display: "flex",
    alignItems: "center", // vertically center avatar and name
    gap: "8px",           // space between avatar and name
    cursor: "pointer",
  }}
>
  {/* Avatar */}
  <div
    style={{
      width: "25px",
      height: "25px",
      borderRadius: "50%",
      backgroundColor: "#666", // fallback color
      color: "#fff",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textTransform: "uppercase",
      fontSize: "1rem",
    }}
  >
    {user?.name ? user.name.charAt(0) : <UserRound size={18} />}
  </div>

  {/* Name + Arrow */}
  <div style={{ display: "flex", alignItems: "center", gap: "4px", fontWeight: 600, margin:"15px  "}}>
    <span>{user?.name || "User"}</span>
    <ChevronDown
  size={18}
  style={{
    transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease",
  }}
/>
  </div>
</div>
    </button>

    {/* Dropdown */}
    {dropdownOpen && (
      <div
      style={{
        position: "absolute",
        top: "100%",
        left: 0,
        backgroundColor: theme.cardBg,
        border: `1px solid ${theme.border}`,
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        padding: "0.5rem 0",
        minWidth: "140px",
        zIndex: 1001,
      }}
    >
        <button
          onClick={() => {
            localStorage.removeItem("accessToken");
            setIsLoggedIn(false);
            window.location.href = "/signin";
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            width: "100%",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem 1rem",
            color: theme.textSecondary,
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor =
              darkMode ? "#222" : "#f2f2f2")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    )}
  </div>
) : (
  <NavLink
    to="/signin"
    style={{
      display: "flex",
      alignItems: "center",
      gap: "0.25rem",
      color: theme.textSecondary,
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.color = theme.primary)}
    onMouseLeave={(e) => (e.currentTarget.style.color = theme.textSecondary)}
  >
    <LogIn size={22} />
  </NavLink>
)}


                </div>
                {/* <LanguageSelector/> */}
                <ThemeToggle />
              </div>

              {/* Mobile Menu Button */}
              <div
                className="mobile-menu-btn"
                style={{ display: "none", alignItems: "center", gap: "1rem" }}
              >
                <ThemeToggle />
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle menu"
                  style={{
                    padding: "0.5rem",
                    borderRadius: "8px",
                    border: `1px solid ${theme.border}`,
                    backgroundColor: theme.cardBg,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    transform: mobileMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = mobileMenuOpen
                      ? "rotate(90deg) scale(1.1)"
                      : "scale(1.1)";
                    e.currentTarget.style.borderColor = theme.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = mobileMenuOpen
                      ? "rotate(90deg) scale(1)"
                      : "scale(1)";
                    e.currentTarget.style.borderColor = theme.border;
                  }}
                >
                  {mobileMenuOpen ? (
                    <X size={20} color={theme.text} />
                  ) : (
                    <Menu size={20} color={theme.text} />
                  )}
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Overlay */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: darkMode
                ? "rgba(0, 0, 0, 0.85)"
                : "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              zIndex: 999,
              opacity: mobileMenuOpen ? 1 : 0,
              visibility: mobileMenuOpen ? "visible" : "hidden",
              transition:
                "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              style={{
                position: "absolute",
                top: isScrolled ? "4.5rem" : "6rem",
                right: "clamp(1rem, 5vw, 2rem)",
                backgroundColor: theme.cardBg,
                borderRadius: "16px",
                padding: "1.5rem",
                minWidth: "220px",
                boxShadow: `0 20px 60px ${
                  darkMode ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.25)"
                }`,
                border: `1px solid ${theme.border}`,
                transform: mobileMenuOpen
                  ? "translateY(0) scale(1)"
                  : "translateY(-20px) scale(0.95)",
                opacity: mobileMenuOpen ? 1 : 0,
                transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                animation: mobileMenuOpen ? "slideIn 0.4s ease" : "none",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {["home", "about", "issues", "subscribe"].map(
                  (section, index) => (
                    <div
                      key={section}
                      style={{
                        animation: mobileMenuOpen
                          ? `fadeInUp 0.4s ease ${index * 0.1}s both`
                          : "none",
                      }}
                    >
                      <ScrollLink
                        href={`#${section}`}
                        isActive={activeSection === section}
                      >
                        {section.charAt(0).toUpperCase() +
                          section.slice(1).replace("issues", "Past Issues")}
                      </ScrollLink>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </>
      );
    }
  );

  Header.displayName = "Header";

  export default Header;
