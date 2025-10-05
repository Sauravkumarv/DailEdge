import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Logo from '../common/Logo';
import axios from 'axios';
import { toast } from 'react-toastify';

const INPUT_STYLE = {
  width: '100%',
  padding: '0.875rem 3rem 0.875rem 3rem',
  background: '#f9fafb',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  color: '#1a1a1a',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'all 0.2s ease',
  boxSizing: 'border-box',
};

const ICON_STYLE = {
  position: 'absolute',
  left: '1rem',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '#9ca3af',
};

const SOCIAL_BUTTON_STYLE = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '48px',
  height: '48px',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  background: '#fff',
  cursor: 'pointer',
  transition: 'background 0.3s ease',
};

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_SIGNUP_API}/login`,
        { email, password },
        { withCredentials: true }
      );
      
      setEmail('');
      setPassword('');
      toast.success("Logged In Successful")
    } catch (err) {
      const errorMsg = err.response?.data?.message || err.message || 'Login failed';
      setError(errorMsg);
      toast.error('Server not responding. Try again later.')

    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    alert(`Signing in with ${provider} (Demo)`);
    // Integrate real OAuth here
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        padding: '1rem',
      }}
    >
      <div style={{ width: '100%', maxWidth: 480, padding: '0.5rem' }}>
        <div
          style={{
            background: 'white',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 4px 6px rgba(0,0,0,0.07)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              gap: '0.75rem',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            <Logo />
          </div>

          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#1a1a1a',
              marginBottom: '0.5rem',
              textAlign: 'center',
            }}
          >
            Sign In
          </h2>

          <p
            style={{
              color: '#6b7280',
              marginBottom: '2rem',
              fontSize: '0.95rem',
              textAlign: 'center',
            }}
          >
            Sign in using your email or continue with social accounts
          </p>

          {error && (
            <div
              style={{
                background: '#fee2e2',
                border: '1px solid #fecaca',
                borderRadius: '8px',
                padding: '1rem',
                marginBottom: '1.5rem',
                color: '#dc2626',
                fontSize: '0.9rem',
                textAlign: 'center',
              }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label
                style={{
                  display: 'block',
                  color: '#374151',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                }}
              >
                Email Address
              </label>
              <div style={{ position: 'relative' }}>
                <Mail size={20} style={ICON_STYLE} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  style={{ ...INPUT_STYLE, padding: '0.875rem 1rem 0.875rem 3rem' }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label
                style={{
                  display: 'block',
                  color: '#374151',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                }}
              >
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <Lock size={20} style={ICON_STYLE} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  style={INPUT_STYLE}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#9ca3af',
                    padding: 0,
                  }}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '0.875rem',
                background: '#a6773c',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontSize: '0.95rem',
                fontWeight: '600',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s ease',
                opacity: isLoading ? 0.7 : 1,
              }}
              onMouseEnter={(e) => {
                if (!isLoading) e.target.style.background = '#8f6434';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#a6773c';
              }}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div
            style={{
              marginTop: '2rem',
              textAlign: 'center',
              color: '#6b7280',
              fontSize: '0.9rem',
              marginBottom: '1rem',
            }}
          >
            Or sign in with
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <button
              onClick={() => handleSocialLogin('GitHub')}
              style={SOCIAL_BUTTON_STYLE}
              aria-label="Sign in with GitHub"
            >
              <FaGithub size={20} />
            </button>
            <button
              onClick={() => handleSocialLogin('Google')}
              style={SOCIAL_BUTTON_STYLE}
              aria-label="Sign in with Google"
            >
              <FcGoogle size={20} />
            </button>
            <button
              onClick={() => handleSocialLogin('LinkedIn')}
              style={SOCIAL_BUTTON_STYLE}
              aria-label="Sign in with LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </button>
          </div>

          <div
            style={{
              marginTop: '1rem',
              textAlign: 'center',
              fontSize: '0.9rem',
              color: '#6b7280',
            }}
          >
            Don't have an account?{' '}
            <a
              href="/signup"
              style={{ color: '#a6773c', textDecoration: 'none', fontWeight: '600' }}
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          div[style*='max-width: 480'] {
            max-width: 100vw !important;
            padding: 0 !important;
          }
          div[style*='padding: 2rem'] {
            padding: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}