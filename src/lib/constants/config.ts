export const CONFIG = {
  APP_NAME: 'WealthWise Women',
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  SUPPORT_EMAIL: 'support@wealthwisewomen.com',
  SOCIAL_LINKS: {
    TWITTER: 'https://twitter.com/wealthwisewomen',
    LINKEDIN: 'https://linkedin.com/company/wealthwisewomen',
    INSTAGRAM: 'https://instagram.com/wealthwisewomen',
  },
  CHART_DEFAULTS: {
    COLORS: {
      PRIMARY: 'rgb(147, 51, 234)',
      SECONDARY: 'rgb(107, 114, 128)',
      SUCCESS: 'rgb(34, 197, 94)',
      WARNING: 'rgb(234, 179, 8)',
      DANGER: 'rgb(239, 68, 68)',
    },
  },
} as const;
