import React, { useState, useEffect, useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  COLORS,
  ARTICLES_DATA,
  PAST_ISSUES_DATA,
  FILTER_CATEGORIES,
} from "./src/data/Articles";

import HeroSection from "./src/components/HeroSection";
import FeaturedArticles from "./src/components/FeaturedArticled";
import FooterSection from "./src/components/Footer";
import PastIssues from "./src/components/PastIssues";
import Loader from "./src/components/Loader";

import Header from "./src/components/Header";
 

const DailyEdge = ({user }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [readingProgress, setReadingProgress] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [visibleImages, setVisibleImages] = useState(new Set());
  const imageRefs = useRef([]);

  const theme = darkMode ? COLORS.dark : COLORS.light;

  useEffect(() => {
    
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      setReadingProgress(Math.min((scrolled / documentHeight) * 100, 100));
      setNavScrolled(scrolled > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setVisibleImages((prev) => new Set([...prev, index]));
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { rootMargin: "50px" }
    );
    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, [loading]);

  const handleSubmit = () => {
    setEmailError("");
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 5000);
  };

  const filteredIssues =
    activeFilter === "all"
      ? PAST_ISSUES_DATA
      : PAST_ISSUES_DATA.filter(
          (issue) => issue.category.toLowerCase() === activeFilter
        );

  return (
    <div
      style={{
        backgroundColor: theme.bg,
        color: theme.text,
        minHeight: "100vh",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >

      {loading && <Loader theme={theme} />}
      {!loading && (
        <>
          <Header
            darkMode={darkMode}
            onToggleDarkMode={() => setDarkMode(!darkMode)}
            isScrolled={navScrolled}
            theme={theme}
            loading={loading}
            readingProgress={readingProgress}
            user={user}
          />
          <HeroSection
            email={email}
            emailError={emailError}
            subscribed={subscribed}
            onEmailChange={(e) => {
              setEmail(e.target.value);
              if (emailError) setEmailError("");
            }}
            onSubmit={handleSubmit}
            theme={theme}
          />
          <FeaturedArticles
            loading={loading}
            articles={ARTICLES_DATA}
            visibleImages={visibleImages}
            theme={theme}
          />
          <PastIssues
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            filteredIssues={filteredIssues}
            theme={theme}
          />
          <FooterSection
            email={email}
            subscribed={subscribed}
            onEmailChange={(e) => {
              setEmail(e.target.value);
              if (emailError) setEmailError("");
            }}
            onSubmit={handleSubmit}
            theme={theme}
          />

<ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" 
      />
        </>
      )}
    </div>
  );
};

export default DailyEdge;
