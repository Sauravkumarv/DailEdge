import { FILTER_CATEGORIES } from "../data/Articles";
import React, { useState, memo } from 'react';

const PastIssues = ({ activeFilter, onFilterChange, filteredIssues, theme }) => {

  const IssueCard = memo(({ issue }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        style={{
          backgroundColor: theme.cardBg,
          padding: '1.5rem',
          borderRadius: '12px',
          border: `1px solid ${theme.border}`,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          transform: isHovered ? 'translateY(-5px) scale(1.03)' : 'translateY(0) scale(1)',
          boxShadow: isHovered ? `0 10px 20px ${theme.primary}30` : 'none',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
          <span style={{
            padding: '0.25rem 0.75rem',
            borderRadius: '6px',
            fontSize: '0.7rem',
            fontWeight: '600',
            background: `rgba(${hexToRgb(theme.accent)}, 0.15)`,
            color: theme.accent
          }}>
            {issue.category}
          </span>
          <span style={{ fontSize: '0.85rem', color: theme.neutral }}>{issue.date}</span>
        </div>
        <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: theme.text, lineHeight: '1.5' }}>
          {issue.title}
        </h4>
      </div>
    );
  });

  // Helper: hex to rgb
  function hexToRgb(hex) {
    hex = hex.replace('#','');
    const bigint = parseInt(hex,16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r},${g},${b}`;
  }

  return (
    <section id="issues" style={{ padding: '4rem 0', backgroundColor: theme.bg }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: '2rem',
          fontFamily: 'Georgia, serif',
          textAlign: 'center',
          color: theme.text
        }}>
          Past Issues
        </h2>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {FILTER_CATEGORIES.map(filter => (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              aria-pressed={activeFilter === filter}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '50px',
                border: `2px solid ${activeFilter === filter ? theme.accent : theme.border}`,
                backgroundColor: activeFilter === filter ? `rgba(${hexToRgb(theme.accent)},0.15)` : theme.cardBg,
                color: activeFilter === filter ? theme.accent : theme.textSecondary,
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'capitalize',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Issues Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {filteredIssues.map(issue => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastIssues;
