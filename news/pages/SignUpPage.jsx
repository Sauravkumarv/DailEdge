import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
import axios from 'axios';
import Logo from '../common/Logo';
import { toast } from 'react-toastify';

// Constants
const THEME = {
  primary: '#a6773c',
  primaryHover: '#8f6434',
  text: '#1a1a1a',
  textSecondary: '#374151',
  textMuted: '#6b7280',
  iconGray: '#9ca3af',
  bgLight: '#f9fafb',
  border: '#e5e7eb',
};

const VALIDATION = {
  MIN_PASSWORD_LENGTH: 8,
};

// Reusable Input Component
const InputField = ({ 
  label, 
  type = 'text', 
  value, 
  onChange, 
  placeholder, 
  icon: Icon,
  showToggle,
  onToggle,
  showValue 
}) => (
  <div style={{ marginBottom: '1.5rem' }}>
    <label style={styles.label}>{label}</label>
    <div style={{ position: 'relative' }}>
      <Icon style={styles.icon} size={20} />
      <input
        type={showToggle ? (showValue ? 'text' : 'password') : type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          ...styles.input,
          padding: showToggle ? '0.875rem 3rem 0.875rem 3rem' : '0.875rem 1rem 0.875rem 3rem',
        }}
      />
      {showToggle && (
        <button type="button" onClick={onToggle} style={styles.toggleButton}>
          {showValue ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
  </div>
);

const ErrorMessage = ({ message }) => (
  <div style={styles.errorBox}>{message}</div>
);

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    setError('');
  };

  const validateForm = () => {
    const { fullName, email, password, confirmPassword } = formData;
    
    if (!fullName || !email || !password || !confirmPassword) {
      return 'Please fill in all fields';
    }
    if (password !== confirmPassword) {
      return 'Passwords do not match';
    }
    if (password.length < VALIDATION.MIN_PASSWORD_LENGTH) {
      return `Password must be at least ${VALIDATION.MIN_PASSWORD_LENGTH} characters`;
    }
    if (!agreedToTerms) {
      return 'Please agree to the terms and conditions';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    try {
      const { fullName, email, password } = formData;
      const response = await axios.post(
        `${import.meta.env.VITE_SIGNUP_API}/signup`,
        { fullName, email, password }
      );

      
     toast.success( 'Account created successfully!');
      setFormData({ fullName: '', email: '', password: '', confirmPassword: '' });
      setAgreedToTerms(false);
    } catch (err) {
      setError(
        err.response?.data?.message || 
        toast.error('Server not responding. Try again later.')
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.card}>
          {/* Logo placeholder - replace with actual Logo component */}
          <div style={styles.logoContainer}>
            {/* <Logo /> */}
            <Logo/>
          </div>

          <h2 style={styles.title}>Create Account</h2>
          <p style={styles.subtitle}>Join thousands of founders staying ahead</p>

          {error && <ErrorMessage message={error} />}

          <form onSubmit={handleSubmit}>
            <InputField
              label="Full Name"
              value={formData.fullName}
              onChange={handleInputChange('fullName')}
              placeholder="John Doe"
              icon={User}
            />

            <InputField
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleInputChange('email')}
              placeholder="you@example.com"
              icon={Mail}
            />

            <InputField
              label="Password"
              value={formData.password}
              onChange={handleInputChange('password')}
              placeholder="••••••••"
              icon={Lock}
              showToggle
              showValue={showPassword}
              onToggle={() => setShowPassword(!showPassword)}
            />

            <InputField
              label="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange('confirmPassword')}
              placeholder="••••••••"
              icon={Lock}
              showToggle
              showValue={showConfirmPassword}
              onToggle={() => setShowConfirmPassword(!showConfirmPassword)}
            />

            <div style={styles.checkboxContainer}>
              <label style={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  style={styles.checkbox}
                />
                <span>
                  I agree to the{' '}
                  <a href="#" style={styles.link}>Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" style={styles.link}>Privacy Policy</a>
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              style={{
                ...styles.submitButton,
                opacity: isLoading ? 0.7 : 1,
                cursor: isLoading ? 'not-allowed' : 'pointer',
              }}
              onMouseEnter={(e) => {
                if (!isLoading) e.target.style.background = THEME.primaryHover;
              }}
              onMouseLeave={(e) => {
                e.target.style.background = THEME.primary;
              }}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div style={styles.footer}>
            Already have an account?{' '}
            <a href="/signin" style={styles.link}>Sign In</a>
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

// Styles object
const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    padding: '1rem',
  },
  wrapper: {
    width: '100%',
    maxWidth: 480,
    padding: '0.5rem',
  },
  card: {
    background: 'white',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem',
    justifyContent: 'center',
    gap: '0.75rem',
  },
  logoPlaceholder: {
    padding: '1rem 2rem',
    background: THEME.primary,
    color: 'white',
    borderRadius: '8px',
    fontWeight: '600',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '700',
    color: THEME.text,
    marginBottom: '0.5rem',
    textAlign: 'center',
  },
  subtitle: {
    color: THEME.textMuted,
    marginBottom: '2rem',
    fontSize: '0.95rem',
    textAlign: 'center',
  },
  errorBox: {
    background: '#fee2e2',
    border: '1px solid #fecaca',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1.5rem',
    color: '#dc2626',
    fontSize: '0.9rem',
    textAlign: 'center',
  },
  label: {
    display: 'block',
    color: THEME.textSecondary,
    fontSize: '0.9rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  icon: {
    position: 'absolute',
    left: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: THEME.iconGray,
  },
  input: {
    width: '100%',
    background: THEME.bgLight,
    border: `1px solid ${THEME.border}`,
    borderRadius: '8px',
    color: THEME.text,
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'all 0.2s ease',
    boxSizing: 'border-box',
  },
  toggleButton: {
    position: 'absolute',
    right: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: THEME.iconGray,
    padding: 0,
  },
  checkboxContainer: {
    marginBottom: '2rem',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'flex-start',
    color: '#4b5563',
    fontSize: '0.875rem',
    cursor: 'pointer',
  },
  checkbox: {
    marginRight: '0.5rem',
    marginTop: '0.2rem',
    cursor: 'pointer',
    accentColor: THEME.primary,
  },
  link: {
    color: THEME.primary,
    textDecoration: 'none',
    fontWeight: '600',
  },
  submitButton: {
    width: '100%',
    padding: '0.875rem',
    background: THEME.primary,
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    fontSize: '0.95rem',
    fontWeight: '600',
    transition: 'all 0.2s ease',
  },
  footer: {
    marginTop: '2rem',
    textAlign: 'center',
    color: THEME.textMuted,
    fontSize: '0.9rem',
  },
};