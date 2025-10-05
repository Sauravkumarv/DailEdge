import React, { useState, useEffect, useRef } from 'react';
import { Mail, TrendingUp, Zap, CheckCircle, Sun, Moon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../common/Logo';


const FooterSection = ({ email, subscribed, onEmailChange,theme }) => {
  const navigate=useNavigate();
 
  return (
    <>
      <section id="subscribe" style={{ padding: '5rem 0', background: `linear-gradient(135deg, ${theme.primary}15 0%, ${theme.accent}15 100%)`, borderTop: `1px solid ${theme.border}`, borderBottom: `1px solid ${theme.border}` }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1.5rem', fontFamily: 'Georgia, serif', color: theme.text }}>
            Don't Let the Future Pass You By
          </h2>
          <p style={{ fontSize: '1.25rem', color: theme.textSecondary, marginBottom: '2.5rem', lineHeight: '1.7' }}>
            Join 32,876 innovators getting their daily edge. 5 minutes. Zero fluff. Pure signal.
          </p>
          <div style={{ display:'flex',  justifyContent:'center', alignItems:'center' }}>
           
            <button
              onClick={()=>navigate('/signin')}
              disabled={subscribed}
              style={{
                padding: '1.25rem 3rem',
                fontSize: '1.1rem',
                fontWeight: '700',
                background: subscribed ? `${theme.primary}80` : `linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%)`,
                color: '#FFF',
                border: 'none',
                borderRadius: '12px',
                cursor: subscribed ? 'default' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: subscribed ? 'none' : `0 12px 32px ${theme.accent}40`,
                transition: 'all 0.3s ease'
              }}
            >
              {subscribed ? <><CheckCircle size={20} /> Subscribed!</> : <><Mail size={20} /> Start Reading Free</>}
            </button>
          </div>
        </div>
      </section>

      <footer style={{ padding: '3rem 0', borderTop: `1px solid ${theme.border}`, textAlign: 'center', color: theme.textSecondary, backgroundColor: theme.bg }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
           
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem',width: '32px', height: '32px',justifyContent: 'center'}}>
      
      <Logo/>
    </div>

          </div>
          <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>The essential AI briefing for innovators who refuse to fall behind.</p>
          <p style={{ fontSize: '0.85rem' }}>
            © 2025 DailyEdge. All rights reserved. | <a href="#" style={{ color: theme.accent, textDecoration: 'none' }}>Privacy</a> | <a href="#" style={{ color: theme.accent, textDecoration: 'none' }}>Terms</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;