import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import { DashboardPage } from '@/pages/dashboard/DashboardPage';
import { BudgetingPage } from '@/pages/dashboard/BudgetingPage';
import { GoalsPage } from '@/pages/dashboard/GoalsPage';
import { AdvisorPage } from '@/pages/dashboard/AdvisorPage';
import { AnalyticsPage } from '@/pages/analytics/AnalyticsPage';
import { CommunityPage } from '@/pages/community/CommunityPage';
import { LearningPage } from '@/pages/learning/LearningPage';
import { HomePage } from '@/pages/home/HomePage';
import { AuthLayout } from '@/pages/auth/AuthLayout';
import { LoginPage } from '@/pages/auth/LoginPage';
import { RegisterPage } from '@/pages/auth/RegisterPage';
import { ProfileSetup } from '@/pages/onboarding/ProfileSetup';
import { BankingSetup } from '@/pages/onboarding/BankingSetup';
import { OnboardingComplete } from '@/pages/onboarding/OnboardingComplete';
import { BankingCallback } from '@/pages/onboarding/BankingCallback';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route path="/onboarding">
          <Route path="profile" element={<ProfileSetup />} />
          <Route path="banking" element={<BankingSetup />} />
          <Route path="complete" element={<OnboardingComplete />} />
          <Route path="banking/callback" element={<BankingCallback />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="budgeting" element={<BudgetingPage />} />
          <Route path="goals" element={<GoalsPage />} />
          <Route path="advisor" element={<AdvisorPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="learning" element={<LearningPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
