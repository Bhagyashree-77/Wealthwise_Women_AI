export const ROUTES = {
  HOME: '/',
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password',
  },
  DASHBOARD: {
    ROOT: '/dashboard',
    GOALS: '/dashboard/goals',
    ADVISOR: '/dashboard/advisor',
    CHAT: '/dashboard/chat',
    ANALYTICS: '/dashboard/analytics',
    RISK: '/dashboard/risk',
    COMMUNITY: '/dashboard/community',
  },
} as const;
