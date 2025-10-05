import React, { useState, useEffect, useRef } from 'react';
import { Mail, TrendingUp, Zap, CheckCircle, Sun, Moon } from 'lucide-react';

const HeroSection = ({ email, emailError, subscribed, onEmailChange, onSubmit, theme }) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const SocialProofBadge = () => {
    const isMobile = windowWidth < 768; // breakpoint for mobile
  
    return (
      <div style={{
        position: 'sticky',
        top: isMobile ? '20px' : '100px', // less top spacing on mobile
        right: isMobile ? '0' : '2rem',   // move to right edge on mobile
        float: isMobile ? 'none' : 'right', // remove float on mobile
        margin: isMobile ? '1rem auto' : '0 0 2rem 2rem', // center on mobile
        background: `linear-gradient(135deg, ${theme.primary}20 0%, ${theme.accent}20 100%)`,
        border: `2px solid ${theme.accent}40`,
        borderRadius: '12px',
        padding: '1rem 1.5rem',
        maxWidth: isMobile ? '90%' : '240px', // responsive width
        zIndex: 100,
        textAlign: 'center' // center text on mobile
      }}>
        <div style={{ fontSize: '2rem', fontWeight: '700', color: theme.accent }}>32,876</div>
        <div style={{ fontSize: '0.85rem', color: theme.textSecondary, marginTop: '0.25rem' }}>Active Subscribers</div>
        <div style={{ fontSize: '0.75rem', color: theme.neutral, marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: `1px solid ${theme.border}` }}>
          Featured in: <strong style={{ color: theme.text }}>Forbes, TechCrunch, VentureBeat</strong>
        </div>
      </div>
    );
  };

  return (
    <section id="home" style={{ paddingTop: '8rem', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <SocialProofBadge />

        <div style={{ maxWidth: '800px' }}>
          <div style={{ 
            display: 'inline-block',
            background: `linear-gradient(135deg, ${theme.primary}30 0%, ${theme.accent}30 100%)`,
            padding: '0.5rem 1.25rem',
            borderRadius: '50px',
            fontSize: '0.85rem',
            fontWeight: '600',
            marginBottom: '2rem',
            border: `1px solid ${theme.accent}50`
          }}>
            <TrendingUp size={14} style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }} />
            #1 AI Newsletter for Founders
          </div>

          <h1 style={{
  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
  fontWeight: '700',
  lineHeight: '1.1',
  marginBottom: '1.5rem',
  fontFamily: 'Georgia, serif',
  display: 'inline-block',          // crucial
  backgroundImage: `linear-gradient(135deg, ${theme.text}, ${theme.accent})`,
  backgroundClip: 'text',           // fallback
  WebkitBackgroundClip: 'text',     // required for Chrome/Safari
  WebkitTextFillColor: 'transparent',
  color: theme.text,                // fallback in case gradient fails
  transition: 'background-image 0.3s ease, color 0.3s ease'  // smooth toggle
}}>
            The 5-Minute AI Briefing That Keeps You Ahead
          </h1>

          <p style={{ fontSize: '1.25rem', color: theme.textSecondary, marginBottom: '2.5rem', lineHeight: '1.7' }}>
            Curated insights on AI breakthroughs, robotics, and emerging tech—delivered daily to 32K+ founders, engineers, and innovators who refuse to fall behind.
          </p>

          <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <input
              type="email"
              value={email}
              onChange={onEmailChange}
              onKeyPress={(e) => e.key === 'Enter' && onSubmit()}
              placeholder="Enter your email"
              style={{
                flex: '1 1 300px',
                padding: '1rem 1.25rem',
                fontSize: '1rem',
                border: `2px solid ${emailError ? '#EF4444' : theme.border}`,
                borderRadius: '12px',
                backgroundColor: theme.cardBg,
                color: theme.text,
                outline: 'none'
              }}
            />
            <button
              onClick={onSubmit}
              disabled={subscribed}
              style={{
                padding: '1rem 2.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                background: subscribed ? `${theme.primary}80` : `linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%)`,
                color: '#FFF',
                border: 'none',
                borderRadius: '12px',
                cursor: subscribed ? 'default' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: subscribed ? 'none' : `0 8px 24px ${theme.accent}40`,
                transition: 'all 0.3s ease'
              }}
            >
              {subscribed ? <><CheckCircle size={20} /> Subscribed!</> : <><Mail size={20} /> Get Daily Edge</>}
            </button>
          </div>

          <p style={{ fontSize: '0.85rem', color: theme.neutral }}>
            Join 32,876 subscribers. Free forever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection ;